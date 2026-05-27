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
    question: "What is the best time to visit Ljubljana, Salzburg, and Munich?",
    answer:
      "This Central European route is beautiful year-round. Summer (June–August) is ideal for exploring Ljubljana's riverfront cafés, Lake Bled's crystal-clear waters, and Munich's famous beer gardens in warm, sunny weather. Spring (April–May) brings lush Alpine scenery and fewer crowds. Autumn (September–October) is celebrated for Oktoberfest in Munich — one of the world's greatest festivals. Winter (December) brings magical Christmas markets to Salzburg and Munich, and the snow-dusted Alpine villages are simply stunning.",
  },
  {
    question: "What is included in the 7-day tour package?",
    answer:
      "The package includes accommodation for 6 nights, daily breakfast, airport and station transfers, a Lake Bled Day Tour (SIC), a Hallstatt Half-Day Tour (SIC), a Munich Hop-On Hop-Off Bus Tour (24 hours), and intercity train travel between Ljubljana, Salzburg, and Munich. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Slovenia, Austria, and Germany?",
    answer:
      "Indian passport holders require a Schengen visa to visit Slovenia, Austria, and Germany. All three countries are part of the Schengen Area, so one Schengen visa covers your entire trip. We recommend applying at least 4–6 weeks in advance. Our team can guide you through the complete documentation process.",
  },
  {
    question: "Is this tour suitable for first-time Europe travellers?",
    answer:
      "Absolutely! This itinerary is thoughtfully designed for first-timers. It covers iconic highlights — Ljubljana's charming old town, the fairytale village of Hallstatt, Salzburg's Mozart heritage, and Munich's grand Marienplatz — with a comfortable pace that allows you to absorb three distinct European cultures without feeling rushed.",
  },
  {
    question: "What currencies are used across Slovenia, Austria, and Germany?",
    answer:
      "All three countries use the Euro (€), which makes this trip very convenient for managing your budget. It is advisable to carry some cash for smaller purchases and local markets, though credit and debit cards are widely accepted across hotels, restaurants, and major attractions throughout the route.",
  },
  {
    question: "Can I customise the Ljubljana–Salzburg–Munich itinerary?",
    answer:
      "Yes! Every itinerary is fully customisable based on your interests, travel dates, and budget. Whether you'd like to add a Bled Island rowing boat experience, an Original Sound of Music Tour in Salzburg, a Neuschwanstein Castle day excursion from Munich, or extend your stay in any city, our team will craft the perfect personalised journey for you.",
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
const AustriaLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/26/c1/cc/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_4ffab338edf9ee7e4c5d"
          alt="Austria"
        />
        <div className="hero-content">
          <h1>Scenic Europe Escape</h1>
          <p>Ljubljana. Salzburg. Munich.</p>
          <Link to="/europe-landing">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Attractions</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Hallstatt_-_Zentrum_.JPG" alt="" />
            <p>Hallstatt Village</p>
          </div>

          <div className="highlight-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/10/29/88/91.jpg" alt="" />
            <p>Salzburg Old Town</p>
          </div>

          <div className="highlight-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/Ljubljanski_grad_in_Grajski_gri%C4%8D.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" alt="" />
            <p>Ljubljana Castle</p>
          </div>

          <div className="highlight-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" alt="" />
            <p>Munich Marienplatz</p>
          </div>
        </div>
      </div>

      {/* Why Choose */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Medieval Castles</div>
          <div>🏔️ Alpine Scenery</div>
          <div>🎶 Mozart's Birthplace</div>
          <div>🍺 Bavarian Culture</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Europe Trip</h2>
        <p>Book now and explore Ljubljana, Salzburg & Munich in 7 magical days</p><br />
        <Link to="/europe-landing">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>7 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://footloosedev.com/wp-content/uploads/slovenia-ljubljana-1024x491.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{color:"blue"}}>Arrival in Ljubljana</p>
              <p>Welcome to Ljubljana — a charming and green European capital!<br/>
Upon arrival, meet your private driver at the airport<br/>
Enjoy a comfortable transfer to your hotel: Ibis Styles Ljubljana Centre (or similar)<br/>
Check in and relax<br/>
Overnight Stay in Ljubljana
</p>
            </div>
          </div>

          <div className="day-card">
            <img src=" https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/97/ac/e3/caption.jpg?w=300&h=300&s=1" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color:"blue"}}>Lake Bled Day Tour</p>
              <p>Breakfast at the hotel<br/>
 Lake Bled Day Tour (SIC)<br/>
Visit the stunning alpine resort of Lake Bled<br/>
Highlights include:<br/>
The iconic Bled Island with its picturesque church<br/>
Bled Castle perched above the lake<br/>
Scenic views of the Julian Alps<br/>
Overnight Stay in Ljubljana</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://foto.hrsstatic.com/fotos/0/2/800/458/80/000000/http%3A%2F%2Ffoto-origin.hrsstatic.com%2Ffoto%2FMTS%2F388965%2F388965_su_40968840_7.jpg/uESUDlaIEtH0jknMjmq7bw%3D%3D/2000%2C1300/6/Leonardo_Hotel_Salzburg_City_Center-Salzburg-Suite-388965.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{color:"blue"}}>Ljubljana → Salzburg</p>
              <p>Breakfast at the hotel<br/>
Private transfer to the station<br/>
Board your train to Salzburg<br/>
Private transfer to your hotel: Leonardo Hotel Salzburg City Center (or similar)<br/>
Rest of the day at leisure<br/>
Overnight Stay in Salzburg</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/aa/fc/03.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color:"blue"}}>Hallstatt Half-Day Tour</p>
              <p>Breakfast at the hotel<br/>
 Hallstatt Half-Day Tour (SIC)<br/>
Visit the postcard-perfect village of Hallstatt<br/>
Highlights:<br/>
Stunning lake and mountain scenery<br/>
Traditional alpine houses <br/>
Free time to explore this fairytale destination<br/>
Overnight Stay in Salzburg</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.istockphoto.com/id/509641529/photo/historic-town-of-salzburg-with-salzach-river-in-summer-austria.jpg?s=612x612&w=0&k=20&c=VPCNTdghkFuqzE4HKlJHfALOF2NqzYk6xUYIu3pXF-g= " alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color:"blue"}}>Salzburg → Munich</p>
              <p>Breakfast at the hotel<br/>
Private transfer to the station<br/>
Train journey to Munich<br/>
Private transfer to your hotel: Cocoon Stachus (or similar)<br/>
Overnight Stay in Munich
</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/75/69/96.jpg" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{color:"blue"}}>Munich City Tour</p>
              <p>Breakfast at the hotel<br/>
 Munich Hop-On Hop-Off Bus Tour (24 Hours)<br/>
Explore top attractions such as:<br/>
Marienplatz<br/>
Nymphenburg Palace<br/>
English Garden<br/>
Overnight Stay in Munich</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://thumbs.dreamstime.com/b/munich-germany-september-flight-plan-departure-section-airport-t-258281542.jpg" alt="" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{color:"blue"}}>Munich → Departure</p>
              <p>Breakfast at the hotel<br/>
Private transfer to the airport<br/>
Depart with unforgettable European memories </p>
            </div>
          </div>

        </div>

        {/* Send Query Button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("7 Days Scenic Europe Escape – Ljubljana, Salzburg & Munich")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Scenic Europe Escape</p>
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

export default AustriaLanding;