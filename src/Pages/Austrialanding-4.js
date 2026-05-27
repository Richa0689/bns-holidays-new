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
    question: "What is the best time to visit Vienna, Munich, and Zurich?",
    answer:
      "This Central European and Alpine route is beautiful year-round. Spring (April–May) is ideal — mild temperatures, blooming gardens in Vienna's Prater, and clear views of the Swiss Alps. Summer (June–August) brings long sunny days, vibrant outdoor festivals, and lively beer gardens in Munich. Autumn (September–October) is perfect for crisp Alpine air and fewer tourist crowds. Winter (December) transforms the region — Vienna's Christkindlmarkt, Munich's famous Oktoberfest spirit carries into cosy cafés, and Zurich glows with festive lights along the Bahnhofstrasse.",
  },
  {
    question: "What is included in the 7-day tour package?",
    answer:
      "The package includes accommodation for 6 nights, daily breakfast, airport and station transfers, a 1-Day Hop-on Hop-off Bus Pass in Vienna (SIC basis), a Schönbrunn Palace entrance ticket (included), a 1-Day Hop-on Hop-off Bus Pass in Munich (SIC basis), a Swiss Travel Pass (3 Days Continuous – Second Class), and a visit to the Lindt Home of Chocolate in Zurich. Intercity train travel between Vienna, Munich, and Zurich is also included. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Austria, Germany, and Switzerland?",
    answer:
      "Indian passport holders require a Schengen visa to visit Austria and Germany. Switzerland, while not an EU member, is part of the Schengen Area — so a single Schengen visa covers your entire 7-day journey across all three countries. We recommend applying at least 4–6 weeks in advance. Our team can guide you through the complete documentation and visa process.",
  },
  {
    question: "Is this tour suitable for first-time Europe travellers?",
    answer:
      "Absolutely! This itinerary is thoughtfully crafted for first-time European travellers. It combines imperial grandeur in Vienna, Bavarian culture in Munich, and Swiss Alpine charm in Zurich — all with a relaxed pace and included guided experiences. The Hop-on Hop-off buses make city exploration easy, and the Swiss Travel Pass takes the stress out of Swiss transport.",
  },
  {
    question: "What currencies are used in Austria, Germany, and Switzerland?",
    answer:
      "Austria and Germany both use the Euro (€). Switzerland uses the Swiss Franc (CHF). It is advisable to carry some Swiss Francs for Switzerland, as the Franc is not interchangeable with the Euro. Credit and debit cards are widely accepted at hotels, restaurants, and major attractions throughout all three countries.",
  },
  {
    question: "Can I customise the Vienna–Munich–Zurich itinerary?",
    answer:
      "Yes! Every itinerary is fully customisable based on your interests, travel dates, and budget. Whether you'd like to add a day trip to Hallstatt or Salzburg from Vienna, a Neuschwanstein Castle excursion from Munich, a Jungfraujoch or Mount Titlis trip from Zurich, or extend your stay in any city, our team will craft the perfect personalised Alpine European journey for you.",
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
const EuropeSwissLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://res-2.cloudinary.com/gorealtravel/image/upload/f_auto,q_auto,q_50/v1733565690/production/marketing/itinerary/67541b35e8c263000bb727b9/marketing_picture/67541cfae8c263000bb72826/file/prague-river-and-castle-view-small.webp"
          alt="Vienna Munich Zurich Tour"
        />

        <div className="hero-content">
          <h1>Best of Vienna / Munich / Zurich</h1>
          <p>European Elegance. Alpine Beauty. Historic Cities.</p>

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
              src="https://www.newyorksocialdiary.com/wp-content/uploads/2022/06/A.-Church.jpg"
              alt=""
            />
            <p>Vienna City</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://thumbs.dreamstime.com/b/munich-germany-december-downtown-street-view-people-munich-street-view-munich-germany-106022231.jpg"
              alt=""
            />
            <p>Munich Streets</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://media.istockphoto.com/id/514786130/photo/historic-city-of-zurich-with-river-limmat-switzerland.jpg?s=612x612&w=0&k=20&c=jqDLYsz3__W2ail1iGH9kY7XN9m3BBBJt0jwBFCeJf0="
              alt=""
            />
            <p>Zurich Lake</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1521292270410-a8c4d716d518?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3dpc3MlMjBhbHBzfGVufDB8fDB8fHww"
              alt=""
            />
            <p>Swiss Alps</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Europe Tour?</h2>

        <div className="why-grid">
          <div>🏔️ Stunning Swiss Landscapes</div>
          <div>🏰 Historic European Cities</div>
          <div>🚆 Scenic Europe Travel</div>
          <div>📸 Perfect Photography Spots</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Best of Europe</h2>
        <p>Book your Vienna, Munich & Zurich journey today</p>
        <br />

        <Link to="/europe">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>07 Days Tour Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZw2zosq1hsL5SOSBu6izkZnOwPcIpAeEQlQ&s"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{color:"blue"}}>Vienna</p>
              <p>Welcome to Vienna – The Imperial Capital of Austria!<br/>
Arrive at Vienna Airport and enjoy a smooth private transfer to your hotel. After check-in, relax or
explore the elegant boulevards, gardens, traditional cafés, and classical architecture at your leisure.<br/>
Overnight Stay in Vienna</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://res.klook.com/images/w_1200,h_630,c_fill,q_65/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/wlujqv9ka43szx4g2tvk/ViennaBigBusHop-OnHop-OffSightseeingTour-KlookIndia.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color:"blue"}}>Vienna Hop-on Hop-off + Schönbrunn Palace</p>
              <p>Breakfast at Hotel.<br/>
Today explore Vienna using your 1-Day Hop-on Hop-off Bus Pass (SIC Basis). Visit major landmarks
including:<br/>
St. Stephen's Cathedral<br/>
Vienna State Opera<br/>
Belvedere Palace<br/>
Danube Tower<br/>
Parliament & City Hall<br/>
Later, visit the majestic Schönbrunn Palace (Ticket Included), the former summer residence of the
Habsburg Royal Family. Walk through its lavish rooms and beautiful palace gardens.<br/>
Evening is free for leisure, shopping, or enjoying classical music concerts (optional).<br/>
Overnight Stay in Vienna</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://res.klook.com/image/upload/fl_lossy.progressive,q_60/Mobile/City/xxm5eghz6vaayblixclj.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{color:"blue"}}>Vienna → Munich</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, proceed for a private transfer from Vienna Hotel to the Train Station for your
journey to Munich.<br/>
Arrive in Munich and meet your driver for a private transfer from Munich Station to your hotel.
Spend the remaining day exploring the vibrant Marienplatz Square or enjoying Bavarian food.<br/>
Overnight Stay in Munich</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/3d/9a/96.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color:"blue"}}>Munich Hop-on Hop-off City Tour</p>
              <p>Breakfast at Hotel.<br/>
