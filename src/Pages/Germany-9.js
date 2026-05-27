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
    question: "What is the best time to visit Denmark, Sweden, and Germany?",
    answer:
      "This Scandinavian and Central European route is stunning across seasons. Summer (June–August) is the most popular time — long daylight hours, warm weather, and vibrant outdoor festivals make Copenhagen, Stockholm, and Hamburg come alive. Spring (April–May) offers blooming landscapes and fewer crowds. Autumn (September–October) brings warm colours and the famous Hamburg Fish Market energy. December is magical with world-class Christmas markets in Hamburg and Lübeck.",
  },
  {
    question: "What is included in the 7-night/8-day tour package?",
    answer:
      "The package includes accommodation for 7 nights, daily breakfast, airport transfers, guided sightseeing tours as per the itinerary, and intercity travel between Copenhagen, Malmö, Stockholm, and Hamburg. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Denmark, Sweden, and Germany?",
    answer:
      "Indian passport holders require a Schengen visa to visit Denmark, Sweden, and Germany. All three countries are part of the Schengen Area, so one Schengen visa covers your entire trip. We recommend applying at least 4–6 weeks in advance. Our team can guide you with the documentation process.",
  },
  {
    question: "Is this tour suitable for first-time Europe travellers?",
    answer:
      "Absolutely! This itinerary is thoughtfully designed for first-timers. It covers iconic highlights — Copenhagen's Nyhavn, Stockholm's Gamla Stan old town, and Hamburg's spectacular Speicherstadt warehouse district — with a comfortable pace that allows you to experience three distinct Scandinavian and Northern European cultures without feeling rushed.",
  },
  {
    question: "What currencies are used across Denmark, Sweden, and Germany?",
    answer:
      "Each country uses a different currency. Denmark uses the Danish Krone (DKK), Sweden uses the Swedish Krona (SEK), and Germany uses the Euro (€). It is advisable to carry some local currency for small purchases in each country, though credit and debit cards are widely accepted at hotels, restaurants, and attractions throughout the region.",
  },
  {
    question: "Can I customise the Denmark, Sweden & Germany itinerary?",
    answer:
      "Yes! Every itinerary is fully customisable based on your interests, travel dates, and budget. Whether you'd like to add a visit to Kronborg Castle (Hamlet's castle) near Copenhagen, a Stockholm Archipelago boat trip, or a day excursion to Lübeck's UNESCO old town from Hamburg, our team will craft the perfect personalised journey for you.",
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
const DenmarkSwedenGermanyTour = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const itinerary = [
    {
      day: "Day 1",
      title: (
        <>
           Copenhagen<br/>
Welcome to Copenhagen
        </>
      ),
      img: "https://images.unsplash.com/photo-10&q=80",
      desc: (
        <>
         Welcome to Copenhagen! Upon arrival, you will enjoy a private transfer from the airport to your hotel.
Settle in, relax and enjoy your first evening in this vibrant Scandinavian capital — maybe explore local
streets.<br/>
Overnight Stay in Copenhagen
        </>
      ),
    },
    {
      day: "Day 2",
      title: "Copenhagen – Group Walking Tour on Shared Basis & Copenhagen Canal Cruise Ticket",
      img: "https://images.unsplash.com/photo-152q=80",
      desc: (
        <>
          Breakfast at Hotel.<br/>
After breakfast proceed to Copenhagen Group Walking tour on Shared basis. explore central
Copenhagen highlights (historic centre, main streets, landmarks, city vibe). Our Politically Incorrect
guides blend humour with history, creating a tour for those who are tired of traditional sightseeing
and excited by the idea of being pleasantly offended. Our guides will try to make you laugh (even
when you -probably- shouldn't) as we uncover the stories hidden in Copenhagen’s historic streets.<br/>
After lunch (on your own), take the Copenhagen Canal Cruise (ticket included) — a nice way to see
the city from the water, see historic buildings, harbour area, waterways. Experience Copenhagen
from the water on a canal cruise and see how the past and present merge as you travel along idyllic
canals, passing many of the city’s most famous landmarks, old and new.<br/>
Overnight Stay in Copenhagen
        </>
      ),
    },
    {
      day: "Day 3",
      title: "Copenhagen – The Forest Tower & Forgotten Giants Trolls Trip from Copenhagen on SIC basis(Forest Tower Entrance Not Included)",
      img: "https://images.unsplash.com/photo-1509356843151-3e=80",
      desc: (
        <>
         Breakfast at Hotel.
After breakfast proceed to Forest Tower & Forgotten Giants Trolls Trip from Copenhagen on SIC
basis. Guest need to each the meeting Point on their own. Explore Denmark’s Forest Tower without
the hassle of arranging your own round-trip transportation. Ideal for architecture and nature lovers
alike, climb to the observation deck 140 meters above sea level and walk along wooden walkways
while enjoying the surrounding scenery.<br/>Overnight Stay in Copenhagen.
        </>
      ),
    },
    {
      day: "Day 4",
      title: "Copenhagen – Stockholm",
      img: "https://images.unsplash.com/photo-15276687529&q=80",
      desc: (
        <>
         After breakfast you check out and take the private transfer to Copenhagen Airport for your flight to
Stockholm. On arrival in Stockholm, you take private transfer from airport to hotel. Once checked in,
you have leisure time to recover from travel or take an evening walk around the city to soak in
Stockholm’s atmosphere<br/>
Overnight Stay in Stockholm.
        </>
      ),
    },
    {
      day: "Day 5",
      title: "Stockholm – Stockholm Old Town Walking Tour on Shared Basis",
      img: "https://images.unsplash.com/photo-146726920459400&q=80",
      desc: (
        <>
          Breakfast at Hotel.<br/>
Following breakfast at hotel, you join a shared-basis walking tour through Stockholm’s Old Town
(historic centre). You explore narrow medieval streets, visit vintage buildings, soak in the old-town
ambience that reflects centuries of history, and get a feel for Stockholm’s unique character. After
the walking tour, the rest of the day and evening is at your leisure — you may wander seaside
streets, enjoy local cafés or restaurants, or plan your own sightseeing.<br/>
Overnight Stay in Stockholm
        </>
      ),
    },
    {
      day: "Day 6",
      title: "Stockholm – Hamburg",
      img: "https://images.unsplash.com/photo-15819529761400&q=80",
      desc: (
        <>
         After breakfast you check out and take private transfer from hotel to airport (or transport hub), then
travel to Hamburg. On arrival, you take the included private transfer from Hamburg airport to your
hotel. Once checked in you have the evening at leisure — perhaps a gentle walk around Hamburg’s
central or old-town area, to get a first impression of the city.<br/>
Overnight Stay in Hamburg.

        </>
      ),
    },
    {
      day: "Day 7",
      title: "Hamburg - Hamburg Old Town guided Walking tour on Shared Basis",
      img: "https://images.unsplash.com/photo-15999463473=800&q=80",
      desc: (
        <>
          Breakfast at Hotel.<br/>
Breakfast at hotel starts the day, followed by a shared-basis guided walking tour of Hamburg’s Old
Town. You explore historic architecture, city-centre landmarks and learn about the city’s past and
present. After the tour, you have free time — you may choose to walk around, visit local sights, sample
local food or shop.<br/>
Overnight Stay in Hamburg.
        </>
      ),
    },
    {
      day: "Day 8",
      title: "Hamburg",
      img: "https://images.unsplash.com/photo-1600618538?w=800&q=80",
      desc: (
        <>
         Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Hamburg Hotel to Hamburg Airport.
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
          alt="Glimpses of Denmark Sweden and Germany Tour"
        />
        <div className="hero-content">
          <h1>Denmark + Sweden + Germany</h1>
          <p>Scandinavian Elegance. Nordic Culture. Hanseatic Grandeur.</p>
          <Link to="/germany-landing10">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Major Destinations</h2>
        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/pc3c8a854bc?w=600&q=80" alt="" />
            <p>Copenhagen, Denmark</p>
          </div>
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photodc70a27c95?w=600&q=80" alt="" />
            <p>Stockholm, Sweden</p>
          </div>
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1582d15560349?w=600&q=80" alt="" />
            <p>Hamburg, Germany</p>
          </div>
          <div className="highlight-card">
            <img src="https://images.unsplash.com/pho68eb71b16afc?w=600&q=80" alt="" />
            <p>Lübeck, Germany</p>
          </div>
        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Scandinavian & Northern Europe Journey?</h2>
        <div className="why-grid">
          <div>🌉 Iconic Øresund Bridge Crossing</div>
          <div>⚓ Stockholm's Vasa Museum</div>
          <div>🏛️ Hamburg's UNESCO Speicherstadt</div>
          <div>🍬 Lübeck's Famous Marzipan Heritage</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore the Best of Denmark, Sweden & Germany</h2>
        <p>Book your Scandinavian adventure today — 07 Nights / 08 Days from ₹4,70,000</p>
        <br />
        <Link to="/germany-landing10">
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

        {/* Single Send Query button below all itinerary cards */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("8 Days Glimpses of Denmark, Sweden & Germany Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Denmark, Sweden & Germany journey</p>
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

export default DenmarkSwedenGermanyTour;