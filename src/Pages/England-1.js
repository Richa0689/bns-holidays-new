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
    question: "What is the best time to visit the UK for this London-Cardiff-Liverpool tour?",
    answer:
      "Late Spring to early Autumn (May–September) offers the mildest weather and the longest daylight hours, ideal for sightseeing in London, exploring Cardiff Castle, and touring Liverpool's waterfront. December also has a special charm with festive markets and lights, though days are shorter.",
  },
  {
    question: "What is included in the 7-day Classic UK Escape package?",
    answer:
      "The package includes hotel accommodation for 6 nights (2 nights each in London, Cardiff and Liverpool), daily breakfast, coach transfers between cities, guided city tours in London, Cardiff and Liverpool, and sightseeing along the way including Welsh countryside and Beatles heritage sites. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to the UK?",
    answer:
      "Indian passport holders require a UK Standard Visitor visa. We recommend applying at least 6–8 weeks before your travel date to allow time for appointments and processing. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include Big Ben, the Tower of London and Buckingham Palace in London, the medieval Cardiff Castle and vibrant Cardiff Bay in Wales, and the Royal Albert Dock, Beatles Story and Anfield in Liverpool, along with scenic drives through the English and Welsh countryside.",
  },
  {
    question: "What currency is used across the UK?",
    answer:
      "The Pound Sterling (GBP) is used throughout the UK. Cards are widely accepted almost everywhere, including on buses and the London Underground, though it's handy to carry some cash for small purchases. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add extra nights in London, an Edinburgh extension, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const UKLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.gsGXTQX4nBMhMh55SqTLXwHaFj?r=0&w=2048&h=1536&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="UK Tour"
        />

        <div className="hero-content">
          <h1>UK</h1>

          <p>
            London • Cardiff • Liverpool
          </p>

          <Link to="/uk">
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
              src="https://tse2.mm.bing.net/th/id/OIP.A2DX-Y-ROa-qM3C20BgXYQHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="London"
            />
            <p>London Skyline</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://wallpapers.com/images/hd/beautiful-cardiff-castle-1ayq85y7fmjjemh8.jpg"
              alt="Cardiff Castle"
            />
            <p>Cardiff Castle</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://liverpoolpictorial.co.uk/wp-content/uploads/2022/08/liverpool-waterfront-sunrise-1918x1280.jpg"
              alt="Liverpool Waterfront"
            />
            <p>Liverpool Waterfront</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://wallpaperaccess.com/full/3919112.jpg"
              alt="Welsh Countryside"
            />
            <p>Welsh Countryside</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Iconic British Landmarks</div>
          <div>🎶 The Beatles' Liverpool</div>
          <div>🐉 Medieval Cardiff Castle</div>
          <div>📸 England & Wales in One Trip</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Classic Britain in 7 Days</h2>

        <p>
          From royal palaces to medieval castles, from the Thames to the Mersey — the ultimate UK escape
        </p>

        <br />

        <Link to="/uk">
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
              src="https://wallpaperbat.com/img/139657-india-hd-wallpaper-top-free-india-hd-background.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}> India → London</p>
              <p>
             Welcome to London — one of the world’s most iconic capitals<br/> 
             Upon arrival, meet your private driver in the arrivals hall  
             Enjoy a comfortable transfer to your hotel: The California Hotel (or similar)  
             Check in and relax after your journey <br/> 
             Overnight Stay in London
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
              <p style={{ color: "blue" }}>London City Tour + London Eye + River Cruise </p>
              <p>
                Breakfast at the hotel <br/>
                Hop-On Hop-Off City Tour (24 Hours) 
                Explore famous landmarks such as: <br/>
                Big Ben <br/>
                Buckingham <br/> 
                St. Paul's Cathedral<br/> 
               Tower Bridge <br/>
               London Eye Experience <br/>
               Enjoy a 30-minute ride with panoramic city views <br/>
 
              River Thames Cruise <br/>
              Relax on a scenic cruise along the River Thames<br/> 
             Pass iconic landmarks like:<br/> 
              The Shard <br/>
             Tower of London <br/>
             Overnight Stay in London 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.t1NOhR4MqcXXbxrzhcr6gAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>London → Cardiff </p>
              <p>
             Breakfast at the hotel<br/> 
             Private transfer to the station <br/>
             Board your train to Cardiff <br/>
             Upon arrival, private transfer to your hotel: Holiday Inn Cardiff City Centre (or similar)<br/> 
             Rest of the day at leisure<br/> 
             Overnight Stay in Cardiff
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://m.somewheregood.com/media/cardiff-city-highlights-guided-walking-tour-2-d5158-472427P1-1.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Cardiff – City Highlights Walking Tour </p>
              <p>
              Breakfast at the hotel<br/>   
              City Highlights Guided Walking Tour of Cardiff <br/> 
              Discover the charm of Wales’ capital, including: <br/> 
              Cardiff Castle  <br/> 
              Bute Park  <br/> 
              Cardiff Bay  <br/> 
              Enjoy insights into Welsh history, culture, and local life with your expert guide.<br/>  
              Overnight Stay in Cardiff 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://cdn.cardiffcityfc.co.uk/sites/default/files/styles/og_image_style_2_1/public/2022-02/LFC-AWAY-GUIDE.jpg?h=8abcec71&itok=aahkqNQB"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Cardiff → Liverpool</p>
              <p>
             Breakfast at the hotel<br/>   
             Private transfer to the station <br/>  
             Board your train to Liverpool <br/>  
             Upon arrival: <br/> 
             Private transfer to your hotel: Holiday Inn Express Liverpool Central (or similar) <br/>  
             Overnight Stay in Liverpool
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0f/14/69/aa.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}> Liverpool City Tour + River Cruise </p>
              <p>
              Breakfast at the hotel <br/>  
              Hop-On Hop-Off Bus Tour <br/> 
              Explore Liverpool’s top attractions:<br/>  
              • Royal Albert Dock <br/>  
              • Liverpool Cathedral  <br/> 
              • The Beatles Story  <br/> 
                River Cruise Experience<br/>  
              • Enjoy a scenic cruise along the River Mersey <br/>  
              • Take in the city’s famous waterfront skyline<br/>   
                Overnight Stay in Liverpool 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.7LskqpQgCBBj4k8q5V0p2AHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>   Liverpool → India </p>
              <p>
             Breakfast at the hotel<br/>   
             Private transfer to the airport for your departure <br/> 
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
            onClick={() => setActiveModal("Classic UK Escape: London, Cardiff & Liverpool Highlights")}
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

export default UKLanding;