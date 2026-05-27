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
    question: "What is the best time to visit Munich, Innsbruck, Salzburg, and Vienna?",
    answer:
      "This Germany–Austria route is stunning in every season. Spring (April–May) brings blooming gardens in Vienna and Salzburg, mild temperatures, and fewer crowds. Summer (June–August) is perfect for Alpine scenery in Innsbruck and long sunny days across all four cities. Autumn (September–October) offers golden Alpine landscapes and the tail end of Oktoberfest in Munich. Winter (December) is magical — Vienna's Christmas markets, Salzburg's snow-covered Old Town, and Innsbruck's festive alpine glow make it an unforgettable festive escape.",
  },
  {
    question: "What is included in the 9-day tour package?",
    answer:
      "The package includes accommodation for 8 nights, daily breakfast, airport and station transfers, a Neuschwanstein & Linderhof Castle Full-Day Trip (included), a Swarovski Crystal Worlds Entrance Ticket (included), a Half Day Original Sound of Music Tour in Salzburg (shared basis, included), and a Schönbrunn Palace & Gardens Skip-the-Line Tour in Vienna (shared basis, included). Intercity train travel between Munich, Innsbruck, Salzburg, and Vienna is also included. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Germany and Austria?",
    answer:
      "Indian passport holders require a Schengen visa to visit both Germany and Austria. Both countries are part of the Schengen Area, so a single Schengen visa covers your entire 9-day journey. We recommend applying at least 4–6 weeks in advance. Our team can guide you through the complete documentation and visa application process.",
  },
  {
    question: "Is this tour suitable for first-time Europe travellers?",
    answer:
      "Absolutely! This itinerary is thoughtfully designed for first-time European travellers. It takes you through four iconic destinations — Bavarian culture in Munich, Alpine wonder in Innsbruck, the Sound of Music charm of Salzburg, and imperial grandeur in Vienna — all with a comfortable pace, included guided experiences, and private transfers to make travel stress-free.",
  },
  {
    question: "What currency is used in Germany and Austria?",
    answer:
      "Both Germany and Austria use the Euro (€). Credit and debit cards are widely accepted at hotels, restaurants, and major attractions across all four cities. It is advisable to carry some cash for smaller purchases, local markets, and tips, especially in smaller towns along the route.",
  },
  {
    question: "Can I customise the Munich–Innsbruck–Salzburg–Vienna itinerary?",
    answer:
      "Yes! Every itinerary is fully customisable based on your interests, travel dates, and budget. Whether you'd like to add a Dachau Memorial visit near Munich, a Nordkette cable car ride in Innsbruck, a Hallstatt day trip from Salzburg, or a Vienna State Opera experience, our team will craft the perfect personalised Germany–Austria journey for you.",
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
const GermanyAustriaLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.railbookers.co.uk/sites/railbookers/files/styles/hero/public/images/salzburg-1.jpg?h=3a3df0c5&itok=h-y7GlYK"
          alt="Munich Innsbruck Salzburg Vienna Tour"
        />

        <div className="hero-content">
          <h1>Munich + Innsbruck + Salzburg + Vienna</h1>
          <p>Alpine Beauty. Historic Cities. European Elegance.</p>

          <Link to="/europe">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img
              src="https://theluxuryvacationguide.com/wp-content/uploads/2024/02/munich-germany-3.jpg"
              alt=""
            />
            <p>Munich City</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://the-shooting-star.com/wp-content/uploads/2011/05/424142774_c28f79a6a4.jpg"
              alt=""
            />
            <p>Innsbruck Alps</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://thumbs.dreamstime.com/b/pedestrian-getreidegasse-street-salzburg-salzburg-austria-may-getreidegasse-main-pedestrian-shopping-street-old-town-182174608.jpg"
              alt=""
            />
            <p>Salzburg Streets</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://www.celebritycruises.com/blog/content/uploads/2025/09/vienna-old-town-tips-st.-stephen_s-cathedral-1024x792.jpg"
              alt=""
            />
            <p>Vienna City</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Europe Tour?</h2>

        <div className="why-grid">
          <div>🏔️ Scenic Alpine Landscapes</div>
          <div>🏰 Historic European Architecture</div>
          <div>🚆 Comfortable Intercity Travel</div>
          <div>📸 Amazing Photography Spots</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Discover Germany & Austria</h2>
        <p>Book your 09 Days Europe Tour today</p>
        <br />

        <Link to="/europe">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>09 Days Tour Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://media.timeout.com/images/106276333/image.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{color:"blue"}}>Munich</p>
              <p>Welcome to Germany –<br/>
Welcome to Munich! Upon arrival at Munich Airport, enjoy a private transfer to your hotel. Check in,
relax, and spend the evening exploring the vibrant streets around Marienplatz, Viktualienmarkt, or
Munich's traditional Bavarian cafés.<br/>
Overnight Stay in Munich</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/d4/7c/d4/caption.jpg?w=300&h=300&s=1"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color:"blue"}}>Munich</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, proceed for your Neuschwanstein & Linderhof Castle Full-Day Trip (included). Visit
two of King Ludwig II's most iconic castles — the fairy-tale Neuschwanstein and the beautiful
Linderhof Palace. Enjoy guided insights into Bavarian royal history, stunning Alpine scenery, and
picturesque villages along the way.<br/>
Return to Munich and spend the evening at leisure — explore Munich Old Town, the English Garden,
or enjoy Bavarian cuisine.<br/>
Overnight Stay in Munich</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFsZ1KSin8MCSdwgBUHoIhu-DzlVm9jS4dGw&s"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{color:"blue"}}>Munich – Innsbruck</p>
              <p>Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Munich Hotel to Train Station. Board your train from Munich to Innsbruck.
Upon arrival at Innsbruck Station, enjoy a private transfer to your hotel. Check in and explore the
medieval Old Town, the Golden Roof, or the scenic river promenade.<br/>
Overnight Stay in Innsbruck</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/a7/7a/8e/caption.jpg?w=1200&h=-1&s=1"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color:"blue"}}>Innsbruck – Swarovski Crystal Worlds Entrance Ticket</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, visit Swarovski Crystal Worlds (entrance ticket included). Discover the Chambers of
Wonder, immersive crystal art installations, and the magical outdoor garden designed to delight
visitors of all ages. Experience the Crystal Cloud, Mirror Pool, and unique exhibits that make this one
of Austria's most iconic attractions.<br/>
Return to Innsbruck and enjoy the rest of the day at leisure — explore Nordkette viewpoints, local
cafés, or Maria-Theresien-Strasse.<br/>
Overnight Stay in Innsbruck</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Salzburg_%2848489551981%29.jpg/330px-Salzburg_%2848489551981%29.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color:"blue"}}>Innsbruck - Salzburg</p>
              <p>Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Innsbruck Hotel to Station. Board your train from Innsbruck to Salzburg. Upon
