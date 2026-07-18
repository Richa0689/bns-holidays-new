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
      "May to September is ideal, with long daylight hours, mild weather and green landscapes across London, Edinburgh and Glasgow. Summer (June–August) is peak season, great for outdoor sightseeing and Highland excursions, while spring and early autumn offer fewer crowds and comfortable temperatures for city walks.",
  },
  {
    question: "What is included in the 8-day Grand Britain Experience package?",
    answer:
      "The package includes 7 nights accommodation (3 nights London, 2 nights Edinburgh, 2 nights Glasgow), daily breakfast, comfortable coach transfers between cities, guided city tours in London, Edinburgh and Glasgow, and sightseeing at iconic landmarks along the way. International flights, visa fees and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to England and Scotland?",
    answer:
      "Indian passport holders require a UK Standard Visitor Visa, which covers travel across England and Scotland on this itinerary. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Tower Bridge and London Eye in London, the fairy-tale grandeur of Windsor Castle, Edinburgh Castle and the Royal Mile, the vibrant art and culture of Glasgow, and the scenic shores of Loch Lomond.",
  },
  {
    question: "What currency is used across England and Scotland?",
    answer:
      "The United Kingdom uses the Pound Sterling (GBP) across both England and Scotland. Cards are widely accepted everywhere, but it's useful to carry some local cash for small purchases and transit. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add a Scottish Highlands excursion, extra nights in London, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
          src="https://cdn.getyourguide.com/img/location/ca50d18330afdfcc.jpeg/99.jpg"
          alt="Grand Britain Tour"
        />

        <div className="hero-content">
          <h1>Grand Britain Experience</h1>

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
              src="https://wallpapercrafter.com/desktop/289586-london-tower-bridge-bridge-monument.jpg"
              alt="Tower Bridge London"
            />
            <p>Tower Bridge, London</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://wallpapersok.com/images/hd/tourists-gathering-outside-windsor-castle-square-nw9rjal4jy9jnzkf.jpg"
              alt="Windsor Castle"
            />
            <p>Windsor Castle</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://wallpapercat.com/w/full/1/6/6/679458-2740x1532-desktop-hd-edinburgh-castle-background-image.jpg"
              alt="Edinburgh Castle"
            />
            <p>Edinburgh Castle</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.btJzdRBGBKD1vDZ9-FBBOwHaEM?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Glasgow Scotland"
            />
            <p>Glasgow & Loch Lomond</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Iconic London Landmarks</div>
          <div>👑 Royal Windsor Castle</div>
          <div>🗼 Historic Edinburgh Castle</div>
          <div>🎨 Vibrant Glasgow Culture</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Best of Britain in 8 Days</h2>

        <p>
          From the royal grandeur of London to the storybook charm of Edinburgh and the creative buzz of Glasgow
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
              src="https://images.unsplash.com/photo-1543832923-44667a44c804?auto=format&fit=crop&w=1200&q=80"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>India → London</p>
              <p>
Welcome to London – World’s most vibrant and historic capitals 
Welcome to London! After you land, your private driver will be waiting for you at the arrivals hall. He 
will take you directly to your hotel for a smooth and comfortable start to your trip 
Overnight Stay in London 
 
Day 2 London – City tour with London Eye and London River Cruise  
 
Breakfast at the hotel. 
After breakfast, proceed for your London City Tour on SIC basis. 
Your panoramic city tour covers some of London’s most iconic landmarks, giving you a perfect 
introduction to the city’s rich history, culture, and modern attractions. 
The London Eye Experience 
Your tour includes a ticket for the London Eye, one of the world’s tallest observation wheels. 
Enjoy a 30-minute ride in a fully enclosed glass capsule 
Get breathtaking panoramic views of the River Thames, Big Ben, St. Paul’s Cathedral, and the entire 
London skyline 
A perfect opportunity for unforgettable photos of London from above 
London River Cruise 
Experience London from a unique perspective as you cruise along the River Thames. 
Sail past major landmarks including Tower Bridge, Shakespeare’s Globe, The Shard, St. Paul’s 
Cathedral, and the London Eye 
Enjoy commentary that highlights the history and stories behind London’s most famous sites 
A relaxing and scenic journey through the heart of the city 
 
Overnight Stay in London 
 
Day 3 London – City tour with Madame Tussauds and Tower Bridge  
 
Breakfast at the hotel. 
After breakfast, proceed for your London City Tour on SIC basis. 
 
 
Apextion DMC 
Email: sales@apextiondmc.com, groups@apextiondmc.com || Contact No.: +91 11 4921 5555 
www.apextiondmc.com  
LONDON | PARIS | NEW DELHI | MUMBAI 
Your panoramic city tour covers some of London’s most iconic landmarks, giving you a perfect 
introduction to the city’s rich history, culture, and modern attractions. 
Madame Tussauds London 
Your tour includes entry to Madame Tussauds Wax Museum, a must-visit London attraction. 
Meet lifelike wax figures of your favorite celebrities, historical figures, sports stars, and political 
leaders 
Enjoy interactive zones like Marvel Superheroes 4D, Star Wars experience, and music icons 
Take memorable photos with your favorite personalities in themed settings 
Tower Bridge 
Walk along the iconic Tower Bridge, explore its high-level glass walkways, and enjoy views of the River 
Thames and the city skyline. Learn about the bridge’s fascinating engineering and history. 
 
Overnight Stay in London 
 
Day 4 London – Edinburgh  
 
Breakfast at the hotel. 
After breakfast, transfer from your London hotel to London Train Station by private vehicle. 
Board your train from London to Edinburgh and enjoy a scenic journey through British countryside 
landscapes. 
 
Upon arrival at Edinburgh Train Station, meet your private driver who will transfer you to your hotel. 
Edinburgh, the Scottish capital, is known for its historic charm, medieval architecture, and vibrant 
culture. 
 
Overnight Stay in Edinburgh. 
 
Day 5 Edinburgh - 01 Day Edinburgh Hop on Hop off City Tour & Edinburgh Castle Entry Ticket 
 
Breakfast at the hotel. 
Today, explore Edinburgh witLondon – Edinburgh  
 
Breakfast at the hotel. 
After breakfast, transfer from your London hotel to London Train Station by private vehicle. 
Board your train from London to Edinburgh and enjoy a scenic journey through British countryside 
landscapes. 
 
Upon arrival at Edinburgh Train Station, meet your private driver who will transfer you to your hotel. 
Edinburgh, the Scottish capital, is known for its historic charm, medieval architecture, and vibrant 
culture. 
 
Overnight Stay in Edinburgh.h your Hop on Hop off City Tour. 
Enjoy stunning views of Edinburgh Castle, the Royal Mile, Holyrood Palace, and the city’s gothic 
architecture. 
 
Edinburgh Castle 
Your tour includes an Edinburgh Castle Entry Ticket. 
Discover Scotland’s most iconic fortress, home to centuries of history, the Crown Jewels, and 
panoramic views of the city. 
 
Overnight Stay in Edinburgh 
 
 
 
Apextion DMC 
Email: sales@apextiondmc.com, groups@apextiondmc.com || Contact No.: +91 11 4921 5555 
www.apextiondmc.com  
LONDON | PARIS | NEW DELHI | MUMBAI 
Day 6 Edinburgh – Glasgow  
 
Breakfast at the hotel. 
After breakfast, private transfer from your Edinburgh hotel to Edinburgh Train Station. 
Board your train to Glasgow, one of Scotland’s most dynamic cities, known for its vibrant arts scene, 
architecture, and warm hospitality. 
 
Upon arrival, private transfer from Glasgow Train Station to your hotel. 
 
Overnight Stay in Glasgow 
 
Day 7 Glasgow - Loch Lomond, Trossachs & Stirling Castle Tour from Glasgow on SIC Basis (Without 
Entrance) 
 
Breakfast at the hotel. 
Today, enjoy your full-day Loch Lomond, Trossachs & Stirling Castle Tour on SIC basis (without 
entrance). 
Embark on a guided bus tour of Loch Lomond, the Trossachs, and Stirling Castle from Glasgow. Take 
in the views of the lush Scottish countryside and learn about William Wallace and Rob Roy from 
your driver. 
 
After leaving Glasgow, stop at the ‘bonnie banks’ of Loch Lomond, one of the prettiest and largest 
lochs in the whole of Scotland. Take a cruise, enjoying spectacular views of the loch’s many islands 
and the surrounding mountains. 
Alternatively, take a stroll through the picturesque loch-side conservation village of Luss, with its 
quaint houses, cafes, and stunning views across the loch’s western shoreline. 
 
Overnight Stay in Glasgow 
 
Day 8 Glasgow – India 
 
Breakfast at the hotel. 
After breakfast, private transfer from Glasgow Hotel to Glasgow Airport for your onward flight. 
Depart with wonderful memories of your UK trip. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&w=1200&q=80"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>London – City tour with London Eye and London River Cruise</p>
              <p>
Breakfast at the hotel. 
After breakfast, proceed for your London City Tour on SIC basis. 
Your panoramic city tour covers some of London’s most iconic landmarks, giving you a perfect 
introduction to the city’s rich history, culture, and modern attractions. 
The London Eye Experience 
Your tour includes a ticket for the London Eye, one of the world’s tallest observation wheels. 
Enjoy a 30-minute ride in a fully enclosed glass capsule 
Get breathtaking panoramic views of the River Thames, Big Ben, St. Paul’s Cathedral, and the entire 
London skyline 
A perfect opportunity for unforgettable photos of London from above 
London River Cruise 
Experience London from a unique perspective as you cruise along the River Thames. 
Sail past major landmarks including Tower Bridge, Shakespeare’s Globe, The Shard, St. Paul’s 
Cathedral, and the London Eye 
Enjoy commentary that highlights the history and stories behind London’s most famous sites 
A relaxing and scenic journey through the heart of the city 
Overnight Stay in London 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1590059390047-f5c7c0d2cf3d?auto=format&fit=crop&w=1200&q=80"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>London – City tour with Madame Tussauds and Tower Bridge</p>
              <p>
        Breakfast at the hotel. 
After breakfast, proceed for your London City Tour on SIC basis. 
Apextion DMC 
Email: sales@apextiondmc.com, groups@apextiondmc.com || Contact No.: +91 11 4921 5555 
www.apextiondmc.com  
LONDON | PARIS | NEW DELHI | MUMBAI 
Your panoramic city tour covers some of London’s most iconic landmarks, giving you a perfect 
introduction to the city’s rich history, culture, and modern attractions. 
Madame Tussauds London 
Your tour includes entry to Madame Tussauds Wax Museum, a must-visit London attraction. 
Meet lifelike wax figures of your favorite celebrities, historical figures, sports stars, and political 
leaders 
Enjoy interactive zones like Marvel Superheroes 4D, Star Wars experience, and music icons 
Take memorable photos with your favorite personalities in themed settings 
Tower Bridge 
Walk along the iconic Tower Bridge, explore its high-level glass walkways, and enjoy views of the River 
Thames and the city skyline. Learn about the bridge’s fascinating engineering and history. 
 Overnight Stay in London 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1543832923-44667a44c804?auto=format&fit=crop&w=1200&q=80"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>London → Edinburgh</p>
              <p>
   Breakfast at the hotel. 
After breakfast, transfer from your London hotel to London Train Station by private vehicle. 
Board your train from London to Edinburgh and enjoy a scenic journey through British countryside 
landscapes. 
Upon arrival at Edinburgh Train Station, meet your private driver who will transfer you to your hotel. 
Edinburgh, the Scottish capital, is known for its historic charm, medieval architecture, and vibrant 
culture. 
Overnight Stay in Edinburgh.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1580891434392-9e3f0a8f5f0f?auto=format&fit=crop&w=1200&q=80"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Edinburgh - 01 Day Edinburgh Hop on Hop off City Tour & Edinburgh Castle Entry Ticket</p>
              <p>
           Breakfast at the hotel. 
Today, explore Edinburgh witLondon – Edinburgh  
Breakfast at the hotel. 
After breakfast, transfer from your London hotel to London Train Station by private vehicle. 
Board your train from London to Edinburgh and enjoy a scenic journey through British countryside 
landscapes. 
Upon arrival at Edinburgh Train Station, meet your private driver who will transfer you to your hotel. 
Edinburgh, the Scottish capital, is known for its historic charm, medieval architecture, and vibrant 
culture. 
Overnight Stay in Edinburgh.h your Hop on Hop off City Tour. 
Enjoy stunning views of Edinburgh Castle, the Royal Mile, Holyrood Palace, and the city’s gothic 
architecture. 
Edinburgh Castle 
Your tour includes an Edinburgh Castle Entry Ticket. 
Discover Scotland’s most iconic fortress, home to centuries of history, the Crown Jewels, and 
panoramic views of the city. 
Overnight Stay in Edinburgh 
Apextion DMC 
Email: sales@apextiondmc.com, groups@apextiondmc.com || Contact No.: +91 11 4921 5555 
www.apextiondmc.com  
LONDON | PARIS | NEW DELHI | MUMBAI
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1571310100246-e0676f359b3d?auto=format&fit=crop&w=1200&q=80"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Edinburgh → Glasgow</p>
              <p>
         Breakfast at the hotel. 
After breakfast, private transfer from your Edinburgh hotel to Edinburgh Train Station. 
Board your train to Glasgow, one of Scotland’s most dynamic cities, known for its vibrant arts scene, 
architecture, and warm hospitality. 
Upon arrival, private transfer from Glasgow Train Station to your hotel. 
Overnight Stay in Glasgow 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1533561052116-b1e0a48a58a2?auto=format&fit=crop&w=1200&q=80"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Glasgow - Loch Lomond, Trossachs & Stirling Castle Tour from Glasgow on SIC Basis (Without Entrance)</p>
              <p>
    Breakfast at the hotel. 
Today, enjoy your full-day Loch Lomond, Trossachs & Stirling Castle Tour on SIC basis (without 
entrance). 
Embark on a guided bus tour of Loch Lomond, the Trossachs, and Stirling Castle from Glasgow. Take 
in the views of the lush Scottish countryside and learn about William Wallace and Rob Roy from 
your driver. 
After leaving Glasgow, stop at the ‘bonnie banks’ of Loch Lomond, one of the prettiest and largest 
lochs in the whole of Scotland. Take a cruise, enjoying spectacular views of the loch’s many islands 
and the surrounding mountains. 
Alternatively, take a stroll through the picturesque loch-side conservation village of Luss, with its 
quaint houses, cafes, and stunning views across the loch’s western shoreline. 
Overnight Stay in Glasgow 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80"
              alt=""
            />
            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{ color: "blue" }}>Glasgow → India</p>
              <p>
          Breakfast at the hotel. 
After breakfast, private transfer from Glasgow Hotel to Glasgow Airport for your onward flight.<br/> 
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
            onClick={() => setActiveModal("8 Days Grand Britain Experience Tour")}
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