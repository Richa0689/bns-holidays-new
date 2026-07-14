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
    question: "What is the best time to visit Zurich, Innsbruck and Salzburg?",
    answer:
      "May to September offers the most pleasant weather for exploring the cities and countryside, with long daylight hours. December is magical for Christmas markets in Salzburg and Innsbruck, though colder with possible snow. Winter (December–March) is also ideal if you'd like to combine the trip with Alpine skiing.",
  },
  {
    question: "What is included in the 7-day Zurich + Innsbruck + Salzburg package?",
    answer:
      "The package includes hotel accommodation for 6 nights, daily breakfast, luxury coach transfers between cities, and guided sightseeing in Zurich, Innsbruck and Salzburg as per the itinerary. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Switzerland and Austria?",
    answer:
      "Indian passport holders require a Schengen visa, which covers both Switzerland and Austria in a single application. We recommend applying at least 4-6 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Old Town and Bahnhofstrasse in Zurich, the Golden Roof and Alpine backdrop of Innsbruck, and Mirabell Gardens and the Old Town of Salzburg, birthplace of Mozart.",
  },
  {
    question: "What currency is used across these countries?",
    answer:
      "Switzerland uses the Swiss Franc (CHF), while Austria uses the Euro (EUR). Cards are widely accepted, but it's useful to carry some local cash for small purchases. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like extra nights in any city, a Munich or Vienna extension, or upgraded hotels, our team will curate the perfect personalised experience for you.",
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
const ZurichInnsbruckSalzburg = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV-109kQnqwFpwiIyok8ru9MMEPRrDU_efDMGZLSmqPA&s=10"
          alt="Zurich Innsbruck Salzburg Tour"
        />

        <div className="hero-content">
          <h1>Zurich + Innsbruck + Salzburg</h1>

          <p>
            Zurich • Innsbruck • Salzburg — Switzerland &amp; Austria in 7 Days
          </p>

          <Link to="/Zurich-InnsbruckSalzburg">
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV-109kQnqwFpwiIyok8ru9MMEPRrDU_efDMGZLSmqPA&s=10"
              alt="Zurich"
            />
            <p>Old Town, Zurich</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV-109kQnqwFpwiIyok8ru9MMEPRrDU_efDMGZLSmqPA&s=10"
              alt="Innsbruck"
            />
            <p>Golden Roof, Innsbruck</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV-109kQnqwFpwiIyok8ru9MMEPRrDU_efDMGZLSmqPA&s=10"
              alt="Salzburg"
            />
            <p>Mirabell Gardens, Salzburg</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV-109kQnqwFpwiIyok8ru9MMEPRrDU_efDMGZLSmqPA&s=10"
              alt="Alps"
            />
            <p>Scenic Alpine Drives</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏔️ Breathtaking Alpine Scenery</div>
          <div>🎻 Mozart's Birthplace, Salzburg</div>
          <div>🏰 Historic Innsbruck Old Town</div>
          <div>🚌 Effortless Multi-Country Coach Journey</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Discover Switzerland &amp; Austria in 7 Days</h2>

        <p>
          From lakeside Zurich to Alpine Innsbruck and musical Salzburg — a compact Alpine escape
        </p>

        <br />

        <Link to="/Zurich-InnsbruckSalzburg">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>7 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV-109kQnqwFpwiIyok8ru9MMEPRrDU_efDMGZLSmqPA&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>India – Zurich</p>
              <p>
                Welcome to Switzerland –<br />
               Welcome to Switzerland! Upon arrival at Zurich Airport, enjoy a private transfer to your hotel. Check
               in, relax, and spend the evening exploring the charming lanes of Zurich’s Old Town or walking along
               Lake Zurich at your leisure.<br />
               Overnight Stay in Zurich
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV-109kQnqwFpwiIyok8ru9MMEPRrDU_efDMGZLSmqPA&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Zurich</p>
              <p>
                Breakfast at Hotel.<br />
                After breakfast, use your Swiss Pass for travel to Engelberg, Scan you Voucher at the ticket counter
                from where you will proceed to Mount Titlis (ticket included). Experience the stunning journey by
                revolving Rotair cable car to the summit, where panoramic snow-clad Alpine scenery awaits. Enjoy
                activities such as the Glacier Cave, Cliff Walk bridge and snowy viewpoints.
                Return to Zurich using your Swiss Pass. Evening at leisure to explore Zurich’s cafes, riverside area or
                Bahnhofstrasse.<br />
               Overnight Stay in Zurich

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV-109kQnqwFpwiIyok8ru9MMEPRrDU_efDMGZLSmqPA&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Zurich – Innsbruck</p>
              <p>
               Breakfast at Hotel. Check out from the Hotel.<br />
               Use your Swiss Pass for your onward train journey from Zurich to the Austrian border region and
               continue toward Innsbruck. Upon arrival at Innsbruck Station, enjoy a private transfer to your hotel.
               Check in and spend your first evening strolling around the medieval Old Town and the Golden Roof
               area.<br />
               Overnight Stay in Innsbruck
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV-109kQnqwFpwiIyok8ru9MMEPRrDU_efDMGZLSmqPA&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Innsbruck – Swarovski Crystal Worlds Entrance Ticket</p>
              <p>
                Breakfast at Hotel.<br />
                After breakfast, make your way to Swarovski Crystal Worlds (entrance ticket included). Explore the
                Chambers of Wonder, unique art installations, crystal-themed exhibits, and the magical outdoor
                garden. Enjoy the crystal cloud, mirror installations, and family-friendly attractions at this worldfamous venue.
                Return to Innsbruck and enjoy the rest of the day at leisure — explore Nordkette views, MariaTheresien-Strasse, or local Tyrolean cafés.<br />
                Overnight Stay in Innsbruck

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV-109kQnqwFpwiIyok8ru9MMEPRrDU_efDMGZLSmqPA&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Innsbruck - Salzburg</p>
              <p>
                Breakfast at Hotel. Check out from the Hotel.<br />
                Private transfer from Innsbruck Hotel to Station. Board your train from Innsbruck to Salzburg. Upon
                arrival in Salzburg, enjoy a private transfer from Salzburg Station to your hotel. Check in and relax, or
                explore the Old Town — Mirabell Gardens, pedestrian streets, and Mozart’s birthplace area.<br />
                Overnight Stay in Salzburg
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV-109kQnqwFpwiIyok8ru9MMEPRrDU_efDMGZLSmqPA&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Salzburg – Half Day Original Sound of Music Tour on Shared Basis</p>
              <p>
                Breakfast at Hotel.<br />
                After breakfast, proceed for the Half Day Original Sound of Music Tour (shared basis, included). Visit
                iconic filming locations such as the Mirabell Gardens, Leopoldskron Palace, the lakes district, and the
                famous gazebo. Hear stories about the Von Trapp family, the film’s production, and the history of
                Salzburg’s beautiful landscapes.<br />
                Afternoon and evening at leisure — explore the Fortress, riverfront, cafés, or the charming lanes
                around Getreidegasse.<br />
                Overnight Stay in Berlin

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV-109kQnqwFpwiIyok8ru9MMEPRrDU_efDMGZLSmqPA&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Salzburg - India</p>
              <p>
                Breakfast at Hotel. Check out from the Hotel.<br />
                Private transfer from Salzburg Hotel to Salzburg Airport for your onward flight.<br />
                Back to India 
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("7 Days Zurich + Innsbruck + Salzburg Luxury Coach Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Alpine journey</p>
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

export default ZurichInnsbruckSalzburg;