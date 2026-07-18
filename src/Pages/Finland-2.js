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
    question: "What is the best time to visit Finland, Sweden and Norway for this tour?",
    answer:
      "May to September is ideal, with June to August offering long daylight hours and mild temperatures across Helsinki, Stockholm and Oslo. Winter (December–February) brings a snowy, festive charm if you don't mind the cold, while summer remains the most comfortable season for sightseeing and city walks.",
  },
  {
    question: "What is included in the 7-day Scandinavian Capitals Express package?",
    answer:
      "The package includes 6 nights accommodation (2 nights Helsinki, 2 nights Stockholm, 2 nights Oslo), daily breakfast, comfortable transfers between cities, guided city tours in Helsinki, Stockholm and Oslo, and sightseeing at iconic landmarks along the way. International flights, visa fees and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Finland, Sweden and Norway?",
    answer:
      "Indian passport holders require a Schengen visa, which covers travel across Finland, Sweden and Norway on this itinerary. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include Senate Square and Helsinki Cathedral in Finland, a scenic overnight cruise across the Baltic Sea, Gamla Stan and City Hall in Stockholm, and Vigeland Park and the Oslo Opera House in Norway.",
  },
  {
    question: "What currencies are used across this trip?",
    answer:
      "Finland uses the Euro (EUR), Sweden uses the Swedish Krona (SEK), and Norway uses the Norwegian Krone (NOK). Cards are widely accepted across all three countries, but it's useful to carry a small amount of local cash in each. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like a fjord cruise extension in Norway or extra nights in any city, our team will curate the perfect personalised experience for you.",
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
const ScandinavianCapitalsExpressLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://purescandinavia.com.au/wp-content/uploads/2024/05/Scandinavian-Capitals-Fjords-2.webp"
          alt="Scandinavian Capitals Express Tour"
        />

        <div className="hero-content">
          <h1>Scandinavian Capitals Express</h1>

          <p>
            Helsinki • Stockholm • Oslo
          </p>

          <Link to="/Capitals-Express">
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
              src="https://media.istockphoto.com/photos/helsinki-picture-id505172186?k=20&m=505172186&s=612x612&w=0&h=fGs1G3W_YBNVZdFQ0BTzEdBKRPS-RqBYZazhHviMA3E="
              alt="Helsinki Senate Square"
            />
            <p>Senate Square, Helsinki</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://www.teahub.io/photos/full/293-2939491_stockholm-gamla-stan.jpg"
              alt="Stockholm Gamla Stan"
            />
            <p>Gamla Stan, Stockholm</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://www.teahub.io/photos/full/293-2939491_stockholm-gamla-stan.jpg"
              alt="Oslo Opera House"
            />
            <p>Oslo Opera House</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.q8uz25bElul-9Ey1F_DfmgHaE4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Baltic Sea Cruise"
            />
            <p>Overnight Baltic Cruise</p>
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
          <div>🗿 Vigeland Park & Oslo Fjord</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Three Nordic Capitals in 7 Days</h2>

        <p>
          From the design capital of Helsinki to island-set Stockholm and fjord-framed Oslo — a journey across Scandinavia's finest
        </p>

        <br />

        <Link to="/Capitals-Express">
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
              src="https://tse3.mm.bing.net/th/id/OIP.6E6uPUxRaTbc-EUQe3IyagHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>India → Helsinki</p>
              <p>
    Welcome to Helsinki – The Nordic Design Capital!< br/> 
Arrive at Helsinki Airport and meet your driver for a smooth private transfer to your hotel. < br/>
After check-in, relax or explore the charming streets, waterfront promenades, and the vibrant Market 
Square at your leisure. < br/>
Overnight Stay in Helsinki
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://cdn.projectexpedition.com/photos/5942bca915742_sized.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Helsinki Hop-On Hop-Off Sightseeing</p>
              <p>
    Breakfast at Hotel. < br/>
Today, enjoy your Helsinki Hop-On Hop-Off Bus Pass (1 Day). Explore highlights such as:< br/> 
• Senate Square < br/>
• Rock Church (Temppeliaukio) < br/>
• Sibelius Monument < br/>
• Market Square< br/> 
• Helsinki Cathedral < br/>
• Waterfront and Old Market Hall < br/>
Overnight Stay in Helsinki 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://somewheregood.com/wp-content/uploads/2026/03/stockholm-helsinki-oneway-overnight-cruise-with-cabin-stay.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Helsinki → Stockholm (Overnight Cruise)</p>
              <p>
          Breakfast at Hotel.< br/> 
After breakfast, proceed for your private transfer from Helsinki hotel to the airport for your flight to 
Stockholm.Arrive at Stockholm Airport and meet your driver for your private transfer to the hotel.< br/> 
Relax for the day or explore the scenic waterfronts and cobblestone streets.< br/> 
Overnight Stay in Stockholm 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.hePR0kNCpEkxJ-YZbVjiCAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Arrival Stockholm & City Tour</p>
              <p>
Breakfast at Hotel. < br/>
Today, join a shared Old Town (Gamla Stan) Walking Tour.Walk through medieval alleys, colorful 
buildings, Royal Palace surroundings, and historic squares as your guide narrates stories of Vikings, 
Swedish kings, and Stockholm’s heritage.< br/> 
Overnight Stay in Stockholm < br/>
Apextion DMC < br/>
Email: sales@apextiondmc.com, groups@apextiondmc.com || Contact No.: +91 11 4921 5555 
www.apextiondmc.com < br/> 
LONDON | PARIS | NEW DELHI |MUMBAI
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images7.alphacoders.com/679/679904.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Stockholm → Oslo</p>
              <p>
After breakfast, proceed for your private transfer from Stockholm hotel to the airport for your flight 
to Oslo.Arrive in Oslo Airport and enjoy a smooth private transfer to your hotel.Later, relax or explore 
the nearby central streets of Norway’s capital. < br/>
Overnight Stay in Oslo 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tripjive.com/wp-content/uploads/2024/03/Oslo-Fjord-Cruise.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Oslo Walking Tour + Scenic Fjord Cruise</p>
              <p>
Breakfast at Hotel.< br/> 
Oslo Guided Walking Tour (Shared Basis) 
Oslo Scenic Fjord Cruise (Shared Basis) Later, enjoy a beautiful cruise through the Oslofjord, passing 
charming islands, coastal landscapes, and traditional summer houses.Return to your hotel for a 
relaxing evening. < br/>
Overnight Stay in Oslo 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://static.toiimg.com/photo/44771921/Oslo-Travel-Guide.jpg?width=748&resize=4"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Oslo → India</p>
              <p>
Breakfast at Hotel.< br/>
Check out and proceed for your private transfer from Oslo hotel to the airport for your flight back._______________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("7 Days Scandinavian Capitals Express Tour")}
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

export default ScandinavianCapitalsExpressLanding;