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
    question: "What is the best time to visit Barcelona, Madrid and Ibiza for this tour?",
    answer:
      "May to September is ideal, with June and September offering warm weather, sunny beaches and lively city life. Summer (July–August) is peak season for Ibiza's beach and party scene, while May, June and September bring slightly cooler temperatures and fewer crowds, perfect for sightseeing in Barcelona and Madrid.",
  },
  {
    question: "What is included in the 9-day Best of Barcelona, Madrid & Ibiza package?",
    answer:
      "The package includes 8 nights accommodation (3 nights Barcelona, 3 nights Madrid, 2 nights Ibiza), daily breakfast, comfortable transfers between cities, guided city tours in Barcelona and Madrid, and sightseeing at iconic landmarks along the way. International flights, visa fees and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Spain?",
    answer:
      "Indian passport holders require a Schengen visa, which covers travel across Barcelona, Madrid and Ibiza on this itinerary. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Sagrada Familia and Park Güell in Barcelona, the Royal Palace and Prado Museum in Madrid, an optional day trip to Toledo, and the stunning beaches and sunset views of Ibiza.",
  },
  {
    question: "What currency is used across Spain?",
    answer:
      "Spain uses the Euro (EUR) across Barcelona, Madrid and Ibiza. Cards are widely accepted everywhere, but it's useful to carry some local cash for small purchases and transit. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add a Costa Brava excursion, extra nights in Ibiza, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const BarcelonaMadridIbizaLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://gogetatrip.com/assets/images/european/sidebanner/madrid_ibiza_barcelona_sideimg5.webp"
          alt="Barcelona, Madrid & Ibiza Tour"
        />

        <div className="hero-content">
          <h1>Best of Barcelona, Madrid & Ibiza</h1>

          <p>
            Barcelona • Madrid • Toledo • Ibiza
          </p>

          <Link to="/Madrid-Ibiza">
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
              src="https://tse3.mm.bing.net/th/id/OIP.KwoYsNz9OWU5j3dIuZbcLQHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Sagrada Familia Barcelona"
            />
            <p>Sagrada Familia, Barcelona</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://cdn-imgix.headout.com/tour/22227/TOUR-IMAGE/34d5b5ec-8904-45a9-9429-d7b6252965bb-11711-madrid-fast-track-tickets-royal-palace-s---royal-kitchen-01.jpg?fm=pjpg&auto=compress"
              alt="Royal Palace Madrid"
            />
            <p>Royal Palace, Madrid</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://wallpapers.com/images/hd/toledo-cathedral-from-a-distance-blue-ydbiu6ko7ahsernz.jpg"
              alt="Toledo Spain"
            />
            <p>Historic Toledo</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://wallpapercave.com/wp/wp5563210.jpg"
              alt="Ibiza beaches"
            />
            <p>Ibiza Beaches</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏛️ Iconic Gaudí Architecture</div>
          <div>🎨 World-Class Madrid Museums</div>
          <div>🏰 Medieval Toledo Day Trip</div>
          <div>🏖️ Sun-Soaked Ibiza Beaches</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Best of Spain in 9 Days</h2>

        <p>
          From the artistry of Barcelona to the royal charm of Madrid and the island vibes of Ibiza — a journey through Spain's finest
        </p>

        <br />

        <Link to="/Madrid-Ibiza">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>9 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://wallpaperaccess.com/full/5808.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>India → Barcelona</p>
              <p>
                Arrival at Barcelona Airport.<br/> 
Meet & greet and enjoy a private transfer to your hotel.<br/> 
Check-in and rest of the day at leisure. <br/>
You may explore nearby areas or relax after your journey.<br/> 
 
Overnight Stay in Barcelona 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://mediaim.expedia.com/localexpert/167139/ad3744c4-47db-4bf0-8722-fe3abdedd56e.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Barcelona – Hop On Hop Off City Tour </p>
              <p>
               
Breakfast at the hotel.<br/>  
After breakfast, proceed for 01 Day Hop-On Hop-Off City Tour, covering major attractions such as: <br/> 
Plaça de Catalunya<br/>  
Gothic Quarter <br/> 
La Rambla <br/> 
Olympic Port<br/>  
Montjuïc Hill <br/> 
Later, visit Sagrada Familia with entry ticket only. <br/> 
Evening free for leisure or shopping.<br/>  
Overnight Stay in Barcelona
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://cdn.pixabay.com/photo/2019/08/09/10/20/breakfast-4394771_1280.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Breakfast at hotel</p>
              <p>
             Guests will be picked up from a designated meeting point in Barcelona on a shared coach. Proceed 
towards Montserrat, a breathtaking mountain range and spiritual site. En-route / Arrival at 
Montserrat Upon arrival, travel up the mountain by cog-wheel train or cable car (subject to 
availability). Meet the local guide for an orientation tour. Montserrat Monastery Visit Visit the 
famous Santa Maria de Montserrat Abbey. Access to see the revered Black Madonna (La Moreneta) 
is included. Learn about the history, culture, and religious significance of Montserrat. Guests will 
have free time to explore the basilica, enjoy panoramic views, visit local souvenir shops, or taste 
local products.<br/>   
Return to Barcelona
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://4kwallpapers.com/images/wallpapers/fc-barcelona-camp-3840x2160-19432.jpeg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Barcelona → Madrid</p>
              <p>
               Breakfast at the hotel. <br/>
After check-out, enjoy a private transfer from Barcelona Hotel to Barcelona Station to board your 
onwards journey to Madrid (train ticket not included).<br/> 
Upon arrival at Madrid Station, enjoy a private transfer to your hotel. <br/>
Rest of the day at leisure. <br/>
Overnight Stay in Madrid
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://i.pinimg.com/originals/ae/0a/f3/ae0af3add1c27edf281e695003a91282.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Breakfast at the hotel.</p>
              <p>
               Proceed for 01 Day Hop-On Hop-Off City Tour of Madrid, covering: <br/> 
Royal Palace <br/> 
Plaza Mayor  <br/>
Gran Via  <br/>
Puerta del Sol  <br/>
Later, enjoy the Prado Museum Guided Tour with Skip-the-Line Ticket. <br/> 
Evening free at leisure.  <br/>
Overnight Stay in Madrid 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://img.freepik.com/premium-photo/elegant-breakfast-setup-featuring-fresh-fruits-pastries-hotel_1294860-45451.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Breakfast at the hotel</p>
              <p>
                Day Tour from Madrid to Segovia & Toledo with Alcázar (Shared Basis) <br/>
 
Departure from the designated meeting point in Madrid by shared coach with a professional guide. 
Upon arrival in Segovia, enjoy a guided walking tour of the historic city, including a visit to the famous 
Roman Aqueduct and the charming old town. Continue with a visit to the Alcázar of Segovia, the iconic 
fairy-tale castle, where you will explore the interior with your guide. After the visit, enjoy some free 
time in Segovia to explore the town, take photographs, or try local cuisine. 
Later, continue the journey to Toledo, known as the “City of Three Cultures.” Upon arrival, enjoy a 
panoramic view of the city followed by a guided walking tour through Toledo’s historic old town. The 
tour includes highlights such as the exterior of Toledo Cathedral, the Jewish Quarter, and the 
traditional artisan streets. After the guided tour, you will have free time to explore the city at your 
own pace before returning to Madrid by shared coach.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.hxTmZAbVBHSzgCMe1OtbYwHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Madrid → Ibiza</p>
              <p>
                Breakfast at the hotel. <br/>
Check-out and enjoy a private transfer from Madrid Hotel to Madrid Airport for your flight to Ibiza 
(flight not included). <br/>
Upon arrival at Ibiza Airport, enjoy a private transfer to your hotel.<br/> 
Rest of the day free to relax or explore Ibiza town. <br/>
Overnight Stay in Ibiza
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://floatyourboatibiza.com/wp-content/uploads/2025/03/PHOTO-2025-03-28-16-16-24-2-1.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{ color: "blue" }}>Ibiza Beach Day & Boat Cruise</p>
              <p>
              Breakfast at the hotel.<br/> 
Proceed for a Formentera Cruise on a shared basis, including:<br/> 
Paddle activities <br/>
Snorkeling experience <br/>
Scenic coastal views <br/>
Return to Ibiza and enjoy the evening at leisure. <br/>
Overnight Stay in Ibiza 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://wallpaperaccess.com/full/4119125.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 9</h3>
              <p style={{ color: "blue" }}>Ibiza → India</p>
              <p>
                Departure from Ibiza<br/> 
Breakfast at the hotel.<br/> 
Check-out and enjoy a private transfer from Ibiza Hotel to Ibiza Airport for your onwards journey.<br/> 
          End of Tour with Wonderful Memories____________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("9 Days Best of Barcelona, Madrid & Ibiza Tour")}
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

export default BarcelonaMadridIbizaLanding;