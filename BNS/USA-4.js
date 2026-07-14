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
    question: "What is the best time to visit the West Coast for this tour?",
    answer:
      "Spring (March–May) and Fall (September–November) offer pleasant weather across Las Vegas, Los Angeles, and San Francisco, with mild temperatures and clearer skies for the Grand Canyon excursion. Summer can be very hot in Las Vegas and Fresno, so early mornings are best for outdoor sightseeing.",
  },
  {
    question: "What is included in the Golden West Coast 7-day package?",
    answer:
      "The package includes hotel accommodation for 6 nights, daily breakfast, luxury coach transfers between cities, city tours in Las Vegas, Los Angeles, Fresno and San Francisco, sightseeing at the 17-Mile Drive at Monterey Bay, and a guided San Francisco city tour with cable car and bay cruise. International flights, the optional Grand Canyon excursion, and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to the USA?",
    answer:
      "Indian passport holders require a US B1/B2 tourist visa. We recommend applying at least 8–10 weeks before your travel date, as interview slots can take time. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "Is the Grand Canyon excursion included in the price?",
    answer:
      "The Grand Canyon West Rim excursion on Day 2 is offered as an optional add-on, along with enhancements like the Skywalk, helicopter ride, or boat tour. Let our team know in advance if you'd like this included in your final quote.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the glittering Las Vegas Strip and Fremont Street Experience, the Hollywood Walk of Fame and Rodeo Drive in Los Angeles, Universal Studios Hollywood, the breathtaking 17-Mile Drive at Monterey Bay, and the Golden Gate Bridge, Alcatraz Island, and cable cars of San Francisco.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add the Grand Canyon package, extra nights in Los Angeles, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const VegasGoldenWestLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://b2bzend.s3.ap-south-1.amazonaws.com/img/162492/package/images/golden-west-coast_1762861079"
          alt="Golden West Coast Tour"
        />

        <div className="hero-content">
          <h1>GOLDEN WEST COAST</h1>

          <p>
            Las Vegas • Los Angeles • Fresno • San Francisco
          </p>

          <Link to="/vegas-grand-canyon">
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
              src="https://images.unsplash.com/photo-1583207884889-d79abf0d0aa3?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFzJTIwdmVnYXN8ZW58MHx8MHx8fDA%3D"
              alt="Las Vegas Strip"
            />
            <p>Las Vegas Strip</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI1JOJTbQuUGufyygFFTubxJ4CjNj_hwzVYAjhaZTuNiNvlA5JeF_TKqeE&s=10"
              alt="Grand Canyon Skywalk"
            />
            <p>Grand Canyon (Optional)</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLjcKSFDZ8rfkf2a2zaid0YmNxdKYLwuQDe4DxjRet3CSJzB7nTvfIRvI&s=10"
              alt="Hollywood Los Angeles"
            />
            <p>Hollywood, LA</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNDcUZBZQwfHZUJcqGXIWwzTBEvV6Ik-lMllgv6x5G0w&s"
              alt="Golden Gate Bridge"
            />
            <p>Golden Gate Bridge</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🎰 The Glitz of Las Vegas</div>
          <div>🏜️ Optional Grand Canyon Adventure</div>
          <div>🎬 Hollywood & Universal Studios</div>
          <div>🌉 Golden Gate & Pacific Coastline</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Golden West Coast in 7 Days</h2>

        <p>
          From the desert lights of Vegas to the coastal cliffs of San Francisco — the ultimate West Coast panorama
        </p>

        <br />

        <Link to="/vegas-grand-canyon">
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
              src="https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFzJTIwdmVnYXN8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>Arrival in Las Vegas</p>
              <p>
             Upon arrival in Las Vegas, proceed to the baggage claim area and call the driver using the contact number provided on your voucher. The driver will direct you to the designated meeting point for your complimentary airport pick-up.<br />
             Check in to your hotel and settle in.

             Evening Experience:
             Meet the Tour Escort at 6.00 PM


            </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://cdn-imgix.headout.com/media/images/5e2ac6567668ad7b92bace1420ae7ecc-1324-las-vegas-45-min-grand-canyon-national-park-helicopter-tour-with-optional-hummer-tour-008.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Las Vegas (Optional Grand Canyon)</p>
              <p>
             Morning<br />
             Enjoy a packed breakfast before setting out for an optional excursion to the Grand Canyon West Rim. Enhance your visit with exciting add-ons such as the Skywalk, helicopter ride, or boat tour, offering unique perspectives of one of the world’s most awe-inspiring natural wonders<br />.
             Evening<br />
             Savor a flavorful dinner at an Indian restaurant<br />.
             Embark on a Las Vegas Strip Night Tour, where you’ll marvel at the glittering lights, themed resorts, and iconic attractions along Las Vegas Boulevard.
             Continue to the Fremont Street Experience, a dazzling light and sound show beneath a massive LED canopy, complete with thrilling views of zipliners soaring overhead.<br />
             Overnight stay at Paris Las Vegas.

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTipnkTlKia2eqVbQEX-cim5icAc2mTEd_Fl4XzNRBK8tUhcYpSjEJnhdM4&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Las Vegas → Los Angeles</p>
              <p>
               
             Morning <br />
             Enjoy breakfast in route to Los Angeles as you journey through the desert landscapes of Nevada and California.
             Stop at Ontario Mills Mall, Southern California’s largest outlet shopping destination, featuring designer labels and popular brand-name stores.<br />
             Afternoon<br />
             Embark on a guided city tour of Los Angeles. Highlights include the Hollywood Walk of Fame, the Dolby Theatre, the luxury boutiques of Rodeo Drive, and photo opportunities with the iconic Hollywood Sign.<br />
             Evening<br />
             Conclude the day with a delicious dinner at an Indian restaurant before checking into your hotel.<br />
             Overnight stay at Hilton Glendale.

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmKnTyIFeuYQQUsW732cwncdapVtPhmoiSExRLJ7aIYMKa0OEbOCKXYcUx&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}> Los Angeles → Fresno</p>
              <p>
             Morning<br />
             Begin the day with a hearty breakfast at the hotel.
             Spend the morning at Universal Studios Hollywood, where thrilling theme park rides meet real film production sets. Enjoy behind-the-scenes experiences, live shows, and immersive attractions that bring movie magic to life.<br />
             Afternoon<br />
             Depart Los Angeles and enjoy a scenic drive to Fresno, passing through California’s picturesque landscapes.<br />
             Evening<br />
             Relish a flavorful Indian dinner before checking into your hotel.<br />
             Overnight stay in Fresno

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/68/a4/5c.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Fresno → Monterey Bay → 17-Mile Drive → San Francisco</p>
              <p>
                Morning<br />
             Enjoy breakfast before departing Fresno and travel toward Monterey Bay, with a beach stop at Cannery Row for coastal views and a short break<br />.
             Afternoon<br />
             Experience the famous 17-Mile Drive, a scenic coastal loop of approximately 2 hours, including time for stops, photos, and enjoying highlights such as Pebble Beach, Spanish Bay, Bird Rock, Ghost Tree, and the Lone Cypress, before continuing toward San Francisco.<br />
             Evening<br />
             Enjoy dinner at an Indian restaurant before checking in at your hotel in San Francisco.

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media.istockphoto.com/id/860468454/photo/departure-over-san-francisco-bay-area.jpg?s=612x612&w=0&k=20&c=l4CCn9-MVyjG_FbLmrGaly6MQxB7Q1wjE7Jm8sEs53o="
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>San Francisco</p>
              <p>
                Morning & Afternoon<br/>
                Begin with a delicious breakfast before setting out on a full day of sightseeing in San
                Francisco.<br/>
                Bay Cruise: Sail along the waterfront with panoramic views of the Golden Gate Bridge,
                Alcatraz Island, and the glittering city skyline.<br/>
                The Flyer San Francisco: Experience a thrilling 3D flying theater ride that "lifts" you over
                the city's most iconic landmarks.<br/>
                Guided City Tour: Visit Twin Peaks for breathtaking views, explore historic neighborhoods,
                and see many of the city's most beloved landmarks.<br/>
                Cable Car Ride: Step aboard the world's last manually operated cable car system for an
                unforgettable ride through the streets of San Francisco.<br/>
                Evening<br/>
                Conclude the day with a flavorful Indian dinner before returning to your hotel.
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.pexels.com/photos/8821401/pexels-photo-8821401.jpeg?cs=srgb&dl=pexels-chaitaastic-8821401.jpg&fm=jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Departure from San Francisco</p>
              <p>
                Morning<br/>
                Enjoy your final breakfast at the hotel before checking out (packed breakfast is not
                available for passengers taking early flights).
                Transfer to San Francisco International Airport for your return flight.
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("Golden West Coast 2026 | 6 Nights / 7 Days")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your West Coast journey</p>
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

export default VegasGoldenWestLanding;