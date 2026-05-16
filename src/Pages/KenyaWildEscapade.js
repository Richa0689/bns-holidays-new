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
    question: "What is the best time to visit Kenya for the Wild Escapade?",
    answer:
      "The best time is during the dry seasons: January–March and June–October. The Great Wildebeest Migration in Masai Mara typically peaks between July and October, making it the most sought-after period for wildlife viewing. Ol Pejeta is excellent year-round for rhino and chimpanzee sightings.",
  },
  {
    question: "What is included in the 6-day tour package?",
    answer:
      "The package includes accommodation at lodges and camps, all game drives, an airport meet-and-greet, and meals as specified in the itinerary (breakfast and lunch). International flights and personal expenses are not included.",
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
const KenyaWildEscapade = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const itinerary = [
    {
      day: "Day 1",
      title: "INTO OL PEJETA CONSERVANCY",
      img: "https://static.cloudsafaris.com/public/ca9b07b2-26fb-4946-8d66-2d3f74801ff5_asilia-ol-pejeta-bush-camp-game-drive-rhino-and-zebra.jpg.webp?action=get&host=true",
      desc: "Arrive at Jomo Kenyatta International Airport, where your safari begins. Meet our welcoming representative outside the arrivals. Embark on a scenic drive to Ol Pejeta Conservancy, a haven for endangered wildlife. Arrive just in time for a delicious late lunch. Set out for an exhilarating afternoon game drive, spotting rhinos, chimpanzees, and diverse wildlife.",
    },
    {
      day: "Day 2",
      title: "DISCOVERING OL PEJETA'S UNTAMED BEAUTY",
      img: "https://media.istockphoto.com/id/2150606165/photo/lions-lounging-in-grass-ol-pejeta-conservancy-kenya.jpg?s=612x612&w=0&k=20&c=TmOv8o8Fbf8PIl4eqA7GZWHtMPXwcWDz73qqQYKkOKI=",
      desc: "Experience the conservancy's rich biodiversity with thrilling morning and afternoon game drives.",
    },
    {
      day: "Day 3",
      title: "TRANQUILITY AT LAKE ELEMENTAITA",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/3a/f0/07/lesser-flamingoes-on.jpg?w=900&h=500&s=1",
      desc: "Enjoy a relaxed breakfast before setting off on a picturesque drive to Lake Elementaita. Arrive for a delightful lunch by the lake. Spend the afternoon at leisure, soaking in the serene landscapes or spotting vibrant birdlife.",
    },
    {
      day: "Day 4",
      title: "INTO THE WILD OF MASAI MARA",
      img: "https://www.explorerwandatours.com/wp-content/uploads/2023/10/masai-mara-1024x646-1-750x450.jpg",
      desc: "Savour a leisurely breakfast before journeying to the legendary Masai Mara National Reserve. Arrive for a hearty lunch at the lodge. Head out for a spectacular afternoon game drive, seeking out the Big Five and witnessing incredible wildlife moments.",
    },
    {
      day: "Day 5",
      title: "THE ULTIMATE MASAI MARA SAFARI",
      img: "https://www.discoverafrica.com/wp-content/uploads/2021/11/maasai_mara_national_reserve_2-7.jpg",
      desc: "An entire day of thrilling morning and afternoon game drives, exploring the breath-taking savannahs of Masai Mara.",
    },
    {
      day: "Day 6",
      title: "FAREWELL TO THE WILD",
      img: "https://s28477.pcdn.co/wp-content/uploads/2018/02/NBO_2-984x554.jpg",
      desc: "Enjoy a relaxed breakfast, cherishing your final moments in the African wilderness. Drive back to Nairobi, reflecting on your unforgettable adventure. Lunch at your own pace before a smooth transfer to Jomo Kenyatta International Airport for departure.",
    },
  ];

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://tapestryofafrica.com/wp-content/uploads/2025/05/Giraffes_2.jpg"
          alt="Kenya Wild Escapade"
        />
        <div className="hero-content">
          <h1>Wild Escapade</h1>
          <p>Adventure. Wildlife. Nature Escape.</p>
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
              src="https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=350,height=235/tour_img/0124d969d5dd7adb804e8bcd3ebbcdc23dae990cfaa68204be3b6a8cafaa3900.jpg"
              alt=""
            />
            <p>Ol Pejeta Conservancy</p>
          </div>
          <div className="highlight-card">
            <img
              src="https://www.nairobinationalparkkenya.com/wp-content/uploads/2023/10/Safari-Masai-Mara-1-750x450.jpg"
              alt=""
            />
            <p>Safari Wildlife Tour</p>
          </div>
          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSQ09YAy6twt9aPc0tJ2bFyR5ZbaV_b0nWnw&s"
              alt=""
            />
            <p>Luxury Safari Camp</p>
          </div>
          <div className="highlight-card">
            <img
              src="https://www.atgcreativelibrary.com/transform/06140c25-0395-4064-a006-5b8725b32f72/a-afr-kenya-elephant-and-Mt-Kilimanjaro-2165088270-g-rf"
              alt=""
            />
            <p>African Nature Experience</p>
          </div>
        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose Wild Escapade?</h2>
        <div className="why-grid">
          <div>🦁 Wildlife Safari Experience</div>
          <div>🌄 Stunning Natural Landscapes</div>
          <div>🚙 Guided Jeep Safari</div>
          <div>📸 Perfect Photography Spots</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore Kenya's Wild Beauty</h2>
        <p>Book your safari adventure today</p>
        <br />
        <Link to="/kenya">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>6 Days Tour Itinerary</h2>
        <div className="itinerary-list">
          {itinerary.map((item, idx) => (
            <div className="day-card" key={idx}>
              <img src={item.img} alt="" />
              <div className="day-content">
                <h3>{item.day}</h3>
                <p style={{ color: "blue" }}>{item.title}</p>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Single Send Query button below all cards */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("6 Days Kenya Wild Escapade Tour")}
          >
            Send Query
          </button>
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

export default KenyaWildEscapade;