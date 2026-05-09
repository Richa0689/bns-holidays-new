import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Kerala Tour Munnar",
    path: "/munnar-landing",
    days: "6 Days",
    countries: "India",
    cities: "Munnar,Thekkady,Kumarakom,Cochin",
    dates: "8 Dates",
    price: "₹14,000",
    emi: "₹700/mo",
    image: "https://www.holidify.com/images/bgImages/MUNNAR.jpg"
  },
  {
    title: "Kerala Tour Cochin",
    path: "/cochin-landing",
    days: "7 Days",
    countries: "India",
    cities: "Cochin,Thekkady,Kumarakom,Kovalam",
    dates: "10 Dates",
    price: "₹12,000",
    emi: "₹600/mo",
    image: "https://www.holidify.com/images/bgImages/ALLEPPEY.jpg"
  },
  {
    title: "Kerala Tour Alleppey",
    path: "/alleppey-landing",
    days: "8 Days",
    countries: "India",
    cities: "Thekkady,Alleppey,Kovalam,Trivandrum",
    dates: "6 Dates",
    price: "₹15,000",
    emi: "₹750/mo",
    image: "https://www.holidify.com/images/bgImages/KOCHI.jpg"
  }
];

const KeralaTours = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>Kerala Tour Packages</h1>

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
              <div><span>🌴</span><p>Backwaters</p></div>
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

export default KeralaTours;