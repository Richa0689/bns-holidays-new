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
      "Late spring to early autumn (May–September) offers the most pleasant weather across Montreux, Lausanne, and Geneva, with clear lake views and blooming landscapes. Summer is peak season for the Swiss Riviera, while shoulder months (May, June, September) offer fewer crowds and comfortable temperatures for sightseeing and scenic drives.",
  },
  {
    question: "What is included in the 7-day Swiss Panorama package?",
    answer:
      "The package includes hotel accommodation for 6 nights (2 nights each in Geneva, Lausanne, and Montreux), daily breakfast, private/luxury coach transfers between cities, guided city tours, entry to Chillon Castle, a scenic ride on the Lavaux vineyard route, and time along Lake Geneva's waterfront. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Switzerland?",
    answer:
      "Indian passport holders require a Schengen visa to visit Switzerland. We recommend applying at least 4–6 weeks before your travel date, as appointment slots can fill up quickly. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include Lake Geneva's Jet d'Eau and the Old Town in Geneva, the Olympic Museum and Lavaux vineyard terraces near Lausanne, and the fairy-tale Chillon Castle along with the scenic Montreux lakefront promenade in Montreux.",
  },
  {
    question: "What currency is used across Switzerland?",
    answer:
      "The Swiss Franc (CHF) is the official currency. Cards are widely accepted, but it's useful to carry some cash for small purchases, cafes, and local transit. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add an excursion to Zermatt or Interlaken, extra nights on the Swiss Riviera, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const SwissPanorama = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1600&auto=format&fit=crop"
          alt="Switzerland Tour"
        />

        <div className="hero-content">
          <h1>SWITZERLAND</h1>

          <p>
            Geneva • Lausanne • Montreux
          </p>

          <Link to="/swiss-panorama">
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
              src="https://images.unsplash.com/photo-1573599852326-2d4da0bbe613?q=80&w=1200&auto=format&fit=crop"
              alt="Geneva"
            />
            <p>Lake Geneva & Jet d'Eau</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1591273606604-235d5b6cf2c1?q=80&w=1200&auto=format&fit=crop"
              alt="Lausanne"
            />
            <p>Lausanne & Lavaux Vineyards</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1548262046-a94b8f6a3a68?q=80&w=1200&auto=format&fit=crop"
              alt="Chillon Castle"
            />
            <p>Chillon Castle</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1593238739364-9ddc0e56ab6b?q=80&w=1200&auto=format&fit=crop"
              alt="Montreux"
            />
            <p>Montreux Lakefront</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏔️ Swiss Alps Backdrop</div>
          <div>🚤 Lake Geneva Cruises</div>
          <div>🍇 Lavaux Vineyard Terraces</div>
          <div>🏰 Fairy-Tale Chillon Castle</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Swiss Riviera in 7 Days</h2>

        <p>
          From lakeside promenades to vineyard terraces and medieval castles — the ultimate Swiss panorama
        </p>

        <br />

        <Link to="/swiss-panorama">
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
              src="https://images.unsplash.com/photo-1573599852326-2d4da0bbe613?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>Geneva – Montreux</p>
              <p>
                Welcome to Switzerland, a land of lakes, mountains, and scenic beauty.
                Upon arrival at Geneva Airport, use your Swiss Pass for a comfortable journey to Montreux, a
               charming town by Lake Geneva.<br />
               Check in at your hotel and enjoy the enchanting lakeside surroundings at your leisure.<br />
               Overnight Stay in Montreux

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Montreux – Excursion to Glacier 3000 </p>
              <p>
                Entrance Ticket / Tour Included: Excursion to Glacier 3000 with Swiss Pass<br />
                Breakfast at the hotel. 
                Today, proceed for your excursion to Glacier 3000. Enjoy breathtaking panoramic views of the Alps, 
                including peaks such as Mont Blanc and the Matterhorn. Experience stunning snow-covered 
                landscapes and enjoy activities available at the summit.<br /> 
 
               Return to Montreux and spend the rest of your day at leisure. 
               Overnight Stay in Montreux
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1591273606604-235d5b6cf2c1?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Montreux – Lausanne </p>
              <p>
                Breakfast at the hotel. 
                Use your Swiss Pass to travel from Montreux to Lausanne, a charming lakeside city known for its 
                vibrant cultural scene. 
                Arrive and check in at your hotel. The remainder of the day is free for you to explore the city at your own pace.<br /> 
                Overnight Stay in Lausanne
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1516815527100-70158f6a8f0b?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Lausanne – Excursion to Mt. Titlis with Ice Flyer </p>
              <p>
                Entrance Ticket / Tour Included: Excursion to Mt. Titlis with Ice Flyer <br />
               Breakfast at the hotel.<br /> 
               Today, enjoy a scenic journey to Mt. Titlis. Ride the Rotair cable car to the summit and take in 
               spectacular alpine views. Experience the famous Ice Flyer chairlift and explore the Glacier Cave 
               before returning to Lausanne. <br />
               Overnight Stay in Lausanne
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1548262046-a94b8f6a3a68?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Lausanne – Geneva </p>
              <p>
                Entrance Ticket / Tour Included: Visit to Chillon Castle with Swiss Pass <br />
 
               Breakfast at the hotel.<br /> 
               Begin your day with a visit to the famous Chillon Castle, one of Switzerland’s most iconic historical 
               sites, located on the shores of Lake Geneva. <br />
               Later, travel from Lausanne to Geneva using your Swiss Pass. <br />
 
               Arrive and check in at your hotel. Spend the rest of the day exploring Geneva’s beautiful lakeside 
               promenades, gardens, and old town streets. <br />
               Overnight Stay in Geneva
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1593238739364-9ddc0e56ab6b?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Geneva – Day at Leisure </p>
              <p>
               Breakfast at the hotel.<br /> 
               Enjoy a full day at leisure in Geneva. Explore the city’s landmarks such as the Jet d’Eau, the United 
               Nations area, the Flower Clock, and the charming Old Town.<br /> 
 
               Relax by the lake or enjoy optional activities based on your interests.<br /> 
               Overnight Stay in Geneva
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1573599852326-2d4da0bbe613?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Geneva – India </p>
              <p>
              Breakfast at the hotel.<br />  
              After breakfast, private transfer from your Geneva hotel to Geneva Airport for your return flight.<br />  
               Depart with wonderful memories of your Swiss holiday. 
                ________________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("Swiss Panorama Experience: Montreux, Lausanne & Geneva")}
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

export default SwissPanorama;