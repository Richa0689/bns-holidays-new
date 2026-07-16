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
      "March to June and September to November are ideal, with mild temperatures and fewer crowds across Barcelona, Madrid and Seville. Summer (July–August) can get very hot in Andalusia, especially in Seville, while spring brings blooming patios and pleasant evenings perfect for exploring on foot.",
  },
  {
    question: "What is included in the 9-day Barcelona to Andalusia package?",
    answer:
      "The package includes 8 nights accommodation (3 nights Barcelona, 3 nights Madrid, 2 nights Seville), daily breakfast, comfortable train transfers between cities, guided city tours in Barcelona, Madrid and Seville, and sightseeing at iconic landmarks along the way. International flights, visa fees and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Spain?",
    answer:
      "Indian passport holders require a Schengen visa, which covers travel across Spain on this itinerary. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include Gaudí's Sagrada Família and Park Güell in Barcelona, the Royal Palace and Prado Museum in Madrid, an optional day trip to Toledo, and the Alcázar of Seville along with the stunning Plaza de España.",
  },
  {
    question: "What currency is used across Spain?",
    answer:
      "Spain uses the Euro (EUR). Cards are widely accepted in cities, but it's useful to carry some local cash for tapas bars, markets and small purchases. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add a Toledo excursion, extra nights in Barcelona, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const BarcelonaAndalusianLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://cdn-imgix.headout.com/media/images/993d112e511ea2bfc27dee280f966a6b-25727-barcelona-sagrada-familia-semi-private-guided-tour-01.jpg?auto=compress%2Cformat&w=705.6&h=360&q=90&crop=faces&fit=crop"
          alt="Spain Tour - Barcelona to Andalusia"
        />

        <div className="hero-content">
          <h1>From Gaudí's Barcelona to Andalusian</h1>

          <p>
            Barcelona • Madrid • Seville
          </p>

          <Link to="/Barcelona-Andalusian">
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
              src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/2023/07/wallpaperaccess.com_-scaled.jpg"
              alt="Sagrada Familia Barcelona"
            />
            <p>Sagrada Família, Barcelona</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://wallpapercave.com/wp/wp4197116.jpg"
              alt="Royal Palace Madrid"
            />
            <p>Royal Palace, Madrid</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://www.tripsavvy.com/thmb/utuKnh79abMx9wOfs4rd2fRctkE=/1500x1000/filters:fill(auto,1)/PlazadeEspanaSeville-5c1bac0546e0fb0001aefa97.jpg"
              alt="Plaza de Espana Seville"
            />
            <p>Plaza de España, Seville</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/aa/c5.jpg"
              alt="Alcazar Seville"
            />
            <p>Alcázar of Seville</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏛️ Iconic Gaudí Architecture</div>
          <div>🎨 World-Class Museums in Madrid</div>
          <div>💃 Vibrant Flamenco Culture</div>
          <div>🏰 Moorish Palaces of Andalusia</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Best of Spain in 9 Days</h2>

        <p>
          From the artistry of Barcelona to the royal grandeur of Madrid and the passion of Andalusia — a journey through Spain's finest
        </p>

        <br />

        <Link to="/Barcelona-Andalusian">
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
              src="https://tse2.mm.bing.net/th/id/OIP.tEyOcYIJb9wylCtqRKjI8AHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>India → Barcelona</p>
              <p>
         Welcome to Barcelona – The Cosmopolitan Jewel of Spain!  < br/>
Upon arrival at Barcelona Airport, you’ll be met for a private transfer to your city centre hotel. 
Settle in and get ready to explore a city famed for its architecture, culture, and vibrant energy. 
From the bustling streets of La Rambla to the artistic charm of Eixample, Barcelona offers an 
unforgettable start to your Spanish adventure.  < br/>
Overnight Stay in Barcelona 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.jR9S0tQtojc8Z-W-VlIXvQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Barcelona – City Tour with Hop-On Hop-Off & Sagrada Família</p>
              <p>
              Breakfast at the hotel  < br/>
Explore Barcelona at your own pace on a 1-day Hop-On Hop-Off bus tour, enjoying panoramic city 
views and informative audio guides. Hop on and off to visit famous landmarks, vibrant 
neighbourhoods, and cultural attractions throughout the city. Later, visit the Sagrada Família, the 
world’s largest unfinished Catholic church, celebrated for its unique architecture, intricate façades, 
and stunning interior designed by Antoni Gaudí.  < br/>
 Overnight Stay in Barcelona. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://res.klook.com/image/upload/c_crop,h_1687,w_2700,x_150,y_0,z_0.3/w_1265,h_791,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/gyfl0eh28cjr1hithuqe.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Barcelona – Day Trip to Montserrat, Girona & Costa Brava</p>
              <p>
                Breakfast at the hotel  < br/>
Take a full day SIC tour to Montserrat, Girona, and the Costa Brava, exploring breathtaking 
landscapes, historic landmarks, and charming Mediterranean coves. Discover the mountain 
monastery of Montserrat, stroll through Girona’s medieval streets, and relax along the picturesque 
beaches and seaside towns of the Costa Brava, soaking in the beauty and culture of Catalonia. < br/> 
Overnight stay at Barcelona
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.KFlkrjIM-9frXL_G4Y7p2wHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Barcelona – Madrid</p>
              <p>
                Breakfast at the hotel  < br/>
Private transfer to Barcelona Sants station and board the high-speed train to Madrid Atocha.  < br/> 
On arrival, enjoy a private transfer to your Madrid city centre hotel for check-in and relaxation. < br/> 
 Overnight in Madrid.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://cdn-imgix.headout.com/media/images/532a90deedb4a7452343bc8cb510a1b1-32573-madrid-city-sightseeing--madrid-panoramic-bus-tour-01.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Madrid - Panoramic Bus Tour & Royal Palace Visit</p>
              <p>
          Breakfast at the hotel  < br/>
Start your day with a panoramic bus tour of Madrid, enjoying views of the city’s iconic landmarks, 
historic streets, and cultural highlights with a live guide. Later, visit the Royal Palace to admire its 
grand architecture, opulent interiors, and centuries of royal history.  < br/>
 Overnight stay in Madrid. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.travelersuniverse.com/wp-content/uploads/2025/07/from-madrid-toledo-and-segovia-guided-day-trip.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}> Day Trip to Segovia & Toledo from Madrid</p>
              <p>
       Breakfast at the hotel < br/>
