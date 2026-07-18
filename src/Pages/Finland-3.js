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
    question: "What is the best time to visit Helsinki, Rovaniemi and Saariselkä for this tour?",
    answer:
      "December to March is ideal for this itinerary, offering the best chance of witnessing the Northern Lights, snow-covered landscapes in Rovaniemi and Saariselkä, and a magical, festive atmosphere in Helsinki. Late winter (February–March) brings slightly longer daylight hours, making it great for both aurora hunting and daytime activities.",
  },
  {
    question: "What is included in the 9-day Finland Getaway Plus package?",
    answer:
      "The package includes 8 nights accommodation (3 nights Helsinki, 3 nights Rovaniemi, 2 nights Saariselkä), daily breakfast, transfers between cities, a Helsinki city tour, a visit to Santa Claus Village, and Arctic experiences such as reindeer or husky encounters. International flights, visa fees and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Finland?",
    answer:
      "Indian passport holders require a Schengen visa, which covers travel across Helsinki, Rovaniemi and Saariselkä on this itinerary. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include Senate Square and Helsinki Cathedral in Helsinki, the official Santa Claus Village on the Arctic Circle in Rovaniemi, husky and reindeer sledding experiences, and Northern Lights hunting under the dark Arctic skies of Saariselkä.",
  },
  {
    question: "What currency is used across Finland?",
    answer:
      "Finland uses the Euro (EUR) across Helsinki, Rovaniemi and Saariselkä. Cards are widely accepted almost everywhere, but it's useful to carry some local cash for small purchases in remote Arctic areas. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add a glass igloo stay, extra nights in Rovaniemi, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const FinlandGetawayPlusLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://68c8648dbe66747498d1-6027f91c84d2b73bebfc9b6bc4f4a0ac.ssl.cf3.rackcdn.com/67bddc3476123130a4db5771/T2624mobilemin.jpg"
          alt="Finland Getaway Plus Tour"
        />

        <div className="hero-content">
          <h1>Finland Getaway Plus</h1>

          <p>
            Helsinki • Rovaniemi • Saariselkä
          </p>

          <Link to="/Getaway-Plus">
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
              src="https://live.staticflickr.com/65535/52585529189_7320a4491b_b.jpg"
              alt="Senate Square Helsinki"
            />
            <p>Senate Square, Helsinki</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://wallpaperaccess.com/full/10105882.jpg"
              alt="Santa Claus Village Rovaniemi"
            />
            <p>Santa Claus Village, Rovaniemi</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.fCnL--y8KP4XXEQhZWCTcwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Northern Lights Saariselkä"
            />
            <p>Northern Lights, Saariselkä</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.1VJsj4vRc6vHrk4tInTYGQHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Husky sledding Lapland"
            />
            <p>Husky Sledding, Lapland</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏛️ Charming Helsinki City Life</div>
          <div>🎅 Meet Santa on the Arctic Circle</div>
          <div>🐺 Husky & Reindeer Safaris</div>
          <div>🌌 Northern Lights in Saariselkä</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Magic of Finland in 9 Days</h2>

        <p>
          From the cosmopolitan streets of Helsinki to Santa's hometown in Rovaniemi and the dancing skies of Saariselkä — a journey through Finland's Arctic wonders
        </p>

        <br />

        <Link to="/Getaway-Plus">
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
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Helsinki-Vantaa_Airport.jpg/1280px-Helsinki-Vantaa_Airport.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>India → Helsinki</p>
              <p>
Welcome to Helsinki –  
You arrive in Helsinki. Upon arrival at Helsinki Airport, you are met and transferred privately to your 
hotel. Once checked in and settled, you have the evening free — perhaps a walk nearby or dinner in 
the city — to relax and absorb your first impressions of Finland’s capital. 
Overnight Stay in Helsinki  
             </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://a.cdn-hotels.com/gdcs/production30/d1949/f4ed2076-6fd9-4a30-9d99-f4ed71bdf7b5.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Helsinki City Tour</p>
              <p>
Breakfast at Hotel. 
After breakfast you join a shared-basis walking tour of Helsinki, exploring the city’s key attractions, 
historic streets, waterfronts, and urban vibe. After the tour you have the rest of the day at leisure — 
you may explore more of Helsinki on your own, visit local shops, relax at cafés, or stroll around the 
city. 
Overnight Stay in Helsinki. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://wallpaperaccess.com/full/3667517.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Helsinki – Tallinn Guided Day Tour with Ferry Crossing on Shared Basis</p>
              <p>
Breakfast at Hotel. 
Breakfast at hotel. After breakfast you proceed to the ferry terminal and take a ferry crossing across 
the Gulf of Finland to Tallinn. The sea-crossing is part of your shared-basis guided day tour to Tallinn. 
Once in Tallinn you explore the old town with its medieval-era buildings, historic lanes, iconic 
architecture including notable churches and old city walls — a vivid contrast to Helsinki’s Scandinavian 
modern-city feel. After the city tour you return by ferry to Helsinki. 
Overnight Stay in Copenhagen. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.iWn0W7dBE7KxK91FYPDBggHaEj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Helsinki → Rovaniemi</p>
              <p>
Breakfast at Hotel. Check out from the Hotel. 
have breakfast and some free time in Helsinki. Later, you prepare for your transfer to Helsinki Airport. 
When ready, you travel from Helsinki to Rovaniemi (domestic flight or as per your travel 
arrangement). On arrival at Rovaniemi Airport you are met and transferred privately to your hotel. 
Apextion DMC 
Email: sales@apextiondmc.com, groups@apextiondmc.com || Contact No.: +91 11 4921 5555 
www.apextiondmc.com  
LONDON | PARIS | NEW DELHI | MUMBAI 
After check-in, you have the evening at leisure to rest or take a light stroll, preparing for Lapland 
experiences to come. 
As night falls, you join the included shared-basis Northern Lights tour (weather and solar-activity 
dependent). This evening excursion takes you away from city light pollution, giving you a chance to 
witness the Aurora Borealis dancing over Lapland’s snow-covered landscape 
Overnight Stay in Rovaniemi 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.europaadventure.com/wp-content/uploads/2026/03/Must-Do-Summer-Autumn-Santa-Village-Husky-Reindeer-Farm-Experience4.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Rovaniemi – Santa Claus Village + Husky & Reindeer Sled Ride from Rovaniemi on Shared Basis(Husky & Reindeer Sled Ride Subject to Operational)</p>
              <p>
               Breakfast at Hotel. 
Following breakfast you proceed for the excursion to Santa Claus Village — cross the Arctic Circle 
line, explore the festive village, enjoy the winter-wonder ambience and Lappish charm. As part of 
the package, you get a chance for a husky or reindeer sled ride (subject to operational conditions), 
an experience typical of Lapland’s winter tourism. 
Overnight Stay in Rovaniemi 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Husky_sledding_Lapland.jpg/1280px-Husky_sledding_Lapland.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Rovaniemi – Trip to Ranua Zoo with Tickets from Rovaniemi on SIC Basis</p>
              <p>
After breakfast, you head out — with included tickets — to Ranua Wildlife Park, the northernmost 
zoo in Finland, home to Arctic species including polar bears, lynx, moose and more, offering a 
chance to see wildlife adapted to Arctic conditions. 
 Overnight Stay in Rovaniemi 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://laplandnorth.fi/wp-content/uploads/2025/11/LAPLAND_NORTH_WINTER_SAARISELKA_VILLAGE-1536x1023.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Rovaniemi → Saariselkä</p>
              <p>
Breakfast at Hotel. 
After breakfast check out and take the private transfer from your Rovaniemi hotel to your next 
destination: the resort in Saarisellka. Upon arrival, you check-in and settle for the night 
Overnight Stay in Saarisellka 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://res.cloudinary.com/manawa/image/private/c_fill,g_auto,h_630,w_1200,q_auto/7e9a3c0d908355164b0e0518d47362ce"
              alt=""
            />
            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{ color: "blue" }}>Saarisellka – Day at Leisure</p>
              <p>
You enjoy breakfast at the resort and spend the day immersed in Arctic tranquillity. Staying in a 
glass-igloo provides a unique experience: through the glass roof you may watch the starry Arctic sky 
— and on a clear night with favourable conditions, perhaps the Northern Lights.  
 The rest of the day is yours to relax, enjoy resort amenities, maybe light walks, snow-scapes, enjoy 
local tranquility or simply rest. 
Apextion DMC 
Email: sales@apextiondmc.com, groups@apextiondmc.com || Contact No.: +91 11 4921 5555 
www.apextiondmc.com  
LONDON | PARIS | NEW DELHI | MUMBAI 
Overnight Stay in Saarisellka 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.fPyl_DjqDFr_eJhglFhC2wHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 9</h3>
              <p style={{ color: "blue" }}>Saariselkä → India</p>
              <p>
Breakfast at Hotel. Check out from the Hotel. 
Private transfer from Saarisellka Hotel to Ivalo Airport. ________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("9 Days Finland Getaway Plus Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Finnish journey</p>
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

export default FinlandGetawayPlusLanding;