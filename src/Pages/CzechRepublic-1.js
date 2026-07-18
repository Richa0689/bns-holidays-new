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
    question: "What is the best time to visit Warsaw and Prague for this tour?",
    answer:
      "April to October is ideal, with May, June and September offering pleasant weather for sightseeing. Summer (July–August) is peak season with long daylight hours and vibrant outdoor cafes, while spring and early autumn bring milder temperatures and fewer crowds, perfect for exploring the old towns of both cities.",
  },
  {
    question: "What is included in the 6-day Classic Europe Escape: Warsaw & Prague package?",
    answer:
      "The package includes 5 nights accommodation (2 nights Warsaw, 3 nights Prague), daily breakfast, comfortable transfers between cities, guided city tours in Warsaw and Prague, and sightseeing at iconic landmarks along the way. International flights, visa fees and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Poland and the Czech Republic?",
    answer:
      "Indian passport holders require a Schengen visa, which covers travel across Warsaw and Prague on this itinerary. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Old Town Market Square and Royal Castle in Warsaw, Prague Castle and Charles Bridge, the Astronomical Clock in Prague's Old Town Square, and the charming lanes of Prague's Lesser Town.",
  },
  {
    question: "What currency is used across Poland and the Czech Republic?",
    answer:
      "Poland uses the Polish Złoty (PLN) and the Czech Republic uses the Czech Koruna (CZK). Cards are widely accepted in both countries, but it's useful to carry some local cash for small purchases and transit. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add a Krakow excursion, extra nights in Prague, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const WarsawPragueLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://res-2.cloudinary.com/gorealtravel/image/upload/c_limit,f_auto,q_auto,q_50/v1623750443/production/marketing/component/5908847535e1b9001b965581/image/warsaw-old-town-small.webp"
          alt="Warsaw & Prague Tour"
        />

        <div className="hero-content">
          <h1>Classic Europe Escape: Warsaw & Prague Highlights</h1>

          <p>
            Warsaw • Prague
          </p>

          <Link to="/Escape-Warsaw">
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
              src="https://tse4.mm.bing.net/th/id/OIP.cI4oyD6LrZJoIt0h08JFqwHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Old Town Market Square Warsaw"
            />
            <p>Old Town Market Square, Warsaw</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.gm3r55iN2o8e0TeZnrTIpgHaEq?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Royal Castle Warsaw"
            />
            <p>Royal Castle, Warsaw</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://wallpaperaccess.com/full/8070205.jpg"
              alt="Charles Bridge Prague"
            />
            <p>Charles Bridge, Prague</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.oz-WuCkCuiMZzA541s4B9wHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Prague Castle"
            />
            <p>Prague Castle</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Fairy-Tale Prague Castle</div>
          <div>🌉 Iconic Charles Bridge</div>
          <div>🕰️ Warsaw's Old Town Charm</div>
          <div>🍺 Rich Central European Culture</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Best of Poland & Czech Republic in 6 Days</h2>

        <p>
          From the resilient charm of Warsaw to the fairy-tale streets of Prague — a journey through the heart of Central Europe
        </p>

        <br />

        <Link to="/Escape-Warsaw">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>6 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://photos.smugmug.com/Warsaw/Warsaw-Transport/i-r8Hx6ct/0/caba7890/XL/warsaw-transport-airport-zone-A-XL.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>Arrival in Warsaw</p>
              <p>
Welcome to Warsaw — a city where history meets modern charm! 
Upon arrival, meet your private driver at the airport  
Enjoy a comfortable transfer to your hotel: Metropol Hotel Warsaw (or similar)  
Check in and relax  
Overnight Stay in Warsaw  
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media.istockphoto.com/photos/aerial-view-of-warsaw-downtown-poland-picture-id500335922?b=1&k=20&m=500335922&s=170667a&w=0&h=N6xSVcX7jI7eC_bcQnzfStGjTRg2wSHsiaxLV37K1kU="
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Warsaw City Tour</p>
              <p>
         Breakfast at the hotel  
        Warsaw Hop-On Hop-Off Bus Tour (24 Hours) 
Explore key attractions such as: 
Old Town Warsaw  
Royal Castle Warsaw  
Palace of Culture and Science  
Overnight Stay in Warsaw 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.eiu1k5nrg6IXckAwwXWWgQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Warsaw → Prague</p>
              <p>
           Breakfast at the hotel 
Private transfer to the airport 
Travel onward to Prague 
Meet your private driver and transfer to your hotel: Exe City Park Prague (or similar) 
Check in and relax 
Overnight Stay in Prague 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://euroaquatours.com/wp-content/uploads/2024/11/Best-River-Cruises-in-Prague.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Prague City Tour + River Cruise</p>
              <p>
             Breakfast at the hotel  
        Prague Hop-On Hop-Off Bus Tour (24 Hours) 
Explore top attractions: 
• Prague Castle  
• Charles Bridge  
• Old Town Square Prague  
              River Cruise Experience 
• Enjoy a relaxing cruise along the Vltava River  
• Admire Prague’s skyline from the water  
Apextion DMC 
Email: sales@apextiondmc.com, groups@apextiondmc.com || Contact No.: +91 11 4921 5555 
www.apextiondmc.com  
LONDON | PARIS | NEW DELHI | MUMBAI 
Overnight Stay in Prague
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.3cuyMn3a-CFt3Qqf-YRFywHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Český Krumlov Day Trip</p>
              <p>
       Breakfast at the hotel  
      Full-Day Trip to Český Krumlov (SIC) 
Highlights: 
Visit the UNESCO-listed old town  
Explore the stunning Český Krumlov Castle  
Walk through medieval streets and scenic river bends  
Overnight Stay in Prague 
 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.0HzvxSQfaIbKMv2bQmcpXgHaE6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Prague → Departure</p>
              <p>
• Breakfast at the hotel  
• Private transfer to the airport  
     Depart with unforgettable European memories  _________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("6 Days Classic Europe Escape: Warsaw & Prague Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Central European journey</p>
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

export default WarsawPragueLanding;