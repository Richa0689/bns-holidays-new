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
    question: "What is the best time to visit Switzerland for this Zurich-Bern-Geneva tour?",
    answer:
      "May to September is ideal, with warm days, clear alpine views, and long daylight hours for sightseeing in Zurich, Bern and Geneva. June to August is peak season for Mont Blanc excursions, while shoulder months (May, September) offer pleasant weather with fewer crowds.",
  },
  {
    question: "What is included in the 7-day Switzerland package?",
    answer:
      "The package includes 6 nights' hotel accommodation (2N Zurich, 2N Bern, 2N Geneva), daily breakfast, private/luxury coach transfers between cities, guided city tours in Zurich, Bern and Geneva, and a scenic excursion toward Mont Blanc. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Switzerland?",
    answer:
      "Indian passport holders require a Schengen visa to visit Switzerland. We recommend applying at least 6-8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Old Town and Lake Zurich promenade, the medieval streets and Zytglogge clock tower in Bern, the Jet d'Eau and Lake Geneva waterfront in Geneva, and breathtaking views of Mont Blanc from the Chamonix valley.",
  },
  {
    question: "What currency is used across Switzerland?",
    answer:
      "The Swiss Franc (CHF) is the official currency, though many places also accept Euros. Cards are widely accepted, but it's useful to carry some cash for small purchases, transit and tips. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like extra nights in Zurich, an Interlaken or Lucerne extension, or upgraded hotels, our team will curate the perfect personalised experience for you.",
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
const SwitzerlandLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://wallpaperaccess.com/full/1455073.jpg"
          alt="Switzerland Tour"
        />

        <div className="hero-content">
          <h1>SWITZERLAND</h1>

          <p>
            Zurich • Bern • Geneva • Mont Blanc
          </p>

          <Link to="/Zurichs-Swiss">
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
              src="https://i.pinimg.com/736x/bb/cf/76/bbcf764ea22357b4e03b002c513e7c66.jpg"
              alt="Zurich"
            />
            <p>Zurich Old Town</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images6.alphacoders.com/673/673872.jpg"
              alt="Bern"
            />
            <p>Bern Old City</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.nyj2qBMKx513RfJO5LsZDQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Geneva"
            />
            <p>Geneva & Jet d'Eau</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.pexels.com/photos/34605870/pexels-photo-34605870/free-photo-of-breathtaking-chamonix-lake-with-mont-blanc-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Mont Blanc"
            />
            <p>Mont Blanc Views</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏔️ Iconic Alpine Landscapes</div>
          <div>⛲ Geneva's Lakefront Charm</div>
          <div>🕰️ Medieval Bern's Old Town</div>
          <div>🚋 Effortless City-to-City Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Best of Switzerland in 7 Days</h2>

        <p>
          From lakeside cities to snow-capped peaks — the ultimate Swiss panorama
        </p>

        <br />

        <Link to="/Zurichs-Swiss">
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
              src="https://wallpaperbat.com/img/859060-switzerland-zurich-rivers-houses-bridges-evening-wallpaper-1920x1080-1375066.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>India – Zurich </p>
              <p>
                Welcome to Zurich! Arriving in Zurich is an excellent start to your Swiss adventure! Getting from 
                Zurich to Lucerne with your Swiss Pass is straightforward, scenic, and incredibly convenient. 
                Lucerne is one of Switzerland's most picturesque and enchanting cities, perfectly blending historical 
                charm with stunning natural beauty. Whether you're a history buff, nature lover, or simply in search 
                of a relaxing European getaway, Lucerne offers something for everyone.<br/>  
                Overnight Stay in Zurich
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images3.alphacoders.com/871/thumb-1920-871625.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Zurich</p>
              <p>
                Breakfast at Hotel<br/>  
                Visiting the Rhine Falls with your Swiss Pass is quick and convenient. Take the train from Zurich to 
               Schaffhausen and continue to Neuhausen Rheinfall, where the falls are just a short walk away. Boat 
               rides are not included.<br/>  
               After the falls, make your way to the Lindt Home of Chocolate in Kilchberg. It’s easily reached by a 
               short train ride from Zurich, followed by a brief walk to the museum. Your entry ticket provides 
               access to the chocolate fountain and the interactive exhibits. <br/> 
               Overnight Stay in Zurich
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.HYFX2hK_alBImYKEQua4iwHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Zurich – Bern </p>
              <p>
 
             Breakfast at Hotel<br/> 
             The train journey from Zurich to Bern is a comfortable and scenic way to travel across Switzerland, 
             offering views of picturesque towns, rolling hills, and the Swiss countryside. 
             Once in Bern, you can explore the city at your own pace. Bern, the capital of Switzerland, perfectly 
             combines historic charm with modern vibrancy. Stroll through its UNESCO-listed Old Town, admire 
             the iconic Zytglogge clock tower, or enjoy the serene banks of the Aare River.<br/> 
             Overnight Stay in Bern
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.baltana.com/files/wallpapers-29/Bern-Wallpaper-97936.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}> Bern </p>
              <p>
 
              Breakfast at the hotel <br/>
             Take a full-day excursion to Mt. Jungfrau – the “Top of Europe” using your Swiss Pass. Travel by 
             train from Bern to Interlaken Ost, then continue to Grindelwald Terminal. From there, board the 
             Eiger Express high-speed cable car to Eiger Letscher, and transfer to the Jungfrau Bahn to reach 
              Jungfrau, Europe’s highest railway station. The journey offers breathtaking views of alpine valleys, 
             glaciers, and the iconic Eiger North Face. <br/>
             At Jungfrau, enjoy panoramic vistas of the Aletsch Glacier, explore the Ice Palace, and take in the 
             stunning alpine scenery. Return to Bern in the evening for your overnight stay 
 
             Overnight Stay in Bern
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://cdn.wallpapersafari.com/96/14/fJFEh6.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}> Bern – Geneva </p>
              <p>
 
             Breakfast at the hotel <br/>
              Travel by train from Bern to Geneva with your Swiss Pass. The journey is comfortable and scenic, 
             passing through the Swiss countryside and picturesque towns.<br/> 
 
             In Geneva, explore the city at your own pace. Visit landmarks like the Jet d’Eau, Flower Clock, and the 
             Old Town, or enjoy a stroll along Lake Geneva. Geneva is a cosmopolitan city known for its 
             international institutions, rich history, and vibrant cultural scene. <br/>
             Overnight stay in Geneva
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.xeXL2resSlKQIyxoqJCyAwHaEx?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}> Geneva</p>
              <p>
               Breakfast at the hotel <br/>
               Embark on a day trip to Mont Blanc from Geneva on an SIC basis. Travel across the French border to 
                Chamonix, passing through the scenic Arve Valley surrounded by stunning alpine landscapes. <br/>
 
               In Chamonix, take the famous Aiguille du Midi cable car (ticket included) for breathtaking panoramic 
               views of France, Switzerland, and Italy. Enjoy some free time to explore the charming alpine town and 
               soak in its unique atmosphere. <br/>
               Overnight stay in Geneva
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.ImKeLUZUOCEoV4qigLnYxgHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Zurich – India</p>
              <p>
                Breakfast at Hotel <br/>
                After breakfast proceed to airport with Swiss Pass.
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("7 Days Switzerland - Zurich, Bern & Geneva Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Swiss journey</p>
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

export default SwitzerlandLanding;