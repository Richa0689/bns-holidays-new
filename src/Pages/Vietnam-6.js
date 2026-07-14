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
    question: "What is the best time to visit Vietnam for this 6-day tour?",
    answer:
      "October to April is the most pleasant window, with cool, dry weather in Hanoi and Ha Long Bay, and warm, sunny days in Hoi An and Da Nang. December and January are especially popular, though it can get cool in the north, so a light jacket is recommended for the Ha Long Bay cruise.",
  },
  {
    question: "What is included in the Taste of Vietnam package?",
    answer:
      "The package includes 5 nights of accommodation, daily breakfast, an overnight Ha Long Bay cruise with meals onboard, private airport transfers, guided city tours in Hanoi and Hoi An, a domestic flight between Hanoi and Da Nang, and all entrance fees mentioned in the itinerary. International flights and personal expenses are not included.",
  },
  {
    question: "Do Indian passport holders need a visa for Vietnam?",
    answer:
      "Yes, Indian passport holders require a Vietnam e-Visa, which can be applied for online and typically takes 3–5 working days to process. We recommend applying at least 2–3 weeks before your travel date, and our team can guide you through the documentation.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Old Quarter and Hoan Kiem Lake in Hanoi, the limestone karsts and emerald waters of Ha Long Bay, the ancient lantern-lit streets of Hoi An, the Marble Mountains near Da Nang, and the Golden Bridge held up by giant stone hands at Ba Na Hills.",
  },
  {
    question: "What currency is used in Vietnam?",
    answer:
      "The Vietnamese Dong (VND) is the official currency. Cash is preferred for street markets and smaller vendors, while cards are accepted at hotels and larger restaurants. It's a good idea to carry small denominations for tipping guides and drivers.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be tailored to your preferences, travel dates, and budget. Whether you'd like extra nights in Ho Chi Minh City, a Sapa extension, or upgraded cruise cabins, our team will curate the perfect personalised experience for you.",
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHpAqjUxLDtXgtOowyIpq_iAp2fHxiFz1Ds0yPyJQiqA&s=10"
          alt="Vietnam Tour"
        />

        <div className="hero-content">
          <h1>VIETNAM</h1>

          <p>
            Hanoi • Ha Long Bay • Ninh Binh • Da Nang • Hoi An
          </p>

          <Link to="/taste-of-vietnam">
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQskfIzuE6kb03-UgOqP_uFljfJIT4odWM_yhZ8VMAmFg&s=10"
              alt="Ha Long Bay"
            />
            <p>Ha Long Bay Cruise</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxYSQa6leYboJ69ugvgJwZXKDSQcL8VBq6e1zhQnRtAw&s=10"
              alt="Hanoi Old Quarter"
            />
            <p>Hanoi Old Quarter</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcgdP4bKV9Pfz7kbY7Q6aTHx805laBSobDsso2tXJ8C0I4_bfOnXjiPK80&s=10"
              alt="Hoi An Ancient Town"
            />
            <p>Hoi An Lantern Town</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_czHZlU28_6U0nND3XY1D7Cvo9nQeWQp5y-gMD2y0eg&s=10"
              alt="Ba Na Hills Golden Bridge"
            />
            <p>Golden Bridge, Ba Na Hills</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>⛵ Overnight Cruise on Ha Long Bay</div>
          <div>🏮 Lantern-Lit Streets of Hoi An</div>
          <div>🌉 The Iconic Golden Bridge</div>
          <div>📸 North-to-Central Vietnam Journey</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Best of Vietnam in 6 Days</h2>

        <p>
          From misty limestone karsts to golden lantern-lit streets — the ultimate taste of Vietnam
        </p>

        <br />

        <Link to="/taste-of-vietnam">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>6 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://592hub.com/images/events/indian-arrival-day-2026-hero.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>Arrival Day </p>
              <p>
                Welcome to Hanoi, the capital of Vietnam, is known for its centuries-old architecture and a rich culture with Southeast Asian, Chinese and French influences.<br />
                 At its heart is the chaotic Old Quarter, where the narrow streets are roughly arranged by trade. Upon arrival at the airport, you will be transferred to your hotel.<br />

              Lunch at Indian Restaurant<br />

             Afternoon, visit the Temple of Literature built in 1070 and regarded as the First University in Vietnam, the Hoan Kiem Lake and Ngoc Son temple and take the Cyclo tour at the Old Quarter to experience the exciting local daily life of Hanoians, shopping free around The Old Quarter that have stock of trendy to basic clothing and thousands of small craft and boutique shops offering variety of Vietnamese handicraft products<br />

             Enjoy the Water Puppet Show- A form of folk arts originating in the north of Vietnam, in which wood-puppets play their roles according to the direction of puppeteers and singers of Cheo (a kind of traditional theater in Vietnam) sing songs to tell the story in words

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRRGniJ9hc5CvecnBWHU_KkP8mlb9ywQeWhmyz-yU117o39-07FUhnR52b&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}><br />Hanoi City – Halong Bay Cruise </p>
              <p>
                Breakfast at Hotel and Check-out<br />

             Transfer to Ha Long Bay in Quang Ninh Province (around 160KM). Upon arrival in Halong Bay, boarding the Cruise to explore the wonderful Bay of Halong<br />
             Lunch at boat while cruising around the Bay.<br />

             Afternoon: explore hundreds of beautiful karst formations arising from green, emerald water, explore Cave, swimming and enjoy Sunset on the Cruise (Program might change due to the weather and the management)<br />

             Dinner on the Cruise. After dinner is fishing time for everyone who wishes to join

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRXisZ9RiFihzj1ldYIQ5EdvChwVZUKKCjrLMQYPUrlw&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Halong Bay – Hanoi  </p>
              <p>
                Breakfast on a Boat Cruise<br />
              Continue to discover Halong bay then check-out<br />

               Lunch at Local Restaurant (En-Route to Hanoi)<br />
              Transfer from Halong Bay to Hanoi. 


              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcjGNOKNtVbe8-mKDzagKjZg6YtxYvONfQSwtTYQQ-pqcsHE3aFF2QJYY9&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Hanoi - Ho Chi Minh City – Cu Chi tunnels</p>
              <p>
                This morning, transfer for flight to Ho Chi Minh City, upon arrival, transfer for Lunch at Indian restaurant.<br />
              After lunch, drive to visit to Cu Chi Tunnels (70 km northwest of Ho Chi Minh city), an amazing complex of underground tunnels used during the Vietnam war.<br />
               Drive back to Ho Chi Minh City for Lunch at Indian Restaurant.<br />
              Afternoon we will visit the Reunification Palace, War Remnants Museum. Photo stop at Notre Dame Cathedral, General Post office

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://t3.ftcdn.net/jpg/01/33/81/96/360_F_133819686_MokZV6oVwiZ7xuGQYH1LYGgDFRvxZDMm.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Mekong Delta</p>
              <p>
              Breakfast at Hotel 

             Drive to My Tho, a prosperous town of 170,000 inhabitants of the Mekong Delta.<br /> 
             It is noted for its exuberant orchards and immense rice fields. Enjoy boat rides on the Mekong River and along the lush canopy of water coconuts<br />. 
              Lunch at a LocalRestaurant<br />
              Visit an orchard on an island and taste some exotic fruits, green tea. Rowing boat along the canals and walk around the traditional villages; immerse yourself in nature when listening to Southern traditional music<br />
             Transfer back to Ho Chi Minh City. 

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/01/41/43/66/saigon-airport.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Ho Chi Minh City – Departure  </p>
              <p>
               Breakfast at hotel. Free for shopping<br />.
               Transfer to airport for departure.


                ________________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("Taste of Vietnam - 6 Days Tour")}
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