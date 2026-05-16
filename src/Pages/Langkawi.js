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
    question: "What is the best time to visit Langkawi?",
    answer:
      "The best time to visit Langkawi is between November and April, during the dry season. The weather is sunny with calm seas, making it ideal for beach activities, island hopping, and cable car rides. The monsoon season runs from May to October, when some outdoor attractions may be affected by rain.",
  },
  {
    question: "What is included in the 6-day Langkawi package?",
    answer:
      "The package includes airport transfers on a private basis, a Half Day KL City Tour with KL Tower Observation Deck ticket, a Full Day Genting Tour with 2-way cable car, Batu Caves photo stop, and a Full Day Langkawi City Tour with SkyCab basic entrance (SkyDome, SkyRex, 3D Art, Sky Bridge). Hotel breakfast is included throughout. International flights are not included.",
  },
  {
    question: "Do I need a visa to visit Malaysia?",
    answer:
      "Citizens of many countries, including India, can obtain a visa on arrival or eNTRI/eVisa for Malaysia. We recommend checking the latest requirements with the Malaysian Immigration Department or contacting our team for up-to-date guidance well before your travel date.",
  },
  {
    question: "What is the Sky Bridge at Langkawi SkyCab?",
    answer:
      "The Langkawi Sky Bridge is a world-famous curved pedestrian suspension bridge perched atop Mat Cincang mountain, about 700 metres above sea level. It offers breathtaking panoramic views of Langkawi's lush mountains, mangroves, and surrounding islands. Access is via the SkyCab cable car, which is included in the Day 5 tour.",
  },
  {
    question: "How do we travel between Kuala Lumpur and Langkawi?",
    answer:
      "On Day 4, after check-out from your KL hotel, you'll be transferred to Kuala Lumpur International Airport to board a domestic flight to Langkawi. Upon arrival at Langkawi Airport, a private transfer will take you to your hotel. Domestic flight tickets are to be booked separately unless specified in your package.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! Every tour can be tailored to your travel dates, group size, budget, and interests. Simply click the Send Query button below and our team will craft a personalised Langkawi itinerary just for you.",
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
const LangkawiLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://media1.thrillophilia.com/filestore/f6xqty1ud1oxdknfy2erhcjc9r7w_1578662870_langkawi-island-malaysia-8.jpg"
          alt="Langkawi"
        />
        <div className="hero-content">
          <h1>Langkawi</h1>
          <p>Relax. Explore. Enjoy Beaches.</p>
          <Link to="/malaysia">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="highlights">
        <h2>Top Attractions</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://www.summerbayresort.com.my/wp-content/uploads/2023/04/Pulau-Langkawi_Kosmo-Digital.jpg" alt="" />
            <p>Langkawi Beach</p>
          </div>

          <div className="highlight-card">
            <img src="https://cdn.sanity.io/images/k8yfdmw9/gatlinburg/eb5ef8e23a8320f4f5a6fdede2496c55135f4c52-1024x768.jpg?w=768&h=576&q=70&fit=min&auto=format" alt="" />
            <p>Sky Bridge</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/11/10/9e/singapore-cable-car-sentosa.jpg?w=900&h=-1&s=1" alt="" />
            <p>Cable Car</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/0e/6c/54/screenshot-2019-11-17.jpg?w=1200&h=-1&s=1" alt="" />
            <p>Eagle Square</p>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="why-section">
        <h2>Why Choose Langkawi?</h2>

        <div className="why-grid">
          <div>🏝️ Beautiful Beaches</div>
          <div>🚡 Scenic Cable Car Rides</div>
          <div>🌅 Relaxing Island Vibes</div>
          <div>🛍️ Duty-Free Shopping</div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Plan Your Langkawi Trip</h2>
        <p>Best deals on island vacations</p><br />
        <Link to="/malaysia">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary Section */}
      <div className="itinerary-section">
        <h2>4 Days Langkawi Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/2d/8b/4f.jpg" alt="Day 1" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p><span style={{color: "blue"}}>Warm Airport Pick-Up with a private transfer to your hotel on PVT basis and Leisure </span><br/> Proceed for hotel check in and Spend rest of the day at leisure and evening, explore the local market for shopping. </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/11/6d/12/1e.jpg" alt="Day 2" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p><span style={{color: "blue"}}>After breakfast enjoy Half day City tour KUL + KL tower observation deck ticket (4 Hrs. Only)</span><br /> Enjoy a fascinating introduction to the vibrant capital city of Malaysia with this Half Day Kuala Lumpur City Tour. Discover the perfect blend of modern architecture, cultural heritage, and bustling city life as you explore some of Kuala Lumpur's most iconic landmarks. The tour includes photo stops at famous attractions such as the Petronas Twin Towers, King's Palace, National Mosque, Independence Square, and more, offering a glimpse into the city's rich history and contemporary charm. <br /> The highlight of the tour is the visit to the famous KL Tower Observation Deck, one of the tallest telecommunication towers in the world. From the observation deck, enjoy breathtaking 360-degree panoramic views of Kuala Lumpur's skyline, including spectacular views of the city's skyscrapers </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://cdn.tripspoint.com/uploads/photos/14640/genting-highlands-day-trip-with-cable-cable-car-sic_RNtYR.jpeg" alt="Day 3" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p><span style={{color: "blue"}}>After breakfast enjoy Full Day Genting Tour + Enroute Batu Cave visit (20min Photo Stop only) + two Way Cable Car</span><br /> Enjoy an exciting full-day excursion to the cool and scenic Genting Highlands, one of Malaysia's most popular hill resorts and entertainment destinations. Begin your journey with a short photo stop at the iconic Batu Caves, famous for its towering golden Lord Murugan statue and colorful staircase leading to the limestone caves. Guests will have approximately 20 minutes to explore and take photographs. <br />Continue towards Genting Highlands and experience a breathtaking ride on the two-way cable car, offering panoramic views of lush rainforest-covered hills. </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.tripsavvy.com/thmb/IA35qSbG5vBZL_Vue-xIQ2oDKNs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/kuala-lumpur-international-airport-klia-44d30ccad5a841e691984ba702fe0e59.jpg" alt="Day 4" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color: "blue"}}>After breakfast check out from hotel and transfer to Kuala Lumpur Airport to board flight for Langkawi. Arrival at Langkawi Airport and transfer to hotel </p>
              <p>Proceed for hotel check in and Spend rest of the day at leisure and evening, explore the local market for shopping. </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/8e/b8/c6.jpg" alt="Day 5" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color: "blue"}}>After breakfast enjoy Full Day City Tour LGK + Basic Entrance Cable car, Sky Dom, Sky Rex, 3D Art, Sky Bridge by Glade </p>
              <p>Experience the best of Langkawi with a full-day city tour combined with the island's most iconic attractions at the famous Langkawi SkyCab. Begin your journey with a scenic drive covering popular landmarks, local attractions, beautiful beaches, and cultural highlights of Langkawi. <br />Enjoy exciting attractions included in the basic package such as:<br /> SkyDome – a 360° immersive dome theatre experience with stunning visual effects and space-themed shows. <br /> SkyRex – an adventurous motion simulation ride featuring thrilling dinosaur and jungle adventures. <br /> 3D Art Langkawi – one of Malaysia's largest 3D art museums, perfect for interactive and fun photography moments. <br /> Sky Bridge – the world-famous curved suspension bridge offering breathtaking views of Langkawi's mountains and surrounding islands. </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://mahbseadrmprodsa.blob.core.windows.net/passenger-prod-cms-new/2024-05/dropdown-langkawi.jpg" alt="Day 6" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Hotel to Langkawi Airport Transfer on PVT basis </p>
            </div>
          </div>

        </div>

        {/* Send Query button below all day cards */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("6 Days Langkawi Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Langkawi trip</p>
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

export default LangkawiLanding;