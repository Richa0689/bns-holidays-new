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
    question: "What is the best time to visit Kuala Lumpur and Genting Highlands?",
    answer:
      "Kuala Lumpur is a year-round destination. However, the best time to visit is from May to July and December to February, when rainfall is lower. Genting Highlands is cool throughout the year (around 15–25°C), making it a refreshing escape from the city heat at any time.",
  },
  {
    question: "What is included in the 4-day KL & Genting package?",
    answer:
      "The package includes airport transfers on a private basis, the Kuala Lumpur Night Tour, a full-day Genting Highlands tour with SkyWorld Outdoor Theme Park tickets and 2-way cable car, Aquaria KLCC entry, and hotel breakfast. International flights are not included.",
  },
  {
    question: "Do I need a visa to visit Malaysia?",
    answer:
      "Citizens of many countries, including India, can obtain a visa on arrival or eNTRI/eVisa for Malaysia. We recommend checking the latest requirements with the Malaysian Immigration Department or contacting our team for up-to-date guidance before travel.",
  },
  {
    question: "Is the Genting SkyWorld Theme Park suitable for all ages?",
    answer:
      "Yes! SkyWorld Theme Park features a wide range of attractions suitable for families, kids, and thrill-seekers alike. With 25+ rides and attractions themed around popular films and franchises like Ice Age, Rio, and Life of Pi, there's something for everyone.",
  },
  {
    question: "How do we get from Kuala Lumpur to Genting Highlands?",
    answer:
      "On the Genting tour day, you'll be taken by coach from KL to the Skyway cable car station at Gohtong Jaya. From there, a scenic cable car ride takes you up to the Resort World Genting complex. The entire tour duration is approximately 8 hours.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! We can tailor the package to match your travel dates, group size, budget, and interests. Simply send us a query using the button below and our team will craft a personalised itinerary just for you.",
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

/* ── Main Page ───────────────────────────────────────────────── */
const KLGenting = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://cdn.tripspoint.com/uploads/photos/14640/genting-highlands-day-trip-with-cable-cable-car-sic_RNtYR.jpeg"
          alt="KL Genting"
        />
        <div className="hero-content">
          <h1>Kuala Lumpur</h1>
          <p>City Lights & Hilltop Fun</p>
          <Link to="/malaysia">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07" />
            <p>Petronas Twin Towers</p>
          </div>

          <div className="highlight-card">
            <img src="https://wanderon-images.gumlet.io/blogs/new/2024/06/genting-highlands-travel-guide-in-malaysia.jpg" />
            <p>Genting Highlands</p>
          </div>

          <div className="highlight-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/16/13/82/28.jpg" />
            <p>Cable Car Ride</p>
          </div>

          <div className="highlight-card">
            <img src="https://wanderon-images.gumlet.io/blogs/new/2024/07/best-time-to-visit-petaling-street-in-malaysia-scaled.jpg?auto=compress%2Cformat&w=768" />
            <p>Shopping & Nightlife</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏙️ Modern City Experience</div>
          <div>🎢 Genting Theme Parks</div>
          <div>🚡 Scenic Cable Car Ride</div>
          <div>🛍️ Shopping Paradise</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Malaysia Trip</h2>
        <p>Book now and get best deals</p><br />
        <Link to="/malaysia">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>4 Days Kuala Lumpur Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/a1/dd/69.jpg" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p><span style={{color: "blue"}}>Warm Airport Pick-Up with a private transfer to your hotel on PVT basis </span> <br /> Kuala Lumpur Night Tour on PVT basis Embark on an enchanting journey through the vibrant streets of Kuala Lumpur after sunset. This approximately three-hour tour promises a delightful blend of cultural landmarks, architectural marvels, and captivating sights. Here's what awaits you: <br /> Chinatown: Begin your adventure in the heart of Kuala Lumpur's bustling Chinatown. Immerse yourself in the lively atmosphere as you explore the narrow alleys, adorned with colourful lanterns and bustling market stalls. Discover the rich history and cultural heritage of this vibrant district. <br /> Mariamman Temple: Step into the serene Mariamman Temple, a place of worship dedicated to the Hindu goddess Mariamman. Marvel at the intricate sculptures, vibrant frescoes, and the spiritual ambience that envelops this sacred site. <br />Saloma Bridge: Cross the elegant Saloma Bridge, which spans the Klang River. As you walk along, take in the panoramic views of the cityscape illuminated against the night sky. The bridge's modern design and twinkling lights create a picturesque setting for memorable photographs. Petronas Twin Towers (Photoshop Only):  <br />Behold the iconic Petronas Twin Towers, an architectural masterpiece that dominates Kuala Lumpur's skyline. While you won't ascend the towers during this tour, you'll have the perfect opportunity for stunning photos. Capture the towers' majestic silhouette as they shimmer in the evening glow. <br /> Optional Entrance to KL Tower: For those seeking an elevated experience, consider adding an optional visit to the KL Tower (Menara Kuala Lumpur). This observation deck offers breathtaking 360-degree views of the city. Please note that there is an additional cost for this option, payable locally. <br /> Whether you choose to explore the city's vibrant streets or ascend to new heights, the Kuala Lumpur Night Tour promises an unforgettable evening filled with culture, history, and enchantment.  </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/11/6d/12/1e.jpg" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color: "blue"}}>After breakfast Full Day Genting Tour with Skyworld Outdoor Theme Park Tickets + 02 Way cable car  </p>
              <p>At First this tour will start the journey by En-route Batu Caves (photo stop 20 Mins). The caves house numerous Hindu shrines and is a famous landmark in KL, Then, will bring you up to Genting Highlands, which is a mountain retreat cum casino 6,000 feet above sea-level and located a moderate distance away from the city. <br />We'll stop at the sky way cable-car station for a ride up by cable-car, where you'll be amazed at the magnificent view of mountains and rain forest scenery. Once at the top, you can adjourn and head to the casino for a game of black jack, keno, roulette or other games. If the casino isn't your cup of tea, then take the time off to enjoy the attractions of the indoor theme park. <br />  Sky world - Southeast Asia's most anticipated outdoor theme park by Resorts World Genting. The theme park is 26 acres in size and would feature roughly 25 thrill rides and attractions based on diverse films and franchises like Blue Sky Studios' Ice Age, Rio and Epic, Life of Pi, Night at the Museum, Planet of the Apes, Alien vs. Predator, Titanic, Sons of Anarchy, and Independence Day <br /> Tour Duration : 8 Hrs </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/21/54/1e.jpg" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{color: "blue"}}>Morning after breakfast half day tour to Aquaria KLCC  on PVT basis. </p>
              <p>Aquaria KLCC is a state of the art located in the heart of the city, beneath the Kuala Lumpur City Centre and a stone's throw from the iconic Twin Towers. An amazing showcase of 5,000 land bound and aquatic creature exhibits spread over a a sprawling 60,000sqft </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://cdn.sanity.io/images/nxpteyfv/goguides/c3ac15fe25e0ba662668115a53f62056158617f1-1600x1066.jpg" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p><span style={{color: "blue"}}>Breakfast at the hotel & proceed for shopping </span><br /> Hotel to Dubai Airport Transfer on PVT basis </p>
            </div>
          </div>

        </div>

        {/* Send Query button below all day cards */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("4 Days Kuala Lumpur & Genting Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Malaysia trip</p>
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

      {/* Modal */}
      {activeModal && (
        <QueryModal
          day={activeModal}
          onClose={() => setActiveModal(null)}
        />
      )}

      {/* Scoped styles */}
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

export default KLGenting;