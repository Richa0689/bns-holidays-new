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
      "June to August offers long daylight hours, milder weather and easier access to the Highlands and North Iceland, making it ideal for waterfalls, whale watching and road trips. September to March brings shorter days but a strong chance of witnessing the Northern Lights, especially between October and February.",
  },
  {
    question: "What is included in the 12-day Best of Iceland package?",
    answer:
      "The package includes 11 nights accommodation (3 nights Akureyri, 4 nights Reykjavik, 3 nights Vik, 1 night Reykjavik), daily breakfast, domestic transfers between regions, a Golden Circle tour, South Coast sightseeing, entry to the Blue Lagoon, and guided exploration of North Iceland. International flights, visa fees and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Iceland?",
    answer:
      "Indian passport holders require a Schengen visa, which covers travel throughout Iceland on this itinerary. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include Goðafoss and Lake Mývatn in Akureyri, Þingvellir National Park, Gullfoss waterfall and Geysir on the Golden Circle, the Snæfellsnes Peninsula, Seljalandsfoss and Skógafoss waterfalls, Reynisfjara black sand beach, Jökulsárlón Glacier Lagoon near Vik, and a relaxing soak at the Blue Lagoon.",
  },
  {
    question: "What currency is used in Iceland?",
    answer:
      "Iceland uses the Icelandic Króna (ISK). Cards are widely accepted almost everywhere, including small cafes and public transport, so carrying cash is rarely necessary. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add a Northern Lights hunt, a glacier hike, an ice cave visit, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const BestOfIceland12DaysLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.pixelstalk.net/wp-content/uploads/2016/11/Iceland-mountains-hd-wallpapers.jpg"
          alt="Best of Iceland Tour"
        />

        <div className="hero-content">
          <h1>Best of Iceland</h1>

          <p>
            Akureyri • Reykjavik • Vik • Golden Circle
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
              src="https://tse4.mm.bing.net/th/id/OIP.kVaVpDoqGhOAU6lT2ljTYwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Godafoss Waterfall Akureyri"
            />
            <p>Goðafoss & Lake Mývatn, Akureyri</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.locationscout.net/2018/02/gullfoss-waterfall-golden-circle-iceland.jpg?h=1100&q=83"
              alt="Gullfoss Waterfall Golden Circle"
            />
            <p>Golden Circle, Gullfoss</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://4kwallpapers.com/images/wallpapers/jokulsarlon-glacial-3840x2160-16315.jpg"
              alt="Jokulsarlon Glacier Lagoon near Vik"
            />
            <p>Jökulsárlón Glacier Lagoon</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.fsiU4LTM07zFyRLW2gC62QHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Reynisfjara Black Sand Beach Vik"
            />
            <p>Reynisfjara Black Sand Beach, Vik</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🐋 Whale Watching in North Iceland</div>
          <div>💧 Iconic Waterfalls & Geysers</div>
          <div>🧊 Glacier Lagoon & Black Sand Beaches</div>
          <div>♨️ Relaxing Blue Lagoon Soak</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Best of Iceland in 12 Days</h2>

        <p>
          From the whale-rich waters of Akureyri to the bubbling geysers of the Golden Circle and the black sands of Vik — a complete journey across Iceland's finest
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
        <h2>12 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5628bbc6e4b091990659a9ff/e0041bac-434f-420d-b569-bda737f4e68f/DJI_0062.jpg?format=1500w"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>Arrival in Akureyri</p>
              <p>
Arrival at Akureyri Airport, located in North Iceland. 
Meet and greet followed by a private transfer to your hotel. 
Check-in and relax after your journey. 
Evening free to explore Akureyri town, botanical gardens, or waterfront area. 
Overnight stay in Akureyri.  
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.K7LQSNUeIOGaPoYDt-oYIgHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Lake Myvatn & Godafoss Guided Tour (SIC Basis)</p>
              <p>
Breakfast at hotel. 
Join a shared guided tour to Lake Myvatn region. 
Visit Godafoss Waterfall, known as the 'Waterfall of the Gods'. 
Explore Lake Myvatn, famous for volcanic landscapes and geothermal activity. 
Visit pseudo craters, lava fields, and hot spring areas like Hverir. 
Optional stop at Myvatn Nature Baths (entry not included unless specified). 
Return to Akureyri in the evening. 
Overnight stay in Akureyri. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.3lskYYZXhtKIfd1TJ25GjQHaE9?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Whale Watching Experience tour needs to reach meeting point</p>
              <p>
Breakfast at hotel. 
Proceed to Akureyri harbor for whale watching tour. 
Board a specialized boat with expert guides. 
Spot humpback whales, minke whales, dolphins, and seabirds. 
Tour duration approx. 2–3 hours. 
Rest of the day free for leisure or optional activities. 
Overnight stay in Akureyri. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.3-PEnTs51iWlbyLnj4D58QHaD5?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Akureyri → Reykjavik</p>
              <p>
Breakfast at hotel. 
Private transfer to Akureyri Airport. 
Flight to Reykjavik (not included unless specified). 
Arrival in Reykjavik and private transfer to hotel. 
Check-in and relax. 
Evening free to explore Reykjavik city center, cafes, and shopping streets. 
Apextion DMC 
Email: sales@apextiondmc.com, groups@apextiondmc.com || Contact No.: +91 11 4921 5555 
www.apextiondmc.com  
LONDON | PARIS | NEW DELHI | MUMBAI 
Overnight stay in Reykjavik. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.3o0Sf58-6nZb3S47SizOywHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}> Golden Circle Full-Day Tour (SIC Basis)</p>
              <p>
