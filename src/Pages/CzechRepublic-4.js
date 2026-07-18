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
    question: "What is the best time to visit Vienna, Budapest and Prague for this tour?",
    answer:
      "April to October is ideal, with May–June and September offering pleasant weather and fewer crowds. Summer (July–August) is peak season with long daylight hours, perfect for the Danube promenade in Budapest and outdoor cafés in Vienna and Prague, while December brings the magic of Christmas markets across all three cities.",
  },
  {
    question: "What is included in the 7-day Vienna, Budapest & Prague package?",
    answer:
      "The package includes 6 nights accommodation (2 nights Vienna, 2 nights Budapest, 2 nights Prague), daily breakfast, comfortable coach or rail transfers between cities, guided city tours in Vienna, Budapest and Prague, and sightseeing at iconic landmarks along the way. International flights, visa fees and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Austria, Hungary and Czech Republic?",
    answer:
      "Indian passport holders require a Schengen visa, which covers travel across Austria, Hungary and the Czech Republic on this itinerary. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include Schönbrunn Palace and the Vienna State Opera, Buda Castle and a Danube River cruise in Budapest, and Prague's Charles Bridge, Old Town Square and Prague Castle.",
  },
  {
    question: "What currency is used across Austria, Hungary and Czech Republic?",
    answer:
      "Austria uses the Euro (EUR), Hungary uses the Forint (HUF), and the Czech Republic uses the Czech Koruna (CZK). Cards are widely accepted in all three countries, but it's useful to carry some local cash for small purchases and transit. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add a Salzburg day trip, extra nights in Prague, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const ViennaBudapestPragueLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=1600&auto=format&fit=crophttps://cdn.tourradar.com/s3/tour/1500x800/279904_6655e8ac4763d.jpgs"
          alt="Vienna Budapest Prague Tour"
        />

        <div className="hero-content">
          <h1>Vienna + Budapest + Prague</h1>

          <p>
            Vienna • Budapest • Prague
          </p>

          <Link to="/luxury-dubai">
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
              src="https://kanoa.org.uk/wp-content/uploads/2022/11/Schonbrunn-Palace-of-Vienna.jpg"
              alt="Schönbrunn Palace Vienna"
            />
            <p>Schönbrunn Palace, Vienna</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://castlequestchronicles.com/wp-content/uploads/2025/04/Buda-Castle-in-Budapest-Hungary-00-scaled.jpg"
              alt="Buda Castle Budapest"
            />
            <p>Buda Castle, Budapest</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.Z8lO8JQ-MRGy4Xp1AtWFUgHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Danube River Budapest"
            />
            <p>Danube River Cruise</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.8efrQE-GM5uWF930ayMUXwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Charles Bridge Prague"
            />
            <p>Charles Bridge, Prague</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🎻 Imperial Vienna & Schönbrunn Palace</div>
          <div>🏰 Iconic Buda Castle & Parliament</div>
          <div>🚢 Scenic Danube River Cruise</div>
          <div>🌉 Fairy-tale Prague Old Town</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Vienna, Budapest & Prague in 7 Days</h2>

        <p>
          From imperial Vienna to the fairy-tale streets of Prague — a journey through Central Europe's finest
        </p>

        <br />

        <Link to="/luxury-dubai">
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
              src="https://tse1.explicit.bing.net/th/id/OIP.crcplm8D0sExnGoUFfEgxQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>India → Vienna</p>
              <p>
            Welcome to Austria – <br/>
Welcome to Vienna! Upon arrival at Vienna Airport, enjoy a private transfer to your hotel. Check in, 
relax, and spend the evening exploring the elegant streets around the Ringstrasse, St. Stephen’s 
Cathedral, or Vienna’s classic cafés at your leisure <br/>
Overnight Stay in Vienna 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.e3nhUl6siAlV9YsNZWLLvgHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Vienna City Tour</p>
              <p>
                Breakfast at Hotel. <br/>
After breakfast, proceed for the Schönbrunn Palace & Gardens Skip-the-Line Tour (shared basis, 
included). Explore the magnificent imperial residence, wander through the lavishly decorated state 
rooms, and learn about the lives of the Habsburg rulers. Stroll through the beautifully manicured 
Baroque gardens and enjoy spectacular viewpoints across the palace grounds. <br/>
Return to the city center and enjoy the rest of the day at leisure — explore Hofburg Palace, Belvedere, 
or Vienna’s vibrant shopping streets. <br/>
Overnight Stay in Vienna 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.WuRQmC4t0YOg-m1SHVhYOgHaE1?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Vienna → Budapest</p>
              <p>
Breakfast at Hotel. Check out from the Hotel. <br/>
Private transfer from Vienna Hotel to Station. Board your train from Vienna to Budapest. Upon 
arrival at Budapest Station, enjoy a private transfer to your hotel. Check in and spend the evening 
relaxing or exploring the beautiful Danube riverside illuminated by night. <br/>
Overnight Stay in Budapest <br/>
Apextion DMC <br/>
Email: sales@apextiondmc.com, groups@apextiondmc.com || Contact No.: +91 11 4921 5555 
www.apextiondmc.com  <br/>
LONDON | PARIS | NEW DELHI
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://assets-global.website-files.com/60e43c7d6d05b671dff0dc1a/6482365138e2c970cdc10bc0_1-Best-River-Cruises-Budapest.webp"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Budapest City Tour + Danube River Cruise</p>
              <p>
                Breakfast at Hotel. <br/>
After breakfast, enjoy your City Highlights Sightseeing Cruise (included). Sail along the Danube River 
and admire iconic landmarks such as the Hungarian Parliament Building, Buda Castle, Chain Bridge, 
Gellért Hill, and the historic riverbanks of Budapest. Listen to informative audio commentary as you 
experience the city from a unique perspective. <br/>
Afternoon and evening at leisure — explore Fisherman’s Bastion, stroll around Váci Utca, or unwind 
in one of Budapest’s famous thermal baths. <br/>
Overnight Stay in Budapest 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.GCIzt_tDff6BZ4ptMDqKsAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Budapest → Prague</p>
              <p>
      Breakfast at Hotel. Check out from the Hotel.<br/> 
Private transfer from Budapest Hotel to Train Station. Board your train from Budapest to Prague. 
Upon arrival at Prague Station, enjoy a private transfer to your hotel. Check in and spend the 
evening walking through Old Town Square, Charles Bridge, or the lively café districts.<br/> 
Overnight Stay in Prague 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/01/b7/52/caption.jpg?w=800&h=600&s=1"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Prague - Prague Castle Skip-the-Line Ticket with Audio guide</p>
              <p>
        Breakfast at Hotel. <br/>
After breakfast, visit Prague Castle using your Skip-the-Line Ticket with Audio guide (included). 
Explore St. Vitus Cathedral, the Old Royal Palace, St. George’s Basilica, and the charming Golden 
Lane while learning about the history of one of the world’s largest ancient castle complexes. <br/>
Rest of the day is free — discover the Astronomical Clock, stroll along the Vltava River, or enjoy local 
markets and cafés.<br/> 
Overnight Stay in Prague 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://wallpapercave.com/wp/wp6895846.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Prague → India</p>
              <p>
Breakfast at Hotel. Check out from the Hotel.<br/> 
Private transfer from Prague Hotel to Prague Airport for your onward flight.<br/> 
Back to India 
                ________________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("7 Days Vienna + Budapest + Prague Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Central European journey</p>
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

export default ViennaBudapestPragueLanding;