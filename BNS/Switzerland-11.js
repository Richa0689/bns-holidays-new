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
    question: "What is the best time to visit Switzerland for this tour?",
    answer:
      "Late spring to early autumn (May–September) offers the best conditions for Engelberg and Grindelwald, with clear cable car rides up to Titlis and Jungfraujoch. Winter (December–March) transforms both towns into snowy Alpine destinations, ideal for those seeking a classic snow-covered Switzerland experience. Zurich is enjoyable year-round.",
  },
  {
    question: "What is included in the 7-day Engelberg, Grindelwald & Zurich package?",
    answer:
      "The package includes hotel accommodation for 6 nights (2 nights each in Engelberg, Grindelwald, and Zurich), daily breakfast, private/luxury coach transfers between cities, a cable car excursion to Mount Titlis, an excursion to Jungfraujoch (Top of Europe), and a guided city tour of Zurich. International flights, cog railway upgrades, and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Switzerland?",
    answer:
      "Indian passport holders require a Schengen visa to visit Switzerland. We recommend applying at least 4–6 weeks before your travel date, as appointment slots can fill up quickly. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the revolving cable car and glacier cave at Mount Titlis in Engelberg, the dramatic Eiger north face and Jungfraujoch – Top of Europe near Grindelwald, and Zurich's Old Town, Lake Zurich promenade, and Bahnhofstrasse in the city.",
  },
  {
    question: "What currency is used across Switzerland?",
    answer:
      "The Swiss Franc (CHF) is the official currency. Cards are widely accepted, but it's useful to carry some cash for mountain excursions, cafes, and local transit. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add an excursion to Lucerne, extra nights in the Alps, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const BestEngelberg = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=1600&auto=format&fit=crop"
          alt="Switzerland Tour"
        />

        <div className="hero-content">
          <h1>SWITZERLAND</h1>

          <p>
            Engelberg • Grindelwald • Zurich
          </p>

          <Link to="/best-engelberg">
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
              src="https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=1200&auto=format&fit=crop"
              alt="Mount Titlis"
            />
            <p>Mount Titlis, Engelberg</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=1200&auto=format&fit=crop"
              alt="Grindelwald"
            />
            <p>Grindelwald & the Eiger</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1520637836862-4d197d17c93a?q=80&w=1200&auto=format&fit=crop"
              alt="Jungfraujoch"
            />
            <p>Jungfraujoch – Top of Europe</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1585939623405-b7fcdf3a3f8f?q=80&w=1200&auto=format&fit=crop"
              alt="Zurich"
            />
            <p>Zurich Old Town</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🚡 Revolving Cable Car to Titlis</div>
          <div>🏔️ Top of Europe – Jungfraujoch</div>
          <div>🛶 Lake Zurich & Old Town Charm</div>
          <div>🚂 Scenic Alpine Rail Journeys</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Best of the Swiss Alps in 7 Days</h2>

        <p>
          From snow-capped peaks to lakeside cities — the ultimate Alpine escape
        </p>

        <br />

        <Link to="/best-engelberg">
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
              src="https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>India – Engelberg </p>
              <p>
                India – Zurich – Engelberg -<br /> 
 
               Arrival in Switzerland: A Scenic Beginning to Your Swiss Holiday <br />
               Lindt Home of Chocolate Entrance Ticket Highlight <br />
 
               Welcome to Switzerland, the land of alpine beauty and serene landscapes. Upon arrival at Zurich 
               Airport, you will travel to Engelberg using your Swiss Pass, enjoying the comfortable and 
               picturesque train journey through Switzerland’s rolling hills and crystal-clear lakes. 
               Engelberg is a charming mountain village known for its peaceful atmosphere and majestic views of 
               Mount Titlis. Your first evening here will ease you into the serene Swiss lifestyle, surrounded by 
               stunning mountain scenery. <br />
               Overnight Stay in Engelberg
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1516815527100-70158f6a8f0b?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Engelberg – Mt. Titlis Excursion </p>
              <p>
                Mt. Titlis Excursion Highlight <br />
 
               Breakfast at Hotel. <br />
               Today you will embark on an unforgettable excursion to Mt. Titlis using your Swiss Pass. This 
               iconic mountain experience features panoramic gondola rides, snowy vistas, and the famous Titlis 
               Cliff Walk, surrounded by breathtaking alpine landscapes. 
               Enjoy your time at the summit as you explore snow-covered viewpoints and immerse yourself in 
               the crisp mountain air. <br />
               Overnight Stay in Engelberg
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Engelberg – Grindelwald</p>
              <p>
                Breakfast at Hotel.<br /> 
                After breakfast, travel from Engelberg to Grindelwald using your Swiss Pass. This scenic route 
                takes you deeper into the Berner Oberland region, one of Switzerland’s most postcard-perfect areas.
                Grindelwald, with the backdrop of the Eiger North Face, offers a blend of adventure and 
                 tranquility, making it one of Switzerland’s most loved alpine villages<br />. 
                Overnight Stay in Grindelwald 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1520637836862-4d197d17c93a?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}> Grindelwald – Excursion to Mt. Jungfrau</p>
              <p>
                Mt. Jungfrau Excursion Highlight 
               Breakfast at Hotel. 
               Today you will enjoy the spectacular excursion to Mt. Jungfraujoch – Top of Europe, using your 
              Swiss Pass. The journey includes the world-famous Jungfrau cogwheel train, transporting you to the 
              highest railway station in Europe. 
              At the summit, explore the Ice Palace, Sphinx Observatory, and panoramic viewpoints offering awe
              inspiring glaciers and snow-covered mountains. 
              Overnight Stay in Grindelwald 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1573599852326-2d4da0bbe613?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Grindelwald – Zurich</p>
              <p>
                Breakfast at Hotel.<br /> 
               After breakfast, travel from Grindelwald to Zurich using your Swiss Pass. Upon arrival, explore the 
                vibrant city known for its old-world charm, lakeside beauty, and elegant architecture. In the 
                afternoon, visit the Rhine Falls with your Swiss Pass, where you can enjoy the powerful cascades 
               (boat tour not included). <br />
               Overnight Stay in Zurich
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1585939623405-b7fcdf3a3f8f?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Zurich – Lindt Home of Chocolate Visit </p>
              <p>
                Lindt Home of Chocolate Entrance Ticket Highlight <br />
               Breakfast at Hotel. <br />
               Today you will make your delightful visit to the Lindt Home of Chocolate, where you can explore 
               the world of Swiss chocolate, enjoy interactive exhibits, and witness the iconic chocolate fountain. 
               Spend the rest of the day exploring Zurich at your own pace—wander through Bahnhofstrasse, 
               visit the Old Town, or relax by Lake Zurich. <br />
               Overnight Stay in Zurich
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Zurich – India </p>
              <p>
               Breakfast at Hotel.<br /> 
               After breakfast, you will be transferred from your Zurich hotel to Zurich Airport by private transfer 
               for your onward journey back to India, bringing your beautiful Swiss holiday to an end. 
                ________________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("Best of Engelberg + Grindelwald + Zurich")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Swiss journey</p>
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

export default BestEngelberg;