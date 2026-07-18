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
    question: "What is the best time to visit Athens and Santorini for this tour?",
    answer:
      "April to June and September to October are ideal, offering pleasant weather and fewer crowds. Summer (July–August) is peak season with hot days and lively beach life, while May, June and September bring cooler temperatures, perfect for sightseeing in Athens and relaxing in Santorini.",
  },
  {
    question: "What is included in the 6-day Glimpses of Greece package?",
    answer:
      "The package includes 5 nights accommodation (2 nights Athens, 3 nights Santorini), daily breakfast, a ferry transfer between the islands, private airport/port transfers, a guided city tour in Athens, and sightseeing at iconic landmarks along the way. International flights, visa fees and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Greece?",
    answer:
      "Indian passport holders require a Schengen visa, which covers travel across Athens and Santorini on this itinerary. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Acropolis and Parthenon in Athens, the charming village of Oia with its famous sunset, the caldera views of Fira, and the volcanic black-sand beaches of Santorini.",
  },
  {
    question: "How do we travel from Athens to Santorini?",
    answer:
      "Travel from Athens to Santorini is by a comfortable high-speed ferry from Piraeus Port, offering scenic Aegean views. The ferry ticket is included in the package, and our team handles all timing and coordination for a smooth journey.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add a Mykonos stopover, extra nights in Santorini, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const GlimpsesOfGreeceLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.segvtours.com/wp-content/uploads/2023/03/athens-g-1024x682.jpg"
          alt="Glimpses of Greece Tour"
        />

        <div className="hero-content">
          <h1>Glimpses of Greece</h1>

          <p>
            Athens • Santorini
          </p>

          <Link to="/Glimpses-Greece">
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
              src="https://wallpaperbat.com/img/7964613-the-ancient-greece-capital-of-athens.png"
              alt="Acropolis Athens"
            />
            <p>Acropolis, Athens</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://www.athensguide.com/the-plaka/plaka1.jpg"
              alt="Plaka Athens"
            />
            <p>Plaka Old Town</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://wallpaperaccess.com/full/3117525.jpg"
              alt="Oia Sunset Santorini"
            />
            <p>Oia Sunset, Santorini</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.1i7qOe-lLdxuOIokMmJnTgHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Fira Santorini"
            />
            <p>Fira & the Caldera</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏛️ Ancient Wonders of Athens</div>
          <div>🌅 Breathtaking Caldera Sunsets</div>
          <div>🍷 Santorini's Volcanic Vineyards</div>
          <div>🏖️ Iconic Black-Sand Beaches</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Glimpses of Greece in 6 Days</h2>

        <p>
          From the ancient ruins of Athens to the whitewashed cliffs of Santorini — a perfect short escape into Greece's finest
        </p>

        <br />

        <Link to="/Glimpses-Greece">
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
              src="https://tse4.mm.bing.net/th/id/OIP.FtlalLJqyTaGictsc0B3swHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>India → Athens</p>
              <p>
Upon arrival at Athens International Airport, you are warmly met and assisted for your private transfer 
to your hotel in the city. Sit back and relax as you drive through the historic streets of Athens, catching 
your first glimpses of this ancient yet vibrant capital. Once you arrive at your hotel, check in and settle 
into your accommodation. The remainder of the day is at leisure — perhaps enjoy a gentle walk 
nearby or unwind after your journey. <br/>
Overnight Stay in Athens 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://cdn.getyourguide.com/img/tour/649f1774b2ceb2be.jpeg/145.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Athens – Half-Day Sightseeing Tour with Acropolis Museum on SIC Basis</p>
              <p>
After breakfast, you join a shared-basis half-day sightseeing tour of Athens. This guided experience 
introduces you to the city’s most iconic landmarks, including the Acropolis, a UNESCO World 
Heritage site that stands as a symbol of classical Greek civilization. You visit the Acropolis Museum, 
where beautifully curated exhibits showcase ancient sculptures, artifacts, and architectural 
fragments, offering deep insight into Greece’s glorious past. The tour provides a perfect blend of 
history, culture, and storytelling before returning to your hotel or city center. <br/>
Overnight Stay in Athens. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.J_xG0vU6uM8vGzPsuIQW1gHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Athens → Santorini</p>
              <p>
Private Transfer – Athens Hotel to Athens Ferry Port 
At the scheduled time, you are picked up privately from your Athens hotel and transferred 
comfortably to the Athens ferry port. Enjoy a smooth and hassle-free journey as you prepare to 
continue your Greek island adventure. <br/>
Economy Ferry – Athens to Santorini 
You board an economy-class ferry for your scenic journey from Athens to Santorini. Sail across the 
sparkling Aegean Sea, taking in panoramic views and enjoying a relaxed onboard experience as you 
approach one of Greece’s most celebrated islands.<br/> 
Private Transfer – Santorini Ferry Port to Santorini Hotel 
Upon arrival at Santorini ferry port, you are met and assisted for a private transfer to your hotel. As 
you travel through the island’s dramatic landscapes, you get your first glimpses of Santorini’s 
Apextion DMC <br/>
Email: sales@apextiondmc.com, groups@apextiondmc.com || Contact No.: +91 11 4921 5555 
www.apextiondmc.com  <br/>
LONDON | PARIS | NEW DELHI | MUMBAI <br/>
whitewashed villages, volcanic terrain, and deep-blue sea views. Upon arrival, check in and settle into 
your accommodation. <br/>
Overnight Stay in Santorini. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://cdn-imgix.headout.com/media/images/b070892a59b5a299d2a9665a6870c330-22051-Santorini-VolcanicIslandsCruisewithHotSpringsVisitinSantorini-15.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Santorini – Day at Leisure Or Santorini – Volcanic Islands Cruise with Hot Springs Visit on Shared Basis</p>
              <p>
 Santorini – Volcanic Islands Cruise with Hot Springs Visit on Shared Basis 
After breakfast or at the scheduled time, you join a shared-basis Set sail from Athinios Port on a 
traditional wooden boat and explore the natural wonders of Santorini’s volcanic landscape. With live 
commentary on board, you'll journey through the heart of the caldera and visit iconic spots shaped 
by volcanic activity. <br/>
Overnight Stay in Santorini 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.civitatis.com/f/grecia/santorini/paseo-catamaran-caldera-santorini-r32.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Santorini – Day at Leisure or Santorini – Catamaran Caldera Cruise on Shared Basis</p>
              <p>
At the scheduled time, you proceed for a shared-basis catamaran cruise around Santorini’s stunning 
caldera. Sailing along the island’s volcanic coastline, you enjoy magnificent views of cliffs, lava 
formations, and crystal-clear waters. The cruise offers a relaxing way to experience Santorini from 
the sea, often including swimming stops and time to unwind on deck as you soak in the island’s 
natural beauty. <br/>
Overnight Stay in Santorini 

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.pnn-5xgu8eyPDbU2LLzayAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Santorini → India</p>
              <p>
At the appropriate time, you are transferred privately from your Santorini hotel to Santorini Airport.<br/> 
Enjoy a comfortable and timely journey, concluding your unforgettable Greek island experience as 
you prepare for your onward flight.____________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("6 Days Glimpses of Greece Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Greek getaway</p>
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

export default GlimpsesOfGreeceLanding;