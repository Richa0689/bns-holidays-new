import React, { useState } from "react";
import "./QueryBox.css";

const QueryBox = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleFocus = (e) => e.target.classList.add("input-focused");
  const handleBlur  = (e) => e.target.classList.remove("input-focused");

  const handleSend = () => {
    if (!form.name || !form.message) return alert("Please fill in your name and message.");
    const phoneNumber = "917066620673";
    const text =
      `Hello! I have a travel query 🌍%0A%0A` +
      `*Name:* ${form.name}%0A` +
      `*Email:* ${form.email}%0A` +
      `*Phone:* ${form.phone}%0A` +
      `*Message:* ${form.message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="query-section">
      <h2 className="query-heading">Plan Your Dream Trip</h2>
      <p className="query-subheading">Fill in your details and we'll get back to you on WhatsApp.</p>

      <div className="query-card">
        <div className="query-form">

          <div className="query-row">
            <div className="field-wrap">
              <label className="field-label">Full Name *</label>
              <input
                className="query-input"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <div className="field-wrap">
              <label className="field-label">Phone</label>
              <input
                className="query-input"
                name="phone"
                placeholder="+91 0000000000"
                value={form.phone}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
          </div>

          <div className="field-wrap-full">
            <label className="field-label">Email Address</label>
            <input
              className="query-input"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          <div className="field-wrap-full">
            <label className="field-label">Your Query *</label>
            <textarea
              className="query-textarea"
              name="message"
              placeholder="I'm interested in a 7-day Kerala tour for 2 people in December..."
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          <div className="query-divider" />

          <button className={`query-btn ${sent ? "query-btn--sent" : ""}`} onClick={handleSend}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.528 5.855L.057 23.928a.5.5 0 00.611.61l6.044-1.47A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.523-5.188-1.427l-.372-.22-3.846.935.954-3.74-.242-.386A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            {sent ? "Message Sent! ✓" : "Send via WhatsApp"}
          </button>

        </div>

      </div>
    </section>
  );
};

export default QueryBox;