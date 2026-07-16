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
      "March to June and September to November are ideal, offering pleasant temperatures across Barcelona, Valencia, Malaga and Seville. Summer (July–August) can get quite hot in Andalusia, especially in Seville, while spring and autumn bring comfortable weather perfect for sightseeing and coastal excursions.",
  },
  {
    question: "What is included in the 6-day Best of Barcelona, Valencia, Malaga & Seville package?",
    answer:
      "The package includes 6 nights accommodation (2 nights Barcelona, 1 night Valencia, 1 night Malaga, 2 nights Seville), daily breakfast, comfortable transfers between cities, guided city tours in Barcelona and Seville, and sightseeing at iconic landmarks along the way. International flights, visa fees and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Spain?",
    answer:
      "Indian passport holders require a Schengen visa, which covers travel across Spain on this itinerary. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Sagrada Familia and Park Güell in Barcelona, the futuristic City of Arts and Sciences in Valencia, the sun-soaked Costa del Sol in Malaga, and the Plaza de España and Royal Alcázar in Seville.",
  },
  {
    question: "What currency is used across Spain?",
    answer:
      "Spain uses the Euro (EUR). Cards are widely accepted across all four cities, but it's useful to carry some local cash for small purchases and transit. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add extra nights in Barcelona, a day trip to Granada, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
          src="https://www.seascanner.co.uk/images/10021/2/ced36984-8c99-45c8-903b-eb11bbba7c0c_Seville3.jpg?auto=compress,format&w=1200&h=700&q=75&fit=crop"
          alt="Spain Tour"
        />

        <div className="hero-content">
          <h1>Best of Barcelona, Valencia, Malaga & Seville</h1>

          <p>
            Barcelona • Valencia • Malaga • Seville
          </p>

          <Link to="/Malaga-Seville">
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
              src="https://tse3.mm.bing.net/th/id/OIP.qFMTrIqSahgBbGsBzhl49AHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Sagrada Familia Barcelona"
            />
            <p>Sagrada Familia, Barcelona</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images4.alphacoders.com/100/1000218.jpg"
              alt="City of Arts and Sciences Valencia"
            />
            <p>City of Arts & Sciences, Valencia</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://wallpaperbat.com/img/135979-project-management-of-your-event-in-spain-malaga-costa-del-sol.jpg"
              alt="Malaga Costa del Sol"
            />
            <p>Costa del Sol, Malaga</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images2.alphacoders.com/961/thumb-1920-961345.jpg"
              alt="Plaza de España Seville"
            />
            <p>Plaza de España, Seville</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏛️ Iconic Gaudí Architecture</div>
          <div>🌊 Sun-Kissed Costa del Sol</div>
          <div>🎭 Vibrant Flamenco Culture</div>
          <div>📸 Charming Historic Old Towns</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Best of Spain in 6 Days</h2>

        <p>
          From the art and energy of Barcelona to the timeless charm of Seville — a journey through Spain's finest cities
        </p>

        <br />

        <Link to="/Malaga-Seville">
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
              src="https://media.istockphoto.com/id/1174437297/photo/passenger-check-in-at-international-airport.jpg?s=170667a&w=0&k=20&c=1NOJRGfHcHd0eRGjVHjGrh96OXdoXi23SAGfjJtFT2s="
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>Barcelona – Arrival</p>
             <p>
          Welcome to Barcelona – The City of Gaudí! < br/> 
Your adventure begins with a smooth transfer from the airport to your hotel, where you’ll be ready 
to immerse yourself in the magic of Barcelona. Whether you're here for the art, the culture, the 
fashion, or the food, Barcelona offers an abundance of experiences waiting to be explored. < br/> 
 Overnight Stay in Barcelona 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://cdn-imgix.headout.com/media/images/96d49295-e01f-4700-b113-c2ac2aa92f6a-1748538121088-279644.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Barcelona – Barcelona hop-on hop-off tours</p>
              <p>
                Breakfast at Hotel. < br/> 
After breakfast proceed to Barcelona hop-on hop-off tours are a convenient way to see the city's 
main attractions using a double-decker bus that runs on two different routes. You can purchase 24- 
or 48-hour passes that allow unlimited stops at key landmarks like the Sagrada Familia and Park 
Güell, with the buses providing audio commentary and free Wi-Fi. < br/>  
 Overnight stay at Barcelona.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images8.alphacoders.com/354/354497.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}> Barcelona - Valencia</p>
              <p>
               After Breakfast Check - out from Barcelona Hotel. < br/>  
