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
    question: "What is the best time to visit Vietnam for this 10-day tour?",
    answer:
      "The best time to visit Vietnam is from September to April, when the weather across Hanoi, Halong Bay, Da Nang, Hoi An and Ho Chi Minh City is dry and pleasant. December to February is ideal for the north, while the south stays warm year-round, making it a great winter escape from India.",
  },
  {
    question: "What is included in the 10-day Amazing Vietnam package?",
    answer:
      "The package includes hotel accommodation for 9 nights, an overnight Halong Bay cruise, daily breakfast, domestic flights between Hanoi, Da Nang and Ho Chi Minh City, private transfers, guided city tours in Hanoi, Hoi An and Ho Chi Minh City, and the Cu Chi Tunnels & Mekong Delta excursion. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Vietnam?",
    answer:
      "Indian passport holders can apply for a Vietnam e-Visa online, which is usually processed within 3–5 working days and is valid for a single entry of up to 90 days. Our team can assist you with the e-Visa application and documentation.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Old Quarter and Ho Chi Minh Mausoleum in Hanoi, the limestone karsts of Halong Bay, the Golden Bridge at Ba Na Hills, the lantern-lit streets of Hoi An Ancient Town, the Reunification Palace and War Remnants Museum in Ho Chi Minh City, and the floating markets of the Mekong Delta.",
  },
  {
    question: "What currency is used across Vietnam?",
    answer:
      "The Vietnamese Dong (VND) is the local currency. Cards are accepted in most hotels and larger restaurants, but cash is preferred at markets, street food stalls and smaller shops. We recommend carrying some USD or VND for daily expenses.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add extra nights in Hoi An, a Phu Quoc beach extension, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const AmazingVietnam = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1504457047772-27faf1c00561?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlldG5hbSUyMHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Vietnam Tour"
        />

        <div className="hero-content">
          <h1>VIETNAM</h1>

          <p>
            Hanoi • Halong Bay • Da Nang • Hoi An • Ho Chi Minh City • Mekong Delta
          </p>

          <Link to="/Amazing-Vietnam">
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
              src="https://static0.thetravelimages.com/wordpress/wp-content/uploads/2025/03/shutterstock_2462621107.jpg"
              alt="Halong Bay"
            />
            <p>Halong Bay</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcgdP4bKV9Pfz7kbY7Q6aTHx805laBSobDsso2tXJ8C0I4_bfOnXjiPK80&s=10"
              alt="Hoi An Ancient Town"
            />
            <p>Hoi An Ancient Town</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8_epc5MXXi5ZAEIKCwRtaD1go-Yr_dK_eIxbgy9XOEPntQvW4RadSFoQ&s=10"
              alt="Ba Na Hills Golden Bridge"
            />
            <p>Golden Bridge, Ba Na Hills</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://www.shutterstock.com/image-photo/aerial-view-panoramic-ho-chi-260nw-2666913259.jpg"
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
          <div>🚢 Overnight Cruise in Halong Bay</div>
          <div>🌉 Iconic Golden Bridge at Ba Na Hills</div>
          <div>🏮 Lantern-Lit Streets of Hoi An</div>
          <div>🛶 Floating Markets of the Mekong Delta</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Best of Vietnam in 10 Days</h2>

        <p>
          From misty limestone karsts to golden bridges, ancient towns to bustling cities — the ultimate Vietnam journey
        </p>

        <br />

        <Link to="/Amazing-Vietnam">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>10 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPl-8jZ-WI6K7gSN9P8ZJ6ydCAPgAPoPauIdNuvXu-wiyQSkD5upUeatfM&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>Hanoi arrival (L) </p>
              <p>
                Welcome to Hanoi, the capital of Vietnam, is known for its centuries-old architecture and a rich culture with Southeast Asian, Chinese and French influences.<br/> 
                At its heart is the chaotic Old Quarter, where the narrow streets are roughly arranged by trade. Upon arrival at the airport, you will be transferred to the hotel.<br/> 

               Lunch at Indian Restaurant<br/>  

              Afternoon, visit the Temple of Literature built in 1070 and regarded as the First University in Vietnam, the Hoan Kiem Lake and Ngoc Son temple and take the Cyclo tour at the Old Quarter to experience the exciting local daily life of Hanoians,<br/>  
              shopping free around The Old Quarter that have stock of trendy to basic clothing and thousands of small craft and boutique shops offering variety of Vietnamese handicraft products<br/> 

             Enjoy the Water Puppet Show- A form of folk arts originating in the north of Vietnam, in which wood-puppets play their roles according to the direction of puppeteers and singers of Cheo (a kind of traditional theatre in Vietnam) sing songs to tell the story in words<br/> 

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQorGWAcIHqMN9bt-IT-xAXwj_jm_OX_85PJdCjJpog-w&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Hanoi – Ninh Binh – Hanoi (B/L) </p>
              <p>
               Breakfast at Hotel <br/>
              Departure to visit Ninh Binh -90 km far from Hanoi.  We will visit the ancient capital of Hoa Lu with the temples of Dinh and le Dynasties. Continue to visit Tam Coc – known as Halong Bay on land<br/>

               Lunch at IndianRestaurant.<br/>

             Afternoon boat trip to visit Tam Coc, explore the beautiful Karst formations and mystery caves. Back to the pier, visit to Bich Dong Pagoda<br/>
             Late afternoon drive back to Hanoi.

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl7WOaciBPhWgsqfKwy5Ahcdi_E-jxyWVfRrlAT1KCt-cu439NwuCVLhQ&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Hanoi – Halong (B/L/D) </p>
              <p>
               Breakfast at Hotel and Check-out<br/> 
               Transfer to Ha Long Bay in Quang Ninh Province (around 160KM). Upon arrival in Halong Bay, boarding the Cruise for exploring wonderful Bay of Halong<br/>
                Lunch at boat while cruising around the Bay<br/>
              Afternoon: explore hundreds of beautiful karst formations arising from green, emerald water, explore Cave, swimming and enjoy Sunset on the Cruise (Program might change due to the weather and the management)<br/>
              Dinner on the Cruise. After dinner is fishing time for everyone who wishes to join

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz7IAIPQbaTeNHNjtlNrPTOKlxkWC3DPQq7VcZ575MzDsN6DzW6CZlgZf5&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Halong – Hanoi – Danang – Hoi An (B/Br)</p>
              <p>
               Breakfast at Boat Cruise<br/>
               Continue to discover the Halong bay then check-out
               Lunch on Cruise Restaurant<br/>
               Transfer from Halong Bay to Hanoi for the flight to Danang. Later transfer to Hotel in Hoi An for check-in


              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaUIW5FY8Yox9jQ-Au04ysAgAaArUOPKSol2kaa4oNXr9tSGIT1e_G9ss&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Bana Hills (B/L) </p>
              <p>
               Breakfast at Hotel <br/>
               Drive to visit Marble Mountains, Dragon Bridgethen we will drive to Bana hills (30km from Danang) take Cable Car which gains 5 world scores to Ba Na hill station. First Stop we will visit Linh Ung pagoda, old wine tunnel, Orchid Garden, Le Jardin D’Amour, Golden Bridge.<br/>
              Lunch on Bana Hills with local food<br/>
               Afternoon we will continue the trip to visit Fantasy Park then drive to Hoi An. 

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWoF-ZEalvf_cPVxkw9KBUIp_s6SOKxvSOpRmJumyIQsKKrfQ9sMqNpmPT&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Hoi An - Danang – Hue (B/L) </p>
              <p>
               Breakfast at Hotel, In the morning, take a walking tour of Hoi An to discover the historic town which used to be a prosperous seaport city during the 16th to 18th centuries.<br/> 
               Visit Hoi An colorful local market, Tan Ky old house, Fukien Assembly Hall, and the 400-year-old Japanese covered bridge.<br/> 
               Travelers can also see local residents raise silkworms and produce silk for Hoi An's burgeoning textile industry.<br/>
              Lunch at Indian Restaurant <br/>
              Afternoon we will drive to Hue, on the way photostop on Hai Van Pass. Upon arrival in Hue, check into the hotel.

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyhlz9CmZ6dJ_ZwSIkA4L8-MBAzu3Cniucwhi5JfhPDavo7KamOdQgfO7U&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Ho Chi Minh City (B/L) </p>
              <p>
               Breakfast at Hotel<br/> 

              In the morning Boat trip in Perfume river to visit Thien Mu pagoda and King Minh Mang’s tomb.<br/>  
              Lunch at Indian Restaurant with indian food. Afternoon: visit Imperial Citadel then transfer to Phu Bai Airport for the flight to Ho Chi Minh City. 

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtWrBflwddKHULOUvlFU2iaxX-r3FqoJqMyjRj1Wg5xC2oN0iriqVfFk4&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{ color: "blue" }}>Ho Chi Minh City – Cu Chi tunnels (B/L) </p>
              <p>
               Breakfast at Hotel and checkout<br/>

             Drive to Cu Chi tunnels for 1 hour 30 mins- an amazing complex of the underground tunnels used during the Vietnam War.<br/> 
             After a short introduction to the tunnel network of more than 200 km you will have a chance to crawl into a short section of the tunnels to feel the oppressive narrowness and heat inside<br/>

             Lunch at Indian Restaurant <br/>

            Afternoonwe will visit the Reunification Palace, Notre Dame Cathedral and General Post office and Ben Thanh market for shopping

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdpsdTbznSPSmgpsjR33iIcek_TUWV9El-zgrG-vCaYWB0LQmY2xRKLZQ&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 9</h3>
              <p style={{ color: "blue" }}> Mekong Delta – Ho Chi Minh City (B/L)</p>
              <p>
                Breakfast at Hotel 

             In The morning drive to My Tho, a prosperous town of 170,000 inhabitants of the Mekong Delta.<br/>
              It is noted for its exuberant orchards and immense rice fields. Enjoy boat rides on the Mekong River and along the lush canopy of water coconuts.<br/> 
             Lunch at Mien Tay Song Nuoc restaurant with local food – Veg menu<br/>
             Visit an orchard on an island and taste some exotic fruits, green tea.<br/> 
             Rowing boat along the canals and walk around the traditional villages; immerse yourself in nature when listening to Southern traditional music<br/>
             Transfer back to Ho Chi Minh City. 

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://vietnamtour.in/wp-content/uploads/VNIN_Ho-Chi-Minh-city_18.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 10</h3>
              <p style={{ color: "blue" }}>Ho Chi Minh City – Departure (B) </p>
              <p>
               Breakfast at Hotel and free at your leisure<br/> 
               Transfer to the airport for departure flight

                ________________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("Amazing Vietnam - 10 Days Tour")}
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

export default AmazingVietnam;