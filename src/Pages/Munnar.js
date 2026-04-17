import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of Munnar",
    path: "/munnar-landing",
    days: "5 Days",
    countries: "India",
    cities: "Munnar, Tea Gardens",
    dates: "10 Dates",
    price: "₹22,000",
    emi: "₹1,000/mo",
    image: "https://www.thewindmunnar.com/images/monsoon-Munnar.jpg"
  },
  {
    title: "Munnar & Alleppey",
    path: "/munnar-alleppey",
    days: "6 Days",
    countries: "India",
    cities: "Munnar, Alleppey",
    dates: "8 Dates",
    price: "₹28,000",
    emi: "₹1,300/mo",
    image: "https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2Ftestimage-aby-zachariah-rRnnyVD224U-unsplash.webp&w=1920&q=75"
  },
  {
    title: "Adventure Munnar Trip",
    path: "/munnar-adventure",
    days: "4 Days",
    countries: "India",
    cities: "Munnar Hills",
    dates: "6 Dates",
    price: "₹18,000",
    emi: "₹900/mo",
    image: "https://www.munnar.holiday/munnartourism/wp-content/uploads/2019/04/fun-forest-munnar04.jpg"
  },
  {
    title: "Luxury Munnar Tour",
    path: "/luxury-munnar",
    days: "7 Days",
    countries: "India",
    cities: "Munnar, Kochi",
    dates: "5 Dates",
    price: "₹40,000",
    emi: "₹1,800/mo",
    image: "https://etripto.in/uploads/0000/1/2025/05/26/munnar-tour-package.jpg"
  }
];

const Munnar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>Munnar Tour Packages</h1>

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
              <div><span>🎿</span><p>Activities</p></div>
              <div><span>📄</span><p>Permit</p></div>
            </div>

            <div className="modal-content">
              <p>
                👨‍✈️ Tour includes the services of <b>BNS Holidays</b>.
              </p>

              <p className="note">
                *Transport & hotel included.
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

export default Munnar;