arrival at Salzburg Station, enjoy a private transfer to your hotel. Check in and relax, or spend the
evening exploring Salzburg's Old Town, Mirabell Gardens, or the vibrant riverfront.<br/>
Overnight Stay in Salzburg</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/97/9d/0c/caption.jpg?w=1200&h=-1&s=1"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{color:"blue"}}>Salzburg – Half Day Original Sound of Music Tour on Shared Basis</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, proceed for your Half Day Original Sound of Music Tour (shared basis, included).
Visit famous filming locations from the movie, including Mirabell Gardens, Leopoldskron Palace,
Lake District views, and the iconic gazebo. Learn behind-the-scenes stories of the Von Trapp family
and the musical legacy of Salzburg.<br/>
Afternoon and evening at leisure — explore the Hohensalzburg Fortress, Getreidegasse lanes, or
enjoy riverside cafés.<br/>
Overnight Stay in Salzburg</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://theluxuryvacationguide.com/wp-content/uploads/2022/10/vienna-austria-34.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{color:"blue"}}>Salzburg - Vienna</p>
              <p>Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Salzburg Hotel to Station. Board your train from Salzburg to Vienna. Upon
arrival at Vienna Station, enjoy a private transfer to your hotel. Check in and explore Vienna's
historic streets, elegant squares, and famous coffee houses.<br/>
Overnight Stay in Vienna</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/14/20/dd/ae.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{color:"blue"}}>Vienna</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, proceed for the Schönbrunn Palace & Gardens Skip-the-Line Tour (shared basis,
included). Explore the magnificent imperial palace, walk through opulent rooms once used by the
Habsburgs, and enjoy the beautifully landscaped Baroque gardens.<br/>
Spend the rest of your day at leisure — visit the Hofburg Palace area, Belvedere Palace, or explore
Vienna's shopping districts.<br/>
Overnight Stay in Vienna</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Austria_schwechat_vienna_airport_terminal1.jpg/3840px-Austria_schwechat_vienna_airport_terminal1.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
              alt=""
            />
            <div className="day-content">
              <h3>Day 9</h3>
              <p style={{color:"blue"}}>Vienna</p>
              <p>Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Vienna Hotel to Airport for your onward flight.</p>
            </div>
          </div>

        </div>

        {/* Send Query Button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("9 Days Munich + Innsbruck + Salzburg + Vienna Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Germany & Austria journey</p>
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

export default GermanyAustriaLanding;