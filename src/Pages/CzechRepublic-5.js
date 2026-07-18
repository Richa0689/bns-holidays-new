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
    question: "What is the best time to visit Czech Republic, Austria and Hungary for this tour?",
    answer:
      "April to October is ideal, with May–June and September offering pleasant weather, blooming gardens and comfortable sightseeing conditions. Summer (July–August) is peak season with long daylight hours, perfect for river cruises on the Danube and Vltava, while spring and early autumn bring fewer crowds and mild temperatures.",
  },
  {
    question: "What is included in the 9-day Medieval Streets to Imperial Palaces package?",
    answer:
      "The package includes 8 nights accommodation (3 nights Prague, 3 nights Vienna, 2 nights Budapest), daily breakfast, comfortable coach or rail transfers between cities, guided city tours in Prague, Vienna and Budapest, and sightseeing at iconic landmarks along the way. International flights, visa fees and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Czech Republic, Austria and Hungary?",
    answer:
      "Indian passport holders require a Schengen visa, which covers travel across the Czech Republic, Austria and Hungary on this itinerary. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include Prague Castle and Charles Bridge, the Old Town Square's Astronomical Clock, Schönbrunn Palace and St. Stephen's Cathedral in Vienna, and the Buda Castle, Fisherman's Bastion and an evening Danube River cruise in Budapest.",
  },
  {
    question: "What currency is used across Czech Republic, Austria and Hungary?",
    answer:
      "The Czech Republic uses the Czech Koruna (CZK), Austria uses the Euro (EUR), and Hungary uses the Hungarian Forint (HUF). Cards are widely accepted in all three countries, but it's useful to carry some local cash for small purchases and transit. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add a Cesky Krumlov day trip, extra nights in Vienna, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const MedievalStreetsLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://wallpapercrafter.com/desktop/134199-fantasy-art-digital-town-people-fantasy-architecture-architecture-city-medieval-street-castle.jpg"
          alt="Czech Republic, Austria & Hungary Tour"
        />

        <div className="hero-content">
          <h1>From Medieval Streets to Imperial Palaces</h1>

          <p>
            Prague • Vienna • Budapest
          </p>

          <Link to="/Medieval-Streets">
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
              src="https://th.bing.com/th/id/OIP.AKa0c3SseVEgG0-DQp1LSQHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Prague Castle Charles Bridge"
            />
            <p>Prague Castle & Charles Bridge</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://voy.gs/wp-content/uploads/2015/07/Sch%C3%B6nbrunn_Palace_01.jpg"
              alt="Schönbrunn Palace Vienna"
            />
            <p>Schönbrunn Palace, Vienna</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.-CkQyjGDNozpdZgBspaPxAHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Budapest Parliament Danube"
            />
            <p>Budapest Parliament & Danube</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.F4ACTa2K3lNknjMT7O26wAHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Fisherman's Bastion Budapest"
            />
            <p>Fisherman's Bastion, Budapest</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Fairy-tale Prague Old Town</div>
          <div>👑 Grand Imperial Vienna</div>
          <div>🌉 Danube Views in Budapest</div>
          <div>📸 Charming Medieval Streets</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Three Imperial Capitals in 9 Days</h2>

        <p>
          From Prague's cobbled lanes to Vienna's grand palaces and Budapest's Danube banks — a journey through Central Europe's finest
        </p>

        <br />

        <Link to="/Medieval-Streets">
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
              src="https://sortema.no/media/idpcfdff/taj_mahal.jpeg?width=1200&height=630&quality=65"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>India → Prague</p>
              <p>
             Welcome to Prague – the enchanting City of a Hundred Spires, known for its fairy-tale skyline, 
cobblestone streets, and rich medieval history. 
Upon arrival at Prague Airport, enjoy a private transfer to your city centre hotel. Take the rest of the 
day to relax, unwind, and begin soaking in the magical atmosphere of this charming European 
capital. Whether you choose to stroll through Old Town or enjoy a classic Czech café, Prague offers a 
captivating welcome. 
Overnight Stay in Prague 
               </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://d2i7eq829tbbje.cloudfront.net/webp/medium/cruise4_P_4315_79a7f541-c90d-4516-b763-0318aa6d186c"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Day 2 Prague – City Tour, Castle Visit & Vltava Cruise</p>
              <p>
               Breakfast at the hotel 
Start your day exploring Prague with a Hop-On Hop-Off tour, offering a comfortable way to see 
major highlights such as Prague Castle, Old Town Square, and Mala Strana. 
Later, visit Prague Castle, a historic complex dating back to the 9th century and home to centuries of 
royal and political history. 
In the evening, enjoy a Vltava River cruise, gliding past illuminated landmarks including Charles 
Bridge and the Rudolfinum. 
Overnight Stay in Prague 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/58/aa.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Prague – Day Trip to Český Krumlov</p>
              <p>
Breakfast at the hotel 
Embark on a full-day trip to Český Krumlov, a UNESCO-listed medieval town known for its 
picturesque streets and beautifully preserved castle. Explore its charming lanes and admire one of 
the most striking castle complexes in Central Europe. 
Overnight stay at Prague
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://prague.org/wp-content/uploads/2023/12/alberto-rodriguez-wx-B8-7kffE-unsplash-1-1160x680.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Prague → Vienna</p>
              <p>
        Breakfast at the hotel 
Travel by train from Prague to Vienna, the elegant capital of Austria. After checking in, spend the 
remainder of the day at leisure—perhaps wandering through the historic city centre or relaxing in a 
classic Viennese café. 
Apextion DMC 
Email: sales@apextiondmc.com, groups@apextiondmc.com || Contact No.: +91 11 4921 5555 
www.apextiondmc.com  
LONDON | PARIS | NEW DELHI | MUMBAI 
Overnight in Vienna 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.tvT5QzpTH49YcFvvvHkcjwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Vienna – Hop-On Hop-Off, Schönbrunn Palace & City Cruise</p>
              <p>
Breakfast at the hotel 
Discover Vienna with a Hop-On Hop-Off tour, passing key attractions such as the State Opera, 
Belvedere Palace, and the grand Ringstrasse. 
Continue with a visit to Schönbrunn Palace, the former summer residence of the Habsburgs, 
renowned for its opulent rooms and expansive gardens. 
In the evening, enjoy a relaxing Danube Canal cruise, offering scenic views of modern and historic 
Vienna. 
Overnight stay in Vienna 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://somewheregood.com/wp-content/uploads/2026/04/private-one-day-trip-to-bratislava-from-vienna.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Vienna – Day Trip to Bratislava</p>
              <p>
Breakfast at the hotel 
Take a day trip to Bratislava, where you’ll explore the charming Old Town and enjoy scenic views of 
western Slovakia. The tour offers a pleasant mix of history, local culture, and countryside 
landscapes, with free time to wander before returning to Vienna. 
Overnight Stay in Vienna 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://somewheregood.com/wp-content/uploads/2026/04/vienna-budapest-day-trip.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Vienna → Budapest</p>
              <p>
Breakfast at the hotel 
Board your train to Budapest, a city famous for its riverside beauty and architectural elegance. After 
your transfer and check-in, enjoy the evening at leisure exploring the vibrant streets or relaxing by 
the Danube. 
Overnight Stay in Budapest
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://assets-global.website-files.com/60e43c7d6d05b671dff0dc1a/6482365138e2c970cdc10bc0_1-Best-River-Cruises-Budapest.webp"
              alt=""
            />
            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{ color: "blue" }}>Budapest City Tour + Danube River Cruise</p>
              <p>
