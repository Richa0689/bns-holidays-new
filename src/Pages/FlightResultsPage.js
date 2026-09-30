import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import FlightResults from "../components/FlightResults";
import BookingRequestModal from "../components/BookingRequestModal";
import { searchFlights } from "../api/flights";
import "../components/travel-ui.css";

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
  const adults = searchParams.get("adults") || "1";
  const children = searchParams.get("children") || "0";
  const infants = searchParams.get("infants") || "0";
  const cabinClass = searchParams.get("cabinClass") || "ECONOMY";

  useEffect(() => {
    if (!from || !to || !date) return;
    setLoading(true);
    setError(null);
    searchFlights({ from, to, date, adults: Number(adults), children: Number(children), infants: Number(infants), cabinClass })
      .then((data) => {
        console.log("Flight API Response:", data);
        let flightList = [];
        if (Array.isArray(data)) flightList = data;
        else if (data.flights) flightList = data.flights;
        else if (data.results) flightList = data.results;
        else if (data.searchResult?.tripInfos?.ONWARD) flightList = data.searchResult.tripInfos.ONWARD;
        else if (data.data?.searchResult?.tripInfos?.ONWARD) flightList = data.data.searchResult.tripInfos.ONWARD;
        
        setFlights(flightList || []);
      })
      .catch((err) => setError(err.message || "Something went wrong."))
      .finally(() => setLoading(false));
  }, [from, to, date, adults, children, infants, cabinClass]);

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
        onBookClick={(flight) => setSelected(flight)}
        onNewSearch={() => navigate("/flights")}
      />
      {selected && (
        <BookingRequestModal item={selected} type="flight" onClose={() => setSelected(null)} />
      )}
    </>
  );
}
