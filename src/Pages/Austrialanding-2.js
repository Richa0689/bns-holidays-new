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
    question: "What is the best time to visit Budapest, Vienna, and Prague?",
    answer:
      "This Central European route is magnificent year-round. Spring (April–May) is one of the most popular times — the cities come alive with blooming gardens, outdoor café culture, and comfortable temperatures perfect for sightseeing. Summer (June–August) offers long days and vibrant festivals. Autumn (September–October) brings golden colours and fewer crowds. Winter (December) is absolutely magical — Budapest's thermal baths, Vienna's world-famous Christmas markets, and Prague's snow-dusted old town create an unforgettable festive atmosphere.",
  },
  {
    question: "What is included in the 7-day tour package?",
    answer:
      "The package includes accommodation for 6 nights, daily breakfast, airport and station transfers, a Budapest City Highlights Sightseeing Cruise (ticket included), a Schönbrunn Palace & Gardens Skip-the-Line Tour (shared basis, included), and a Prague Castle Skip-the-Line Ticket with Audioguide (included). Intercity train travel between Budapest, Vienna, and Prague is also included. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Hungary, Austria, and Czech Republic?",
    answer:
      "Indian passport holders require a Schengen visa to visit Hungary, Austria, and the Czech Republic. All three countries are part of the Schengen Area, so one Schengen visa covers your entire trip. We recommend applying at least 4–6 weeks in advance. Our team can guide you through the complete documentation process.",
  },
  {
    question: "Is this tour suitable for first-time Europe travellers?",
    answer:
      "Absolutely! This itinerary is perfectly crafted for first-time European travellers. It covers iconic highlights — Budapest's stunning Parliament and Danube cruise, Vienna's imperial Schönbrunn Palace, and Prague's fairy-tale castle and Charles Bridge — with a comfortable pace that lets you experience three of Central Europe's most beloved capitals without feeling rushed.",
  },
  {
    question: "What currencies are used across Hungary, Austria, and Czech Republic?",
    answer:
      "Austria uses the Euro (€). Hungary uses the Hungarian Forint (HUF), and the Czech Republic uses the Czech Koruna (CZK). It is advisable to carry some local currency in each country for smaller purchases and local markets, though credit and debit cards are widely accepted at hotels, restaurants, and major attractions throughout the route.",
  },
  {
    question: "Can I customise the Budapest–Vienna–Prague itinerary?",
    answer:
      "Yes! Every itinerary is fully customisable based on your interests, travel dates, and budget. Whether you'd like to add a Hungarian thermal bath experience, a Vienna State Opera performance, a Vltava River cruise in Prague, or extend your stay in any city, our team will craft the perfect personalised Central European journey for you.",
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
const EuropeLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://res.cloudinary.com/enchanting/q_70,f_auto,w_1440,h_720,c_fill,g_face/ee-web/2024/03/shutterstock_272655443.jpg"
          alt="Budapest Vienna Prague Tour"
        />

        <div className="hero-content">
          <h1>Budapest + Vienna + Prague</h1>
          <p>Historic Cities. European Charm. Scenic Experiences.</p>

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
              src="https://budapest.com/storage/722/DJI_20250301150641_0111_D.jpg"
              alt=""
            />
            <p>Budapest Parliament</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://assets.cntraveller.in/photos/69fdabc1e2de36c84402c3a2/master/w_1600%2Cc_limit/1939806792"
              alt=""
            />
            <p>Vienna City</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=400,height=265,dpr=2/tour_img/63f279012fb01.jpeg"
              alt=""
            />
            <p>Prague Old Town</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://cdn.britannica.com/63/242563-050-C1FD925B/Prague-Charles-Bridge-Karluv-Most-Czech-Republic.jpg"
              alt=""
            />
            <p>Charles Bridge</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Europe Tour?</h2>

        <div className="why-grid">
          <div>🏰 Historic European Cities</div>
          <div>🚆 Scenic Intercity Travel</div>
          <div>📸 Beautiful Architecture</div>
          <div>🍽️ European Food & Culture</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Central Europe</h2>
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIrMW3BtdeAda3wQ6cTboxhux4dfSCQG5ng&s"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{color:"blue"}}>Welcome to Hungary</p>
              <p>Welcome to Budapest! Upon arrival at Budapest Airport, enjoy a private transfer to your hotel. Check
in, relax, and spend the evening walking along the Danube Promenade or exploring the lively streets
around Váci Utca at your own pace.<br/>
Overnight Stay in Budapest</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://storage.ghost.io/c/b2/5a/b25ae1cc-57ff-42d2-b189-680f1dd95ffc/content/images/2024/04/Buda-Castle-3.webp"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color:"blue"}}>Budapest - Budapest City Highlights Sightseeing Cruise – Entrance Ticket & Tour (Included)</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, proceed for your Budapest City Highlights Sightseeing Cruise (ticket included). Sail
along the Danube and enjoy stunning views of the Parliament Building, Buda Castle, Chain Bridge,
Gellért Hill and the picturesque riverbanks of Budapest. Take in the city's iconic architecture while
listening to informative commentary during the cruise.<br/>
Rest of the day is free for leisure — explore Fisherman's Bastion, Heroes' Square, or Budapest's
famous thermal baths.<br />
Overnight Stay in Budapest</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.architectandinteriorsindia.com/cloud/2025/11/06/Anantara_New_York_Palace_Budapest_Hotel_Exterior_View_Building_Facade_Day-1024x703.jpg"              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{color:"blue"}}>Budapest – Vienna</p>
              <p>Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Budapest Hotel to the Train Station. Board your train from Budapest to Vienna.
Upon arrival at Vienna Station, enjoy a private transfer to your hotel. Check in and spend the
evening strolling around the Ringstrasse, St. Stephen's Cathedral area, or visiting a traditional
Viennese café.<br/>
Overnight Stay in Vienna</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/11/c7/dd/cc.jpg"              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color:"blue"}}>Vienna</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, proceed for the Schönbrunn Palace & Gardens Skip-the-Line Tour (shared basis,
included). Visit the magnificent imperial residence, stroll through the ornate halls, and learn about
the Habsburg dynasty. Enjoy the exquisite Baroque gardens, fountains, and viewpoints surrounding
the palace grounds.<br/>
Return to the city center and enjoy your afternoon at leisure — explore the Hofburg Palace,
Rathausplatz or Vienna's classical music and coffee culture.<br/>
Overnight Stay in Vienna</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://gotripzi.com/cdn-cgi/image/onerror=redirect,width=3200,height=2400,fit=cover,format=png/_astro/vienna-at-hero.CNVoAFK6.webp"              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color:"blue"}}>Vienna - Prague</p>
              <p>Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Vienna Hotel to Station. Board your train from Vienna to Prague. Upon arrival
