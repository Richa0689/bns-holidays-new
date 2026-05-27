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
    question: "What is the best time to visit Amsterdam, Cologne, and Frankfurt?",
    answer:
      "Each season offers something special. Spring (April–May) is magical in Amsterdam when the tulip fields are in full bloom. Summer (June–August) brings long days, outdoor festivals, and vibrant city life across all three cities. Autumn (September–October) offers warm colours and fewer tourists. December is perfect for Christmas markets in Cologne and Frankfurt, which are among the most famous in Europe.",
  },
  {
    question: "What is included in the 6-night/7-day tour package?",
    answer:
      "The package includes accommodation for 6 nights, daily breakfast, airport transfers, guided sightseeing tours as per the itinerary, and intercity travel between Amsterdam, Cologne, and Frankfurt. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to the Netherlands and Germany?",
    answer:
      "Indian passport holders require a Schengen visa to visit the Netherlands and Germany. Both countries are part of the Schengen Area, so one Schengen visa covers your entire trip. We recommend applying at least 4–6 weeks in advance. Our team can guide you with the documentation process.",
  },
  {
    question: "Is this tour suitable for first-time Europe travellers?",
    answer:
      "Absolutely! This itinerary is thoughtfully designed for first-timers. It covers iconic highlights — Amsterdam's canal rings, Cologne's magnificent Cathedral, and Frankfurt's modern skyline and Römerberg old town — with a comfortable pace that allows you to absorb each city without feeling rushed.",
  },
  {
    question: "What is the currency used in these countries?",
    answer:
      "Both the Netherlands and Germany use the Euro (€). It is advisable to carry some local currency for small purchases, though credit and debit cards are widely accepted across hotels, restaurants, and attractions.",
  },
  {
    question: "Can I customise the Amsterdam–Cologne–Frankfurt itinerary?",
    answer:
      "Yes! Every itinerary is fully customisable based on your interests, travel dates, and budget. Whether you'd like to add a Keukenhof Gardens visit, a Rhine Valley cruise, or a day trip to Heidelberg, our team will craft the perfect personalised journey for you.",
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
const AmsterdamCologneFrankfurtTour = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const itinerary = [
    {
      day: "Day 1",
      title: (
        <>
           Amsterdam<br/>
Arrival in Amsterdam: A Magical Start to Your Netherland
        </>
      ),
      img: "https://images.unsplash.com/phot666-13e3e96b5017?w=800&q=80",
      desc: (
        <>
          Welcome to Amsterdam, the Eternal City! Upon arriving at Amsterdam Airport (Amsterdam Airport
Schiphol), One of Europe’s most modern and efficient airports, marks the beginning of an
unforgettable journey. After landing, you’ll enjoy a smooth and seamless private transfer to your
hotel, allowing you to relax and settle in without any stress.<br/>
Your first evening in Amsterdam will set the tone for the incredible experiences ahead. From the
glittering canals to the charming cobblestone streets, the city’s timeless beauty and warm atmosphere
will captivate you from the moment you step outside. Whether you’re strolling along the illuminated
waterfront, admiring the elegant bridges, or savoring a delightful Dutch meal, your Amsterdam
adventure begins in one of Europe’s most enchanting and iconic destinations.<br/>
Overnight Stay in Amsterdam

        </>
      ),
    },
    {
      day: "Day 2",
      title: "Amsterdam - Amsterdam hop on hop off bus tour - 24 Hours",
      img: "https://images.unsplash.com/p76924542622-772281b13aa8?w=800&q=80",
      desc: (
        <>
          After breakfast, embark on your Amsterdam Hop-On Hop-Off Bus Tour on a shared basis. If you
want to explore Amsterdam’s top highlights at your own pace, this 24-hour flexible sightseeing
experience is the perfect choice. The tour takes you through the city’s most iconic landmarks,
charming neighborhoods, and cultural hotspots—including the Royal Palace, Rijksmuseum, Anne
Frank House, and picturesque canal districts.<br/>
Amsterdam - Amsterdam Canal Cruise Ticket<br/>
Amsterdam Canal Cruise on a shared basis. If you’re short on time but want to experience the most
picturesque highlights of Amsterdam, this classic canal cruise is the perfect way to explore the city
from a unique perspective. During this relaxing journey, you’ll glide through Amsterdam’s iconic
canals, passing historic bridges, Golden Age merchant houses, charming houseboats, and famous
landmarks<br/>
Overnight Stay in Amsterdam
        </>
      ),
    },
    {
      day: "Day 3",
      title: "Amsterdam - Cologne",
      img: "https://images.unsplash.com/pho7521464027-f127ff144326?w=800&q=80",
      desc: (
        <>
         After breakfast, catch a direct train from Amsterdam to Cologne. If you’re looking for a quick,
comfortable way to travel between two of Western Europe’s vibrant cities, this train journey is ideal.
On a high-speed train (such as ICE), the trip usually takes about 2 hours 37 minutes to 2 hours 40
minutes. You’ll depart from Amsterdam’s central station and arrive right at Cologne’s main station.<br/>
Overnight Stay in Cologne
        </>
      ),
    },
    {
      day: "Day 4",
      title: "Cologne – Cologne hop on hop off bus tour - 24 Hours",
      img: "https://images.unsplash.com/pho9946347371-68eb71b16afc?w=800&q=80",
      desc: (
        <>
         After breakfast, proceed for your Cologne Hop-On Hop-Off Bus Tour on a shared basis. If you’re
short on time but want to experience the highlights of Cologne, this flexible 24-hour sightseeing tour
is the perfect way to explore the city’s most iconic landmarks. The tour takes you past major
attractions such as Cologne Cathedral, the Rhine River promenade, the Old Town, Museum Ludwig,
and the historic Roman-Germanic Museum, all while providing engaging commentary that brings
the city’s rich heritage to life. With the freedom to hop on and off at multiple stops, you can
discover Cologne’s culture, architecture, and vibrant neighborhoods at your own pace.<br/>
Overnight Stay in Cologne

        </>
      ),
    },
    {
      day: "Day 5",
      title: "Cologne – Frankfurt",
      img: "https://images.unsplash.com/ph467269204594-9661b134dd2b?w=800&q=80",
      desc: (
        <>
         After breakfast, board your train from Cologne heading to Frankfurt am Main. If you're looking for a
fast and efficient way to travel between these two major German cities, this train journey is an
excellent choice. The trip covers approximately 152 km (about 94 miles). On a high-speed train
(such as those operated by Deutsche Bahn — ICE or IC/InterCity), the journey typically takes around
1 hour 16 minutes on average, and on the fastest services, as little as 1 hour 3 minutes. You’ll
depart from Cologne’s main station (Köln Hbf) and arrive in Frankfurt’s central station (Frankfurt
(Main) Hbf) — making for a smooth, direct connection with no need to change trains.<br />
Overnight Stay in Frankfurt

        </>
      ),
    },
    {
      day: "Day 6",
      title: "Frankfurt - Frankfurt hop on hop off bus tour - 24 hours",
      img: "https://images.unsplash.com/pho527864550417-7fd91fc51a46?w=800&q=80",
      desc: (
        <>
          After breakfast, proceed for your Frankfurt Hop-On Hop-Off Bus Tour on a shared basis. If you’re
short on time but want to experience the highlights of Frankfurt, this flexible 24-hour sightseeing
tour is an excellent way to discover the city’s modern skyline, historic quarters, and cultural
landmarks. The tour takes you past iconic attractions such as Römerberg Square, the Frankfurt
Cathedral, St. Paul’s Church, the Main Tower, and the scenic riverbank of the Main. Along the route,
you’ll enjoy insightful audio commentary that sheds light on Frankfurt’s unique blend of tradition and innovation. With the freedom to hop on and off at designated stops, you can explore the city’s
museums, shopping districts, and historical sites at your own pace.<br/>Overnight Stay in Frankfurt
        </>
      ),
    },
    {
      day: "Day 7",
      title: "Frankfurt",
      img: "https://images.unsplash.com/pho-1600618538034-fc86e9a6b9b4?w=800&q=80",
      desc: (
        <>
         Breakfast at Hotel.<br/>
After breakfast and proceed to Frankfurt airport with private transfer.

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
          alt="Amsterdam Cologne Frankfurt Tour"
        />
        <div className="hero-content">
          <h1>Amsterdam + Cologne + Frankfurt</h1>
          <p>Canal Cities. Gothic Grandeur. Modern European Heartland.</p>
          <Link to="/germany-landing8">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Major Destinations</h2>
        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1534350666-13e3e96b5017?w=600&q=80" alt="" />
            <p>Amsterdam, Netherlands</p>
          </div>
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-15675217-f127ff144326?w=600&q=80" alt="" />
            <p>Zaanse Schans, Netherlands</p>
          </div>
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-159971-68eb71b16afc?w=600&q=80" alt="" />
            <p>Cologne, Germany</p>
          </div>
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-15278647-7fd91fc51a46?w=600&q=80" alt="" />
            <p>Frankfurt, Germany</p>
          </div>
        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Western Europe Journey?</h2>
        <div className="why-grid">
          <div>🚤 Iconic Amsterdam Canals</div>
          <div>⛪ Cologne's Gothic Cathedral</div>
          <div>🏰 Rhine Valley Castles</div>
          <div>🏙️ Frankfurt's Stunning Skyline</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore the Netherlands & Germany's Best</h2>
        <p>Book your Western Europe adventure today — 06 Nights / 07 Days from ₹4,70,000</p>
        <br />
        <Link to="/germany-landing8">
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
            onClick={() => setActiveModal("7 Days Amsterdam + Cologne + Frankfurt Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Western Europe journey</p>
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

export default AmsterdamCologneFrankfurtTour;