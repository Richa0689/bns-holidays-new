import { useMemo, useState } from "react";
import SearchProgress from "./SearchProgress";

const TIME_BUCKETS = [["00–06", 0, 6], ["06–12", 6, 12], ["12–18", 12, 18], ["18–24", 18, 24]];

function get(obj, path, fallback = undefined) {
  const value = path.split(".").reduce((current, key) => current == null ? undefined : current[key], obj);
  return value == null ? fallback : value;
}

function firstValue(obj, paths, fallback) {
  for (const path of paths) {
    const value = get(obj, path);
    if (value !== undefined && value !== null && value !== "") return value;
  }
  return fallback;
}

function timeText(value) {
  if (typeof value !== "string") return "--:--";
  return value.match(/(?:T|\s)(\d{2}:\d{2})/)?.[1] || value;
}

function minuteValue(value) {
  if (typeof value === "number") return value;
  if (typeof value !== "string") return 0;
  const hours = Number(value.match(/(\d+)\s*h/i)?.[1] || 0);
  const minutes = Number(value.match(/(\d+)\s*m/i)?.[1] || 0);
  return hours * 60 + minutes;
}

function farePrice(fare) {
  return Number(firstValue(fare, ["price", "totalFare", "fare.totalFare", "fd.ADULT.fC.TF", "fd.ADULT.fC.NF", "fd.ADULT.fC.BF"], 0)) || 0;
}

function normalizeFlight(flight, index) {
  const segments = flight.sI || flight.segments || [];
  const first = segments[0] || {};
  const last = segments[segments.length - 1] || first;
  const fares = flight.totalPriceList || flight.fares || flight.fareOptions || [];
  const fareList = Array.isArray(fares) ? fares : [];
  const prices = fareList.map(farePrice).filter((price) => price > 0);
  const departure = firstValue(flight, ["depTime", "departureTime", "sI.0.dt", "sI.0.da.time", "segments.0.dep.time"], first.dt || first.da?.time || "");
  const arrival = firstValue(flight, ["arrTime", "arrivalTime", `sI.${segments.length - 1}.at`, `sI.${segments.length - 1}.aa.time`], last.at || last.aa?.time || "");
  const airline = firstValue(flight, ["airline.name", "airlineName", "sI.0.fD.aI.name", "segments.0.airline.name"], first.fD?.aI?.name || "Airline");
  const code = firstValue(flight, ["airline.code", "airlineCode", "sI.0.fD.aI.code", "segments.0.airline.code"], first.fD?.aI?.code || "FL");
  const logoUrl = firstValue(flight, ["airline.logo", "airline.logoUrl", "airline.image", "airlineLogo", "logoUrl", "sI.0.fD.aI.logo"], "") || `https://api.travelcrm.net/static/airline-logos/images/${String(code).toUpperCase()}.png`;
  const flightNo = firstValue(flight, ["flightNumber", "flightNo", "sI.0.fD.fN"], first.fD?.fN || "");
  const fromCode = firstValue(flight, ["from", "origin", "sI.0.da.code", "segments.0.or.code"], first.da?.code || "");
  const toCode = firstValue(flight, ["to", "destination", `sI.${segments.length - 1}.aa.code`, "segments.0.ds.code"], last.aa?.code || "");
  const duration = firstValue(flight, ["duration", "totalDuration"], flight.duration || segments.reduce((total, segment) => total + minuteValue(segment.duration), 0));
  const stopCount = Number(firstValue(flight, ["stops", "stopCount"], Math.max(0, segments.length - 1))) || 0;
  const departureHour = Number(timeText(departure).slice(0, 2)) || 0;
  const arrivalHour = Number(timeText(arrival).slice(0, 2)) || 0;
  return {
    raw: flight,
    id: flight.id || flight.sI?.map((segment) => segment.id).join("-") || `${code}-${flightNo}-${index}`,
    airline: String(airline), code: String(code), logoUrl: String(logoUrl), flightNo: String(flightNo),
    departure: timeText(departure), arrival: timeText(arrival), fromCode, toCode,
    fromTerminal: first.da?.terminal || "", toTerminal: last.aa?.terminal || "",
    departureHour, arrivalHour, duration, durationMinutes: minuteValue(duration), stopCount,
    fares: fareList,
    price: prices.length ? Math.min(...prices) : Number(firstValue(flight, ["price", "totalFare", "fare.totalFare"], 0)) || 0,
  };
}

function stopLabel(count) { return count === 0 ? "Non-stop" : count === 1 ? "1 Stop" : count === 2 ? "2 Stops" : "3+"; }

