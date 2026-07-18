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
    question: "What is the best time to visit Barcelona, Valencia, Seville and Madrid for this tour?",
    answer:
      "March to June and September to November are ideal, with mild temperatures perfect for sightseeing in Barcelona, Valencia and Madrid, and pleasant weather for exploring Seville without the intense summer heat. Summer (July–August) can get very hot in Seville and Madrid, so spring and autumn are recommended for the most comfortable experience.",
  },
  {
    question: "What is included in the 8-day Best of Barcelona, Valencia, Seville & Madrid package?",
    answer:
      "The package includes 7 nights accommodation (2 nights Barcelona, 1 night Valencia, 2 nights Seville, 2 nights Madrid), daily breakfast, comfortable transfers between cities, guided city tours in each destination, and sightseeing at iconic landmarks along the way. International flights, visa fees and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Spain?",
    answer:
      "Indian passport holders require a Schengen visa, which covers travel across Barcelona, Valencia, Seville and Madrid on this itinerary. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Sagrada Familia and Park Güell in Barcelona, the City of Arts and Sciences in Valencia, the Real Alcázar and Plaza de España in Seville, and the Royal Palace and Prado Museum in Madrid.",
  },
  {
    question: "What currency is used across Spain?",
    answer:
      "Spain uses the Euro (EUR) across Barcelona, Valencia, Seville and Madrid. Cards are widely accepted everywhere, but it's useful to carry some local cash for small purchases and transit. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add extra nights in any city, include a day trip to Toledo, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const BarcelonaValenciaSevilleMadridLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://m.jtgtravel.com/img/7-day-spain-tour-cordoba-seville-granada-valencia-barcelona-and-zaragoza-from-madrid-d566-2140_A7J-4.jpg"
          alt="Barcelona, Valencia, Seville & Madrid Tour"
        />

        <div className="hero-content">
          <h1>Best of Barcelona, Valencia, Seville & Madrid</h1>

          <p>
            Barcelona • Valencia • Seville • Madrid
          </p>

          <Link to="/Seville-Madrid">
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
              src="https://tse1.mm.bing.net/th/id/OIP.cZh0_BLEG7XOpLntnm8VyAHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Sagrada Familia Barcelona"
            />
            <p>Sagrada Familia, Barcelona</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://www.tripsavvy.com/thmb/q1aiDGFneHc7YBsV0tjeR-mYg50=/3008x2000/filters:fill(auto,1)/DSC_0121-de6fb86ec3694f05be16b77fd5e405fc.jpg"
              alt="City of Arts and Sciences Valencia"
            />
            <p>City of Arts &amp; Sciences, Valencia</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1558102309-b1a5f3d3a0e2?q=80&w=1200"
              alt="Plaza de Espana Seville"
            />
            <p>Plaza de España, Seville</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://wallpapercave.com/wp/wp4197116.jpg"
              alt="Royal Palace Madrid"
            />
            <p>Royal Palace, Madrid</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏛️ Iconic Gaudí Architecture</div>
          <div>🌊 Futuristic Valencia Landmarks</div>
          <div>💃 Flamenco Heart of Seville</div>
          <div>🎨 World-Class Madrid Museums</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Best of Spain in 8 Days</h2>

        <p>
          From the artistry of Barcelona to the futuristic charm of Valencia, the flamenco soul of Seville and the royal grandeur of Madrid — a journey through Spain's finest
        </p>

        <br />

        <Link to="/Seville-Madrid">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>8 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://wallpaperaccess.com/full/5808.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>India – Santorini</p>
              <p>
Arrival in Santorini: A Magical Start to Your Santorini Adventure<br/> 
Arrival at Santorini Airport (JTR) arrival at Santorini Airport, passengers disembark and proceed to 
the arrival’s terminal. After passport control (for international flights) and baggage claim, travelers 
exit into the arrivals hall where taxis, shuttle services, and car rental counters are available. Airport 
staff and drivers usually wait outside the terminal holding name signs. Santorini Airport is small and 
easy to navigate, but it can be busy during peak season, so short waiting times may occur.<br/> 
Overnight Stay in Santorini 
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
              <p style={{ color: "blue" }}>Santorini – Volcano and Hot Springs Sunset Dinner Cruise</p>
              <p>
                Breakfast at Hotel. <br/>
Experience one of Santorini’s most iconic adventures on a Volcano and Hot Springs Sunset Dinner 
Cruise. Sail across the caldera toward the volcanic islands, where you will have the opportunity to 
explore the volcano and walk along its rugged trails while learning about its geological history. 
Continue to the famous hot springs for a refreshing swim in the mineral-rich thermal waters. 
As the evening approaches, relax on board while enjoying a delicious dinner prepared with local 
flavors. The cruise concludes with a breathtaking Santorini sunset over the caldera, creating an 
unforgettable atmosphere of natural beauty and romance before returning to the port.<br/> 
Santorini – Santorini Island Bus Tour <br/>
Discover the highlights of Santorini on a guided island bus tour that showcases its rich history, 
traditional villages, and stunning landscapes. Travel comfortably across the island while visiting 
iconic locations such as picturesque villages, scenic viewpoints, and cultural landmarks. Learn about 
Santorini’s unique volcanic past, local traditions, and way of life from an experienced guide. 
The tour offers free time to explore charming streets, take photos, and enjoy local shops or cafés. 
Ideal for first-time visitors, this bus tour provides a comprehensive overview of Santorini’s beauty 
and culture in a relaxed and convenient way. <br/>
Overnight Stay in Santorini<br/> 
Apextion DMC <br/>
Email: sales@apextiondmc.com, groups@apextiondmc.com || Contact No.: +91 11 4921 5555 
www.apextiondmc.com <br/> 
LONDON | PARIS | NEW DELHI | MUMBAI 
 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1595916006798-51063f5e88a7?q=80&w=1200"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Santorini – 5-Hour Catamaran Cruise – Morning or Sunset Tour</p>
              <p>
Breakfast at Hotel.<br/> 
Sail along Santorini’s spectacular coastline on a 5-hour catamaran cruise, available in both morning 
and sunset options.s Enjoy breathtaking views of the island’s volcanic cliffs, hidden coves, and iconic 
caldera from the comfort of a modern catamaran.<br/> 
During the cruise, stop at beautiful swimming and snorkeling spots, including the famous Red and 
White Beaches and the volcanic hot springs. Relax on deck, soak up the sun, and savor a freshly 
prepared meal with local flavors, accompanied by drinks on board. The sunset tour concludes with a 
magical view of the sun setting over the caldera, creating an unforgettable Santorini experience.<br/> 
Overnight Stay in Santorini 
 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://img.freepik.com/premium-photo/elegant-breakfast-setup-featuring-fresh-fruits-pastries-hotel_1294860-45451.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Rome - India</p>
              <p>
                Breakfast at Hotel. <br/>
 After breakfast proceed to Santorini airport with private transfer
              </p>
            </div>
          </div>         
        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("8 Days Best of Barcelona, Valencia, Seville & Madrid Tour")}
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

export default BarcelonaValenciaSevilleMadridLanding;