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
    question: "What is the best time to visit England and Scotland for this London-Edinburgh-Glasgow tour?",
    answer:
      "Late Spring to early Autumn (May–September) offers the mildest weather and the longest daylight hours, ideal for sightseeing in London and exploring the Scottish Highlands, castles and lochs around Edinburgh and Glasgow. August is especially lively in Edinburgh thanks to the Fringe Festival, though December brings festive markets across both countries.",
  },
  {
    question: "What is included in the 8-day Grand Britain Experience package?",
    answer:
      "The package includes hotel accommodation for 7 nights (3 nights in London, 2 nights each in Edinburgh and Glasgow), daily breakfast, train transfers between cities, guided city tours in London, Edinburgh and Glasgow, and sightseeing along the way including Edinburgh Castle and the Scottish countryside. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to England and Scotland?",
    answer:
      "Indian passport holders require a single UK Standard Visitor visa, valid for travel across England, Scotland, Wales and Northern Ireland. We recommend applying at least 6–8 weeks before your travel date to allow time for appointments and processing. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include Big Ben, the Tower of London and Buckingham Palace in London, the historic Edinburgh Castle and Royal Mile in Scotland's capital, and Glasgow Cathedral and the vibrant West End in Glasgow, along with scenic drives through the Scottish countryside.",
  },
  {
    question: "What currency is used across England and Scotland?",
    answer:
      "The Pound Sterling (GBP) is used throughout the UK, including Scotland, where you may also receive Scottish banknotes as change. Cards are widely accepted almost everywhere, though it's handy to carry some cash for small purchases. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add extra nights in London, a Highlands excursion, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
          src="https://tse3.mm.bing.net/th/id/OIP.puRJwluFPRhuvf1ud_ixRAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Grand Britain Tour"
        />

        <div className="hero-content">
          <h1>GRAND BRITAIN</h1>

          <p>
            London • Edinburgh • Glasgow
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
              src="https://wallpaperaccess.com/full/6778499.jpg"
              alt="London"
            />
            <p>London Skyline</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://wallpaperbat.com/img/271253-edinburgh-castle-hd-wallpaper.jpg"
              alt="Edinburgh Castle"
            />
            <p>Edinburgh Castle</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.7iWsgM-0Z4vraM6z-7EOowHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Glasgow Cathedral"
            />
            <p>Glasgow Cathedral</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://wallpapercat.com/w/middle-retina/d/5/2/1617996-2048x1365-desktop-hd-glasgow-scotland-background-image.jpg"
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
          <div>🏰 Iconic British Landmarks</div>
          <div>🏴󠁧󠁢󠁳󠁣󠁴󠁿 Historic Edinburgh Castle</div>
          <div>🎨 Glasgow's Art & Culture</div>
          <div>📸 England & Scotland in One Trip</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Grand Britain in 8 Days</h2>

        <p>
          From royal palaces to Scottish castles, from the Thames to the Royal Mile — the ultimate Britain experience
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
              src="https://wallpaperaccess.com/full/32511.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}> India → London</p>
              <p>
             Welcome to London – World’s most vibrant and historic capitals <br/>
Welcome to London! After you land, your private driver will be waiting for you at the arrivals hall. He 
will take you directly to your hotel for a smooth and comfortable start to your trip <br/>
 Overnight Stay in London
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.4m4u4IW25RgVhWvXMx-7EwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>  London – City tour with London Eye and London River Cruise </p>
              <p>
              Breakfast at the hotel.<br/> 
After breakfast, proceed for your London City Tour on SIC basis. 
Your panoramic city tour covers some of London’s most iconic landmarks, giving you a perfect 
introduction to the city’s rich history, culture, and modern attractions.<br/> 
The London Eye Experience<br/> 
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
              src="https://tse3.mm.bing.net/th/id/OIP.Mc8ozUJli-dPLEFRrxsgzgHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>London – City tour with Madame Tussauds and Tower Bridge</p>
              <p>
             Breakfast at the hotel. <br/>
After breakfast, proceed for your London City Tour on SIC basis.<br/>
Your panoramic city tour covers some of London’s most iconic landmarks, giving you a perfect 
introduction to the city’s rich history, culture, and modern attractions.<br/> 
Madame Tussauds London <br/>
Your tour includes entry to Madame Tussauds Wax Museum, a must-visit London attraction. 
Meet lifelike wax figures of your favorite celebrities, historical figures, sports stars, and political 
leaders<br/> 
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
              src="https://i.pinimg.com/originals/f0/53/31/f053312501da8df5ac58ecace259559c.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>London – Edinburgh </p>
              <p>
             Breakfast at the hotel.<br/> 
After breakfast, transfer from your London hotel to London Train Station by private vehicle. 
Board your train from London to Edinburgh and enjoy a scenic journey through British countryside 
landscapes.<br/> 
 Upon arrival at Edinburgh Train Station, meet your private driver who will transfer you to your hotel.<br/> 
Edinburgh, the Scottish capital, is known for its historic charm, medieval architecture, and vibrant 
culture.<br/> 
 Overnight Stay in Edinburgh.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.8ZvUeMV8sYyQ-iMjq62tPQHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Edinburgh Hop on Hop off City Tour & Edinburgh Castle Entry Ticket </p>
              <p>
           
Breakfast at the hotel.<br/>  
Today, explore Edinburgh with your Hop on Hop off City Tour.<br/>  
Enjoy stunning views of Edinburgh Castle, the Royal Mile, Holyrood Palace, and the city’s gothic 
architecture. <br/> 
 Edinburgh Castle <br/> 
Your tour includes an Edinburgh Castle Entry Ticket. <br/> 
Discover Scotland’s most iconic fortress, home to centuries of history, the Crown Jewels, and 
panoramic views of the city. <br/> 
 Overnight Stay in Edinburgh
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images5.alphacoders.com/458/thumb-1920-458232.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Edinburgh → Glasgow</p>
              <p>
             Breakfast at the hotel.<br/> 
After breakfast, private transfer from your Edinburgh hotel to Edinburgh Train Station. 
Board your train to Glasgow, one of Scotland’s most dynamic cities, known for its vibrant arts scene, 
architecture, and warm hospitality.<br/> 
 Upon arrival, private transfer from Glasgow Train Station to your hotel. <br/>
 Overnight Stay in Glasgow
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.QPeXr4NTLrGZ3GshQApxwAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Glasgow - Loch Lomond, Trossachs & Stirling Castle Tour from Glasgow on SIC Basis (Without Entrance)  </p>
              <p>
             Breakfast at the hotel.<br/> 
Today, enjoy your full-day Loch Lomond, Trossachs & Stirling Castle Tour on SIC basis (without 
entrance).<br/> 
Embark on a guided bus tour of Loch Lomond, the Trossachs, and Stirling Castle from Glasgow. Take 
in the views of the lush Scottish countryside and learn about William Wallace and Rob Roy from 
your driver.<br/> 
 After leaving Glasgow, stop at the ‘bonnie banks’ of Loch Lomond, one of the prettiest and largest 
lochs in the whole of Scotland. Take a cruise, enjoying spectacular views of the loch’s many islands 
and the surrounding mountains. 
Alternatively, take a stroll through the picturesque loch-side conservation village of Luss, with its 
quaint houses, cafes, and stunning views across the loch’s western shoreline.<br/> 
 Overnight Stay in Glasgow
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://rare-gallery.com/uploads/posts/806729-Glasgow-United-Kingdom-Houses-Rivers-Bridges-Night.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{ color: "blue" }}>   Glasgow → India </p>
              <p>
             Breakfast at the hotel. <br/>
After breakfast, private transfer from Glasgow Hotel to Glasgow Airport for your onward flight. 
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
            onClick={() => setActiveModal("Grand Britain Experience: England & Scotland Highlights")}
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