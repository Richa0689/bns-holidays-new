import { useState, useEffect } from "react";

const API_URL = "https://api.travelcrm.net";
const WHATSAPP_NUMBER = "917066620673";

const money = (n) =>
  (n || n === 0) && !Number.isNaN(Number(n))
    ? `₹${Math.round(Number(n)).toLocaleString("en-IN")}`
    : "";

/* Builds short, readable summary of selected hotel / room / flight */
function buildSummary(item, type) {
  if (!item) return { title: "", subtitle: "", tags: [], price: "", lines: [], data: {} };

  if (type === "flight") {
    const segments = item.sI || item.segments || [];
    const first = segments[0] || {};
    const last = segments[segments.length - 1] || {};
    const fare = (item.totalPriceList || item.fares || [])[0] || {};
    const priceVal = fare?.fd?.ADULT?.fC?.TF ?? item.price ?? item.totalFare;
    const code = first?.fD?.aI?.code || "";
    const route = `${first?.da?.code || item.from || ""} → ${last?.aa?.code || item.to || ""}`;
    const airline = [first?.fD?.aI?.name, code && first?.fD?.fN ? `(${code}-${first.fD.fN})` : ""]
      .filter(Boolean)
      .join(" ");

    let departureTime = "";
    if (first?.dt) {
      try {
        departureTime = new Date(first.dt).toLocaleString("en-IN", {
          day: "numeric",
          month: "short",
          hour: "2-digit",
          minute: "2-digit",
        });
      } catch {
        departureTime = first.dt;
      }
    }

    const stops = segments.length > 1 ? `${segments.length - 1} stop(s)` : "Non-stop";
    const tags = [airline, stops, item.cabinClass, item.passengers].filter(Boolean);

    const lines = [
      "Inquiry Type: Flight Booking",
      route ? `Route: ${route}` : "",
      airline ? `Airline: ${airline}` : "",
      departureTime ? `Departure: ${departureTime}` : "",
      item.date ? `Date: ${item.date}` : "",
      stops ? `Stops: ${stops}` : "",
      item.passengers ? `Passengers: ${item.passengers}` : "",
      item.cabinClass ? `Cabin Class: ${item.cabinClass}` : "",
      priceVal ? `Estimated Fare: ${money(priceVal)} per adult` : "",
    ].filter(Boolean);

    return {
      title: route || "Flight Booking",
      subtitle: airline || departureTime,
      tags,
      price: money(priceVal),
      priceNote: "per adult (approx)",
      lines,
      data: {
        route,
        airline,
        departure: departureTime || item.date || "",
        stops,
        passengers: item.passengers || "",
        cabin_class: item.cabinClass || "",
        price: money(priceVal),
      },
    };
  }

  // Hotel or specific room selected
  const isRoom = !!(item.displayName || item.roomName || item.roomType);
  const hotelName = item.hotelName || item.name || "Hotel Booking";
  const roomName = isRoom ? (item.displayName || item.roomName || item.roomType || "") : "";
  const mealPlan = item.meal || item.mealPlan || item.boardName || "";
  const address = item.hotelAddress || item.address || "";
  const dates = item.checkIn && item.checkOut ? `${item.checkIn} to ${item.checkOut}` : "";
  const priceVal = isRoom ? (item.price ?? item.totalPrice ?? item.rate) : item.minRate;

  const tags = [
    roomName,
    mealPlan,
    item.guests,
    dates,
    item.starRating ? `${item.starRating} Star` : "",
  ].filter(Boolean);

  const lines = [
    "Inquiry Type: Hotel Booking",
    `Hotel: ${hotelName}`,
    address ? `Location: ${address}` : "",
    roomName ? `Room Type: ${roomName}` : "",
    mealPlan ? `Meal Plan: ${mealPlan}` : "",
    dates ? `Dates: ${dates}` : "",
    item.guests ? `Stay: ${item.guests}` : "",
    priceVal ? `Estimated Rate: ${money(priceVal)}` : "",
    item.hotelId || item.id ? `Hotel ID: ${item.hotelId || item.id}` : "",
  ].filter(Boolean);

  return {
    title: hotelName,
    subtitle: roomName ? `${roomName}${mealPlan ? ` (${mealPlan})` : ""}` : address,
    tags,
    price: money(priceVal),
    priceNote: isRoom ? "per night" : "from / night",
    lines,
    data: {
      hotel: hotelName,
      address,
      room: roomName,
      meal_plan: mealPlan,
      dates,
      guests: item.guests || "",
      price: money(priceVal),
    },
  };
}

