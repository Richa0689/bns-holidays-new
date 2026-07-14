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
    question: "What is the best time to visit Vietnam and Cambodia for this tour?",
    answer:
      "November to March is the ideal window, offering dry, mild weather across Ho Chi Minh City, Siem Reap, Phnom Penh and Hanoi. April to May can be hot and humid, especially around Angkor, while June to October brings the monsoon season with short, heavy showers in both countries.",
  },
  {
    question: "What is included in the 8-day Vietnam & Cambodia package?",
    answer:
      "The package includes hotel accommodation for 7 nights, daily breakfast, private/coach transfers, domestic flights between Ho Chi Minh City–Siem Reap and Phnom Penh–Hanoi, guided city tours, the Cu Chi Tunnels and Mekong Delta excursions, Angkor Wat and Angkor Thom sightseeing, and the Royal Palace tour in Phnom Penh. International flights, visas, and personal expenses are not included.",
  },
  {
    question: "Do I need a visa for Vietnam and Cambodia?",
    answer:
      "Indian passport holders can apply for an e-Visa for both Vietnam and Cambodia entirely online, and approval typically takes 3–5 working days. We recommend applying at least 2–3 weeks before travel, and our team can guide you through the documentation.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Cu Chi Tunnels and Mekong Delta near Ho Chi Minh City, the temples of Angkor Wat, Angkor Thom and Ta Prohm in Siem Reap, the Royal Palace and Silver Pagoda in Phnom Penh, and Hanoi's Old Quarter, Ho Chi Minh Mausoleum complex and Temple of Literature.",
  },
  {
    question: "What currency is used in Vietnam and Cambodia?",
    answer:
      "Vietnam uses the Vietnamese Dong (VND), while Cambodia largely runs on the US Dollar (USD) alongside its own Riel. Cards are accepted in most hotels and larger restaurants, but it's useful to carry small notes for markets, tuk-tuks, and temple entry fees.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be tailored to your travel dates, pace, and budget. Whether you'd like additional nights in Halong Bay, a beach extension in Phu Quoc, or upgraded hotels, our team will curate the perfect personalised experience for you.",
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
const VietnamCambodiaLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-KkBhrke3U8kLf3F1CyYAX_UomFs92fzhRuOQwt5BkF7e-FGGsGFO5eU&s=10"
          alt="Vietnam and Cambodia Tour"
        />

        <div className="hero-content">
          <h1>Vietnam & Cambodia</h1>

          <p>
            Ho Chi Minh City • Mekong Delta • Siem Reap • Angkor Wat • Phnom Penh • Hanoi
          </p>

          <Link to="/Vietnam-Cambodia">
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPsPw7goS23s9AtWMV9-mFd0IttjjBQzcAerrhauJ7fyL-hMEFW56giVA&s=10"
              alt="Ho Chi Minh City"
            />
            <p>Ho Chi Minh City</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPnaAAUxLdM--rRYKgfFrs8rqeo7Gnwynzy0C4G5AD1g&s=10"
              alt="Angkor Wat"
            />
            <p>Angkor Wat, Siem Reap</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ3ihGvXxqvqlXBMkDEDquJqc5teoVoFtgj7BKcTu9NQ&s=10"
              alt="Royal Palace Phnom Penh"
            />
            <p>Royal Palace, Phnom Penh</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://www.shutterstock.com/image-photo/hanoi-vietnam-07-17-2024-260nw-2490464587.jpg"
              alt="Hanoi Old Quarter"
            />
            <p>Hanoi Old Quarter</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🛕 The Ancient Temples of Angkor</div>
          <div>🚤 Serene Boat Rides Through the Mekong Delta</div>
          <div>🏯 Royal Heritage of Phnom Penh</div>
          <div>🏮 The Old-World Charm of Hanoi</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Discover Two Timeless Cultures in 8 Days</h2>

        <p>
          From bustling Saigon streets to the ancient temples of Angkor and the lakeside charm of Hanoi — the ultimate Vietnam & Cambodia journey
        </p>

        <br />

        <Link to="/Vietnam-Cambodia">
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrKapij524aO73hhN_mNKqh5LiFE2tUyzwEn_CdVPRbqggvCGLND1G11s&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>Hanoi - Arrival (Saigon)</p>
              <p>
                Welcome to Hanoi, the capital of Vietnam, is known for its centuries-old architecture and a rich culture withSoutheast Asian, Chinese and French influences.<br/>
                 At its heart is the chaotic Old Quarter, where the narrow streets are roughly arranged by trade. Upon arrival at the airport, you will be transferred to the hotel.<br/> 
                 Check in hotel in Hanoi.<br/>
                Lunch at Indian Restaurant<br/>
                Afternoon, Ho Chi Minh Complex, Temple of Literature built in 1070 and regarded as the First University in Vietnam, the Hoan KiemLake and Ngoc Son temple and take the Cyclo tour at the Old Quarter to experience the exciting local daily life ofHanoian, shopping free around The Old Quarter that have stock of trendy to basic clothing and thousands of smallcraft and boutique shops offering variety of Vietnamese handicraft products<br/>
                Enjoy the Water Puppet Show- A form of folk arts originating in the north of Vietnam, in which wood-puppets playtheir roles according to the direction of puppeteers and singers of Cheo (a kind of traditional theatre in Vietnam) singsongs to tell the story in words

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-SPvfhydshosZrCLP3_YakcqDMlg8MdeP9pKsyu1d2wiGz8kX_w6TIGPY&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Hanoi – Ninh Binh - Hanoi</p>
              <p>
                Breakfast at Hotel <br/>

              Departure to visit Ninh Binh -90 km far from Hanoi.<br/>  
              We will visit the ancient capital of Hoa Lu with the temples of Dinh and le Dynasties<br/>. 
              Continue to visit Tam Coc – known as Halong Bay on land<br/>

               Lunch at Indian Restaurant.<br/>  

                Afternoon boat trip to visit Tam Coc, explore the beautiful Karst formations and mystery caves. Back to the pier, visit to Bich Dong Pagoda<br/>
                Late afternoon drive back to Hanoi.

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrEEjN47rAVmmF-4sSpslz5hH21x479v5_I86i6gIQHEBRXnkmeSPDrgc&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Hanoi - Halong Bay</p>
              <p>
                Breakfast at Hotel and Check-out<br/>

               Transfer to Ha Long Bay in Quang Ninh Province (around 160KM). Upon arrival in Halong Bay, boarding the Cruise for exploring wonderful Bay of Halong<br/>
              Lunch at boat while cruising around the Bay
              Afternoon: explore hundreds of beautiful karst formations arising from green, emerald water, explore Cave, swimming and enjoy Sunset on the Cruise (Program might change due to the weather and the management)<br/>

              Dinner on the Cruise. After dinner is fishing time for everyone who wishes to join<br/>
              Overnight on the Cruise

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://wander-lush.org/wp-content/uploads/2022/11/Hanoi-to-Halong-Bay-transport-guide-2023-new-DP-Junk-Boat.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Halong Bay – Hanoi</p>
              <p>
               Breakfast at Boat Cruise. Continue to discover the Halong bay then check-out<br/>
               Brunch on Cruise Restaurant. Transfer from Halong Bay back to Hanoi. 


              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzu6WYMiW8bVO5Uml86eJIfnksW2J0hjjwtnDVxHoe4eKXV53zTo7Hn-o&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Hanoi - Siem Reap</p>
              <p>
                Breakfast at Hotel<br/>
                Check out from hotel and Transfer to the airport for the flight to Siem Reap <br/>
                Upon arrival at Siem Reap airport, welcomed by our team then transfer to hotel for check in

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxUOkhyGFx9_mWKD4veh4ROvfAvz1ssW41mNan1w4JvA&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Siem Reap</p>
              <p>
               Breakfast at Hotel. 

               Visit the antique capital of Angkor Thom (12 century): the South Gate with its huge statues depicting the churning ofthe ocean of milk, the Bayon Temple, unique for its 54 towers decorated with over 200 smiling faces ofAvolokitesvara, the Phimeanakas, the Royal Enclosure, the Elephants Terrace and the Terrace of the Leper King. <br/>

               Lunch at IndianRestaurant <br/>

               Visit to Ta Prohm, one of the area’s most beautiful temples. Ta Prohm has been relatively untouched since it wasdiscovered and retains much of its mystery, and the most famous of all the temples on the plain of Angkor: AngkorWat <br/>. 
               The temple complex covers 81 hectares and is comparable in size to the Imperial Palace in Beijing.  <br/>
               Itsdistinctive five towers are emblazoned on the Cambodian flag and the 12th century masterpiece is considered by arthistorians to be the prime example of classical Khmer art and architecture. Enjoy wonderful sunset from the top ofPre Rup Temple. <br/>

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGztfNlwlsYq0_nz_TngPD-VZ4fGO-b7ky0ssHAaKdK7jkiPUO_f71Py0&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Siem Reap</p>
              <p>
                Breakfast at Hotel.<br/> 
               Visit to Banteay Srey, known as Citadel of Women or a Pink Temple, and Banteay Samre Temples<br/>

              Lunch at IndianRestaurant<br/>

              In the afternoon, we will enjoy a boat ride on the Tonle Sap Lake at KAMPONG PHLUK VILLAGE.<br/> 
              This is the largepermanent fresh-water lake in Southeast Asia and flows into Tonle Sap River, joining the Mekong in Phnom Penh.We will see a fishermen's "floating village" with floating schools, floating police station, etc. <br/>
              It is same as a big villagefloating on the lake, and the "village" moves from place-to-place following water levels and current.

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/1a/be/c5/88/siem-reap-international.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{ color: "blue" }}>Siem Reap – Departure</p>
              <p>
               Breakfast at hotel and checkout<br/>
               Transfer to Siem Reap airport for board flight to India.

              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("8 Days Vietnam & Cambodia Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Vietnam & Cambodia journey</p>
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

export default VietnamCambodiaLanding;