import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Bangalore",
    path: "/bangalore-landing",
    days: "4 Days",
    countries: "India",
    cities: "Bangalore, Lalbagh",
    dates: "10 Dates",
    price: "₹12,000",
    emi: "₹600/mo",
    image: "https://www.holidify.com/images/bgImages/BANGALORE.jpg"
  },
  {
    title: "Mysore ",
    path: "/mysore-landing",
    days: "4 Days",
    countries: "India",
    cities: "Mysore, Palace",
    dates: "8 Dates",
    price: "₹15,000",
    emi: "₹750/mo",
    image: "https://www.holidify.com/images/bgImages/MYSORE.jpg"
  },
  {
    title: "Coorg ",
    path: "/coorg-landing",
    days: "4 Days",
    countries: "India",
    cities: "Coorg, Coffee Estates",
    dates: "6 Dates",
    price: "₹18,000",
    emi: "₹900/mo",
    image: "https://www.holidify.com/images/bgImages/COORG.jpg"
  },
  {
    title: "Hampi ",
    path: "/hampi-landing",
    days: "4 Days",
    countries: "India",
    cities: "Hampi, Ruins",
    dates: "5 Dates",
    price: "₹20,000",
    emi: "₹1,000/mo",
    image: "https://www.holidify.com/images/bgImages/HAMPI.jpg"
  }
];

const KarnatakaTours = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>Karnataka Tour Packages</h1>

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
            <Link to={tour.path}>
              <button className="details-btn">View Tour Details</button>
            </Link>
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
              <div><span>🏞️</span><p>Nature</p></div>
              <div><span>📄</span><p>Guide</p></div>
            </div>

            <div className="modal-content">
              <p>
                👨‍✈️ Tour includes the services of <b>BNS Holidays</b>.
              </p>

              <p className="note">
                *Hotel, meals & sightseeing included.
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

export default KarnatakaTours;