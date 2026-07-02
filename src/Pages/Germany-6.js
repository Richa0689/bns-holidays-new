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
    question: "What is the best time to visit Zurich, Innsbruck, and Salzburg?",
    answer:
      "This region is stunning year-round. Summer (June–August) offers warm weather, green Alpine meadows, and outdoor festivals. Winter (December–February) transforms the area into a fairytale with Christmas markets, skiing, and snow-dusted landscapes. Spring and autumn are ideal for fewer crowds and beautiful foliage.",
  },
  {
    question: "What is included in the 6-night/7-day tour package?",
    answer:
      "The package includes accommodation for 6 nights, daily breakfast, airport transfers, guided sightseeing tours as per the itinerary, and intercity travel between Zurich, Innsbruck, and Salzburg. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Switzerland and Austria?",
    answer:
      "Indian passport holders require a Schengen visa to visit Switzerland and Austria. Both countries are part of the Schengen Area, so one Schengen visa covers your entire trip. We recommend applying at least 4–6 weeks in advance. Our team can guide you with the documentation process.",
  },
  {
    question: "Is this tour suitable for first-time Europe travellers?",
    answer:
      "Absolutely! This itinerary is thoughtfully designed for first-timers. It covers iconic highlights—Zurich's old town, Innsbruck's Imperial Palace, and Salzburg's Mozart birthplace—with a comfortable pace that allows you to absorb each city without feeling rushed.",
  },
  {
    question: "What is the currency used in these countries?",
    answer:
      "Switzerland uses the Swiss Franc (CHF), while Austria uses the Euro (€). It is advisable to carry some local currency for small purchases, though credit and debit cards are widely accepted across hotels, restaurants, and attractions.",
  },
  {
    question: "Can I customise the Zurich–Innsbruck–Salzburg itinerary?",
    answer:
      "Yes! Every itinerary is fully customisable based on your interests, travel dates, and budget. Whether you'd like to add a Rhine Falls excursion, a Sound of Music tour in Salzburg, or a ski day in Innsbruck, our team will craft the perfect personalised journey for you.",
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
const ZurichInnsbruckSalzburgTour = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const itinerary = [
    {
      day: "Day 1",
      title: (
  <>
    Zurich <br />
    Welcome to Switzerland –
  </>
),
      img: "https://wallpaperaccess.com/full/7227721.jpg",
      desc: (
        <>
        Welcome to Switzerland! Upon arrival at Zurich Airport, enjoy a private transfer to your hotel. Check
in, relax, and spend the evening exploring the charming lanes of Zurich’s Old Town or walking along
Lake Zurich at your leisure.<br/>
Overnight Stay in Zurich
        </>
      ),
    },
    {
      day: "Day 2",
      title: "Zurich",
      img: "https://wallpaperbat.com/img/859157-hd-beautiful-zurichthe-largest-city-in-switzerland-the-capital-of-the-canton-of-zurich-and-the-worlds-largest-financial-centres-despite-having-a-relatively-low-population-19201080-r-wallpaper.jpg",
      desc: (
        <>
        Breakfast at Hotel.<br/>
After breakfast, use your Swiss Pass for travel to Engelberg, Scan you Voucher at the ticket counter
from where you will proceed to Mount Titlis (ticket included). Experience the stunning journey by
revolving Rotair cable car to the summit, where panoramic snow-clad Alpine scenery awaits. Enjoy
activities such as the Glacier Cave, Cliff Walk bridge and snowy viewpoints.<br/>
Return to Zurich using your Swiss Pass. Evening at leisure to explore Zurich’s cafes, riverside area or
Bahnhofstrasse.<br/>
Overnight Stay in Zurich
        </>
      ),
    },
    {
      day: "Day 3",
      title: "Zurich – Innsbruck",
      img: "https://cdn.wallpapersafari.com/5/48/yGfBhP.jpg",
      desc: (
        <>
        Breakfast at Hotel. Check out from the Hotel.<br/>
Use your Swiss Pass for your onward train journey from Zurich to the Austrian border region and
continue toward Innsbruck. Upon arrival at Innsbruck Station, enjoy a private transfer to your hotel.
Check in and spend your first evening strolling around the medieval Old Town and the Golden Roof
area.<br/>
Overnight Stay in Innsbruck
        </>
      ),
    },
    {
      day: "Day 4",
      title: "Innsbruck – Swarovski Crystal Worlds Entrance Ticket",
      img: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/pk13x0ykqxrp8ogbx4a0/Swarovski%20Crystal%20Worlds%20Admission%20in%20Innsbruck%20(Direct%20Entry).jpg",
      desc: (
        <>
        Breakfast at Hotel.<br/>
After breakfast, make your way to Swarovski Crystal Worlds (entrance ticket included). Explore the
Chambers of Wonder, unique art installations, crystal-themed exhibits, and the magical outdoor
garden. Enjoy the crystal cloud, mirror installations, and family-friendly attractions at this worldfamous venue.
Return to Innsbruck and enjoy the rest of the day at leisure — explore Nordkette views, MariaTheresien-Strasse, or local Tyrolean cafés.<br/>
Overnight Stay in Innsbruck

        </>
      ),
    },
    {
      day: "Day 5",
      title: "Innsbruck - Salzburg",
      img: "https://images.musement.com/cover/0002/99/salzburg-xxl-jpg_header-198542.jpeg?w=1200&h=630&q=95&fit=crop",
      desc: (
        <>
        Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Innsbruck Hotel to Station. Board your train from Innsbruck to Salzburg. Upon
arrival in Salzburg, enjoy a private transfer from Salzburg Station to your hotel. Check in and relax, or
explore the Old Town — Mirabell Gardens, pedestrian streets, and Mozart’s birthplace area.<br/>
Overnight Stay in Salzburg
        </>
      ),
    },
    {
      day: "Day 6",
      title: "Salzburg – Half Day Original Sound of Music Tour on Shared Basis",
      img: "https://images.musement.com/cover/0007/97/original-sound-of-music-tour4-jpeg_header-696542.jpeg?q=50&fit=crop&auto=format&w=1024&h=400",
      desc: (
        <>
        Breakfast at Hotel.<br/>
After breakfast, proceed for the Half Day Original Sound of Music Tour (shared basis, included). Visit
iconic filming locations such as the Mirabell Gardens, Leopoldskron Palace, the lakes district, and the
famous gazebo. Hear stories about the Von Trapp family, the film’s production, and the history of
Salzburg’s beautiful landscapes.<br/>
Afternoon and evening at leisure — explore the Fortress, riverfront, cafés, or the charming lanes
around Getreidegasse.<br/>
Overnight Stay in Berlin
        </>
      ),
    },
    {
      day: "Day 7",
      title: "Salzburg",
      img: "https://static.prod.r53.tablethotels.com/media/hotels/slideshow_images_staged/large/1359660.jpg",
      desc: (
        <>
        Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Salzburg Hotel to Salzburg Airport for your onward flight.
        </>
      ),
    },
  ];

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://blackplatinumgold.com/wp-content/uploads/2025/07/2-10.jpg"
          alt="Zurich Innsbruck Salzburg Tour"
        />
        <div className="hero-content">
          <h1>Zurich + Innsbruck + Salzburg</h1>
          <p>Alpine Splendour. Imperial Heritage. Central European Magic.</p>
          <Link to="/germany-landing7">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Major Destinations</h2>
        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=600&q=80" alt="" />
            <p>Zurich, Switzerland</p>
          </div>
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=600&q=80" alt="" />
            <p>Innsbruck, Austria</p>
          </div>
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=600&q=80" alt="" />
            <p>Salzburg, Austria</p>
          </div>
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=600&q=80" alt="" />
            <p>The Austrian Alps</p>
          </div>
        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Alpine Journey?</h2>
        <div className="why-grid">
          <div>🏔️ Stunning Alpine Scenery</div>
          <div>🎶 Mozart's Salzburg Heritage</div>
          <div>🏰 Imperial Palaces & Castles</div>
          <div>📸 Iconic European Photography</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore Switzerland & Austria's Best</h2>
        <p>Book your Alpine adventure today — 06 Nights / 07 Days from ₹4,70,000</p>
        <br />
        <Link to="/germany-landing7">
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
            onClick={() => setActiveModal("7 Days Zurich + Innsbruck + Salzburg Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Alpine journey</p>
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

export default ZurichInnsbruckSalzburgTour;