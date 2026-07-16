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
    question: "What is the best time to visit Madrid, Lisbon and Faro for this tour?",
    answer:
      "March to June and September to November are ideal, with mild temperatures across Madrid and Lisbon and pleasant beach weather in Faro. Summer (July–August) is peak season along the Algarve coast, while spring and early autumn bring fewer crowds and comfortable sightseeing conditions in the cities.",
  },
  {
    question: "What is included in the 9-day Spain & Portugal package?",
    answer:
      "The package includes 8 nights accommodation (3 nights Madrid, 3 nights Lisbon, 2 nights Faro), daily breakfast, comfortable transfers between cities, guided city tours in Madrid and Lisbon, and sightseeing at iconic landmarks along the way. International flights, visa fees and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Spain and Portugal?",
    answer:
      "Indian passport holders require a Schengen visa, which covers travel across both Spain and Portugal on this itinerary. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Royal Palace and Prado Museum in Madrid, an optional day trip to Toledo, the historic trams and Belém district in Lisbon, an optional excursion to Sintra, and the dramatic cliffs and beaches of the Algarve around Faro.",
  },
  {
    question: "What currency is used across Spain and Portugal?",
    answer:
      "Both Spain and Portugal use the Euro (EUR). Cards are widely accepted in cities, but it's useful to carry some local cash for markets and small purchases. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add a Toledo or Sintra excursion, extra nights in Lisbon, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const MadridLisbonFaroLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://tse4.mm.bing.net/th/id/OIP.6W7vWDx6XXAn1LKJBJUhnQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Spain & Portugal Tour"
        />

        <div className="hero-content">
          <h1>From Spain's Royal Cities to Portugal's</h1>

          <p>
            Madrid • Lisbon • Faro
          </p>

          <Link to="/Cities-Portugal's">
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
              src="https://wallpapercave.com/wp/wp4197116.jpg"
              alt="Royal Palace Madrid"
            />
            <p>Royal Palace, Madrid</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.gVgaGOXiQtpj-31FjPhE5wHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Belem Tower Lisbon"
            />
            <p>Belém Tower, Lisbon</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.i-wXWpVVvXHzlpA3ecF_TgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Sintra Portugal"
            />
            <p>Pena Palace, Sintra</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://www.worldwanderista.com/wp-content/uploads/2016/10/Algarve-Portugal-8.jpg"
              alt="Algarve Faro"
            />
            <p>Algarve Coastline, Faro</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Royal Heritage of Madrid</div>
          <div>🚋 Historic Trams of Lisbon</div>
          <div>🏯 Fairy-Tale Sintra Excursion</div>
          <div>🏖️ Dramatic Algarve Coastline</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Best of Spain & Portugal in 9 Days</h2>

        <p>
          From the royal grandeur of Madrid to the coastal charm of the Algarve — a journey through the Iberian Peninsula's finest
        </p>

        <br />

        <Link to="/Cities-Portugal's">
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
              src="https://wallpaperaccess.com/full/760300.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>India → Madrid</p>
              <p>
               India – Madrid 
 
Welcome to Madrid – The Heart of Spain! 
Upon arrival at Madrid Airport, you’ll be met for a private transfer to your city centre hotel. 
Madrid, the vibrant capital of Spain, is known for its majestic boulevards, lively plazas, and cultural 
treasures. Take some time to settle in and enjoy the atmosphere of this dynamic city. Depending on 
your arrival time, you can take a leisurely stroll through nearby streets, soak in the local vibe, or 
simply relax at your hotel and prepare for your Spanish adventure. 
 Overnight Stay in Madrid 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&q=80https://tse3.mm.bing.net/th/id/OIP.sXK8VS5rmnJ-1jvygTYz9QAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Madrid – Panoramic Bus Tour & Royal Palace</p>
              <p>
              Breakfast at the hotel 
Start your day with a panoramic bus tour of Madrid, giving you an excellent overview of the city’s 
iconic landmarks, historic streets, and cultural highlights. A live guide will share fascinating stories 
and historical insights, providing a deeper understanding of Madrid’s rich heritage. Later, visit the 
Royal Palace, the official residence of Spain’s royal family. Marvel at its grand architecture, lavish 
interiors, and priceless art collections, and learn about the traditions and history of the Spanish 
monarchy. This visit offers an intimate glimpse into the regal side of Madrid. 
 Overnight Stay in Madrid 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.travelersuniverse.com/wp-content/uploads/2025/07/from-madrid-guided-day-trip-to-segovia-and-toledo.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Madrid – Day Trip to Segovia & Toledo</p>
              <p>
               Breakfast at the hotel 
Embark on a full-day SIC tour to Segovia and Toledo, two of Spain’s most historic and visually 
stunning cities. In Segovia, see the remarkable Roman aqueduct, a masterpiece of engineering that 
has stood for centuries, and explore the Alcázar of Segovia, a fairytale-like castle with panoramic 
views. In Toledo, stroll through cobblestone streets, visit magnificent cathedrals and synagogues, 
and admire the city’s blend of Christian, Jewish, and Muslim architecture. This tour is a perfect 
introduction to Spain’s rich cultural and historical heritage, combining architecture, art, and history 
in a single day. 
 Overnight Stay in Madrid
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images8.alphacoders.com/128/thumb-1920-1285893.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Madrid → Lisbon</p>
              <p>
         Breakfast at the hotel 
Private transfer from your Madrid hotel to Madrid Airport (MAD) for your flight to Lisbon. Upon 
arrival at Lisbon Airport, enjoy a private transfer to your city centre hotel. Lisbon, Portugal’s 
charming capital, is famed for its hills, colorful streets, and riverside beauty. Depending on your 
arrival time, you may have the opportunity to take a gentle evening walk around the historic 
neighborhoods, enjoy local delicacies, or simply relax at your hotel and prepare for the adventures 
ahead. 
Overnight Stay in Lisbon. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.musement.com/cover/0020/81/thumb_1980236_cover_header.jpeg?w=540?w=1200&h=630&q=95&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Lisbon – Hop-On Hop-Off & Monuments</p>
              <p>
                Breakfast at the hotel 
Discover Lisbon at your own pace on a 1-day Hop-On Hop-Off bus tour, with the flexibility to stop at 
major landmarks and explore at leisure. Admire sights like Belém Tower, Jerónimos Monastery, and 
São Jorge Castle, each offering unique insights into Portugal’s rich history. Visit the Jerónimos 
Monastery, a UNESCO World Heritage Site, and marvel at its elaborate Manueline architecture, 
reflecting Portugal’s Age of Discovery. Continue to Belém Tower, a 16th-century fortress that once 
guarded the Tagus River and stands as an enduring symbol of Portuguese maritime power. This day 
combines history, architecture, and culture in a comprehensive city exploration. 
Overnight Stay in Lisbon.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://m.somewheregood.com/media/from-madrid-guided-day-trip-to-segovia-and-toledo-t570930-4.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Lisbon - Day Trip to Segovia & Toledo from Madrid</p>
              <p>
               Breakfast at the hotel 
Take a full-day SIC tour to explore the magical town of Sintra, the romantic Pena Palace, the 
mystical Quinta da Regaleira, the breathtaking cliffs of Cabo da Roca, and the charming seaside 
town of Cascais. Walk through Sintra’s quaint streets and royal gardens, admire the fairytale 
architecture of Pena Palace, and discover the Initiation Well at Regaleira, steeped in mystery and 
symbolism. Enjoy the stunning Atlantic views from Cabo da Roca, the westernmost point of 
mainland Europe, and relax in the picturesque seaside town of Cascais. This tour showcases 
Portugal’s natural beauty, architectural wonders, and rich cultural heritage. 
Overnight Stay in Lisbon. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://wallpaperaccess.com/full/1423605.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Lisbon – Faro</p>
              <p>
                Breakfast at the hotel 
Private transfer from your Lisbon hotel to Lisbon Train Station. Board the train from Lisboa Oriente 
to Faro, enjoying a scenic journey through southern Portugal. On arrival, a private transfer to your 
Faro hotel will bring you to the heart of the Algarve region, known for its sun-drenched beaches, 
charming towns, and dramatic cliffs. Take some time to settle in and soak in the relaxing coastal 
atmosphere. 
 Overnight Stay in Faro. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.Swowq4vk2W6pOppmbXIstAHaER?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{ color: "blue" }}>Faro – Benagil Cave & Marinha Beach</p>
              <p>
      Breakfast at the hotel 
Embark on a half-day shared tour from Faro to Benagil Cave and Marinha Beach, two of the 
Algarve’s most iconic coastal attractions. Marvel at the stunning cliffs, turquoise waters, and hidden 
grottos, including the famous Benagil Cave, and enjoy the pristine sands of Marinha Beach, often 
ranked among the world’s most beautiful beaches. This tour is perfect for nature lovers, 
photographers, and anyone seeking a relaxing coastal experience. 
 Overnight Stay in Faro 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://en.aeroportodefaro.com/images/arrivals-departures/05.jpg?id=cb4afcff063e76aa59ef"
              alt=""
            />
            <div className="day-content">
              <h3>Day 9</h3>
              <p style={{ color: "blue" }}>Faro – Departure</p>
              <p>
Breakfast at the hotel 
Private transfer from your Faro hotel to Faro Airport (FAO) for your onward flight. Reflect on an 
unforgettable journey through Spain and Portugal, filled with historic cities, stunning coastlines, and 
cultural highlights.
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("9 Days From Spain's Royal Cities to Portugal's Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Iberian journey</p>
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

export default MadridLisbonFaroLanding;