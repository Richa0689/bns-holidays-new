import { useState } from "react";

const API_URL = "https://api.travelcrm.net";

const money = (n) => (n || n === 0) && !Number.isNaN(Number(n)) ? `₹${Math.round(Number(n)).toLocaleString("en-IN")}` : "";

/* Builds a short, readable summary of the selected hotel / room / flight
   (instead of sending the whole raw API object, which can be huge). */
function buildSummary(item, type) {
  if (!item) return {};

  if (type === "flight") {
    const segments = item.sI || item.segments || [];
    const first = segments[0] || {};
    const last = segments[segments.length - 1] || {};
    const fare = (item.totalPriceList || item.fares || [])[0] || {};
    const price = fare?.fd?.ADULT?.fC?.TF ?? item.price ?? item.totalFare;
    const code = first?.fD?.aI?.code || "";
    return {
      route: `${first?.da?.code || item.from || ""} → ${last?.aa?.code || item.to || ""}`,
      airline: [first?.fD?.aI?.name, code && first?.fD?.fN ? `(${code}-${first.fD.fN})` : ""].filter(Boolean).join(" "),
      departure: first?.dt || "",
      arrival: last?.at || "",
      stops: segments.length > 1 ? `${segments.length - 1} stop(s)` : "Non-stop",
      price_per_adult: money(price),
    };
  }

  // Hotel card OR a room chosen inside the hotel details popup
  const isRoom = !!(item.displayName || item.roomName || item.roomType || item.hotelName);
  return {
    hotel: item.hotelName || item.name || "",
    address: item.hotelAddress || item.address || "",
    star_rating: item.starRating ? `${item.starRating} star` : "",
    room: isRoom ? (item.displayName || item.roomName || item.roomType || "") : "",
    meal_plan: item.meal || item.mealPlan || item.boardName || "",
    price: money(isRoom ? (item.price ?? item.totalPrice ?? item.rate) : item.minRate),
    hotel_id: item.hotelId || item.id || "",
  };
}

export default function BookingRequestModal({ item, type, searchInfo = {}, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", website: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "sent" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  const summary = buildSummary(item, type);
  const label = type === "hotel" ? (summary.hotel || "Hotel") : summary.route || "Flight";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch(`${API_URL}/api/book-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type, summary, search: searchInfo }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "");
      }
      setStatus("sent");
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong — please try again.");
      setStatus("error");
    }
  };

  return (
    <div className="tui-modal-overlay" onClick={onClose}>
      <div className="tui-modal" onClick={(e) => e.stopPropagation()}>
        <h3>Request to book</h3>
        <p className="tui-modal-sub">{label}</p>

        {status === "sent" ? (
          <p className="tui-modal-success">Request received! We'll contact you shortly to confirm.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input required placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <input required type="tel" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <input placeholder="Message (optional)" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            {/* Honeypot – hidden from real users, bots fill it */}
            <input tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} style={{ position: "absolute", left: "-9999px", opacity: 0 }} aria-hidden="true" />
            <button type="submit" className="tui-modal-submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Submit request"}
            </button>
            {status === "error" && <p className="tui-error">{errorMsg || "Something went wrong — please try again."}</p>}
          </form>
        )}

        <button className="tui-modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}