import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import HotelResults from "../components/HotelResults";
import BookingRequestModal from "../components/BookingRequestModal";
import { searchHotelsByLocation } from "../api/hotels";
import "../components/travel-ui.css";

export default function HotelResultsPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);

  const city = searchParams.get("city") || "";
  const country = searchParams.get("country") || "India";
  const checkIn = searchParams.get("checkIn") || "";
  const checkOut = searchParams.get("checkOut") || "";
  const adults = searchParams.get("adults") || "2";

  useEffect(() => {
    if (!city || !checkIn || !checkOut) return;
    setLoading(true);
    setError(null);
    searchHotelsByLocation({ city, country, checkIn, checkOut, adults: Number(adults) })
      .then(setHotels)
      .catch((err) => setError(err.message || "Something went wrong."))
      .finally(() => setLoading(false));
  }, [city, country, checkIn, checkOut, adults]);

  return (
    <div style={{ maxWidth: 1080, margin: "0 auto", padding: "24px" }}>
      <button
        onClick={() => navigate("/hotels")}
        style={{ background: "none", border: "none", color: "var(--mist)", fontSize: 14, cursor: "pointer", marginBottom: 12 }}
      >
        ← New search
      </button>

      <div className="tui-results-head">
        <h2 className="serif">Hotels in {city}</h2>
        <span className="tui-results-count">{hotels.length} stays found</span>
      </div>

      <HotelResults
        hotels={hotels}
        loading={loading}
        error={error}
        onBookClick={(hotel) => setSelected(hotel)}
      />

      {selected && (
        <BookingRequestModal item={selected} type="hotel" onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
