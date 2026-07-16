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
      "March to June and September to November are ideal, offering pleasant temperatures across Barcelona, Valencia, Seville and Madrid. Summer (July–August) can be quite hot, especially in Seville, while spring and autumn bring comfortable weather and fewer crowds for sightseeing.",
  },
  {
    question: "What is included in the 9-day Best of Spain package?",
    answer:
      "The package includes 8 nights accommodation (2 nights Barcelona, 2 nights Valencia, 2 nights Seville, 2 nights Madrid), daily breakfast, comfortable transfers between cities, guided city tours in Barcelona, Valencia, Seville and Madrid, and sightseeing at iconic landmarks along the way. International flights, visa fees and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Spain?",
    answer:
      "Indian passport holders require a Schengen visa, which covers travel across Spain on this itinerary. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Sagrada Familia and Park Güell in Barcelona, the City of Arts and Sciences in Valencia, the Alcázar and Plaza de España in Seville, and the Royal Palace and Retiro Park in Madrid.",
  },
  {
    question: "What currency is used in Spain?",
    answer:
      "Spain uses the Euro (EUR). Cards are widely accepted across all four cities, but it's useful to carry some local cash for small purchases and transit. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add a Toledo day trip, extra nights in Barcelona, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const SpainLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.outofoffice.com/wp-content/uploads/bs-webp/uploads/Hero-Pics-2026-02-24T172157.950.png.webp"
          alt="Spain Tour"
        />

        <div className="hero-content">
          <h1>Best of Spain</h1>

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
              src="https://wallpaperbat.com/img/188382-this-is-what-barcelona-looks-like-through-an-architects-eyes.jpg"
              alt="Sagrada Familia Barcelona"
            />
            <p>Sagrada Familia, Barcelona</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://c1.staticflickr.com/5/4114/4849320790_43c8f292f0_b.jpg"
              alt="City of Arts and Sciences Valencia"
            />
            <p>City of Arts &amp; Sciences, Valencia</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images5.alphacoders.com/540/540259.jpg"
              alt="Plaza de Espana Seville"
            />
            <p>Plaza de España, Seville</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://wallpapercave.com/wp/wp4197032.jpg"
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
          <div>🏛️ Iconic Barcelona Landmarks</div>
          <div>🌊 Futuristic Valencia Architecture</div>
          <div>💃 Andalusian Charm in Seville</div>
          <div>👑 Royal Madrid Heritage</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Best of Spain in 9 Days</h2>

        <p>
          From Gaudí's Barcelona to Royal Madrid — a journey through Spain's finest cities
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
        <h2>9 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://4kwallpapers.com/images/wallpapers/fc-barcelona-camp-3840x2160-19432.jpeg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>Barcelona – Arrival</p>
              <p>
            Welcome to Barcelona – The City of Gaudí<br/>
Your adventure begins with a smooth transfer from the airport to your hotel, where you’ll be ready 
to immerse yourself in the magic of Barcelona. Whether you're here for the art, the culture, the 
fashion, or the food, Barcelona offers an abundance of experiences waiting to be explored.<br/> 
 Overnight Stay in Barcelona. 

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://cdn-imgix.headout.com/media/images/d6e05e1535d69243bf9661f9f6d5572a-Barclona%20Hop%20on%20hop%20off%20near%20Sagrada%20Familia.jpg?auto=format&w=1058.3999999999999&h=540&q=90&fit=crop&crop=faces"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Barcelona hop-on hop-off tours</p>
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
              src="https://tse2.mm.bing.net/th/id/OIP.LYH7E4u5XO3iYEktN_voJAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Barcelona - Valencia</p>
              <p>
                After Breakfast Check - out from Barcelona Hotel.<br/>  
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
              src="https://valencia-pass.com/static/8271ad0062acd53f858aeb6685cc8b3f/b72c0/hop-on-hop-off-activities-experiences-tickets-valencia-spain-valencia-pass.webp"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}> Valencia - Valencia 01 Day Hop on Hop off bus tour</p>
              <p>
               Breakfast at Hotel. <br/> 
