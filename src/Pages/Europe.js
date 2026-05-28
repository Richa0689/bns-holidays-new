import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./Pages.css";
import { Link, useNavigate } from "react-router-dom";

/* ── Constants ─────────────────────────────────────────────────── */
const WHATSAPP_NUMBER = "917066620673";

const initialForm = {
  name: "", mobile: "", email: "", desc: "",
  destination: "", adults: "", children: "", date: "", budget: "",
};

/* ── Tour Data ─────────────────────────────────────────────────── */
const tours = [
  {
    id: "austria",
    title: "Austria Tour Package",
    slug: "/europe-landing",
    days: "8 Days",
    countries: "Austria",
    cities: "11 Cities",
    dates: "12 Dates",
    price: "₹2,50,000",
    priceValue: 250000,
    emi: "₹11,500/mo",
    highlight: "Explore the Austrian Alps, Vienna's imperial palaces, and the scenic lakeside town of Hallstatt on this unforgettable Europe tour package from India.",
    tags: ["Alps", "Vienna", "Hallstatt", "Family Tour"],
    image: "https://cdn.tourradar.com/s3/serp/original/735_U33n5NCA.jpg",
    imageAlt: "Austria tour package - Vienna palace and Alpine scenery",
  },
  {
    id: "belgium",
    title: "Belgium Tour Package",
    slug: "/belgium-landing",
    days: "6 Days",
    countries: "Belgium",
    cities: "3 Cities",
    dates: "10 Dates",
    price: "₹2,10,000",
    priceValue: 210000,
    emi: "₹9,800/mo",
    highlight: "Discover medieval Bruges, the Grand Place in Brussels, and world-famous Belgian chocolate on our affordable Belgium Europe holiday package.",
    tags: ["Bruges", "Brussels", "Chocolate Tour", "Couple Friendly"],
    image: "https://media.istockphoto.com/id/476653220/photo/ghent.jpg?s=612x612&w=0&k=20&c=a2Adwd1lH4Vd27MB82cMHzb59gBNxQtccX8aFtTdoNg=",
    imageAlt: "Belgium tour package - Bruges canal and Brussels Grand Place",
  },
  {
    id: "croatia",
    title: "Croatia Tour Package",
    slug: "/croatia-landing",
    days: "7 Days",
    countries: "Croatia",
    cities: "4 Cities",
    dates: "8 Dates",
    price: "₹1,95,000",
    priceValue: 195000,
    emi: "₹9,000/mo",
    highlight: "Sail the stunning Adriatic coastline, walk Dubrovnik's ancient walls, and explore Croatia's hidden islands on this best-value Europe tour package.",
    tags: ["Dubrovnik", "Adriatic Coast", "Island Hopping", "Beach Holiday"],
    image: "https://media.istockphoto.com/id/882881582/photo/adriatic-sea-dubrovnik-landscape.jpg?s=612x612&w=0&k=20&c=cU1nrDFSFTtw-RlKctLBNL9xIcHs_htf4G5Zq1sF7s0=",
    imageAlt: "Croatia tour package - Dubrovnik old city walls and Adriatic Sea",
  },
  {
    id: "portugal",
    title: "Portugal Tour Package",
    slug: "/portugal-landing",
    days: "8 Days",
    countries: "Portugal",
    cities: "4 Cities",
    dates: "6 Dates",
    price: "₹1,20,000",
    priceValue: 120000,
    emi: "₹5,600/mo",
    highlight: "Discover the vibrant culture, historic architecture, and beautiful landscapes of Portugal on this captivating tour package.",
    tags: ["Lisbon", "Porto", "Sintra", "Coastal Tour"],
    image: "https://media.istockphoto.com/id/2159796175/photo/beautiful-view-of-the-city-of-porto-on-a-beautiful-summer-day-porto-portugal.jpg?s=612x612&w=0&k=20&c=nHvExt7N3aD_yRdztA8ncHVQ9HAQaxJ7DCf3s1TUIjg=",
    imageAlt: "Portugal tour - Lisbon Alfama District, Porto Ribeira, Sintra Palácio",
  },
  {
    id: "italy",
    title: "Italy Tour Package",
    slug: "/italy-landing1",
    days: "10 Days",
    countries: "Italy",
    cities: "6 Cities",
    dates: "5 Dates",
    price: "₹3,20,000",
    priceValue: 320000,
    emi: "₹14,500/mo",
    highlight: "Experience the timeless allure of Italy with visits to Rome's ancient wonders, Florence's Renaissance art, Venice's romantic canals, and the breathtaking Amalfi Coast.",
    tags: ["Rome", "Florence", "Venice", "Amalfi Coast", "Cultural Tour"],
    image: "https://thumbs.dreamstime.com/b/canal-grande-venice-italy-24625738.jpg",
    imageAlt: "Italy tour package - Rome Colosseum, Florence Duomo, Venice canals, Amalfi Coast",
  },
  {
    id: "poland",
    title: "Poland Tour Package",
    slug: "/poland-landing1",
    days: "7 Days",
    countries: "Poland",
    cities: "4 Cities",
    dates: "5 Dates",
    price: "₹3,20,000",
    priceValue: 320000,
    emi: "₹14,500/mo",
    highlight: "Experience the timeless allure of Poland with visits to Warsaw's historic center, Krakow's medieval streets, Gdansk's beautiful waterfront, and the stunning Białowieża Forest.",
    tags: ["Warsaw", "Krakow", "Gdansk", "Białowieża Forest", "Cultural Tour"],
    image: "https://www.studyinpoland.pl/en/images/articles/why-poland-new.jpg",
    imageAlt: "Poland tour package",
  },
  {
    id: "hungary",
    title: "Hungary Tour Package",
    slug: "/hungary-landing1",
    days: "7 Days",
    countries: "Hungary",
    cities: "4 Cities",
    dates: "5 Dates",
    price: "₹3,20,000",
    priceValue: 320000,
    emi: "₹14,500/mo",
    highlight: "Experience the timeless allure of Hungary with visits to Budapest's historic center, Prague's medieval streets, Vienna's beautiful architecture, and the stunning Lake Balaton.",
    tags: ["Budapest", "Prague", "Vienna", "Lake Balaton", "Cultural Tour"],
    image: "https://thumbs.dreamstime.com/b/budapest-hungary-aerial-panoramic-skyline-view-buda-castle-royal-palace-szechenyi-chain-bridge-budapest-hungary-aerial-115122754.jpg",
    imageAlt: "Hungary tour package",
  },
  {
    id: "denmark",
    title: "Denmark Tour Package",
    slug: "/denmark-landing1",
    days: "7 Days",
    countries: "Denmark",
    cities: "4 Cities",
    dates: "5 Dates",
    price: "₹3,20,000",
    priceValue: 320000,
    emi: "₹14,500/mo",
    highlight: "Experience the timeless allure of Denmark with visits to Copenhagen's historic center, Ålborg's medieval streets, Aarhus's beautiful architecture, and the stunning fjords.",
    tags: ["Copenhagen", "Ålborg", "Aarhus", "Fjords", "Cultural Tour"],
    image: "https://thumbs.dreamstime.com/b/copenhagen-denmark-aerial-panoramic-skyline-view-royal-palace-115122754.jpg",
    imageAlt: "Denmark tour package",
  },
  {
    id: "germany",
    title: "Germany Tour Package",
    slug: "/germany-landing1",
    days: "7 Days",
    countries: "Germany",
    cities: "4 Cities",
    dates: "5 Dates",
    price: "₹3,40,000",
    priceValue: 340000,
    emi: "₹15,500/mo",
    highlight: "Discover the rich heritage and modern charm of Germany with visits to Berlin's historic landmarks, Munich's vibrant culture, Frankfurt's stunning skyline, and the Bavarian Alps.",
    tags: ["Berlin", "Munich", "Frankfurt", "Bavarian Alps", "Cultural Tour"],
    image: "https://cdn.kimkim.com/files/a/images/e28c94ae4c1bb7b133f6039ab141910c3581949d/original-d8146eba4d5c03ddb9a619c95108daf4.jpg",
    imageAlt: "Germany tour package",
  },
  {
    id: "france",
    title: "France Tour Package",
    slug: "/france-landing1",
    days: "7 Days",
    countries: "France",
    cities: "4 Cities",
    dates: "5 Dates",
    price: "₹3,60,000",
    priceValue: 360000,
    emi: "₹16,500/mo",
    highlight: "Experience the elegance and romance of France with visits to Paris's iconic landmarks, Nice's stunning coastline, Lyon's rich culinary heritage, and the picturesque French countryside.",
    tags: ["Paris", "Nice", "Lyon", "French Riviera", "Cultural Tour"],
    image: "https://www.royalcaribbean.com/media-assets/pmc/content/dam/shore-x/paris-le-havre-leh/lh17-paris-sightseeing-without-lunch/stock-photo-skyline-of-paris-with-eiffel-tower-at-sunset-in-paris-france-eiffel-tower-is-one-of-the-most-752725282.jpg?w=1920",
    imageAlt: "France tour package",
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
const Europe = () => {
  const [activeModal, setActiveModal] = useState(null); // stores tour title when open
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
    <>
      {/* ── SEO HEAD ── */}
      <Helmet>
        <title>Europe Tour Packages from India 2026 | BNS Holidays</title>
        <meta
          name="description"
          content="Book the best Europe tour packages from India starting at ₹1,95,000. Explore Austria, Belgium, Croatia, Eastern Europe & Luxury Europe tours with flights, hotels & visa included. EMI available."
        />
        <meta
          name="keywords"
          content="Europe tour packages from India, Europe holiday packages, Austria tour, Belgium tour, Croatia tour, Eastern Europe tour, Luxury Europe tour, Europe trip 2026"
        />
        <link rel="canonical" href="https://www.bnsholidays.com/europe-tours" />
        <meta property="og:title" content="Europe Tour Packages from India 2026 | BNS Holidays" />
        <meta property="og:description" content="Explore top Europe tour packages from India starting at ₹1,95,000. Flights, hotels, visa & sightseeing included. Easy EMI options available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bnsholidays.com/europe-tours" />
        <meta property="og:image" content="https://blog.dookinternational.com/images/post-media/Z4G0Z1682335149.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Europe Tour Packages from India",
            "itemListElement": tours.map((tour, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "TouristTrip",
                "name": tour.title,
                "description": tour.highlight,
                "image": tour.image,
                "offers": {
                  "@type": "Offer",
                  "price": tour.priceValue,
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock",
                },
              },
            })),
          })}
        </script>
      </Helmet>

      {/* ── VIDEO HERO ── */}
      <div className="video-hero">
        <div className="video-hero__inner">
          <iframe
            src="https://www.youtube.com/embed/X69yHbtXncQ?si=35_1AGFiZJqc9-SM&autoplay=1&mute=1&loop=1&playlist=X69yHbtXncQ&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&playsinline=1&start=10"
            title="Europe Tour"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="video-hero__shield" />
      </div>

      {/* ── PAGE ── */}
      <main className="tour-container">
        <h1>Europe Tour Packages</h1>

        <section aria-label="Europe tour package listings">
          {tours.map((tour) => (
            <article className="tour-card" key={tour.id}>

              {/* IMAGE */}
              <div className="tour-image">
                <span className="badge">Popular Today</span>
                <img
                  src={tour.image}
                  alt={tour.imageAlt}
                  loading="lazy"
                  width="400"
                  height="270"
                />
              </div>

              {/* INFO */}
              <div className="tour-info">
                <h2>
                  <Link to={tour.slug} className="title-link">
                    {tour.title}
                  </Link>
                </h2>

                <p className="details">
                  <span>{tour.days}</span>
                  {tour.days && " • "}
                  <span>{tour.countries}</span>
                  {" • "}
                  <span>{tour.cities}</span>
                  {", "}
                  <span>{tour.dates}</span>
                </p>

                <p className="tour-highlight">{tour.highlight}</p>

                <ul className="tour-tags" aria-label="Tour highlights">
                  {tour.tags.map((tag) => (
                    <li key={tag} className="tour-tag">{tag}</li>
                  ))}
                </ul>
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

                {/* View Tour Details → navigates to tour's slug */}
                <button
                  className="details-btn"
                  aria-label={`View details of ${tour.title}`}
                  onClick={() => navigate(tour.slug)}
                >
                  View Tour Details
                </button>
              </div>

            </article>
          ))}
        </section>
      </main>

      {/* ── QUERY MODAL ── */}
      {activeModal && (
        <QueryModal
          tourTitle={activeModal}
          onClose={() => setActiveModal(null)}
        />
      )}

      {/* ── Scoped styles for modal & label ── */}
      <style>{`
        .eq-day-label {
          font-size: 0.83rem;
          color: #777;
          margin: -10px 0 14px;
        }
        .eq-day-label strong { color: #c8860a; }
      `}</style>
    </>
  );
};

export default Europe;