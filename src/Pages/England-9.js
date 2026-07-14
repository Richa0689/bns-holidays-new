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
    question: "What is the best time to visit London and Dublin for this tour?",
    answer:
      "Late Spring to early Autumn (May–September) offers the mildest weather and longest daylight hours, perfect for sightseeing in London and exploring Dublin's streets and countryside. December also has festive charm with Christmas markets, though days are shorter.",
  },
  {
    question: "What is included in the 7-day London + Ireland package?",
    answer:
      "The package includes hotel accommodation for 6 nights (3 nights in London, 3 nights in Dublin), daily breakfast, flight/transfer between London and Dublin, guided city tours in both cities, and sightseeing including Windsor, London Eye, River Thames cruise and the Wicklow countryside. International flights to/from India and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to the UK and Ireland?",
    answer:
      "Indian passport holders require a UK Standard Visitor visa and a separate Irish visa (Ireland is not part of the Schengen Area). We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include Big Ben, the Tower of London and Buckingham Palace in London, plus a River Thames cruise, followed by Dublin Castle, Trinity College, Temple Bar and the stunning Wicklow Mountains or Cliffs of Moher countryside in Ireland.",
  },
  {
    question: "What currencies are used across London and Dublin?",
    answer:
      "London uses the Pound Sterling (GBP) while Dublin uses the Euro (EUR). Cards are widely accepted in both cities, though it's handy to carry some local cash for small purchases. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like extra nights in London, a Cliffs of Moher day trip from Dublin, or upgraded hotels, our team will curate the perfect personalised experience for you.",
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
const LondonIrelandLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://res.cloudinary.com/djcyhbk2e/image/upload/f_auto,q_35,w_1200/v1/gvv/prod/london-tower-bridge"
          alt="London Ireland Tour"
        />

        <div className="hero-content">
          <h1>London + Ireland</h1>

          <p>
            London • Dublin
          </p>

          <Link to="/London-Ireland">
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
              src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop"
              alt="London"
            />
            <p>London Skyline</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=1200&auto=format&fit=crop"
              alt="Dublin Castle"
            />
            <p>Dublin Castle</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1549918864-48ac978761a4?q=80&w=1200&auto=format&fit=crop"
              alt="Temple Bar Dublin"
            />
            <p>Temple Bar, Dublin</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1590418606746-018840f9cd0f?q=80&w=1200&auto=format&fit=crop"
              alt="Wicklow Mountains"
            />
            <p>Wicklow Countryside</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Iconic British Landmarks</div>
          <div>🍀 The Charm of Dublin</div>
          <div>🎡 London Eye & Thames Cruise</div>
          <div>📸 Two Capitals, One Trip</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience London & Ireland in 7 Days</h2>

        <p>
          From royal palaces to lively Irish pubs, from the Thames to the Liffey — the ultimate Isles escape
        </p>

        <br />

        <Link to="/London-Ireland">
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
              src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}> India → London</p>
              <p>
             Arrival in London: Begin Your English Journey<br/> 
 
London Eye Entry Ticket, Thames River Cruise Ticket, and London Hop On Hop Off Tour (as per next 
day’s program, subject to availability) <br/>
 
Welcome to London, the timeless and vibrant capital of the United Kingdom. Upon arrival at London 
Heathrow Airport, you will be greeted and transferred privately to your hotel, ensuring a smooth and 
comfortable start to your holiday.<br/> 
London’s charm is felt instantly, with its iconic landmarks, classic architecture, cosmopolitan 
atmosphere, and rich blend of history and culture. Spend your first evening discovering the lively 
streets, traditional pubs, charming cafés, or simply relaxing after your journey. <br/>
 Overnight Stay in London
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1520986606214-8b456906c813?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>London – London Hop on Hop Off Tour and London Eye Visit </p>
              <p>
                Breakfast at Hotel.<br/> 
