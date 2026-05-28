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
    question: "What is the best time to visit Ljubljana, Salzburg, and Munich?",
    answer:
      "This route is enjoyable year-round. Summer (June–August) is ideal for outdoor sightseeing, lake visits, and festivals. Winter (December–February) brings magical Christmas markets in Salzburg and Munich. Spring and autumn offer pleasant weather with fewer crowds, making them great for a relaxed trip.",
  },
  {
    question: "What is included in the 7-day tour package?",
    answer:
      "The package includes hotel accommodation for 6 nights, daily breakfast, private airport and station transfers, the Lake Bled day tour, the Hallstatt half-day tour, and a Munich Hop-On Hop-Off bus ticket. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Slovenia, Austria, and Germany?",
    answer:
      "Indian passport holders require a Schengen visa. All three countries — Slovenia, Austria, and Germany — are part of the Schengen Area, so a single Schengen visa covers your entire trip. We recommend applying at least 4–6 weeks before your travel date. Our team can assist you with the documentation.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the fairy-tale island church at Lake Bled, the postcard-perfect village of Hallstatt, Salzburg's Mozart Birthplace and Hohensalzburg Fortress, and Munich's iconic Marienplatz and Nymphenburg Palace. Each city offers a distinct blend of natural beauty and cultural heritage.",
  },
  {
    question: "What currency is used across these countries?",
    answer:
      "Slovenia, Austria, and Germany all use the Euro (€). Cards are widely accepted, but it is useful to carry some cash for smaller cafes, markets, and tips. We recommend informing your bank before travelling to avoid any transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add a Neuschwanstein Castle visit, extend your stay in Salzburg, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const GermanyLanding2 = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://cdn.kimkim.com/files/a/images/e28c94ae4c1bb7b133f6039ab141910c3581949d/original-d8146eba4d5c03ddb9a619c95108daf4.jpg"
          alt="Germany Tour"
        />

        <div className="hero-content">
          <h1>Germany</h1>

          <p>
            Ljubljana • Salzburg • Munich
          </p>

          <Link to="/germany">
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
              src="https://images.unsplash.com/photo-1541849546-216549ae216d?w=600"
              alt="Ljubljana"
            />
            <p>Ljubljana Old Town</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1505764706515-aa95265c5abc?w=600"
              alt="Salzburg"
            />
            <p>Salzburg City</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=600"
              alt="Munich"
            />
            <p>Munich Streets</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600"
              alt="Castle"
            />
            <p>European Architecture</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏔️ Beautiful Alpine Landscapes</div>
          <div>🏰 Historic European Cities</div>
          <div>🎻 Austrian & German Cultural Experience</div>
          <div>📸 Perfect Scenic Europe Tour</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Scenic Europe in 7 Days</h2>

        <p>
          Discover charming cities, mountains and unforgettable culture
        </p>

        <br />

        <Link to="/germany">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>07 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />

            <div className="day-content">
              <h3>Day 1</h3>

              <p style={{ color: "blue" }}>
                Arrival in Ljubljana
              </p>

              <p>
                Welcome to Ljubljana — a charming and green European capital!
Upon arrival, meet your private driver at the airport
Enjoy a comfortable transfer to your hotel: Ibis Styles Ljubljana Centre (or similar)
Check in and relax<br/>
Overnight Stay in Ljubljana
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />

            <div className="day-content">
              <h3>Day 2</h3>

              <p style={{ color: "blue" }}>
                Lake Bled Day Tour
              </p>

              <p>
                Breakfast at the hotel<br/>
 Lake Bled Day Tour (SIC)<br/>
Visit the stunning alpine resort of Lake Bled<br/>
Highlights include:<br/>
The iconic Bled Island with its picturesque church<br/>
Bled Castle perched above the lake<br/>
Scenic views of the Julian Alps<br/>
Overnight Stay in Ljubljana
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />

            <div className="day-content">
              <h3>Day 3</h3>

              <p style={{ color: "blue" }}>
                Ljubljana → Salzburg
              </p>

              <p>
                Breakfast at the hotel<br/>
Private transfer to the station<br/>
Board your train to Salzburg<br/>
Private transfer to your hotel: Leonardo Hotel Salzburg City Center (or similar)<br/>
Rest of the day at leisure<br/>
Overnight Stay in Salzburg
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-150260287-3e91760cbb34?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 4</h3>

              <p style={{ color: "blue" }}>
                Hallstatt Half-Day Tour
              </p>

              <p>
                Breakfast at the hotel<br/>
 Hallstatt Half-Day Tour (SIC)<br/>
Visit the postcard-perfect village of Hallstatt<br/>
Highlights:<br/>
Stunning lake and mountain scenery<br/>
Traditional alpine houses <br/>Free time to explore this fairytale destination<br/>
Overnight Stay in Salzburg
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1521295183-8a321d551ad2?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 5</h3>

              <p style={{ color: "blue" }}>
                Salzburg → Munich
              </p>

              <p>
               Breakfast at the hotel<br/>
Private transfer to the station<br/>
Train journey to Munich<br/>
Private transfer to your hotel: Cocoon Stachus (or similar)<br/>
Overnight Stay in Munich
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1512453998-5ea266f8880c?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 6</h3>

              <p style={{ color: "blue" }}>
                Munich City Tour
              </p>

              <p>
                Breakfast at the hotel<br/>
 Munich Hop-On Hop-Off Bus Tour (24 Hours)<br/>
Explore top attractions such as:<br/>
Marienplatz<br/>
Nymphenburg Palace<br/>
English Garden<br/>
Overnight Stay in Munich
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1500530697-b586d89ba3ee?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 7</h3>

              <p style={{ color: "blue" }}>
               Munich → Departure
              </p>

              <p>
               Breakfast at the hotel<br/>
Private transfer to the airport<br/>
 Depart with unforgettable European memories
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("7 Days Ljubljana + Salzburg + Munich Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your European journey</p>
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

export default GermanyLanding2;