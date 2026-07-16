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
    question: "What is the best time to visit the UK for this London-Manchester tour?",
    answer:
      "Late Spring to early Autumn (May–September) offers the mildest weather and the longest daylight hours, ideal for sightseeing in London and exploring Manchester's football and industrial heritage. December also has a special charm with festive markets and lights, though days are shorter.",
  },
  {
    question: "What is included in the 7-day Classic UK Explorer package?",
    answer:
      "The package includes hotel accommodation for 6 nights (4 nights in London, 2 nights in Manchester), daily breakfast, train transfers between cities, guided city tours in London and Manchester, and sightseeing along the way including a Windsor/Oxford day trip and Old Trafford. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to the UK?",
    answer:
      "Indian passport holders require a UK Standard Visitor visa. We recommend applying at least 6–8 weeks before your travel date to allow time for appointments and processing. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include Big Ben, the Tower of London and Buckingham Palace in London, a day trip to Windsor Castle, and in Manchester, Old Trafford Stadium, the Science and Industry Museum, and the vibrant Northern Quarter.",
  },
  {
    question: "What currency is used across the UK?",
    answer:
      "The Pound Sterling (GBP) is used throughout the UK. Cards are widely accepted almost everywhere, including on buses and the London Underground, though it's handy to carry some cash for small purchases. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add extra nights in London, a Lake District extension, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const ClassicUKExplorer = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://media.architecturaldigest.com/photos/5ad7b1be64b2307d11eae7d7/16:9/w_2560%2Cc_limit/GettyImages-561318245.jpg"
          alt="Classic UK Explorer Tour"
        />

        <div className="hero-content">
          <h1>UK</h1>

          <p>
            London • Manchester
          </p>

          <Link to="/Classic-UK">
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
              src="https://wallpaperaccess.com/full/2465100.jpg"
              alt="London"
            />
            <p>London Skyline</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.xuE94QS-kT2Sz27LBSxX0gHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Windsor Castle"
            />
            <p>Windsor Castle</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://th.bing.com/th/id/OIP.ENgfMatmgkpkCsAOI0E6WwAAAA?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Old Trafford Manchester"
            />
            <p>Old Trafford, Manchester</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://wallpaperaccess.com/full/4546119.jpg"
              alt="Manchester Skyline"
            />
            <p>Manchester Skyline</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Iconic British Landmarks</div>
          <div>⚽ Football Heritage at Old Trafford</div>
          <div>🏛️ Royal Windsor Castle</div>
          <div>📸 London & Manchester in One Trip</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Classic Britain in 7 Days</h2>

        <p>
          From royal palaces to the home of football — the ultimate England escape
        </p>

        <br />

        <Link to="/Classic-UK">
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
              src="https://tse1.mm.bing.net/th/id/OIP.ZoHG7J2Hr00aA4lGuLmQsQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}> India – London </p>
              <p>
             Arrival in London: Begin Your Classic UK Journey<br/> 
 
Welcome to London, one of the world’s most historic and vibrant capitals. Upon arrival at London 
Heathrow Airport, you will be met for a smooth private transfer to your hotel. As you settle in, the 
charm of London unfolds around you—from its iconic monuments to its charming streets and modern 
atmosphere. Whether you're exploring the local area or simply relaxing after your journey, your first 
evening sets the stage for an exciting adventure.<br/> 
 
Overnight Stay in London
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://img.freepik.com/premium-photo/luxury-hotel-five-star-room-service-various-food-platters-bread-coffee-as-inroom-breakfast-travel-hospitality_360074-52793.jpg?w=2000"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Breakfast at Hotel </p>
              <p>
                After breakfast, proceed for Day 1 of your London Hop On Hop Off Tour, allowing you to explore 
key attractions at your own pace.<br/> 
Today includes entrance to two of London’s most popular experiences: <br/>
London Eye - This iconic giant observation wheel offers breathtaking panoramic views over the River 
Thames and London’s skyline. From the top, you can admire famous sights such as Big Ben, the 
Houses of Parliament, and St. Paul’s Cathedral, making it one of the must-do attractions in the city. 
Madame Tussauds - At this world-famous wax museum, encounter incredibly lifelike figures of 
celebrities, world leaders, superheroes, and historical icons. Madame Tussauds offers immersive 
zones and interactive displays—perfect for fun photos and unforgettable memories. <br/>
Spend the rest of the day exploring London through various Hop On Hop Off routes.<br/> 
Overnight Stay in London
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://th.bing.com/th/id/OIP.3W7AX0cT7Zya9SEWFsWppQHaEK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>London – Hop On Hop Off (Day 2), Tower of London & Tower Bridge</p>
              <p>
            Breakfast at Hotel. <br/>
 
Continue your sightseeing journey with Day 2 of your London Hop On Hop Off Tour, covering more 
historic and modern highlights of the city.<br/> 
 
Today includes entrance to two legendary attractions:
Tower of London - A UNESCO World Heritage Site, the Tower of London is one of Britain’s most 
important historic landmarks. Discover over 1,000 years of history as you explore the ancient 
fortress, hear stories of kings, queens, prisoners, and executions, and witness the dazzling Crown 
Jewels—the nation’s greatest treasures.<br/>  
 
Tower Bridge - An iconic symbol of London, Tower Bridge combines architectural beauty with 
fascinating engineering. Walk through the high-level glass walkways for spectacular views of the 
River Thames and explore the Victorian Engine Rooms to learn about the mechanisms that once 
powered the bridge. <br/> 
 
Enjoy the remainder of your day exploring London at leisure. <br/> 
 
Overnight Stay in London
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.vW8xe27kFKE-a7uuk1ACnwHaD2?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Cotswolds and Oxford Guided Day - Trip from London on SIC basis.  </p>
              <p>
             Embark on a full - day guided tour of the English countryside from London. Admire the fairytale houses 
of the Cotswolds, the historic Oxford University, and the beauty of the English Countryside.<br/> 
Depart London on a full-day tour that takes you west to experience the beauty of the Cotswolds 
countryside, and the university city of Oxford. <br/>
 
Drive through the Cotswolds, as you enjoy views of the lovely landscape and stone villages. A 
designated area of outstanding natural beauty, this is the English countryside at its finest. We will stop 
at Burford and Bourton-On-The-Water, the two most loved villages of the Cotswolds. <br/>
Continue to Oxford to explore the most famous university city in the world. Free-time for lunch in the 
heart of the city. Learn about Oxford’s connection with Alice in Wonderland and Harry Potter. <br/>
 
Overnight Stay in London 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="hhttps://tse3.mm.bing.net/th/id/OIP.tOM6MzU6MQvMqjd6ekeLMwHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>London → Manchester</p>
              <p> 
Breakfast at Hotel. <br/>
 After breakfast, proceed for your private transfer from your Birmingham hotel to the train station. 
Upon arrival in Manchester, enjoy another private transfer to your hotel. Manchester is known for 
its rich industrial heritage, iconic music culture, and world-famous football legacy.<br/> 
Overnight Stay in Manchester
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://th.bing.com/th/id/R.db45d21605ff4be495c8f69adfb5430f?rik=pt7wPvlh84x25w&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f2%2f6%2fc%2f1009233-download-old-trafford-wallpaper-1920x1200.jpg&ehk=6vMNC%2fk%2b3DODf8hRUSZqX2pkAgz0OMAMGZjBAeQxvCc%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}> Manchester City Tour + Old Trafford </p>
              <p>
              Breakfast at Hotel. <br/> 
 
Immerse yourself in the city story on the Manchester City Stadium Tour. Gain exclusive access to the 
stadium for a behind-the-scenes experience and strike a pose with a virtual Pep Guardiola. 
Delve into the City Story as you walk out of the glass players' tunnel, sit in the seats in the dugouts, 
and soak up the views of the stadium from pitch side.  <br/>
Pose for a photo and field questions with a virtual Pep Guardiola in the press conference room. Get 
an exclusive look at the home team dressing room, where you can take a selfie with your favourite 
player's shirt and walk down the tunnel to the sound of the Etihad Stadium crowd.  <br/>
 
Overnight Stay in Manchester.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://wallpaperaccess.com/full/3056517.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>   Manchester → India </p>
              <p>
             Breakfast at Hotel.  <br/>
 
After breakfast, enjoy a private transfer from your hotel to the Manchester Airport for your return 
journey to India, carrying memorable experiences from your United Kingdom adventure.   
                ________________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("Classic UK Explorer: London & Manchester")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your British journey</p>
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

export default ClassicUKExplorer;