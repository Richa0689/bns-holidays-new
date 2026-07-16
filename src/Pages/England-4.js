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
    question: "What is the best time to visit England and Scotland for this tour?",
    answer:
      "Late spring to early autumn (May–September) offers the mildest weather and the longest daylight hours across London and Edinburgh, which is ideal for sightseeing and Highland excursions. June to August is peak season, so booking early is recommended for hotels and popular attractions.",
  },
  {
    question: "What is included in the 8-day Grand Britain Experience package?",
    answer:
      "The package includes hotel accommodation for 7 nights (4 nights London, 3 nights Edinburgh), daily breakfast, coach transfers between cities, guided city tours in London and Edinburgh, and a Scottish Highlands excursion. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to the UK?",
    answer:
      "Indian passport holders require a UK Standard Visitor visa. We recommend applying at least 8–10 weeks before your travel date, as appointment slots can take time. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Tower of London and Buckingham Palace in London, the West End theatre district, Edinburgh Castle and the Royal Mile, and the dramatic scenery of the Scottish Highlands, including Loch Ness and Glencoe.",
  },
  {
    question: "What currency is used across the UK?",
    answer:
      "The British Pound (GBP) is used throughout England and Scotland. Cards are widely accepted everywhere, but it is useful to carry some cash for tips, small purchases, and transit. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add extra nights in London, a Highlands extension, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const GrandBritainLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://cdn.kimkim.com/files/a/images/c4a560db5351e7378387e6a59651faf9416a205b/original-9be30c54a39a77057ddbe1ffa7648aba.jpg"
          alt="Grand Britain Tour"
        />

        <div className="hero-content">
          <h1>GRAND BRITAIN</h1>

          <p>
            London • Windsor • Edinburgh • Scottish Highlands
          </p>

          <Link to="/Grand-Britain">
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
              src="https://tse2.mm.bing.net/th/id/OIP.smW049S1USxBS7ItWG0QyAHaEe?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="London"
            />
            <p>London Skyline</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.lOXRteKx-smX_DLWpR8f1AHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Windsor Castle"
            />
            <p>Windsor Castle</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://wallpapercat.com/w/full/a/2/f/679332-2048x1326-desktop-hd-edinburgh-castle-background-photo.jpg"
              alt="Edinburgh Castle"
            />
            <p>Edinburgh Castle</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.2EcxkXqb1Gkyz7avHyb-XAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Scottish Highlands"
            />
            <p>Scottish Highlands</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Royal Palaces & Castles</div>
          <div>🎭 Historic London & the West End</div>
          <div>🏴󠁧󠁢󠁳󠁣󠁴󠁿 Edinburgh's Old Town Charm</div>
          <div>⛰️ Dramatic Highland Scenery</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience England & Scotland in 8 Days</h2>

        <p>
          From royal London to the misty Highlands — the ultimate Grand Britain experience
        </p>

        <br />

        <Link to="/Grand-Britain">
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
              src="https://tse4.mm.bing.net/th/id/OIP.Y3t0AZ4_DMDTjAxpXbAxdwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>India – London </p>
              <p>
              Welcome to London – World’s most vibrant and historic capitals<br /> 
              Welcome to London! After you land, your private driver will be waiting for you at the arrivals hall. He 
              will take you directly to your hotel for a smooth and comfortable start to your trip<br /> 
              Overnight Stay in London 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.-5sfDfe1tIocDA-4dMsQ-gHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>London – City tour with London Eye and London River Cruise </p>
              <p>
                Breakfast at the hotel.<br /> 
After breakfast, proceed for your London City Tour on SIC basis. 
Your panoramic city tour covers some of London’s most iconic landmarks, giving you a perfect 
introduction to the city’s rich history, culture, and modern attractions. <br />
The London Eye Experience <br />
Your tour includes a ticket for the London Eye, one of the world’s tallest observation wheels. 
Enjoy a 30-minute ride in a fully enclosed glass capsule 
Get breathtaking panoramic views of the River Thames, Big Ben, St. Paul’s Cathedral, and the entire 
London skyline <br />
A perfect opportunity for unforgettable photos of London from above 
London River Cruise 
Experience London from a unique perspective as you cruise along the River Thames. 
Sail past major landmarks including Tower Bridge, Shakespeare’s Globe, The Shard, St. Paul’s 
Cathedral, and the London Eye <br />
Enjoy commentary that highlights the history and stories behind London’s most famous sites 
A relaxing and scenic journey through the heart of the city <br />
 
Overnight Stay in London
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.4w7QL0BAQ3-prnUM3gJtBAHaEl?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>London – City tour with Madame Tussauds and Tower Bridge </p>
              <p>
                Breakfast at the hotel. <br />
After breakfast, proceed for your London City Tour on SIC basis.<br />
Your panoramic city tour covers some of London’s most iconic landmarks, giving you a perfect 
introduction to the city’s rich history, culture, and modern attractions.<br /> 
Madame Tussauds London <br />
Your tour includes entry to Madame Tussauds Wax Museum, a must-visit London attraction. 
Meet lifelike wax figures of your favorite celebrities, historical figures, sports stars, and political 
leaders<br /> 
Enjoy interactive zones like Marvel Superheroes 4D, Star Wars experience, and music icons 
Take memorable photos with your favorite personalities in themed settings 
Tower Bridge <br />
Walk along the iconic Tower Bridge, explore its high-level glass walkways, and enjoy views of the River 
Thames and the city skyline. Learn about the bridge’s fascinating engineering and history. <br />
 
Overnight Stay in London
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://th.bing.com/th/id/OIP.k8xiqKq4VeHC_8xoj7V5jgHaEo?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}> Cotswolds and Oxford Guided Day Trip from London on SIC Basis </p>
              <p>
             Breakfast at the hotel.<br /> 
Today, Cotswolds and Oxford Guided Day Trip from London on SIC Basis <br />
 
Embark on a full-day guided tour of the English countryside from London. Admire the fairytale 
houses of the Cotswolds, the historic Oxford University, and the beauty of the English Countryside. 
Depart London on a full-day tour that takes you west to experience the beauty of the Cotswolds 
countryside, and the university city of Oxford. <br />
 
Drive through the Cotswolds, as you enjoy views of the lovely landscape and stone villages. A 
designated area of outstanding natural beauty, this is the English countryside at its finest. We will 
stop at Burford and Bourton-On-The-Water, the two most loved villages of the Cotswolds. <br />
 
Continue to Oxford to explore the most famous university city in the world. Free-time for lunch in 
the heart of the city. <br />
 
Overnight Stay in London
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images6.alphacoders.com/369/thumb-1920-369780.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>London – Edinburgh  </p>
              <p>
               Breakfast at the hotel.<br /> 
After breakfast, transfer from your London hotel to London Train Station by private vehicle. 
Board your train from London to Edinburgh and enjoy a scenic journey through British countryside 
landscapes.<br /> 
 
Upon arrival at Edinburgh Train Station, meet your private driver who will transfer you to your hotel. 
Edinburgh, the Scottish capital, is known for its historic charm, medieval architecture, and vibrant 
culture.<br /> 
Overnight Stay in Edinburgh.

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/6f/50/ac.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Edinburgh - 01 Day Edinburgh Hop on Hop off City Tour & Edinburgh Castle Entry Ticket </p>
              <p>
               Breakfast at the hotel. <br /> 
Today, explore Edinburgh with your Hop on Hop off City Tour.<br /> 
Enjoy stunning views of Edinburgh Castle, the Royal Mile, Holyrood Palace, and the city’s gothic 
architecture. <br />
 
Edinburgh Castle 
Your tour includes an Edinburgh Castle Entry Ticket. <br />
Discover Scotland’s most iconic fortress, home to centuries of history, the Crown Jewels, and 
panoramic views of the city. <br />
 
Overnight Stay in Edinburgh
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.mUbi3tfw0P_S2tnYGNR6mgHaE9?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}> Edinburgh </p>
              <p>
               Breakfast at the hotel.<br /> 
Day at Leisure <br /> 
 
Overnight Stay in Glasgow 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://wallpaperaccess.com/full/6628346.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{ color: "blue" }}>Edinburgh – India</p>
              <p>
               Breakfast at the hotel.<br />  
After breakfast, private transfer from Edinburgh Hotel to Edinburgh Airport for your onward flight. <br /> 
Depart with wonderful memories of your UK trip.
                ________________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("8 Days Grand Britain Experience: England & Scotland Highlights")}
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

export default GrandBritainLanding;