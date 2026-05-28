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
              src="data:image/jpeg;base64,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"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzSxfWBTbuCGTipNoRMNkAZz9imPSFE9rdtg&s"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyhRlmbDx3bzlKue2zzmG_rVFZuuvW_NpUKA&s"
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
              src="data:image/jpeg;base64,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"
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
              src="data:image/jpeg;base64,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"
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
              src="data:image/jpeg;base64,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"
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
              src="data:image/jpeg;base64,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"
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