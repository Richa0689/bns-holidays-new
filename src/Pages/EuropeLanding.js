import React, { useState } from "react";
import "./Pages.css";
import { Link, useNavigate } from "react-router-dom";

/* ── Constants ─────────────────────────────────────────────────── */
const WHATSAPP_NUMBER = "917066620673";

const initialForm = {
  name: "", mobile: "", email: "", desc: "",
  destination: "", adults: "", children: "", date: "", budget: "",
};

/* ── Slug map ───────────────────────────────────────────────────── */
const slugMap = {
  "Scenic Europe Escape: Ljubljana, Salzburg & Munich": "/austria-landing",
  "Budapest + Vienna + Prague || 06 Nights/07 Days": "/austria-landing-2",
  "Budapest + Vienna + Prague 08 Nights/09 Days": "/austria-landing-3",
  "Munich + Innsbruck + Salzburg + Vienna||08 Nights/09 Days": "/austria-landing-5",
  "Best of Vienna/Munich/Zurich || 06 Nights/07 Days": "/austria-landing-4",
  "Best of Vienna/Munich/Zurich || 07 Nights/08 Days": "/austria-landing-6",
  "Zurich + Innsbruck + Salzburg || 06 Nights/07 Days": "/austria-landing-7",
  "Vienna + Budapest + Prague || 06 Nights/07 Days": "/austria-landing-8",
  "From Munich's Majesty to Innsbruck's Alps|| 6N/7D": "/austria-landing-9",
  "From Medieval Streets to Imperial Palaces|| 9N/10D": "/austria-landing-10",
};

/* ── Tour Data ──────────────────────────────────────────────────── */
const austriaTours = [
  {
    title: "Scenic Europe Escape: Ljubljana, Salzburg & Munich",
    days: "7 Days",
    countries: "SLOVENIA + AUSTRIA + GERMANY",
    cities: "Ljubljana, Salzburg & Munich",
    dates: "12 Dates",
    price: "₹1,20,000",
    priceValue: 250000,
    emi: "₹10,000/mo",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/26/c1/cc/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_4ffab338edf9ee7e4c5d",
  },
  {
    title: "Budapest + Vienna + Prague || 06 Nights/07 Days",
    days: "7 Days",
    countries: "HUNGARY + AUSTRIA + CZECH REPUBLIC",
    cities: "Budapest, Vienna & Prague",
    dates: "8 Dates",
    price: "₹1,20,000",
    priceValue: 310000,
    emi: "₹10,000/mo",
    image: "https://vlt.tours/wp-content/uploads/2025/11/upload-1200.webp",
  },
  {
    title: "Budapest + Vienna + Prague 08 Nights/09 Days",
    days: "9 Days",
    countries: "HUNGARY + AUSTRIA + CZECH REPUBLIC",
    cities: "Budapest, Vienna & Prague",
    dates: "6 Dates",
    price: "₹1,40,000",
    priceValue: 275000,
    emi: "₹11,667/mo",
    image: "https://www.catsninelives.com/wp-content/uploads/2023/04/Cats-Nine-Lives-Prague-54.jpg",
  },
  {
    title: "Munich + Innsbruck + Salzburg + Vienna||08 Nights/09 Days",
    days: "9 Days",
    countries: "GERMANY + AUSTRIA",
    cities: "Vienna, Munich & Zurich",
    dates: "10 Dates",
    price: "₹1,50,000",
    priceValue: 185000,
    emi: "₹12,500/mo",
    image: "https://www.railbookers.com/sites/railbookers/files/styles/hero/public/images/Innsbruck-Mountains-River.jpg?h=6e972868&itok=j9rFCOgT",
  },
  {
    title: "Best of Vienna/Munich/Zurich || 06 Nights/07 Days",
    days: "7 Days",
    countries: "GERMANY + SWITZERLAND + AUSTRIA",
    cities: "Vienna, Munich & Zurich",
    dates: "10 Dates",
    price: "₹1,40,000",
    priceValue: 185000,
    emi: "₹11,667/mo",
    image: "https://res-2.cloudinary.com/gorealtravel/image/upload/f_auto,q_auto,q_50/v1733565690/production/marketing/itinerary/67541b35e8c263000bb727b9/marketing_picture/67541cfae8c263000bb72826/file/prague-river-and-castle-view-small.webp",
  },
  {
    title: "Best of Vienna/Munich/Zurich || 07 Nights/08 Days",
    days: "8 Days",
    countries: "GERMANY + SWITZERLAND + AUSTRIA",
    cities: "Vienna, Munich & Zurich",
    dates: "10 Dates",
    price: "₹1,55,000",
    priceValue: 185000,
    emi: "₹12,917/mo",
    image: "https://res-2.cloudinary.com/gorealtravel/image/upload/f_auto,q_auto,q_50/v1713362978/production/marketing/itinerary/661fd80e0273341195707608/marketing_picture/661fd81a02733411957076d0/file/2.webp",
  },
  {
    title: "Zurich + Innsbruck + Salzburg || 06 Nights/07 Days",
    days: "7 Days",
    countries: "SWITZERLAND + AUSTRIA + GERMANY",
    cities: "Vienna, Munich & Zurich",
    dates: "10 Dates",
    price: "₹1,35,000",
    priceValue: 185000,
    emi: "₹11,250/mo",
    image: "https://pictures.tripmasters.com/images/apkg/1730/innsbruck_-_aerial_view-1030503-500.jpg",
  },
  {
    title: "Vienna + Budapest + Prague || 06 Nights/07 Days",
    days: "7 Days",
    countries: "AUSTRIA + HUNGARY + CZECH REPUBLIC",
    cities: "Vienna, Budapest & Prague",
    dates: "10 Dates",
    price: "₹1,30,000",
    priceValue: 185000,
    emi: "₹10,833/mo",
    image: "https://vlt.tours/wp-content/uploads/2025/11/upload-1200.webp",
  },
  {
    title: "Munich + Innsbruck + Salzburg + Vienna||08 Nights/09 Days",
    days: "9 Days",
    countries: "GERMANY + AUSTRIA",
    cities: "Munich, Innsbruck, Salzburg & Vienna",
    dates: "10 Dates",
    price: "₹1,50,000",
    priceValue: 185000,
    emi: "₹12,500/mo",
    image: "https://tripophia.net/media/catalog/product/1/_/1_32__2_30.jpg",
  },
  {
    title: "From Munich's Majesty to Innsbruck's Alps|| 6N/7D",
    days: "7 Days",
    countries: "AUSTRIA",
    cities: "Munich, Innsbruck & Salzburg",
    dates: "10 Dates",
    price: "₹1,30,000",
    priceValue: 185000,
    emi: "₹10,833/mo",
    image: "https://images.daytrip.com/Innsbruck4as.jpeg?w=2048&q=30",
  },
  {
    title: "From Medieval Streets to Imperial Palaces|| 9N/10D",
    days: "10 Days",
    countries: "CZECH REPUBLIC + AUSTRIA + HUNGARY",
    cities: "Prague, Vienna & Budapest",
    dates: "10 Dates",
    price: "₹1,60,000",
    priceValue: 185000,
    emi: "₹13,333/mo",
    image: "https://images.greeka.com/resized/user_images/WinfriedRusch/580/php2p1zDu.jpg",
  },
];

