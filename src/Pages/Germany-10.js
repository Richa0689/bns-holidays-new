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
    question: "What is the best time to visit Frankfurt, Heidelberg, and Munich?",
    answer:
      "Germany is a year-round destination. Summer (June–August) is perfect for exploring Frankfurt's riverfront, Heidelberg's castle gardens, and Munich's beer gardens in warm, sunny weather. Spring (April–May) brings blooming landscapes and fewer crowds. Autumn (September–October) is famous for Oktoberfest in Munich — one of the world's greatest festivals. Winter (December) transforms all three cities with spectacular Christmas markets, with Heidelberg's market being especially romantic and picturesque.",
  },
  {
    question: "What is included in the 6-night/7-day tour package?",
    answer:
      "The package includes accommodation for 6 nights, daily breakfast, airport transfers, guided sightseeing tours as per the itinerary, and intercity travel between Frankfurt, Heidelberg, and Munich. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Germany?",
    answer:
      "Indian passport holders require a Schengen visa to visit Germany. We recommend applying at least 4–6 weeks in advance. Our team can guide you through the complete documentation process to ensure a smooth application.",
  },
  {
    question: "Is this tour suitable for first-time Europe travellers?",
    answer:
      "Absolutely! This itinerary is perfectly crafted for first-timers exploring Germany. It covers iconic highlights — Frankfurt's Römerberg old town, Heidelberg's romantic castle ruins, and Munich's grand Marienplatz — with a comfortable pace that lets you absorb the best of Bavarian and Central German culture without feeling rushed.",
  },
  {
    question: "What currency is used in Germany?",
    answer:
      "Germany uses the Euro (€). It is advisable to carry some cash for smaller purchases, local markets, and tips, though credit and debit cards are widely accepted at hotels, restaurants, and major attractions across Frankfurt, Heidelberg, and Munich.",
  },
  {
    question: "Can I customise the Frankfurt, Heidelberg & Munich itinerary?",
    answer:
      "Yes! Every itinerary is fully customisable based on your interests, travel dates, and budget. Whether you'd like to add a Rhine Valley scenic train journey from Frankfurt, a day trip to Rothenburg ob der Tauber on the Romantic Road, or a Neuschwanstein Castle excursion from Munich, our team will craft the perfect personalised German journey for you.",
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
const FrankfurtHeidelbergMunichTour = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const itinerary = [
    {
      day: "Day 1",
      title: (
        <>
          Frankfurt<br/>
Arrival in Frankfurt: A Magical Start to Your Germany

        </>
      ),
      img: "https://images.unsplash.com/phow=800&q=80",
      desc: (
        <>
          Welcome to Frankfurt, the vibrant gateway to Germany! Upon arriving at Frankfurt Airport (Flughafen
Frankfurt am Main)—one of Europe’s busiest and most well-connected international hubs—your
unforgettable journey begins the moment you land. After touching down, you’ll be greeted with a
smooth and comfortable private transfer to your hotel, ensuring a relaxed and stress-free start to
your stay. Your first evening in Frankfurt sets the stage for the remarkable experiences ahead. From
the glittering Main River to the striking blend of historic charm and modern skyscrapers, the city’s
unique character will captivate you right away.<br/>
Overnight Stay in Frankfurt
        </>
      ),
    },
    {
      day: "Day 2",
      title: "Frankfurt - Frankfurt hop on hop off bus tour - 24 Hours",
      img: "https://images.unsplash.com/photo-169b4?w=800&q=80",
      desc: (
        <>
         After breakfast, embark on your Frankfurt Hop-On Hop-Off Bus Tour on a shared basis. If you’re
looking to explore Frankfurt’s top highlights at your own pace, this 24-hour flexible sightseeing
experience is the ideal choice. The tour takes you through the city’s most iconic landmarks, vibrant
districts, and cultural treasures—including Römerberg, St. Paul’s Church, the Goethe House, the
Main Tower, and the bustling financial district. With the freedom to hop on and off at your leisure,
you’ll enjoy an effortless way to discover Frankfurt’s unique blend of history, modernity, and
riverside charm.<br/>
Overnight Stay in Frankfurt
        </>
      ),
    },
    {
      day: "Day 3",
      title: "Frankfurt - Heidelberg",
      img: "https://images.unsplash.com/photo-14dd2b?w=800&q=80",
      desc: (
        <>
          After breakfast, catch a direct train from Frankfurt to Heidelberg. If you’re looking for a quick,
comfortable way to travel between two of Germany’s most charming and historic cities, this train
journey is ideal. On a regional or high-speed service (such as ICE or RE), the trip typically takes about
45 minutes to 1 hour. You’ll depart from Frankfurt’s main station (Frankfurt Hauptbahnhof) and arrive
conveniently at Heidelberg Hauptbahnhof, placing you just moments away from the city’s iconic Old
Town, majestic castle, and picturesque riverside views.<br/>
Overnight Stay in Heidelberg
        </>
      ),
    },
    {
      day: "Day 4",
      title: "Heidelberg – Heidelberg old town walking tour",
      img: "https://images.unsplash.com/phd630?w=800&q=80",
      desc: (
        <>
          After breakfast, embark on your Heidelberg Old Town Walking Tour on a shared basis. If you want to
explore Heidelberg’s most enchanting highlights at your own pace, this relaxed and immersive
experience is the perfect choice. The tour takes you through the city’s most iconic landmarks,
charming medieval streets, and cultural treasures—including the historic Marktplatz, the Church of
the Holy Spirit, Heidelberg University, the Old Bridge, and the picturesque lanes that wind beneath
the majestic Heidelberg Castle.<br/>
Overnight Stay in Heidelberg
        </>
      ),
    },
    {
      day: "Day 5",
      title: "Heidelberg – Munich",
      img: "https://images.unsplash.com/photo-154bc?w=800&q=80",
      desc: (
        <>
          After breakfast, catch a direct train from Heidelberg to Munich. If you’re looking for a quick and
comfortable way to travel between two of Germany’s most vibrant and culturally rich cities, this
train journey is ideal. On a high-speed train (such as ICE), the trip typically takes about 2 hours 55
minutes to 3 hours 15 minutes. You’ll depart from Heidelberg Hauptbahnhof and arrive directly at
München Hauptbahnhof, placing you in the heart of Munich’s lively squares, grand boulevards, and
historic landmarks.<br/>
Overnight Stay in Munich
        </>
      ),
    },
    {
      day: "Day 6",
      title: "Munich - Munich hop on hop off bus tour - 24 hours",
      img: "https://images.unsplash.com/photo-156097?w=800&q=80",
      desc: (
        <>
          After breakfast, embark on your Munich Hop-On Hop-Off Bus Tour on a shared basis. If you want to
explore Munich’s top highlights at your own pace, this 24-hour flexible sightseeing experience is the
perfect choice. The tour takes you through the city’s most iconic landmarks, charming
neighborhoods, and cultural hotspots—including Marienplatz, the magnificent Nymphenburg
Palace, the historic Königsplatz, the BMW Museum, and the vibrant Englischer Garten.<br/>
Overnight Stay in Munich
        </>
      ),
    },
    {
      day: "Day 7",
      title: "Munich",
      img: "https://images.unsplash.com/photo-156735b04d6?w=800&q=80",
      desc: (
        <>
          Breakfast at Hotel.<br/>
After breakfast and proceed to Munich airport with private transfer.
        </>
      ),
    },
  ];

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://cdn.kimkim.com/files/a/images/e28c94ae4c1bb7b133f6039ab141910c3581949d/original-d8146eba4d5c03ddb9a619c95108daf4.jpg"
          alt="Frankfurt Heidelberg Munich Tour"
        />
        <div className="hero-content">
          <h1>Frankfurt + Heidelberg + Munich</h1>
          <p>Financial Capital. Romantic Ruins. Bavarian Soul.</p>
          <Link to="/germany-landing11">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Major Destinations</h2>
        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/p17-7fd91fc51a46?w=600&q=80" alt="" />
            <p>Frankfurt, Germany</p>
          </div>
          <div className="highlight-card">
            <img src="https://images.unsplash.com/ph94-9661b134dd2b?w=600&q=80" alt="" />
            <p>Heidelberg, Germany</p>
          </div>
          <div className="highlight-card">
            <img src="https://images.unsplash.com/82-083862f3d630?w=600&q=80" alt="" />
            <p>Munich, Germany</p>
          </div>
          <div className="highlight-card">
            <img src="https://images.unsplash.com10fe8719e047?w=600&q=80" alt="" />
            <p>Neuschwanstein Castle, Bavaria</p>
          </div>
        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Germany Journey?</h2>
        <div className="why-grid">
          <div>🏙️ Frankfurt's Iconic Skyline</div>
          <div>🏰 Heidelberg's Romantic Castle</div>
          <div>🍺 Munich's Legendary Beer Culture</div>
          <div>✨ Fairytale Neuschwanstein Castle</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore the Very Best of Germany</h2>
        <p>Book your German adventure today — 06 Nights / 07 Days from ₹4,70,000</p>
        <br />
        <Link to="/germany-landing11">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>7 Days Tour Itinerary</h2>
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

        {/* Single Send Query button below all itinerary cards */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("7 Days Frankfurt, Heidelberg & Munich Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Germany journey</p>
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

export default FrankfurtHeidelbergMunichTour;