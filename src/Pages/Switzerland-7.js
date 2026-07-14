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
    question: "What is the best time to visit Lucerne, Interlaken and Geneva?",
    answer:
      "May to September offers the most pleasant weather for lake cruises in Lucerne, Alpine views in Interlaken, and lakeside walks in Geneva. December to March suits travellers looking to combine the trip with skiing near Interlaken, while spring and autumn bring mild weather and fewer crowds.",
  },
  {
    question: "What is included in the 7-day Glimpses of Switzerland package?",
    answer:
      "The package includes hotel accommodation for 6 nights (2N Lucerne, 2N Interlaken, 2N Geneva), daily breakfast, luxury coach transfers between cities, and guided sightseeing across all three destinations. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Switzerland?",
    answer:
      "Indian passport holders require a Schengen visa, which covers Switzerland and allows entry across the wider Schengen area. We recommend applying at least 4-6 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Chapel Bridge and Lion Monument in Lucerne, the Alpine scenery and optional Jungfraujoch excursion near Interlaken, and the Jet d'Eau and Old Town along Lake Geneva.",
  },
  {
    question: "What currency is used in Switzerland?",
    answer:
      "Switzerland uses the Swiss Franc (CHF), not the Euro. Cards are widely accepted, but it's useful to carry some local cash for small purchases. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like extra nights in any city, a Jungfraujoch or Titlis excursion upgrade, or premium hotels, our team will curate the perfect personalised experience for you.",
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
const GlimpsesSwitzerland = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://wallpapers.com/images/hd/switzerland-1920-x-1080-background-2vzfo8ubsg3btvp3.jpg"
          alt="Glimpses of Switzerland Tour"
        />

        <div className="hero-content">
          <h1>Glimpses of Switzerland</h1>

          <p>
            Lucerne • Interlaken • Geneva — Switzerland in 7 Days
          </p>

          <Link to="/Glimpses-Switzerland">
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
              src="https://p4.wallpaperbetter.com/wallpaper/81/738/362/chapel-bridge-lucerne-switzerland-wallpaper-preview.jpg"
              alt="Lucerne"
            />
            <p>Chapel Bridge, Lucerne</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://wallpapercrafter.com/desktop1/571508-grindelwald-interlaken-switzerland-mountain-village.jpg"
              alt="Interlaken"
            />
            <p>Alpine Views, Interlaken</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse1.explicit.bing.net/th/id/OIP.UOoa1Z59fp66kqzI4sepMwHaE6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Geneva"
            />
            <p>Jet d'Eau, Geneva</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://static.wixstatic.com/media/a65833_8c9a7d095e9d4dd8b3fe0073a66c34a7~mv2.jpg/v1/fill/w_1350,h_782,q_30,enc_avif,quality_auto/a65833_8c9a7d095e9d4dd8b3fe0073a66c34a7~mv2.jpg"
              alt="Swiss Alps"
            />
            <p>Scenic Alpine Drives</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🌉 Historic Chapel Bridge, Lucerne</div>
          <div>🏔️ Breathtaking Alpine Scenery, Interlaken</div>
          <div>🌊 Lakeside Charm of Geneva</div>
          <div>🚌 Seamless 3-City Coach Journey</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Catch the Best Glimpses of Switzerland in 7 Days</h2>

        <p>
          From lakeside Lucerne to Alpine Interlaken and cosmopolitan Geneva
        </p>

        <br />

        <Link to="/Glimpses-Switzerland">
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
              src="https://wallpaperaccess.com/full/1667431.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>India – Lucerne</p>
              <p>
                Welcome to Zurich! Taking the train from Zurich to Lucerne with your Swiss Pass is an excellent choice!
              The journey is straightforward, scenic, and incredibly convenient.
               Lucerne is one of Switzerland's most picturesque and enchanting cities, perfectly blending historical
               charm with stunning natural beauty. Whether you're a history buff, nature lover, or simply in search
                of a relaxing European getaway, Lucerne offers something for everyone.<br/>
                Overnight Stay in Lucerne

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://m.somewheregood.com/media/from-lucerne-mount-titlis-half-day-tour-with-ice-flyer-t108775-2.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Lucerne – Mt. Titlis with Ice flyer</p>
              <p>
                Breakfast at Hotel<br/>.
                A morning train ride from Lucerne to Engelberg is the perfect way to start your day if you're
               planning to visit Mount Titlis. Known for its stunning views and year-round snow, Titlis offers
              activities such as the Ice Flyer chairlift, snow sports in the Glacier Park, dining, hiking, or simply
               soaking in the spectacular alpine scenery and panoramic viewing terraces a truly unforgettable
               experience.<br/>
             Also, your Swiss Pass does cover boat cruises on Lake Lucerne! This is one of the fantastic perks of
              the Swiss Pass. You can hop on the various boat cruises that operate on Lake Lucerne, which is one
               of the most scenic lakes in Switzerland, surrounded by mountains, charming villages, and
             picturesque landscapes.<br/>
                Overnight Stay in Lucerne

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.meganstarr.com/wp-content/uploads/2023/05/Interlaken_420747640.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}> Lucerne - Interlaken</p>
              <p>
               Breakfast at Hotel.<br/>
               After check out take a train to Interlaken. The train journey from Lucerne to Interlaken is a beautiful
              and scenic ride through the Swiss Alps, taking you through picturesque landscapes, lakes, and
              mountains.<br/>
                Interlaken is a popular tourist destination in the heart of the Swiss Alps, known for its breathtaking
                natural beauty, outdoor activities, and as a gateway to the Jungfrau region. The city is located between Lake Thun and Lake Brienz, offering stunning views of the surrounding mountains,
               including the Eiger, Mönch, and Jungfrau peaks.<br/>
               Overnight Stay in Interlaken

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://dam.destination.one/193763/5673890d9d6c07b970683f1dde16d5931870bcff4495ca30a89ac9c69ce5bc2a/jungfraujoch-jungfraubahn-winter-berge-panorama.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Interlaken - Mt. Jungfrau</p>
              <p>
                Breakfast at Hotel.<br/>
               Take a morning train ride from Interlaken to Grindelwald to start your day if you're planning to visit
              Mt. Jungfrau known for its stunning scenery and the Jungfrau, a high-altitude train station. Located
              in the Bernese Alps, it is part of a massif with the Eiger and Mönch mountains and a significant
              tourist destination due to its unique accessibility via a cogwheel railway tunnel and the surrounding
              Jungfrau Region, which offers hiking and other activities.<br/>
              The area is also home to the Jungfrau-Aletsch glacier, a UNESCO World Heritage site, and offers
              attractions like a Sphinx Observatory for panoramic views, explore the Ice Palace with its ice
                sculptures, and walk on the Glacier Plateau.<br/>
               Overnight Stay in Interlaken.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://rare-gallery.com/thumbs/811611-Lake-Interlaken-Switzerland-Lake-Houses-Marinas.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Interlaken - Geneva</p>
              <p>
                Breakfast at Hotel.<br/>
               In the train journey from Interlaken to Geneva you will gaze upon scenic, awe-inspiring mountain
               peaks and picturesque natural landscapes.<br/>
                You can take cruise in Lake Geneva.<br/>
               Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva).
                Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc. In Geneva,
                you can explore the Old Town, visit landmarks like the Jet d'Eau and St. Pierre Cathedral, or see the
              international institutions like the Palais des Nations and the International Red Cross and Red
              Crescent Museum.<br/>
              Overnight Stay in Geneva

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://arzotravels.com/wp-content/uploads/2017/08/Boat-Tour-on-Lake-Geneva-with-the-Swiss-Travel-Pass-1.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Geneva – Montreux with swiss pass</p>
              <p>
                Breakfast at Hotel.<br/>
                Montreux is a traditional resort town on Lake Geneva. Nestled between steep hills and the lakeside,
              it's known for its mild microclimate and the Montreux Jazz Festival, held in July. The town's
               promenade is lined with flowers, sculptures, Mediterranean trees and grand Belle Époque buildingsOffshore is a medieval island castle, Château de Chillon, with ramparts, formal halls and a chapel
               with 14th-century murals.<br/>
               Visit Chillon Castle with Swiss Pass
                Chillon Castle is a medieval island castle located on Lake Geneva, south of Veytaux in the Swiss
              canton of Vaud. It is situated at the eastern end of the lake, on the narrow shore between Montreux
              and Villeneuve, which gives access to the Alpine valley of the Rhône<br/>
              Overnight Stay in Geneva.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://a.cdn-hotels.com/gdcs/production196/d520/23bf4300-f586-11e8-b8fa-0242ac11000d.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}> Geneva – India</p>
              <p>
              Geneva hotel to Genava airport by using swiss pass.
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("7 Days Glimpses of Switzerland Luxury Coach Tour")}
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

export default GlimpsesSwitzerland;