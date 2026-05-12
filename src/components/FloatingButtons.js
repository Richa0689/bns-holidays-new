import { useState } from "react";
import "./FloatingButtons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faPencil } from "@fortawesome/free-solid-svg-icons";

const initialForm = {
  name: "", mobile: "", email: "", desc: "",
  destination: "", adults: "", children: "", date: "", budget: "",
};

export default function FloatingButtons() {
  const [open, setOpen] = useState(false);
  const [showExtra, setShowExtra] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
  if (!form.name.trim() || !form.mobile.trim() || !form.email.trim()) {
    setError("Please fill in Name, Mobile and Email.");
    return;
  }
  setError("");

  // Build WhatsApp message
  const message = `*New Enquiry from BNS Holidays*
*Name:* ${form.name}
*Mobile:* +91 ${form.mobile}
*Email:* ${form.email}
*Description:* ${form.desc || "N/A"}
${showExtra ? `*Destination:* ${form.destination || "N/A"}
*Adults:* ${form.adults || "N/A"}
*Children:* ${form.children || "N/A"}
*Travel Date:* ${form.date || "N/A"}
*Budget:* ${form.budget || "N/A"}` : ""}`;

  const phoneNumber = "917066620673"; // your existing WhatsApp number
  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");

  // Show success and reset
  setSubmitted(true);
  setTimeout(() => {
    setOpen(false);
    setSubmitted(false);
    setForm(initialForm);
    setShowExtra(false);
  }, 2500);
  };

  const handleClose = () => {
    setOpen(false);
    setSubmitted(false);
    setError("");
  };

  return (
    <>
      {/* Floating buttons */}
      <div className="floating-buttons">
        <a
          href="https://wa.me/917066620673?text=Hello"
          target="_blank"
          rel="noopener noreferrer"
          className="btn whatsapp"
          aria-label="WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>

        <a href="tel:+917066620673" className="btn call" aria-label="Call us">
          <FontAwesomeIcon icon={faPhone} />
        </a>

        <a
          href="mailto:bnsholidays@bnsholidays.co.in"
          className="btn email"
          aria-label="Email us"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>

        <button
          className="btn enquiry"
          onClick={() => setOpen(true)}
          aria-label="Quick Enquiry"
        >
          <FontAwesomeIcon icon={faPencil} />
          <span>Quick Enquiry</span>
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div className="eq-overlay" onClick={(e) => e.target === e.currentTarget && handleClose()}>
          <div className="eq-modal" role="dialog" aria-modal="true" aria-label="Quick Enquiry form">

            <button className="eq-close" onClick={handleClose} aria-label="Close">✕</button>

            {submitted ? (
              <div className="eq-success">
                <div className="eq-success-icon">✓</div>
                <p>Thank you! We'll get back to you shortly.</p>
              </div>
            ) : (
              <>
                <h2 className="eq-title">QUICK ENQUIRY</h2>

                {error && <p className="eq-error">{error}</p>}

                <div className="eq-field">
                  <input
                    type="text" name="name" placeholder="Full Name*"
                    value={form.name} onChange={handleChange}
                  />
                </div>

                <div className="eq-field eq-phone-row">
                  <div className="eq-flag">🇮🇳 +91</div>
                  <input
                    type="tel" name="mobile" placeholder="Mobile No.*"
                    value={form.mobile} onChange={handleChange}
                  />
                </div>

                <div className="eq-field">
                  <input
                    type="email" name="email" placeholder="Email ID*"
                    value={form.email} onChange={handleChange}
                  />
                </div>

                <div className="eq-field">
                  <textarea
                    name="desc" placeholder="Drop us a small description"
                    value={form.desc} onChange={handleChange}
                    rows={3}
                  />
                </div>

                <p className="eq-helper">
                  Would you like to share more info? It will help us curate the best tours for you.{" "}
                  <em>(Optional)</em>
                </p>

                <button
                  className="eq-toggle"
                  onClick={() => setShowExtra((v) => !v)}
                >
                  Additional Details {showExtra ? "▴" : "▾"}
                </button>

                {showExtra && (
                  <div className="eq-extra">
                    <div className="eq-field">
                      <input
                        type="text" name="destination" placeholder="Destination in mind"
                        value={form.destination} onChange={handleChange}
                      />
                    </div>
                    <div className="eq-field eq-phone-row">
                      <input
                        type="number" name="adults" placeholder="No. of adults"
                        value={form.adults} onChange={handleChange}
                        style={{ flex: 1 }}
                      />
                      <input
                        type="number" name="children" placeholder="No. of children"
                        value={form.children} onChange={handleChange}
                        style={{ flex: 1 }}
                      />
                    </div>
                    <div className="eq-field">
                      <input
                        type="date" name="date"
                        value={form.date} onChange={handleChange}
                      />
                    </div>
                    <div className="eq-field">
                      <input
                        type="text" name="budget" placeholder="Budget (approx)"
                        value={form.budget} onChange={handleChange}
                      />
                    </div>
                  </div>
                )}

                <button className="eq-submit" onClick={handleSubmit}>
                  Submit Enquiry
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}