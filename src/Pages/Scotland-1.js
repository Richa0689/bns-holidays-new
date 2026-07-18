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
    question: "What is the best time to visit England, Wales and Scotland for this tour?",
    answer:
      "May to September is ideal, with long daylight hours, milder weather and blooming countryside across London, Newport and Edinburgh. Summer (June–August) is peak season, great for outdoor sightseeing and Highland excursions, while spring and early autumn offer fewer crowds and comfortable temperatures for city walks.",
  },
  {
    question: "What is included in the 7-day Classic UK Escape package?",
    answer:
      "The package includes 6 nights accommodation (2 nights London, 2 nights Newport, 2 nights Edinburgh), daily breakfast, comfortable coach transfers between cities, guided city tours in London, Newport and Edinburgh, and sightseeing at iconic landmarks along the way. International flights, visa fees and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to the United Kingdom?",
    answer:
      "Indian passport holders require a UK Standard Visitor Visa, which covers travel across England, Wales and Scotland on this itinerary. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Tower Bridge and London Eye in London, the historic Cardiff Castle and Wales countryside near Newport, the dramatic Edinburgh Castle perched above the city, and a walk down the Royal Mile in Scotland's charming capital.",
  },
  {
    question: "What currency is used across the UK?",
    answer:
      "The United Kingdom uses the Pound Sterling (GBP) across England, Wales and Scotland. Cards are widely accepted everywhere, but it's useful to carry some local cash for small purchases and transit. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add a Scottish Highlands excursion, extra nights in London, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const UKEscapeLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80"
          alt="UK Escape Tour"
        />

        <div className="hero-content">
          <h1>Classic UK Escape</h1>

          <p>
            London • Newport • Edinburgh
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
              src="https://images5.alphacoders.com/680/680462.jpg"
              alt="Tower Bridge London"
            />
            <p>Tower Bridge, London</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.epAe5DMUxEmoNJHUYAXmmQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Cardiff Castle Wales"
            />
            <p>Cardiff Castle, Wales</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images2.alphacoders.com/476/476014.jpg"
              alt="Edinburgh Castle"
            />
            <p>Edinburgh Castle</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://wallpapers.com/images/hd/edinburgh-royal-mile-dramatic-sky-esenbn98xso0b7n1.jpg"
              alt="Scottish Highlands"
            />
            <p>Royal Mile, Edinburgh</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Iconic London Landmarks</div>
          <div>🌊 Charming Welsh Coastlines</div>
          <div>🏴󠁧󠁢󠁳󠁣󠁴󠁿 Historic Edinburgh Old Town</div>
          <div>📸 Postcard-Perfect Castles</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Best of Britain in 7 Days</h2>

        <p>
          From the buzz of London to the storybook charm of Edinburgh — a journey through the heart of the UK
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
              src="https://images.unsplash.com/photo-1543832923-44667a44c804?auto=format&fit=crop&w=1200&q=80"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>India → London</p>
              <p>
          Welcome to one of the world’s most iconic capitals! 
Upon arrival, meet your private driver in the arrivals hall.  
Enjoy a comfortable transfer to your hotel: The California Hotel (or similar)  
Check in and relax after your journey.  
Overnight Stay in London 
 
Day 2 London City Tour + London Eye + River Cruise 
 
Breakfast at the hotel. 
Proceed for your Hop-On Hop-Off City Tour (24 hours) 
Explore famous landmarks such as: 
Big Ben 
Buckingham Palace 
St. Paul's Cathedral 
Tower Bridge 
      London Eye Experience 
Entry to the London Eye 
30-minute ride with panoramic city views 
              River Thames Cruise 
Relax on a scenic cruise along the River Thames 
Pass landmarks like: 
The Shard 
Tower of London 
 
Overnight Stay in London 
 
Day 3 London → Newport 
 
Breakfast at the hotel 
Private transfer to the train station 
Board your train to Newport 
Private transfer to your hotel: Holiday Inn Express Newport (or similar) 
Rest of the day at leisure
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.londoneye.com/media/f52ph0vw/22747_riverboat-tour_1a__boat_005_rgb_ns_licensed_until_jun2025.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>London City Tour + London Eye + River Cruise</p>
              <p>
      Breakfast at the hotel. 
Proceed for your Hop-On Hop-Off City Tour (24 hours) 
Explore famous landmarks such as: 
Big Ben 
Buckingham Palace 
St. Paul's Cathedral 
Tower Bridge 
      London Eye Experience 
Entry to the London Eye 
30-minute ride with panoramic city views 
              River Thames Cruise 
Relax on a scenic cruise along the River Thames 
Pass landmarks like: 
The Shard 
Tower of London 
 Overnight Stay in London 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://wallpaperbat.com/img/58601620-wallpaper-london-england-bridges-rivers.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>London → Newport</p>
              <p>
               Breakfast at the hotel 
Private transfer to the train station 
Board your train to Newport 
Private transfer to your hotel: Holiday Inn Express Newport (or similar) 
Rest of the day at leisure
Overnight Stay in Newport
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://i.pinimg.com/originals/b0/35/72/b0357202e80c260d962d5d1ab1b2731d.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Newport – Yacht Sightseeing Cruise</p>
              <p>
        Breakfast at the hotel 
         Yacht Sightseeing Cruise 
Enjoy a relaxing standard sightseeing yacht cruise 
Experience scenic waterfront views and coastal charm 
 You can also explore nearby attractions such as: 
 Newport Transporter Bridge 
Tredegar House 
Overnight Stay in Newport 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://th.bing.com/th/id/OIP.JQdy25l82Tw0W2wY5n99SgHaEK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Newport → Edinburgh</p>
              <p>
                • Breakfast at the hotel  
• Private transfer to the station  
• Board your train to Edinburgh  
            Upon arrival: 
• Private transfer to your hotel: Holiday Inn Express Edinburgh City Centre (or similar)  
Overnight Stay in Edinburgh 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://wallpaperaccess.com/full/914359.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Edinburgh City Tour + Edinburgh Castle</p>
              <p>
               Breakfast at the hotel  
        Hop-On Hop-Off Tour (24 Hours) 
Discover top attractions including: 
Royal Mile  
Holyrood Palace  
Arthur's Seat  
      Edinburgh Castle Visit 
Entry to Edinburgh Castle  
Learn about Scottish history and enjoy stunning city views  
 Overnight Stay in Edinburgh
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://wallpapercrafter.com/desktop2/752953-Edinburgh-Scotland-city-architecture-Gothic-architecture.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Edinburgh → India</p>
              <p>
             Breakfast at the hotel 
Private transfer to the airport for your return journey 
 Depart with unforgettable UK memories    
                ________________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("7 Days Classic UK Escape Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your British journey</p>
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

export default UKEscapeLanding;