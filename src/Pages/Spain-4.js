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
    question: "What is the best time to visit Barcelona, Ibiza and Madrid for this tour?",
    answer:
      "May to September is ideal, with June–August offering warm sunny weather perfect for the beaches of Ibiza. Late spring and early autumn bring pleasant temperatures and fewer crowds in Barcelona and Madrid, while still being warm enough to enjoy Ibiza's coastline.",
  },
  {
    question: "What is included in the 7-day Best of Barcelona + Ibiza + Madrid package?",
    answer:
      "The package includes 6 nights accommodation (2 nights Barcelona, 2 nights Ibiza, 2 nights Madrid), daily breakfast, comfortable transfers between cities, guided city tours in Barcelona and Madrid, and sightseeing at iconic landmarks along the way. International flights, visa fees and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Spain?",
    answer:
      "Indian passport holders require a Schengen visa, which covers travel across Spain on this itinerary. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Sagrada Familia and Park Güell in Barcelona, the pristine beaches and old town of Ibiza (Dalt Vila), and the Royal Palace and Retiro Park in Madrid.",
  },
  {
    question: "What currency is used in Spain?",
    answer:
      "Spain uses the Euro (EUR). Cards are widely accepted across all three destinations, but it's useful to carry some local cash for small purchases and transit. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add a boat excursion in Ibiza, extra nights in Barcelona, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const BarcelonaIbizaMadridLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://th.bing.com/th/id/R.75d046b144ba9366ac159614cfeebf59?rik=34P7hopi%2fhQT1Q&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f5%2fb%2f5%2f1087960-beautiful-barcelona-city-wallpapers-3840x2160-for-retina.jpg&ehk=aj%2fsRunIz8cyvqkNIQyJ9B%2bVYw%2b0ARBe9bFLKgjC%2fkA%3d&risl=&pid=ImgRaw&r=0"
          alt="Barcelona, Ibiza & Madrid Tour"
        />

        <div className="hero-content">
          <h1>Best of Barcelona + Ibiza + Madrid</h1>

          <p>
            Barcelona • Ibiza • Madrid
          </p>

          <Link to="/Ibiza-Madrid">
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
              src="https://tse4.mm.bing.net/th/id/OIP.YCqE5eoOJbCls-f6NxMbggHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Sagrada Familia Barcelona"
            />
            <p>Sagrada Familia, Barcelona</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://media.istockphoto.com/photos/beautiful-sunset-beach-at-cala-dhort-on-ibiza-picture-id473082556?b=1&k=20&m=473082556&s=170667a&w=0&h=99w8m3gapWnR42oid0dLurqGeMacHPjkB2iEjmcmd2M="
              alt="Ibiza Beach"
            />
            <p>Beaches of Ibiza</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://th.bing.com/th/id/OIP.zM2b5B9w1CmWr38dYZDlmwHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Dalt Vila Ibiza"
            />
            <p>Dalt Vila Old Town, Ibiza</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://cdn-imgix.headout.com/tour/22227/TOUR-IMAGE/34d5b5ec-8904-45a9-9429-d7b6252965bb-11711-madrid-fast-track-tickets-royal-palace-s---royal-kitchen-01.jpg?fm=pjpg&auto=compresshttps://cdn-imgix.headout.com/tour/22227/TOUR-IMAGE/34d5b5ec-8904-45a9-9429-d7b6252965bb-11711-madrid-fast-track-tickets-royal-palace-s---royal-kitchen-01.jpg?fm=pjpg&auto=compress"
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
          <div>🏖️ Sun-Soaked Ibiza Beaches</div>
          <div>🌅 Vibrant Island Nightlife</div>
          <div>👑 Royal Madrid Heritage</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Best of Barcelona, Ibiza & Madrid in 7 Days</h2>

        <p>
          From Gaudí's Barcelona to the beaches of Ibiza and Royal Madrid — a journey through Spain's best
        </p>

        <br />

        <Link to="/Ibiza-Madrid">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>7 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.EzT-qqMgYC5TbwCEmSFpLAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>Barcelona – Arrival</p>
              <p>
              Welcome to Barcelona – The City of Gaudí! <br/> 
Your adventure begins with a smooth transfer from the airport to your hotel, where you’ll be ready 
to immerse yourself in the magic of Barcelona. Whether you're here for the art, the culture, the 
fashion, or the food, Barcelona offers an abundance of experiences waiting to be explored.<br/>  
 Overnight Stay in Barcelona 
 
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
Güell, with the buses providing audio commentary and free Wi-Fi. <br/>  
 Overnight stay at Barcelona.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.ferryhopper.com/ferryconnections/ibiza-eivissa-town-boats.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Barcelona - Ibiza</p>
              <p>
               After Breakfast Check - out from Barcelona Hotel.<br/>   
After breakfast, check out and proceed to the airport for your flight to Ibiza. Upon arrival, take your 
private transfer to your hotel. Rest of the day at leisure on the island.<br/>  
 Welcome to Ibiza! The White Island, Ibiza, is a paradise of sun, sea, and vibrant nightlife! Known for 
its stunning beaches, crystal-clear waters, and world-class clubs, Ibiza is a top destination for 
travellers. <br/> 
 Overnight stay at Ibiza.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://wallpaperaccess.com/full/1448436.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Ibiza – Day Free</p>
              <p>
                Breakfast at Hotel.<br/>  
 Barcelona - Ibiza <br/> 
You've got a whole day to unwind and soak up the Ibiza vibes. Whether you want to lounge on the 
beach, explore the charming old town, or try some delicious local cuisine, the island is all yours! 
Ibiza is known for its stunning beaches, vibrant nightlife, and beautiful landscapes. The main city is 
called Ibiza Town, also known as Eivissa.<br/>  
 Overnight stay at Ibiza.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://gogetatrip.com/assets/images/european/main_banner/madrid_ibiza_barcelona_mainbanner.webp"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Ibiza → Madrid</p>
              <p>
             After Breakfast Check - out from Ibiza Hotel.<br/>  
After breakfast, check out from your hotel and take your private transfer to Ibiza Airport for your 
onward journey to Madrid. Upon arrival, check in at your hotel and enjoy free time in the Spanish 
capital.<br/>  
 Overnight stay at Madrid. 
 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://madride.net/wp-content/uploads/2023/02/madrid-walking-city-tour.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
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
              src="https://thumbs.dreamstime.com/b/madrid-spain-may-interior-madrid-airport-departure-waiting-aria-45065268.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Madrid – Departure</p>
              <p>
                After Breakfast Check - out from Madrid Hotel. 
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
            onClick={() => setActiveModal("7 Days Best of Barcelona + Ibiza + Madrid Tour")}
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

export default BarcelonaIbizaMadridLanding;