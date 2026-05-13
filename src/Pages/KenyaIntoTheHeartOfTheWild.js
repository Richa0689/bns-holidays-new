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
    question: "What is the best time to visit Kenya for a safari?",
    answer:
      "The best time is during the dry seasons: January–March and June–October. The Great Wildebeest Migration in Masai Mara typically peaks between July and October, making it the most sought-after period for wildlife viewing.",
  },
  {
    question: "What is included in the 7-day tour package?",
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

/* ── QueryModal – identical fields & logic to FloatingButtons ─── */
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
const KenyaIntoTheHeartOfTheWild = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const itinerary = [
    {
      day: "Day 1",
      title: "JOURNEY TO SAMBURU – LAND OF UNIQUE WILDLIFE",
      img: "https://naicef.com/wp-content/uploads/2024/12/Samburu-National-Reserve-Kenyas-Samburu-National-Reserve-Samburu-National-Reserve-Kenya-Samburu-National-Reserve-accommodation-animals-in-Samburu-National-Reserve-1.jpg",
      desc: "Arrive at Jomo Kenyatta International Airport, where your adventure begins. Meet our representative and embark on a scenic drive to Samburu National Park, home to rare wildlife species. Arrive at your lodge and enjoy a delightful lunch. Spend the afternoon at leisure, taking in the breath-taking landscapes.",
    },
    {
      day: "Day 2",
      title: "WILDLIFE SAFARI IN SAMBURU",
      img: "https://africanspicesafaris.com/wp-content/uploads/2020/07/maasai-mara-kenya-safaris.gif",
      desc: "Set out on morning and afternoon game drives, spotting unique wildlife such as Grevy's zebras, reticulated giraffes, and Somali ostriches. Experience the unspoiled beauty of Samburu's rugged terrain and the lifegiving Ewaso Nyiro River.",
    },
    {
      day: "Day 3",
      title: "RETURN TO NAIROBI – URBAN ESCAPE",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/33/0f/be/83/caption.jpg?w=500&h=400&s=1",
      desc: "Enjoy a relaxed breakfast before your drive back to Nairobi. Arrive in time for lunch (direct payment). Spend the afternoon at leisure, exploring the city or relaxing at your hotel.",
    },
    {
      day: "Day 4",
      title: "INTO THE ICONIC MASAI MARA",
      img: "https://www.masaimara.travel/images/maasai-mara-wildlife.jpg",
      desc: "After breakfast, embark on a scenic journey to Masai Mara National Reserve, Kenya's most renowned wildlife destination. Arrive at your lodge and enjoy a delicious lunch. Set out for an afternoon game drive, tracking the legendary Big Five and experiencing the Mara's vast wilderness.",
    },
    {
      day: "Day 5",
      title: "THRILLING SAFARI IN MASAI MARA",
      img: "https://www.trafordsafaris.com/wp-content/uploads/2025/04/masai-mara-safari.jpeg",
      desc: "Enjoy morning and afternoon game drives, encountering wildebeest, zebras, lions, elephants, and cheetahs. Witness the drama of the African savannah unfold before your eyes.",
    },
    {
      day: "Day 6",
      title: "DISCOVER THE WILDLIFE OF LAKE NAKURU",
      img: "https://www.amboseliparkkenya.com/wp-content/uploads/2022/04/Lake-Nakuru-National-Park-2.jpg",
      desc: "After breakfast, drive to Lake Nakuru National Park, known for its vibrant flamingo-covered shores and diverse wildlife. Arrive at your lodge and relish a hearty lunch. Head out for an afternoon game drive, spotting rhinos, Rothschild giraffes, and elusive leopards in the lush landscape.",
    },
    {
      day: "Day 7",
      title: "FAREWELL TO THE WILD",
      img: "https://s28477.pcdn.co/wp-content/uploads/2018/02/NBO_2-984x554.jpg",
      desc: "Savour a leisurely breakfast before your drive back to Nairobi. Lunch at leisure (own account). Transfer to Jomo Kenyatta International Airport for your departure flight, carrying home unforgettable memories of Kenya's incredible wilderness.",
    },
  ];

  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://res.cloudinary.com/sjordan/image/upload/v1748230189/five-black-white-zebras_sfnjte.jpg"
          alt="Into The Heart Of The Wild"
        />
        <div className="hero-content">
          <h1>Into The Heart Of The Wild</h1>
          <p>Safari Adventure. Untamed Nature. African Wilderness.</p>
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
            <img src="https://www.trafordsafaris.com/wp-content/uploads/2025/04/masai-mara-safari.jpeg" alt="" />
            <p>Maasai Mara Safari</p>
          </div>
          <div className="highlight-card">
            <img src="https://www.ugandarwanda-safaris.com/wp-content/uploads/2025/01/wildebeest-1024x675.jpg" alt="" />
            <p>Wildlife Adventure</p>
          </div>
          <div className="highlight-card">
            <img src="https://unforgettabletravel.com/wp-content/uploads/2021/07/Angama-Mara-3.jpg" alt="" />
            <p>Luxury Safari Camp</p>
          </div>
          <div className="highlight-card">
            <img src="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg" alt="" />
            <p>African Nature Trails</p>
          </div>
        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose Into The Heart Of The Wild?</h2>
        <div className="why-grid">
          <div>🦁 Big Five Safari Experience</div>
          <div>🌄 Stunning African Landscapes</div>
          <div>🚙 Guided Jeep Safari Tours</div>
          <div>📸 Amazing Wildlife Photography</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Discover the Heart of Africa</h2>
        <p>Book your unforgettable safari journey today</p>
        <br />
        <Link to="/kenya">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>7 Days Tour Itinerary</h2>
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

export default KenyaIntoTheHeartOfTheWild;