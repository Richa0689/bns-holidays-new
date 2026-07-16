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
    question: "What is the best time to visit Spain for this tour?",
    answer:
      "March to June and September to November are ideal, offering pleasant temperatures across Barcelona, Valencia, Seville and Madrid. Summer (July–August) can get quite hot in Andalusia and central Spain, while spring and autumn bring comfortable weather perfect for sightseeing.",
  },
  {
    question: "What is included in the 8-day Best of Barcelona, Valencia, Seville & Madrid package?",
    answer:
      "The package includes 7 nights accommodation (2 nights Barcelona, 1 night Valencia, 2 nights Seville, 2 nights Madrid), daily breakfast, comfortable transfers between cities, guided city tours in Barcelona, Seville and Madrid, and sightseeing at iconic landmarks along the way. International flights, visa fees and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Spain?",
    answer:
      "Indian passport holders require a Schengen visa, which covers travel across Spain on this itinerary. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Sagrada Familia and Park Güell in Barcelona, the futuristic City of Arts and Sciences in Valencia, the Plaza de España and Royal Alcázar in Seville, and the Royal Palace and Prado Museum in Madrid.",
  },
  {
    question: "What currency is used across Spain?",
    answer:
      "Spain uses the Euro (EUR). Cards are widely accepted across all four cities, but it's useful to carry some local cash for small purchases and transit. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add a day trip to Toledo, extra nights in Barcelona, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const SevilleMadridLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://cdn.audleytravel.com/1050/750/79/1342681-plaza-de-espaa-seville.jpg"
          alt="Spain Tour"
        />

        <div className="hero-content">
          <h1>Best of Barcelona, Valencia, Seville & Madrid</h1>

          <p>
            Barcelona • Valencia • Seville • Madrid
          </p>

          <Link to="/Seville-Madrid">
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
              src="https://bucket-files.city-sightseeing.com/blog/2023/06/sagrada1.jpg"
              alt="Sagrada Familia Barcelona"
            />
            <p>Sagrada Familia, Barcelona</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://live.staticflickr.com/4114/4849320790_43c8f292f0_b.jpg"
              alt="City of Arts and Sciences Valencia"
            />
            <p>City of Arts & Sciences, Valencia</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://www.tripsavvy.com/thmb/RjMJX3-B1jcJndqXseUcgpiT45I=/3008x2000/filters:no_upscale():max_bytes(150000):strip_icc()/DSC_0135-b7417e22c6894ef0afa7b7628d1a6307.jpg"
              alt="Plaza de España Seville"
            />
            <p>Plaza de España, Seville</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://th.bing.com/th/id/R.0e31d9e2e3887214f322ba6b1747b5af?rik=EbyKNzFXIN41MQ&riu=http%3a%2f%2fwww.citypictures.org%2fdata%2fmedia%2f228%2fPlaza_de_Espana_Seville_Spain.jpg&ehk=Lfngtlg5y9%2bC9e3%2buApCULgmqFv%2b%2b2veKDkfOjuo3zc%3d&risl=&pid=ImgRaw&r=0"
              alt="Royal Palace Madrid"
            />
            <p>Royal Palace, Madrid</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏛️ Iconic Gaudí Architecture</div>
          <div>🎭 Vibrant Flamenco Culture</div>
          <div>🖼️ World-Class Art Museums</div>
          <div>📸 Charming Historic Old Towns</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Best of Spain in 8 Days</h2>

        <p>
          From the art and energy of Barcelona to the royal grandeur of Madrid — a journey through Spain's finest cities
        </p>

        <br />

        <Link to="/Seville-Madrid">
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
              src="https://barcelonapanorama.com/wp-content/uploads/2025/12/Is-12-days-in-Barcelona-enough-1024x585.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>Barcelona – Arrival</p>
              <p>
           Welcome to Barcelona – The City of Gaudí! <br/> 
Your adventure begins with a smooth transfer from the airport to your hotel, where you’ll be ready 
to immerse yourself in the magic of Barcelona. Whether you're here for the art, the culture, the 
fashion, or the food, Barcelona offers an abundance of experiences waiting to be explored. 
Overnight Stay in Barcelona. <br/> 

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://cdn-imgix.headout.com/media/images/d6e05e1535d69243bf9661f9f6d5572a-Barclona%20Hop%20on%20hop%20off%20near%20Sagrada%20Familia.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Barcelona – Barcelona hop-on hop-off tours</p>
              <p>
                Breakfast at Hotel.<br/>  
After breakfast proceed to Barcelona hop-on hop-off tours are a convenient way to see the city's 
main attractions using a double-decker bus that runs on two different routes. You can purchase 24- 
or 48-hour passes that allow unlimited stops at key landmarks like the Sagrada Familia and Park 
Güell, with the buses providing audio commentary and free Wi-Fi.<br/>   
 Overnight stay at Barcelona. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.MqRQlz1PXz4tQqzRZ5tazQHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Barcelona - Valencia</p>
              <p>

               After Breakfast Check - out from Barcelona Hotel. <br/> 
Train from Barcelona to Valencia. Travelling by train from Barcelona to Valencia You can take the 
AVE high-speed train, which takes around 3-3.5 hours, or the Euromed train, which takes around 3-4 
hours. Both trains offer comfortable seating, Wi-Fi, and scenic views of the Mediterranean coast.<br/> 
Some popular trains include: - AVE: High-speed train (around 3 hours) - Euromed: High-speed train (around 3-4 hours) - Iryo: Modern, high-speed train (around 3 hours)  
 Welcome to Valencia! Valencia, the City of Arts and Sciences, is a vibrant and stunning destination on 
Spain's eastern coast. Known for its beautiful beaches, futuristic architecture, and rich cultural 
heritage, Valencia is a must-visit! <br/>
Enjoy the city's delicious cuisine, including paella, and explore the historic center, filled with charming 
streets and tapas bars!<br/> 
 Overnight stay at Valencia.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.C5Iv_WmlUq3A23V-Gd_niQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Valencia → Seville</p>
              <p>
           After Breakfast Check - out from Valencia Hotel. 
Train from Valencia to Seville. Travelling by train from Valencia to Seville Travelling by train from 
Valencia to Seville is a great way to see Spain's diverse landscapes!<br/> 
 The journey takes around 6-8 hours, depending on the train and route. You can take the AVE high
speed train with a change in Madrid, or opt for a more scenic route with Renfe's Intercity trains. <br/>
 Some popular trains include: - AVE: High-speed train with a change in Madrid (around 6 hours) - Renfe Intercity: Scenic route with multiple changes (around 8 hours)  
 Welcome to Seville! Seville, Seville, the Pearl of Andalusia, is a city of passion, history, and beauty! 
Known for its stunning architecture, rich culture, and vibrant flamenco music, Seville is a must-visit 
destination. <br/>
 Overnight stay at Seville. 

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://d2i7eq829tbbje.cloudfront.net/webp/Seville-Hop-On-Hop-Off-Bus_P_5_a54d3314-9768-40d5-8f91-5e49a9534793"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Seville - Seville 01 Day Hop on Hop off bus tour</p>
              <p>
               Breakfast at Hotel.<br/> 
After breakfast proceed to Seville Hop on Hop off Bus Tour - Hop on board one of bright red buses 
to see the best of Seville - the artistic, cultural, and financial capital of southern Spain. You will not 
be short of things to do in this beautiful city! With 14 bus stops around this historical masterpiece of 
a city, you will see so much from prestigious Islamic monuments, to gardens and Flamenco festivals.<br/> 
Sit back and enjoy the panoramic view from the open top bus and hop on and off at your 
convenience! Join the free walking tours to find out even more about Seville: discover Plaza de 
España and Maria Luisa Park, the Jewish quarter, Santa Cruz, with the buses providing audio 
commentary and free Wi-Fi.<br/>  
 Overnight Stay in Seville.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_863/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/q3tucxwa3r8zuhhacfla/TheBestofSevillafromMadridinOneDay.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Seville → Madrid</p>
              <p>
                After Breakfast Check - out from Seville Hotel. <br/>
 Travelling by train from Seville to Madrid is an amazing experience! The AVE high-speed trains are 
super comfortable, and you can enjoy the beautiful Spanish countryside rolling by. It's a great way to 
relax and take in the views, hassle-free. Plus, you'll arrive in Madrid feeling refreshed and ready to 
explore!<br/> 
The journey takes around 2.5-4 hours, depending on the train and class
Welcome Madrid! The vibrant capital of Spain, Madrid is a city of art, culture, and passion! Known for 
its stunning architecture, world-class museums, and lively nightlife, Madrid is a must-visit destination<br/>. 
 Overnight Stay in Madrid.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.E9CuKpmck2_tHk1XtmaFhgHaFL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Madrid –Madrid City Tour (SIC Basis – 1.5 hrs approx.)</p>
              <p>
               After breakfast, enjoy the Madrid City Tour on SIC Basis, covering key highlights of Madrid including 
historical monuments, iconic squares, and architectural landmarks. Afternoon and evening at 
leisure.<br/> 
 Experience the best of Madrid on a Big Bus open-top sightseeing tour! Sit back and soak up the city's 
vibrant energy as your live guide shares the stories behind iconic landmarks like the Royal Palace, 
Prado Museum, and Puerta de Alcalá. Cruise through lush parks like El Retiro and the Royal Botanic 
Gardens, and marvel at stunning architecture like Cibeles Palace and Almudena Cathedral.<br/> 
 Overnight stay at Madrid. 
        </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.YlO_kYIcT7fJ_WOVEAjK_gHaE0?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{ color: "blue" }}>Madrid – Departure</p>
              <p>
                After Breakfast Check - out from Madrid Hotel.<br/> 
After breakfast proceed to airport with private transfer.
                ________________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("8 Days Best of Barcelona + Valencia + Seville + Madrid Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Spanish journey</p>
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

export default SevilleMadridLanding;