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
      "February to May offers the most pleasant weather in Da Nang, Hoi An, and Hue, with warm, dry days and comfortable temperatures for sightseeing. June to August is hot and humid but still popular for beach time, while September to January can bring occasional rain, especially around Hue.",
  },
  {
    question: "What is included in the 5-day Central Vietnam package?",
    answer:
      "The package includes hotel accommodation for 4 nights, daily breakfast, private air-conditioned transfers, guided tours of Hoi An Ancient Town, Ba Na Hills with the Golden Bridge, and Hue's Imperial City, plus a Perfume River boat excursion. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Vietnam?",
    answer:
      "Indian passport holders can apply for a Vietnam e-Visa online before travel, valid for single or multiple entry. We recommend applying at least a week in advance to ensure smooth processing before departure. Our team can assist you with the application.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the hand-held Golden Bridge and French-inspired gardens of Ba Na Hills, the lantern-lit streets and old merchant houses of Hoi An Ancient Town, the Marble Mountains, and Hue's UNESCO-listed Imperial City with its royal tombs along the Perfume River.",
  },
  {
    question: "What currency is used in Vietnam?",
    answer:
      "The Vietnamese Dong (VND) is the official currency, though US Dollars are accepted at many hotels and larger establishments. Cards are widely accepted in cities, but it is useful to carry small denomination Dong for markets, street food, and local transport.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add a My Son Sanctuary excursion, a Hoi An cooking class, extra beach time in Da Nang, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const CentralVietnamLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpsCzpLl8i4CrbGPG2xIO-oFwbXBoxD_aHRPm7xuIbyw&s"
          alt="Central Vietnam Tour"
        />

        <div className="hero-content">
          <h1>CENTRAL VIETNAM</h1>

          <p>
            Da Nang • Ba Na Hills • Hoi An • Marble Mountains • Hue
          </p>

          <Link to="/central-vietnam">
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE7YyfSQkqPvIADr4HAPhUJous-mup05jDOzkqVHPMrg&s=10"
              alt="Golden Bridge Ba Na Hills"
            />
            <p>Golden Bridge, Ba Na Hills</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://vietnam.travel/sites/default/files/inline-images/292-Qu%E1%BA%A3ng%20Nam-tmluong50%40gmail.com-thuyen%20hoa.jpg"
              alt="Hoi An Ancient Town"
            />
            <p>Hoi An Ancient Town</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDjOcBKvG7tp6tXInuu7voIKmywLefdKseJa7uFskTg&s=10"
              alt="Marble Mountains"
            />
            <p>Marble Mountains</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiWxyki9H4owLKuOU_kbbYlV3_aBr1_qKwCxOOqTbRaLoxEJbQhwa9KCgi&s=10https://seniworld.com/wp-content/uploads/2025/10/Hue-Imperial-City-overview.jpgue Imperial City"
            />
            <p>Hue Imperial City</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🌉 The Iconic Golden Bridge</div>
          <div>🏮 Lantern-Lit Streets of Hoi An</div>
          <div>👑 Imperial Heritage of Hue</div>
          <div>📸 Scenic Coastal & Riverside Views</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Discover the Heart of Vietnam in 5 Days</h2>

        <p>
          From mountaintop gardens to lantern-lit lanes and imperial tombs — the essential Central Vietnam journey
        </p>

        <br />

        <Link to="/central-vietnam">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>5 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEiA-ovpMc1iI6Z7QDE8zRUzHC8d7iPokEKTEb3AeK7g&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>Danang Arrival - Hue </p>
              <p>
               Arrive inDanang Airport.<br/>
                Meet our guide and driver and transfer to Hue. 
               Upon arrival in Hue, check into the hotel.


              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbrC0XCjSX4MF9yC3gceBdsC0WXmuGu5OGp46vaO2reZ515RnXWAYOfNfc&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>HueCity tour</p>
              <p>
                In the morningBoat trip in Perfume river to visit Thien Mu pagoda and King Minh Mang’s tomb.<br/> 

               Lunch at Indian Restaurant<br/> 

               Afternoon: visit Imperial Citadel, Dong Ba market

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="hhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxwKDlp8lkaLttnFRH0fOt8r9OmAq9uEZUBIkHV8HkqQ&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Hue – Hoi An ancient town</p>
              <p>
                Breakfast at Hotel and checkout<br/> 
               Depart to Hoi An. Stopover to visit Lang Co fishing village.<br/>  

               Lunch at Indian Resturant <br/> 

              Afternoon take a walking tour of Hoi An to discover the historic town which used to be a prosperous seaport city during the 16th to 18th centuries.<br/> 
               Visit Hoi An colorful local market, Tan Ky old house, Fukien Assembly Hall, and the 400-year-old Japanese covered bridge.<br/>  
               Transfer for Bamboo boat ride at Cam Thanh water coconut forest

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXkzLHXU07ceVj9KAGlkfFEkn7xrDKr8Fb_sAGGfbJJNJqr9Behdhkw3o&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Hoi An – Banahills – Hoi An</p>
              <p>
                Breakfast at Hotel <br/>

                Drive to Bana hills (30km from Danang) take Cable Car which gains 5 world scores to Ba Na hill station. First Stop we will visit Linh Ung pagoda, Old wine tunnel, Orchid Garden, Le Jardin D’Amour, Golden Bridge<br/>.

               Lunch on Bana Hills with local food – Buffet<br/>

                Afternoon we will continue the trip to visit Fantasy Park then drive to Hoi An

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://product.hstatic.net/200000735165/product/ha_web__1__7679513993774a318b178ec426ba5cef_master.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Hoi An - Danang Departure</p>
              <p>
                Breakfast at Hotel and checkout (Checkout time at 12:00)<br/>
                Free for shopping<br/>
                Transfer to the airport for the departure flight 


                ________________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("Central Vietnam")}
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

export default CentralVietnamLanding;