London Eye Entry Ticket, Thames River Cruise Ticket, and London Hop on Hop Off Tour 
 After breakfast, proceed for your one-day London Hop on Hop Off city tour on SIC basis. This tour 
offers a perfect introduction to the city as you explore major attractions at your own pace. 
You will also enjoy your visit to the renowned London Eye, one of the world’s tallest observation 
wheels, offering panoramic views of the River Thames, Big Ben, Houses of Parliament, and the city 
skyline.<br/> 
Later, enjoy your Thames River Cruise, gliding through the heart of London and witnessing historic 
landmarks from a unique and scenic perspective. <br/>
 Overnight Stay in London
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1543525238-a04e0c96c9e5?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>London – Windsor Castle, Bath and Stonehenge Tour </p>
              <p>
            Breakfast at Hotel. <br/>
Windsor Castle, Bath and Stonehenge Tour with All Tickets Included 
After breakfast, prepare for a full-day tour on SIC basis to three of England’s most iconic heritage 
sites. Your journey begins at Windsor Castle, the oldest and largest occupied castle in the world,
where you will explore the State Apartments and St. George’s Chapel.<br/> 
Continue to the UNESCO-listed city of Bath, admired for its Georgian architecture and Roman Baths.<br/> 
Your final stop is Stonehenge, one of the world’s most mysterious prehistoric monuments. Learn 
about its ancient origins and significance while soaking in the dramatic views of Salisbury Plain. <br/>
 
Overnight Stay in London
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>London → Dublin </p>
              <p>
             Breakfast at Hotel.<br/> 
After breakfast, a private transfer will take you from your London hotel to London Heathrow Airport 
for your onward flight to Dublin.<br/> 
Upon arrival at Dublin Airport, a private transfer will take you to your hotel. 
Dublin, Ireland’s charming and lively capital, offers a warm welcome with its historic streets, literary 
legacy, friendly pubs, and vibrant cultural atmosphere. Spend your evening exploring the city’s inviting 
neighbourhoods and riverside walks.<br/> 
 Overnight Stay in Dublin 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1549918864-48ac978761a4?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Dublin – Cliffs of Moher, Burren and Galway City Tour </p>
              <p>
             Breakfast at Hotel.<br/> 
Cliffs of Moher, Burren and Galway City Day Tour<br/> 
 After breakfast, proceed for a full-day tour on SIC basis to some of Ireland’s most breathtaking natural 
and cultural wonders. <br/>
Your journey begins with the spectacular Cliffs of Moher, offering dramatic views over the Atlantic 
Ocean. <br/>
Continue through the otherworldly landscapes of the Burren, known for its limestone formations and 
rare flora. <br/>
The tour concludes with a visit to the vibrant city of Galway, famous for its lively streets, arts scene, 
and colourful harbourfront. This experience provides a perfect blend of Ireland’s natural beauty and 
cultural charm.<br/> 
 Overnight Stay in Dublin
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1590418606746-018840f9cd0f?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}> Dublin – Dublin Hop On Hop Off Tour</p>
              <p>
              Breakfast at Hotel.<br/>  
Dublin Hop On Hop Off Tour <br/> 
 After breakfast, enjoy your one-day Dublin Hop On Hop Off tour on SIC basis, which offers a 
wonderful overview of the city’s most significant attractions. <br/> 
Explore landmarks such as Trinity College, St. Patrick’s Cathedral, Dublin Castle, Temple Bar, and 
more, all at your own pace. The informative commentary enhances your understanding of Dublin’s 
rich history, literature, and warm Irish spirit.<br/>  
 Overnight Stay in Dublin 

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>   Dublin → India </p>
              <p>
             Breakfast at Hotel.<br/>  
After breakfast, proceed with a private transfer to Dublin Airport for your return journey, marking 
the end of your memorable London and Ireland holiday.
                ________________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("Explore London + Ireland Combination")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your London & Ireland journey</p>
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

export default LondonIrelandLanding;