Today enjoy your Munich Hop-on Hop-off Bus Tour (1 Day Pass – SIC Basis). Explore top attractions
such as:<br/>
Nymphenburg Palace<br/>
Olympic Park<br/>
BMW World<br/>
Karlplatz<br/>
Historic Old Town<br/>
Viktualienmarkt<br/>
Evening free to explore Munich's beer gardens or walk around the old town.<br/>
Overnight Stay in Munich</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://res.klook.com/image/upload/q_85/c_fill,w_750/v1764931667/uqovqncxx9gafuw4lu2x.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color:"blue"}}>Munich → Zurich</p>
              <p>Breakfast at Hotel.<br/>
Proceed for your private transfer from Munich Hotel to the Train Station. Board your train to
Switzerland.<br/>
Upon arrival at Zurich Station, use your Swiss Travel Pass (3 Days Continuous – Second Class) to travel
comfortably to your Zurich Hotel.<br/>
Rest of the day at leisure to explore the Old Town, Bahnhofstrasse, or lakeside promenades.<br/>
Overnight Stay in Zurich</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrmwG3EUdA9hLWXBYpWiZ9ipf80f5xKaIR-Q&s"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{color:"blue"}}>Lindt Chocolate Factory Visit</p>
              <p>Breakfast at Hotel.<br/>
Today, use your Swiss Travel Pass to visit the world-famous Lindt Home of Chocolate. Discover
interactive exhibits, learn about Swiss chocolate craftsmanship, and taste delicious varieties at the
chocolate tasting experience.<br/>
Return to Zurich and enjoy the evening freely.<br/>
Overnight Stay in Zurich</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/2f/79/4c/airport-shopping-flughafen.jpg?w=1200&h=-1&s=1"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{color:"blue"}}>Zurich</p>
              <p>Breakfast at Hotel.<br/>
Check out and proceed to Zurich Airport using your Swiss Travel Pass for your flight back to India.
Your delightful Vienna–Munich–Zurich journey concludes with sweet memories, scenic experiences,
and royal European charm!</p>
            </div>
          </div>

        </div>

        {/* Send Query Button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("7 Days Vienna + Munich + Zurich Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Alpine Europe journey</p>
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

export default EuropeSwissLanding;