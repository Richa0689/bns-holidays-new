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
    question: "What is the best time to visit Finland and Sweden for this tour?",
    answer:
      "May to September is ideal, with June to August offering long daylight hours, mild temperatures and the best chance to enjoy outdoor sightseeing in both Helsinki and Stockholm. Winter (December–February) is magical too if you want snow-covered scenery, but summer remains the most comfortable season for first-time travellers.",
  },
  {
    question: "What is included in the 5-day Best of Finland & Sweden package?",
    answer:
      "The package includes 4 nights accommodation (2 nights Helsinki, 2 nights Stockholm), daily breakfast, comfortable transfers, a guided city tour in Helsinki, a guided city tour in Stockholm, and sightseeing at iconic landmarks along the way. International flights, visa fees and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Finland and Sweden?",
    answer:
      "Indian passport holders require a Schengen visa, which covers travel across both Finland and Sweden on this itinerary. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include Senate Square and the Helsinki Cathedral in Finland, a scenic cruise between Helsinki and Stockholm, and Gamla Stan (Old Town), the Vasa Museum and City Hall in Stockholm.",
  },
  {
    question: "What currency is used across Finland and Sweden?",
    answer:
      "Finland uses the Euro (EUR), while Sweden uses the Swedish Krona (SEK). Cards are widely accepted in both countries, but it's useful to carry a small amount of local cash. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add Norway or extra nights in either city, our team will curate the perfect personalised experience for you.",
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
const FinlandSwedenLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://wallpaperaccess.com/full/1495106.jpg"
          alt="Finland & Sweden Tour"
        />

        <div className="hero-content">
          <h1>Best of Finland & Sweden</h1>

          <p>
            Helsinki • Stockholm
          </p>

          <Link to="/Finland-Sweden">
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
              src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/175000/175213-Senate-Square.jpg"
              alt="Helsinki Senate Square"
            />
            <p>Senate Square, Helsink</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://www.campervansweden.com/assets/img/blog/524.png"
              alt="Stockholm Gamla Stan"
            />
            <p>Gamla Stan, Stockholm</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://www.qantas.com/travelinsider/en/experiences/cruises/discover-the-baltic-region-with-viking-cruises/_jcr_content/parsysTop/hero.img.1440.high.jpg/1532409790936.jpg"
              alt="Baltic Sea Cruise"
            />
            <p>Overnight Baltic Cruise</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.I0hhXeunNKLx4ZuYDVGJTQHaEA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Stockholm City Hall"
            />
            <p>Stockholm City Hall</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🇫🇮 Charming Helsinki Old Town</div>
          <div>⛴️ Scenic Overnight Baltic Cruise</div>
          <div>🏰 Historic Gamla Stan, Stockholm</div>
          <div>🌊 Stunning Scandinavian Waterfronts</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Best of Scandinavia in 5 Days</h2>

        <p>
          From the calm design capital of Helsinki to the island city of Stockholm — a journey through Northern Europe's finest
        </p>

        <br />

        <Link to="/Finland-Sweden">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>5 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.hoOM8Sb_5xowSAwqlfYOOQHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>India → Helsinki</p>
              <p>
Welcome to Helsinki – The Nordic Pearl!< br/>  
Arrive at Helsinki Airport and enjoy a smooth private transfer to your hotel. After check-in, spend the 
rest of the day relaxing or strolling around the charming Nordic capital known for its architecture, 
seaside beauty, and vibrant culture.< br/>  
Overnight Stay in Helsinki 
             </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://m.somewheregood.com/media/helsinki-city-sightseeing-hop-on-hop-off-bus-tour-t55474-3.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Helsinki Hop on Hop Off Tour</p>
              <p>
Breakfast at Hotel.< br/>  
Today, explore Helsinki using your 1-Day Hop on Hop Off Bus Pass. Visit top attractions such as 
Senate Square, Rock Church, Sibelius Monument, Market Square, and the picturesque harbor area 
at your own pace.< br/>  
The evening is free to enjoy shopping, a local café, or a leisurely walk by the waterfront.< br/>  
Overnight Stay in Helsinki 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://wallpapercat.com/w/middle-retina/7/3/7/1526017-1920x1280-desktop-hd-stockholm-wallpaper.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Helsinki → Stockholm</p>
              <p>
                Breakfast at Hotel.< br/>  
After breakfast, proceed for a private transfer from your Helsinki hotel to the airport for your flight 
to Stockholm. < br/> 
Arrive in Stockholm and enjoy a comfortable private airport-to-hotel transfer. 
Later, explore Stockholm’s stunning waterfronts, royal buildings, and cozy streets at your leisure.< br/>  
 Overnight Stay in Stockholm 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,dpr=1/tour_img/9d738887d582be0f.jpeg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Stockholm Old Town Walking Tour</p>
              <p>
Breakfast at Hotel.< br/>  
Today, join a shared Old Town (Gamla Stan) Walking Tour, exploring the city’s medieval cobblestone 
lanes, colorful buildings, royal squares, narrow alleys, and historic landmarks. Learn about Sweden’s 
history, Viking heritage, and royal stories.< br/>  
Rest of the day is free to explore Stockholm on your own—visit museums, waterfront cafés, or take a 
relaxing stroll. < br/> 
Apextion DMC < br/> 
Email: sales@apextiondmc.com, groups@apextiondmc.com || Contact No.: +91 11 4921 5555 
www.apextiondmc.com  < br/> 
LONDON | PARIS | NEW DELHI | MUMBAI < br/> 
Overnight Stay in Stockholm
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://rare-gallery.com/uploads/posts/787371-Sweden-Scenery-Houses-Rivers-Sky-Stockholm-Clouds.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Stockholm → India</p>
              <p>
               Breakfast at Hotel. < br/> 
After breakfast, proceed for a private transfer to Stockholm Airport for your flight to India.< br/> 
Reach India__________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("5 Days Best of Finland & Sweden Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Scandinavian journey</p>
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

export default FinlandSwedenLanding;