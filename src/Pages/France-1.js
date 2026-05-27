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
    question: "What is the best time to visit Amsterdam and Paris?",
    answer:
      "Both Amsterdam and Paris are wonderful year-round destinations. Spring (April–May) is arguably the finest time to visit — Amsterdam's tulip fields and Keukenhof Gardens are in full bloom, while Paris glows with mild weather and outdoor café culture. Summer (June–August) brings long days and a buzzing atmosphere, though crowds peak at major attractions. Autumn (September–October) offers golden light, fewer tourists, and vibrant cultural events. Winter (December) is magical with Christmas markets lining Amsterdam's canals and Paris's Champs-Élysées illuminated in festive lights.",
  },
  {
    question: "What is included in the 6-night/7-day tour package?",
    answer:
      "The package includes accommodation for 6 nights, daily breakfast, airport transfers, guided sightseeing tours as per the itinerary, and intercity travel between Amsterdam and Paris. International flights and personal expenses are not included unless specified.",
  },
  {
    question: "Do I need a visa to travel to the Netherlands and France?",
    answer:
      "Indian passport holders require a Schengen visa to visit both the Netherlands and France, as both are Schengen Area countries. A single Schengen visa covers the entire trip. We recommend applying at least 4–6 weeks in advance. Our team can guide you through the complete documentation process.",
  },
  {
    question: "Is this tour suitable for first-time Europe travellers?",
    answer:
      "Absolutely! This itinerary is perfectly crafted for first-timers exploring Western Europe. It covers iconic highlights — Amsterdam's canal rings and Van Gogh Museum, the scenic tulip countryside, and Paris's Eiffel Tower, Louvre, and Montmartre — at a comfortable pace that lets you soak in both Dutch and French culture without feeling rushed.",
  },
  {
    question: "What currency is used in the Netherlands and France?",
    answer:
      "Both the Netherlands and France use the Euro (€). It is advisable to carry some cash for smaller purchases, canal-side markets, and tips, though credit and debit cards are widely accepted at hotels, restaurants, and major attractions across Amsterdam and Paris.",
  },
  {
    question: "Can I customise the Amsterdam & Paris itinerary?",
    answer:
      "Yes! Every itinerary is fully customisable based on your interests, travel dates, and budget. Whether you'd like to add a day trip to the Keukenhof Tulip Gardens, a Seine River cruise at sunset, a visit to the Palace of Versailles, or a chocolate and cheese tasting experience in Amsterdam, our team will craft the perfect personalised journey for you.",
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
const WindmillsToEiffelTour = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const itinerary = [
    {
      day: "Day 1",
      title: (
        <>
         Amsterdam<br/>
Arrival in Amsterdam: I Amsterdam
        </>
      ),
      img: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80",
      desc: (
        <>
          Welcome to Amsterdam, Amsterdam is the Netherlands’ capital, known for its artistic heritage,
elaborate canal system and narrow houses with gabled facades, legacies of the city’s 17th-century
Golden Age. Its Museum District houses the Van Gogh Museum, works by Rembrandt and Vermeer
at the Rijksmuseum, and modern art at the Stedelijk. Cycling is key to the city’s character, and there
are numerous bike paths.<br/>
Overnight Stay in Amsterdam 
        </>
      ),
    },
    {
      day: "Day 2",
      title: "Amsterdam - Amsterdam One Day Hop on Hop off",
      img: "https://images.unsplash.com/photo-1576924542622-772f3e7e9b5e?w=800&q=80",
      desc: (
        <>
          Breakfast at Hotel.
Welcome to Amsterdam. Amsterdam is the capital city of the Netherlands, known for its artistic
heritage, elaborate canal system, and narrow houses with gabled facades that date back to the
17th-century Golden Age. The Museum District houses the Van Gogh Museum, the Rijksmuseum
with works by Rembrandt and Vermeer, and the Stedelijk Museum for modern art. Cycling is an
essential part of Amsterdam’s culture, and the city offers numerous scenic bike paths.<br/>
Overnight Stay in Amsterdam
        </>
      ),
    },
    {
      day: "Day 3",
      title: "Amsterdam – Zaanse Schans, Edam, Volendam & Marken Bus Tour",
      img: "https://images.unsplash.com/photo-1490750967868-88df5691cc41?w=800&q=80",
      desc: (
        <>
         Breakfast at Hotel.<br/>
After breakfast, check out and proceed with a This popular day tour takes you from Amsterdam into
the Dutch countryside to experience traditional villages, iconic windmills, and classic Dutch culture—
all in one trip. Zaanse Schans: Explore historic windmills, wooden houses, and artisan workshops, with
demonstrations of clog-making and cheese production. Edam: Visit the charming town famous for its
world-renowned Edam cheese, with a short walk through its picturesque streets and canals.<br/>
Volendam: Enjoy a lively fishing village on the Ijsselmeer, known for its colorful harbor, seafood, and
traditional Dutch atmosphere. Marken: Discover a former island with distinctive wooden houses,
narrow lanes, and strong local traditions.<br/>
Overnight Stay in Amsterdam.
        </>
      ),
    },
    {
      day: "Day 4",
      title: "Amsterdam – Paris",
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
      desc: (
        <>
         Breakfast at hotel.<br/>
After breakfast, proceed with a private transfer from your Amsterdam hotel to the train station.
Board the train to Paris. Upon arrival in Paris, meet your chauffeur for a private transfer from the
station to your hotel.<br/>
Paris, the City of Lights, is world-famous for its iconic landmarks, rich artistic and cultural heritage,
romantic charm, haute fashion, exquisite cuisine, and historic architecture. From elegant boulevards
and charming cafés to renowned museums and timeless monuments, Paris offers an unforgettable
experience for every traveller.<br/>
Overnight stay in Paris.
        </>
      ),
    },
    {
      day: "Day 5",
      title: "Paris – Paris Hop on Hop off + Eiffel Tower Summit Entrance Ticket + Seine River Cruise Ticket",
      img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
      desc: (
        <>
         Breakfast at Hotel.<br/>
After breakfast, proceed for the Paris One Day Hop on Hop off Tour, which covers the main
attractions of Paris including the Louvre Museum, Notre Dame, Champs-Élysées, Arc de Triomphe,
and more.<br/>
Continue to the Eiffel Tower with Summit Level Entrance Ticket, offering breathtaking views over
Paris from the highest accessible point.<br/>
Later, enjoy the Seine River Cruise Entrance Ticket, offering a peaceful journey along the river with
views of Paris’s most iconic monuments.<br/>
Overnight Stay in Paris
        </>
      ),
    },
    {
      day: "Day 6",
      title: "Paris – Montmartre Walking Tour with a Local Guide",
      img: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=800&q=80",
      desc: (
        <>
          Breakfast at Hotel.<br/>
After breakfast, proceed for a guided walking tour of Montmartre with a local expert. Explore one of
Paris’s most charming and historic neighborhoods, known for its artistic heritage, cobbled streets,
and bohemian atmosphere.<br/>
Visit iconic sites such as the Sacré-Cœur Basilica, Place du Tertre with its lively artists’ square, and
hidden corners once frequented by famous painters and writers. Learn fascinating stories about
Montmartre’s past, its role in shaping Parisian art and culture, and enjoy panoramic views of the
city.<br/>
This walking tour offers an authentic glimpse into the soul of Paris, blending history, culture, and
local life.<br/>
Overnight Stay in Paris
        </>
      ),
    },
    {
      day: "Day 7",
      title: "Paris – Departure",
      img: "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?w=800&q=80",
      desc: (
        <>
         Breakfast at Hotel.<br/>
After breakfast, proceed to Paris Airport with a private transfer for your onwards flight
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
          alt="Amsterdam Paris Tour"
        />
        <div className="hero-content">
          <h1>From Windmills to the Eiffel</h1>
          <p>Amsterdam's Canal Charm. Paris's Timeless Elegance.</p>
          <Link to="/france-landing2">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Major Destinations</h2>
        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600&q=80" alt="" />
            <p>Amsterdam, Netherlands</p>
          </div>
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1490750967868-88df5691cc41?w=600&q=80" alt="" />
            <p>Keukenhof & Windmills</p>
          </div>
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80" alt="" />
            <p>Paris, France</p>
          </div>
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1431274172761-fca41d930114?w=600&q=80" alt="" />
            <p>Palace of Versailles</p>
          </div>
        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Journey?</h2>
        <div className="why-grid">
          <div>🌷 Amsterdam's Tulip Fields & Canals</div>
          <div>🏰 Palace of Versailles Day Trip</div>
          <div>🗼 Eiffel Tower & Louvre Museum</div>
          <div>🚂 Scenic High-Speed Train to Paris</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore the Very Best of Amsterdam & Paris</h2>
        <p>Book your European adventure today — 06 Nights / 07 Days from ₹3,60,000</p>
        <br />
        <Link to="/france-landing2">
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
            onClick={() => setActiveModal("7 Days From Windmills to the Eiffel — Amsterdam & Paris Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Amsterdam & Paris journey</p>
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

export default WindmillsToEiffelTour;