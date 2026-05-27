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
    question: "What is the best time to visit Zurich, Innsbruck, and Salzburg?",
    answer:
      "This Switzerland–Austria route is beautiful in every season. Spring (April–May) brings blooming Alpine meadows, mild temperatures, and fewer crowds across all three cities. Summer (June–August) is ideal for Mount Titlis and outdoor exploration — long sunny days make Innsbruck's Old Town and Salzburg's gardens especially vibrant. Autumn (September–October) offers golden Alpine scenery and a peaceful atmosphere. Winter (December) is magical — Zurich's festive lights, Innsbruck's snowy mountain backdrop, and Salzburg's charming Christmas markets create an unforgettable European winter experience.",
  },
  {
    question: "What is included in the 7-day tour package?",
    answer:
      "The package includes accommodation for 6 nights, daily breakfast, airport and station transfers, a Swiss Travel Pass (covering train travel within Switzerland), a Mount Titlis entrance ticket (included), a Swarovski Crystal Worlds Entrance Ticket in Innsbruck (included), and a Half Day Original Sound of Music Tour in Salzburg (shared basis, included). Train travel between Zurich, Innsbruck, and Salzburg is also covered. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Switzerland and Austria?",
    answer:
      "Indian passport holders require a Schengen visa to visit both Switzerland and Austria. Both countries are part of the Schengen Area, so a single Schengen visa covers your entire 7-day journey. We recommend applying at least 4–6 weeks in advance. Our team can guide you through the complete documentation and visa application process.",
  },
  {
    question: "What is the Swiss Travel Pass and how does it work?",
    answer:
      "The Swiss Travel Pass gives you unlimited travel on Switzerland's trains, buses, and boats during the validity period. On this tour, it covers your journey from Zurich Airport to your hotel, the round trip to Mount Titlis via Engelberg, and your onward train from Zurich toward Innsbruck. Simply scan or show your pass at ticket counters and on board — no need to buy separate tickets for covered routes.",
  },
  {
    question: "Is this tour suitable for first-time Europe travellers?",
    answer:
      "Absolutely! This itinerary is perfectly crafted for first-time European travellers. It takes you through Swiss Alpine charm in Zurich, crystal wonder in Innsbruck, and the Sound of Music magic of Salzburg — with a relaxed pace, included guided experiences, and private transfers at every step to ensure a comfortable and stress-free journey.",
  },
  {
    question: "Can I customise the Zurich–Innsbruck–Salzburg itinerary?",
    answer:
      "Yes! Every itinerary is fully customisable based on your interests, travel dates, and budget. Whether you'd like to add a Jungfraujoch or Lucerne day trip from Zurich, a Nordkette cable car experience in Innsbruck, a Hallstatt lake visit near Salzburg, or extend your stay in any city, our team will craft the perfect personalised Alpine journey for you.",
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
const ZurichInnsbruckSalzburgLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://images.daytrip.com/zurich.jpg?w=2048&q=30"
          alt="Zurich Innsbruck Salzburg Tour"
        />

        <div className="hero-content">
          <h1>Zurich + Innsbruck + Salzburg</h1>
          <p>Swiss Alps. Austrian Beauty. European Adventure.</p>

          <Link to="/europe">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img
              src="https://assets.cntraveller.in/photos/650d92f4e13f9c45e248de03/4:3/w_4992,h_3744,c_limit/Zurich_GettyImages-451614321.jpg"
              alt=""
            />
            <p>Zurich Switzerland</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://the-shooting-star.com/wp-content/uploads/2011/05/424142774_c28f79a6a4.jpg"
              alt=""
            />
            <p>Innsbruck Alps</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://media.istockphoto.com/id/509641529/photo/historic-town-of-salzburg-with-salzach-river-in-summer-austria.jpg?s=612x612&w=0&k=20&c=VPCNTdghkFuqzE4HKlJHfALOF2NqzYk6xUYIu3pXF-g="
              alt=""
            />
            <p>Salzburg Austria</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://i.assetzen.net/i/aySMFKg5ZAPE/w:1920/h:/q:70.jpg"
              alt=""
            />
            <p>Swiss Mountain Views</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Europe Tour?</h2>

        <div className="why-grid">
          <div>🏔️ Amazing Alpine Landscapes</div>
          <div>🏰 Historic European Cities</div>
          <div>🚆 Scenic Europe Train Journeys</div>
          <div>📸 Perfect Photography Locations</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore Switzerland & Austria</h2>
        <p>Book your Europe journey today</p>
        <br />

        <Link to="/europe">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>07 Days Tour Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://static.toiimg.com/thumb/msid-113370310,width-748,height-499,resizemode=4,imgsize-216138/.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{color:"blue"}}>Zurich</p>
              <p>Welcome to Switzerland –<br/>
Welcome to Switzerland! Upon arrival at Zurich Airport, enjoy a private transfer to your hotel. Check
in, relax, and spend the evening exploring the charming lanes of Zurich's Old Town or walking along
Lake Zurich at your leisure.<br/>
Overnight Stay in Zurich</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://res.klook.com/image/upload/q_85/c_fill,w_750/v1764931667/uqovqncxx9gafuw4lu2x.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color:"blue"}}>Zurich</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, use your Swiss Pass for travel to Engelberg, Scan you Voucher at the ticket counter
from where you will proceed to Mount Titlis (ticket included). Experience the stunning journey by
revolving Rotair cable car to the summit, where panoramic snow-clad Alpine scenery awaits. Enjoy
activities such as the Glacier Cave, Cliff Walk bridge and snowy viewpoints.<br/>
Return to Zurich using your Swiss Pass. Evening at leisure to explore Zurich's cafes, riverside area or
Bahnhofstrasse.<br/>
Overnight Stay in Zurich</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/13/de/28/7f.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{color:"blue"}}>Zurich – Innsbruck</p>
              <p>Breakfast at Hotel. Check out from the Hotel.<br/>
