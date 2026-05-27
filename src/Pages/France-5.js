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
    question: "What is the best time to visit Barcelona and Nice?",
    answer:
      "Both Barcelona and Nice enjoy a wonderful Mediterranean climate making them fantastic year-round destinations. Spring (April–May) is ideal — Barcelona's streets bloom with colour during the Sant Jordi festival, and Nice's famous Promenade des Anglais is pleasantly warm with fewer summer crowds. Summer (June–August) is the peak season — both cities are at their most vibrant with beach culture, open-air dining, and endless sunshine along the Riviera. Autumn (September–October) offers golden warmth, thinner crowds, and a more relaxed pace along the coast. Winter (December–February) is mild compared to northern Europe, with Nice particularly pleasant for sightseeing and Barcelona buzzing with Christmas markets and festive lights.",
  },
  {
    question: "What is included in the 6-night/7-day tour package?",
    answer:
      "The package includes accommodation for 6 nights, daily breakfast, airport transfers, guided sightseeing tours as per the itinerary, and intercity travel between Barcelona and Nice. International flights and personal expenses are not included unless specified.",
  },
  {
    question: "Do I need a visa to travel to Spain and France?",
    answer:
      "Indian passport holders require a Schengen visa to visit both Spain and France, as both countries are part of the Schengen Area. A single Schengen visa covers the entire trip. We recommend applying at least 4–6 weeks in advance. Our team can guide you through the complete documentation process to ensure a smooth and hassle-free application.",
  },
  {
    question: "Is this tour suitable for first-time Europe travellers?",
    answer:
      "Absolutely! This itinerary is perfectly crafted for first-timers exploring Southern Europe. It covers iconic highlights — Barcelona's Sagrada Família, Park Güell, and vibrant Las Ramblas, and Nice's stunning Promenade des Anglais, Vieux-Nice Old Town, and the glamorous French Riviera coastline — at a comfortable pace that lets you absorb the best of Spanish and French Mediterranean culture without feeling rushed.",
  },
  {
    question: "What currency is used in Spain and France?",
    answer:
      "Both Spain and France use the Euro (€), making this one of the most convenient two-country itineraries in Europe. You only need one currency for the entire trip. Credit and debit cards are widely accepted at hotels, restaurants, and major attractions, though it is advisable to carry some cash for smaller purchases, local markets, tapas bars, and tips along the way.",
  },
  {
    question: "Can I customise the Barcelona & Nice itinerary?",
    answer:
      "Yes! Every itinerary is fully customisable based on your interests, travel dates, and budget. Whether you'd like to add a day trip to Montserrat Monastery from Barcelona, a visit to Monaco and Monte Carlo from Nice, a coastal drive along the French Riviera through Cannes and Antibes, a flamenco dinner show in Barcelona, or extra nights in either city, our team will craft the perfect personalised Mediterranean escape for you.",
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
const SpanishFrenchRivieraTour = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const itinerary = [
    {
      day: "Day 1",
      title: (
        <>
          Barcelona<br/>
Arrival in Barcelona: A Perfect Beginning to Your European Holiday
        </>
      ),
      img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80",
      desc: (
        <>
          Welcome to Barcelona, a vibrant city known for its artistic heritage, stunning architecture, sun-kissed
beaches, and lively Mediterranean ambience. Upon your arrival at Barcelona Airport, you will enjoy a
smooth and comfortable private transfer to your hotel.<br/>
Your first evening in Barcelona offers the perfect introduction to the city’s unique charm. Whether
you're admiring the illuminated streets, strolling along La Rambla, or soaking in the energy of Plaça
Catalunya, Barcelona promises an unforgettable start to your journey.<br/>
Overnight Stay in Barcelona
        </>
      ),
    },
    {
      day: "Day 2",
      title: " Highlight of the Day: Sagrada Familia Entry Ticket & Barcelona Hop-on Hop-off Tour",
      img: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80",
      desc: (
        <>
          Breakfast at Hotel.<br/>
After breakfast, proceed for your full-day experience of Barcelona with the 01-Day Hop on Hop off
bus tour, offering the perfect way to explore the city’s major highlights at your own pace.
Your visit includes the Sagrada Familia Entry Ticket, allowing you to witness Antoni Gaudí’s
masterpiece up close. The intricate architecture, stunning interiors, and spiritual atmosphere make
this an essential Barcelona experience.<br/>
Overnight Stay in Barcelona
        </>
      ),
    },
    {
      day: "Day 3",
      title: "Barcelona – Montserrat Tour",
      img: "https://images.unsplash.com/photo-1525220964581-831e70d9d48a?w=800&q=80",
      desc: (
        <>
        Breakfast at Hotel.<br/>
After breakfast, proceed for the Montserrat Tour with Cogwheel & Black Madonna on SIC basis.
This journey takes you to Catalonia’s most famous mountain sanctuary, offering panoramic views,
ancient Benedictine traditions, and the revered statue of the Black Madonna.<br/>
The scenic cog-wheel train ride enhances the experience with breathtaking landscapes and peaceful
surroundings.<br/>
Overnight Stay in Barcelona
        </>
      ),
    },
    {
      day: "Day 4",
      title: "Barcelona – Nice",
      img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
      desc: (
        <>
          Breakfast at Hotel.<br/>
After breakfast, enjoy a private transfer from your Barcelona hotel to Barcelona Airport for your
flight to Nice.<br/>
Upon arrival in Nice, a private transfer will take you to your hotel. Nice, the jewel of the French
Riviera, offers the perfect blend of Mediterranean elegance, charming promenades, and vibrant
cultural heritage. The serene coastline and old-town charm make it a delightful destination.<br/>
Overnight Stay in Nice
        </>
      ),
    },
    {
      day: "Day 5",
      title: "Nice – Hop on Hop off Tour",
      img: "https://images.unsplash.com/photo-1491166617655-0723a4680b51?w=800&q=80",
      desc: (
        <>
         Breakfast at Hotel.<br/>
After breakfast, proceed for your Nice 01-Day Hop on Hop off Bus Tour. This flexible sightseeing
experience allows you to explore Nice's iconic landmarks including the Promenade des Anglais, Castle
Hill, Old Town, and more, all while enjoying stunning coastal views along the way.<br/>
Overnight Stay in Nice

        </>
      ),
    },
    {
      day: "Day 6",
      title: "Nice – French Riviera Day Tour",
      img: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80",
      desc: (
        <>
          Breakfast at Hotel.<br/>
Today, proceed for the French Riviera Day Tour on SIC basis. This full-day excursion takes you along
one of Europe’s most glamorous coastlines, featuring charming seaside towns, luxurious marinas,
scenic views, and the timeless elegance of the Côte d’Azur.<br/>
Take a unique trip and visit the medieval village of Èze. Your next stop is the Principality of Monaco,
where you have time to discover the old town, the cathedral, the palace and the ceremony of the
changing of the guard. Next, continue along the Formula 1 circuit to Monte Carlo with its casino and
upscale shops.<br/>
Head to your next stop, Saint-Paul-De-Vence. Marvel at the "jewel of Provence", where many
painters and artists have resided. As you walk the streets of this medieval fortified village, you can
taste centuries of history and artistic creativity.<br/>
For your last destination, make way to the famous city of stars—Cannes. Explore the Beverly Hills of
France, and take a stroll on the famous Croisette, enjoy luxury hotels, restaurants and shops.<br/>
Overnight Stay in Nice
        </>
      ),
    },
    {
      day: "Day 7",
      title: "Nice – Departure",
      img: "https://images.unsplash.com/photo-1520491260-01f2c7b1f4f2?w=800&q=80",
      desc: (
        <>
          Breakfast at Hotel.<br/>
After breakfast, proceed to Nice Airport with a private transfer for your onward flight to India.
        </>
      ),
    },
  ];

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop"
          alt="Spanish French Riviera Delight Tour"
        />
        <div className="hero-content">
          <h1>Spanish–French Riviera Delight</h1>
          <p>Barcelona's Gaudí Magic. Nice's Azure Coastline. Monaco's Glamour.</p>
          <Link to="/france-landing6">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Major Destinations</h2>
        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&q=80" alt="" />
            <p>Sagrada Família, Barcelona</p>
          </div>
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1525220964581-831e70d9d48a?w=600&q=80" alt="" />
            <p>Las Ramblas, Barcelona</p>
          </div>
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1491166617655-0723a4680b51?w=600&q=80" alt="" />
            <p>Promenade des Anglais, Nice</p>
          </div>
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&q=80" alt="" />
            <p>Monaco & Monte Carlo</p>
          </div>
        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Journey?</h2>
        <div className="why-grid">
          <div>🏛️ Gaudí's Sagrada Família & Park Güell</div>
          <div>🌊 French Riviera & Promenade des Anglais</div>
          <div>🎰 Monaco & Monte Carlo Day Trip</div>
          <div>🍷 Mediterranean Food, Wine & Beach Life</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Barcelona & the French Riviera</h2>
        <p>Book your Mediterranean escape today — 06 Nights / 07 Days from ₹3,40,000</p>
        <br />
        <Link to="/france-landing6">
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

        {/* Send Query Button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("7 Days Spanish–French Riviera Delight — Barcelona & Nice Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Barcelona & Nice journey</p>
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

export default SpanishFrenchRivieraTour;