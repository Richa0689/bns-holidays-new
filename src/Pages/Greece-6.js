import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

/* ── shared constants ─────────────────────────────────────────── */
const WHATSAPP_NUMBER = "917066620673";

const initialForm = {
  name: "", mobile: "", email: "", desc: "",
  destination: "", adults: "", children: "", date: "", budget: "",
};

const faqs = [
  {
    question: "What is the best time to visit Barcelona, Valencia, Malaga and Seville for this tour?",
    answer:
      "March to June and September to November are ideal, with mild temperatures perfect for sightseeing in Barcelona, Valencia and Seville, and pleasant beach weather along the Costa del Sol in Malaga. Summer (July–August) can get very hot in Seville and Malaga, so spring and autumn are recommended for the most comfortable experience.",
  },
  {
    question: "What is included in the 10-day Best of Barcelona, Valencia, Malaga & Seville package?",
    answer:
      "The package includes 9 nights accommodation (3 nights Barcelona, 2 nights Valencia, 2 nights Malaga, 2 nights Seville), daily breakfast, comfortable transfers between cities, guided city tours in each destination, and sightseeing at iconic landmarks along the way. International flights, visa fees and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Spain?",
    answer:
      "Indian passport holders require a Schengen visa, which covers travel across Barcelona, Valencia, Malaga and Seville on this itinerary. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Sagrada Familia and Park Güell in Barcelona, the City of Arts and Sciences in Valencia, the Alcazaba and old town of Malaga, and the Alcázar and Plaza de España in Seville.",
  },
  {
    question: "What currency is used across Spain?",
    answer:
      "Spain uses the Euro (EUR) across Barcelona, Valencia, Malaga and Seville. Cards are widely accepted everywhere, but it's useful to carry some local cash for small purchases and transit. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add extra nights in any city, include a Costa del Sol beach stay, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
  },
];

/* ── QueryModal ───────────────────────────────────────────────── */
const QueryModal = ({ day, onClose }) => {
  const [form, setForm] = useState(initialForm);
  const [showExtra, setShowExtra] = useState(false);
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

    const message =
      `*New Enquiry from BNS Holidays*\n` +
      `*Enquiry For:* ${day}\n` +
      `*Name:* ${form.name}\n` +
      `*Mobile:* +91 ${form.mobile}\n` +
      `*Email:* ${form.email}\n` +
      `*Description:* ${form.desc || "N/A"}` +
      (showExtra
        ? `\n*Destination:* ${form.destination || "N/A"}\n` +
          `*Adults:* ${form.adults || "N/A"}\n` +
          `*Children:* ${form.children || "N/A"}\n` +
          `*Travel Date:* ${form.date || "N/A"}\n` +
          `*Budget:* ${form.budget || "N/A"}`
        : "");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setForm(initialForm);
      setShowExtra(false);
    }, 2500);
  };

  const handleClose = () => { onClose(); setError(""); };

  return (
    <div
      className="eq-overlay"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
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
  );
};

/* ── Main page ───────────────────────────────────────────────── */
const BarcelonaValenciaMalagaSevilleLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://wallpaperaccess.com/full/7946470.jpg"
          alt="Barcelona, Valencia, Malaga & Seville Tour"
        />

        <div className="hero-content">
          <h1>Best of Barcelona, Valencia, Malaga & Seville</h1>

          <p>
            Barcelona • Valencia • Malaga • Seville
          </p>

          <Link to="/Valencia-Malaga">
            <button className="explore-btn">
              Explore Tour
            </button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Tour Highlights</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img
              src="https://wallpaperaccess.com/full/2605423.jpg"
              alt="Sagrada Familia Barcelona"
            />
            <p>Sagrada Familia, Barcelona</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images4.alphacoders.com/100/1000218.jpg"
              alt="City of Arts and Sciences Valencia"
            />
            <p>City of Arts &amp; Sciences, Valencia</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.wcbTmb11rIB8r0VrJpPrhgHaD_?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Alcazaba Malaga"
            />
            <p>Alcazaba, Malaga</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://phantom-elmundo.unidadeditorial.es/c06cf0c163248785dcbd02c92648c8ea/f/jpg/assets/multimedia/imagenes/2022/03/01/16461479046801.jpg"
              alt="Plaza de Espana Seville"
            />
            <p>Plaza de España, Seville</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏛️ Iconic Gaudí Architecture</div>
          <div>🌊 Futuristic Valencia Landmarks</div>
          <div>🏖️ Sun-Soaked Costa del Sol in Malaga</div>
          <div>💃 Flamenco Heart of Seville</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Best of Spain in 10 Days</h2>

        <p>
          From the artistry of Barcelona to the futuristic charm of Valencia, the coastal beauty of Malaga and the flamenco soul of Seville — a journey through Spain's finest
        </p>

        <br />

        <Link to="/Valencia-Malaga">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>10 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://wallpaperaccess.com/full/5808.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>Arrival in Mykono</p>
              <p> 
