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
      "October to April is the ideal window, with cool, dry weather across Hanoi, Ha Long Bay, and Ninh Binh. September–November offers golden rice terraces and clear skies, while December–February can be cooler and misty, especially in the north. Summer months (May–August) are hot and humid with occasional rain, so shoulder seasons are recommended for the best experience.",
  },
  {
    question: "What is included in the 5-day Northern Vietnam package?",
    answer:
      "The package includes hotel accommodation, an overnight cruise with cabin stay in Ha Long Bay, daily breakfast, private/luxury coach transfers, guided city tours in Hanoi, a boat excursion in Ninh Binh's Trang An or Tam Coc, and all sightseeing as per the itinerary. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Vietnam?",
    answer:
      "Indian passport holders require a Vietnam e-Visa, which can typically be processed online within a few working days. We recommend applying at least 2–3 weeks before your travel date. Our team can assist you with the e-Visa application and documentation.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Old Quarter and Ho Chi Minh Mausoleum in Hanoi, the limestone karsts and emerald waters of Ha Long Bay, a traditional junk boat cruise, the scenic Trang An boat ride often called 'Halong Bay on land', and the ancient temples and rice paddies of Ninh Binh.",
  },
  {
    question: "What currency is used across Vietnam?",
    answer:
      "The Vietnamese Dong (VND) is the local currency. Cards are accepted in most hotels and larger restaurants, but cash is preferred for street markets, small vendors, and local transport. We recommend carrying some local currency for convenience throughout the trip.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add a Sapa hill-station extension, extra nights in Hanoi, or upgrade your cruise cabin, our team will curate the perfect personalised experience for you.",
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
const NorthernVietnamLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxd5RvWEhYqTqkbMlYtoI5kIrg_EHbpAEUZyU3dEE2SQ&s=10"
          alt="Northern Vietnam Tour"
        />

        <div className="hero-content">
          <h1>Northern Vietnam</h1>

          <p>
            Hanoi • Ha Long Bay • Ninh Binh
          </p>

          <Link to="/northen-vietnam">
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjWviB1pDRQJoBZnvptBqW0qMZBZZI74dXE-VyJ9yVeg&s=10"
              alt="Hanoi Old Quarter"
            />
            <p>Hanoi Old Quarter</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9H-_CuQkvHnNnclzjL1adn_Fihn96lCfsU-Mp8Rj1wA&s=10"
              alt="Ha Long Bay"
            />
            <p>Ha Long Bay Cruise</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6IhU13BieFCvE-Hdf86j_bqPy-6Vdg32ZY5qlTPB6fQ3jvx-hyp5rEFw&s=10"
              alt="Trang An Ninh Binh"
            />
            <p>Trang An, Ninh Binh</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLB16UplBu1vpI8FbqEHUkjd1viYInrxjaSpLfR6Ol0fPXLBMnyEB-4io&s=10"
              alt="Ho Chi Minh Mausoleum"
            />
            <p>Ho Chi Minh Mausoleum</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>⛵ Overnight Cruise in Ha Long Bay</div>
          <div>🏮 Rich Culture of Old Hanoi</div>
          <div>🌾 Scenic Karsts & Rice Paddies of Ninh Binh</div>
          <div>🍜 Authentic Vietnamese Cuisine</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Discover the Beauty of Northern Vietnam in 5 Days</h2>

        <p>
          From bustling Hanoi streets to the emerald waters of Ha Long Bay — an unforgettable journey
        </p>

        <br />

        <Link to="/northen-vietnam">
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPl-8jZ-WI6K7gSN9P8ZJ6ydCAPgAPoPauIdNuvXu-wiyQSkD5upUeatfM&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>Hanoi arrival</p>
              <p>
               Welcome to Hanoi, the capital of Vietnam, is known for its centuries-old architecture and a rich culture with Southeast Asian, Chinese and French influences.<br /> 
               At its heart is the chaotic Old Quarter, where the narrow streets are roughly arranged by trade.<br />
                Upon arrival at the airport, you will be transferred to Hanoi for sightseeing <br />

              Visit Ho Chi Minh complex including Ho Chi Minh Mausoleum from (Outside), his house-on-stilts, the One-Pillar pagoda and Hoa Lo Prison.<br /> 

              Lunch at IndianRestaurant <br />

              Afternoon, visit the Temple of Literature built in 1070 and regarded as the First University in Vietnam, the Hoan Kiem Lake and Ngoc Son temple and take the Cyclo tour at the Old Quarter to experience the exciting local daily life of Hanoians, shopping free around The Old Quarter that have stock of trendy to basic clothing and thousands of small craft and boutique shops offering variety of Vietnamese handicraft products

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8kO2t35gIWXwSxoDznNivhfzgoYRqq4z4e5iOvIgdg&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Hanoi – Ninh Binh </p>
              <p>
             Breakfast at Hotel <br />

              Departure to visit Ninh Binh -90 km far from Hanoi.  We will visit the ancient capital of Hoa Lu with the temples of Dinh and le Dynasties. Continue to visit Tam Coc – known as Halong Bay on land<br />

               Lunch at Indian Restaurant. <br /> 

              Afternoon boat trip to visit Tam Coc, explore the beautiful Karst formations and mystery caves. Back to the pier, visit to Bich Dong Pagoda

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZMb7KCNzCVQGsdrCRly3n9tT0fMONgx3mco7nuPud_w&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Ninh Binh – Halong </p>
              <p>
                Breakfast at Hotel and Check-out <br /> 

             Transfer to Ha Long Bay in Quang Ninh Province (around 160KM). Upon arrival in Halong Bay, boarding the Cruise to explore the wonderful Bay of HalongLunch at boat while cruising around the Bay<br /> 

             Afternoon: explore hundreds of beautiful karst formations arising from green, emerald water, explore Cave, swimming and enjoy Sunset on the Cruise (Program might change due to the weather and the management)

             Dinner on the Cruise. After dinner is fishing time for everyone who wishes to join

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgY-IVL0Fm4L_9GTPnjQw0x9VaErswJ7fHptAKorzQ3D95a8d14F_pQys&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Halong – Hanoi </p>
              <p>
                Breakfast on a Boat Cruise<br /> 
             Continue to discover HalongBay then check out<br /> 
              Brunch at a Cruise Restaurant<br /> 
              Transfer from Halong Bay to Hanoi En-route visit Ceramic workshop at Dong Trieu

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS54K4ShrH5Hec9CN3B_LfHqYk3t50O2a1Ftf1nnDP-H6_BQ5lnhvnns7s&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Hanoi Departure </p>
              <p>
               Breakfast at Hotel and Free at your leisures<br /> 
              Transfer to Noi Bai International Airport for flight to departure flight

                ________________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("5 Days Northern Vietnam Tour")}
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

export default NorthernVietnamLanding;