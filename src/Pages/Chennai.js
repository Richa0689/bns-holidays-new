import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of Chennai",
    path: "/chennai-landing",
    days: "4 Days",
    countries: "India",
    cities: "Chennai, Marina Beach",
    dates: "10 Dates",
    price: "₹18,000",
    emi: "₹900/mo",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/58/01/46/caption.jpg?w=300&h=300&s=1"
  },
  {
    title: "Chennai & Mahabalipuram",
    path: "/chennai-mahabalipuram",
    days: "5 Days",
    countries: "India",
    cities: "Chennai, Mahabalipuram",
    dates: "8 Dates",
    price: "₹22,000",
    emi: "₹1,100/mo",
    image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/36/89/a9.jpg"
  },
  {
    title: "Chennai Cultural Tour",
    path: "/chennai-cultural",
    days: "3 Days",
    countries: "India",
    cities: "Chennai",
    dates: "6 Dates",
    price: "₹15,000",
    emi: "₹700/mo",
    image: "https://sc0.blr1.digitaloceanspaces.com/facebook/804709-facebook-qkbkdrnrpn-1457282502.jpeg"
  },
  {
    title: "Luxury Chennai Tour",
    path: "/luxury-chennai",
    days: "6 Days",
    countries: "India",
    cities: "Chennai, Pondicherry",
    dates: "5 Dates",
    price: "₹35,000",
    emi: "₹1,800/mo",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/2b/ff/23/7d/hotel-entrance.jpg"
  }
];

const Chennai = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>Chennai Tour Packages</h1>

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
              <div><span>🎭</span><p>Experiences</p></div>
              <div><span>📄</span><p>Permit</p></div>
            </div>

            <div className="modal-content">
              <p>
                👨‍✈️ Tour includes the services of <b>BNS Holidays</b>.
              </p>

              <p className="note">
                *Hotel, transport & sightseeing included.
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

export default Chennai;