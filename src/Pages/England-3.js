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
    question: "What is the best time to visit the UK for this England-Wales-Scotland tour?",
    answer:
      "Late spring through early autumn (May–September) offers the mildest weather and the longest daylight hours, ideal for sightseeing in London, Newport and Edinburgh. Summer is peak season with lively festivals, while shoulder months (May, September) offer pleasant weather with fewer crowds.",
  },
  {
    question: "What is included in the 7-day Classic UK Escape package?",
    answer:
      "The package includes hotel accommodation for 6 nights (2 nights each in London, Newport and Edinburgh), daily breakfast, coach transfers between cities, city tours in London, Newport/Wales and Edinburgh, and sightseeing as per the itinerary. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to the UK?",
    answer:
      "Indian passport holders require a UK Standard Visitor visa. We recommend applying at least 6–8 weeks before your travel date to allow time for biometric appointments and processing. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include Buckingham Palace, the Tower of London and the London Eye in London, Cardiff Castle and the Welsh countryside near Newport, and Edinburgh Castle, the Royal Mile and Holyrood Palace in Scotland's historic capital.",
  },
  {
    question: "What currency is used across the UK?",
    answer:
      "The Pound Sterling (GBP) is used throughout England, Wales and Scotland. Cards are widely accepted almost everywhere, but it is useful to carry some cash for small purchases and tips. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add extra nights in London, a Scottish Highlands extension, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const UKLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.londonbusinessmag.co.uk/wp-content/uploads/2023/01/Wye-Valley-England-and-Wales.jpg"
          alt="UK Tour"
        />

        <div className="hero-content">
          <h1>UK</h1>

          <p>
            London • Newport • Cardiff • Wye Valley • Edinburgh
          </p>

          <Link to="/uk">
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
              src="https://images4.alphacoders.com/795/795081.jpg"
              alt="London"
            />
            <p>London Skyline</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.cQRzp7wvvd5OOYxWUlWchQHaEF?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Cardiff Castle"
            />
            <p>Cardiff Castle, Wales</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://eu-assets.simpleview-europe.com/visitmonmouthshire/imageresizer/?image=%2Fdbimgs%2FAutumn%20Eagles%20Nest%201920x1080.jpg&action=FeaturedItemsGalleryProElite3x2"
              alt="Wye Valley"
            />
            <p>Wye Valley</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://wallpapercat.com/w/full/1/6/6/679458-2740x1532-desktop-hd-edinburgh-castle-background-image.jpg"
              alt="Edinburgh Castle"
            />
            <p>Edinburgh Castle</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Royal Landmarks of London</div>
          <div>🐉 The Charm of Welsh Castles</div>
          <div>🏴󠁧󠁢󠁳󠁣󠁴󠁿 Historic Edinburgh Old Town</div>
          <div>📸 Three Nations in Seven Days</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience England, Wales & Scotland in 7 Days</h2>

        <p>
          From royal palaces to rugged castles, cobbled lanes to Highland views — the classic UK escape
        </p>

        <br />

        <Link to="/uk">
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
              src="https://tse1.explicit.bing.net/th/id/OIP.3FA2Xgo0gtsJPlAQoGkEjAHaEV?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}> India → London</p>
              <p>
             Welcome to one of the world’s most iconic capitals!.<br /> 
             Upon arrival, meet your private driver in the arrivals hall..<br />  
             Enjoy a comfortable transfer to your hotel: The California Hotel (or similar)  
             Check in and relax after your journey. .<br /> 
             Overnight Stay in London 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.upuGtbhXwJoIoT1CbolE3QHaEy?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>London City Tour + London Eye + River Cruise </p>
              <p>
             Breakfast at the hotel.<br /> 
             Proceed for your Hop-On Hop-Off City Tour (24 hours) <br />
             Explore famous landmarks such as: <br />
             Big Ben<br /> 
             Buckingham Palace <br />
             St. Paul's Cathedral<br /> 
             Tower Bridge <br />
              London Eye Experience <br />
             Entry to the London Eye <br />
             30-minute ride with panoramic city views <br />
              River Thames Cruise <br />
             Relax on a scenic cruise along the River Thames <br />
             Pass landmarks like: <br />
             The Shard <br />
             Tower of London <br />
             Overnight Stay in London 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://wallpapercrafter.com/desktop1/551782-City-Hall-Tower-Bridge-sunset-London-urban-building.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}> London → Newport </p>
              <p>
              Breakfast at the hotel <br />
             Private transfer to the train station<br /> 
             Board your train to Newport <br />
              Private transfer to your hotel: Holiday Inn Express Newport (or similar) <br />
             Rest of the day at leisure<br />
             Overnight Stay in Newport 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://sail-newport.com/wp-content/uploads/2024/11/Newport_Lighthouse-Coastal-Tour_Slider-3.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}> Newport – Yacht Sightseeing Cruise </p>
              <p>
               Breakfast at the hotel<br /> 
               Yacht Sightseeing Cruise<br /> 
              Enjoy a relaxing standard sightseeing yacht cruise <br />
              Experience scenic waterfront views and coastal charm 
              You can also explore nearby attractions such as: <br />
             Newport Transporter Bridge <br />
             Tredegar House <br />
             Overnight Stay in Newport 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://wallpapercave.com/wp/wp2107105.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}> Newport → Edinburgh </p>
              <p>
              • Breakfast at the hotel <br /> 
              • Private transfer to the station <br /> 
              • Board your train to Edinburgh <br /> 
                Upon arrival: <br />
              • Private transfer to your hotel: Holiday Inn Express Edinburgh City Centre (or similar)<br />  
               Overnight Stay in Edinburgh
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://rare-gallery.com/uploads/posts/4551009-castle-edinburgh.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}> Edinburgh City Tour + Edinburgh Castle </p>
              <p>
              Breakfast at the hotel <br /> 
            Hop-On Hop-Off Tour (24 Hours)<br /> 
           Discover top attractions including: 
            Royal Mile  <br />
             Holyrood Palace<br />  
              Arthur's Seat<br />  
             Edinburgh Castle Visit <br />
             Entry to Edinburgh Castle  <br />
            Learn about Scottish history and enjoy stunning city views<br />  
             Overnight Stay in Edinburgh 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.woPU4xfrEh5VDjjKY5ZYtwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}> Edinburgh → India </p>
              <p>
               Breakfast at the hotel <br />
                Private transfer to the airport for your return journey <br />
 
               Depart with unforgettable UK memories    
                ________________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("Classic UK Escape: London, Newport & Edinburgh Highlights")}
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

export default UKLanding;