at Prague Station, enjoy a private transfer to your hotel. Check in and relax, or take an evening walk
across Charles Bridge and explore Old Town Square.<br/>
Overnight Stay in Prague</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://cdn-imgix.headout.com/media/images/c85ce60efdd84f8a89d78dbe07bb320a-PragueCastle06.jpg?auto=compress%2Cformat&w=900&h=562.5&q=90&ar=16%3A10&crop=faces%2Ccenter&fit=crop"              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{color:"blue"}}>Prague - Prague Castle Skip-the-Line Ticket with Audioguide</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, proceed to visit Prague Castle using your Skip-the-Line Ticket with Audioguide
(included). Explore St. Vitus Cathedral, the Old Royal Palace, St. George's Basilica, and the charming
Golden Lane, while learning about the history of the world's largest ancient castle complex.
Afternoon and evening at leisure — explore the Astronomical Clock, Vltava riverside, or enjoy cafés
and local markets in the Old Town area.<br/>
Overnight Stay in Prague</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://pub-94d1cc15a07543a1a84d2eef096b8d24.r2.dev/posts/03-letiste-praha-1772951328447-8h184k-lg.webp"              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{color:"blue"}}>Prague</p>
              <p>Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Prague Hotel to Airport for your onward flight </p>
            </div>
          </div>

        </div>

        {/* Send Query Button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("7 Days Budapest + Vienna + Prague Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Central Europe journey</p>
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

export default EuropeLanding;