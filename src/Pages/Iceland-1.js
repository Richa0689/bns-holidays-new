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
    question: "What is the best time to visit Iceland for this tour?",
    answer:
      "June to August offers long daylight hours, milder weather and easier access to the Highlands, making it ideal for waterfalls, glacier walks and road trips. September to March brings shorter days but a strong chance of witnessing the Northern Lights, especially between October and February.",
  },
  {
    question: "What is included in the 9-day Best of Iceland package?",
    answer:
      "The package includes 8 nights accommodation in Reykjavik, daily breakfast, comfortable transfers, a Golden Circle tour, South Coast sightseeing, entry to the Blue Lagoon, and a guided city tour of Reykjavik. International flights, visa fees and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Iceland?",
    answer:
      "Indian passport holders require a Schengen visa, which covers travel throughout Iceland on this itinerary. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include Þingvellir National Park, Gullfoss waterfall and Geysir on the Golden Circle, Seljalandsfoss and Skógafoss waterfalls, the black sand beach at Reynisfjara, Jökulsárlón Glacier Lagoon and Diamond Beach, and a relaxing soak at the Blue Lagoon.",
  },
  {
    question: "What currency is used in Iceland?",
    answer:
      "Iceland uses the Icelandic Króna (ISK). Cards are widely accepted almost everywhere, including small cafes and public transport, so carrying cash is rarely necessary. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add a Northern Lights hunt, a glacier hike, the Snæfellsnes Peninsula, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const BestOfIcelandLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.hk-l0Xnoa5TzScQcEsXNYQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Best of Iceland Tour"
        />

        <div className="hero-content">
          <h1>Best of Iceland</h1>

          <p>
            Reykjavik • Golden Circle • South Coast • Blue Lagoon
          </p>

          <Link to="/Best-of-Iceland">
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
              src="https://images.locationscout.net/2021/12/gullfoss-waterfall-golden-circle-iceland-gcfz.jpg?h=1100&q=83"
              alt="Gullfoss Waterfall Golden Circle"
            />
            <p>Golden Circle, Gullfoss</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.rVzqY0oxsuFQo6ttu7u21AHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Jokulsarlon Glacier Lagoon"
            />
            <p>Jökulsárlón Glacier Lagoon</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://www.theluxevoyager.com/wp-content/uploads/2018/02/The-Retreat-at-Blue-Lagoon-Iceland-geothermal-spa-Copy.jpg"
              alt="Blue Lagoon Iceland"
            />
            <p>Blue Lagoon</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://touristjourney.com/wp-content/uploads/2020/07/How-to-See-the-Northern-Lights-in-Iceland-scaled.jpg"
              alt="Northern Lights Iceland"
            />
            <p>Northern Lights</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🌋 Dramatic Volcanic Landscapes</div>
          <div>💧 Iconic Waterfalls & Geysers</div>
          <div>🧊 Glacier Lagoon & Diamond Beach</div>
          <div>♨️ Relaxing Blue Lagoon Soak</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Best of Iceland in 9 Days</h2>

        <p>
          From bubbling geysers to thundering waterfalls, glittering glacier lagoons and geothermal springs — a journey through Iceland's finest
        </p>

        <br />

        <Link to="/Best-of-Iceland">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>9 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://wallpaperaccess.com/full/804395.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>India → Reykjavik</p>
              <p>
Arrival in Reykjavik 
Arrival at Reykjavik International Airport. 
Private transfer to hotel and check-in. 
Rest of the day at leisure to explore Reykjavik city centre. 
Overnight stay in Reykjavik. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://goldencircleicelandtours.com/golden_circle_tour_iceland.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Golden Circle Full-Day Tour (SIC Basis)</p>
              <p>
Breakfast at hotel. 
Join the famous Golden Circle route (300 km loop). 
Visit Thingvellir National Park – a UNESCO site where tectonic plates meet. 
Explore Geyser geothermal area – witness Strokkur geyser erupts every 04-10 minutes. 
Visit Gullfoss Waterfall – a powerful two-tier waterfall dropping into a canyon. 
Optional stops may include Kerid Crater or local farms. 
Tour duration approx. 7–8 hours with guided commentary. 
Return to Reykjavik. 
Overnight stay in Reykjavik.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/jrkoaho9cfjixajmhxqu/SouthIcelandTourfromReykjavik.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>South Iceland Tour (SIC Basis)</p>
              <p>
Breakfast at hotel. 
Drive along Iceland’s scenic South Coast. 
Visit Seljalandsfoss Waterfall – walk behind the falls. 
Visit Skogafoss Waterfall – one of Iceland’s largest waterfalls. 
Explore Reynisfjara Black Sand Beach with basalt columns. 
View Dyrholaey cliffs and coastal landscapes. 
Return to Reykjavik in the evening. 
Overnight stay in Reykjavik. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://bustravel.is/wp-content/uploads/2023/09/IICG-BL-Blue-Lagoon-sunset.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>lue Lagoon Experience (SIC Transfers)</p>
              <p>
Breakfast at hotel. 
Transfer to Blue Lagoon geothermal spa. 
Relax in warm mineral-rich waters surrounded by lava fields. 
Includes silica mud mask and bathing facilities. 
Spend 2–3 hours at leisure. 
Apextion DMC 
Email: sales@apextiondmc.com, groups@apextiondmc.com || Contact No.: +91 11 4921 5555 
www.apextiondmc.com  
LONDON | PARIS | NEW DELHI | MUMBAI 
Return transfer to Reykjavik. 
Overnight stay in Reykjavik. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://4kwallpapers.com/images/wallpapers/jokulsarlon-glacial-3840x2160-16315.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Jokulsarlon Glacier Lagoon Tour (SIC Basis)</p>
              <p>
Breakfast at hotel. 
Early morning departure for a full-day tour. 
Travel along South Coast towards Vatnajokull National Park. 
Visit Jokulsarlon Glacier Lagoon – floating icebergs. 
Visit Diamond Beach – ice pieces on black sand. 
Optional boat ride available (extra cost). 
Return late evening to Reykjavik. 
Overnight stay in Reykjavik. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://gti.images.tshiftcdn.com/12654391/x/0/sunrise-over-kirkjufell-mountain-and-waterfall-on-the-snaefellsnes-peninsula-in-west-iceland.jpg?crop=1.91:1&fit=crop&width=1200"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Snaefellsnes Peninsula & Kirkjufell (Small Group)</p>
              <p>
               Breakfast at hotel. 
Explore Snaefellsnes Peninsula known as 'Iceland in Miniature'. 
Visit Kirkjufell Mountain – iconic photo spot. 
See black sand beaches, lava fields, and fishing villages. 
View Snaefellsjokull glacier volcano. 
Return to Reykjavik. 
Overnight stay in Reykjavik. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.dm25NJ1ip3v8e48fEkFcwAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Reykjavik Hop-On Hop-Off City Bus Tour on sic basis</p>
              <p>
                Breakfast at hotel. 
Unlimited access to hop-on hop-off sightseeing bus. 
Visit key attractions: Hallgrimskirkja Church, Harpa Concert Hall, Old Harbour. 
Flexible stops to explore museums, shopping streets, and cafes. 
Audio guide available in multiple languages. 
Overnight stay in Reykjavik.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.pixelstalk.net/wp-content/uploads/2025/11/Reykjavik-Wallpapers-HD-Desktop-1.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{ color: "blue" }}>Leisure Day in Reykjavik</p>
              <p>
             
Breakfast at hotel. 
Day at leisure for optional activities or shopping. 
Optional tours: Northern Lights (seasonal), Sky Lagoon, or food tours. Not included 
Overnight stay in Reykjavik. 
Apextion DMC 
Email: sales@apextiondmc.com, groups@apextiondmc.com || Contact No.: +91 11 4921 5555 
www.apextiondmc.com  
LONDON | PARIS | NEW DELHI | MUMBAI
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://static.vecteezy.com/system/resources/previews/011/550/937/non_2x/blur-background-terminal-departure-airport-with-bokeh-free-photo.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 9</h3>
              <p style={{ color: "blue" }}>Departure</p>
              <p>
Breakfast at hotel. 
Private transfer from hotel to Reykjavik Airport. 
Departure with unforgettable Iceland memories.__________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("9 Days Best of Iceland Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Icelandic journey</p>
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

export default BestOfIcelandLanding;