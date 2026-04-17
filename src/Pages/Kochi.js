import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of Kochi",
    path: "/kochi-landing",
    days: "4 Days",
    countries: "India",
    cities: "Kochi, Fort Kochi",
    dates: "10 Dates",
    price: "₹18,000",
    emi: "₹900/mo",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/de/f0/eb/backwater-tourism.jpg?w=700&h=-1&s=1"
  },
  {
    title: "Kochi & Munnar",
    path: "/kochi-munnar",
    days: "6 Days",
    countries: "India",
    cities: "Kochi, Munnar",
    dates: "8 Dates",
    price: "₹28,000",
    emi: "₹1,300/mo",
    image: "https://www.stayvista.com/blog/wp-content/uploads/2024/07/5038176779_9535e90ea9_c.jpg"
  },
  {
    title: "Kochi Cultural Tour",
    path: "/kochi-cultural",
    days: "5 Days",
    countries: "India",
    cities: "Kochi",
    dates: "6 Dates",
    price: "₹22,000",
    emi: "₹1,100/mo",
    image: "https://oneday.travel/wp-content/uploads/one-day-kochi-local-sightseeing-trip-by-car-1568x1045.jpg"
  },
  {
    title: "Luxury Kochi Tour",
    path: "/luxury-kochi",
    days: "7 Days",
    countries: "India",
    cities: "Kochi, Alleppey",
    dates: "5 Dates",
    price: "₹40,000",
    emi: "₹1,800/mo",
    image: "https://media1.thrillophilia.com/filestore/9wtzx7ozhz9wb2afu1onuyxfqug2_aqu.png?w=305&h=230&dpr"
  }
];

const Kochi = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>Kochi Tour Packages</h1>

      {tours.map((tour, index) => (
        <div className="tour-card" key={index}>

          {/* IMAGE */}
          <div className="tour-image">
            <span className="badge">Popular Today</span>
            <img src={tour.image} alt={tour.title} />
          </div>

          {/* INFO */}
          <div className="tour-info">
            <h2>
              <Link to={tour.path} className="title-link">
                {tour.title}
              </Link>
            </h2>

            <div className="rating">
              ⭐⭐⭐⭐⭐ <span>120 Reviews</span>
            </div>

            <p 
              className="inclusive" 
              onClick={() => setShowModal(true)}
            >
              ∞ All Inclusive
            </p>

            <p className="details">
              {tour.days} • {tour.countries} • {tour.cities}, {tour.dates}
            </p>

            <p className="dates">Dates Filling Fast</p>
          </div>

          {/* PRICE */}
          <div className="tour-price">
            <p className="start">Starts from</p>
            <h2>{tour.price}</h2>
            <p className="emi">EMI from {tour.emi}</p>

            <button className="book-btn">Book Online</button>
            <button className="whatsapp-btn">Share on WhatsApp</button>
            <button className="details-btn">View Tour Details</button>
          </div>

        </div>
      ))}

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">

            <div className="modal-header">
              <h2>Tour Includes</h2>
              <span className="close-btn" onClick={() => setShowModal(false)}>
                ✕
              </span>
            </div>

            <div className="icons-row">
              <div><span>🏨</span><p>Hotel</p></div>
              <div><span>🍽️</span><p>Meals</p></div>
              <div><span>🚗</span><p>Transport</p></div>
              <div><span>📷</span><p>Sightseeing</p></div>
              <div><span>🎭</span><p>Culture</p></div>
              <div><span>📄</span><p>Permit</p></div>
            </div>

            <div className="modal-content">
              <p>
                👨‍✈️ Tour includes the services of <b>BNS Holidays</b>.
              </p>

              <p className="note">
                *Hotel & transport included.
                <br />
                *Taxes Extra.
              </p>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Kochi;