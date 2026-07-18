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
    question: "What is the best time to visit Athens for this tour?",
    answer:
      "April to June and September to October are ideal, offering pleasant temperatures for sightseeing. Summer (July–August) can be quite hot but is peak season, while winter months are cooler with fewer crowds, perfect for exploring the museums and archaeological sites at a relaxed pace.",
  },
  {
    question: "What is included in the 4-day Athens package?",
    answer:
      "The package includes 3 nights accommodation in Athens, daily breakfast, private airport transfers, and a guided city tour covering the Acropolis and other major landmarks. International flights, visa fees and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Greece?",
    answer:
      "Indian passport holders require a Schengen visa, which covers travel to Athens on this itinerary. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Acropolis and Parthenon, the Acropolis Museum, Syntagma Square, the Panathenaic Stadium, and the charming Plaka and Monastiraki neighbourhoods. An optional day trip to Cape Sounion or Delphi can also be arranged.",
  },
  {
    question: "What currency is used in Greece?",
    answer:
      "Greece uses the Euro (EUR). Cards are widely accepted across Athens, but it's useful to carry some local cash for small purchases and transit. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add a day trip to Delphi or Cape Sounion, extend your stay, or upgrade your hotel, our team will curate the perfect personalised experience for you.",
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
const AthensLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/28/74/29/caption.jpg?w=1200&h=-1&s=1"
          alt="Athens Tour"
        />

        <div className="hero-content">
          <h1>Best of Athens</h1>

          <p>
            Athens
          </p>

          <Link to="/Athens-Greece">
            <button className="explore-btn">
              Explore Tour
            </button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Tour Highlights</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img
              src="https://wallpaperaccess.com/full/1264634.jpg"
              alt="Acropolis Athens"
            />
            <p>Acropolis & Parthenon</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://media.istockphoto.com/id/1318145387/photo/beautiful-view-to-the-old-town-plaka-of-athens-greece.jpg?s=170667a&w=0&k=20&c=toO1PU2Lly4yi1ZUwpLF9aW9we661uZBlhH3CHypMrA="
              alt="Plaka Athens"
            />
            <p>Plaka Old Town</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://t4.ftcdn.net/jpg/00/68/43/27/360_F_68432772_h0LvnwgqvFbUbEUaOHFHZKAJ4b3gPkQx.jpg"
              alt="Panathenaic Stadium"
            />
            <p>Panathenaic Stadium</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.embq_rk3xMxfq2ozIr16pgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Cape Sounion"
            />
            <p>Cape Sounion</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏛️ Ancient Wonders of the Acropolis</div>
          <div>🎨 World-Class Museums</div>
          <div>🍽️ Vibrant Plaka Dining Scene</div>
          <div>🌅 Scenic Coastal Day Trips</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Best of Athens in 4 Days</h2>

        <p>
          From the timeless Acropolis to the buzzing streets of Plaka — a short but unforgettable escape into ancient and modern Greece
        </p>

        <br />

        <Link to="/Athens-Greece">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>4 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.xlQYmh6Mw4JgB6wDD_v19AHaEz?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>India → Athens</p>
              <p>
Arrival in Athens: A Historic Beginning to Your Greek Holiday <br/>
Welcome to Athens, the cradle of Western civilization and a city rich in ancient history, culture, and 
vibrant modern life. Upon arrival at Athens International Airport, you will enjoy a smooth private 
transfer to your hotel.<br/> 
The remainder of the day is at leisure, allowing you to explore the nearby streets, local cafés, or simply 
relax after your journey.<br/> 
Overnight stay in Athens. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://a.veronikasadventure.com/tour/athens-acropolis-guided-walking-tour-t415355-1.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Athens – Acropolis Walking Tour</p>
              <p>
Breakfast at the hotel.<br/> 
After breakfast, proceed for the Acropolis Walking Tour on a shared basis. Visit the iconic Acropolis, 
home to world-famous monuments such as the Parthenon, Erechtheion, and Temple of Athena Nike. 
During the guided walk, learn about ancient Greek history, mythology, and architecture while enjoying 
panoramic views of Athens city.<br/> 
The rest of the day is at leisure for shopping, exploring Plaka, or enjoying local cuisine.<br/> 
Overnight stay in Athens 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.Tp2qG0LBfoJC2WWzwdQjlQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Athens – Day at Leisure</p>
              <p>
Breakfast at the hotel.<br/> 
Today is free at leisure. You may choose to explore Athens at your own pace, visit optional attractions 
such as the Acropolis Museum, National Archaeological Museum, or enjoy a leisurely walk through 
Monastiraki and Syntagma Square<br/>. 
Overnight stay in Athens.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.ylVkTJRFPB-k7-YjKmo-UAHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Athens → India</p>
              <p>
Breakfast at the hotel.<br/> 
After breakfast, enjoy a private transfer from your hotel to Athens International Airport for your 
return journey to India. 
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("4 Days Best of Athens Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Athens getaway</p>
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

export default AthensLanding;