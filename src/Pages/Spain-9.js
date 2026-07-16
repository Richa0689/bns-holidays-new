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
    question: "What is the best time to visit Seville, Lisbon and Porto for this tour?",
    answer:
      "March to June and September to November are ideal, with mild temperatures and fewer crowds across Seville, Lisbon and Porto. Summer (July–August) can get very hot in Seville, while spring brings blooming patios in Andalusia and pleasant riverside evenings in Portugal.",
  },
  {
    question: "What is included in the 6-day Seville, Lisbon & Porto package?",
    answer:
      "The package includes 5 nights accommodation (2 nights Seville, 2 nights Lisbon, 1 night Porto), daily breakfast, comfortable transfers between cities, guided city tours in Seville, Lisbon and Porto, and sightseeing at iconic landmarks along the way. International flights, visa fees and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Spain and Portugal?",
    answer:
      "Indian passport holders require a Schengen visa, which covers travel across both Spain and Portugal on this itinerary. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Alcázar and Plaza de España in Seville, the historic trams and Belém district in Lisbon, an optional excursion to the fairy-tale town of Sintra, and the colourful riverside Ribeira district along with the port wine cellars of Porto.",
  },
  {
    question: "What currency is used across Spain and Portugal?",
    answer:
      "Both Spain and Portugal use the Euro (EUR). Cards are widely accepted in cities, but it's useful to carry some local cash for tapas bars, markets and small purchases. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add a Sintra excursion, extra nights in Lisbon, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const LisbonPortoLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://images.resosys.com/deals/us-porto-fatima-lisbon/2x-akzgvy-69b66h-a6d5265b-1049-4752-b9ae-7ca6216cda2b.jpg"
          alt="Seville, Lisbon & Porto Tour"
        />

        <div className="hero-content">
          <h1>Best of Seville + Lisbon + Porto</h1>

          <p>
            Seville • Lisbon • Porto
          </p>

          <Link to="/Lisbon-Porto">
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
              src="https://tse1.mm.bing.net/th/id/OIP.QTWbdFieiChxrxYgPpnUBgAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Alcazar Seville"
            />
            <p>Alcázar of Seville</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.d4UdoZjGDP2FXUc2hJMSawHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Belem Tower Lisbon"
            />
            <p>Belém Tower, Lisbon</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.G1LNGBuE2VMNBuauK_-fnQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Sintra Portugal"
            />
            <p>Pena Palace, Sintra</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://di262mgurvkjm.cloudfront.net/6aa07236-e001-4ff3-8d87-cfb8685fac17/N24567-FR-01_uxga.jpg"
              alt="Ribeira Porto"
            />
            <p>Ribeira District, Porto</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Moorish Palaces of Andalusia</div>
          <div>🚋 Historic Trams of Lisbon</div>
          <div>🏯 Fairy-Tale Sintra Excursion</div>
          <div>🍷 Port Wine Cellars of Porto</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Best of Seville, Lisbon & Porto in 6 Days</h2>

        <p>
          From the passion of Andalusia to the charm of the Portuguese coast — a journey through the Iberian Peninsula's finest
        </p>

        <br />

        <Link to="/Lisbon-Porto">
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
              src="https://tse2.mm.bing.net/th/id/OIP.s4ehcuFX0Bnf69SgQp4KmwHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>Seville – Arrival</p>
              <p>
             Welcome to Seville – The Pearl of Andalusia!<br/> 
Your adventure begins with a smooth private transfer from Seville Airport to your hotel. Once you 
arrive, settle in and get ready to experience one of Spain’s most enchanting cities, famous for its 
Moorish architecture, flamenco rhythms, and historic charm. Explore the vibrant streets, indulge in 
delicious tapas, and discover the warmth and beauty that make Seville unforgettable. <br/>
 Overnight stay in Seville.<br/> 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://dynamic-media.tacdn.com/media/photo-o/2f/01/a7/a1/caption.jpg?w=1100&h=800&s=1"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Seville – Seville 01 Day Hop on Hop Off Bus Tour</p>
              <p>
               Breakfast at Hotel.<br/> 
After breakfast, proceed for your Seville Hop On Hop Off Bus Tour.<br/> 
Highlight: 01 Day Hop On Hop Off Bus Tour included.<br/> 
Hop aboard the iconic red double-decker bus and explore Seville’s most celebrated landmarks at 
your own pace. With 14 convenient stops, you can visit prestigious Islamic monuments, lush 
gardens, and enjoy the essence of Andalusian culture. Enjoy open-top views, onboard audio 
commentary, free Wi-Fi, and additional free walking tours covering Plaza de España, Maria Luisa 
Park, and the atmospheric Jewish Quarter of Santa Cruz.<br/> 
Overnight stay in Seville
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/b1/6b/a1.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Seville – Lisbon</p>
              <p>
               Breakfast at Hotel.<br/> 
After breakfast, check out from the hotel. A private transfer will take you to Seville Airport for your 
onward flight to Lisbon. <br/>
Upon arrival in Lisbon, a private transfer will comfortably take you to your hotel. 
 Welcome to Lisbon – The City of Seven Hills! <br/>
Lisbon is a charming blend of historic traditions and contemporary culture. From cobbled streets 
and pastel-colored buildings to its thriving food and arts scene, Lisbon offers a perfect balance of old 
and new. Enjoy your day at leisure to explore the city’s atmospheric neighborhoods or relax at your 
hotel.<br/> 
Overnight stay in Lisbon. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.ofBP5ZX-KX9d4rn1DXTy5wHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>  Lisbon – Lisbon 01 Day Hop-On Hop-Off Bus Tour</p>
              <p>
       Breakfast at Hotel. <br/>
After breakfast, proceed for your Lisbon Hop-On Hop-Off Bus Tour. 
Highlight: 01 Day Hop-On Hop-Off Bus Tour included. <br/>
Discover Lisbon’s highlights aboard an open-top sightseeing bus, offering the flexibility to explore iconic 
attractions such as the Jerónimos Monastery, Belém Tower, and the historic Baixa district. Enjoy 
panoramic views, informative audio commentary, and the freedom to hop on and off at your preferred 
stops throughout the day. <br/>
 Overnight stay in Lisbon. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://res.cloudinary.com/enchanting/w_1440,h_720/artemis-mdm/098ad32c-8cc0-4081-a49c-9a437096e7fc.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}> Lisbon – Porto</p>
              <p>
                Breakfast at Hotel<br/>. 
After breakfast, check out from the hotel and travel to Porto. Travelling from Lisbon to Porto by 
train is a fantastic option, with trains running frequently throughout the day. The journey typically 
takes around 2 hours and 39 minutes to 3 hours and 44 minutes, covering a distance of 
approximately 274-332 kilometres. <br/>
Welcome to Porto – Portugal’s city of bridges, wine, and riverside charm!<br/> 
Porto is known for its enchanting old town, stunning riverfront, and world-famous port wine. 
Explore the cobbled lanes of Ribeira, take in the scenic Douro River views, or simply relax and enjoy 
the city’s warm atmosphere.<br/>
Overnight stay in Porto.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.M_5SZ-0lZ658Dzj-ckAixQHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Porto – Departure</p>
              <p>
           Breakfast at Hotel. <br/>
After breakfast, check out from the hotel. A private transfer will take you from your Porto hotel to 
Porto Airport for your departure flight.<br/> 
Your journey through Seville, Lisbon, and Porto comes to an end with wonderful memories. 
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("6 Days Best of Seville + Lisbon + Porto Tour")}
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

export default LisbonPortoLanding;