export default function BookingRequestModal({ item, type, searchInfo = {}, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", website: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "sent" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  const summary = buildSummary(item, type);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.website) {
      // Honeypot tripped by bot
      setStatus("sent");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      message: form.message.trim(),
      type,
      summary: [
        ...summary.lines,
        form.message.trim() ? `Special Requests / Note: ${form.message.trim()}` : "",
      ].filter(Boolean),
      details: summary.data,
      search: searchInfo,
    };

    try {
      const res = await fetch(`${API_URL}/api/book-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `Server responded with ${res.status}`);
      }
      setStatus("sent");
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong while sending your request.");
      setStatus("error");
    }
  };

  const getWhatsAppUrl = () => {
    const textLines = [
      `Hi BNS Holidays, I would like to inquire about booking:`,
      `*${summary.title}*`,
      summary.subtitle ? `Details: ${summary.subtitle}` : "",
      summary.price ? `Price: ${summary.price}` : "",
      form.name ? `Name: ${form.name}` : "",
      form.phone ? `Phone: ${form.phone}` : "",
      form.message ? `Notes: ${form.message}` : "",
      `Please confirm availability.`,
    ].filter(Boolean).join("\n");

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(textLines)}`;
  };

  return (
    <div className="tui-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="tui-modal" onClick={(e) => e.stopPropagation()}>
        {/* Top-right close button */}
        <button
          type="button"
          className="tui-modal-x-close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {status === "sent" ? (
          <div className="tui-modal-success-box">
            <div className="tui-modal-success-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="tui-modal-success-title">Booking Request Received</h3>
            <p className="tui-modal-success-sub">
              Thank you, <strong>{form.name || "Customer"}</strong>! We have received your booking request for <strong>{summary.title}</strong>. Our travel specialist will verify availability and contact you shortly.
            </p>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="tui-modal-wa-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.969.563 3.813 1.563 5.375L2 22l4.781-1.531c1.5 1 3.313 1.563 5.25 1.563 5.531 0 10.031-4.5 10.031-10.031C22.062 6.5 17.562 2 12.031 2zm5.875 14.375c-.25.688-1.438 1.344-2 1.375-.531.031-1.219.063-3.938-1.063-3.25-1.344-5.344-4.656-5.5-4.875-.156-.188-1.313-1.75-1.313-3.344 0-1.594.844-2.375 1.125-2.688.281-.313.625-.375.844-.375.219 0 .438.031.625.031.219 0 .5-.094.781.594.281.688.969 2.375 1.063 2.531.094.188.156.406.031.656-.094.25-.156.406-.313.594-.188.188-.375.406-.531.563-.188.188-.375.406-.156.781.219.375.969 1.625 2.125 2.656 1.469 1.313 2.719 1.719 3.094 1.906.375.188.594.156.813-.094.219-.25.938-1.094 1.188-1.469.25-.375.5-.313.844-.188.344.125 2.188 1.031 2.562 1.219.375.188.625.281.719.438.094.156.094.906-.156 1.594z"/>
              </svg>
              Chat on WhatsApp for Instant Confirmation
            </a>

            <button type="button" className="tui-modal-close" onClick={onClose}>
              Close Window
            </button>
          </div>
        ) : (
          <>
            <h3>Request to Book</h3>
            <p className="tui-modal-sub">
              Enter your details below. We'll check availability and confirm your booking with the best rates.
            </p>

            {/* Selected item summary */}
            <div className="tui-modal-summary-card">
              <div className="tui-modal-summary-title">{summary.title}</div>
              {summary.subtitle && (
                <div className="tui-modal-summary-sub">{summary.subtitle}</div>
              )}
              {summary.tags.length > 0 && (
                <div className="tui-modal-summary-tags">
                  {summary.tags.map((tag, i) => (
                    <span key={i} className="tui-modal-summary-tag">{tag}</span>
                  ))}
                </div>
              )}
              {summary.price && (
                <div className="tui-modal-summary-price">
                  {summary.price}
                  {summary.priceNote && <span>{summary.priceNote}</span>}
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit}>
              <div className="tui-modal-field">
                <label className="tui-modal-label">
                  Full Name <span>*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div className="tui-modal-field">
                <label className="tui-modal-label">
                  Email Address <span>*</span>
                </label>
                <input
                  required
                  type="email"
                  placeholder="e.g. rahul@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div className="tui-modal-field">
                <label className="tui-modal-label">
                  Phone Number <span>*</span>
                </label>
                <input
                  required
                  type="tel"
                  placeholder="e.g. +91 98765 43210"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>

              <div className="tui-modal-field">
                <label className="tui-modal-label">
                  Special Requests / Message (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Any requirements (bed type, flight timing preference, etc.)"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              {/* Honeypot for spam bots */}
              <input
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
                style={{ position: "absolute", left: "-9999px", opacity: 0 }}
                aria-hidden="true"
              />

              <button
                type="submit"
                className="tui-modal-submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Submitting Request…" : "Submit Booking Request"}
              </button>

              <div className="tui-modal-note">
                No immediate payment required. Our travel specialist will contact you with booking confirmation.
              </div>

              {status === "error" && (
                <div className="tui-modal-error-box">
                  <p style={{ margin: "0 0 6px" }}>{errorMsg}</p>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#166534", fontWeight: 700, textDecoration: "underline" }}
                  >
                    Click here to message us directly on WhatsApp instead
                  </a>
                </div>
              )}
            </form>

            <button type="button" className="tui-modal-close" onClick={onClose}>
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
}