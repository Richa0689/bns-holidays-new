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
    question: "What is the best time to visit Vietnam for this tour?",
    answer:
      "The best time to visit Vietnam is between October and April, when the weather is dry and pleasant across Hanoi, Halong Bay, Da Nang, Hoi An, and Ho Chi Minh City. December to February is cooler in the north, while March–April offers warm, sunny days ideal for Halong Bay cruising and coastal sightseeing.",
  },
  {
    question: "What is included in the 7-day Vietnam tour package?",
    answer:
      "The package includes hotel accommodation for 6 nights, daily breakfast, an overnight Halong Bay cruise with meals, domestic flights between Hanoi/Da Nang and Ho Chi Minh City, private transfers, and guided city tours in Hanoi, Hoi An, Da Nang, and Ho Chi Minh City. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Vietnam?",
    answer:
      "Indian passport holders require a Vietnam e-visa, which can typically be obtained online in 3–5 business days. We recommend applying at least 2–3 weeks before your travel date. Our team can assist you with the e-visa application process.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Old Quarter and Hoan Kiem Lake in Hanoi, the limestone karsts of Halong Bay, the Marble Mountains and Golden Bridge in Da Nang, the lantern-lit ancient town of Hoi An, and the bustling markets and war history sites of Ho Chi Minh City.",
  },
  {
    question: "What currency is used across Vietnam?",
    answer:
      "The Vietnamese Dong (VND) is the local currency. Cards are accepted in hotels and larger restaurants, but cash is preferred for street food, markets, and small vendors. It's a good idea to carry small denominations and exchange currency at official counters or banks.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add extra nights in Hoi An, a Sapa extension, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const VietnamLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="vietnam-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5R_Z40xqo7YENLpBTWxh1NUYIO5HPY62faAywwuRelQ&s=10"
          alt="Vietnam Tour"
        />

        <div className="hero-content">
          <h1>VIETNAM</h1>

          <p>
            Hanoi • Halong Bay • Da Nang • Hoi An • Ho Chi Minh City
          </p>

          <Link to="/vietnam-tour">
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU59bBiCi84CXUipJGN4-urXUX0JeyAPeUUYNQ7bhs4Q&s=10"
              alt="Hanoi Old Quarter"
            />
            <p>Hanoi Old Quarter</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ27mvT4h-KAiGY7ah7Llad93VWjNmOzAi1glAuGwMOfA&s=10"
              alt="Halong Bay"
            />
            <p>Halong Bay Cruise</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE1TAgy7bur3AANbi0uK23RyiyGWaJfxwgPJY-sBacRA&s=10"
              alt="Hoi An"
            />
            <p>Hoi An Ancient Town</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0lquYe5alOEJI06xgUa7eBWAhyymydjdpFWBmwiIedw&s=10"
              alt="Ho Chi Minh City"
            />
            <p>Ho Chi Minh City</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>⛵ Cruise Through Halong Bay</div>
          <div>🏮 Lantern-Lit Streets of Hoi An</div>
          <div>🌉 Golden Bridge at Ba Na Hills</div>
          <div>🍜 Authentic Vietnamese Street Food</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Discover Vietnam North to South in 7 Days</h2>

        <p>
          From misty limestone karsts to golden lantern-lit streets — the ultimate Vietnam escape
        </p>

        <br />

        <Link to="/vietnam-tour">
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA_1069pnlr_c6YU_cYroCHdxnxGlHrmhykX5elNd0BBcuKdng-fz5XV1Q&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>Welcome to Ho Chi Minh City & Hop On Hop Off Bus</p>
              <p>
                When you arrive at Tan Son Nhat International airport, you'll be smilingly met and transferred to your downtown hotel to leave luggage. 
                In the afternoon, you’ll go on the Hop On Hop Off Bus (no stop) through Notre Dame Cathedral, Independance Palace, Saigon Zoo – History Museum, War Museum, Pham Ngu Lao St, Ham Nghi St _near Ben Thanh market, Ham Nghi St _near Bitexco tower, Bach Dang Pier, Majestic Hotel, 92- 96 Nguyen Hue St _ near Opera house and City hall, Saigon Central Post Office. 
                After that, you’ll have a private car to visit Independence Palace and War Museum. Then you'll be back to hotel at around 17:00. Overnight in Ho Chi Minh City
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJuA7dNLDBxy7giehi4oqY208rihwq_TIRyIqd4y4Uw&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Ho Chi Minh City Flight Danang  Drive Hoi An  Afternoon Visit Hoi An </p>
              <p>
                 Today you’ll fly from Ho Chi Minh City to Danang. 
                 Upon arrival, you’ll meet our guide and drive to your hotel in Hoi An to check in. 
                 In the late afternoon, you will visit Hoi An ancient town.
                 You'll start a walking tour with a lion's share of places of interest: the 400-year old Japanese Covered Bridge.
                  Following the narrow lanes, you'll meander through tiny streets studded by houses influenced by Chinese, Japanese, French and European architectures. 
                  Free time for shopping before heading back to your hotel. Overnight in Hoi An 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR1SBlYIBMY96bAl91L6JXVhBHEiB2JpHxb2VBVPY1zApl6lB5se67OJGJ&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Visit Golden Bridge and Ba Na Hills </p>
              <p>
               08:00 AM: you will be picked up at your hotel lobby for a short drive to Ba na Hills.
                Upon arrival, embark on the first cable car ride to reach Bana Hills. The cable car system at Bana Hills is one of the most modern ones in Southeast Asia and is one of the World's longest and highest cable car rides. 
                Visit the Dream Stream Cable car station and see the panoramic views of Danang City from above.
                 After the first cable car ride, you will visit the Golden Bridge that has recently gone viral, a French Wine Cellar, Le Jardin D’amour (consists of 9 gardens) and Linh Ung pagoda.
                  You will then continue with the 2nd cable car to visit the French Village Campanile, Linh Chua Linh Tu Temple and Tea Shop. 
                  You might consider challenge the most popular adventure ride - Alpine Coaster (included in your entrance ticket).
                   Your next stop will be at Fantasy Park, an amusement park inspired by French chateaus and palaces. 
                   15:00: Return to the cable car station to leave Bana Hills and another transfer will take you back to your hotel. <br />
                   Overnight in Hoi An 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsiygfD_5nqD_KgOy92iQEhc2VxY7ViYBU3LPH-c1Pwg&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}> Flight Danang - Hanoi – Cultural City Tour </p>
              <p>
                Today you’ll fly from Danang to Hanoi .
                 Upon arrival at Noi Bai airport, our guide will transfer you straight to Hanoi city center. 
                 In the afternoon, you'll start the city tour including the Opera House in the French Quarter. 
                 Next stop will be the largest and oldest church in Hanoi. St Joseph's Cathedral was built in 1886 with an architectural style often compared to the Notre Dame de Paris. 
                 The Gothic Revival church is not only a religious site, but is also a popular photo shoot backdrop for local teenagers. Visit the Temple of Literature - Vietnam’s first university dating back to 1070; Continue to the Hoan Kiem Lake, with its magnificent The Huc Bridge and Ngoc Son temple
                 - experience the spiritual harmony of different religions coexisting in the same place. Then you’ll drive back to your hotel in Hanoi. <br />
                 Overnight in Hanoi  
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/10/62/e5/de.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Hanoi – Bai Dinh – Trang An Complex </p>
              <p>
                After breakfast, a two hour road trip through picturesque countryside and agricultural land will take you to Bai Dinh Pagoda. 
                On arrival, visit the Buddha Prayer place in Bai Dinh Pagoda, the biggest pagoda in Vietnam with 500 La Han statues, biggest bronze Buddha statue in Vietnam with 10 meters height, 100 tons weight.
                 Afternoon transfer to the pier for a 2-hour sampan ride to explore the picturesque waterways in Trang An ecological site.
                  The area features more than 30 valleys and 50 crosswater caves, and is home to 600 species of plants and over 200 types of animals.
                   You will venture through a network of 11 caves in the quiet, fresh air, with only the sound of birds and the oars stirring the clear water and surrounded by magnificent forested mountains. 
                   Return to Hanoi in the late afternoon.<br />
                    Overnight in Hanoi. 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr78tfm6h1huytmOT-p575jdpIgSmJB87MlBbskxBttQ&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Hanoi – Halong Bayy</p>
              <p>
                (Shared Cruise with Other Travelers 08:00: Pick up from Hotel in Hanoi Old Quarter to Halong <br />
              11:30 – 12:00 Arrive at Tuan Chau harbor, check in at the waiting room. <br /> 
              12:00 – 12:30 Get on Tender Boat to Verdure Lotus Cruise and enjoy Welcome drink, meet the captain, crew to get a brief introduction about cruise and safety guidelines. Complete check-in procedure. <br />
               13:00 – 13:15 Enjoy Vietnamese seafood and vegetarian lunch, while cruising in the magnificent Halong – Lan Ha Bay, admiring the fascinating rock formations in the bay. <br />
                15:00–15:30 You can choose to relax on the sundesk or explore Ba Trai Dao – Tra Bau area and the natural lagoon of Lan Ha Bay and experience kayaking here <br />. 
                17:30 –18:30 Come back to our Cruise and participate in our Happy Our “Buy one get one free” & Cooking Class. <br /> 
                Take photos and relax.  <br />
                19:00 Dinner is served at the restaurant. After dinner, you can join the squid fishing program, relax on the sundesk, enjoy a glass of wine at the bar…Overnight on boat. 
                Overnight on Halong Bay Cruise 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6hewY3rfhSVKzsaTrGHZue8ZUPpfN_ai53NbpnYnrtlk95M4Ks-uxIo&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Halong Bay – Hanoi - Departure </p>
              <p>
                6:00-6:30 Taichi on the sundeck, sightseeing sunrise 6:15 -7:00 Have breakfast.<br />
                 Morning view of bay’s landscape with a cup of tea or coffee.<br />
                  7:00 Visitors Dark and Light Cave. Here you can freely kayak or bamboo Boat to explore the landscape, or immerse yourself.<br />
                   in the cool, clear blue water of this place. 9:30 Back to your cabin, take relax and check carefully all the luggage before leaving your cabin. 10:00 Check-out from the private cabin and enjoy a fantastic cruise on the bay for room service.<br />
                    Complete check-out procedure. Enjoy lunch at the restaurant while the cruise is returning to the harbor. 11:00 You take the Tender boat back to Tuan Chau port.<br /> 
                    Return to Hanoi 15:00 – 16:00 Car service will take you back to Hanoi. Then your guide and a private car are arriving to drive you back to Noi Bai airport for your departure flight home. End of services.<br /> 
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("7 Days Vietnam Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Vietnam journey</p>
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

export default VietnamLanding;