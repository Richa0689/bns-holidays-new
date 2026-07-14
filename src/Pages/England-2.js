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
    question: "What is the best time to visit the UK for this England & Wales tour?",
    answer:
      "Late spring through early autumn (May–September) offers the mildest weather across London, Cardiff, and Manchester, with longer daylight hours for sightseeing. Summer months are busiest, while shoulder months like May and September offer pleasant weather with fewer crowds.",
  },
  {
    question: "What is included in the 7-day Classic UK Escape package?",
    answer:
      "The package includes hotel accommodation for 6 nights, daily breakfast, coach transfers between cities, city tours in London, Cardiff and Manchester, and entry to select attractions along the route. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to the UK?",
    answer:
      "Indian passport holders require a UK Standard Visitor visa. We recommend applying at least 8–10 weeks before your travel date, as appointment slots can fill up. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Tower of London and Buckingham Palace in London, Cardiff Castle and Cardiff Bay in Wales, and the Manchester City Centre along with its rich football and industrial heritage.",
  },
  {
    question: "What currency is used across the UK?",
    answer:
      "The British Pound Sterling (GBP) is used throughout England and Wales. Cards are widely accepted everywhere, but it is useful to carry some cash for small purchases and transit. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add extra nights in London, a Scotland extension, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const UKEscape = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://tse4.mm.bing.net/th/id/OIP.cehevQqYzTI88dgzZoNR0AHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="UK Tour"
        />

        <div className="hero-content">
          <h1>UK ESCAPE</h1>

          <p>
            London • Cardiff • Manchester
          </p>

          <Link to="/UK-Escape">
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
              src="https://wallpaper-house.com/data/out/12/wallpaper2you_576863.jpg"
              alt="London"
            />
            <p>Tower Bridge, London</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://wallpaperaccess.com/full/1754921.jpg"
              alt="Buckingham Palace"
            />
            <p>Buckingham Palace</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://www.shutterstock.com/image-photo/cardiff-wales-uk-medieval-castle-600nw-2556027051.jpg"
              alt="Cardiff Castle"
            />
            <p>Cardiff Castle</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://wallpaperaccess.com/full/4546461.jpg"
              alt="Manchester"
            />
            <p>Manchester City Centre</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Historic Castles & Royal Landmarks</div>
          <div>🌉 Iconic London Skyline</div>
          <div>⚽ Manchester's Sporting Heritage</div>
          <div>🏴󠁧󠁢󠁷󠁬󠁳󠁿 The Charm of the Welsh Capital</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience England & Wales in 7 Days</h2>

        <p>
          From royal palaces to Welsh castles, from red-brick London streets to Manchester's
          vibrant city centre — the classic UK escape
        </p>

        <br />

        <Link to="/UK-Escape">
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
              src="https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2026/03/06110743/Which-Indian-City-is-known-as-the-London-of-India.webp"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>India – London </p>
              <p>
              Welcome to London – World’s most vibrant and historic capitals<br /> 
             Upon arrival at the airport, meet your private driver in the arrivals hall for a smooth transfer to your hotel.<br /> 
              Check in and relax after your journey.<br />
              Overnight Stay in London
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://thamesriver.cruises/wp-content/uploads/2023/12/london-eye-thames-river-cruise-8-1024x683.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>London – City tour with London Eye and London River Cruise  </p>
              <p>
                Breakfast at the hotel. <br />
              Proceed for your Hop-On Hop-Off City Tour (24 hours). <br />
              Explore iconic landmarks such as: <br />
             • Big Ben  <br />
             • Buckingham Palace<br />  
             • St. Paul's Cathedral <br /> 
             • Tower Bridge <br /> 
              London Eye Experience <br />
               Enjoy entry to the London Eye: <br />
             • 30-minute ride in a glass capsule  <br />
             • Panoramic views of the London skyline  <br />
             • Great photo opportunities  <br />
                River Thames Cruise <br />
                Relax on a scenic cruise along the River Thames:<br /> 
             • Pass landmarks like The Shard and Tower of London <br /> 
             • Enjoy live or audio commentary<br />  
                Overnight Stay in London 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.acprail.com/wp-content/uploads/2018/07/london-cardiff-1024x684.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}> London → Cardiff </p>
              <p>
              Breakfast at the hotel.<br />  
 
             Private transfer to the train station and board your train to Cardiff. <br /> 
             Overnight Stay in Cardiff
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://wallpaperbat.com/img/610841-free-download-image-united-kingdom-cardiff-castle-castles-pond-cities-2560x1440-2560x1440-for-your-desktop-mobile-tablet-explore-cardiff-wallpaper-cardiff-wallpaper-cardiff-city-fc-wallpaper.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Explore highlights of the city including </p>
              <p>
              Explore highlights of the city including: <br />
             Cardiff Castle <br />
             Principality Stadium <br />
             Cardiff Bay waterfront <br />
             Learn about Welsh history, culture, and architecture. <br />
             Overnight Stay in Cardiff.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images8.alphacoders.com/976/thumb-1920-976200.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}> Cardiff → Manchester </p>
              <p>
              Breakfast at the hotel.<br /> 
              Private transfer to the station for your train to Manchester. <br />
              Upon arrival, private transfer to your hotel. <br />
             Rest of the day at leisure. <br />
             Overnight Stay in Manchester 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.world-tourism.org/wp-content/uploads/2025/09/manchester-canal-river-cruise-2.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Manchester Canal & River Cruise</p>
              <p>Breakfast at the hotel. <br />
Enjoy a relaxing Manchester Canal & River Cruise: <br />
• Discover the city’s industrial heritage <br /> 
• Cruise through historic waterways <br /> 
• Pass landmarks like Old Trafford (area views depending on route) <br /> 
Rest of the day free for:<br /> 
• Shopping <br /> 
• Exploring Northern Quarter <br /> 
• Football attractions <br /> 
 Overnight Stay
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.timesnowhindi.com/photo/msid-152351960/152351960.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}> Manchester → India</p>
              <p>
              Breakfast at the hotel.<br /> 
              Private transfer to the airport for your return journey.<br /> 
              Depart with wonderful memories of your UK experience.
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("7 Days Classic UK Escape: London, Cardiff & Manchester")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your UK journey</p>
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

export default UKEscape;