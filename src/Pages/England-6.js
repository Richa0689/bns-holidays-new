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
    question: "What is the best time to visit London and Amsterdam for this tour?",
    answer:
      "Late Spring to early Autumn (May–September) offers the mildest weather and the longest daylight hours, ideal for sightseeing in London and cycling around Amsterdam's canals. Spring (March–May) is also lovely in Amsterdam thanks to the tulip season, while December brings festive markets and lights to both cities.",
  },
  {
    question: "What is included in the 7-day Classic Europe Escape package?",
    answer:
      "The package includes hotel accommodation for 6 nights (3 nights each in London and Amsterdam), daily breakfast, transfers between the airport, hotels and stations, guided city tours in both London and Amsterdam, and sightseeing along the way including a Thames river cruise and an Amsterdam canal cruise. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to the UK and the Netherlands?",
    answer:
      "Indian passport holders require a UK Standard Visitor visa and a Schengen visa for the Netherlands. We recommend applying at least 6–8 weeks before your travel date to allow time for appointments and processing. Our team can assist you with documentation and appointment scheduling for both visas.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include Big Ben, the Tower of London, Buckingham Palace and the London Eye in England, and Amsterdam's historic canal ring, the Van Gogh Museum area, Dam Square and the charming Jordaan district in the Netherlands, along with scenic river and canal cruises in both cities.",
  },
  {
    question: "What currency is used across London and Amsterdam?",
    answer:
      "London uses the Pound Sterling (GBP), while Amsterdam uses the Euro (EUR). Cards are widely accepted in both cities, though it's handy to carry a little cash for small purchases. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add extra nights in London or Amsterdam, a Paris or Brussels extension, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const EuropeLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://wallpapercrafter.com/desktop1/552900-waterway-canal-reflection-amsterdam-netherlands.jpg"
          alt="Europe Tour"
        />

        <div className="hero-content">
          <h1>EUROPE</h1>

          <p>
            London • Amsterdam
          </p>

          <Link to="/Classic-Europe">
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
              src="https://images7.alphacoders.com/961/961343.jpg"
              alt="London"
            />
            <p>London Skyline</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.0IikTjmtj8bcRs8jF4io4wHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Amsterdam Canals"
            />
            <p>Amsterdam Canals</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://d36tnp772eyphs.cloudfront.net/blogs/1/2019/11/Tulip-and-windmills-in-the-Netherlands.jpg"
              alt="Amsterdam Windmills"
            />
            <p>Dutch Windmills</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://th.bing.com/th/id/OIP.M9XvPl_lBIOirEpfnvZirgHaE6?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Amsterdam Tulips"
            />
            <p>Tulip Fields</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Iconic British Landmarks</div>
          <div>🚲 Charming Amsterdam Canals</div>
          <div>🌷 Dutch Culture & Tulips</div>
          <div>📸 Two Countries in One Trip</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Classic Europe in 7 Days</h2>

        <p>
          From royal palaces to canal-side cafés, from the Thames to the Amstel — the ultimate Europe escape
        </p>

        <br />

        <Link to="/Classic-Europe">
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
              src="https://th.bing.com/th/id/R.b513bff997ef0d0a3ada76b08fa9186f?rik=egkqCzI3ggxoFQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fb%2f9%2f7%2f1126654-hd-wallpaper-of-india-1920x1080-for-lockscreen.jpg&ehk=0ULT5iHF0ELOtj1kwV1vqtpDUSPhkCP1PYBEwwB2MpQ%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}> India → London</p>
              <p>
             Welcome to London – World’s most vibrant and historic capitals 
Welcome to London! After you land, your private driver will be waiting for you at the arrivals hall. He 
will take you directly to your hotel for a smooth and comfortable start to your trip<br/> 
 Overnight Stay in London 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.mqsfufflFdqnpRjo63eJ0QHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>London – City tour with London Eye and London River Cruise  </p>
              <p>
                Breakfast at the hotel. <br/>
After breakfast, proceed for your London City Tour on SIC basis. <br/>
Your panoramic city tour covers some of London’s most iconic landmarks, giving you a perfect 
introduction to the city’s rich history, culture, and modern attractions. <br/>
The London Eye Experience <br/>
Your tour includes a ticket for the London Eye, one of the world’s tallest observation wheels. 
Enjoy a 30-minute ride in a fully enclosed glass capsule 
Get breathtaking panoramic views of the River Thames, Big Ben, St. Paul’s Cathedral, and the entire 
London skyline <br/>
A perfect opportunity for unforgettable photos of London from above 
London River Cruise <br/>
Experience London from a unique perspective as you cruise along the River Thames. 
Sail past major landmarks including Tower Bridge, Shakespeare’s Globe, The Shard, St. Paul’s 
Cathedral, and the London Eye <br/>
Enjoy commentary that highlights the history and stories behind London’s most famous sites 
A relaxing and scenic journey through the heart of the city <br/>
 
Overnight Stay in London
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.O5kBDEr5UMvIDYIUAafPLAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>London – City tour with Madame Tussauds and Tower Bridge </p>
              <p>
              Breakfast at the hotel.<br/> 
After breakfast, proceed for your London City Tour on SIC basis.<br/>
Your panoramic city tour covers some of London’s most iconic landmarks, giving you a perfect 
introduction to the city’s rich history, culture, and modern attractions.<br/> 
Madame Tussauds London <br/>
Your tour includes entry to Madame Tussauds Wax Museum, a must-visit London attraction. 
Meet lifelike wax figures of your favorite celebrities, historical figures, sports stars, and political 
leaders <br/>
Enjoy interactive zones like Marvel Superheroes 4D, Star Wars experience, and music icons 
Take memorable photos with your favorite personalities in themed settings 
Tower Bridge <br/>
Walk along the iconic Tower Bridge, explore its high-level glass walkways, and enjoy views of the River 
Thames and the city skyline. Learn about the bridge’s fascinating engineering and history. <br/>
 
Overnight Stay in London
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.3LbbkxlkJsUcLI-ZPExvjAHaD5?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>London → Amsterdam </p>
              <p>
             Breakfast at the hotel.<br/> 
After breakfast, private transfer from your London hotel to London Train Station. 
Board your train to Amsterdam, one of Europe’s most picturesque and culturally rich cities.. <br/> 
 
Upon arrival, meet your private driver at Amsterdam Train Station who will transfer you to your 
hotel. <br/>
 
Overnight Stay in Amsterdam 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/11/45/ca/65.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Amsterdam - 01 Day Amsterdam Hop on Hop off City Tour & Amsterdam Canal Cruise Ticket </p>
              <p>
              Breakfast at the hotel.. <br/> 
After breakfast, proceed for your Amsterdam City Tour using the Hop On Hop Off service. 
Explore the city’s iconic canals, museums, historic districts, and vibrant neighborhoods at your own 
pace.. <br/> 
 
Amsterdam Canal Cruise. <br/> 
Enjoy a classic Amsterdam Canal Cruise through the UNESCO-listed canal network. 
View charming bridges, narrow merchant houses, and iconic Dutch architecture while learning 
about the city's history and culture.. <br/> 
 
Overnight Stay in Amsterdam 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-360x240/09/a9/1e/a4.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}> Amsterdam - Zaanse Schans, Edam, Volendam & Marken Tour from Amsterdam on SIC Basis  </p>
              <p>
             Breakfast at the hotel.. <br/> 
Today, proceed for your full-day tour to Zaanse Schans, Edam, Volendam, and Marken on SIC basis. 
Visit the traditional Dutch countryside featuring windmills, cheese factories, wooden houses, and 
fishing villages.. <br/> 
Experience Dutch culture, craftsmanship, and scenic beauty in one unforgettable journey. 
 
Overnight Stay in Amsterdam
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://wallpapers.com/images/hd/red-sunset-at-amsterdam-canal-7d1zbmffikkvlhmi.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>   Amsterdam → India </p>
              <p>
             Breakfast at the hotel. . <br/>
After breakfast, private transfer from your Amsterdam Hotel to Amsterdam Airport for your return 
flight. <br/>
 
Depart with wonderful memories of your London and Amsterdam experience.
                ________________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("Classic Europe Escape: London & Amsterdam Highlights")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your European journey</p>
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

export default EuropeLanding;