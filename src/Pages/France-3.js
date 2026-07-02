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
    question: "What is the best time to visit Amsterdam, Brussels, and Paris?",
    answer:
      "All three cities are wonderful year-round. Spring (April–May) is the most popular time — Amsterdam's tulip fields and Keukenhof Gardens are in full bloom, Brussels's Grand Place is bathed in warm light, and Paris buzzes with outdoor café culture. Summer (June–August) brings long days and lively festivals across all three cities. Autumn (September–October) offers golden landscapes, fewer crowds, and a more relaxed pace. Winter (December) is magical — Amsterdam's canal rings glow with festive lights, Brussels hosts one of Europe's finest Christmas markets on the Grand Place, and Paris's Champs-Élysées shimmers with holiday illuminations.",
  },
  {
    question: "What is included in the 6-night/7-day tour package?",
    answer:
      "The package includes accommodation for 6 nights, daily breakfast, airport transfers, guided sightseeing tours as per the itinerary, and intercity travel between Amsterdam, Brussels, and Paris. International flights and personal expenses are not included unless specified.",
  },
  {
    question: "Do I need a visa to travel to the Netherlands, Belgium, and France?",
    answer:
      "Indian passport holders require a Schengen visa to visit the Netherlands, Belgium, and France. All three countries are part of the Schengen Area, so a single Schengen visa covers the entire trip. We recommend applying at least 4–6 weeks in advance. Our team can guide you through the complete documentation process to ensure a smooth application.",
  },
  {
    question: "Is this tour suitable for first-time Europe travellers?",
    answer:
      "Absolutely! This itinerary is perfectly crafted for first-time European travellers. It covers iconic highlights — Amsterdam's canal rings and Van Gogh Museum, Brussels's magnificent Grand Place and famous waffles and chocolates, and Paris's Eiffel Tower, Louvre, and Montmartre — at a comfortable pace that lets you absorb the best of Dutch, Belgian, and French culture without feeling rushed.",
  },
  {
    question: "What currency is used across the Netherlands, Belgium, and France?",
    answer:
      "All three countries — the Netherlands, Belgium, and France — use the Euro (€), making this one of the most convenient multi-country itineraries in Europe. You only need one currency for the entire trip. Credit and debit cards are widely accepted at hotels, restaurants, and major attractions, though it is advisable to carry some cash for smaller purchases and local markets.",
  },
  {
    question: "Can I customise the Amsterdam, Brussels & Paris itinerary?",
    answer:
      "Yes! Every itinerary is fully customisable based on your interests, travel dates, and budget. Whether you'd like to add a day trip to the Keukenhof Tulip Gardens or Dutch windmills near Amsterdam, a visit to the Bruges medieval city from Brussels, a Palace of Versailles excursion from Paris, or a sunset Seine River cruise, our team will craft the perfect personalised European journey for you.",
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
const WindmillsToEiffelBelgiumTour = () => {
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
      img: "https://backpacker-weltreise.de/wp-content/uploads/2025/08/2-Amsterdam-Schiphol-Arrival-1024x559.jpg",
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
      img: "https://www.amsterdam.info/sitemedia/photos-800/amsterdam-canal-cruise-hop-on-hop-off-central-staion-boat-800x450.jpg",
      desc: (
        <>
         Breakfast at Hotel.<br/>
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
      title: "Amsterdam – Brussels",
      img: "https://www.traveller.ee/blog/wp-content/uploads/2018/10/evening-light-view-over-a-canal-at-traditional-amsterdam-buildings.jpg",
      desc: (
        <>
          Breakfast at Hotel.<br/>
After breakfast, check out and proceed with a private transfer from Amsterdam Hotel to Amsterdam
Station. Travel to Brussels by train. Upon arrival, meet your driver for a private transfer from Brussels
Station to your hotel.<br/>
Brussels, the capital of Belgium, is known for its rich history, Gothic architecture, Belgian chocolates,
waffles, and European Union headquarters. Its charming streets blend medieval structures with
modern European influence.<br/>
Overnight Stay in Brussels.
        </>
      ),
    },
    {
      day: "Day 4",
      title: "Brussels – Atomium Entrance Ticket + Brussels Hop on Hop off",
      img: "https://www.brussels.info/img/attractions/atomium/atomium-brussels-600x433.jpg",
      desc: (
        <>
          Breakfast at Hotel.<br/>
Today proceed for the Brussels One Day Hop on Hop off Tour. This tour provides an ideal
introduction to the city’s major attractions including the Grand Place, Manneken Pis, Royal Palace,
and European Quarter. Your experience also includes the Atomium Entrance Ticket, offering
panoramic views of Brussels from its iconic futuristic spheres.<br/>
After sightseeing, return to your hotel or explore the city at leisure.<br/>
Overnight Stay in Brussels.
        </>
      ),
    },
    {
      day: "Day 5",
      title: "Brussels – Paris",
      img: "https://findloveandtravel.com/wp-content/uploads/2023/11/brussels-belgium-paris-day-trip.jpg",
      desc: (
        <>
         Breakfast at Hotel.<br/>
After breakfast, proceed with a private transfer from Brussels Hotel to Brussels Station. Travel to
Paris by train. Upon arrival, meet your chauffeur for a private transfer from Paris Station to your
hotel.<br/>
Paris, the City of Lights, is globally renowned for its iconic landmarks, artistic heritage, romantic
ambiance, fashion houses, gourmet cuisine, and historic architecture. From its charming cafés to
world-class museums, Paris is a city that inspires travellers from around the world.<br/>
Overnight Stay in Paris
        </>
      ),
    },
    {
      day: "Day 6",
      title: "Paris – Paris Hop on Hop off + Eiffel Tower Summit Entrance Ticket + Seine River Cruise Ticket",
      img: "https://cdn.getyourguide.com/img/tour/a301e86a2f5d305c.jpeg/140.jpg",
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
      day: "Day 7",
      title: "Paris – Departure",
      img: "https://thumbs.dreamstime.com/b/paris-charles-de-gaulle-international-airport-departure-area-paris-france-november-paris-charles-de-gaulle-international-132765268.jpg",
      desc: (
        <>
          Breakfast at Hotel.<br/>
After breakfast, proceed to Paris Airport with a private transfer for your onwards flight.
        </>
      ),
    },
  ];

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://img.freepik.com/premium-photo/beautiful-shot-wind-turbines-cloudy-sky-eiffel-region-germany_941466-6648.jpg"
          alt="Amsterdam Brussels Paris Tour"
        />
        <div className="hero-content">
          <h1>From Windmills to the Eiffel</h1>
          <p>Amsterdam's Canals. Brussels's Grand Place. Paris's Timeless Magic.</p>
          <Link to="/france-landing4">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Major Destinations</h2>
        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://wallpaperaccess.com/full/1088103.jpg" alt="" />
            <p>Amsterdam, Netherlands</p>
          </div>
          <div className="highlight-card">
            <img src="https://wallpaperbat.com/img/428474-royal-palace-of-brussels-wallpaper-grand-place-hd.jpg" alt="" />
            <p>Grand Place, Brussels</p>
          </div>
          <div className="highlight-card">
            <img src="https://atomium.be/Content/Images/Atomium_Style.html.jpg" alt="" />
            <p>Atomium, Belgium</p>
          </div>
          <div className="highlight-card">
            <img src="https://wallpaperaccess.com/full/1093839.jpg" alt="" />
            <p>Paris, France</p>
          </div>
        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Journey?</h2>
        <div className="why-grid">
          <div>🌷 Amsterdam's Canals & Museums</div>
          <div>🍫 Belgian Chocolate & Waffles</div>
          <div>🗼 Eiffel Tower & Louvre Museum</div>
          <div>🚆 Seamless High-Speed Rail Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Amsterdam, Brussels & Paris</h2>
        <p>Book your European adventure today — 06 Nights / 07 Days from ₹3,50,000</p>
        <br />
        <Link to="/france-landing4">
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
            onClick={() => setActiveModal("7 Days From Windmills to the Eiffel — Amsterdam, Brussels & Paris Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Amsterdam, Brussels & Paris journey</p>
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

export default WindmillsToEiffelBelgiumTour;