export default function FlightResults({ flights, loading, error, onBookClick, from, to, date, adults, children, infants, cabinClass, tripType, onNewSearch }) {
  const [maxPrice, setMaxPrice] = useState(null);
  const [selectedStops, setSelectedStops] = useState([]);
  const [departBuckets, setDepartBuckets] = useState([]);
  const [arrivalBuckets, setArrivalBuckets] = useState([]);
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [sortBy, setSortBy] = useState("price");
  const [openFare, setOpenFare] = useState(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const normalized = useMemo(() => flights.map(normalizeFlight), [flights]);
  const prices = normalized.map((flight) => flight.price).filter((price) => price > 0);
  const minPrice = prices.length ? Math.floor(Math.min(...prices)) : 0;
  const maxAvailablePrice = prices.length ? Math.ceil(Math.max(...prices)) : 100000;
  const priceLimit = maxPrice ?? maxAvailablePrice;
  const airlines = useMemo(() => {
    const counts = new Map();
    normalized.forEach((flight) => counts.set(flight.airline, (counts.get(flight.airline) || 0) + 1));
    return [...counts.entries()].sort((a, b) => b[1] - a[1]);
  }, [normalized]);

  const visibleFlights = useMemo(() => normalized.filter((flight) => {
    const inTimeBucket = (hour, buckets) => !buckets.length || buckets.some((label) => {
      const bucket = TIME_BUCKETS.find(([name]) => name === label);
      return bucket && hour >= bucket[1] && hour < bucket[2];
    });
    return (!flight.price || flight.price <= priceLimit)
      && (!selectedStops.length || selectedStops.includes(stopLabel(flight.stopCount)))
      && inTimeBucket(flight.departureHour, departBuckets)
      && inTimeBucket(flight.arrivalHour, arrivalBuckets)
      && (!selectedAirlines.length || selectedAirlines.includes(flight.airline));
  }).sort((a, b) => {
    if (sortBy === "duration") return a.durationMinutes - b.durationMinutes;
    if (sortBy === "departure") return a.departure.localeCompare(b.departure);
    if (sortBy === "arrival") return a.arrival.localeCompare(b.arrival);
    return a.price - b.price;
  }), [normalized, priceLimit, selectedStops, departBuckets, arrivalBuckets, selectedAirlines, sortBy]);

  const toggle = (items, setter, item) => setter(items.includes(item) ? items.filter((value) => value !== item) : [...items, item]);
  const cabinLabel = cabinClass === "PREMIUM_ECONOMY" ? "PREMIUM ECONOMY" : (cabinClass || "ECONOMY").replaceAll("_", " ");
  const paxLabel = `${adults || 1} Adult${Number(adults) === 1 ? "" : "s"}${Number(children) ? `, ${children} Child${Number(children) === 1 ? "" : "ren"}` : ""}${Number(infants) ? `, ${infants} Infant${Number(infants) === 1 ? "" : "s"}` : ""}`;
  const readableDate = date ? new Intl.DateTimeFormat("en", { weekday: "short", month: "short", day: "numeric", timeZone: "UTC" }).format(new Date(`${date}T12:00:00Z`)) : "";

  if (loading) return <SearchProgress type="flight" />;
  if (error) return <p className="tui-error">{error}</p>;

  return <div className="tui-flight-results-page">
    <header className="tui-flight-search-summary">
      <div><span>Route</span><strong>{from} → {to}</strong></div>
      <div><span>Departure date</span><strong>{readableDate}</strong></div>
      <div><span>Passengers &amp; class</span><strong>{paxLabel} | {cabinLabel}</strong></div>
      <button type="button" onClick={onNewSearch}>New search</button>
    </header>

    {!flights.length ? <p className="tui-empty">No flights found. Try different dates.</p> : <div className="tui-flight-results-layout">
      <aside className={`tui-flight-filters${mobileFiltersOpen ? " is-open" : ""}`} aria-label="Filter flights">
        <div className="tui-flight-filter-heading"><h3>Filters</h3><button type="button" className="tui-flight-mobile-toggle" aria-expanded={mobileFiltersOpen} onClick={() => setMobileFiltersOpen((open) => !open)}>{mobileFiltersOpen ? "Hide filters" : "Show filters"} <span>{mobileFiltersOpen ? "−" : "+"}</span></button></div>
        <div className="tui-flight-filter-content">
          <section className="tui-flight-filter-section"><h4>Price</h4><input aria-label="Maximum flight price" type="range" min={minPrice} max={maxAvailablePrice || minPrice + 1} step={Math.max(1, Math.round((maxAvailablePrice - minPrice) / 100))} value={Math.min(priceLimit, maxAvailablePrice)} onChange={(event) => setMaxPrice(Number(event.target.value))} /><div className="tui-flight-price-labels"><span>₹{minPrice.toLocaleString("en-IN")}</span><span>₹{priceLimit.toLocaleString("en-IN")}</span></div></section>
          <section className="tui-flight-filter-section"><h4>Stops</h4><div className="tui-flight-chip-options">{["Non-stop", "1 Stop", "2 Stops", "3+"].map((stop) => <button type="button" key={stop} aria-pressed={selectedStops.includes(stop)} className={selectedStops.includes(stop) ? "selected" : ""} onClick={() => toggle(selectedStops, setSelectedStops, stop)}>{stop}</button>)}</div></section>
          <section className="tui-flight-filter-section"><h4>Departure time</h4><div className="tui-flight-chip-options">{TIME_BUCKETS.map(([label]) => <button type="button" key={label} aria-pressed={departBuckets.includes(label)} className={departBuckets.includes(label) ? "selected" : ""} onClick={() => toggle(departBuckets, setDepartBuckets, label)}>{label}</button>)}</div></section>
          <section className="tui-flight-filter-section"><h4>Arrival time</h4><div className="tui-flight-chip-options">{TIME_BUCKETS.map(([label]) => <button type="button" key={label} aria-pressed={arrivalBuckets.includes(label)} className={arrivalBuckets.includes(label) ? "selected" : ""} onClick={() => toggle(arrivalBuckets, setArrivalBuckets, label)}>{label}</button>)}</div></section>
          <section className="tui-flight-filter-section"><h4>Airlines</h4><div className="tui-flight-airline-options">{airlines.map(([airline, count]) => <label key={airline}><input type="checkbox" checked={selectedAirlines.includes(airline)} onChange={() => toggle(selectedAirlines, setSelectedAirlines, airline)} /><span>{airline} ({count})</span></label>)}</div></section>
          <button type="button" className="tui-flight-clear-filters" onClick={() => { setMaxPrice(maxAvailablePrice); setSelectedStops([]); setDepartBuckets([]); setArrivalBuckets([]); setSelectedAirlines([]); setSortBy("price"); }}>Clear filters</button>
        </div>
      </aside>

      <section className="tui-flight-results-main">
        <div className="tui-flight-results-toolbar"><strong>Found {visibleFlights.length} Flights from {from} to {to}</strong><div className="tui-flight-sort" aria-label="Sort flights">{[["price", "Price"], ["duration", "Duration"], ["departure", "Departure"], ["arrival", "Arrival"]].map(([value, label]) => <button type="button" key={value} className={sortBy === value ? "selected" : ""} onClick={() => setSortBy(value)}>Sort: {label}</button>)}</div></div>
        <div className="tui-flight-list">
          {visibleFlights.map((flight) => <article className="tui-flight-result-card" key={flight.id}>
            <div className="tui-flight-airline"><div className={`tui-flight-logo airline-${flight.code.toLowerCase()}`}><img src={flight.logoUrl} alt={`${flight.airline} logo`} loading="lazy" onError={(event) => { event.currentTarget.style.display = "none"; }} /><span>{flight.code.slice(0, 2)}</span></div><strong>{flight.airline}</strong><span>{flight.flightNo}</span></div>
            <div className="tui-flight-itinerary">
              <div className="tui-flight-timepoint"><strong>{flight.departure}</strong><span>{flight.fromCode}{flight.fromTerminal ? ` · Terminal ${flight.fromTerminal}` : ""}</span></div>
              <div className="tui-flight-timeline"><span>{typeof flight.duration === "number" ? `${Math.floor(flight.duration / 60)}h ${flight.duration % 60}m` : flight.duration || "Duration unavailable"}</span><div><i /><b>✈</b><i /></div><em className={flight.stopCount ? "stops" : "nonstop"}>{stopLabel(flight.stopCount)}</em></div>
              <div className="tui-flight-timepoint"><strong>{flight.arrival}</strong><span>{flight.toCode}{flight.toTerminal ? ` · Terminal ${flight.toTerminal}` : ""}</span></div>
            </div>
            <div className="tui-flight-fare-summary"><span>Starting from</span><strong>₹{Math.round(flight.price).toLocaleString("en-IN")}</strong><button type="button" aria-expanded={openFare === flight.id} onClick={() => setOpenFare((id) => id === flight.id ? null : flight.id)}>View {flight.fares.length || 1} {flight.fares.length === 1 ? "Fare" : "Fares"} <span>{openFare === flight.id ? "⌃" : "⌄"}</span></button></div>
            {openFare === flight.id && <div className="tui-flight-fare-options">{(flight.fares.length ? flight.fares : [{ price: flight.price }]).map((fare, index) => {
              const price = farePrice(fare) || flight.price;
              const label = fare.fareIdentifier || fare.fareType || fare.fareName || `Fare ${index + 1}`;
              return <div className="tui-flight-fare-option" key={`${label}-${index}`}><div><strong>{label}</strong><span>{fare.cabinClass || cabinLabel} · {fare.refundable ? "Refundable" : "Fare rules apply"}</span></div><strong>₹{Math.round(price).toLocaleString("en-IN")}</strong><button type="button" onClick={() => onBookClick({ ...flight.raw, selectedFare: fare })}>Select fare</button></div>;
            })}</div>}
          </article>)}
        </div>
      </section>
    </div>}
  </div>;
}