Enjoy a full day SIC tour to Segovia and Toledo, two of Spain’s most historic cities. In Segovia, 
marvel at the Roman aqueduct and explore the medieval castle. In Toledo, wander through ancient 
alleys, admiring its cathedrals, synagogues, and historic architecture, and experience the city’s 
unique cultural heritage. < br/>
Overnight Stay in Madrid.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.-YSuYHPO4dlGckHcbG8JiwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Madrid – Seville</p>
              <p>
                Breakfast at the hotel < br/> 
Private transfer from your Madrid city centre hotel to the train station. Board the high-speed train 
from Madrid Atocha to Sevilla Santa Justa, enjoying a smooth and scenic journey. On arrival, a 
private transfer will take you to your Seville hotel to relax and settle in.< br/> 
Overnight Stay in Seville.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.alphacoders.com/676/676207.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{ color: "blue" }}>Seville City Tour</p>
              <p>
                 Breakfast at the hotel < br/>
Explore Seville on a 1-day Hop-On Hop-Off bus tour, enjoying panoramic city views and the 
flexibility to explore at your own pace. Combine the ride with walking tours to discover historic 
landmarks, vibrant streets, and cultural treasures. Later, visit the Royal Alcázar of Seville, a historic 
palace renowned for its stunning Mudejar architecture, lush gardens, and rich history. End the day 
with an authentic flamenco show at Teatro Flamenco Sevilla, where passionate dance, music, and 
song bring the spirit of Andalusia to life.< br/> 
Overnight Stay in Seville. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.SPP8w0uKtwWgJLb851aZhwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 9</h3>
              <p style={{ color: "blue" }}>Seville – Departure</p>
              <p>
          Breakfast at the hotel < br/>
Private transfer from your Seville hotel to Seville Airport (SVQ) for your onward flight.
                ________________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("9 Days From Gaudí's Barcelona to Andalusian Tour")}
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

export default BarcelonaAndalusianLanding;