Arrival at Mykonos Airport 
Private transfer from Mykonos Airport to hotel 
Check-in at Hotel  
Rest of the day at leisure <br/>
Overnight stay in Mykonos 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://mediaim.expedia.com/localexpert/167139/ad3744c4-47db-4bf0-8722-fe3abdedd56e.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Delos & Rhenia Cruise</p>
              <p>
                Breakfast at the hotel<br/> 
Proceed for shared cruise to Delos & Rhenia<br/> 
Explore the ancient ruins of Delos <br/>
Enjoy sailing and swimming near Rhenia Island <br/>
Return to Mykonos by afternoon <br/>
Evening free at leisure 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://4kwallpapers.com/images/wallpapers/fc-barcelona-camp-3840x2160-19432.jpeg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Day at Leisure</p>
              <p>
               reakfast at the hotel <br/>
Day free at leisure (No services provided by us as per itinerary) 
Guests may explore on their own:<br/> 
Mykonos Town (Chora)<br/> 
Little Venice <br/>
Windmills of Mykonos<br/> 
Optional beach visit or shopping <br/>
Overnight stay in Mykonos 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.H-tcg7S-7XiGcGqgcH_XHQHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Departure</p>
              <p>
Breakfast at the hotel <br/>
Check-out <br/>
Private transfer from hotel to Mykonos Airport for onward journey.
              </p>
            </div>
          </div>

          </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("10 Days Best of Barcelona, Valencia, Malaga & Seville Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Spanish journey</p>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`faq-item ${openFaq === idx ? "faq-open" : ""}`}>
              <button
                className="faq-question"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openFaq === idx ? "▲" : "▼"}</span>
              </button>
              {openFaq === idx && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {activeModal && (
        <QueryModal
          day={activeModal}
          onClose={() => setActiveModal(null)}
        />
      )}

      {/* scoped extra styles */}
      <style>{`
        .send-query-btn {
          margin-top: 12px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 22px;
          background: linear-gradient(135deg, #c8860a 0%, #e6a820 100%);
          color: #fff;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.04em;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s;
          box-shadow: 0 3px 12px rgba(200,134,10,0.35);
        }
        .send-query-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(200,134,10,0.45);
        }

        .faq-section {
          padding: 60px 24px;
          max-width: 820px;
          margin: 0 auto;
        }
        .faq-section h2 {
          text-align: center;
          font-size: 2rem;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 6px;
          font-family: 'Georgia';
        }
        .faq-subtitle {
          text-align: center;
          color: #777;
          font-size: 0.95rem;
          margin-bottom: 36px;
        }
        .faq-list { display: flex; flex-direction: column; gap: 10px; }
        .faq-item {
          border: 1.5px solid #e8e0d4;
          border-radius: 10px;
          overflow: hidden;
          transition: border-color 0.2s;
        }
        .faq-item.faq-open { border-color: #c8860a; }
        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          padding: 18px 20px;
          background: #fdf8f2;
          border: none;
          cursor: pointer;
          font-size: 0.97rem;
          font-weight: 600;
          color: #1a1a1a;
          text-align: left;
          transition: background 0.15s;
          font-family: inherit;
        }
        .faq-item.faq-open .faq-question { background: #fff7eb; color: #c8860a; }
        .faq-question:hover { background: #fff3e0; }
        .faq-icon { flex-shrink: 0; font-size: 0.7rem; color: #c8860a; }
        .faq-answer {
          padding: 16px 20px 20px;
          font-size: 0.92rem;
          color: #555;
          line-height: 1.65;
          background: #fff;
          border-top: 1px solid #f0e8dc;
          animation: fadeDown 0.2s ease;
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default BarcelonaValenciaMalagaSevilleLanding;