import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./Pages.css";
import { Link } from "react-router-dom";

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
    imageAlt: "Austria tour package - Vienna palace and Alpine scenery"
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
    imageAlt: "Belgium tour package - Bruges canal and Brussels Grand Place"
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
    imageAlt: "Croatia tour package - Dubrovnik old city walls and Adriatic Sea"
  },
  {
    id: "PORTUGAL",
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
    imageAlt: "Portugal tour - Lisbon Alfama District, Porto Ribeira, Sintra Palácio"
  },
  {
    id: "ITALY",
    title: "Italy Tour Package",
    slug: "/italy-landing1",
    days: "10 Days",
    countries: "Italy",
    cities: "6 Cities",
    dates: "5 Dates",
    price: "₹3,20,000",
    priceValue: 320000,
    emi: "₹14,500/mo",
    highlight: "Experience the timeless allure of Italy with visits to Rome's ancient wonders, Florence's Renaissance art, Venice's romantic canals, and the breathtaking Amalfi Coast on this unforgettable Europe tour package.",
    tags: ["Rome", "Florence", "Venice", "Amalfi Coast", "Cultural Tour"],
    image: "https://thumbs.dreamstime.com/b/canal-grande-venice-italy-24625738.jpg",
    imageAlt: "Italy tour package - Rome Colosseum, Florence Duomo, Venice canals, Amalfi Coast"
  },
  {
    id: "POLAND",
    title: "Poland Tour Package",
    slug: "/poland-landing1",
    days: "7 Days",
    countries: "Poland",
    cities: "4 Cities",
    dates: "5 Dates",
    price: "₹3,20,000",
    priceValue: 320000,
    emi: "₹14,500/mo",
    highlight: "Experience the timeless allure of Poland with visits to Warsaw's historic center, Krakow's medieval streets, Gdansk's beautiful waterfront, and the stunning Białowieża Forest on this unforgettable Europe tour package.",
    tags: ["Warsaw", "Krakow", "Gdansk", "Białowieża Forest", "Cultural Tour"],
    image: "https://www.studyinpoland.pl/en/images/articles/why-poland-new.jpg",
    imageAlt: "Poland tour package - Warsaw Old Town, Krakow Main Square, Gdansk Long Market, Białowieża Forest"
  },
  {
    id: "HUNGARY",
    title: "Hungary Tour Package",
    slug: "/hungary-landing1",
    days: "7 Days",
    countries: "HUNGARY",
    cities: "4 Cities",
    dates: "5 Dates",
    price: "₹3,20,000",
    priceValue: 320000,
    emi: "₹14,500/mo",
    highlight: "Experience the timeless allure of Hungary with visits to Budapest's historic center, Prague's medieval streets, Vienna's beautiful architecture, and the stunning Lake Balaton on this unforgettable Europe tour package.",
    tags: ["Budapest", "Prague", "Vienna", "Lake Balaton", "Cultural Tour"],
    image: "https://thumbs.dreamstime.com/b/budapest-hungary-aerial-panoramic-skyline-view-buda-castle-royal-palace-szechenyi-chain-bridge-budapest-hungary-aerial-115122754.jpg",
    imageAlt: "Hungary tour package - Budapest Parliament, Prague Castle, Vienna Hofburg, Lake Balaton"
  },
  {
    id: "DENMARK",
    title: "Denmark Tour Package",
    slug: "/denmark-landing1",
    days: "7 Days",
    countries: "DENMARK",
    cities: "4 Cities",
    dates: "5 Dates",
    price: "₹3,20,000",
    priceValue: 320000,
    emi: "₹14,500/mo",
    highlight: "Experience the timeless allure of Denmark with visits to Copenhagen's historic center, Ålborg's medieval streets, Aarhus's beautiful architecture, and the stunning fjords on this unforgettable Europe tour package.",
    tags: ["Copenhagen", "Ålborg", "Aarhus", "Fjords", "Cultural Tour"],
    image: "https://thumbs.dreamstime.com/b/copenhagen-denmark-aerial-panoramic-skyline-view-royal-palace-115122754.jpg",
    imageAlt: "Denmark tour package - Copenhagen Royal Palace, Ålborg Medieval Streets, Aarhus Beautiful Architecture, Fjords"
  },
  {
    id: "GERMANY",
    title: "Germany Tour Package",
    slug: "/germany-landing1",
    days: "7 Days",
    countries: "GERMANY",
    cities: "4 Cities",
    dates: "5 Dates",
    price: "₹3,40,000",
    priceValue: 340000,
    emi: "₹15,500/mo",
    highlight: "Discover the rich heritage and modern charm of Germany with visits to Berlin's historic landmarks, Munich's vibrant culture, Frankfurt's stunning skyline, and the breathtaking beauty of the Bavarian Alps on this unforgettable Europe tour package.",
    tags: ["Berlin", "Munich", "Frankfurt", "Bavarian Alps", "Cultural Tour"],
    image: "https://cdn.kimkim.com/files/a/images/e28c94ae4c1bb7b133f6039ab141910c3581949d/original-d8146eba4d5c03ddb9a619c95108daf4.jpg",
    imageAlt: "Germany tour package"
}
];