/* ── QueryModal ─────────────────────────────────────────────────── */
const QueryModal = ({ tourTitle, onClose }) => {
  const [form, setForm] = useState({ ...initialForm, destination: tourTitle });
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
      `*Tour:* ${tourTitle}\n` +
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
    }, 2500);
  };

  return (
    <div
      className="eq-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="eq-modal" role="dialog" aria-modal="true" aria-label="Quick Enquiry form">
        <button className="eq-close" onClick={onClose} aria-label="Close">✕</button>

        {submitted ? (
          <div className="eq-success">
            <div className="eq-success-icon">✓</div>
            <p>Thank you! We'll get back to you shortly.</p>
          </div>
        ) : (
          <>
            <h2 className="eq-title">QUICK ENQUIRY</h2>
            <p className="eq-day-label">
              Enquiry for: <strong>{tourTitle}</strong>
            </p>

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

            <button className="eq-toggle" onClick={() => setShowExtra((v) => !v)}>
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
                  <input type="date" name="date" value={form.date} onChange={handleChange} />
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

/* ── Main Component ─────────────────────────────────────────────── */
const EuropeLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const navigate = useNavigate();

  const handleWhatsApp = (tour) => {
    const message =
      `*Tour Enquiry — BNS Holidays*\n` +
      `*Tour:* ${tour.title}\n` +
      `*Duration:* ${tour.days}\n` +
      `*Price:* ${tour.price}\n` +
      `*Countries:* ${tour.countries}\n\n` +
      `Hi, I'm interested in this tour. Please share more details.`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="tour-container">
      <h1>Austria Tour Packages</h1>

      {austriaTours.map((tour, index) => {
        const slug = slugMap[tour.title];

        return (
          <div className="tour-card" key={index}>

            {/* IMAGE */}
            <div className="tour-image">
              <span className="badge">Popular Today</span>
              <img src={tour.image} alt={tour.title} loading="lazy" />
            </div>

            {/* INFO */}
            <div className="tour-info">
              <h2>
                {slug ? (
                  <Link to={slug} className="title-link">{tour.title}</Link>
                ) : (
                  tour.title
                )}
              </h2>
              <p className="details">
                {tour.days} • {tour.countries} • {tour.cities}, {tour.dates}
              </p>
            </div>

            {/* PRICE + BUTTONS */}
            <div className="tour-price">
              <p className="start">Starts from</p>
              <h2>
                <span itemProp="price" content={tour.priceValue}>
                  {tour.price}
                </span>
              </h2>
              <p className="emi">EMI from {tour.emi}</p>

              {/* Send Query → opens modal */}
              <button
                className="book-btn"
                aria-label={`Send query for ${tour.title}`}
                onClick={() => setActiveModal(tour.title)}
              >
                Send Query
              </button>

              {/* Share on WhatsApp → tour-specific message */}
              <button
                className="whatsapp-btn"
                aria-label={`Share ${tour.title} on WhatsApp`}
                onClick={() => handleWhatsApp(tour)}
              >
                Share on WhatsApp
              </button>

              {/* View Tour Details → navigates to tour slug */}
              <button
                className="details-btn"
                aria-label={`View details of ${tour.title}`}
                onClick={() => slug && navigate(slug)}
                disabled={!slug}
              >
                View Tour Details
              </button>
            </div>

          </div>
        );
      })}

      {/* ── QUERY MODAL ── */}
      {activeModal && (
        <QueryModal
          tourTitle={activeModal}
          onClose={() => setActiveModal(null)}
        />
      )}

      {/* Scoped styles */}
      <style>{`
        .eq-day-label {
          font-size: 0.83rem;
          color: #777;
          margin: -10px 0 14px;
        }
        .eq-day-label strong { color: #c8860a; }
      `}</style>
    </div>
  );
};

export default EuropeLanding;