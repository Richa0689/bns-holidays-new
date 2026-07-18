import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of Finland & Sweden",
    path: "/Finland-Sweden",
    days: "5 Days",
    countries: "FINLAND + SWEDEN",
    cities: "2N Helsinki + 2N Stockholm",
    // dates: "10 Dates",
    price: "₹1,50,000",
    emi: "₹6,500/mo",
    image: "https://blog.sothebysrealty.co.uk/hubfs/Imported_Blog_Media/Best%20Places%20to%20Live%20in%20France-jpg.jpg"
  },
  {
    title: "Scandinavian Capitals Express",
    path: "/Capitals-Express",
    days: "7 Days",
    countries: "FINLAND + SWEDEN + NORWAY",
    cities: "02 Helsinki + 02 Stockholm +02 Oslo",
    // // dates: "8 Dates",
    price: "₹1,30,000",
    emi: "₹5,800/mo",
    image: "https://cdn.kimkim.com/files/a/content_articles/featured_photos/dd6ddfda2f79e54577a7586f0e0e64f8f2dd6b22/big-be78cf32de7dd606fb7545f2a1a3edc4.jpg"
  },
 
  {
    title: "Finland Getaway Plus",
    path: "/Getaway-Plus",
    days: "9 Days",
    countries: "FINLAND",
    cities: "3N Helsinki + 3N Rovaniemi + 2N Saarisellka",
    // // dates: "7 Dates",
    price: "₹1,40,000",
    emi: "₹6,000/mo",
    image: "https://68c8648dbe66747498d1-6027f91c84d2b73bebfc9b6bc4f4a0ac.ssl.cf3.rackcdn.com/67bddc3476123130a4db5771/T2624mobilemin.jpg"
  },
  {
    title: "Mesmerizing Finland and Sweden",
    path: "/Mesmerizing-Finland",
    days: "9 Days",
    countries: "FINLAND + SWEDEN",
    cities: "3N Helsinki + 3N Rovaniemi + 2N Stockholm",
    // // dates: "4 Dates",
    price: "₹2,20,000",
    emi: "₹9,500/mo",
    image: "https://cdn.kimkim.com/files/a/images/f068c86e373068d590006230a0745ae509f8e078/original-d2ab525ac3f8d54f51995c790915bcdb.jpg"
  }
];

const France = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>France Tour Packages</h1>

      {tours.map((tour, index) => (
        <div className="tour-card" key={index}>

          {/* Image */}
          <div className="tour-image">
            <span className="badge">Popular Today</span>
            <img src={tour.image} alt={tour.title} />
          </div>

          {/* Info */}
          <div className="tour-info">
            <h2>
              <Link to={tour.path} className="title-link">
                {tour.title}
              </Link>
            </h2>

            <div className="rating">
              ⭐⭐⭐⭐⭐ <span>105 Reviews</span>
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

          {/* Price */}
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

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">

            <div className="modal-header">
              <h2>Tour Includes</h2>
              <span
                className="close-btn"
                onClick={() => setShowModal(false)}
              >
                ✕
              </span>
            </div>

            <div className="icons-row">
              <div><span>🏨</span><p>Hotel</p></div>
              <div><span>🍽️</span><p>Meals</p></div>
              <div><span>✈️</span><p>Flight</p></div>
              <div><span>📷</span><p>Sightseeing</p></div>
              <div><span>🚌</span><p>Transport</p></div>
              <div><span>📄</span><p>Visa</p></div>
            </div>

            <div className="modal-content">
              <p>
                👨‍✈️ Tour includes the services of <b>BNS Holidays</b>.
              </p>

              <p className="note">
                *Except for joining/leaving. To & fro economy class airfare is included.
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

export default France;