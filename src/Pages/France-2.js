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
    question: "What is the best time to visit Paris, Geneva, and Zurich?",
    answer:
      "France and Switzerland are wonderful year-round destinations. Spring (April–May) is ideal — Paris blooms with cherry blossoms and outdoor terraces buzz with life, while Geneva and Zurich offer crisp, sunny days perfect for lakeside strolls. Summer (June–August) brings long golden days, vibrant festivals, and the best conditions for exploring the Swiss Alps. Autumn (September–October) is stunning with golden foliage across the Swiss countryside and a quieter, more relaxed Paris. Winter (December) is magical — Paris glitters with Christmas lights along the Champs-Élysées while Zurich and Geneva host some of Europe's most charming Christmas markets.",
  },
  {
    question: "What is included in the 7-night/8-day tour package?",
    answer:
      "The package includes accommodation for 7 nights, daily breakfast, airport transfers, guided sightseeing tours as per the itinerary, and intercity travel between Paris, Geneva, and Zurich. International flights and personal expenses are not included unless specified.",
  },
  {
    question: "Do I need a visa to travel to France and Switzerland?",
    answer:
      "Indian passport holders require a Schengen visa to visit both France and Switzerland, as both countries are part of the Schengen Area. A single Schengen visa covers the entire trip. We recommend applying at least 4–6 weeks in advance. Our team can guide you through the complete documentation process to ensure a smooth application.",
  },
  {
    question: "Is this tour suitable for first-time Europe travellers?",
    answer:
      "Absolutely! This itinerary is perfectly crafted for first-timers exploring Western Europe. It covers iconic highlights — Paris's Eiffel Tower, Louvre, and Seine riverbanks, Geneva's beautiful lakefront and United Nations district, and Zurich's charming Old Town and luxury shopping streets — at a comfortable pace that lets you absorb the best of French and Swiss culture without feeling rushed.",
  },
  {
    question: "What currency is used in France and Switzerland?",
    answer:
      "France uses the Euro (€). Switzerland uses the Swiss Franc (CHF) — note that Switzerland is not part of the Eurozone, so you will need local currency there. It is advisable to carry some cash for smaller purchases, local markets, and tips, though credit and debit cards are widely accepted at hotels, restaurants, and major attractions across Paris, Geneva, and Zurich.",
  },
  {
    question: "Can I customise the Paris, Geneva & Zurich itinerary?",
    answer:
      "Yes! Every itinerary is fully customisable based on your interests, travel dates, and budget. Whether you'd like to add a day trip to the Swiss Alps and Jungfrau, a sunset Seine River cruise in Paris, a visit to the Palace of Versailles, a Lake Geneva boat tour, or a chocolate and cheese factory experience in Switzerland, our team will craft the perfect personalised journey for you.",
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
const BestOfSwissFranceTour = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const itinerary = [
    {
      day: "Day 1",
      title: (
        <>
          Paris<br/>
Welcome to Paris – The City of Lights!
        </>
      ),
      img: "https://tse1.mm.bing.net/th/id/OIP.hYjX5M39By3SSbccbGntPwHaEK?r=0&cb=thfc1falcon4&rs=1&pid=ImgDetMain&o=7&rm=3",
      desc: (
        <>
         Arrive at Paris Airport and meet your driver for a smooth private transfer to your hotel. After checkin, relax or explore the charming streets, cafés, and landmarks nearby.<br/>
Overnight Stay in Paris
        </>
      ),
    },
    {
      day: "Day 2",
      title: "Paris Hop-on Hop-off Tour + Eiffel Tower (2nd Level)",
      img: "https://worldinparis.com/wp-content/uploads/2022/06/Batobus-Hop-On-Hop-Off-Paris.jpg",
      desc: (
        <>
          Breakfast at Hotel.<br/>
Today explore Paris using your 1-Day Hop-On Hop-Off Bus Tour (SIC Basis). Visit top attractions
such as:<br/>
Champs-Élysées<br/>
Arc de Triomphe<br/>
Louvre Museum<br/>
Notre-Dame<br/>
Musée d’Orsay<br/>
Seine River Embankments<br/>
Later, visit the world-famous Eiffel Tower (2nd Level Entry Ticket Included) for breathtaking views
of the Paris skyline.<br/>
Evening free for shopping or an optional Seine River cruise.<br/>
Overnight Stay in Paris

        </>
      ),
    },
    {
      day: "Day 3",
      title: " Paris → Geneva",
      img: "https://wallpaperbat.com/img/1944650-fond-decran-magnifique-day-trip-from-paris-lake-geneva-beautiful-lakes.jpg",
      desc: (
        <>
         Breakfast at Hotel.<br/>
After breakfast, proceed for your private transfer from Paris Hotel to the Train Station for your
onward journey to Switzerland.<br/>
Arrive in Geneva and use your Swiss Travel Pass (Second Class – 6 Days Continuous) for seamless
travel from Geneva Station to your hotel.<br/>
Relax for the rest of the day or walk along Lake Geneva’s beautiful promenade.<br/>
Overnight Stay in Geneva
        </>
      ),
    },
    {
      day: "Day 4",
      title: " Excursion to Glacier 3000",
      img: "https://tse1.mm.bing.net/th/id/OIP.uVhdxevmkx4tAVYbiFqLIQHaE8?r=0&cb=thfc1falcon4&rs=1&pid=ImgDetMain&o=7&rm=3",
      desc: (
        <>
          Breakfast at Hotel.<br/>
Today, enjoy an unforgettable excursion to Mt. Glacier 3000 using your Swiss Travel Pass (ticket
included). Spectacular Alpine views The Peak Walk by Tissot – the world’s only suspension bridge
connecting two mountain peaks. Snow activities and scenic viewpoints<br/>
Return to Geneva in the evening.<br/>
Overnight Stay in Geneva
        </>
      ),
    },
    {
      day: "Day 5",
      title: "Geneva → Zurich",
      img: "https://wallpaperaccess.com/full/8466177.jpg",
      desc: (
        <>
          Breakfast at Hotel.<br/>
Today, travel from Geneva to Zurich using your Swiss Travel Pass. Enjoy one of Europe’s most
scenic train journeys through lakes, vineyards, and mountains.<br/>
Arrive in Zurich and check in to your hotel. Rest of the day is free to explore the Old Town,
Bahnhofstrasse, or take a walk near Lake Zurich.<br/>
Overnight Stay in Zurich
        </>
      ),
    },
    {
      day: "Day 6",
      title: "Lindt Chocolate Factory Visit",
      img: "https://i.ytimg.com/vi/-L8kzBe0IWA/maxresdefault.jpg",
      desc: (
        <>
         Breakfast at Hotel.<br/>
This morning, use your Swiss Travel Pass to visit the famous Lindt Home of Chocolate. Enjoy
interactive exhibits, learn about the history of Swiss chocolate, and taste freshly made delights at
the world’s largest chocolate fountain.<br/>
Return to Zurich and spend the rest of the day at leisure.<br/>
Overnight Stay in Zurich
        </>
      ),
    },
    {
      day: "Day 7",
      title: "Excursion to Mt. Titlis with Ice Flyer",
      img: "https://live.staticflickr.com/2488/4108113332_94c87a7184_b.jpg",
      desc: (
        <>
          Breakfast at Hotel.<br/>
Today, enjoy a full-day excursion to Mt. Titlis using your Swiss Travel Pass.
Experience:<br/>
Rotating cable car ride to the summit<br/>
Stunning snow-covered landscapes<br/>
Ice Flyer Chairlift (Ticket Included)<br/>
Glacier Cave & Cliff Walk<br/>
Return to Zurich in the evening.<br/>
Overnight Stay in Zurich
        </>
      ),
    },
    {
      day: "Day 8",
      title: "Zurich – Departure",
      img: "https://cdn.pixabay.com/photo/2014/05/01/16/59/airport-335589_1280.jpg",
      desc: (
        <>
          Breakfast at Hotel.<br/>
Check out and proceed to Zurich Airport using your Swiss Travel Pass for your flight back to India.<br/>
Your memorable France & Switzerland journey comes to an end with beautiful Alpine memories!
        </>
      ),
    },
  ];

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/11/29111159/lauterbrunnen.jpeg"
          alt="Best of Swiss & France Tour"
        />
        <div className="hero-content">
          <h1>Best of Swiss & France</h1>
          <p>Parisian Grandeur. Swiss Alpine Elegance. Timeless Beauty.</p>
          <Link to="/france-landing3">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Major Destinations</h2>
        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://tse3.mm.bing.net/th/id/OIP.h8_khAzOayGbgKBRsPVZZAHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
            <p>Paris, France</p>
          </div>
          <div className="highlight-card">
            <img src="https://wallpaperaccess.com/full/1192125.jpg" alt="" />
            <p>Palace of Versailles</p>
          </div>
          <div className="highlight-card">
            <img src="https://images.wallpapersden.com/image/download/geneva-switzerland-capital_Zmtua2WUmZqaraWkpJRnbGdrrWZqaG4.jpg" alt="" />
            <p>Geneva, Switzerland</p>
          </div>
          <div className="highlight-card">
            <img src="https://wallpaperbat.com/img/1944658-photo-switzerland-geneva-lake-geneva-ferris-wheel-motorboat-cities.jpg" alt="" />
            <p>Zurich, Switzerland</p>
          </div>
        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Journey?</h2>
        <div className="why-grid">
          <div>🗼 Paris's Eiffel Tower & Louvre</div>
          <div>🏔️ Swiss Alpine Scenery & Lakes</div>
          <div>🚂 Scenic TGV & Swiss Train Travel</div>
          <div>🍫 Swiss Chocolate & Fine Dining</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Best of France & Switzerland</h2>
        <p>Book your European adventure today — 07 Nights / 08 Days from ₹3,20,000</p>
        <br />
        <Link to="/france-landing3">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>8 Days Tour Itinerary</h2>
        <div className="itinerary-list">
          {itinerary.map((item, idx) => (
            <div className="day-card" key={idx}>
              <img src={item.img} alt="" />
              <div className="day-content">
                <h3>{item.day}</h3>
                <p style={{ color: "blue" }}>{item.title}</p>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Send Query Button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("8 Days Best of Swiss & France — Paris, Geneva & Zurich Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your France & Switzerland journey</p>
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
        .eq-day-label {
          font-size: 0.83rem;
          color: #777;
          margin: -10px 0 14px;
        }
        .eq-day-label strong { color: #c8860a; }

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

export default BestOfSwissFranceTour;