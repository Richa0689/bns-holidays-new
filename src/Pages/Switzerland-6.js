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
    question: "What is the best time to visit Geneva, Montreux and Zermatt?",
    answer:
      "May to September offers the most pleasant weather for lakeside walks in Geneva and Montreux, with clear conditions for Matterhorn views in Zermatt. December to March is ideal if you'd like to combine the trip with skiing in Zermatt, and September is grape-harvest season along the Montreux vineyards.",
  },
  {
    question: "What is included in the 7-day Geneva + Montreux + Zermatt package?",
    answer:
      "The package includes hotel accommodation for 6 nights (2N Geneva, 2N Montreux, 2N Zermatt), daily breakfast, luxury coach transfers between cities, and guided sightseeing across all three destinations. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Switzerland?",
    answer:
      "Indian passport holders require a Schengen visa, which covers Switzerland and allows entry across the wider Schengen area. We recommend applying at least 4-6 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Jet d'Eau and lakeside promenade in Geneva, the Chillon Castle and vineyard terraces near Montreux, and the iconic Matterhorn peak in Zermatt, a car-free Alpine village.",
  },
  {
    question: "How do I get around in Zermatt, since it's a car-free village?",
    answer:
      "Zermatt is closed to regular vehicles, so the final approach is made by a short train ride from Täsch. Within the village, transport is by electric taxi, horse-drawn carriage, or on foot. Our team will guide you through the transfer arrangements.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like extra nights in any city, a Gornergrat Railway upgrade, or premium hotels, our team will curate the perfect personalised experience for you.",
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
const ExploreGeneva = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://media.tacdn.com/media/attractions-splice-spp-674x446/12/d3/b6/50.jpg"
          alt="Geneva Montreux Zermatt Tour"
        />

        <div className="hero-content">
          <h1>Explore Geneva + Montreux + Zermatt</h1>

          <p>
            Geneva • Montreux • Zermatt — Switzerland in 7 Days
          </p>

          <Link to="/Explore-Geneva">
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
              src="https://live.staticflickr.com/3560/3598829845_5db1687c92_b.jpg"
              alt="Geneva"
            />
            <p>Jet d'Eau, Geneva</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://preview.redd.it/18kmw5ry2f161.jpg?auto=webp&s=60ee5afc8f79f32342d030333859fa59feaa21e3"
              alt="Montreux"
            />
            <p>Chillon Castle, Montreux</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.vESaFjx7J70gzbAuFAQKgQHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Zermatt"
            />
            <p>The Matterhorn, Zermatt</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.c8BywQVorYtFbAO6QGh-egHaFS?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Lake Geneva"
            />
            <p>Lake Geneva Shoreline</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>⛰️ Iconic Matterhorn Views</div>
          <div>🏰 Historic Chillon Castle</div>
          <div>🚗 Car-Free Alpine Village of Zermatt</div>
          <div>🌊 Lakeside Charm of Geneva &amp; Montreux</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Discover Switzerland's Lakes and Peaks in 7 Days</h2>

        <p>
          From cosmopolitan Geneva to the car-free village beneath the Matterhorn
        </p>

        <br />

        <Link to="/Explore-Geneva">
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
              src="https://tse1.mm.bing.net/th/id/OIP.ylVkTJRFPB-k7-YjKmo-UAHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>India – Geneva</p>
              <p>
                Arrival in Geneva: A Magical Start to Your Switzerland<br/>
                Welcome to Geneva, the City of Peace! Upon arriving at Geneva Airport, one of Europe’s most
                efficient and well-connected international gateways, your unforgettable journey begins the moment
                you land. After touching down, you’ll enjoy a smooth and seamless private transfer to your hotel,
                allowing you to relax, unwind, and settle in without any stress. your first evening in Geneva will set
                the tone for the remarkable experiences ahead. From the shimmering shores of Lake Geneva to the
                elegant streets of the Old Town, the city’s refined charm and serene atmosphere will captivate you
                from the moment you step outside.<br/>
                Overnight Stay in Geneva

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.myswissalps.com/wp-content/uploads/faulensee-lake-thun-sbb-train.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Geneva - Swiss Travel Pass - 06 Days Continuous | 02nd Class</p>
              <p>
                After breakfast, begin your journey through Switzerland using your Swiss Travel Pass – 6 Days
                Continuous (2nd Class). If you want to explore Switzerland’s top highlights at your own pace, this
                flexible all-in-one travel pass is the perfect choice. The pass grants you unlimited access to the
                country’s extensive public transport network, allowing you to travel seamlessly by train, bus, and
                boat across Switzerland’s most breathtaking landscapes. the Swiss Travel Pass, you can easily visit
                iconic destinations such as Lucerne, Interlaken, Zermatt, Montreux, and more—while also enjoying
                complimentary entry to many museums and discounts on mountain excursions.<br/>
                Geneva - Day Trip to Mont-Blanc and Cogwheel Ticket Mer de Glace<br/>
                Full-day excursion to Mont-Blanc and the Mer de Glace on a shared basis. If you want to explore
                some of the most breathtaking alpine highlights at your own pace, this immersive mountain
                experience is the perfect choice. The journey takes you through the stunning landscapes of the
                French Alps, beginning with a scenic transfer to Chamonix, the charming village nestled at the foot
                of Mont-Blanc from here, you’ll ascend toward the glacier aboard the historic Montenvers Cogwheel
                Train, which carries you up the mountainside to admire the spectacular Mer de Glace—one of
                Europe’s most impressive glaciers. As you explore the area, you’ll enjoy remarkable views, dramatic
                ice formations, and the unforgettable alpine atmosphere that makes this region truly iconic.<br/>
                Overnight Stay in Geneva
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://wallpaperaccess.com/full/9587093.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Geneva - Montreux</p>
              <p>
               After breakfast, catch a train from Geneva to Montreux using your Swiss Travel Pass. If you’re looking
               for a quick, comfortable, and scenic way to travel along Switzerland’s stunning Lake Geneva region,
               this journey is ideal. On a regional or InterCity train, the trip typically takes about 1 hour, offering
               beautiful lakeside and vineyard views along the route. You’ll depart from Geneva Cornavin Station
               and arrive at Montreux Station, placing you just steps away from the city’s elegant lakeside
              promenade, charming Old Town, and breathtaking Alpine backdrop.<br/>
              Overnight Stay in Montreux

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.ourswissexperience.com/wp-content/uploads/2022/08/Glacier-3000-Les-Diablerets-familienausflug-9-600x450.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Montreux – Excursion to Glacier 3000 Using Swiss Pass</p>
              <p>
                After breakfast, embark on your full-day excursion to Glacier 3000 on a shared basis using your
               Swiss Travel Pass. If you want to explore the Swiss Alps’ most spectacular highlights at your own
               pace, this flexible mountain adventure is the perfect choice. The journey takes you through scenic
               alpine landscapes, with panoramic views of snow-capped peaks, pristine valleys, and charming
              mountain villages along the way from the top, enjoy breathtaking vistas of the surrounding peaks,
              including Mont Blanc and the Matterhorn, and experience exciting activities such as walking across
              the Peak Walk suspension bridge, gliding down alpine slopes, or exploring the glacier itself. With the
              convenience of your Swiss Pass, this excursion offers a seamless and unforgettable way to discover
              one of Switzerland’s most iconic natural wonders.<br/>
             Overnight Stay in Montreux
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://evergreentravel.co.uk/wp-content/uploads/2025/01/zermatt.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Montreux – Zermatt</p>
              <p>
               After breakfast, catch a train from Montreux to Zermatt using your Swiss Travel Pass. If you’re
               looking for a comfortable and scenic way to travel between two of Switzerland’s most iconic
               destinations, this journey is ideal. On a regional or panoramic train service (with connections ifneeded), the trip typically takes about 2 hours 30 minutes to 3 hours, offering breathtaking views of
              lakes, vineyards, and the alpine landscape along the way. You’ll depart from Montreux Station and
              arrive at Zermatt Station, where the car-free village at the base of the majestic Matterhorn awaits
              your exploration.<br/>
              Overnight Stay in Zermatt
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://cdn-imgix.headout.com/media/images/91c3764a68032f5fdb89650796dd8b04-3075-zermatt-matterhorn-glacier-paradise-01.jpg?auto=format&w=1058.3999999999999&h=540&q=90&crop=faces&fit=crop"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Zermatt - Excursion to Matterhorn Glacier Paradise Using Swiss Pass</p>
              <p>
                After breakfast, embark on your full-day excursion to the Matterhorn Glacier Paradise on a shared
                basis using your Swiss Travel Pass. If you want to explore one of Switzerland’s most breathtaking
               alpine destinations at your own pace, this immersive experience is the perfect choice. The journeytakes you through stunning alpine landscapes, with spectacular views of snow-capped peaks,
               glaciers, and charming mountain villages along the way.
              From Zermatt, ascend to the Matterhorn Glacier Paradise—the highest cable car station in Europe—
              where you can admire panoramic vistas of the surrounding peaks, including the iconic Matterhorn.
              Explore the glacier palace, enjoy exhilarating alpine activities, and take in the serene beauty of the
              high mountains. With the convenience of your Swiss Pass, this excursion offers a seamless and
              unforgettable alpine adventure.<br/>
              Overnight Stay in Zermatt 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images8.alphacoders.com/708/thumb-1920-708773.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Zermatt – Geneva</p>
              <p>
                After breakfast, catch a train from Zermatt to Geneva using your Swiss Travel Pass. If you’re looking
               for a comfortable and scenic way to travel between the serene alpine village of Zermatt and the
               vibrant lakeside city of Geneva, this journey is ideal. On a regional or InterCity train (with necessaryconnections), the trip typically takes about 3 hours 30 minutes to 4 hours, offering spectacular views
               of mountains, valleys, and picturesque Swiss towns along the way. You’ll depart from Zermatt
               Station and arrive at Geneva Cornavin Station, placing you right in the heart of the city, ready to
               explore its elegant promenades, historic Old Town, and stunning lakefront.
             And proceed to Geneva Airport
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("7 Days Explore Geneva + Montreux + Zermatt Luxury Coach Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Swiss journey</p>
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

export default ExploreGeneva;