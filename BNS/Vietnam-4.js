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
    question: "What is the best time to visit Southern Vietnam for this tour?",
    answer:
      "The dry season from December to April offers the most pleasant weather across Ho Chi Minh City, the Mekong Delta and Cu Chi, with warm days and minimal rainfall. The wet season (May–November) brings brief afternoon showers but lush green landscapes across the delta.",
  },
  {
    question: "What is included in the 5-day Southern Vietnam package?",
    answer:
      "The package includes hotel accommodation for 4 nights, daily breakfast, private/coach transfers between cities, guided city tours in Ho Chi Minh City, the Cu Chi Tunnels excursion, and a Mekong Delta boat cruise with floating market visit. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Vietnam?",
    answer:
      "Indian passport holders require a Vietnam e-visa, which can typically be obtained online within a few working days. We recommend applying at least 2–3 weeks before your travel date. Our team can assist you with documentation and application.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Reunification Palace, Notre-Dame Cathedral and Ben Thanh Market in Ho Chi Minh City, the historic Cu Chi Tunnels, the floating markets and lush waterways of the Mekong Delta, and the vibrant street life of Saigon by night.",
  },
  {
    question: "What currency is used across Vietnam?",
    answer:
      "The Vietnamese Dong (VND) is the local currency. Cards are accepted in most hotels and larger restaurants, but cash is useful for markets, street food and small vendors. We recommend carrying some local currency at all times.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to extend your stay in Ho Chi Minh City, add a Phu Quoc beach extension, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const SouthernVietnamLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5-_TuVDGpeFPRXuG4fh6PfVPns2_wqs7fAK95SEtDNyqI-aRpjhd1s88&s=10"
          alt="Southern Vietnam Tour"
        />

        <div className="hero-content">
          <h1>Southern Vietnam</h1>

          <p>
            Ho Chi Minh City • Cu Chi Tunnels • Mekong Delta • Can Tho Floating Market
          </p>

          <Link to="/Southern-Vietnam">
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
              src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=800&auto=format&fit=crophttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA6cZwkyPMfKEq-4T_9s1RviJnbNaNL8UWxI3wHyzSKqwtp3QD1DQGYg-D&s=10"
              alt="Ho Chi Minh City"
            />
            <p>Ho Chi Minh City Skyline</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0lkHp6UzGeNm5Cmx_KFWMDYDqcwzigCzEDuOxMoEdo6E2ZfHlJoTPV7aN&s=10"
              alt="Cu Chi Tunnels"
            />
            <p>Cu Chi Tunnels</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaCBgSRKs7ZkJnfvBkFTXrXwAP2UGWYYNfbaDjvRJOvg&s=10"
              alt="Mekong Delta"
            />
            <p>Mekong Delta</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf5o7l5j9aIaZ_U6M4xy-C11Vl4FmPe26qotWnYE-nnA&s=10"
              alt="Floating Market"
            />
            <p>Floating Market</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏙️ Vibrant Saigon City Life</div>
          <div>🕳️ Historic Cu Chi Tunnels</div>
          <div>🚤 Serene Mekong River Cruise</div>
          <div>🥭 Colourful Floating Markets</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Discover the Heart of Southern Vietnam in 5 Days</h2>

        <p>
          From bustling city streets to tranquil river deltas — the ultimate Southern Vietnam escape
        </p>

        <br />

        <Link to="/Southern-Vietnam">
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
              src="https://www.shutterstock.com/shutterstock/videos/4003362621/thumb/1.jpg?ip=x480"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>HCMC arrival</p>
              <p>
                Arrival at the airport in Ho Chi Minh City.<br />
                 Meet our guide at Tan Son Nhat airport and Transfer to Hotel (Check in time at 14:00)
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDuX0ULEwEYsmXBWP947SK7gwKCRmMQaDoTX33g8kjd5U8pGLZqyB_DQQ&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Cu Chi tunnel – City tour</p>
              <p>
               Breakfast at Hotel <br />

             Drive to the outskirts of Ho Chi Minh City for a visit to Cu Chi tunnel, a well-known historical vestige of the Vietnamese revolution.<br />
              As a distinctive architecture, this cobweb-like tunnel complex is a network of underground dug-outs of over 200 kilometers long, consisting of many layers and turnings with meeting, living and fighting quarters.<br />

             Lunch at IndianRestaurant<br />

             Afternoon we will visit the Reunification Palace, Notre Dame Cathedral, Saigon Post Office, Ben Thanh market<br />
             Overnight at Hotel in Ho Chi Minh City<br />
             Meal Plan: Breakfast | Lunch
 

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjy-3DFVZMOhWhVgBjlDjnCAxF61fiQMw4a6k57C-gCw&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Mekong Delta – Ho Chi Minh City </p>
              <p>
                Breakfast at Hotel <br />

              After breakfast, depart from the southern economic hub of Ho Chi Minh City to the area referred to locally as ‘the rice bowl of Vietnam’ (My Tho province), Enjoy a boat ride on the Mekong River and visit an orchard on an island.<br />
               On the way, stop at the VinhTrang Pagoda, a very beautiful and well-maintained sanctuary.<br />

               Lunch at Mien Tay Song Nuoc Restaurant with local Food.<br />

              Drive back to Saigon, on the way we will visit China town with Thien Hau Temple then we will enjoy Panorama of Ho Chi Minh city on Bitexco tower.<br />

               Overnight at Hotel in Ho Chi Minh City<br />
              Meal Plan: Breakfast | Lunch

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQWdYLXPZuKLkETPheaWgknwF9B39o-w1wjPFo3BBwFFR1Qd7IEwFqCXM&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Ho Chi Minh City – Vung Tau – Ho Chi Minh City</p>
              <p>
                Breakfast at Hotel <br />

             Depart from Ho Chi Minh City to Vung Tau beach by bus, traveling by immense rubber and cashew nut plantations, as well as scenic rice fields.<br />
              On the way to Vung Tau, you will visit the Large House (Nha Lon) and its temples at Long Son Island. Large House is a place to celebrate festivals, with a school, a market, a Ghe Sam preserving house, and Ong Tran's graveyard.<br />

              Arriving in Vung Tau, the capital of Ba Ria Vung Tau Province, you will visit the White House Palace (a summer residence of the last emperor Bao Dai), offering a wonderful view of the beach and the city.  <br />
              You will visit Niet Ban TinhXa, Nirvana Meditation Retreat and Thich Ca Phat Dai, a Buddhist shrine. You will also visit a French-built light house and the giant Jesus Christ image as optional choices.<br /> 

               You will have lunch at Local restaurant then have swim at the Bai Sau Beach<br />. 
               Drive back to Saigon.<br />

             Overnight at Hotel in Ho Chi Minh City<br />
             Meal Plan: Breakfast | Lunch


              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://thumbs.dreamstime.com/b/photo-tan-son-nhat-international-airport-ho-chi-minh-city-vietnam-june-rd-features-busy-terminal-area-adults-various-460487774.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Ho Chi Minh city – Departure</p>
              <p>
                Breakfast at Hotel <br />
              Free for shopping<br />
             Transfer to the airport for departure flight

              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("5 Days Southern Vietnam Tour")}
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

export default SouthernVietnamLanding;