Train from Barcelona to Valencia. Travelling by train from Barcelona to Valencia You can take the 
AVE high-speed train, which takes around 3-3.5 hours, or the Euromed train, which takes around 3-4 
hours. Both trains offer comfortable seating, Wi-Fi, and scenic views of the Mediterranean coast. 
 Some popular trains include: - AVE: High-speed train (around 3 hours) - Euromed: High-speed train (around 3-4 hours) - Iryo: Modern, high-speed train (around 3 hours)  
 Welcome to Valencia! Valencia, the City of Arts and Sciences, is a vibrant and stunning destination on 
Spain's eastern coast. Known for its beautiful beaches, futuristic architecture, and rich cultural 
heritage, Valencia is a must-visit! < br/>
Enjoy the city's delicious cuisine, including paella, and explore the historic center, filled with charming 
streets and tapas bars!  < br/>
 Overnight stay at Valencia.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.Eb4GoOxBWnMUoQlXzAxhfAHaD4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Valencia → Malaga</p>
              <p>
            After Breakfast Check - out from Valencia Hotel.  < br/>
Train from Valencia to Malaga. The train journey from Valencia to Malaga is a great way to see 
Spain's southern landscapes! < br/> 
 You can take the AVE high-speed train, which takes around 4-5 hours with a change in Madrid or 
direct. Some popular trains include: - AVE: High-speed train (around 4-5 hours) - Renfe Intercity: Scenic route with multiple changes (around 6-8 hours) 
 Welcome to Malaga! Málaga, the birthplace of Picasso, is a vibrant coastal city with a rich history, 
stunning architecture, and beautiful beaches! Known for its warm climate, tapas, and cultural 
heritage, Málaga is a fantastic destination.  < br/>
 Overnight stay at Seville. 
 </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://cdn.getyourguide.com/img/tour/6387859aed38e.jpeg/148.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Malaga – Seville</p>
              <p>
                After Breakfast Check - out from Valencia Hotel. < br/> 
Train from Valencia to Seville. Travelling by train from Valencia to Seville Travelling by train from 
Valencia to Seville is a great way to see Spain's diverse landscapes! 
 The journey takes around 6-8 hours, depending on the train and route. You can take the AVE high
speed train with a change in Madrid, or opt for a more scenic route with Renfe's Intercity trains. < br/> 
 Some popular trains include: - AVE: High-speed train with a change in Madrid (around 6 hours) - Renfe Intercity: Scenic route with multiple changes (around 8 hours)  
 Welcome to Seville! Seville, Seville, the Pearl of Andalusia, is a city of passion, history, and beauty! 
Known for its stunning architecture, rich culture, and vibrant flamenco music, Seville is a must-visit 
destination.  < br/>
 Overnight stay at Seville
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://res.klook.com/image/upload/u_activities:k9vxdmpgqecsfsefchuz,h_1.0,ar_960:460,c_scale,e_blur:10000/c_fill,w_1265,h_712/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/k9vxdmpgqecsfsefchuz.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Seville - Seville 01 Day Hop on Hop off bus tour</p>
              <p>
             Breakfast at Hotel. < br/> 
After breakfast proceed to Seville Hop on Hop off Bus Tour - Hop on board one of bright red buses 
to see the best of Seville - the artistic, cultural, and financial capital of southern Spain. You will not 
be short of things to do in this beautiful city! With 14 bus stops around this historical masterpiece of 
a city, you will see so much from prestigious Islamic monuments, to gardens and Flamenco festivals. < br/> 
Sit back and enjoy the panoramic view from the open top bus and hop on and off at your 
convenience! Join the free walking tours to find out even more about Seville: discover Plaza de 
España and Maria Luisa Park, the Jewish quarter, Santa Cruz, with the buses providing audio 
commentary and free Wi-Fi.  < br/> 
 Overnight Stay in Seville.</p> 

            </div>
          </div>
           <div className="day-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.6SdUI7QorPNDulzWcYgRpgHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Seville – Departur</p>
              <p>
              After Breakfast Check - out from Madrid Hotel. < br/>
After breakfast proceed to airport with private transfer. 
              </p>
            </div>
          </div>
          

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("6 Days Best of Barcelona + Valencia + Malaga + Seville Tour")}
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