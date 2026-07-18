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
    question: "What is the best time to visit Edinburgh, Glasgow and Inverness for this tour?",
    answer:
      "May to September is ideal, with long daylight hours, mild weather and green landscapes across Scotland. Summer (June–August) is peak season, great for outdoor sightseeing and Highland excursions, while spring and early autumn offer fewer crowds and comfortable temperatures for city walks.",
  },
  {
    question: "What is included in the 7-day Explore Edinburgh + Glasgow + Inverness package?",
    answer:
      "The package includes 6 nights accommodation (2 nights Edinburgh, 2 nights Glasgow, 2 nights Inverness), daily breakfast, comfortable coach transfers between cities, guided city tours in Edinburgh, Glasgow and Inverness, and sightseeing at iconic landmarks along the way. International flights, visa fees and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Scotland?",
    answer:
      "Indian passport holders require a UK Standard Visitor Visa, which covers travel across Scotland on this itinerary. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include Edinburgh Castle and the Royal Mile, the vibrant art and architecture of Glasgow, a scenic drive through Loch Lomond and Glencoe, the mysterious waters of Loch Ness, and the charming Highland capital of Inverness.",
  },
  {
    question: "What currency is used across Scotland?",
    answer:
      "Scotland uses the Pound Sterling (GBP). Cards are widely accepted everywhere, but it's useful to carry some local cash for small purchases and transit. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add an Isle of Skye excursion, extra nights in Edinburgh, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const GlasgowInvernessLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.scottishtours.co.uk/images/tours/179-Edinburgh-Tour-Bus.jpg"
          alt="Edinburgh Glasgow Inverness Tour"
        />

        <div className="hero-content">
          <h1>Explore Edinburgh + Glasgow + Inverness</h1>

          <p>
            Edinburgh • Glasgow • Inverness
          </p>

          <Link to="/Glasgow-Inverness">
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
              src="https://wallpapercat.com/w/full/4/a/a/679465-1920x1200-desktop-hd-edinburgh-castle-background-image.jpg"
              alt="Edinburgh Castle"
            />
            <p>Edinburgh Castle</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://i2-prod.glasgowlive.co.uk/incoming/article25284871.ece/ALTERNATES/s1200/0_Cameron-House-on-Loch-Lomond.jpg"
              alt="Glasgow Scotland"
            />
            <p>Glasgow & Loch Lomond</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://wallpapercat.com/w/full/d/e/6/682943-1920x1200-desktop-hd-loch-ness-scottish-highlands-background-image.jpg"
              alt="Loch Ness Scottish Highlands"
            />
            <p>Loch Ness & Highlands</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.bgb3Pag7alC352JEZePB7wHaEV?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Inverness Scotland"
            />
            <p>Inverness, Highland Capital</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Iconic Edinburgh Castle</div>
          <div>🎨 Vibrant Glasgow Culture</div>
          <div>🌊 Scenic Loch Lomond</div>
          <div>⛰️ Mystical Loch Ness & Highlands</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Best of Scotland in 7 Days</h2>

        <p>
          From the storybook charm of Edinburgh to the creative buzz of Glasgow and the wild beauty of the Highlands
        </p>

        <br />

        <Link to="/Glasgow-Inverness">
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
              src="https://tse1.mm.bing.net/th/id/OIP.dajVcbCfyw_29NO1-ZpOfwHaE6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>Arrival in Edinburgh: Begin Your Scottish Journe</p>
              <p>
          Edinburgh Castle Entry Ticket and Edinburgh Hop on Hop Off Tour (as per next day’s program, subject to availability) 
 Welcome to Edinburgh, Scotland’s historic and captivating capital. Upon your arrival at Edinburgh 
Airport, you will be greeted and transferred privately to your hotel, ensuring a relaxed and 
comfortable start to your holiday. <br/> 
Edinburgh’s charm is visible from the very first moment, with its medieval Old Town, elegant Georgian 
New Town, and stunning skyline dominated by the iconic Edinburgh Castle. Spend your first evening 
strolling through the atmospheric streets, enjoying the rich culture, and soaking in the unique vibe of 
this enchanting city. 
Overnight Stay in Edinburgh 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://cdn-imgix.headout.com/media/images/7be5c4594323f915bfb13ddc9f3ef882-25084-24-48-HourHop-onHop-offTourofEdinburgh----005.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16:9&crop=faces"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Edinburgh – Edinburgh Hop On Hop Off Tour and Castle Visit</p>
              <p>
            Breakfast at Hotel. <br/> 
Edinburgh Castle Entry Ticket and Edinburgh Hop On Hop Off Tour 
After breakfast, proceed for your Edinburgh one-day Hop On Hop Off city tour on SIC basis. 
This tour is the perfect introduction to the city, allowing you to explore major landmarks at 
your own pace.  <br/>
A highlight of your day will be your visit to the historic Edinburgh Castle, perched high upon 
Castle Rock. Explore grand halls, ancient dungeons, the Crown Jewels of Scotland, and enjoy 
sweeping views of the entire city as you learn about Scotland’s royal and military heritage. <br/> 
Overnight Stay in Edinburgh
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.malmaison.com/media/13tgavxl/untitled-design-6.png?width=600&height=600&format=webp&v=1d9f6a28e6c3010"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Edinburgh → Glasgow</p>
              <p>
           Breakfast at Hotel. <br/> 
After breakfast, a private transfer will take you from your Edinburgh hotel to the train station for 
your onward journey to Glasgow, Scotland’s cultural powerhouse. <br/> 
Upon arrival at Glasgow Train Station, a private transfer will bring you to your hotel <br/>. 
Apextion DMC  <br/>
Email: sales@apextiondmc.com, groups@apextiondmc.com || Contact No.: +91 11 4921 5555 
www.apextiondmc.com  <br/> 
LONDON | PARIS | NEW DELHI| MUMBAI <br/> 
Glasgow is a vibrant city known for its Victorian architecture, thriving art scene, modern culture, 
and warm Scottish hospitality. Spend your evening exploring the buzzing streets, stylish cafés, and 
architectural gems that make Glasgow unique.  <br/>
Overnight Stay in Glasgow 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://cdn-imgix.headout.com/media/images/3d95cb060a551f3bb026d0708d90a205-20150-glasgow-glasgow-hop-on-hop-off-tour-05.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Glasgow – Glasgow Hop On Hop Off Tour</p>
              <p>
             Breakfast at Hotel.  <br/>
Glasgow Hop On Hop Off Tour <br/> 
After breakfast, enjoy a one-day Hop On Hop Off tour of Glasgow on SIC basis. This tour allows you to 
take in the city's major attractions such as George Square, Glasgow Cathedral, Riverside Museum, the 
University of Glasgow, and the famed Kelvingrove Art Gallery and Museum. <br/> 
The panoramic open-top bus and informative commentary offer a fantastic way to understand 
Glasgow’s artistic heritage, industrial history, and modern dynamism. <br/> 
Overnight Stay in Glasgow 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.zG9IPTWTtarqtP1NlUMppAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Glasgow – Inverness</p>
              <p>
            Breakfast at Hotel.  <br/>
Today after breakfast, proceed to Glasgow Train Station with a private transfer to board your train to 
Inverness, the capital of the Scottish Highlands. <br/> 
Upon arrival, a private transfer will take you from Inverness Train Station to your hotel. <br/> 
Inverness is known for its serene landscapes, historic sites, and proximity to the legendary Loch Ness. 
The town blends charm and natural beauty, offering a peaceful Highland atmosphere.  <br/>
Overnight Stay in Inverness 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://cdn-imgix.headout.com/media/images/8d07aba1d1ea7c6a784235ca85115e74-20152-inverness-inverness-hop-on-hop-off-tour-03.jpg?w=613.2&h=384.3&crop=faces&auto=compress%2Cformat&fit=min"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Inverness – Inverness Hop On Hop Off Tour</p>
              <p>
            Breakfast at Hotel.  <br/>
Inverness Hop On Hop Off Tour   <br/>
After breakfast, proceed for your one-day Hop On Hop Off Inverness city tour on SIC basis. This tour 
is a wonderful way to explore the River Ness, Inverness Castle (exterior view), the Caledonian Canal, 
and various scenic viewpoints throughout the Highlands.  <br/> 
The tour provides insights into the region’s history, legends, and breathtaking natural landscapes 
that define this iconic part of Scotland. 
Overnight Stay in Inverness 
Apextion DMC  <br/>
Email: sales@apextiondmc.com, groups@apextiondmc.com || Contact No.: +91 11 4921 5555 
www.apextiondmc.com   <br/>
LONDON | PARIS | NEW DELHI| MUMBAI 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.yjik7QLd-ik1pJUsvXvMxQHaEV?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Inverness → India</p>
              <p>
Breakfast at Hotel. <br/>
After breakfast, proceed to the airport with a comfortable private transfer, marking the end of your 
beautiful Scottish adventure.
                ________________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("7 Days Explore Edinburgh + Glasgow + Inverness Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Scottish journey</p>
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

export default GlasgowInvernessLanding;