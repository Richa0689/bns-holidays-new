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
    // days: "8 Days",
    countries: "Austria",
    // cities: "11 Cities",
    // dates: "12 Dates",
    price: "₹2,50,000",
    priceValue: 250000,
    emi: "₹11,500/mo",
    highlight: "Explore the Austrian Alps, Vienna's imperial palaces, and the scenic lakeside town of Hallstatt on this unforgettable Europe tour package from India.",
    tags: ["Alps", "Vienna", "Hallstatt", "Family Tour"],
    image: "https://preview.redd.it/belvedere-palace-vienna-austria-v0-ffh80da3hb0a1.jpg?width=1526&format=pjpg&auto=webp&s=517bbb32159ffeec3cbbf3d804b11f3154022f12",
    imageAlt: "Austria tour package - Vienna palace and Alpine scenery",
  },
  
  {
    id: "belgium",
    title: "Belgium Tour Package",
    slug: "/belgium-landing",
    // days: "6 Days",
    countries: "Belgium",
    // cities: "3 Cities",
    // dates: "10 Dates",
    price: "₹2,10,000",
    priceValue: 210000,
    emi: "₹9,800/mo",
    highlight: "Discover medieval Bruges, the Grand Place in Brussels, and world-famous Belgian chocolate on our affordable Belgium Europe holiday package.",
    tags: ["Bruges", "Brussels", "Chocolate Tour", "Couple Friendly"],
    image: "https://tse2.mm.bing.net/th/id/OIP.VbzdFB061Z7pB3Oxhpn_rwHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    imageAlt: "Belgium tour package - Bruges canal and Brussels Grand Place",
  },
  {
    id: "croatia",
    title: "Croatia Tour Package",
    slug: "/croatia-landing",
    // days: "7 Days",
    countries: "Croatia",
    // cities: "4 Cities",
    // dates: "8 Dates",
    price: "₹1,95,000",
    priceValue: 195000,
    emi: "₹9,000/mo",
    highlight: "Sail the stunning Adriatic coastline, walk Dubrovnik's ancient walls, and explore Croatia's hidden islands on this best-value Europe tour package.",
    tags: ["Dubrovnik", "Adriatic Coast", "Island Hopping", "Beach Holiday"],
    image: "https://tse2.mm.bing.net/th/id/OIP.dmrDUSyfp90tTJ3CD4iV-gHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    imageAlt: "Croatia tour package - Dubrovnik old city walls and Adriatic Sea",
  },
  {
    id: "portugal",
    title: "Portugal Tour Package",
    slug: "/portugal-landing",
    // days: "8 Days",
    countries: "Portugal",
    // cities: "4 Cities",
    // dates: "6 Dates",
    price: "₹1,20,000",
    priceValue: 120000,
    emi: "₹5,600/mo",
    highlight: "Discover the vibrant culture, historic architecture, and beautiful landscapes of Portugal on this captivating tour package.",
    tags: ["Lisbon", "Porto", "Sintra", "Coastal Tour"],
    image: "https://tse3.mm.bing.net/th/id/OIP.klXq6AyGQSbYunt6hFw6jQHaEm?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    imageAlt: "Portugal tour - Lisbon Alfama District, Porto Ribeira, Sintra Palácio",
  },
  {
    id: "italy",
    title: "Italy Tour Package",
    slug: "/italy-landing1",
    // days: "10 Days",
    countries: "Italy",
    // cities: "6 Cities",
    // dates: "5 Dates",
    price: "₹3,20,000",
    priceValue: 320000,
    emi: "₹14,500/mo",
    highlight: "Experience the timeless allure of Italy with visits to Rome's ancient wonders, Florence's Renaissance art, Venice's romantic canals, and the breathtaking Amalfi Coast.",
    tags: ["Rome", "Florence", "Venice", "Amalfi Coast", "Cultural Tour"],
    image: "https://tse1.mm.bing.net/th/id/OIP.e0u6bw63CpR5SAQsOLCmbwHaDM?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    imageAlt: "Italy tour package - Rome Colosseum, Florence Duomo, Venice canals, Amalfi Coast",
  },
  {
    id: "poland",
    title: "Poland Tour Package",
    slug: "/poland-landing1",
    // days: "7 Days",
    countries: "Poland",
    // cities: "4 Cities",
    // dates: "5 Dates",
    price: "₹3,20,000",
    priceValue: 320000,
    emi: "₹14,500/mo",
    highlight: "Experience the timeless allure of Poland with visits to Warsaw's historic center, Krakow's medieval streets, Gdansk's beautiful waterfront, and the stunning Białowieża Forest.",
    tags: ["Warsaw", "Krakow", "Gdansk", "Białowieża Forest", "Cultural Tour"],
    image: "https://cdn.tourradar.com/s3/tour/1500x800/286469_669a41da244ff.jpg",
    imageAlt: "Poland tour package",
  },
  {
    id: "hungary",
    title: "Hungary Tour Package",
    slug: "/hungary-landing1",
    // days: "7 Days",
    countries: "Hungary",
    // cities: "4 Cities",
    // dates: "5 Dates",
    price: "₹3,20,000",
    priceValue: 320000,
    emi: "₹14,500/mo",
    highlight: "Experience the timeless allure of Hungary with visits to Budapest's historic center, Prague's medieval streets, Vienna's beautiful architecture, and the stunning Lake Balaton.",
    tags: ["Budapest", "Prague", "Vienna", "Lake Balaton", "Cultural Tour"],
    image: "https://media1.thrillophilia.com/filestore/k3t5npqpswbm483g8x5qfd63h243_shutterstock_1284286561.jpg",
    imageAlt: "Hungary tour package",
  },
  {
    id: "denmark",
    title: "Denmark Tour Package",
    slug: "/denmark-landing1",
    // days: "7 Days",
    countries: "Denmark",
    // cities: "4 Cities",
    // dates: "5 Dates",
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
    // days: "7 Days",
    countries: "Germany",
    // cities: "4 Cities",
    // dates: "5 Dates",
    price: "₹3,40,000",
    priceValue: 340000,
    emi: "₹15,500/mo",
    highlight: "Discover the rich heritage and modern charm of Germany with visits to Berlin's historic landmarks, Munich's vibrant culture, Frankfurt's stunning skyline, and the Bavarian Alps.",
    tags: ["Berlin", "Munich", "Frankfurt", "Bavarian Alps", "Cultural Tour"],
    image: "https://www.nordicvisitor.com/images/germany/beautiful-view-of-neuschwanstein-castle-19th-century-bavaria-germany-alps.jpg",
    imageAlt: "Germany tour package",
  },
  {
    id: "france",
    title: "France Tour Package",
    slug: "/france-landing1",
    // days: "7 Days",
    countries: "France",
    // cities: "4 Cities",
    // dates: "5 Dates",
    price: "₹3,60,000",
    priceValue: 360000,
    emi: "₹16,500/mo",
    highlight: "Experience the elegance and romance of France with visits to Paris's iconic landmarks, Nice's stunning coastline, Lyon's rich culinary heritage, and the picturesque French countryside.",
    tags: ["Paris", "Nice", "Lyon", "French Riviera", "Cultural Tour"],
    image: "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2016/12/16-Eiffel-Tower-in-Paris.jpg",
    imageAlt: "France tour package",
  },
  {
    id: "England",
    title: "England Tour Package",
    slug: "/England-landing1",
    // days: "7 Days",
    countries: "England",
    // cities: "4 Cities",
    // dates: "5 Dates",
    price: "₹3,60,000",
    priceValue: 360000,
    emi: "₹16,500/mo",
   highlight: "Discover the timeless charm of England with visits to London's iconic landmarks, Windsor's royal heritage, the historic city of Bath, the scenic Cotswolds countryside, and the vibrant culture of Manchester.",
tags: ["London", "Windsor", "Bath", "Cotswolds", "Manchester", "Cultural Tour"],
    image: "https://media1.thrillophilia.com/filestore/hesbwx95pcgh8b5caic3stlf4r6b_shutterstock_178245392.jpg",
    imageAlt: "England tour package",
  },
   {
    id: "Switzerland",
    title: "Switzerland Tour Package",
    slug: "/Switzerland-landing1",
    // days: "7 Days",
    countries: "Switzerland",
    // cities: "4 Cities",
    // dates: "5 Dates",
    price: "₹3,60,000",
    priceValue: 360000,
    emi: "₹16,500/mo",
   highlight: "Discover the timeless charm of England with visits to London's iconic landmarks, Windsor's royal heritage, the historic city of Bath, the scenic Cotswolds countryside, and the vibrant culture of Manchester.",
tags: ["London", "Windsor", "Bath", "Cotswolds", "Manchester", "Cultural Tour"],
    image: "https://alaskatours.com/wp-content/uploads/2016/04/150820-721182-1-1920x1281.jpg",
    imageAlt: "Switzerland tour package",
  },
   {
    id: "Spain",
    title: "Spain Tour Package",
    slug: "/Spain-landing1",
    // days: "7 Days",
    countries: "Spain",
    // cities: "4 Cities",
    // dates: "5 Dates",
    price: "₹3,60,000",
    priceValue: 360000,
    emi: "₹16,500/mo",
   highlight: "Discover the vibrant beauty of Spain with visits to Madrid's royal landmarks, Barcelona's stunning architecture, Seville's rich Andalusian culture, Valencia's coastal charm, and Granada's historic Alhambra.",
tags: ["Madrid", "Barcelona", "Seville", "Valencia", "Granada", "Cultural Tour"],
    image: "https://tse1.mm.bing.net/th/id/OIP.T1ZiT5uimRJoJspxKBYVvQHaDt?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    imageAlt: "Spain tour package",
  },
  {
    id: "Scotland",
    title: "Scotland Tour Package",
    slug: "/Scotland-landing1",
    // days: "7 Days",
    countries: "Scotland",
    // cities: "4 Cities",
    // dates: "5 Dates",
    price: "₹3,60,000",
    priceValue: 360000,
    emi: "₹16,500/mo",
  highlight: "Experience the breathtaking beauty of Scotland with visits to Edinburgh's historic castle, Glasgow's vibrant arts scene, the scenic Highlands, the mystical Isle of Skye, and the legendary Loch Ness, blending rich history with stunning natural landscapes.",
tags: ["Edinburgh", "Glasgow", "Scottish Highlands", "Isle of Skye", "Loch Ness", "Cultural Tour"],
    image: "https://tse3.mm.bing.net/th/id/OIP.1TNZWhGCJo01lDjs7lqPGQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    imageAlt: "Scotland tour package",
  },
  {
    id: "CzechRepublic",
    title: "CzechRepublic Tour Package",
    slug: "/CzechRepublic-landing1",
    // days: "7 Days",
    countries: "CzechRepublic",
    // cities: "4 Cities",
    // dates: "5 Dates",
    price: "₹3,60,000",
    priceValue: 360000,
    emi: "₹16,500/mo",
  highlight: "Discover the enchanting charm of the Czech Republic with visits to Prague's iconic Old Town and Castle, the fairytale town of Český Krumlov, the historic spa city of Karlovy Vary, the stunning Bohemian Switzerland National Park, and the picturesque Moravian wine region, blending rich heritage with breathtaking landscapes.",
tags: [
  "Prague",
  "Český Krumlov",
  "Karlovy Vary",
  "Bohemian Switzerland",
  "Moravia",
  "Cultural Tour"],
    image: "https://trip4travel.com/wp-content/uploads/2024/03/prague.webp",
    imageAlt: "CzechRepublic tour package",
  },
  {
    id: "Finland",
    title: "Finland Tour Package",
    slug: "/Finland-landing1",
    // days: "7 Days",
    countries: "Finland",
    // cities: "4 Cities",
    // dates: "5 Dates",
    price: "₹3,60,000",
    priceValue: 360000,
    emi: "₹16,500/mo",
 highlight: "Discover the enchanting beauty of Finland with visits to vibrant Helsinki, the charming city of Rovaniemi, the magical Santa Claus Village, the breathtaking Finnish Lakeland, the stunning Northern Lights in Lapland, and the serene Arctic wilderness, offering a perfect blend of nature, culture, and unforgettable experiences.",
  tags: [
  "Helsinki",
  "Rovaniemi",
  "Santa Claus Village",
  "Finnish Lakeland",
  "Lapland",
  "Northern Lights"],
    image: "https://cdn.tourradar.com/s3/tour/1500x800/238344_66e0f85f0de41.jpg",
    imageAlt: "Finland tour package",
  },
  {
    id: "Greece",
    title: "Greece Tour Package",
    slug: "/Greece-landing1",
    // days: "7 Days",
    countries: "Greece",
    // cities: "4 Cities",
    // dates: "5 Dates",
    price: "₹3,60,000",
    priceValue: 360000,
    emi: "₹16,500/mo",
 highlight: "Discover the timeless beauty of Greece with visits to historic Athens, the breathtaking island of Santorini, the vibrant streets of Mykonos, the ancient wonders of Delphi, the stunning monasteries of Meteora, and the crystal-clear beaches of Crete, offering a perfect blend of history, culture, and unforgettable island experiences.",
tags: ["Athens", "Santorini", "Mykonos", "Delphi", "Meteora", "Crete"],
    image: "https://tse4.mm.bing.net/th/id/OIP.W_H8dToOczW8sFjIiaBnGgHaD8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    imageAlt: "Greece tour package",
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