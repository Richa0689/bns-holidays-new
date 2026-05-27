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
    question: "What is the best time to visit Vienna, Budapest, and Prague?",
    answer:
      "This Central European route is stunning year-round. Spring (April–May) is one of the most popular times — Vienna's gardens bloom, Budapest's thermal baths are perfectly relaxing, and Prague's Old Town comes alive with outdoor cafés and mild weather. Summer (June–August) offers long days and vibrant festivals across all three cities. Autumn (September–October) brings golden colours and fewer crowds. Winter (December) is magical — Vienna's Christkindlmarkt, Budapest's illuminated Parliament, and Prague's snow-dusted Old Town Square create an unforgettable festive experience.",
  },
  {
    question: "What is included in the 7-day tour package?",
    answer:
      "The package includes accommodation for 6 nights, daily breakfast, airport and station transfers, a Schönbrunn Palace & Gardens Skip-the-Line Tour in Vienna (shared basis, included), a Budapest City Highlights Sightseeing Cruise (included), and a Prague Castle Skip-the-Line Ticket with Audio guide (included). Intercity train travel between Vienna, Budapest, and Prague is also included. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Austria, Hungary, and Czech Republic?",
    answer:
      "Indian passport holders require a Schengen visa to visit Austria, Hungary, and the Czech Republic. All three countries are part of the Schengen Area, so a single Schengen visa covers your entire 7-day journey. We recommend applying at least 4–6 weeks in advance. Our team can guide you through the complete documentation and visa application process.",
  },
  {
    question: "Is this tour suitable for first-time Europe travellers?",
    answer:
      "Absolutely! This itinerary is perfectly crafted for first-time European travellers. It takes you through imperial grandeur in Vienna, the stunning Danube riverfront of Budapest, and the fairy-tale architecture of Prague — all with a comfortable pace, included guided experiences, and private transfers at every step to ensure a smooth and memorable journey.",
  },
  {
    question: "What currencies are used in Austria, Hungary, and Czech Republic?",
    answer:
      "Austria uses the Euro (€). Hungary uses the Hungarian Forint (HUF), and the Czech Republic uses the Czech Koruna (CZK). It is advisable to carry some local currency in Hungary and the Czech Republic for smaller purchases and local markets. Credit and debit cards are widely accepted at hotels, restaurants, and major attractions throughout all three countries.",
  },
  {
    question: "Can I customise the Vienna–Budapest–Prague itinerary?",
    answer:
      "Yes! Every itinerary is fully customisable based on your interests, travel dates, and budget. Whether you'd like to add a Vienna State Opera performance, a Budapest thermal bath experience, a Vltava River cruise in Prague, or extend your stay in any city, our team will craft the perfect personalised Central European journey for you.",
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
const ViennaBudapestPragueLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.mercurytravels.co.in/preferred-holidays/europe-holidays/images/prague-vienna-budapest/prague-vienna-budapest-banner.jpg"
          alt="Vienna Budapest Prague Tour"
        />

        <div className="hero-content">
          <h1>Vienna + Budapest + Prague</h1>
          <p>Historic Europe. Beautiful Architecture. Cultural Journey.</p>

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
              src="https://www.wien.info/resource/image/290578/Video-Header/1920/1080/58eef66efccfe0e149afaba6917d2040/064391A20CDB6CDC7EBC0812F4508B11/40367-graben-einkaufen-shopping-altstadt-einkaufsstrassen.webp"
              alt=""
            />
            <p>Vienna Austria</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://media.istockphoto.com/id/508662108/photo/parliament-building-in-budapest-hungary.jpg?s=612x612&w=0&k=20&c=lIotnezW_Q_m8aKeJFVjEm58comkdlMWmLZDbI25Ivs="
              alt=""
            />
            <p>Budapest Hungary</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://thumbs.dreamstime.com/b/bridges-prague-czech-republic-scenic-summer-aerial-view-old-town-pier-architecture-charles-bridge-over-vltava-river-42628509.jpg"
              alt=""
            />
            <p>Prague Czech Republic</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://www.starttravel.co.uk/media/images/27f7440b-503e-4a68-a1ec-1dc43d7e7fc6.jpg"
              alt=""
            />
            <p>European City Views</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Europe Tour?</h2>

        <div className="why-grid">
          <div>🏰 Historic European Architecture</div>
          <div>🌉 Beautiful River & City Views</div>
          <div>🚆 Comfortable Multi-City Journey</div>
          <div>📸 Amazing Photography Spots</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore Central Europe</h2>
        <p>Book your Vienna, Budapest & Prague journey today</p>
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
              src="https://images.squarespace-cdn.com/content/v1/59485b756a4963a72a3763f1/1702438241925-9OLPZO3WT4HGYG83GORM/Vienna+%2833%29+%28small%29+%281%29.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{color:"blue"}}>Vienna</p>
              <p>Welcome to Austria –<br/>
Welcome to Vienna! Upon arrival at Vienna Airport, enjoy a private transfer to your hotel. Check in,
relax, and spend the evening exploring the elegant streets around the Ringstrasse, St. Stephen's
Cathedral, or Vienna's classic cafés at your leisure.<br/>
Overnight Stay in Vienna</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/14/20/dd/ae.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color:"blue"}}>Vienna</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, proceed for the Schönbrunn Palace & Gardens Skip-the-Line Tour (shared basis,
included). Explore the magnificent imperial residence, wander through the lavishly decorated state
rooms, and learn about the lives of the Habsburg rulers. Stroll through the beautifully manicured
Baroque gardens and enjoy spectacular viewpoints across the palace grounds.<br/>
Return to the city center and enjoy the rest of the day at leisure — explore Hofburg Palace, Belvedere,
or Vienna's vibrant shopping streets.<br/>
Overnight Stay in Vienna</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://travelobservations.com/wp-content/uploads/2023/07/budapest-scaled.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{color:"blue"}}>Vienna - Budapest</p>
              <p>Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Vienna Hotel to Station. Board your train from Vienna to Budapest. Upon
