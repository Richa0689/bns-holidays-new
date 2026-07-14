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
      "The best time to visit Vietnam is between October and April, when the weather across Hanoi, Ha Long Bay, Hoi An and Ho Chi Minh City is dry and pleasant. Winters (November–February) are cooler in the north, while the south stays warm year-round, making it ideal for sightseeing and cruising.",
  },
  {
    question: "What is included in the 8-day Vietnam At A Glance package?",
    answer:
      "The package includes hotel accommodation for 7 nights, daily breakfast, an overnight Ha Long Bay cruise with meals, domestic flights between cities, guided city tours in Hanoi, Hoi An and Ho Chi Minh City, and all transfers by private/luxury coach. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Vietnam?",
    answer:
      "Indian passport holders require a Vietnam e-Visa, which can usually be processed online within a few working days. We recommend applying at least 2–3 weeks before your travel date. Our team can assist you with the e-Visa application and documentation.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Old Quarter and Hoan Kiem Lake in Hanoi, the limestone karsts and emerald waters of Ha Long Bay, the lantern-lit ancient town of Hoi An, the Cu Chi Tunnels, and the bustling streets and landmarks of Ho Chi Minh City including the Notre-Dame Cathedral and Ben Thanh Market.",
  },
  {
    question: "What currency is used across Vietnam?",
    answer:
      "The Vietnamese Dong (VND) is the local currency. Major hotels, restaurants and malls accept cards, but cash is useful for markets, street food and small purchases. We recommend carrying some US Dollars as well, since they are widely exchanged.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add Sapa, Ninh Binh, or Phu Quoc island, or upgrade your hotels and cruise cabin, our team will curate the perfect personalised experience for you.",
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
          src="https://www.namasteindiatrip.com/wp-content/uploads/2019/09/Ha-Long-Bay-Travel-HD.jpg"
          alt="Vietnam Tour"
        />

        <div className="hero-content">
          <h1>VIETNAM</h1>

          <p>
            Hanoi • Ha Long Bay • Hoi An • Ho Chi Minh City
          </p>

          <Link to="/Vietnam-Glances">
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRWKpgighCummAj3TMHjRVMzR8M0TSv4-7Ug3xu80hOtrE8wja8-YtXXA&s=10"
              alt="Hanoi Old Quarter"
            />
            <p>Hanoi Old Quarter</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdo1YdydcbVzHd7vWBUKwrbp7vXKWbpG4yTZI9sW8FWbt1bAdT3iPy9-Q&s=10"
              alt="Ha Long Bay"
            />
            <p>Ha Long Bay</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn32sxPq8pnYCDdGzSnyYzxaW4vXo0QJ1ejvuiGW6JnH2HmCZFrHWQmJT3&s=10"
              alt="Hoi An Ancient Town"
            />
            <p>Hoi An Ancient Town</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxpkfeY7yQaRNE2HkaOEDopm-dJxXdbcOMnSUtqugw3Q&s=10"
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
          <div>🚢 Overnight Ha Long Bay Cruise</div>
          <div>🏮 Lantern-Lit Streets of Hoi An</div>
          <div>🍜 Authentic Vietnamese Flavours</div>
          <div>🛺 Vibrant City Life of Saigon</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Discover Timeless Vietnam in 8 Days</h2>

        <p>
          From misty limestone islands to lantern-lit alleys and buzzing city streets — the ultimate Vietnam At A Glance
        </p>

        <br />

        <Link to="/Vietnam-Glances">
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbcLNXGm_OnaJEzp-taPMsGGagagNbxJTWKCB875xaOKGxmdzY2-u91zEG&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>Arrival Day </p>
              <p>
               Welcome to Hanoi, the capital of Vietnam, is known for its centuries-old architecture and a rich culture with Southeast Asian, Chinese and French influences<br/> 
               At its heart is the chaotic Old Quarter, where the narrow streets are roughly arranged by trade. Upon arrival at the airport, you will be transferred to the hotel.<br/> 

             Lunch at Indian Restaurant <br/> 

              Afternoon, visit the Temple of Literature built in 1070 and regarded as the First University in Vietnam, the Hoan Kiem Lake and Ngoc Son temple and take the Cyclo tour at the Old Quarter to experience the exciting local daily life of Hanoians, shopping free around <br/> 
              The Old Quarter that have stock of trendy to basic clothing and thousands of small craft and boutique shops offering variety of Vietnamese handicraft products<br/> 

              Enjoy the Water Puppet Show- A form of folk arts originating in the north of Vietnam, in which wood-puppets play their roles according to the direction of puppeteers and singers of Cheo (a kind of traditional theater in Vietnam) sing songs to tell the story in words

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvq0VUDHq89Y3EleBUBVfyfmLb0mHscXVUsFI1G8sjGRhjMS_QNU2fzN4&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Hanoi – Halong Bay</p>
              <p>
               Breakfast at Hotel and Check-out <br/> 

               Transfer to Ha Long Bay in Quang Ninh Province (around 160KM). Upon arrival in Halong Bay, boarding the Cruise to explore the wonderful Bay of Halong <br/> .

              Lunch at boat while cruising around the Bay <br/> 

              Afternoon: explore hundreds of beautiful karst formations arising from green emerald water, explore Cave, swimming and enjoy Sunset on the Cruise (Program might change due to the weather and the management) <br/> 

              Dinner on the Cruise. After dinner is fishing time for everyone who wishes to join

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTqdtNrT0aRObwtmeRwVPaefgKlW3KHACWqS-IP2vnJw&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Halong Bay – Danang – Hoi An</p>
              <p>
                Breakfast on a Boat Cruise<br/>
               Continue to discover Halong bay then check-out<br/>
               Brunchat Cruise Restaurant<br/>
               Transfer from Halong Bay to Hanoi for the flight to Danang. Upon arrival in Danang, You are welcomed by our team and transfer to Hoi An

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ61uGeMQqasbukqa839Ep5blhcekZm5mzav5O-tS1HqKKpI6WPpsFgjKPe&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Hoi An - Danang - Bana hills </p>
              <p>
               Breakfast at Hotel <br/>

              Drive to Bana hills (30km from Danang) take Cable Car which gains 5 world scores to Ba Na hill station<br/>.
               First Stop we will visit Linh Ung pagoda, Old wine tunnel, Orchid Garden, Le Jardin D’Amour and famous Golden Bridge<br/>.

             Lunch on Bana Hills with local food 

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpQ2fyyDHn4X2km_kh9UCnH680LjztF7-MmWb_ObMCTg&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Hoi An - Danang – Hue </p>
              <p>
                In the morning, take a walking tour of Hoi An to discover the historic town which used to be a prosperous seaport city during the 16th to 18th centuries<br/>.
                 Visit Hoi An colorful local market, Tan Ky old house, Fukien Assembly Hall, and the 400-year-old Japanese covered bridge. Travelers can also see local residents raise silkworms and produce silk for Hoi An's burgeoning textile industry.<br/>
             Lunch at Indian Restaurant<br/>
             Afternoon we will drive to Hue, on the way visit Marble Mountains, Dragon bridge, photo stop on Hai Van Pass.  

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media.istockphoto.com/id/1324017792/photo/beautiful-aerial-view-photo-of-saigon-ho-chi-minh-city-at-night.jpg?s=612x612&w=0&k=20&c=pOxIbUUjO1a_XZCc0WNJ9wsRqrT2_8coY695VKS3eRo="
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Hue – Ho Chi Minh city</p>
              <p>
                Breakfast at Hotel <br/>

                 In the morningBoat trip in Perfume River to visit Thien Mu pagoda and King Minh Mang’s tomb. Lunch at Indian Restaurant <br/>

                  Afternoon: visit Imperial Citadel then transfer to Phu Bai Airport for the flight to Ho Chi Minh City<br/>.
                   Upon arrival in Ho Chi Minh City, transfer to hotel for check in.

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt_nKDk3Vb0kJtxF5B4lQ15ySIL5iQ8OBabge-Vwy8RpK8UK3_cXXGICqm&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Cu Chi Tunnel - Mekong Delta – Ho Chi Minh City</p>
              <p>
               Breakfast at Hotel <br/>

               Drive to Cu Chi tunnels for 1 hour 30 mins- an amazing complex of the underground tunnels used during the Vietnam War. <br/>
               After a short introduction to the tunnel network of more than 200 km you will have a chance to crawl into a short section of the tunnels to feel the oppressive narrowness and heat inside<br/>
               Lunch at Local Restaurant<br/>
                After lunch, drive to My Tho, a prosperous town of 170,000 inhabitants of the Mekong Delta. It is noted for its exuberant orchards and immense rice fields.<br/> 
                Enjoy boat rides on the Mekong River and along the lush canopy of water coconuts. <br/>
               Visit an orchard on an island and taste some exotic fruits, green tea. Rowing boat along the canals and walk around the traditional villages; immerse yourself in nature when listening to Southern traditional music<br/>
                Transfer back to Ho Chi Minh City. 

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/09/52/84/f8.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{ color: "blue" }}>Ho Chi Minh City – Departure</p>
              <p>
               Breakfast at Hotel<br/> 

                In the morning, we will visit the Reunification Palace, War Remnants Museum. Photo stop at Notre Dame Cathedral, General Post office<br/>. 
                Checkout hotel<br/> 

               Lunch at Indian Restaurant <br/>
                Transfer to the airport for departure flight. 

                ________________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("Vietnam At A Glance - 8 Days")}
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