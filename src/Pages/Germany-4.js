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
    question: "What is the best time to visit Vienna, Munich, and Zurich?",
    answer:
      "This three-country route is enjoyable year-round. Summer (June–August) is ideal for outdoor sightseeing, lakeside walks in Zurich, and beer gardens in Munich. Winter (December–February) brings stunning Christmas markets across all three cities. Spring and autumn offer mild weather with fewer crowds — perfect for a relaxed cultural trip.",
  },
  {
    question: "What is included in the 7-day Europe Highlights tour package?",
    answer:
      "The package includes 6 nights of hotel accommodation, daily breakfast, intercity travel between Vienna, Munich, and Zurich, and airport transfers. Guided sightseeing tours are as per the itinerary. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need separate visas for Austria, Germany, and Switzerland?",
    answer:
      "Austria and Germany are both part of the Schengen Area, so a single Schengen visa covers both countries. Switzerland, while not an EU member, is also part of the Schengen Area — so the same Schengen visa covers your entire trip. Indian passport holders should apply at least 4–6 weeks before travel. Our team can assist with documentation.",
  },
  {
    question: "What are the must-see highlights on this tour?",
    answer:
      "Key highlights include Vienna's Schönbrunn Palace and St. Stephen's Cathedral, Munich's iconic Marienplatz and Nymphenburg Palace, and Zurich's scenic lake, Bahnhofstrasse, and charming Old Town. This tour offers a perfect blend of imperial grandeur, Bavarian culture, and Swiss elegance.",
  },
  {
    question: "What currencies are used across these countries?",
    answer:
      "Austria and Germany use the Euro (€), while Switzerland uses the Swiss Franc (CHF). Cards are widely accepted everywhere, but it is helpful to carry a small amount of local currency for markets, tips, and smaller shops. We recommend notifying your bank before travelling.",
  },
  {
    question: "Can I customise this 7-day Europe itinerary?",
    answer:
      "Absolutely! Every itinerary is fully tailorable to your interests, travel dates, and budget. Whether you'd like to add a day trip to Hallstatt, Rhine Falls, or Neuschwanstein Castle, or prefer to upgrade your accommodation, our team will create the perfect personalised European journey for you.",
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
const GermanyLanding5 = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://cdn.kimkim.com/files/a/images/e28c94ae4c1bb7b133f6039ab141910c3581949d/original-d8146eba4d5c03ddb9a619c95108daf4.jpg"
          alt="Europe Tour"
        />

        <div className="hero-content">
          <h1>Europe Highlights</h1>

          <p>
            Vienna • Munich • Zurich
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
              src="https://images.unsplash.com/photo-16550893923-42d28e5677af?w=600"
              alt="Vienna"
            />
            <p>Vienna City</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-11295121783-8a321d551ad2?w=600"
              alt="Munich"
            />
            <p>Munich Streets</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-15022898657-3e91760cbb34?w=600"
              alt="Zurich"
            />
            <p>Zurich Lake</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-15005308557-b586d89ba3ee?w=600"
              alt="Alps"
            />
            <p>Swiss Alps</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏔️ Beautiful Swiss Landscapes</div>
          <div>🏰 Explore Historic European Cities</div>
          <div>🎻 Austrian & Bavarian Culture</div>
          <div>📸 Perfect Multi-Country Europe Tour</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore Europe in 7 Days</h2>

        <p>
          Discover Austria, Germany and Switzerland in one unforgettable journey
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
              src="https://images.unsplash.com/photo-15165508933-42d28e5677af?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 1</h3>

              <p style={{ color: "blue" }}>
                Vienna<br/>
Welcome to Vienna – The Imperial Capital of Austria!
              </p>

              <p>
               Arrive at Vienna Airport and enjoy a smooth private transfer to your hotel. After check-in, relax or
explore the elegant boulevards, gardens, traditional cafés, and classical architecture at your leisure.<br/>
Overnight Stay in Vienna

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1491553891-0055eca6402d?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 2</h3>

              <p style={{ color: "blue" }}>
               Vienna Hop-on Hop-off + Schönbrunn Palace
              </p>

              <p>
                Breakfast at Hotel.<br/>
Today explore Vienna using your 1-Day Hop-on Hop-off Bus Pass (SIC Basis). Visit major landmarks
including:<br/>
St. Stephen’s Cathedral<br/>
Vienna State Opera<br/>
Belvedere Palace<br/>
Danube Tower<br/>
Parliament & City Hall<br/>
Later, visit the majestic Schönbrunn Palace (Ticket Included), the former summer residence of the
Habsburg Royal Family. Walk through its lavish rooms and beautiful palace gardens.<br/>
Evening is free for leisure, shopping, or enjoying classical music concerts (optional).<br/>
Overnight Stay in Vienna

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-152129512178a321d551ad2?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 3</h3>

              <p style={{ color: "blue" }}>
                Vienna → Munich
              </p>

              <p>
                Breakfast at Hotel.<br/>
After breakfast, proceed for a private transfer from Vienna Hotel to the Train Station for your
journey to Munich.<br/>
Arrive in Munich and meet your driver for a private transfer from Munich Station to your hotel.
Spend the remaining day exploring the vibrant Marienplatz Square or enjoying Bavarian food.<br/>
Overnight Stay in Munich
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1512453979798-5e6f8880c?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 4</h3>

              <p style={{ color: "blue" }}>
                Munich Hop-on Hop-off City Tour
              </p>

              <p>
                Breakfast at Hotel.<br/>
Today enjoy your Munich Hop-on Hop-off Bus Tour (1 Day Pass – SIC Basis). Explore top attractions
such as:<br/>
Nymphenburg Palace<br/>
Olympic Park<br/>
BMW World<br/>
Karlplatz<br/>
Historic Old Town<br/>
Viktualienmarkt<br/>
Evening free to explore Munich’s beer gardens or walk around the old town.<br/>
Overnight Stay in Munich
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e60cbb34?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 5</h3>

              <p style={{ color: "blue" }}>
                Munich → Zurich
              </p>

              <p>
               Breakfast at Hotel.<br/>
Proceed for your private transfer from Munich Hotel to the Train Station. Board your train to
Switzerland.<br/>
Upon arrival at Zurich Station, use your Swiss Travel Pass (3 Days Continuous – Second Class) to travel
comfortably to your Zurich Hotel.<br/>
Rest of the day at leisure to explore the Old Town, Bahnhofstrasse, or lakeside promenades.<br/>
Overnight Stay in Zurich
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-150053085569786d89ba3ee?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 6</h3>

              <p style={{ color: "blue" }}>
                Lindt Chocolate Factory Visit
              </p>

              <p>
                Breakfast at Hotel.<br/>
Today, use your Swiss Travel Pass to visit the world-famous Lindt Home of Chocolate. Discover
interactive exhibits, learn about Swiss chocolate craftsmanship, and taste delicious varieties at the
chocolate tasting experience.<br/>
Return to Zurich and enjoy the evening freely.<br/>
Overnight Stay in Zurich
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1500530855697-bd89ba3ee?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 7</h3>

              <p style={{ color: "blue" }}>
                Zurich
              </p>

              <p>
                Breakfast at Hotel.<br/>
Check out and proceed to Zurich Airport using your Swiss Travel Pass for your flight back to India.
Your delightful Vienna–Munich–Zurich journey concludes with sweet memories, scenic experiences,
and royal European charm!
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("7 Days Vienna + Munich + Zurich Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Europe Highlights journey</p>
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

export default GermanyLanding5;