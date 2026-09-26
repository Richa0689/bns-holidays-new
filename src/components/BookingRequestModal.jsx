import { useState } from "react";

const API_URL = "https://api.travelcrm.net";

// ⚠️ This calls POST /api/booking-request on your Flask app. You'll need to
// add that route to app.py (see the earlier "booking_request" example we
// built) — it doesn't exist in your CRM yet, only the search routes do.

export default function BookingRequestModal({ item, type, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "sent" | "error"

  const label = type === "hotel" ? item.name : `${item.from || ""} → ${item.to || ""}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`${API_URL}/api/booking-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type, details: JSON.stringify(item) }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
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
            <input required placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <button type="submit" className="tui-modal-submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Submit request"}
            </button>
            {status === "error" && <p className="tui-error">Something went wrong — please try again.</p>}
          </form>
        )}

        <button className="tui-modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}