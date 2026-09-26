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

  return (
    <div style={{ maxWidth: 1080, margin: "0 auto", padding: "24px" }}>
      <button
        onClick={() => navigate("/flights")}
        style={{ background: "none", border: "none", color: "var(--mist)", fontSize: 14, cursor: "pointer", marginBottom: 12 }}
      >
        ← New search
      </button>

      <div className="tui-results-head">
        <h2 className="serif">Flights, {from} → {to}</h2>
        <span className="tui-results-count">{flights.length} flights found</span>
      </div>

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
  );
}
