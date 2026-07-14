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
    question: "What is the best time to visit Laos for this short escape?",
    answer:
      "The cool, dry season from November to February offers the most pleasant weather in Vientiane and Luang Prabang, with comfortable temperatures for sightseeing. March to May is hot, while the monsoon season (June–October) brings lush green landscapes but occasional rain, so plan accordingly.",
  },
  {
    question: "What is included in the 4-day Laos Short Escape package?",
    answer:
      "The package includes hotel accommodation for 3 nights, daily breakfast, airport and internal transfers, city tours in Vientiane and Luang Prabang, the Kuang Si Falls excursion, and entrance to key monuments. International and domestic flights, personal expenses, and meals other than breakfast are not included.",
  },
  {
    question: "Do I need a visa to travel to Laos?",
    answer:
      "Indian passport holders can obtain a Laos visa-on-arrival at Wattay International Airport (Vientiane) or Luang Prabang International Airport, or apply for an e-Visa online in advance. Our team can guide you through the documentation so your arrival is hassle-free.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include Pha That Luang and Wat Sisaket in Vientiane, the cascading turquoise pools of Kuang Si Falls, the Royal Palace Museum and Wat Xieng Thong in Luang Prabang, sunset views from Mount Phousi, and the vibrant Luang Prabang Night Market.",
  },
  {
    question: "What currency is used across Laos?",
    answer:
      "The Lao Kip (LAK) is the official currency, though US Dollars and Thai Baht are widely accepted in tourist areas. Cash is preferred for local markets and smaller vendors, so it is a good idea to carry some on hand.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add extra nights in Luang Prabang, a Vang Vieng extension, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const LaosEscape = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK-lnDTuZ3cptnPnmcN3N_YdBC3_N-6K2R0MZ0a2njgUZrLodjMQZqRVk&s=10"
          alt="Laos Tour"
        />

        <div className="hero-content">
          <h1>LAOS</h1>

          <p>
            Vientiane • Luang Prabang • Kuang Si Falls • Mekong River
          </p>

          <Link to="/Laos-Escape">
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYoDGktj5XdsRzbPNPW7tQCaihW61t9umISm5_WLsC6A&s"
              alt="Pha That Luang Vientiane"
            />
            <p>Pha That Luang, Vientiane</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNMlyuP6eYcg0-zaDpQ3-N9qoxd2aqQ-2yt3klO17y4A&s=10"
              alt="Kuang Si Falls"
            />
            <p>Kuang Si Falls</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaxxRPMqiJN_giXxrkEGpEHhNiZ57E58ft6fQOW4N5Kg&s=10"
              alt="Luang Prabang"
            />
            <p>Luang Prabang Old Town</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/06/ea/36/caption.jpg?w=1200&h=-1&s=1"
              alt="Mekong River"
            />
            <p>Mekong River Sunset</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🛕 Ancient Temples & Golden Stupas</div>
          <div>💦 Turquoise Waterfalls</div>
          <div>🌅 Serene Mekong River Views</div>
          <div>🧘 A Peaceful, Uncrowded Escape</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Charm of Laos in 4 Days</h2>

        <p>
          From golden stupas to cascading waterfalls — a short, soulful escape into old-world Laos
        </p>

        <br />

        <Link to="/Laos-Escape">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>4 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ7RabzwPodpjEnkbQD8uMGKhzgwx7TyTytVKsjYXTWTXlXKaYci_rOz8Z&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>Arrival in Vientiane</p>
              <p>
                Arrive at Vientiane International Airport where our representative will welcome you and assist with your hotel transfer.
                After check-in, the rest of the day is free to relax or explore nearby areas at your own pace.<br/>
               Meals: None<br/>
               Stay: Vientiane

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoIBnRO1Mc7UwpZV2_gIYEcgtfGrzC9ZLsuLpXyA6SzyvcLXP-pCga4-0&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Vientiane City Tour – Vang Vieng</p>
              <p>
                After breakfast, begin your guided city tour covering the iconic landmarks of the capital. Visit the sacred That Luang Stupa, a national symbol of Laos, followed by Patuxai (Victory Monument), offering panoramic city views.
               Continue to Haw Phra Kaew, once home to the Emerald Buddha, and Wat Sisaket, famous for thousands of Buddha statues.
              After lunch at a local restaurant, proceed to the railway station for your high-speed train journey to Vang Vieng, known for its limestone karst landscapes.
              Upon arrival, transfer to your hotel and relax.<br/>
 
              Meals: Breakfast, Lunch<br/>
              Stay: Vang Vieng

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREUQK-9R540GgEbFU8-C7WpEVWJgGr_Mp7ufTAc-MbLA&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Vang Vieng – Luang Prabang</p>
              <p>
               Post breakfast, explore the natural wonders of Vang Vieng. Visit Tham Chang Cave and Tham Nang Far Cave, known for their impressive formations and scenic surroundings.
               Later, unwind at the famous Blue Lagoon, where you can enjoy the crystal-clear water and peaceful environment.
               After lunch, board the high-speed train to Luang Prabang, a UNESCO World Heritage city.
               In the evening, climb Mount Phousi for a breathtaking sunset view over the Mekong River and explore the vibrant Night Market for local handicrafts<br/>.
 
              Meals: Breakfast, Lunch<br/>
              Stay: Luang Prabang

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_JIXtvWWOeHqcvx4ps4GjsFhryQKrsXyeIkXGaETEDVECAsVnflVR_Dg&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Luang Prabang – Departure</p>
              <p>
                Early morning, witness the spiritual Alms Giving ceremony, a unique cultural experience of Laos, followed by a visit to the local morning market.
                After breakfast, explore the Royal Palace Museum and visit some of the most important temples including Wat Xieng Thong, Wat Mai, and Wat Visoun, showcasing classic Laotian architecture and heritage.
                Later, transfer to the airport for your onward journey with beautiful memories of Laos.<br/>

              Meals: Breakfast

              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("Laos Short Escape - 4 Days Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Laos getaway</p>
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

export default LaosEscape;