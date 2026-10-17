import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import FlightResults from "../components/FlightResults";
import BookingRequestModal from "../components/BookingRequestModal";
import { searchFlights } from "../api/flights";
import "../components/travel-ui.css";

function getMinFare(flight) {
  const fares = flight?.totalPriceList || flight?.fares || [];
  const prices = fares
    .map((fare) =>
      Number(
        fare?.fd?.ADULT?.fC?.TF ||
        fare?.price ||
        fare?.totalFare ||
        fare?.fd?.ADULT?.fC?.NF ||
        0
      )
    )
    .filter((p) => p > 0);
  return prices.length ? Math.min(...prices) : Number(flight?.price || flight?.totalFare || 0);
}

function combineMultiCityLegs(legs) {
  if (!legs.length) return [];
  const sortedLegs = legs.map((leg) =>
    [...leg].sort((a, b) => getMinFare(a) - getMinFare(b))
  );

  const limitedLegs = sortedLegs.map((leg) => leg.slice(0, 15));

  let combos = limitedLegs[0].map((f) => ({
    legs: [f],
    sI: [...(f.sI || f.segments || [])],
    minPrice: getMinFare(f),
    baseFare: Number(f.totalPriceList?.[0]?.fd?.ADULT?.fC?.BF || 0),
    tax: Number(f.totalPriceList?.[0]?.fd?.ADULT?.fC?.TAF || 0),
    primaryFare: f.totalPriceList?.[0],
  }));

  for (let i = 1; i < limitedLegs.length; i += 1) {
    const currentLeg = limitedLegs[i];
    const nextCombos = [];
    const cheapestInLeg = currentLeg[0];

    for (const combo of combos) {
      const prevAirline =
        combo.legs[combo.legs.length - 1]?.sI?.[0]?.fD?.aI?.code ||
        combo.legs[combo.legs.length - 1]?.segments?.[0]?.airline?.code;

      const sameAirline = currentLeg.find(
        (f) =>
          (f.sI?.[0]?.fD?.aI?.code || f.segments?.[0]?.airline?.code) ===
          prevAirline
      );

      const toPair = [cheapestInLeg];
      if (sameAirline && sameAirline !== cheapestInLeg) {
        toPair.push(sameAirline);
      }
      for (let k = 1; k < Math.min(4, currentLeg.length); k += 1) {
        if (!toPair.includes(currentLeg[k])) {
          toPair.push(currentLeg[k]);
        }
      }

      for (const flight of toPair) {
        const fare = flight.totalPriceList?.[0];
        nextCombos.push({
          legs: [...combo.legs, flight],
          sI: [...combo.sI, ...(flight.sI || flight.segments || [])],
          minPrice: combo.minPrice + getMinFare(flight),
          baseFare: combo.baseFare + Number(fare?.fd?.ADULT?.fC?.BF || 0),
          tax: combo.tax + Number(fare?.fd?.ADULT?.fC?.TAF || 0),
          primaryFare: combo.primaryFare || fare,
        });
      }
    }
    combos = nextCombos;
  }

  combos.sort((a, b) => a.minPrice - b.minPrice);

  return combos.slice(0, 60).map((combo, index) => {
    const totalTF = combo.minPrice;
    const totalBF = combo.baseFare;
    const totalTAF = combo.tax || Math.max(0, totalTF - totalBF);
    const adultFare = combo.primaryFare?.fd?.ADULT || {};

    return {
      id: `multi-combo-${index}`,
      airFlowType: "SEARCH",
      isMultiCityCombo: true,
      legs: combo.legs,
      sI: combo.sI,
      totalPriceList: [
        {
          id: `fare-multi-${index}`,
          fareIdentifier: "Combined Multi-city Fare",
          fareType: "COMBO",
          fd: {
            ADULT: {
              fC: {
                TF: totalTF,
                BF: totalBF,
                TAF: totalTAF,
              },
              bI: {
                cB: adultFare.bI?.cB || "7 Kg",
                iB: adultFare.bI?.iB || "15 Kg",
              },
              rT: combo.legs.every((l) => l.totalPriceList?.[0]?.fd?.ADULT?.rT === 1) ? 1 : 0,
              cc: adultFare.cc || "ECONOMY",
              cB: adultFare.cB,
              fB: adultFare.fB,
            },
          },
        },
      ],
    };
  });
}

