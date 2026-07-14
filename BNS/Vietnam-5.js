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
      "The dry season from December to April offers the most pleasant weather in Ho Chi Minh City and the Mekong Delta, with lower humidity and minimal rainfall. The wet season (May–November) brings brief afternoon showers but lush, green scenery across the delta.",
  },
  {
    question: "What is included in the 4-day Southern Vietnam package?",
    answer:
      "The package includes hotel accommodation for 3 nights, daily breakfast, private air-conditioned transfers, a guided Ho Chi Minh City tour, the Cu Chi Tunnels excursion, and a full-day Mekong Delta boat tour with lunch. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Vietnam?",
    answer:
      "Indian passport holders require a Vietnam e-visa, which can typically be obtained online within 3–5 working days. We recommend applying at least 2 weeks before your travel date. Our team can assist you with the application process.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Reunification Palace, Notre-Dame Cathedral and Ben Thanh Market in Ho Chi Minh City, the historic Cu Chi Tunnels, and the floating markets and lush waterways of the Mekong Delta.",
  },
  {
    question: "What currency is used across Vietnam?",
    answer:
      "The Vietnamese Dong (VND) is the official currency. Cards are accepted in most hotels and larger restaurants, but it is useful to carry cash for markets, street food, and small vendors. US Dollars are also widely accepted in tourist areas.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add extra nights in Ho Chi Minh City, a Phu Quoc Island extension, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKuqqoNIpKHUYaJao0tuYvL3DvHCynSBWYZG5UdgLcIipdAG-5aDHrLDE&s=10"
          alt="Southern Vietnam Tour"
        />

        <div className="hero-content">
          <h1>Southern Vietnam</h1>

          <p>
            Ho Chi Minh City • Cu Chi Tunnels • Mekong Delta
          </p>

          <Link to="/southern-vietnam">
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0iEwiNot19u2OxwxmxnYu0RDyAfgI7xPiGtohXn-7QZ3P-WxhM-5boyO&s=10"
              alt="Ho Chi Minh City"
            />
            <p>Ho Chi Minh City Skyline</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7OLVWeM5D3xpInTIL3qg0W6xZDwtIyYo7vvk7KdvEtLM6_VOWB65bI4&s=10"
              alt="Cu Chi Tunnels"
            />
            <p>Cu Chi Tunnels</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://media.istockphoto.com/id/1705694439/photo/vietnamese-women-selling-fruits-on-floating-market-mekong-river-delta-vietnam.jpg?s=612x612&w=0&k=20&c=mShX73WHVtnfOiQ68xjApM1iuPcPv89IsnJeN2aVQoQ="
              alt="Mekong Delta"
            />
            <p>Mekong Delta</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_goBwyFc0k0gzCEN2ix0R_F5jdgPMklqmrtGPUgWPu-pFPd4QrUQ9Rwrd&s=10"
              alt="Ben Thanh Market"
            />
            <p>Ben Thanh Market</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏯 Rich Wartime History</div>
          <div>🛶 Floating Markets & Waterways</div>
          <div>🛍️ Vibrant City Markets</div>
          <div>🍜 Authentic Southern Vietnamese Cuisine</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Discover the Heart of Southern Vietnam in 4 Days</h2>

        <p>
          From bustling city streets to serene river deltas — an unforgettable Southern Vietnam escape
        </p>

        <br />

        <Link to="/southern-vietnam">
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA_Xo9BwuPfgUz-t4qkC6wdmIJBB-JvxXRZsYHcZuveccyZdMpSstHWTo&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>Saigon Arrival (No Guide)</p>
              <p>
                Upon arrival, you will be transferred to your hotel.<br /> 
                Enjoy the rest of the day at your leisure to explore the city on your own.


              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://image.kkday.com/v2/image/get/w_960,c_fit,q_55,wm_auto/s1.kkday.com/product_19590/20180702071211_p8Ss4/jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Saigon - Half-Day City Tour - Cu Chi Tunnels</p>
              <p>
                Delve into Saigon's history and explore its underground network.<br /> 
             Notre Dame Cathedral: Begin with a visit to the Notre Dame Cathedral, a stunning example of French colonial architecture<br /> .

             Central Post Office: Located next to the cathedral, the Central Post Office is another architectural gem designed by Gustave Eiffel.<br /> 

             Independence Palace: Explore the Independence Palace, formerly the Presidential Palace, a significant landmark in Vietnam's history.<br /> 

             War Remnants Museum: Visit the War Remnants Museum, which provides a sobering look at the Vietnam War through exhibits of military equipment, photographs, and artifacts.<br /> 

             Cu Chi Tunnels: In the afternoon, journey to Cu Chi Tunnels, an extensive network of underground tunnels used by Viet Cong soldiers during the Vietnam War. Explore the tunnels and learn about the ingenuity and resilience of the Vietnamese people.


              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9051Ow3hLAdf2LhPCPnYI9K6CzcV3tlW2miFicCGyxEqo4rSRGK9Rij41&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}><br /> Saigon – Mekong (My Tho Boat Trip)</p>
              <p>
                Experience the beauty and tranquility of the Mekong Delta<br />.

             Embark on a boat trip along the Mekong River to My Tho, a town in the heart of the Mekong Delta. <br />
             Visit a local coconut candy factory, sample tropical fruits, and enjoy traditional music performances.<br /> 
             Take a sampan ride through the narrow canals, experiencing the unique lifestyle of the Mekong Delta residents.


              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRJCmC-tJbRzEf09-sjyXW33iGqS-hLNdLxjgc132vgNOYwybhuZVjoek&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Saigon Departure (No Guide)</p>
              <p>
               Enjoy a final breakfast in Saigon before transferring to the airport for your departure flight<br />.
              This itinerary provides a comprehensive overview of Vietnam's highlights, offering a blend of cultural experiences, historical insights, and natural beauty.<br /> 
              Get ready to discover the magic of Vietnam!

                ________________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("Southern Vietnam 4 Days Tour")}
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