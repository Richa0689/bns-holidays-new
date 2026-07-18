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
    question: "What is the best time to visit Budapest, Vienna and Prague for this tour?",
    answer:
      "April to October is ideal, with May–June and September offering pleasant weather and fewer crowds. Summer (July–August) is peak season with long daylight hours, perfect for Danube cruises in Budapest and outdoor cafés in Vienna and Prague, while December brings the magic of Christmas markets across all three cities.",
  },
  {
    question: "What is included in the 9-day Budapest, Vienna & Prague package?",
    answer:
      "The package includes 8 nights accommodation (2 nights Budapest, 3 nights Vienna, 3 nights Prague), daily breakfast, comfortable coach or rail transfers between cities, guided city tours in Budapest, Vienna and Prague, and sightseeing at iconic landmarks along the way. International flights, visa fees and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Hungary, Austria and Czech Republic?",
    answer:
      "Indian passport holders require a Schengen visa, which covers travel across Hungary, Austria and the Czech Republic on this itinerary. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include Buda Castle and a Danube River cruise in Budapest, Schönbrunn Palace and the Vienna State Opera, the charming Wachau Valley, and Prague's Charles Bridge, Old Town Square and Prague Castle.",
  },
  {
    question: "What currency is used across Hungary, Austria and Czech Republic?",
    answer:
      "Hungary uses the Forint (HUF), Austria uses the Euro (EUR), and the Czech Republic uses the Czech Koruna (CZK). Cards are widely accepted in all three countries, but it's useful to carry some local cash for small purchases and transit. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add a Bratislava day trip, extra nights in Prague, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const CzechRepublicBudapestViennaPragueLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://cdn.tourradar.com/s3/tour/1500x800/277462_6672d7944027d.jpg"
          alt="Budapest Vienna Prague Tour"
        />

        <div className="hero-content">
          <h1>Budapest + Vienna + Prague</h1>

          <p>
            Budapest • Vienna • Prague
          </p>

          <Link to="/Vienna-Prague">
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
              src="https://www.baltana.com/files/wallpapers-29/Buda-Castle-HD-Wallpapers-98577.jpg"
              alt="Buda Castle Budapest"
            />
            <p>Buda Castle, Budapest</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://rare-gallery.com/uploads/posts/891471-Vienna-State-Opera-Austria-Vienna-Houses-Evening.jpg"
              alt="Vienna State Opera"
            />
            <p>Vienna State Opera</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://rare-gallery.com/uploads/posts/795228-Schonbrunn-Palace-Sculptures-Austria-Vienna-Palace.jpg"
              alt="Schönbrunn Palace"
            />
            <p>Schönbrunn Palace, Vienna</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images6.alphacoders.com/732/732138.jpg"
              alt="Charles Bridge Prague"
            />
            <p>Charles Bridge, Prague</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Iconic Buda Castle & Parliament</div>
          <div>🎻 Imperial Vienna & Schönbrunn Palace</div>
          <div>🌉 Fairy-tale Prague Old Town</div>
          <div>🚢 Scenic Danube River Cruise</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Budapest, Vienna & Prague in 9 Days</h2>

        <p>
          From the grandeur of Budapest to the fairy-tale streets of Prague — a journey through Central Europe's finest
        </p>

        <br />

        <Link to="/Vienna-Prague">
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
              src="https://wallpaperaccess.com/full/1298407.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>India → Budapest</p>
              <p>
        Budapest City Highlights Sightseeing Cruise – Entrance Ticket & Tour (Included) <br/> 
Welcome to Hungary –<br/>  
Welcome to Budapest! Upon arrival at Budapest Airport, enjoy a private transfer to your hotel. Check 
in, relax, and spend the evening walking along the Danube Promenade or exploring the lively streets 
around Váci Utca at your own pace.<br/>  
Overnight Stay in Budapest 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.vPkmQbNsnPVtGRTbeu17EQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Budapest - Budapest City Highlights Sightseeing Cruise – Entrance Ticket & Tour (Included)</p>
              <p>
Breakfast at Hotel.<br/>  
After breakfast, proceed for your Budapest City Highlights Sightseeing Cruise (ticket included). Sail 
along the Danube and enjoy stunning views of the Parliament Building, Buda Castle, Chain Bridge, 
Gellért Hill and the picturesque riverbanks of Budapest. Take in the city’s iconic architecture while 
listening to informative commentary during the cruise. <br/> 
Rest of the day is free for leisure — explore Fisherman’s Bastion, Heroes’ Square, or Budapest’s 
famous thermal baths.<br/>  
Overnight Stay in Budapest 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.RzSsdlQ_Gf9aL5yDpze1pwHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Budapest → Vienna</p>
              <p>
    Breakfast at Hotel. Check out from the Hotel.<br/>  
Private transfer from Budapest Hotel to the Train Station. Board your train from Budapest to Vienna. <br/> 
Upon arrival at Vienna Station, enjoy a private transfer to your hotel. Check in and spend the 
evening strolling around the Ringstrasse, St. Stephen’s Cathedral area, or visiting a traditional 
Viennese café. <br/> 
Overnight Stay in Vienna <br/> 
Apextion DMC <br/> 
Email: sales@apextiondmc.com, groups@apextiondmc.com || Contact No.: +91 11 4921 5555 
www.apextiondmc.com  <br/> 
LONDON | PARIS | NEW DELHI | MUMBAI 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://wallpaperaccess.com/full/156748.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Vienna</p>
              <p>
              
Breakfast at Hotel.<br/>  
day at leisure <br/> 
Overnight Stay in Vienna
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://thumbs.dreamstime.com/b/melk-abbey-one-biggest-most-beautiful-european-baroque-monasteries-architecture-wachau-valley-danube-river-unesco-402984017.jpg?w=576"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Vienna</p>
              <p>
         Breakfast at Hotel. <br/> 
After breakfast, proceed for the Schönbrunn Palace & Gardens Skip-the-Line Tour (shared basis, 
included). Visit the magnificent imperial residence, stroll through the ornate halls, and learn about 
the Habsburg dynasty. Enjoy the exquisite Baroque gardens, fountains, and viewpoints surrounding 
the palace grounds.<br/>  
Return to the city center and enjoy your afternoon at leisure — explore the Hofburg Palace, 
Rathausplatz or Vienna’s classical music and coffee culture.<br/>  
Overnight Stay in Vienna 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.aNlvZulDY-3CQsun16hGMwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Vienna → Prague</p>
              <p>
            Breakfast at Hotel. Check out from the Hotel<br/> . 
Private transfer from Vienna Hotel to Station. Board your train from Vienna to Prague. Upon arrival 
at Prague Station, enjoy a private transfer to your hotel. Check in and relax, or take an evening walk 
across Charles Bridge and explore Old Town Square. <br/> 
Overnight Stay in Prague 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.alphacoders.com/806/thumb-1920-806121.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Prague - Prague Castle Skip-the-Line Ticket with Audio guide</p>
              <p>
    Breakfast at Hotel.<br/>  
After breakfast, proceed to visit Prague Castle using your Skip-the-Line Ticket with Audio guide 
(included). Explore St. Vitus Cathedral, the Old Royal Palace, St. George’s Basilica, and the charming 
Golden Lane, while learning about the history of the world’s largest ancient castle complex.<br/>  
Afternoon and evening at leisure — explore the Astronomical Clock, Vltava riverside, or enjoy cafés 
and local markets in the Old Town area.<br/>  
 Overnight Stay in Prague <br/> 
Apextion DMC<br/>  
Email: sales@apextiondmc.com, groups@apextiondmc.com || Contact No.: +91 11 4921 5555 <br/> 
www.apextiondmc.com <br/>  
LONDON | PARIS | NEW DELHI | MUMBAI 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://wallpapercrafter.com/desktop2/844196-sunset-river-building-home-Czech-Republic-Vltava.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{ color: "blue" }}>Excursion to Český Krumlov</p>
              <p>
 Breakfast at hotel <br/>  
day at leisure <br/> 
Overnight Stay in Prague
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://wallpaperaccess.com/full/5097854.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 9</h3>
              <p style={{ color: "blue" }}>Prague → India</p>
              <p> Breakfast at Hotel. Check out from the Hotel.<br/>  
Private transfer from Prague Hotel to Airport for your onward flight<br/> 
Back to India 
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("9 Days Budapest + Vienna + Prague Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Central European journey</p>
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

export default CzechRepublicBudapestViennaPragueLanding;