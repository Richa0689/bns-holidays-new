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
    question: "What is the best time to visit Vietnam for this tour?",
    answer:
      "The best time to visit Vietnam is between October and April, when Hanoi, Halong Bay, Hoi An, and Ho Chi Minh City enjoy cooler, drier weather. December to February is ideal for the north, while the south stays warm and pleasant year-round, making it a great time to explore Ho Chi Minh City and the Mekong Delta.",
  },
  {
    question: "What is included in the 8-day Essence of Vietnam package?",
    answer:
      "The package includes hotel accommodation for 7 nights (including an overnight Halong Bay cruise), daily breakfast, domestic flights between Hanoi/Da Nang and Ho Chi Minh City, private transfers, guided city tours in Hanoi, Hoi An and Ho Chi Minh City, and the Mekong Delta excursion. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Vietnam?",
    answer:
      "Indian passport holders require a Vietnam e-visa, which can typically be processed online within a few working days. We recommend applying at least 2-3 weeks before your travel date. Our team can assist you with documentation and the e-visa application process.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Old Quarter and Ho Chi Minh Mausoleum in Hanoi, the stunning limestone karsts of Halong Bay, the lantern-lit streets of Hoi An Ancient Town, the Cu Chi Tunnels, and the bustling markets and waterways of the Mekong Delta near Ho Chi Minh City.",
  },
  {
    question: "What currency is used across Vietnam?",
    answer:
      "The Vietnamese Dong (VND) is the local currency, though US Dollars are widely accepted in tourist areas. Cards are accepted at most hotels and larger restaurants, but it is useful to carry cash for street markets, small vendors, and tips.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add extra nights in Da Nang, an extension to Phu Quoc Island, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTQGYO3Sd8SxbtJJFVJu9BWj34O5cN4FqjsYRng9lDaPxhvx05LHXq-jD&s=10"
          alt="Vietnam Tour"
        />

        <div className="hero-content">
          <h1>VIETNAM</h1>

          <p>
            Hanoi • Halong Bay • Hoi An • Ho Chi Minh City • Mekong Delta
          </p>

          <Link to="/vietnam">
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcIvnhP_1LgIeIh4HfO3GlWKkpZcM6BZkd-iK5aYFW9Q&s=10"
              alt="Hanoi Old Quarter"
            />
            <p>Hanoi Old Quarter</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaFEN8bkHehalrxbQ3x3T7vIHDjoa4Sv9vGRB_LfmGfQ&s=10"
              alt="Halong Bay"
            />
            <p>Halong Bay Cruise</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkrg-JptHrxhEku4lnf7ASjyZ1U8yfVWBUVVMZ21_a4Q&s=10"
              alt="Hoi An Ancient Town"
            />
            <p>Hoi An Lantern Town</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhR8wPj_PrvigXQLnR4ESP9uSa0HIHBGg6FLSTHjd3KGmS4_eg-jbcns0&s=10"
              alt="Ho Chi Minh City"
            />
            <p>Ho Chi Minh City</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏮 Timeless Charm of Hoi An</div>
          <div>⛵ Cruise Through Halong Bay's Karsts</div>
          <div>🛕 Rich Culture & Heritage of Hanoi</div>
          <div>🌾 Vibrant Life on the Mekong Delta</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Essence of Vietnam in 8 Days</h2>

        <p>
          From ancient temples to emerald bays, lantern-lit streets to bustling river markets — Vietnam, uncovered
        </p>

        <br />

        <Link to="/vietnam">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>8 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://media.istockphoto.com/id/1138999470/photo/shimla-mall-road-in-evening.jpg?s=612x612&w=0&k=20&c=dvFlqFxrvpFg98nVXKN9-ncV2517K_85PlgTU4hnL_c="              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>Arrival Day </p>
              <p>
                Welcome to Hanoi, the capital of Vietnam, is known for its centuries-old architecture and a rich culture with Southeast Asian, Chinese and French influences. At its heart is the chaotic Old Quarter, where the narrow streets are roughly arranged by trade. Upon arrival at the airport, you will be transferred to the hotel.<br />
                Lunch at Indian Restaurant<br/> 

             Afternoon, visit the Temple of Literature built in 1070 and regarded as the First University in Vietnam, the Hoan Kiem Lake and Ngoc Son temple and take the Cyclo tour at the Old Quarter to experience the exciting local daily life of Hanoians, shopping free around The Old Quarter that have stock of trendy to basic clothing and thousands of small craft and boutique shops offering variety of Vietnamese handicraft products
               Enjoy the Water Puppet Show- A form of folk arts originating in the north of Vietnam, in which wood-puppets play their roles according to the direction of puppeteers and singers of Cheo (a kind of traditional theatre in Vietnam) sing songs to tell the story in words

  
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-bKvLEaKVT1gaHvu9366CqVoiqvV0sKcvuAPrPoQxd_T6iC6anXf14gYq&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Hanoi – Ninh Binh - Hanoi</p>
              <p>
               Breakfast at Hotel <br/>

             Departure to visit Ninh Binh -90 km far from Hanoi.  We will visit the ancient capital of Hoa Lu with the temples of Dinh and le Dynasties. Continue to visit Tam Coc – known as Halong Bay on land <br/>

              Lunch at Indian Restaurant  <br/>

             Afternoon boat trip to visit Tam Coc, explore the beautiful Karst formations and mystery caves. Back to the pier, visit to Bich Dong Pagoda
             Late afternoon drive back to Hanoi.


              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media.istockphoto.com/id/1422834835/photo/multicolored-fishing-boats-reflected-in-the-emerald-waters-of-ha-long-bay-vietnam.jpg?s=612x612&w=0&k=20&c=s61U335ZlIBYvrv7DVbNlFuv9ZlFWwJseIf01bs1AEU="
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Hanoi City – Halong Bay Cruise </p>
              <p>
                Breakfast at Hotel and Check-out  <br/>

             Transfer to Ha Long Bay in Quang Ninh Province (around 160KM). Upon arrival in Halong Bay, boarding the Cruise for exploring wonderful Bay of Halong
              Lunch at boat while cruising around the Bay <br/>

             Afternoon: explore hundreds of beautiful karst formations arising from green, emerald water, explore Cave, swimming and enjoy Sunset on the Cruise (Program might change due to the weather and the management)
             Dinner on the Cruise. After dinner is fishing time for everyone who wishes to join

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbfBbkpOVsyYFi_UVopJg_Rie_ivHKzwkue0GB8l8zZw&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Halong Bay – Hanoi  </p>
              <p>
                Breakfast at Boat Cruise<br/>
                Continue to discover the Halong bay then check-out<br/>

               Lunch at local Restaurant (On the way)<br/>

               Transfer from Halong Bay to Hanoi.<br/> 

              Overnight in Hanoi

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEbNqsKcIwFoyxfHyxu2vd-2oI_X_Lbbtne82Rm8Z3Q&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Hanoi – Ho Chi Minh City</p>
              <p>
                Breakfast at Hotel <br/> 

             Visit Ho Chi Minh complex including Ho Chi Minh Mausoleum from outside, his house-on-stilts, the One-Pillar pagoda and Hoa Lo Prison. Continue the trip visit to the Ethnology Museum.<br/> 

             12:00 Checkout hotel<br/>  
             Lunch at Indian Restaurants<br/> 

             Transfer to Noi Bai Airport for flight to Ho Chi Minh City<br/> 
             Upon arrival in Ho Chi Minh city, your expert guide will meet you at the Airport while your private transportation brings you directly to your chosen hotel.

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYSVs_wj3eka_3AY9IlV5JU2WmEfC0bomEYyyZgu4lmQ&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Cu Chi Tunnel – Ho Chi Minh city</p>
              <p>
               In the morning drive to visit to Cu Chi Tunnels (70 km northwest of Ho Chi Minh city), an amazing complex of underground tunnels used during the Vietnam war. Drive back to Ho Chi Minh City for Lunch at Indian Restaurant.
               Afternoon we will visit the Reunification Palace, War Remnants Museum. Photo stop at Notre Dame Cathedral, General Post office.

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjy-3DFVZMOhWhVgBjlDjnCAxF61fiQMw4a6k57C-gCw&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Mekong Delta – Ho Chi Minh city</p>
              <p>
                Breakfast at Hotel, drive to Cu Chi tunnels for 1 hour 30 minute- an amazing complex of the underground tunnels used during the Vietnam War. After a short introduction to the tunnel network of more than 200 km you will have a chance to crawl into a short section of the tunnels to feel the oppressive narrowness and heat inside.<br/> 

              Lunch at Local Restaurant<br/> 

              After lunch, drive to My Tho, a prosperous town of 170,000 inhabitants of the Mekong Delta. It is noted for its exuberant orchards and immense rice fields. Enjoy boat rides on the Mekong River and along the lush canopy of water coconuts. 

              Visit an orchard on an island and taste some exotic fruits, green tea. Rowing boat along the canals and walk around the traditional villages; immerse yourself in nature when listening to Southern traditional music
             Transfer back to Ho Chi Minh City. 

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1AL_H-Ow38ngF7vTBR2HA0hECy1C7i_7e6uPIvcimA&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{ color: "blue" }}>Ho Chi Minh City – Departure  </p>
              <p>
                Breakfast at hotel. Free for shopping.<br/>
               Transfer to airport with guide for departure.


                ________________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("Essence of Vietnam - 8 Days Vietnam Tour")}
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

export default VietnamLanding;