Breakfast at the hotel 
Explore Budapest with a Day 1 of 2-Day Hop-On Hop-Off, covering its major attractions on both the 
Buda and Pest sides. 
Visit St. Stephen’s Basilica, admired for its beautiful interior and cultural significance. 
In the evening, enjoy a Danube River cruise, offering stunning nighttime views of the Parliament, 
Buda Castle, and the city’s illuminated bridges. 
Overnight Stay in Budapest. 
Apextion DMC 
Email: sales@apextiondmc.com, groups@apextiondmc.com || Contact No.: +91 11 4921 5555 
www.apextiondmc.com  
LONDON | PARIS | NEW DELHI | MUMBAI 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images7.alphacoders.com/899/899292.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 9</h3>
              <p style={{ color: "blue" }}>Budapest → India</p>
              <p>
              Breakfast at the hotel 
Enjoy Day 2 of your Hop-On Hop-Off tour, giving you more time to explore the city at your own 
pace. Later, unwind at the world-famous Széchenyi Thermal Spa, known for its soothing outdoor 
pools, healing thermal waters, and beautiful Neo-Baroque architecture — a classic Budapest 
experience. 
Overnight Stay in Budapest. 
              </p>
            </div>
          </div>
          <div className="day-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.TgcG3Eb_kDw06H81_ytmDwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 10</h3>
              <p style={{ color: "blue" }}>Budapest</p>
              <p>
              Breakfast at hotel 
Check out and transfer to Budapest Airport for your onward flight, carrying wonderful memories of 
Prague’s charm, Vienna’s imperial beauty, and Budapest’s riverside magic.
              </p>
            </div>
          </div>


        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("9 Days From Medieval Streets to Imperial Palaces Tour")}
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

export default MedievalStreetsLanding;