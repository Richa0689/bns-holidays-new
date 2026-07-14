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
    question: "What is the best time to visit Switzerland and France for this tour?",
    answer:
      "April to October is ideal, with May–June and September offering pleasant weather, blooming landscapes and clear mountain views. Summer (July–August) is peak season with long daylight hours, perfect for lake cruises in Geneva and mountain excursions near Zurich, while spring and early autumn bring fewer crowds and comfortable temperatures.",
  },
  {
    question: "What is included in the 8-day Best of Swiss & France package?",
    answer:
      "The package includes 7 nights accommodation (2 nights Paris, 2 nights Geneva, 3 nights Zurich), daily breakfast, comfortable coach transfers between cities, guided city tours in Paris, Geneva and Zurich, and sightseeing at iconic landmarks along the way. International flights, visa fees and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to France and Switzerland?",
    answer:
      "Indian passport holders require a Schengen visa, which covers travel across both France and Switzerland on this itinerary. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Eiffel Tower and a Seine River cruise in Paris, the Jet d'Eau and Lake Geneva promenade, an optional excursion to the Swiss Alps, the charming lakeside city of Lucerne, and the historic old town and waterfront of Zurich.",
  },
  {
    question: "What currency is used across France and Switzerland?",
    answer:
      "France uses the Euro (EUR), while Switzerland uses the Swiss Franc (CHF). Cards are widely accepted in both countries, but it's useful to carry some local cash for small purchases and transit. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add a Jungfraujoch excursion, extra nights in Paris, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const SwissFranceLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0El0rRmdIUqkCnMlHpEgqzCjLOXcAhHWuASxwYnGnKEZy_-reL_JJwOI5&s=10"
          alt="Switzerland & France Tour"
        />

        <div className="hero-content">
          <h1>Best of Swiss & France</h1>

          <p>
            Paris • Geneva • Lucerne • Zurich
          </p>

          <Link to="/swiss-france">
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
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1170&auto=format&fit=crop"
              alt="Eiffel Tower Paris"
            />
            <p>Eiffel Tower, Paris</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1573551459479-e2cf3f2fdb3f?q=80&w=1170&auto=format&fit=crop"
              alt="Lake Geneva"
            />
            <p>Lake Geneva & Jet d'Eau</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1170&auto=format&fit=crop"
              alt="Lucerne Switzerland"
            />
            <p>Lucerne, Switzerland</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=1170&auto=format&fit=crop"
              alt="Zurich Switzerland"
            />
            <p>Zurich Old Town</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🗼 Iconic Paris Landmarks</div>
          <div>🚤 Scenic Lake Geneva Cruise</div>
          <div>🏔️ Breathtaking Swiss Alps</div>
          <div>📸 Charming Lakeside Towns</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Best of Switzerland & France in 8 Days</h2>

        <p>
          From the romance of Paris to the majestic Swiss Alps — a journey through Europe's finest
        </p>

        <br />

        <Link to="/swiss-france">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>8 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1170&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>India → Paris</p>
              <p>
                Welcome to Paris – The City of Lights!<br/>
                Arrive at Paris Airport and meet your driver for a smooth private transfer to your hotel. After checkin, relax or explore the charming streets, cafés, and landmarks nearby.<br/>
                Overnight Stay in Paris
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1170&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Paris Hop-on Hop-off Tour + Eiffel Tower (2nd Level)</p>
              <p>
               Breakfast at Hotel.<br/>
               Today explore Paris using your 1-Day Hop-On Hop-Off Bus Tour (SIC Basis). Visit top attractions<br/>
               such as:<br/>
               Champs-Élysées<br/>
               Arc de Triomphe<br/>
               Louvre Museum<br/>
               Notre-Dame<br/>
               Musée d’Orsay<br/>
               Seine River Embankments<br/>
               Later, visit the world-famous Eiffel Tower (2nd Level Entry Ticket Included) for breathtaking views
               of the Paris skyline.<br/>
               Evening free for shopping or an optional Seine River cruise.<br/>
               Overnight Stay in Paris

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?q=80&w=1170&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Paris → Geneva</p>
              <p>
                Breakfast at Hotel.<br/>
                After breakfast, proceed for your private transfer from Paris Hotel to the Train Station for your
                onward journey to Switzerland.<br/>
                Arrive in Geneva and use your Swiss Travel Pass (Second Class – 6 Days Continuous) for seamless
                travel from Geneva Station to your hotel.<br/>
                Relax for the rest of the day or walk along Lake Geneva’s beautiful promenade.<br/>
                Overnight Stay in Geneva
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1573551459479-e2cf3f2fdb3f?q=80&w=1170&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Excursion to Glacier 3000</p>
              <p>
                Breakfast at Hotel.<br/>
                Today, enjoy an unforgettable excursion to Mt. Glacier 3000 using your Swiss Travel Pass (ticket included). Spectacular Alpine views The Peak Walk by Tissot – the world’s only suspension bridge
                connecting two mountain peaks. Snow activities and scenic viewpoints
                Return to Geneva in the evening.<br/>
                Overnight Stay in Geneva
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1170&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Geneva → Zurich</p>
              <p>
                Breakfast at Hotel.<br/>
                Today, travel from Geneva to Zurich using your Swiss Travel Pass. Enjoy one of Europe’s most
                scenic train journeys through lakes, vineyards, and mountains.<br/>
                Arrive in Zurich and check in to your hotel. Rest of the day is free to explore the Old Town,
                Bahnhofstrasse, or take a walk near Lake Zurich.<br/>
                Overnight Stay in Zurich

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=1170&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Lindt Chocolate Factory Visit</p>
              <p>
                Breakfast at Hotel.<br/>
               This morning, use your Swiss Travel Pass to visit the famous Lindt Home of Chocolate. Enjoy
                interactive exhibits, learn about the history of Swiss chocolate, and taste freshly made delights at
               the world’s largest chocolate fountain.
                Return to Zurich and spend the rest of the day at leisure.<br/>
               Overnight Stay in Zurich

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1508964942454-1a56651d54ac?q=80&w=1170&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}> Excursion to Mt. Titlis with Ice Flyer</p>
              <p>
                Breakfast at Hotel.<br/>
                Today, enjoy a full-day excursion to Mt. Titlis using your Swiss Travel Pass.<br/>
                Experience:<br/>
                Rotating cable car ride to the summit<br/>
                Stunning snow-covered landscapes<br/>
                Ice Flyer Chairlift (Ticket Included)<br/>
               Glacier Cave & Cliff Walk<br/>
               Return to Zurich in the evening.<br/>
                Overnight Stay in Zurich
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1527866959252-deab85ef7370?q=80&w=1170&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{ color: "blue" }}>Zurich → India</p>
              <p>
                Breakfast at Hotel.<br/>
               Check out and proceed to Zurich Airport using your Swiss Travel Pass for your flight back to India.<br/>
               Your memorable France & Switzerland journey comes to an end with beautiful Alpine memories!
                ________________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("8 Days Best of Swiss & France Tour")}
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

export default SwissFranceLanding;