After breakfast proceed to Valencia Hop-On Hop-Off Bus Tour – Hop on board the iconic sightseeing 
bus to discover the highlights of Valencia at your own pace. Explore this vibrant Mediterranean city 
where history meets modern architecture. With 17 convenient stops across the city, you can admire 
iconic landmarks ranging from historic monuments and lively plazas to contemporary masterpieces 
such as the City of Arts and Sciences and the Oceanogràfic.<br/>  
 Relax and enjoy panoramic views from the open-top bus as you hop on and off whenever you wish. 
Enhance your experience with the real-time multilingual audio guide, available in English, French, 
German, Spanish, Italian, Chinese, Portuguese, Japanese, Valencian, and Russian, offering fascinating 
insights into Valencia’s culture, history, and traditions. The flexible ticket options allow you to explore 
the city comfortably while taking in Valencia’s unique blend of old-world charm and modern flair.<br/>  
 Overnight stay at Valencia. 

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.rfiLgtnMfKG8ReV7g-FFyQHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Valencia – Seville</p>
              <p>
                After Breakfast Check - out from Valencia Hotel.<br/>  
Train from Valencia to Seville. Travelling by train from Valencia to Seville Travelling by train from 
Valencia to Seville is a great way to see Spain's diverse landscapes! <br/> 
 The journey takes around 6-8 hours, depending on the train and route. You can take the AVE high
speed train with a change in Madrid, or opt for a more scenic route with Renfe's Intercity trains.<br/>  
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
              src="https://m.jtgtravel.com/img/seville-hop-on-hop-off-bus-tour-for-48-hours-d556-5819P129-2.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Seville 01 Day Hop on Hop off bus tour</p>
              <p>
              Breakfast at Hotel<br/> . 
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
              src="https://www.tripsavvy.com/thmb/0647ka-RF3Ut9aEVHdgIkP8va8U=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/seville-plaza-de-espana-540742335-58f5664b3df78ca15909e0a3.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Seville → Madrid</p>
              <p>
          After Breakfast Check - out from Seville Hotel. <br/>
 Travelling by train from Seville to Madrid is an amazing experience! The AVE high-speed trains are 
super comfortable, and you can enjoy the beautiful Spanish countryside rolling by. It's a great way to 
relax and take in the views, hassle-free. Plus, you'll arrive in Madrid feeling refreshed and ready to 
explore!<br/> 
 The journey takes around 2.5-4 hours, depending on the train and class.<br/> 
 Welcome Madrid! The vibrant capital of Spain, Madrid is a city of art, culture, and passion! Known for 
its stunning architecture, world-class museums, and lively nightlife, Madrid is a must-visit destination. 
 Overnight Stay in Madrid. 

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.hTaJCJ7LZktavmUHet3YhQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{ color: "blue" }}>Madrid –Madrid City Tour (SIC Basis – 1.5 hrs approx.)</p>
              <p>
                After breakfast, enjoy the Madrid City Tour on SIC Basis, covering key highlights of Madrid including 
historical monuments, iconic squares, and architectural landmarks. Afternoon and evening at 
leisure. <br/>
 Experience the best of Madrid on a Big Bus open-top sightseeing tour! Sit back and soak up the city's 
vibrant energy as your live guide shares the stories behind iconic landmarks like the Royal Palace, 
Prado Museum, and Puerta de Alcalá. Cruise through lush parks like El Retiro and the Royal Botanic 
Gardens, and marvel at stunning architecture like Cibeles Palace and Almudena Cathedral. <br/>
 Overnight stay at Madrid. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://i.pinimg.com/originals/59/ad/2a/59ad2a19960213a7381b59ace6d2526d.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 9</h3>
              <p style={{ color: "blue" }}>Madrid – Departure</p>
              <p>
               After Breakfast Check - out from Madrid Hotel.<br/> 
After breakfast proceed to airport with private transfer
                ________________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("9 Days Best of Spain Tour")}
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

export default SpainLanding;