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
    question: "What is the best time to visit Siem Reap for this tour?",
    answer:
      "November to March offers the most pleasant weather in Siem Reap, with cooler temperatures and lower humidity, making it ideal for exploring the Angkor temples. The dry season (November–April) is generally preferred, while the monsoon months (June–October) bring lush greenery but occasional heavy rain.",
  },
  {
    question: "What is included in the 4-day Cambodia – Siem Reap package?",
    answer:
      "The package includes hotel accommodation for 3 nights, daily breakfast, private air-conditioned transfers, guided tours of Angkor Wat, Angkor Thom, Bayon and Ta Prohm, a Tonle Sap Lake floating village excursion, and monument entry fees as specified in the itinerary. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Cambodia?",
    answer:
      "Indian passport holders can obtain a Cambodia e-Visa online before travel, or a visa on arrival at Siem Reap International Airport. We recommend applying for the e-Visa at least a week in advance for a smoother arrival experience. Our team can assist you with the application process.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the iconic Angkor Wat at sunrise, the enigmatic stone faces of Bayon Temple, the jungle-clad ruins of Ta Prohm made famous by Tomb Raider, the ancient walled city of Angkor Thom, and a boat excursion across Tonle Sap Lake to see its floating villages.",
  },
  {
    question: "What currency is used in Cambodia?",
    answer:
      "The US Dollar (USD) is widely used alongside the Cambodian Riel (KHR) throughout Siem Reap, and most prices at hotels, restaurants and shops are quoted in USD. It is useful to carry small denomination notes for temple entry fees, tuk-tuks, and local markets.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add a Phnom Kulen excursion, an Apsara dance dinner show, extra nights in Siem Reap, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const CambodiaLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUSYlILVN6T3MHD0JuDq--tKLUYmZacHA5Ey1vg1cd-w2HWm9jWPAKfOY&s=10"
          alt="Cambodia Siem Reap Tour"
        />

        <div className="hero-content">
          <h1>CAMBODIA</h1>

          <p>
            Siem Reap • Angkor Wat • Angkor Thom • Ta Prohm • Tonle Sap Lake
          </p>

          <Link to="/cambodia">
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
              src="https://www.shutterstock.com/image-photo/beautiful-sunrise-colorful-sky-angkor-260nw-783641479.jpg"
              alt="Angkor Wat"
            />
            <p>Angkor Wat Sunrise</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzKHzsUZbPr39LGgQwblIwZEJ1TDTaiIfPo70ndPyhNycYcrX81MZEQdgg&s=10"
              alt="Bayon Temple"
            />
            <p>Bayon Temple Faces</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ufm98DMvG4iH0n1oZmoIDQ6mdRVutYeYnHxISC2mwYGH35VxtrJM3DU&s=10"
              alt="Ta Prohm"
            />
            <p>Ta Prohm Ruins</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyZ7fvh6ioEW0YTV5iGS7lJinaUd8qHfiCokABOkrZ7vWEHPfYr_2v558&s=10"
              alt="Tonle Sap Lake"
            />
            <p>Tonle Sap Floating Village</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🛕 World Wonder: Angkor Wat</div>
          <div>🌳 Jungle-Clad Temple Ruins</div>
          <div>🚤 Tonle Sap Floating Villages</div>
          <div>📸 Ancient Khmer Heritage</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Discover the Wonders of Angkor in 4 Days</h2>

        <p>
          From sunrise temples to floating villages — the essential Siem Reap experience
        </p>

        <br />

        <Link to="/cambodia">
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
              src="https://www.cestee.com/images/59/24/5924-920w.webp"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>Siem Reap Arrival</p>
              <p>
               Upon arrival at Siem Reap airport, welcomed by our team then transfer to hotel for check in
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://c0.wallpaperflare.com/preview/965/307/634/cambodia-angkor-wat-krong-siem-reap-wallpaper.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Siem Reap</p>
              <p>
                Breakfast at Hotel. Visit the antique capital of Angkor Thom (12 century): the South Gate with its huge statues depicting the churning of the ocean of milk, the Bayon Temple, unique for its 54 towers decorated with over 200 smiling faces of Avalokiteshvara, the Phimeanakas, the Royal Enclosure, the Elephants Terrace and the Terrace of the Leper King.<br />

              Lunch at IndianRestaurant<br />
               visit to Ta Prohm, one of the area’s most beautiful temples. Ta Prohm has been relatively untouched since it was covered and retains much of its mystery, and the most famous of all the temples on the plain of Angkor: Angkor Wat. 
               The temple complex covers 81 hectares and is comparable in size to the Imperial Palace in Beijing. Itsdistinctive five towers are emblazoned on the Cambodian flag and the 12th century masterpiece is considered by art historians to be the prime example of classical Khmer art and architecture. 
               Enjoy wonderful sunset from the top ofPre Rup Temple.


              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2rg-hixeCrcCbZlw9MA29cHjibSposatvnT2STWBWJ4MiY4f-Qp1wcXU&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Siem Reap</p>
              <p>
               Breakfast at Hotel. Visit to Banteay Srey, known as Citadel of Women or a Pink Temple, and Banteay Samre Temples.<br /> 
               Lunch at IndianRestaurant<br />
               In the afternoon, we will enjoy a boat ride on the Tonle Sap Lake at KAMPONG PHLUK VILLAGE. This is the largest permanent fresh water lake in Southeast Asia and flows into the Tonle Sap River, joining the Mekong in Phnom Penh. We will see a fishermen's "floating village" with floating schools, a floating police station, etc. It is the same as a big village floating on the lake, and the "village" moves from place-to-place following water levels and current.


              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://static.ffx.io/images/$zoom_0.492%2C$multiply_0.7725%2C$ratio_1.5%2C$width_756%2C$x_0%2C$y_310/t_crop_custom/q_86%2Cf_auto/6111dca9cfeb567073bf5f3c0b801a3734e2f407"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Siem Reap – Departure</p>
              <p>
                Breakfast at hotel and checkout<br />
               Transfer to Siem Reap airport for board flight to India.

                ________________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("Cambodia - Explore Siem Reap")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Cambodian journey</p>
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

export default CambodiaLanding;