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
      "Late spring to early autumn (May–September) is ideal, when mountain passes and cable cars are fully operational and the weather is best for excursions like Jungfraujoch and Glacier 3000. Snow season (December–March) offers a magical alpine experience but some high-altitude attractions may have limited access.",
  },
  {
    question: "What is included in the 8-day Switzerland package?",
    answer:
      "The package includes hotel accommodation for 7 nights, daily breakfast, coach transfers between cities, city tours in Lucerne, Interlaken and Montreux, the Rhine Falls excursion, and entry to Glacier 3000. International flights, optional excursions like Jungfraujoch, and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Switzerland?",
    answer:
      "Indian passport holders require a Schengen visa to enter Switzerland. We recommend applying at least 4–6 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the thundering Rhine Falls, the charming old town and Chapel Bridge in Lucerne, the alpine resort town of Interlaken, the breathtaking Glacier 3000 above Les Diablerets, the lakeside promenade of Montreux, and Chillon Castle on Lake Geneva.",
  },
  {
    question: "What currency is used across Switzerland?",
    answer:
      "The Swiss Franc (CHF) is the official currency. Cards are widely accepted, but it is useful to carry some cash for small purchases, mountain restaurants, and local transit. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add Zurich city stay, a Jungfraujoch excursion, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const RhineFallLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://wallpaperaccess.com/full/3204273.jpg"
          alt="Switzerland Tour"
        />

        <div className="hero-content">
          <h1>SWITZERLAND</h1>

          <p>
            Lucerne • Rhine Falls • Interlaken • Glacier 3000 • Montreux
          </p>

          <Link to="/Rhine-fall">
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
              src="https://thumbs.dreamstime.com/b/rhine-falls-biggest-waterfall-europe-illuminated-hd-background-wallpaper-desktop-wallpape-creative-ai-design-instagram-325620485.jpg"
              alt="Rhine Falls"
            />
            <p>Rhine Falls</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://imgcld.yatra.com/ytimages/image/upload/v1478235006/Lucerne_Old_Town_Lucerne.jpg"
              alt="Lucerne"
            />
            <p>Lucerne Old Town</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://rare-gallery.com/uploads/posts/724705-Interlaken-Switzerland.jpg"
              alt="Interlaken"
            />
            <p>Interlaken</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://static.mycity.travel/manage/uploads/6/33/389236/1/glacier-3000-telepherique-hiver_2000.jpg"
              alt="Glacier 3000"
            />
            <p>Glacier 3000</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏔️ Iconic Swiss Alps</div>
          <div>💧 Majestic Rhine Falls</div>
          <div>🚡 Glacier 3000 Peak Point Cable Car</div>
          <div>🛶 Scenic Lake Geneva Shoreline</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Swiss Alps in 8 Days</h2>

        <p>
          From thundering waterfalls to snow-capped glaciers — the ultimate Switzerland panorama
        </p>

        <br />

        <Link to="/Rhine-fall">
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
              src="https://opis-cdn.tinkoffjournal.ru/mercury/india-e-arrival-card-in-out-shutterstock_513083362.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>  India – Arrival in Switzerland | Zurich Airport → Lucerne</p>
              <p>
             Upon arrival at Zurich Airport, activate your Swiss Pass and enjoy a seamless journey to Lucerne by
             train. Sit back and admire Switzerland’s pristine landscapes, charming villages, and sparkling lakes as
             you travel. Upon reaching Lucerne, check in to your hotel and spend the rest of the day exploring this
             picturesque city at your leisure. Don't miss the iconic Chapel Bridge, serene Lake Lucerne, and the old
             town’s beautiful medieval architecture.<br />
              Overnight in Lucerne
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_797/w_74,x_13,y_13,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/fzuoqdixvb3apaob3ojl/LindtHomeofChocolateLakeZurichBoattour.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Lindt Chocolate Museum & Rhine Falls (No Boat Ride)</p>
              <p>
             Start your day with a delightful visit to the world-famous Lindt Home of Chocolate, where you can
             learn about Switzerland's rich chocolate-making heritage and enjoy immersive experiences and
             tastings.
             Later, continue your journey to Rhine Falls, Europe’s largest waterfall, using your Swiss Pass. Marvel
             at the thunderous cascades and natural beauty from various viewing platforms. Return to Lucerne for
             overnight stay.

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://res.klook.com/image/upload/c_fill,w_1265,h_712/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/wd19mqttochwbplwnjtj.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Excursion to Mt. Titlis with Ice Flyer</p>
              <p>
              Today, embark on the spectacular Mt. Titlis excursion, combining your Swiss Pass with the mountain
              pass. Enjoy breathtaking views as you ascend via cable car to the summit at 3,238 meters. Experience
              the famous Ice Flyer chairlift, walk through the Glacier Cave, and enjoy snow activities. Overnight in
              Lucerne.

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0e/b7/22/da.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Lucerne → Interlaken | Visit Grindelwald & Lauterbrunnen</p>
              <p>
             Check out and travel from Lucerne to Interlaken using your Swiss Pass. After checking in, use your
             pass to explore the charming alpine villages of Grindelwald and Lauterbrunnen, known for their
             stunning valleys, waterfalls, and panoramic views. Return to Interlaken for overnight stay.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.swisstours.com/images/Mountains/Jungfrau-Top-of-Europe-medium1.webp"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Excursion to Mt. Jungfrau (Top of Europe)</p>
              <p>
              Experience one of Switzerland’s most iconic excursions – Jungfraujoch, the Top of Europe. Using
              your Swiss Pass (with a supplement), journey to the highest railway station in Europe. Explore the
              Ice Palace, Sphinx Observatory, and enjoy breathtaking views of the Aletsch Glacier. Return to
              Interlaken for overnight stay
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_3200,h_1800/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/celum%20connect/2022/06/28/07/02/06/mob-goldenpass.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}> Interlaken → Montreux</p>
              <p>
             Breakfast at Hotel<br />.
             Travel through scenic landscapes from Interlaken to Montreux using your Swiss Pass. Enjoy views of
             lakes, vineyards, and mountain ranges along the famous GoldenPass route (optional). On arrival,
             relax by Lake Geneva’s beautiful lakeside promenade. Overnight in Montreux.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.KJmVjeyBHKncg82w1bUebwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}> Excursion to Glacier 3000</p>
              <p>
             Breakfast at Hotel.<br />
             Today, enjoy an exciting excursion to Glacier 3000, included in your Swiss Pass benefits (with
             supplement where applicable). Experience breathtaking alpine panoramas, snow activities, the
             thrilling Peak Walk by Tissot, and mesmerizing glacier views. Return to Montreux for overnight stay.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://cdn.prgloo.com/media/4f68ccda3f3148f7aa6c7982939c0636.jpg?width=1135&height=960"
              alt=""
            />
            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{ color: "blue" }}> Departure | Montreux → Geneva Airport</p>
              <p>
              After breakfast, check out and proceed to Geneva Airport using your Swiss Pass. Depart with
              wonderful memories of Switzerland's mountains, lakes, chocolate, and iconic experiences.
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("8 Days Switzerland - From Rhine Fall to Glacier 3000 Tour")}
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

export default RhineFallLanding;