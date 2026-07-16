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
    question: "What is the best time to visit Barcelona and Madrid for this tour?",
    answer:
      "March to June and September to November are ideal, offering pleasant temperatures for exploring both cities on foot. Summer (July–August) can get quite hot, especially in Madrid, while spring and autumn bring comfortable weather and fewer crowds.",
  },
  {
    question: "What is included in the 5-day Best of Barcelona + Madrid package?",
    answer:
      "The package includes 4 nights accommodation (2 nights Barcelona, 2 nights Madrid), daily breakfast, comfortable transfers between cities, guided city tours in Barcelona and Madrid, and sightseeing at iconic landmarks along the way. International flights, visa fees and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Spain?",
    answer:
      "Indian passport holders require a Schengen visa, which covers travel across Spain on this itinerary. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Sagrada Familia and Park Güell in Barcelona, along with the Royal Palace, Retiro Park and Plaza Mayor in Madrid.",
  },
  {
    question: "What currency is used in Spain?",
    answer:
      "Spain uses the Euro (EUR). Cards are widely accepted across both cities, but it's useful to carry some local cash for small purchases and transit. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add a Toledo day trip, extra nights in Barcelona, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const BarcelonaMadridLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://wallpaperaccess.com/full/4255319.jpg"
          alt="Barcelona & Madrid Tour"
        />

        <div className="hero-content">
          <h1>Best of Barcelona + Madrid</h1>

          <p>
            Barcelona • Madrid
          </p>

          <Link to="/Barcelona-Madrid">
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
              src="https://www.baltana.com/files/wallpapers-29/La-Sagrada-Familia-Barcelona-HD-Wallpapers-96091.jpg"
              alt="Sagrada Familia Barcelona"
            />
            <p>Sagrada Familia, Barcelona</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Park-Guell.jpg"
              alt="Park Guell Barcelona"
            />
            <p>Park Güell, Barcelona</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://th.bing.com/th/id/R.1ac9724880d53eaa5c563def2382bb60?rik=3nlolcC%2bWP5toA&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f4%2f44%2fPlaza_Mayor_de_Madrid_06.jpg&ehk=7ReAbF%2bb4hSkF7NoZHMhQs2fgTrJEiG009W4RZULLwk%3d&risl=1&pid=ImgRaw&r=0"
              alt="Royal Palace Madrid"
            />
            <p>Royal Palace, Madrid</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://th.bing.com/th/id/R.1ac9724880d53eaa5c563def2382bb60?rik=3nlolcC%2bWP5toA&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f4%2f44%2fPlaza_Mayor_de_Madrid_06.jpg&ehk=7ReAbF%2bb4hSkF7NoZHMhQs2fgTrJEiG009W4RZULLwk%3d&risl=1&pid=ImgRaw&r=0"
              alt="Plaza Mayor Madrid"
            />
            <p>Plaza Mayor, Madrid</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏛️ Iconic Barcelona Landmarks</div>
          <div>🎨 Gaudí's Architectural Wonders</div>
          <div>👑 Royal Madrid Heritage</div>
          <div>🍷 Vibrant City Nightlife</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Best of Barcelona & Madrid in 5 Days</h2>

        <p>
          From Gaudí's Barcelona to Royal Madrid — a quick escape through Spain's finest cities
        </p>

        <br />

        <Link to="/Barcelona-Madrid">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>5 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/0c/5d/d7/e5/arrival-hall.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}> Barcelona – Arrival</p>
              <p>
               Barcelona – Arrival  
 
Welcome to Barcelona – The City of Gaudí! 
Your adventure begins with a smooth transfer from the airport to your hotel, where you’ll be ready 
to immerse yourself in the magic of Barcelona. Whether you're here for the art, the culture, the 
fashion, or the food, Barcelona offers an abundance of experiences waiting to be explored. 
 Overnight Stay in Barcelona 
 

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.A5Bqq8YNJ_0rNKUB-fN7cQHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Barcelona – Barcelona hop-on hop-off tours</p>
              <p>
               Breakfast at Hotel. 
After breakfast proceed to Barcelona hop-on hop-off tours are a convenient way to see the city's 
main attractions using a double-decker bus that runs on two different routes. You can purchase 24- 
or 48-hour passes that allow unlimited stops at key landmarks like the Sagrada Familia and Park 
Güell, with the buses providing audio commentary and free Wi-Fi.  
 Overnight stay at Barcelona.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.EzT-qqMgYC5TbwCEmSFpLAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Barcelona - Madrid</p>
              <p>
               fter Breakfast Check - out from Barcelona Hotel.  
Travelling by train from Barcelona to Madrid is a breeze! The high-speed train journey takes around 
2 hours and 30 minutes, covering a distance of approximately 505 kilometers. You'll have plenty of 
options to choose from, with around 40-50 trains operating daily, including Renfe AVE, iryo, Ouigo, 
and Avlo. 
Welcome Madrid! The vibrant capital of Spain, Madrid is a city of art, culture, and passion! Known for 
its stunning architecture, world-class museums, and lively nightlife, Madrid is a must-visit destination. 
 Overnight stay at Madrid. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.travelguide.net/media/madrid.jpeg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Madrid –Madrid City Tour (SIC Basis – 1.5 hrs approx.)</p>
              <p>
                After breakfast, enjoy the Madrid City Tour on SIC Basis, covering key highlights of Madrid including 
historical monuments, iconic squares, and architectural landmarks. Afternoon and evening at 
leisure. 
Experience the best of Madrid on a Big Bus open-top sightseeing tour! Sit back and soak up the city's 
vibrant energy as your live guide shares the stories behind iconic landmarks like the Royal Palace, 
 Prado Museum, and Puerta de Alcalá. Cruise through lush parks like El Retiro and the Royal Botanic 
Gardens, and marvel at stunning architecture like Cibeles Palace and Almudena Cathedral. 
 Overnight stay at Madrid. 

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://c8.alamy.com/comp/2T59BTR/departures-hall-in-terminal-4-madridbarajas-airport-barajas-district-madrid-kingdom-of-spain-2T59BTR.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Madrid – Departure</p>
              <p>
                After Breakfast Check - out from Madrid Hotel. 
After breakfast proceed to airport with private transfer.
                ________________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("5 Days Best of Barcelona + Madrid Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Spanish journey</p>
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

export default BarcelonaMadridLanding;