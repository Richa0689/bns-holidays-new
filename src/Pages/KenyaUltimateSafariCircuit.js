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
    question: "What is the best time to visit Kenya for the Ultimate Safari Circuit?",
    answer:
      "The best time is during the dry seasons: January–March and June–October. The Great Wildebeest Migration in Masai Mara typically peaks between July and October, making it the most sought-after period for wildlife viewing. Amboseli and Ol Pejeta are excellent year-round.",
  },
  {
    question: "What is included in the 8-day tour package?",
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
const KenyaUltimateSafariCircuit = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const itinerary = [
    {
      day: "Day 1",
      title: "INTO THE HEART OF AMBOSELI",
      img: "https://artofsafari.travel/wp-content/uploads/2016/08/Kenya_SouthEastAmboseli_ElewanaTortilisGameDrive1-1.jpg",
      desc: "Touch down at Jomo Kenyatta International Airport, where adventure awaits! Meet our warm and welcoming representative outside the arrivals. Embark on a scenic drive to Amboseli National Park, renowned for its stunning views of Mount Kilimanjaro. Arrive just in time for a delicious lunch at the lodge. Head out for an exhilarating afternoon game drive, spotting iconic African wildlife against the backdrop of Africa's highest peak.",
    },
    {
      day: "Day 2",
      title: "THE MAGIC OF AMBOSELI",
      img: "https://www.awardsafaris.com/wp-content/uploads/2025/09/ddvgsdf.webp",
      desc: "Experience the wild like never before with thrilling morning and afternoon game drives—watch herds of elephants, big cats, and a dazzling variety of birdlife roam the open plains.",
    },
    {
      day: "Day 3",
      title: "JOURNEY TO OL PEJETA CONSERVANCY",
      img: "https://muringasafaris.com/wp-content/uploads/2022/12/ol-pejeta-conservancy4.jpg",
      desc: "Enjoy an early breakfast at the lodge before setting off on a picturesque drive. Stop in Nairobi for a delightful lunch before continuing to the exclusive Ol Pejeta Conservancy, home to rare wildlife. Arrive and dive straight into an exciting afternoon game drive, where you'll encounter the endangered rhinos and chimpanzees of this remarkable sanctuary.",
    },
    {
      day: "Day 4",
      title: "EXPLORING OL PEJETA'S UNTAMED BEAUTY",
      img: "https://easternvacations-kenya.com/wp-content/uploads/2023/09/Ol-Pejeta-conservancy.jpg",
      desc: "Immerse yourself in unforgettable morning and afternoon game drives— witness Kenya's pioneering conservation efforts up close and marvel at the diverse wildlife that calls Ol Pejeta home.",
    },
    {
      day: "Day 5",
      title: "TRANQUILITY AT LAKE ELEMENTAITA",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/3a/f0/07/lesser-flamingoes-on.jpg?w=900&h=500&s=1",
      desc: "Start your day with a leisurely breakfast before embarking on a scenic drive to the serene Lake Elementaita. Arrive in time for a sumptuous lunch by the lake. Spend your afternoon at leisure, soaking in the peaceful surroundings or exploring the vibrant birdlife that thrives in this hidden gem.",
    },
    {
      day: "Day 6",
      title: "INTO THE WILDERNESS OF MASAI MARA",
      img: "https://idsb.tmgrup.com.tr/ly/uploads/images/2023/10/10/295960.jpg",
      desc: "After a relaxed breakfast, journey to the legendary Masai Mara National Reserve, home to the world-famous Big Five. Arrive and indulge in a delicious lunch at the lodge. Gear up for a spectacular afternoon game drive, where thrilling encounters with lions, leopards, and herds of wildebeest await!",
    },
    {
      day: "Day 7",
      title: "THE ULTIMATE SAFARI EXPERIENCE",
      img: "https://knaptours.com/wp-content/uploads/2024/11/Untitled-design-2-3.jpg",
      desc: "An entire day dedicated to morning and afternoon game drives, exploring the breath-taking landscapes of Masai Mara and witnessing nature's greatest spectacles.",
    },
    {
      day: "Day 8",
      title: "FAREWELL TO THE WILD",
      img: "https://s28477.pcdn.co/wp-content/uploads/2018/02/NBO_2-984x554.jpg",
      desc: "Savour a leisurely breakfast, taking in the final moments of your African adventure. Drive back to Nairobi, reflecting on the unforgettable memories made. Enjoy lunch at your own pace before a smooth transfer to Jomo Kenyatta International Airport for your departure flight back home.",
    },
  ];

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.theultimatetravelcompany.co.uk/wp-content/uploads/2024/02/shutterstock_405269716-1920x892-1.jpg"
          alt="Kenya Safari Tour"
        />
        <div className="hero-content">
          <h1>Kenya's Ultimate Safari Circuit</h1>
          <p>Wildlife. Nature. African Adventure.</p>
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
              src="https://storage.googleapis.com/roads_of_adventure_uploads/blogs/1759773647514-Drive%20Distance%20from%20Nairobi%20to%20Amboseli%20national%20park%20Kenya%20safari%20tour.jpg"
              alt=""
            />
            <p>Amboseli National Park</p>
          </div>
          <div className="highlight-card">
            <img
              src="https://www.trafordsafaris.com/wp-content/uploads/2025/04/masai-mara-safari.jpeg"
              alt=""
            />
            <p>Maasai Mara Safari</p>
          </div>
          <div className="highlight-card">
            <img
              src="https://www.wildlifeworldwide.com/images/galleries/africa_kenya_lake_nakuru_national_park_rothschilds_giraffe_and_pelicans_gallery.jpg"
              alt=""
            />
            <p>Lake Nakuru Wildlife</p>
          </div>
          <div className="highlight-card">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/33/0f/be/83/caption.jpg?w=500&h=400&s=1"
              alt=""
            />
            <p>Nairobi City Experience</p>
          </div>
        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose Kenya Safari?</h2>
        <div className="why-grid">
          <div>🦁 Big Five Wildlife Safari</div>
          <div>🌄 Stunning African Landscapes</div>
          <div>🚙 Luxury Jeep Safari Experience</div>
          <div>📸 Perfect for Nature Photography</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Wild Beauty of Kenya</h2>
        <p>Book your African safari today</p>
        <br />
        <Link to="/kenya-tours">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>8 Days Tour Itinerary</h2>
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

        {/* Single Send Query button below all itinerary cards */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("8 Days Kenya Ultimate Safari Circuit")}
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

export default KenyaUltimateSafariCircuit;