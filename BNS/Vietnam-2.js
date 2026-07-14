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
    question: "What is the best time to visit Northern Vietnam for this tour?",
    answer:
      "October to April is the most pleasant window for Hanoi, Ha Long Bay and Ninh Binh, with cool, dry weather and clear skies ideal for cruising and photography. Avoid June–August if possible, as this is the hottest and most humid stretch of the year.",
  },
  {
    question: "What is included in the 4-day Northern Vietnam package?",
    answer:
      "The package includes hotel accommodation in Hanoi, a Ha Long Bay cruise with meals onboard, daily breakfast, private air-conditioned transfers, English/Indian-guide assisted sightseeing in Hanoi and Ninh Binh, and entrance fees for the listed attractions. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Vietnam?",
    answer:
      "Indian passport holders can apply for a Vietnam e-visa online, which typically takes 3–5 working days to process and allows a single entry of up to 90 days. Our team can assist you with the e-visa application and documentation.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include Hanoi's Old Quarter, the Ho Chi Minh Mausoleum and Temple of Literature, a traditional Water Puppet show, the limestone karsts and emerald waters of Ha Long Bay, and the boat ride through Trang An or Tam Coc, often called 'Ha Long Bay on land.'",
  },
  {
    question: "What currency is used across Vietnam?",
    answer:
      "The Vietnamese Dong (VND) is the local currency. Major hotels and restaurants in Hanoi accept cards, but cash is preferred for street food, markets and smaller vendors. We recommend carrying some cash and informing your bank before travelling.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates and budget. Whether you'd like to add an overnight Ha Long Bay cruise, extend to Sapa, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const VietnamLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2yU0DHAgPOXQooxptbhM2-AiTEWokdOXz133GW3-zvFuaO_4TFR9IMlY&s=10"
          alt="Northern Vietnam Tour"
        />

        <div className="hero-content">
          <h1>NORTHERN VIETNAM</h1>

          <p>
            Hanoi • Ha Long Bay • Ninh Binh
          </p>

          <Link to="/Northen-vietnam">
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNsA7sLFOvV1IVUBnn64f9kUYIevnsdVq0Dk54rPyrw&s=10"
              alt="Hanoi Old Quarter"
            />
            <p>Hanoi Old Quarter</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://vietravelasia.com/api/files/202404161313-2a1bcc6c33-Ha%20Long%20Bay%20Cruise%20Tour.jpg"
              alt="Ha Long Bay"
            />
            <p>Ha Long Bay Cruise</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrfPcgIo_QXZM6VrWybjpHxZuGHybkvmpaeyUcSUfSDg&s=10"
              alt="Trang An Ninh Binh"
            />
            <p>Trang An, Ninh Binh</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZeMY4PsT12QQC-6WdBe1QxLT19L3fiHpdLsox_C8ECQ&s=10"
              alt="Water Puppet Show"
            />
            <p>Water Puppet Show</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>⛵ UNESCO Ha Long Bay Cruise</div>
          <div>🏮 Charming Hanoi Old Quarter</div>
          <div>🌾 Limestone Karsts of Ninh Binh</div>
          <div>🍜 Authentic Vietnamese Cuisine</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Discover the Best of Northern Vietnam in 4 Days</h2>

        <p>
          From bustling old streets to emerald bays and limestone valleys — the perfect Vietnam getaway
        </p>

        <br />

        <Link to="/Northen-vietnam">
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
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/11/cc/5a/26.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>Hanoi Arrival & Half-Day City Tour</p>
              <p>
             Upon arrival at Hanoi's airport, you will be transferred to your hotel in the city center. After settling in, embark on a half-day tour of Hanoi's iconic landmarks.

              Hoan Kiem Lake: Begin with a visit to Hoan Kiem Lake, the heart of Hanoi. 

              Old Quarter Exploration: Immerse yourself in the vibrant atmosphere of the Old Quarter, a maze of narrow streets filled with shops, street food vendors, and historical architecture.

             Ho Chi Minh Mausoleum Complex: (Note: Ho Chi Minh Mausoleum is closed on Mondays and Fridays. On these days, you can still visit the outside areas, including One Pillar Pagoda, Stilt House, and the fish pond.) Pay your respects at the Ho Chi Minh Mausoleum, a solemn monument dedicated to the founding father of modern Vietnam. Explore the surrounding complex, including the Presidential Palace, Ho Chi Minh's Stilt House, and the One Pillar Pagoda, a unique pagoda built in the 11th century.

             Hoa Lo Prison: Also known as the "Hanoi Hilton," this former prison offers a glimpse into Vietnam's colonial past and the hardships faced by Vietnamese revolutionaries

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/10/7b/93/38.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Hanoi – Nin Binh - Hoa Lu - Tam Coc (Bamboo Boat) - Hanoi</p>
              <p>
                Embark on a full-day excursion to Ninh Binh province, often referred to as "Halong Bay on land" due to its stunning limestone karsts and waterways.
               Hoa Lu Ancient Capital: Explore Hoa Lu, the ancient capital of Vietnam during the 10th and 11th centuries. Visit the temples dedicated to Emperor Dinh Tien Hoang and Emperor Le Dai Hanh, and learn about Vietnam's rich history.
               Tam Coc Boat Trip: Enjoy a leisurely bamboo boat ride through Tam Coc, which translates to "three caves." As the boat glides along the Ngo Dong River, admire the towering limestone cliffs, lush rice paddies, and the mysterious caves.


              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/r/33/06/8a/b3/caption.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Hanoi - Halong Bay Overnight Cruise (Private Transfer, No Guide)</p>
              <p>
                Enjoy a scenic private transfer from Hanoi to Halong Bay, a UNESCO World Heritage site.<br />
                Halong Bay Cruise: Embark on an unforgettable overnight cruise through the emerald waters of Halong Bay.<br />
                Marvel at the thousands of limestone islands and islets, explore hidden caves, kayak through secluded lagoons, and enjoy onboard activities. <br />
                Savor delicious meals featuring fresh seafood and traditional Vietnamese cuisine.<br />

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Wi8vbIWN8YTXPDlZqFV2oUbOhipuEmhHqZr52Y_jO3RNl6Ua8PcPybAy&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Halong Bay - Hanoi (Private Transfer, No Guide) - Departure </p>
              <p>
                Wake up to the stunning beauty of Halong Bay. Enjoy a final brunch on board as the cruise sails back to the harbor.
                 A private transfer will take you back to Hanoi to catch a flight back home 
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("4 Days Northern Vietnam Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Vietnam journey</p>
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

export default VietnamLanding;