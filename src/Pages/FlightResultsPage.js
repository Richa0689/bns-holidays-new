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
      .then((data) => setFlights(data.flights || data.results || []))
      .catch((err) => setError(err.message || "Something went wrong."))
      .finally(() => setLoading(false));
  }, [from, to, date, adults, children, infants, cabinClass]);

  const cabinLabel = cabinClass === "PREMIUM_ECONOMY" ? "PREMIUM ECONOMY" : (cabinClass || "ECONOMY").replace("_", " ");
  const paxLabel = `${adults} Adult${Number(adults) > 1 ? "s" : ""}${Number(children) ? `, ${children} Child${Number(children) > 1 ? "ren" : ""}` : ""}${Number(infants) ? `, ${infants} Infant${Number(infants) > 1 ? "s" : ""}` : ""}`;
  let readableDate = "";
  try {
    if (date) readableDate = new Intl.DateTimeFormat("en", { weekday: "short", month: "short", day: "numeric", timeZone: "UTC" }).format(new Date(`${date}T12:00:00Z`));
  } catch (e) {
    readableDate = date;
  }

  return (
    <div className="tui-flight-results-page" style={{ background: "#f8f9fa", minHeight: "100vh", paddingBottom: "40px" }}>
      <header className="tui-flight-search-summary">
        <div><span>Route</span><strong>{from} → {to}</strong></div>
        <div><span>Departure date</span><strong>{readableDate}</strong></div>
        <div><span>Passengers &amp; class</span><strong>{paxLabel} | {cabinLabel}</strong></div>
        <button type="button" onClick={() => navigate("/flights")}>New search</button>
      </header>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 16px" }}>

      <FlightResults
        flights={flights}
        loading={loading}
        error={error}
        onBookClick={(flight) => setSelected(flight)}
      />

      {selected && (
        <BookingRequestModal item={selected} type="flight" onClose={() => setSelected(null)} />
      )}
      </div>
    </div>
  );
}
