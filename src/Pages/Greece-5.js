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
    question: "What is the best time to visit Barcelona and Madrid for this tour?",
    answer:
      "April to June and September to October are ideal, offering pleasant weather for sightseeing. Summer (July–August) is peak season and can be quite hot, while spring and autumn bring cooler temperatures and fewer crowds, perfect for exploring both cities at a relaxed pace.",
  },
  {
    question: "What is included in the 7-day Best of Barcelona + Madrid package?",
    answer:
      "The package includes 6 nights accommodation (3 nights Barcelona, 3 nights Madrid), daily breakfast, comfortable transfers between cities, guided city tours in Barcelona and Madrid, and sightseeing at iconic landmarks along the way. International flights, visa fees and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Spain?",
    answer:
      "Indian passport holders require a Schengen visa, which covers travel across Barcelona and Madrid on this itinerary. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Sagrada Familia and Gothic Quarter in Barcelona, the mountain monastery of Montserrat, and the Royal Palace, Prado Museum and historic Toledo from Madrid.",
  },
  {
    question: "What currency is used across Spain?",
    answer:
      "Spain uses the Euro (EUR) across Barcelona and Madrid. Cards are widely accepted everywhere, but it's useful to carry some local cash for small purchases and transit. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add a day trip to Segovia, extra nights in either city, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const BarcelonaMadridLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://vacations.aircanada.com/.imaging/focalarea/cinema/1200x/dam/jcr:5b6feecf-c565-40df-90bc-11fa1ae1efe0/Barcelona-Madrid-and-Lisbon-202411-BCNBML-01_La-Sagrada-Familia-Barcelona.jpg"
          alt="Barcelona & Madrid Tour"
        />

        <div className="hero-content">
          <h1>Best of Barcelona + Madrid</h1>

          <p>
            Barcelona • Montserrat • Madrid • Toledo
          </p>

          <Link to="/Barcelona-Madrid">
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
              src="https://tse2.mm.bing.net/th/id/OIP.krilrda5x8Jgs79kypAkQwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Sagrada Familia Barcelona"
            />
            <p>Sagrada Familia, Barcelona</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.Qws-du2y4i1KLrynhoglRwHaE6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Montserrat Monastery"
            />
            <p>Montserrat Monastery</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://mundodele.com/en/wp-content/uploads/2025/09/Royal-Palace-of-Madrid-Entry-Tickets-Guide.webp"
              alt="Royal Palace Madrid"
            />
            <p>Royal Palace, Madrid</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.3zpGRL96BpPV0P-jD1TKBwHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Toledo Spain"
            />
            <p>Historic Toledo</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏛️ Iconic Gaudí Architecture</div>
          <div>⛰️ Scenic Montserrat Day Trip</div>
          <div>🎨 World-Class Madrid Museums</div>
          <div>🏰 Medieval Toledo Excursion</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Best of Spain in 7 Days</h2>

        <p>
          From the artistry of Barcelona to the royal charm of Madrid — a journey through Spain's finest cities and its storied past
        </p>

        <br />

        <Link to="/Barcelona-Madrid">
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
              src="https://wallpaperbat.com/img/1957936-athens-atene-greece.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>India – Athens</p>
              <p>
Upon arrival at Athens International Airport, you are warmly met and assisted for your private transfer 
to your hotel in the city. Sit back and relax as you drive through the historic streets of Athens, catching 
your first glimpses of this ancient yet vibrant capital. Once you arrive at your hotel, check in and settle 
into your accommodation. The remainder of the day is at leisure — perhaps enjoy a gentle walk 
nearby or unwind after your journey. <br/>
Overnight Stay in Athens 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.eC2ZPyGXqUTyij-vjfHBMAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Athens – Half-Day Sightseeing Tour with Acropolis Museum on SIC Basis</p>
              <p>
After breakfast, you join a shared-basis half-day sightseeing tour of Athens. This guided experience 
introduces you to the city’s most iconic landmarks, including the Acropolis, a UNESCO World 
Heritage site that stands as a symbol of classical Greek civilization. You visit the Acropolis Museum, 
where beautifully curated exhibits showcase ancient sculptures, artifacts, and architectural 
fragments, offering deep insight into Greece’s glorious past. The tour provides a perfect blend of 
history, culture, and storytelling before returning to your hotel or city center.<br/> 
Overnight Stay in Athens. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.luxurytravelmag.com.au/wp-content/uploads/2019/07/mykonos_1.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Athens – Mykonos</p>
              <p>
Breakfast at Hotel. Check out from the Hotel.<br/> 
Private Transfer – Athens Hotel to Athens Port 
At your scheduled time, a private vehicle and professional driver will collect you from your Athens 
hotel and transport you comfortably to the Athens ferry port. Enjoy a stress-free transfer as you 
prepare to board your ferry to the next destination. <br/>
High-Speed Ferry (Economy Class) – Athens to Mykonos 
Board a high-speed ferry in economy class for your scenic voyage across the Aegean Sea to the vibrant 
island of Mykonos. Relax onboard and take in the coastal views as you approach this iconic Cycladic 
island <br/>
Apextion DMC <br/>
Email: sales@apextiondmc.com, groups@apextiondmc.com || Contact No.: +91 11 4921 5555 
www.apextiondmc.com  <br/>
LONDON | PARIS | NEW DELHI | MUMBAI <br/>
Private Transfer – Mykonos Port to Mykonos Hotel <br/>
Upon arrival at Mykonos Port, you are met and assisted before boarding a private transfer to your 
hotel. Enjoy your first glimpses of Mykonos’s charming lanes and azure seascapes as you travel to 
your accommodation.<br/> 
Overnight Stay in Mykonos.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.shoreexcursionsgroup.com/img/tour/EUMYHILIGHTS-2.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Mykonos – Mykonos City and Island Tour on Shared Basis</p>
              <p>
Breakfast at Hotel.<br/>  
Set out on a shared-basis Mykonos city and island tour that showcases the best of this lively Cycladic 
gem. From the iconic windmills and Little Venice to panoramic island viewpoints, this guided 
experience brings Mykonos’s culture, history, and scenic beauty to life.<br/> 
Overnight Stay in Mykonos 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://wallpaperaccess.com/full/532651.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Mykonos – Santorini</p>
              <p>
Breakfast at Hotel.<br/> 
Private Transfer – Mykonos Hotel to Mykonos Port 
At your designated departure time, a private transfer will collect you from your hotel and take you 
to Mykonos Port. Sit back and relax as you head toward your next unforgettable island destination. 
High-Speed Ferry (Economy Class) – Mykonos to Santorini 
Embark on another high-speed ferry in economy class for your picturesque journey from Mykonos 
to Santorini. Soak in the sea breeze and sparkling Aegean views as you approach the legendary 
volcanic isle.<br/> 
Private Transfer – Santorini Port to Santorini Hotel <br/>
On arrival at Santorini Port, you’ll be greeted and assisted before a private transfer whisk you to 
your hotel. Take in your first sights of Santorini’s dramatic cliffs, whitewashed buildings, and deep 
blue caldera. <br/>
Overnight Stay in Santorini. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.jtgtravel.com/wp-content/uploads/2025/11/santorini-volcanic-islands-cruise-volcano-hot-springs-and-thirassia.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Santorini – Day at Leisure Or Santorini – Volcanic Islands Cruise with Hot Springs Visit on Shared Basis</p>
              <p>
Apextion DMC <br/>
Email: sales@apextiondmc.com, groups@apextiondmc.com || Contact No.: +91 11 4921 5555 
www.apextiondmc.com  <br/>
LONDON | PARIS | NEW DELHI | MUMBAI <br/>
After breakfast or at the scheduled time, you join a shared-basis Set sail from Athinios Port on a 
traditional wooden boat and explore the natural wonders of Santorini’s volcanic landscape. With live 
commentary on board, you'll journey through the heart of the caldera and visit iconic spots shaped 
by volcanic activity. <br/>
Overnight Stay in Santorini 
 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://wallpaperaccess.com/full/229932.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Madrid → India</p>
              <p>
At the appropriate time, you are transferred privately from your Santorini hotel to Santorini Airport.<br/> 
Enjoy a comfortable and timely journey, concluding your unforgettable Greek island experience as 
you prepare for your onward flight. ____________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("7 Days Best of Barcelona + Madrid Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Spanish journey</p>
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

export default BarcelonaMadridLanding;