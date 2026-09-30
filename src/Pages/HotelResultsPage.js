import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import HotelResults from "../components/HotelResults";
import HotelRoomCategories from "../components/HotelRoomCategories";
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
  const [roomsHotel, setRoomsHotel] = useState(null);
  const [hotelDetailTab, setHotelDetailTab] = useState("overview");

  const city = searchParams.get("city") || "";
  const country = searchParams.get("country") || "India";
  const checkIn = searchParams.get("checkIn") || "";
  const checkOut = searchParams.get("checkOut") || "";
  const adults = searchParams.get("adults") || "2";
  const children = searchParams.get("children") || "0";
  const rooms = searchParams.get("rooms") || "1";

  useEffect(() => {
    if (!city || !checkIn || !checkOut) return;
    setLoading(true);
    setError(null);
    searchHotelsByLocation({ city, country, checkIn, checkOut, adults: Number(adults), children: Number(children), rooms: Number(rooms) })
      .then(setHotels)
      .catch((err) => setError(err.message || "Something went wrong."))
      .finally(() => setLoading(false));
  }, [city, country, checkIn, checkOut, adults, children, rooms]);

  const formatDate = (d) => {
    if (!d || d === "null" || d === "undefined") return "";
    try {
      return new Intl.DateTimeFormat("en", { weekday: "short", month: "short", day: "numeric", timeZone: "UTC" }).format(new Date(`${d}T12:00:00Z`));
    } catch {
      return d;
    }
  };
  const readableCheckIn = formatDate(checkIn);
  const readableCheckOut = formatDate(checkOut);
  const dateStr = readableCheckIn && readableCheckOut ? `${readableCheckIn} – ${readableCheckOut}` : "";
  const guestStr = `${rooms} Room${Number(rooms) > 1 ? "s" : ""} | ${adults} Adult${Number(adults) > 1 ? "s" : ""}${Number(children) > 0 ? `, ${children} Child${Number(children) > 1 ? "ren" : ""}` : ""}`;

  return (
    <div className="tui-hotel-results-page" style={{ background: "#f8f9fa", minHeight: "100vh", paddingBottom: "40px" }}>
      {/* Edge-to-edge dark blue header */}
      <header className="tui-flight-search-summary">
        <div><span>Destination</span><strong>{city || "Any"}, {country}</strong></div>
        {dateStr && <div><span>Dates</span><strong>{dateStr}</strong></div>}
        <div><span>Rooms &amp; Guests</span><strong>{guestStr}</strong></div>
        <button type="button" onClick={() => navigate("/hotels")}>New search</button>
      </header>

      {/* Main content wrapper */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 16px" }}>

      <HotelResults
        hotels={hotels}
        loading={loading}
        error={error}
        onBookClick={(hotel) => setSelected(hotel)}
        onViewRooms={(hotel) => { setRoomsHotel(hotel); setHotelDetailTab("rooms"); }}
        onViewDetails={(hotel) => { setRoomsHotel(hotel); setHotelDetailTab("overview"); }}
      />

      {roomsHotel && <HotelRoomCategories hotel={roomsHotel} checkIn={checkIn} checkOut={checkOut} adults={Number(adults)} children={Number(children)} roomCount={Number(rooms)} initialTab={hotelDetailTab} onClose={() => setRoomsHotel(null)} onBookRoom={(room) => { setRoomsHotel(null); setSelected(room); }} />}

      {selected && (
        <BookingRequestModal item={selected} type="hotel" onClose={() => setSelected(null)} />
      )}
      </div>
    </div>
  );
}
