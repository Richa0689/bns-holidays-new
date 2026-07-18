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
    question: "What is the best time to visit Barcelona, Ibiza and Madrid for this tour?",
    answer:
      "May to September is ideal, with June and September offering warm weather, sunny beaches and lively city life. Summer (July–August) is peak season for Ibiza's beach and party scene, while May, June and September bring slightly cooler temperatures and fewer crowds, perfect for sightseeing in Barcelona and Madrid.",
  },
  {
    question: "What is included in the 8-day Best of Barcelona + Ibiza + Madrid package?",
    answer:
      "The package includes 7 nights accommodation (2 nights Barcelona, 2 nights Ibiza, 3 nights Madrid), daily breakfast, comfortable transfers between cities, guided city tours in Barcelona and Madrid, and sightseeing at iconic landmarks along the way. International flights, visa fees and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Spain?",
    answer:
      "Indian passport holders require a Schengen visa, which covers travel across Barcelona, Ibiza and Madrid on this itinerary. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Sagrada Familia and Gothic Quarter in Barcelona, the sun-soaked beaches of Ibiza, and the Royal Palace, Prado Museum and an optional day trip to Toledo from Madrid.",
  },
  {
    question: "What currency is used across Spain?",
    answer:
      "Spain uses the Euro (EUR) across Barcelona, Ibiza and Madrid. Cards are widely accepted everywhere, but it's useful to carry some local cash for small purchases and transit. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like extra nights in Ibiza, a Costa Brava excursion, or upgraded hotels, our team will curate the perfect personalised experience for you.",
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
const BarcelonaIbizaMadridLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.segvtours.com/wp-content/uploads/2023/08/Barcelona-skyline-panorama-at-the-Blue-Hour-2048x704.jpg"
          alt="Barcelona, Ibiza & Madrid Tour"
        />

        <div className="hero-content">
          <h1>Best of Barcelona + Ibiza + Madrid</h1>

          <p>
            Barcelona • Ibiza • Madrid • Toledo
          </p>

          <Link to="/Best-Barcelona">
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
              src="https://wallpaperbat.com/img/443126-sagrada-familia-visit-sagrada-familia-barcelona.jpgs"
              alt="Sagrada Familia Barcelona"
            />
            <p>Sagrada Familia, Barcelona</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://wallpaperaccess.com/full/2527038.jpg"
              alt="Ibiza beaches"
            />
            <p>Ibiza Beaches</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://traveldigg.com/wp-content/uploads/2016/09/Royal-Palace-of-Madrid-Pictures.jpg"
              alt="Royal Palace Madrid"
            />
            <p>Royal Palace, Madrid</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://wallpaper-city.net/wp-content/uploads/wallpaper_208/Full_quality_image_ID_2100343-scaled.jpg"
              alt="Toledo Spain"
            />
            <p>Historic Toledo</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏛️ Iconic Gaudí Architecture</div>
          <div>🏖️ Sun-Soaked Ibiza Beaches</div>
          <div>🎨 World-Class Madrid Museums</div>
          <div>🏰 Medieval Toledo Day Trip</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Best of Spain in 8 Days</h2>

        <p>
          From the artistry of Barcelona to the island vibes of Ibiza and the royal charm of Madrid — a journey through Spain's finest
        </p>

        <br />

        <Link to="/Best-Barcelona">
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
              src="https://trawel.blob.core.windows.net/trawel/content_files/package_blogs/8bbcd9dc-490.png"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>India – Greece</p>
              <p>
Arrival in Athens – Welcome to the Cradle of Civilization 
Welcome to Greece, a country where ancient history, stunning islands, and Mediterranean charm 
come together to create an unforgettable journey. Athens, the historic capital, is known for its 
classical monuments, vibrant streets, and timeless legacy. <br/>
Upon arrival at Athens International Airport, meet your driver and enjoy a smooth private transfer to 
your hotel. After check-in, relax or explore the city at leisure, soaking in the lively atmosphere and 
rich heritage.<br/> 
Overnight stay in Athens. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.Afb9eEDzjiogrHASTFncwQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Athens Sightseeing Tour</p>
              <p>
Breakfast at Hotel. <br/>
After breakfast, proceed for a Half-Day Sightseeing Tour with Acropolis Museum on SIC basis. Visit 
iconic landmarks including the Acropolis, Parthenon, and other historic sites that define Athens’ 
ancient glory. Continue to the Acropolis Museum, showcasing remarkable artifacts and architectural 
treasures. <br/>
The rest of the day is free at leisure to explore local markets, cafés, or historic neighborhoods.<br/> 
Overnight stay in Athens.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://res.cloudinary.com/enchanting/q_70,f_auto,w_1440,h_720,c_fill,g_face/ee-web/2024/03/shutterstock_2433372333.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Athens – Mykonos</p>
              <p>
Breakfast at Hotel.<br/> 
After breakfast, check out and enjoy a private transfer from your Athens hotel to Athens Ferry Port. 
Board the economy class ferry to Mykonos, one of Greece’s most famous islands known for its 
whitewashed houses and vibrant lifestyle. <br/>
Upon arrival at Mykonos Ferry Port, meet your driver and enjoy a private transfer to your hotel. The 
remainder of the day is at leisure to explore beaches or stroll through charming streets.<br/> 
Overnight stay in Mykonos. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.7lVLePsbttNNA5Obtr33ZAHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Mykonos Highlights Tour</p>
              <p>
Breakfast at Hotel.<br/> 
After breakfast, enjoy a Guided Highlights Tour of Mykonos on shared basis. Discover the island’s key 
attractions, traditional villages, scenic viewpoints, and cultural highlights that reflect its unique 
Cycladic character. <br/>
Apextion DMC <br/>
Email: sales@apextiondmc.com, groups@apextiondmc.com || Contact No.: +91 11 4921 5555 
www.apextiondmc.com  <br/>
LONDON | PARIS | NEW DELHI | MUMBAI<br/> 
Rest of the day free at leisure.<br/> 
Overnight stay in Mykonos. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.whwGFXKVBDIuMBLgruW8tgHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Mykonos – Santorini</p>
              <p>
Breakfast at Hotel. <br/>
After breakfast, check out and enjoy a private transfer from Mykonos hotel to Mykonos Ferry Port. <br/>
Board the economy class ferry to Santorini, one of the most picturesque islands in the world. <br/>
Upon arrival at Santorini Ferry Port, enjoy a private transfer to your hotel. Spend the evening at leisure 
enjoying the famous island views.<br/> 
Overnight stay in Santorini.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.5ABQCLBk0PNbVa4LhrNV_AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Santorini Volcanic Islands Cruise</p>
              <p>
Breakfast at Hotel. <br/>
After breakfast, proceed for a Volcanic Islands Cruise with Hot Springs Visit on shared basis. Sail 
across the caldera, explore volcanic landscapes, and enjoy a rejuvenating swim in the hot springs, 
making this one of Santorini’s most popular experiences.<br/> 
Return to hotel and enjoy the evening at leisure.<br/> 
Overnight stay in Santorini
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://cdn-imgix.headout.com/media/images/e68a1f1c3e1f7d21173815f98d044512-22051-Santorini-VolcanicIslandsCruisewithHotSpringsVisitinSantorini-14.jpg?auto=format&w=1069.6000000000001&h=687.6&q=90&fit=crop&ar=14:9&crop=faces"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Santorini Volcanic Islands Cruise</p>
              <p> 
Breakfast at Hotel. <br/>
After breakfast, proceed for a Volcanic Islands Cruise with Hot Springs Visit on shared basis. Sail 
across the caldera, explore volcanic landscapes, and enjoy a rejuvenating swim in the hot springs, 
making this one of Santorini’s most popular experiences.<br/> 
Return to hotel and enjoy the evening at leisure. <br/>
Overnight stay in Santorini. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.3dP5WumVOqtB94gn8b7aCAHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{ color: "blue" }}>Departure</p>
              <p>
Breakfast at Hotel. <br/>
Check out and enjoy a private transfer from your Athens hotel to Athens International Airport for 
your onward flight, marking the end of your memorable Greece journey.________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("8 Days Best of Barcelona + Ibiza + Madrid Tour")}
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

export default BarcelonaIbizaMadridLanding;