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
    question: "What is the best time to visit Singapore?",
    answer:
      "Singapore is a year-round destination with a tropical climate. February and March are the driest months, making them ideal for sightseeing. If you want to catch festivals, visit during Chinese New Year (Jan/Feb) or Deepavali (Oct/Nov). Avoid the wetter months of November and December if you prefer less rainfall.",
  },
  {
    question: "What is included in the 5-day Singapore tour package?",
    answer:
      "The package includes hotel accommodation, airport pick-up and drop-off on private transfer, and all guided excursions mentioned in the itinerary (Gardens by the Bay, Marina Bay Sands Skypark, Night Safari, Sentosa Island with Cable Car, Universal Studios, and Singapore Zoo) on sharing transfers. Shopping and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to visit Singapore?",
    answer:
      "Indian passport holders currently receive a visa-free entry to Singapore for up to 30 days. However, visa rules can change, so we recommend verifying with the Singapore Immigration & Checkpoints Authority (ICA) before your trip. Our team can help you with any documentation queries.",
  },
  {
    question: "Is Singapore safe for solo and family travellers?",
    answer:
      "Singapore consistently ranks as one of the safest cities in the world for tourists, solo travellers, and families alike. Crime rates are extremely low, public transport is excellent, and the city is very well-organised. Our guides are experienced professionals who will accompany you throughout the tour.",
  },
  {
    question: "What is the difference between private and sharing transfers?",
    answer:
      "Private transfers are exclusively for your group — ideal for airport pick-ups and drop-offs for a comfortable, direct journey. Sharing transfers are group vehicles where you travel with other tourists. Both are comfortable and safe; sharing transfers are used for popular attraction routes to keep costs affordable.",
  },
  {
    question: "Can I customise the Singapore itinerary?",
    answer:
      "Absolutely! We can tailor the tour to suit your interests, group size, travel dates, and budget. Whether you'd like to add a day trip to Batam, include a Michelin-star dining experience, or adjust the pacing of the itinerary, just reach out and we'll craft a personalised plan for you.",
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
const SingaporeLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* Hero */}
      <div className="hero-section">
        <img src="https://www.sharpholidays.in/blog/wp-content/uploads/2018/05/Singapore-1280x540.jpg" />
        <div className="hero-content">
          <h1>Best of Singapore</h1>
          <p>Modern City. Skyline. Attractions.</p>
          <Link to="/singapore">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Destinations</h2>
        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/ef/e8/b9/experiences-infinity.jpg?w=900&h=500&s=1" />
            <p>Marina Bay Sands</p>
          </div>
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1508964942454-1a56651d54ac" />
            <p>Gardens by the Bay</p>
          </div>
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1565967511849-76a60a516170" />
            <p>Merlion Park</p>
          </div>
          <div className="highlight-card">
            <img src="https://www.trawell.in/admin/images/upload/930772574Sentosa_Island_Singapore.jpg" />
            <p>Sentosa Island</p>
          </div>
        </div>
      </div>

      {/* Why */}
      <div className="why-section">
        <h2>Why Choose Singapore?</h2>
        <div className="why-grid">
          <div>🌆 Futuristic City</div>
          <div>🌳 Clean & Green</div>
          <div>🛍️ Shopping Hub</div>
          <div>🍜 Food Paradise</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Singapore Trip</h2>
        <p>Starting at ₹95,000 | EMI ₹4,500/month</p>
        <Link to="/singapore">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>5 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkrR1OQRSI5G3blj8q5-yBL9qWlarLHZVoGw&s" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{color: "blue"}}>Warm Airport Pick-Up with a private transfer to Singapore hotel on Private transfer <br /> Evening, Combo Gardens by the Bay and Marina Bay Sand Skypark on Sharing transfer </p>
              <p>Explore Massive 105 hectare urban park beside Marina Bay featuring themed gardens and architectural landscape design as part of Singapore's "City in a Garden" vision. Split into three main sections: Bay South Garden, Bay East Garden, Bay Central Garden. Best known for its Supertree Grove, futuristic vertical tree-like structures, and nightly light shows MBS Skypark located atop the three hotel towers of Marina Bay Sands, at about 56–57 stories above ground. Offers breathtaking panoramic views of the Singapore skyline, Marina Bay, and Gardens by the Bay below. </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/0a/92/56/sands-skypark.jpg?w=900&h=500&s=1" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color: "blue"}}>After breakfast at the hotel get ready for City tour on Sharing transfer <br /> Evening visits Night Safari on Sharing transfer </p>
              <p>Visits all the essential sights of Singapore with in depth commentary of our licensed guide.  Drive past Little India, Dhoby Ghat and Orchard Road, drive through the CBD and Civic District to stop at the Thian Hock Keng Temple for a picture. Proceed to the Marina Area to take an Instagram worthy photo of the Merlion. You have the option to ride the river cruise.  Singapore Night Safari is home to around 900 animals and is classified as the world's first nocturnal wildlife park. See these spectacular animals in a different light, after the sun goes down. Explore six geographical zones on a 40-minute guided tram ride that takes you from the Himalayan hills to the Southeast Asian jungles. Take a walking trail for a closer view of the animal's nightly rituals, including Sri Lankan leopards studying their spots, and fishing cats hunting their prey in the river. </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://agarwaltravels.in/wp-content/uploads/2016/07/SINGAPORE-IMAGE-FOR-WEBSITE-min-1.jpg" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{color: "blue"}}>After Breakfast at the hotel and get ready for Sentosa Island + 2 way Cable Car on Sharing transfer  </p>
              <p>Enjoys a sunny island in Singapore, home to exciting events, themed attractions, award-winning spas, lush rainforests, golden sandy beaches and resort-style hotels. There's family fun, adventure, beaches and free attractions (animal adventures at Palawan / Fort Siloso Skywalk / Nature Discovery walks) for you to enjoy on your own.  See the Lion City a little differently as you cruise from above all the way to Sentosa Island with a return Singapore Cable Car Sky Pass from one of the city's tallest hills - Mount Faber. The journey on the Singapore Cable Car Sky Network takes you on the Mount Faber and Sentosa Line.  Take a unique underwater journey through the world's oceans with over 100,000 marine animals at S.E.A. Aquarium </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://d2mgzmtdeipcjp.cloudfront.net/files/magazine/2025/02/02/17384898052455.jpg" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color: "blue"}}>After Breakfast at the hotel and get ready for Universal Studio on Sharing transfer </p>
              <p>Explore the world-famous theme parks and entertainment destinations created by Universal Destinations & Experiences, a division of the American entertainment company NBC Universal. These parks bring movies, TV shows, and iconic characters to life with immersive rides, shows, and themed lands based on blockbuster franchises like Jurassic Park, Harry Potter, Despicable Me and more. </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://nowboarding.changiairport.com/content/dam/canowboarding/article-assets/discover-changi/pro-tips-to-shopping-smart-at-changi-airport/1.jpg" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color: "blue"}}>After Breakfast at the hotel and get ready to visit the Singapore Zoo on sharing transfer<br /> Evening go for shopping by your own </p>
              <p>Explore the Singapore Zoo features an open concept that brings you closer to nature in its rainforest environment. The 26-hectare rescued wildlife centre is home to over 2,400 animals representing around 300 species of reptiles, mammals, and birds. Awarded nine times as Best Leisure Attraction Experience by the Singapore Tourism Board, the Singapore Zoo welcomes approximately 1.9 million visitors annually.Evening explore the local market like Chinatown and Paragon Mall for shopping. </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://static01.nyt.com/images/2019/12/02/travel/02singapore-sub/merlin_164028534_c51c096d-a0f9-4b9b-be7d-1f8d11bbf72c-superJumbo.jpg" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{color: "blue"}}>Hotel to Singapore Airport Transfer on Private transfer  </p>
            </div>
          </div>

        </div>

        {/* Send Query button below all itinerary cards */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("5 Days Best of Singapore Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Singapore adventure</p>
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

export default SingaporeLanding;