function extractFlights(data, tripType) {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.flights)) return data.flights;
  if (Array.isArray(data?.results)) return data.results;

  const tripInfos = data?.searchResult?.tripInfos || data?.data?.searchResult?.tripInfos;
  if (!tripInfos) return [];

  if (tripType === "multicity") {
    // 1. Unified COMBO flights
    if (Array.isArray(tripInfos.COMBO) && tripInfos.COMBO.length > 0) {
      return tripInfos.COMBO;
    }

    // 2. Individual legs indexed by numbers ('0', '1', etc.)
    const legKeys = Object.keys(tripInfos)
      .filter((k) => k.trim() !== "" && !Number.isNaN(Number(k)))
      .sort((a, b) => Number(a) - Number(b));

    if (legKeys.length > 0) {
      const legs = legKeys.map((k) => (Array.isArray(tripInfos[k]) ? tripInfos[k] : []));
      if (legs.some((leg) => leg.length === 0)) return [];
      return combineMultiCityLegs(legs);
    }
  }

  if (Array.isArray(tripInfos.ONWARD) && tripInfos.ONWARD.length > 0) return tripInfos.ONWARD;
  if (Array.isArray(tripInfos.COMBO) && tripInfos.COMBO.length > 0) return tripInfos.COMBO;

  return [];
}

export default function FlightResultsPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);

  const from = searchParams.get("from") || "";
  const to = searchParams.get("to") || "";
  const date = searchParams.get("date") || "";
  const tripType = searchParams.get("tripType") || "oneway";
  const returnDate = searchParams.get("returnDate") || "";
  const routesParam = searchParams.get("routes") || "";
  const routes = useMemo(() => {
    try {
      const parsedRoutes = JSON.parse(routesParam);
      if (Array.isArray(parsedRoutes)) {
        const validRoutes = parsedRoutes.filter((route) => route?.from && route?.to && route?.date);
        if (validRoutes.length) return validRoutes;
      }
    } catch (parseError) {
      if (routesParam) console.error("Invalid flight route details in search URL.", parseError);
    }
    return from && to && date ? [{ from, to, date }] : [];
  }, [routesParam, from, to, date]);
  const adults = searchParams.get("adults") || "1";
  const children = searchParams.get("children") || "0";
  const infants = searchParams.get("infants") || "0";
  const cabinClass = searchParams.get("cabinClass") || "ECONOMY";

  useEffect(() => {
    if (!routes.length) return;
    setLoading(true);
    setError(null);
    searchFlights({ from, to, date, routes, adults: Number(adults), children: Number(children), infants: Number(infants), cabinClass })
      .then((data) => {
        console.log("Flight API Response:", data);
        const flightList = extractFlights(data, tripType);
        setFlights(flightList || []);
      })
      .catch((err) => setError(err.message || "Something went wrong."))
      .finally(() => setLoading(false));
  }, [from, to, date, routes, routesParam, adults, children, infants, cabinClass, tripType]);

  return (
    <>
      <FlightResults
        flights={flights}
        loading={loading}
        error={error}
        from={from}
        to={to}
        date={date}
        adults={adults}
        children={children}
        infants={infants}
        cabinClass={cabinClass}
        tripType={tripType}
        returnDate={returnDate}
        routes={routes}
        onBookClick={(flight) => setSelected({
          ...flight,
          date,
          passengers: `${adults} Adult(s)${Number(children) > 0 ? `, ${children} Child(ren)` : ""}${Number(infants) > 0 ? `, ${infants} Infant(s)` : ""}`,
          cabinClass,
        })}
        onNewSearch={() => navigate("/flights")}
      />
      {selected && (
        <BookingRequestModal item={selected} type="flight" onClose={() => setSelected(null)} />
      )}
    </>
  );
}
