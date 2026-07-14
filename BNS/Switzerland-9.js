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
    question: "What is the best time to visit Switzerland for this tour?",
    answer:
      "Late spring to early autumn (May–September) is ideal, when mountain passes and cable cars are fully operational and the weather is best for excursions like Jungfraujoch, Gornergrat and Chillon Castle. Snow season (December–March) offers a magical alpine experience, though some high-altitude attractions may have limited access.",
  },
  {
    question: "What is included in the 10-day Scenic Switzerland Discovery package?",
    answer:
      "The package includes hotel accommodation for 9 nights (3 nights Lucerne, 2 nights Interlaken, 2 nights Zermatt, 2 nights Montreux), daily breakfast, coach transfers between cities, city tours in Lucerne, Interlaken, Zermatt and Montreux, and the scenic Golden Pass route. International flights, optional excursions like Jungfraujoch and Gornergrat, and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Switzerland?",
    answer:
      "Indian passport holders require a Schengen visa to enter Switzerland. We recommend applying at least 4–6 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the charming Old Town and Chapel Bridge in Lucerne, the alpine resort town of Interlaken, the iconic car-free village of Zermatt beneath the Matterhorn, the panoramic Gornergrat railway, the lakeside promenade of Montreux, and the medieval Chillon Castle on Lake Geneva.",
  },
  {
    question: "What currency is used across Switzerland?",
    answer:
      "The Swiss Franc (CHF) is the official currency. Cards are widely accepted, but it is useful to carry some cash for small purchases, mountain restaurants, and local transit. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add extra nights in Zurich, a Jungfraujoch excursion, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const ScenicSwitzerlandLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://b2bzend.s3.ap-south-1.amazonaws.com/img/162492/package/images/usa-panorama-east-west-luxury-coach-tour_1762948249"
          alt="Scenic Switzerland Discovery Tour"
        />

        <div className="hero-content">
          <h1>SCENIC SWITZERLAND DISCOVERY</h1>

          <p>
            Lucerne • Interlaken • Zermatt • Montreux
          </p>

          <Link to="/Scenic-Switzerland">
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
              src="https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?q=80&w=1170&auto=format&fit=crop"
              alt="Lucerne"
            />
            <p>Lucerne Old Town</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=1170&auto=format&fit=crop"
              alt="Interlaken"
            />
            <p>Interlaken</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=1170&auto=format&fit=crop"
              alt="Zermatt Matterhorn"
            />
            <p>Zermatt & Matterhorn</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?q=80&w=1170&auto=format&fit=crop"
              alt="Montreux"
            />
            <p>Montreux, Lake Geneva</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏔️ Iconic Swiss Alps</div>
          <div>🚞 Scenic Mountain Railways</div>
          <div>🗻 The Legendary Matterhorn</div>
          <div>🛶 Charming Lake Geneva Shoreline</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Discover the Best of Switzerland in 10 Days</h2>

        <p>
          From medieval old towns to snow-capped peaks and glittering lakes — the ultimate Swiss escape
        </p>

        <br />

        <Link to="/Scenic-Switzerland">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>10 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?q=80&w=1170&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>India – Arrival in Switzerland | Zurich Airport → Lucerne</p>
              <p>
             Arrive at Zurich Airport and activate your Swiss Pass for a scenic train journey to Lucerne. Enjoy the
             stunning views of lakes, mountains, and charming villages. Check into your hotel and explore
              Lucerne's Old Town, Chapel Bridge, and lakeside promenade.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1508264165352-258a6c1d1b48?q=80&w=1170&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}> Lindt Chocolate Museum & Rhine Falls (No Boat Ride)</p>
              <p>
               Breakfast at Hotel.<br />
               Begin your day at the Lindt Home of Chocolate (subject to availability), where you’ll witness
               Switzerland’s chocolate-making magic. Later, use your Swiss Pass to visit Rhine Falls, Europe’s
               largest waterfall. Return to Lucerne and relax.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1487730116645-74489c95b41b?q=80&w=1170&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Excursion to Mt. Titlis with Ice Flyer</p>
              <p>
              Breakfast at Hotel.<br />
              Travel to Interlaken using your Swiss Pass. After checking in, visit the mesmerizing twin valleys of
              Lauterbrunnen and Grindelwald. Discover waterfalls, scenic meadows, and panoramic mountain
              views. Overnight in Interlaken
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=1170&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Lucerne → Interlaken | Visit Grindelwald & Lauterbrunnen</p>
              <p>
              Breakfast at Hotel.<br />
              Travel to Interlaken using your Swiss Pass. After checking in, visit the mesmerizing twin valleys of
               Lauterbrunnen and Grindelwald. Discover waterfalls, scenic meadows, and panoramic mountain
              views. Overnight in Interlaken.The area is also home to the Jungfrau-Aletsch glacier, a UNESCO
              World Heritage site, and offers attractions like a Sphinx Observatory for panoramic views, explore
              the Ice Palace with its ice sculptures, and walk on the Glacier Plateau.<br />
              Overnight Stay in Interlaken.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=1170&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Excursion to Mt. Jungfrau (Top of Europe)</p>
              <p>
              Breakfast at Hotel.<br />
               Embark on the iconic trip to Jungfraujoch – Top of Europe. Explore the Ice Palace, enjoy views of the
              Aletsch Glacier, and admire snowy peaks at 3,454 meters. Return to Interlaken.

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=1170&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}> Interlaken → Zermatt</p>
              <p>
              Breakfast at Hotel.<br />
              Travel to the car-free resort town of Zermatt using your Swiss Pass. Enjoy the charming mountain
               atmosphere and stunning views of the Matterhorn. Overnight in Zermatt.

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1516567727245-ad8c68f3ec93?q=80&w=1170&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Excursion to Matterhorn Glacier Paradise</p>
              <p>
             Use your Swiss Pass (with applicable reductions) to visit Matterhorn Glacier Paradise, the highest
             cable car station in Europe. Enjoy breathtaking views, ice sculptures, and panoramic snowfields.<br />
             Overnight in Zermatt.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?q=80&w=1170&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{ color: "blue" }}>Zermatt → Montreux</p>
              <p>
              
              Check out and travel to Montreux along the scenic Lake Geneva region. On arrival, relax by the
              lakeside promenade or explore the town’s charming ambience. Overnight in Montreux.

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=1170&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 9</h3>
              <p style={{ color: "blue" }}> Excursion to Glacier 3000</p>
              <p>
              Experience an exciting excursion to Glacier 3000, featuring incredible snow activities, the thrilling
               Peak Walk by Tissot, and stunning views of the Alps. Return to Montreux for the night.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1490079027102-cd08f2308e51?q=80&w=1170&auto=format&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 10</h3>
              <p style={{ color: "blue" }}>Departure | Montreux → Geneva Airport</p>
              <p>
               After breakfast, proceed to Geneva Airport using your Swiss Pass. Depart with unforgettable
               memories of Switzerland’s natural beauty, panoramic mountains, and serene lakes.
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("10 Days Scenic Switzerland Discovery Tour")}
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

export default ScenicSwitzerlandLanding;