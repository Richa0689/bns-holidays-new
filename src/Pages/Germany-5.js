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
      "This three-country route is wonderful in every season. Summer (June–August) is perfect for outdoor sightseeing, lakeside strolls in Zurich, and Munich's famous beer gardens. Winter (December–February) transforms all three cities with magical Christmas markets. Spring and autumn offer pleasant temperatures and fewer crowds — great for a relaxed European experience.",
  },
  {
    question: "What is included in the 8-day Europe tour package?",
    answer:
      "The package includes 7 nights of hotel accommodation, daily breakfast, intercity travel between Vienna, Munich, and Zurich, airport transfers, and sightseeing as per the itinerary. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need separate visas for Austria, Germany, and Switzerland?",
    answer:
      "No — all three countries are part of the Schengen Area, so a single Schengen visa covers your entire trip. Indian passport holders should apply at least 4–6 weeks before their travel date. Our team is happy to assist with documentation and the application process.",
  },
  {
    question: "What are the top highlights of this 8-day tour?",
    answer:
      "Must-see highlights include Vienna's Schönbrunn Palace and St. Stephen's Cathedral, Munich's Marienplatz and Nymphenburg Palace, and Zurich's scenic lake, charming Old Town, and an excursion into the Swiss Alps. This itinerary perfectly balances imperial history, Bavarian culture, and Swiss natural beauty.",
  },
  {
    question: "What currencies are used across these countries?",
    answer:
      "Austria and Germany use the Euro (€), while Switzerland uses the Swiss Franc (CHF). Cards are widely accepted at hotels, restaurants, and attractions across all three countries. Carrying a small amount of local currency is useful for markets, tips, and smaller cafés.",
  },
  {
    question: "Can I customise this 8-day itinerary?",
    answer:
      "Absolutely! Every itinerary can be tailored to your preferences, travel dates, and budget. Whether you'd like to add Neuschwanstein Castle, Rhine Falls, Hallstatt, or a Swiss mountain railway experience, our team will craft the perfect personalised European journey for you.",
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
const GermanyLanding6 = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Schloss_Sch%C3%B6nbrunn_Wien_2014_%28Zuschnitt_2%29.jpg/1280px-Schloss_Sch%C3%B6nbrunn_Wien_2014_%28Zuschnitt_2%29.jpg"
          alt="Europe Tour"
        />

        <div className="hero-content">
          <h1>Austria, Germany & Switzerland</h1>

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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY8b-ZVznpfg3XXAoE2D2DuyJ3AnUVxDY-3A&s"
              alt="Vienna"
            />
            <p>Vienna Heritage</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://content.api.news/v3/images/bin/a7b05012bfac9b7603ee8c96c876442f"
              alt="Munich"
            />
            <p>Munich Culture</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://media.istockphoto.com/id/514786130/photo/historic-city-of-zurich-with-river-limmat-switzerland.jpg?s=612x612&w=0&k=20&c=jqDLYsz3__W2ail1iGH9kY7XN9m3BBBJt0jwBFCeJf0="
              alt="Zurich"
            />
            <p>Zurich Lake</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://i.natgeofe.com/n/c69de239-9c4b-454e-a411-f51b322e5c16/Haslital_3x2.jpg"
              alt="Swiss Alps"
            />
            <p>Swiss Alps</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏔️ Stunning Swiss Landscapes</div>
          <div>🏰 Historic European Attractions</div>
          <div>🎻 Austrian & Bavarian Culture</div>
          <div>📸 Perfect Multi-Country Europe Journey</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore Europe in 8 Days</h2>

        <p>
          Experience the beauty of Austria, Germany and Switzerland
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
        <h2>08 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0YaNspVgsw0cL2lVNUSt6F-J7tThyj8e05w&s"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiJ8nEd35f8L2d7dx2C3U_6AI1Y0nGDygGRA&s"
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
              src="data:image/jpeg;base64,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"
              alt=""
            />

            <div className="day-content">
              <h3>Day 3</h3>

              <p style={{ color: "blue" }}>
               Bratislava & Countryside Guided Half Day Tour on sic basis
              </p>

              <p>
                The best of Bratislava and western Slovakia in a single, unforgettable day. This tour is designed for
travellers who want more than a quick city visit — it’s a full cultural journey blending capital
highlights, castles, caves, nature, and authentic local food, all within easy reach of Vienna. Instead of
spending hours in transit, you’ll spend your day exploring.<br/>
Overnight Stay in Vienna
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://res.klook.com/image/upload/fl_lossy.progressive,q_60/Mobile/City/xxm5eghz6vaayblixclj.jpg"
              alt=""
            />

            <div className="day-content">
              <h3>Day 4</h3>

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
              <h3>Day 5</h3>

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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_wk7o1LJYkMrvo22seU2w7cSzYKs7amwxOA&s"
              alt=""
            />

            <div className="day-content">
              <h3>Day 6</h3>

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
              <h3>Day 7</h3>

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
              <h3>Day 8</h3>

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
            onClick={() => setActiveModal("8 Days Vienna + Munich + Zurich Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Austria, Germany & Switzerland journey</p>
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

export default GermanyLanding6;