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
    question: "What is the best time to visit Central Vietnam for this tour?",
    answer:
      "February to May offers the most pleasant weather across Da Nang, Hoi An, and Hue, with warm days and low rainfall. June to August is hot but ideal for the beaches of Da Nang, while September to January can bring occasional rain, especially in Hue.",
  },
  {
    question: "What is included in the 4-day Central Vietnam package?",
    answer:
      "The package includes hotel accommodation for 3 nights, daily breakfast, private transfers and coach travel between cities, cable car rides at Ba Na Hills, guided walking tours of Hoi An Ancient Town and Hue Imperial City, and a boat ride on the Perfume River. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Vietnam?",
    answer:
      "Indian passport holders can apply for an e-Visa online, valid for a single or multiple entry stay. We recommend applying at least 2–3 weeks before your travel date. Our team can assist you with the documentation and application process.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Golden Bridge and French Village at Ba Na Hills, the lantern-lit streets and Japanese Covered Bridge of Hoi An Ancient Town, the Imperial Citadel and tombs of Hue, the Marble Mountains, and a relaxing cruise along the Perfume River.",
  },
  {
    question: "What currency is used across Vietnam?",
    answer:
      "The Vietnamese Dong (VND) is the local currency. Cards are accepted at larger hotels and restaurants, but cash is useful for markets, street food, and small purchases. Currency can be exchanged easily at the airport or in the city.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add extra nights in Da Nang, extend to Hanoi and Ha Long Bay, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const VietnamCentralLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://cdn.tourradar.com/s3/tour/750x400/317414_68cb8e5f6111f.jpg"
          alt="Central Vietnam Tour"
        />

        <div className="hero-content">
          <h1>Central Vietnam</h1>

          <p>
            Da Nang • Ba Na Hills • Hoi An • Hue
          </p>

          <Link to="/Vietnam-Central">
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh9f_6ehTP5G4cqgNQIBgYH6dINVJaAV9W3X8tDNuq5Q&s=10"
              alt="Golden Bridge Ba Na Hills"
            />
            <p>Golden Bridge, Ba Na Hills</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEAEc58sgZjt9fY5NuoDOO-CL8fatQPp6Kqxh4WJhuwddE4--WXXPml0E6&s=10"
              alt="Hoi An Ancient Town"
            />
            <p>Hoi An Ancient Town</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_9KkeEt7wxi-JpAAI0Ec6iOFXyhL3QehaoC_YDC-2Q&s=10"
              alt="Hue Imperial City"
            />
            <p>Hue Imperial Citadel</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1170&auto=format&fit=crophttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLYtwL4yiXxawxnW2T8bsZjnUsM9tnhqvyfvfTLWzA5g&s=10 Nang beach and Dragon Bridge"
            />
            <p>Da Nang & Dragon Bridge</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🌉 Iconic Golden Bridge at Ba Na Hills</div>
          <div>🏮 Lantern-lit Streets of Hoi An</div>
          <div>👑 Royal Heritage of Hue's Imperial City</div>
          <div>🏖️ Coastal Charm of Da Nang</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Discover the Soul of Vietnam in 4 Days</h2>

        <p>
          From imperial citadels to lantern-lit lanes and misty mountain peaks — the essential Central Vietnam experience
        </p>

        <br />

        <Link to="/Vietnam-Central">
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLJ6bpboLW-a4gNpsQ8QqWzl0zYr_Cz_LqrBdl6Epmhf4a5t4gDjI9V8Q&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>Danang Arrival (No guide) </p>
              <p>
               Upon arrival in Danang, you will be transferred to your hotel.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTba9X3Kx4VUFF_q2LLQd6ywRKkj3G0XuPmxBNwDI6sXw&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Danang - Ba Na Hills (Return Cable Car)</p>
              <p>
                Experience the breathtaking views and entertainment at Ba Na Hills.<br />
              Cable Car Ride: Take a ride on one of the world's longest and highest cable car systems, offering panoramic views of the surrounding mountains and coastline.<br />

              Golden Bridge: Walk across the famous Golden Bridge, a pedestrian bridge held up by giant stone hands.<br />

              French Village: Explore the French Village, a replica of a medieval French town, complete with cobblestone streets, European-style buildings, and a charming atmosphere.<br />

              Fantasy Park: Enjoy thrilling rides and games at Fantasy Park, an indoor amusement park with attractions for all ages.

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHTLF2GCecOMoAL-vA4Gs-P_kFXbzRl1tPyTSNgZw7Sg&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Danang - Marble Mountain - Hoi An Ancient Town - Danang</p>
              <p>
               Discover the cultural and historical gems of Danang and Hoi An.<br/>
               Marble Mountain: Explore Marble Mountain, a cluster of five limestone hills that are home to caves, pagodas, and temples. Climb to the summit for panoramic views of the coastline.<br/>

              Hoi An Ancient Town: Step back in time as you stroll through the UNESCO-listed Hoi An Ancient Town. Admire the well-preserved architecture, including Japanese Covered Bridge, ancient merchant houses, and Chinese temples. 
              Indulge in tailor-made clothing, souvenirs, and delicious local cuisine.


              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2DQ4-TTAsbUFK3bDcDbjtcmSzjGiqBy6UAwCKSJLAag&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Danang Departure (No Guide)</p>
              <p>
                Enjoy a final breakfast in Danang before transferring to the airport for your departure flight.


              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("4 Days Central Vietnam Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Vietnamese journey</p>
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

export default VietnamCentralLanding;