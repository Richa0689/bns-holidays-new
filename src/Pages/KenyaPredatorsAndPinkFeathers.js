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
    question: "What is the best time to visit Kenya for flamingos and wildlife?",
    answer:
      "The best time is during the dry seasons: January–March and June–October. Flamingos are present year-round at Lake Nakuru, but wildlife viewing is at its finest during the dry months when animals gather around water sources.",
  },
  {
    question: "What is included in the 5-day tour package?",
    answer:
      "The package includes accommodation at lodges, all game drives, an airport meet-and-greet, and meals as specified in the itinerary (breakfast and lunch). International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to visit Kenya?",
    answer:
      "Most nationalities require a visa to enter Kenya. Kenya has introduced an e-Visa system at evisa.go.ke. We recommend applying at least 2 weeks before your departure. Our team can guide you through the process.",
  },
  {
    question: "What vaccinations are required?",
    answer:
      "A Yellow Fever vaccination certificate is mandatory for travellers coming from yellow fever–endemic countries. We also recommend hepatitis A, typhoid, and malaria prophylaxis. Consult your doctor at least 4–6 weeks before travel.",
  },
  {
    question: "Is Kenya safe for tourists?",
    answer:
      "Kenya's national parks and safari lodges are considered safe for tourists. Our guides are experienced, licensed professionals. We monitor travel advisories continuously and will always brief you on local safety guidelines.",
  },
  {
    question: "Can I customise the itinerary?",
    answer:
      "Absolutely! Every tour can be tailored to your interests, budget, and travel dates. Send us a query from any day card above or contact our team directly, and we'll craft a personalised itinerary for you.",
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
            <p className="eq-day-label">For: <strong>{day}</strong></p>

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
const KenyaPredatorsAndPinkFeathers = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const itinerary = [
    {
      day: "Day 1",
      title: "WELCOME TO NAIROBI – THE VIBRANT HEART OF KENYA",
      img: "https://escapewithannualleave.com/wp-content/uploads/2025/09/Go-straight-from-the-Welcome-To-Nairobi-sign.webp",
      desc: "Arrive at Jomo Kenyatta International Airport, where your adventure begins. Meet our representative outside the arrivals and proceed to hotel. Spend the afternoon at leisure—explore the city or relax at your hotel.",
    },
    {
      day: "Day 2",
      title: "JOURNEY INTO THE ICONIC MASAI MARA",
      img: "https://images.goway.com/production/hero_image/Leopard%20in%20the%20Maasai%20Mara%20_iStock-1225495810-compressed.jpg?VersionId=ItvcNxzO9SRc94cGlTqmkNrnr5Dsx1.d",
      desc: "After breakfast, embark on a scenic drive to Masai Mara National Reserve, Kenya's most celebrated wildlife haven. Arrive at your lodge in time for lunch. Head out for an afternoon game drive, tracking the legendary Big Five and witnessing Africa's most breath-taking landscapes.",
    },
    {
      day: "Day 3",
      title: "A FULL DAY OF SAFARI IN MASAI MARA",
      img: "https://www.greatadventuresafaris.com/wp-content/uploads/How-many-days-do-I-need-on-safari-in-Masai-Mara-1200x675.jpg",
      desc: "Enjoy an action-packed day with morning and afternoon game drives, discovering the rich biodiversity of the Mara. Spot herds of wildebeest, zebras, and possibly a thrilling predator chase in the wild.",
    },
    {
      day: "Day 4",
      title: "DISCOVERING THE JEWEL OF LAKE NAKURU",
      img: "https://i0.wp.com/thelandofwanderlust.com/wp-content/uploads/2025/09/2.-Flamingos-and-Rhinos-at-Lake-Nakuru-National-Park-Kenya.jpg?resize=1024%2C573&ssl=1",
      desc: "After breakfast, depart for the stunning Lake Nakuru National Park, a sanctuary for rhinos and flamingos. Arrive in time for lunch at your lodge. Set out on an afternoon game drive, exploring the park's diverse wildlife, from Rothschild giraffes to elusive leopards.",
    },
    {
      day: "Day 5",
      title: "FAREWELL TO THE WILD",
      img: "https://s28477.pcdn.co/wp-content/uploads/2018/02/NBO_2-984x554.jpg",
      desc: "Savour a leisurely breakfast before your drive back to Nairobi. Lunch at leisure (own account). Transfer to Jomo Kenyatta International Airport for your departure flight, carrying home unforgettable memories of Kenya's incredible wilderness.",
    },
  ];

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.exclusivetravel.co/destinations/africa/kenya/kenya_gallery/kenya-originalimages/flamingo-lake-nakuru-kenya.webp"
          alt="Predators & Pink Feathers"
        />
        <div className="hero-content">
          <h1>Predators & Pink Feathers</h1>
          <p>Flamingos. Wildlife Safari. Luxury African Escape.</p>
          <Link to="/kenya">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Major Destinations</h2>
        <div className="highlight-grid">
          <div className="highlight-card">
            <img
              src="https://blog.globalbasecamps.com/hs-fs/hubfs/lake-elmenteita-35168.jpg?width=750&name=lake-elmenteita-35168.jpg"
              alt=""
            />
            <p>Lake Nakuru Flamingos</p>
          </div>
          <div className="highlight-card">
            <img
              src="https://charlionssafaris.com/wp-content/uploads/2024/07/Masai_Mara_Zebras-990x490-1.jpg"
              alt=""
            />
            <p>Wildlife Safari Adventure</p>
          </div>
          <div className="highlight-card">
            <img
              src="https://unforgettabletravel.com/wp-content/uploads/2021/07/Sasaab-Lodge.jpg"
              alt=""
            />
            <p>Luxury Safari Lodge</p>
          </div>
          <div className="highlight-card">
            <img
              src="https://res.cloudinary.com/jerrick/image/upload/v1742816644/67e145844f9fe0001dc00922.jpg"
              alt=""
            />
            <p>Scenic African Landscapes</p>
          </div>
        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose Predators & Pink Feathers?</h2>
        <div className="why-grid">
          <div>🦩 Thousands of Pink Flamingos</div>
          <div>🦁 Exciting Predator Safari</div>
          <div>🚙 Guided Wildlife Exploration</div>
          <div>📸 Incredible Nature Photography</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Kenya's Wild Beauty</h2>
        <p>Book your safari adventure today</p>
        <br />
        <Link to="/kenya">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>5 Days Tour Itinerary</h2>
        <div className="itinerary-list">
          {itinerary.map((item, idx) => (
            <div className="day-card" key={idx}>
              <img src={item.img} alt="" />
              <div className="day-content">
                <h3>{item.day}</h3>
                <p style={{ color: "blue" }}>{item.title}</p>
                <p>{item.desc}</p>
                <button
                  className="send-query-btn"
                  onClick={() => setActiveModal(`${item.day} – ${item.title}`)}
                >
                  Send Query
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your safari adventure</p>
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
        .eq-day-label {
          font-size: 0.83rem;
          color: #777;
          margin: -10px 0 14px;
        }
        .eq-day-label strong { color: #c8860a; }

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

export default KenyaPredatorsAndPinkFeathers;