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
    question: "What is the best time to visit Barcelona and Nice for this tour?",
    answer:
      "April to October is ideal, with May–June and September offering pleasant weather along the Riviera and fewer crowds. Summer (July–August) is peak season with warm beach weather in Nice, while spring and early autumn bring comfortable temperatures for sightseeing in Barcelona.",
  },
  {
    question: "What is included in the 7-day Spanish–French Riviera Delight package?",
    answer:
      "The package includes 6 nights accommodation (3 nights Barcelona, 3 nights Nice), daily breakfast, comfortable transfers between cities, guided city tours in Barcelona and Nice, and sightseeing at iconic landmarks along the way. International flights, visa fees and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Spain and France?",
    answer:
      "Indian passport holders require a Schengen visa, which covers travel across both Spain and France on this itinerary. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include Gaudí's Sagrada Família and Park Güell in Barcelona, the Promenade des Anglais and Old Town in Nice, and optional excursions to the mountain monastery of Montserrat and the glamorous principality of Monaco.",
  },
  {
    question: "What currency is used across Spain and France?",
    answer:
      "Both Spain and France use the Euro (EUR). Cards are widely accepted in cities, but it's useful to carry some local cash for tapas bars, markets and small purchases. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add a Monaco or Èze excursion, extra nights in Nice, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const RivieraDelightLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://tse1.mm.bing.net/th/id/OIP.0ES-kQrTzSFw--o9YQHmPwHaDX?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Spanish-French Riviera Tour"
        />

        <div className="hero-content">
          <h1>Spanish–French Riviera Delight</h1>

          <p>
            Barcelona • Nice
          </p>

          <Link to="/Riviera-Delight">
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
              src="https://wallpaperbat.com/img/336475-download-wallpaper-sagrada-familia-basilica-of-the-holy-family.jpg"
              alt="Sagrada Familia Barcelona"
            />
            <p>Sagrada Família, Barcelona</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://th.bing.com/th/id/OIP.w65Pab28ueG80ObVGY8-ZgHaEO?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Promenade des Anglais Nice"
            />
            <p>Promenade des Anglais, Nice</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.6TDC5MapfudvmKvvaj6ziQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Monaco"
            />
            <p>Monte Carlo, Monaco</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://gotravelyourself.com/wp-content/uploads/2023/04/Barcelona-Gothic-Quarter-jpg.webp"
              alt="Gothic Quarter Barcelona"
            />
            <p>Gothic Quarter, Barcelona</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏛️ Iconic Gaudí Architecture</div>
          <div>🌊 Glamorous French Riviera</div>
          <div>🎰 Glitz of Monte Carlo, Monaco</div>
          <div>🥐 Charming Coastal Villages</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Best of the Spanish & French Riviera in 7 Days</h2>

        <p>
          From the artistry of Barcelona to the glamour of the French Riviera — a journey along the Mediterranean's finest coastline
        </p>

        <br />

        <Link to="/Riviera-Delight">
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
              src="https://www.baltana.com/files/wallpapers-1/Barcelona-HD-Images-03374.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>India → Barcelona</p>
              <p>
          Arrival in Barcelona: A Perfect Beginning to Your European Holiday 
 Welcome to Barcelona, a vibrant city known for its artistic heritage, stunning architecture, sun-kissed 
beaches, and lively Mediterranean ambience. Upon your arrival at Barcelona Airport, you will enjoy a 
smooth and comfortable private transfer to your hotel. <br/> 
Your first evening in Barcelona offers the perfect introduction to the city’s unique charm. Whether 
you're admiring the illuminated streets, strolling along La Rambla, or soaking in the energy of Plaça 
Catalunya, Barcelona promises an unforgettable start to your journey. <br/> 
 Overnight Stay in Barcelona 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://cdn-imgix.headout.com/media/images/59344e606a5fc5a14b875835f901fe4b-Sagrada-Familia---Banner-02.jpg?auto=compress%2Cformat&w=705.6&h=360&q=90&crop=faces&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Highlight of the Day: Sagrada Familia Entry Ticket & Barcelona Hop-on Hop-off Tour</p>
              <p>
             Breakfast at Hotel. <br/> 
After breakfast, proceed for your full-day experience of Barcelona with the 01-Day Hop on Hop off 
bus tour, offering the perfect way to explore the city’s major highlights at your own pace. <br/> 
Your visit includes the Sagrada Familia Entry Ticket, allowing you to witness Antoni Gaudí’s 
masterpiece up close. The intricate architecture, stunning interiors, and spiritual atmosphere make 
this an essential Barcelona experience.<br/>  
Overnight Stay in Barcelona 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://thebettervacation.com/wp-content/uploads/Park-Guell.webp"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Park Güell & Montserrat Excursion</p>
              <p>
                Breakfast at Hotel. <br/> 
After breakfast, proceed for the Montserrat Tour with Cogwheel & Black Madonna on SIC basis. 
This journey takes you to Catalonia’s most famous mountain sanctuary, offering panoramic views, 
ancient Benedictine traditions, and the revered statue of the Black Madonna. <br/> 
The scenic cog-wheel train ride enhances the experience with breathtaking landscapes and peaceful 
surroundings. <br/> 
Overnight Stay in Barcelona
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://wallpaperaccess.com/full/2605065.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}> Barcelona – Nice</p>
              <p>
           Breakfast at Hotel. <br/> 
 After breakfast, enjoy a private transfer from your Barcelona hotel to Barcelona Airport for your 
flight to Nice. <br/> 
Upon arrival in Nice, a private transfer will take you to your hotel. Nice, the jewel of the French 
Riviera, offers the perfect blend of Mediterranean elegance, charming promenades, and vibrant 
cultural heritage. The serene coastline and old-town charm make it a delightful destination<br/> . 
Overnight Stay in Nice 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://photos.smugmug.com/Provence-Lovers/Nice/n-wSXLpq/Ville/i-fhLJZgk/0/57d3d4c8/L/Nice-hop-on-hop-off-bus-L.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Nice – Hop on Hop off Tour</p>
              <p>
                Breakfast at Hotel.<br/>  
 After breakfast, proceed for your Nice 01-Day Hop on Hop off Bus Tour. This flexible sightseeing 
experience allows you to explore Nice's iconic landmarks including the Promenade des Anglais, Castle 
Hill, Old Town, and more, all while enjoying stunning coastal views along the way.<br/>  
Overnight Stay in Nice
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.iOZIaJLVcp5fRL-nhWHMEAHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Nice – French Riviera Day Tour</p>
              <p>
                Breakfast at Hotel. <br/> 
 Today, proceed for the French Riviera Day Tour on SIC basis. This full-day excursion takes you along 
one of Europe’s most glamorous coastlines, featuring charming seaside towns, luxurious marinas, 
scenic views, and the timeless elegance of the Côte d’Azur. <br/> 
Take a unique trip and visit the medieval village of Èze. Your next stop is the Principality of Monaco, 
where you have time to discover the old town, the cathedral, the palace and the ceremony of the 
changing of the guard. Next, continue along the Formula 1 circuit to Monte Carlo with its casino and 
upscale shops. <br/>  
Head to your next stop, Saint-Paul-De-Vence. Marvel at the "jewel of Provence", where many 
painters and artists have resided. As you walk the streets of this medieval fortified village, you can 
taste centuries of history and artistic creativity.<br/>  
For your last destination, make way to the famous city of stars—Cannes. Explore the Beverly Hills of 
France, and take a stroll on the famous Croisette, enjoy luxury hotels, restaurants and shops.<br/> 
 Overnight Stay in Nice
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.traveltomtom.net/images/nieuwe_indeling/artikels/travel_inspiration/breakfast_with_a_view/breakfast_with_a_view_bangkok.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Breakfast at Hotel</p>
              <p>
             After breakfast, proceed to Nice Airport with a private transfer for your onward flight to India.
                ________________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("7 Days Spanish–French Riviera Delight Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Riviera journey</p>
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

export default RivieraDelightLanding;