Use your Swiss Pass for your onward train journey from Zurich to the Austrian border region and
continue toward Innsbruck. Upon arrival at Innsbruck Station, enjoy a private transfer to your hotel.
Check in and spend your first evening strolling around the medieval Old Town and the Golden Roof
area.<br/>
Overnight Stay in Innsbruck</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://res.klook.com/image/upload/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/pk13x0ykqxrp8ogbx4a0.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color:"blue"}}>Innsbruck – Swarovski Crystal Worlds Entrance Ticket</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, make your way to Swarovski Crystal Worlds (entrance ticket included). Explore the
Chambers of Wonder, unique art installations, crystal-themed exhibits, and the magical outdoor
garden. Enjoy the crystal cloud, mirror installations, and family-friendly attractions at this world-
famous venue.
Return to Innsbruck and enjoy the rest of the day at leisure — explore Nordkette views, Maria-
Theresien-Strasse, or local Tyrolean cafés.<br/>
Overnight Stay in Innsbruck</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media.istockphoto.com/id/509641529/photo/historic-town-of-salzburg-with-salzach-river-in-summer-austria.jpg?s=612x612&w=0&k=20&c=VPCNTdghkFuqzE4HKlJHfALOF2NqzYk6xUYIu3pXF-g="
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color:"blue"}}>Innsbruck - Salzburg</p>
              <p>Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Innsbruck Hotel to Station. Board your train from Innsbruck to Salzburg. Upon
arrival in Salzburg, enjoy a private transfer from Salzburg Station to your hotel. Check in and relax, or
explore the Old Town — Mirabell Gardens, pedestrian streets, and Mozart's birthplace area.<br/>
Overnight Stay in Salzburg</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://i0.wp.com/anniewearsit.com/wp-content/uploads/2024/08/Annie_Fairfax_Salzburg_Austria_2024_8446-scaled.jpg?resize=1500%2C1000&ssl=1"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{color:"blue"}}>Salzburg – Half Day Original Sound of Music Tour on Shared Basis</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, proceed for the Half Day Original Sound of Music Tour (shared basis, included). Visit
iconic filming locations such as the Mirabell Gardens, Leopoldskron Palace, the lakes district, and the
famous gazebo. Hear stories about the Von Trapp family, the film's production, and the history of
Salzburg's beautiful landscapes.<br/>
Afternoon and evening at leisure — explore the Fortress, riverfront, cafés, or the charming lanes
around Getreidegasse.<br/>
Overnight Stay in Salzburg</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Salzburg_-_Flughafen_-_Terminal_02.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{color:"blue"}}>Salzburg</p>
              <p>Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Salzburg Hotel to Salzburg Airport for your onward flight.</p>
            </div>
          </div>

        </div>

        {/* Send Query Button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("7 Days Zurich + Innsbruck + Salzburg Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Switzerland & Austria journey</p>
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

export default ZurichInnsbruckSalzburgLanding;