arrival at Budapest Station, enjoy a private transfer to your hotel. Check in and spend the evening
relaxing or exploring the beautiful Danube riverside illuminated by night.<br/>
Overnight Stay in Budapest</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media.istockphoto.com/id/508662108/photo/parliament-building-in-budapest-hungary.jpg?s=612x612&w=0&k=20&c=lIotnezW_Q_m8aKeJFVjEm58comkdlMWmLZDbI25Ivs="
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color:"blue"}}>Budapest</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, enjoy your City Highlights Sightseeing Cruise (included). Sail along the Danube River
and admire iconic landmarks such as the Hungarian Parliament Building, Buda Castle, Chain Bridge,
Gellért Hill, and the historic riverbanks of Budapest. Listen to informative audio commentary as you
experience the city from a unique perspective.<br/>
Afternoon and evening at leisure — explore Fisherman's Bastion, stroll around Váci Utca, or unwind
in one of Budapest's famous thermal baths.<br/>
Overnight Stay in Budapest</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://i0.wp.com/travelawaits.com/wp-content/uploads/2022/04/Prague-Old-Town-Square.jpg?resize=1024%2C695&ssl=1"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color:"blue"}}>Budapest – Prague</p>
              <p>Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Budapest Hotel to Train Station. Board your train from Budapest to Prague.<br/>
Upon arrival at Prague Station, enjoy a private transfer to your hotel. Check in and spend the
evening walking through Old Town Square, Charles Bridge, or the lively café districts.<br/>
Overnight Stay in Prague</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://staybook.in/_next/image?url=https%3A%2F%2Fcdn-imgix.headout.com%2Fmedia%2Fimages%2F1f6e270c1a18921c76eab07b1e37add8-8908-prague-prague-castle-guided-tour-003.jpg&w=1080&q=75"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{color:"blue"}}>Prague - Prague Castle Skip-the-Line Ticket with Audio guide</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, visit Prague Castle using your Skip-the-Line Ticket with Audio guide (included).
Explore St. Vitus Cathedral, the Old Royal Palace, St. George's Basilica, and the charming Golden
Lane while learning about the history of one of the world's largest ancient castle complexes.
Rest of the day is free — discover the Astronomical Clock, stroll along the Vltava River, or enjoy local
markets and cafés.<br/>
Overnight Stay in Prague</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhv9mzsFc9lH6TyPIHr3DeZktvbVO5nRALig&s"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{color:"blue"}}>Prague</p>
              <p>Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Prague Hotel to Prague Airport for your onward flight.</p>
            </div>
          </div>

        </div>

        {/* Send Query Button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("7 Days Vienna + Budapest + Prague Tour")}
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

export default ViennaBudapestPragueLanding;