Breakfast at hotel. 
Join Golden Circle tour covering Iceland’s most famous attractions: 
Thingvellir National Park – UNESCO World Heritage Site, tectonic plate rift. 
Geysir geothermal area – Strokkur geyser eruptions every few minutes. 
Gullfoss Waterfall – powerful two-tier waterfall. 
Optional stops at Kerid Crater or local farms. 
Return to Reykjavik in the evening. 
Overnight stay in Reykjavik. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://gti.images.tshiftcdn.com/540666/x/0/the-kirkjufell-mountain-is-a-breathtaking-sight-to-behold.jpg?crop=1.91:1&fit=crop&width=1200"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}> Snaefellsnes Peninsula & Kirkjufell (Small Group on sic)</p>
              <p>
Breakfast at hotel. 
Small-group scenic tour to Snaefellsnes Peninsula. 
Visit Kirkjufell Mountain – one of Iceland’s most photographed spots. 
Explore black sand beaches, lava fields, and coastal cliffs. 
View Snaefellsjokull Glacier volcano. 
Visit fishing villages like Arnarstapi and Hellnar. 
Return to Reykjavik in the evening. 
Overnight stay in Reykjavik. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.DOB8Ls2MJsgl2ot13n3XEAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Blue Lagoon Experience (SIC Transfers)</p>
              <p>
Breakfast at hotel. 
Transfer to Blue Lagoon geothermal spa. 
Enjoy relaxing bath in mineral-rich warm waters. 
Includes silica mud mask and basic amenities. 
Spend 2–3 hours at leisure. 
Return transfer to Reykjavik. 
Overnight stay in Reykjavik.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/13/f8/7e/ec.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{ color: "blue" }}>Transfer to Vik (Private Transfer)</p>
              <p>
Breakfast at hotel. 
Private scenic transfer along South Coast to Vik. 
Enroute visit Seljalandsfoss Waterfall (walk behind waterfall). 
Arrival in Vik and hotel check-in. 
Overnight stay in Vik. 
Apextion DMC 
Email: sales@apextiondmc.com, groups@apextiondmc.com || Contact No.: +91 11 4921 5555 
www.apextiondmc.com  
LONDON | PARIS | NEW DELHI | MUMBAI 

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6e/b5/e1.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 9</h3>
              <p style={{ color: "blue" }}>Jokulsarlon Glacier Lagoon Tour (SIC Basis)</p>
              <p>
Breakfast at hotel. 
Join full-day tour to Jokulsarlon Glacier Lagoon. 
Witness floating icebergs in glacial lagoon. 
Visit Diamond Beach with ice chunks on black sand. 
Optional amphibian boat ride (subject to availability). 
Scenic drive through Vatnajokull National Park. 
Overnight stay in Vik. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.vDhBTI4i_6T6DR75L6rBFwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 10</h3>
              <p style={{ color: "blue" }}>Katla Ice Cave Small Group Tour on SIC basis</p>
              <p>
Breakfast at hotel. 
Join small-group super jeep tour to Katla Ice Cave. 
Drive through rugged terrain and volcanic landscapes. 
Explore natural ice cave with guide and safety equipment. 
Learn about glaciers and volcanic formations. 
Return to Vik hotel. 
Overnight stay in Vik. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.O4CEyV9daxBF1Mm6EC-omAHaFN?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 11</h3>
              <p style={{ color: "blue" }}>Return to Reykjavik Private transfer</p>
              <p>
Breakfast at hotel. 
Private transfer from Vik to Reykjavik. 
Check-in at hotel. 
Overnight stay in Reykjavik. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://thumbs.dreamstime.com/b/departure-lounge-airport-terminal-hong-kong-departure-lounge-airport-terminal-86000119.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 12</h3>
              <p style={{ color: "blue" }}> Departure</p>
              <p>
Breakfast at hotel. 
Private transfer from hotel to Reykjavik Airport. 
Departure with unforgettable Iceland memories. ______________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("12 Days Best of Iceland Tour")}
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

export default BestOfIceland12DaysLanding;