const Europe = () => {
  const [showModal, setShowModal] = useState(false);

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

        {/* Open Graph */}
        <meta property="og:title" content="Europe Tour Packages from India 2026 | BNS Holidays" />
        <meta property="og:description" content="Explore top Europe tour packages from India starting at ₹1,95,000. Flights, hotels, visa & sightseeing included. Easy EMI options available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bnsholidays.com/europe-tours" />
        <meta property="og:image" content="https://blog.dookinternational.com/images/post-media/Z4G0Z1682335149.jpg" />

        {/* Structured Data — ItemList */}
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
                  "availability": "https://schema.org/InStock"
                }
              }
            }))
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
        <h1>Europe Tour Packages </h1>

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

                {/* HIGHLIGHT / TAGLINE */}
                <p className="tour-highlight">{tour.highlight}</p>

                {/* TAGS */}
                <ul className="tour-tags" aria-label="Tour highlights">
                  {tour.tags.map((tag) => (
                    <li key={tag} className="tour-tag">{tag}</li>
                  ))}
                </ul>
              </div>

              {/* PRICE */}
              <div className="tour-price">
                <p className="start">Starts from</p>
                <h2>
                  <span itemProp="price" content={tour.priceValue}>
                    {tour.price}
                  </span>
                </h2>
                <p className="emi">EMI from {tour.emi}</p>

                <button className="book-btn" aria-label={`Book ${tour.title} online`}>
                  Send Query
                </button>
                <button className="whatsapp-btn" aria-label={`Share ${tour.title} on WhatsApp`}>
                  Share on WhatsApp
                </button>
                <button className="details-btn" aria-label={`View details of ${tour.title}`}>
                  View Tour Details
                </button>
              </div>

            </article>
          ))}
        </section>

        {/* MODAL */}
        {showModal && (
          <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Tour inclusions">
            <div className="modal-box">
              <div className="modal-header">
                <h2>Tour Includes</h2>
                <span className="close-btn" onClick={() => setShowModal(false)} aria-label="Close modal">✕</span>
              </div>
              <div className="icons-row">
                <div><span role="img" aria-label="Hotel">🏨</span><p>Hotel</p></div>
                <div><span role="img" aria-label="Meals">🍽️</span><p>Meals</p></div>
                <div><span role="img" aria-label="Flight">✈️</span><p>Flight</p></div>
                <div><span role="img" aria-label="Sightseeing">📷</span><p>Sightseeing</p></div>
                <div><span role="img" aria-label="Transport">🚌</span><p>Transport</p></div>
                <div><span role="img" aria-label="Visa">📄</span><p>Visa</p></div>
              </div>
              <div className="modal-content">
                <p>👨‍✈️ Tour includes the services of <strong>BNS Holidays</strong>.</p>
                <p className="note">
                  *Except for joining/leaving. To &amp; fro economy class airfare is included.<br />
                  *Taxes Extra.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Europe;