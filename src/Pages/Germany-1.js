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
          src="https://cdn.sanity.io/images/nxpteyfv/goguides/4b75583ae9f2ae83c1a7f430c524e7489a4e3e21-1600x1066.jpg"
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
              src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/35bd7cd3e787005a429c2c8a81a8055a1662caf0/big-b3de4a6953c137ab886fffed8b1968af.jpg"
              alt="Ljubljana"
            />
            <p>Ljubljana Old Town</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Salzburg_%2848489551981%29.jpg/330px-Salzburg_%2848489551981%29.jpg"
              alt="Salzburg"
            />
            <p>Salzburg City</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://thumbs.dreamstime.com/b/munich-germany-streets-old-city-morning-center-cultural-life-bavarian-capital-abounding-interesting-sights-137939706.jpg"
              alt="Munich"
            />
            <p>Munich Streets</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://www.expatrio.com/hubfs/Expatrio%20Hatch%20Child%20-%20Theme/Blog%20Graphics/Sonstiges/bild%206.jpg"
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
              src="data:image/jpeg;base64,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"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUIxdBHqC0r0IFShzf2txCpwsS4Cv6SGbeyw&s"
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
              src="data:image/jpeg;base64,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"
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
              src="data:image/jpeg;base64,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"
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