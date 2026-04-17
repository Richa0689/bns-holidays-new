import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of Udaipur",
    path: "/udaipur-landing",
    days: "4 Days",
    countries: "India",
    cities: "Udaipur, Lake Pichola",
    dates: "10 Dates",
    price: "₹20,000",
    emi: "₹1,000/mo",
    image: "https://www.awaygowe.com/wp-content/uploads/2012/09/udaipur-things-to-do-10.jpg"
  },
  {
    title: "Udaipur & Mount Abu",
    path: "/udaipur-mountabu",
    days: "6 Days",
    countries: "India",
    cities: "Udaipur, Mount Abu",
    dates: "8 Dates",
    price: "₹28,000",
    emi: "₹1,300/mo",
    image: "https://www.indianholiday.com/wordpress/wp-content/uploads/2025/06/Mount-Abu-intro.jpg"
  },
  {
    title: "Adventure Udaipur Trip",
    path: "/udaipur-adventure",
    days: "4 Days",
    countries: "India",
    cities: "Udaipur",
    dates: "6 Dates",
    price: "₹22,000",
    emi: "₹1,100/mo",
    image: "https://simartourandtravels.com/wp-content/uploads/2025/02/aerial-view-of-lake-pichola-with-lake-palace-jag-2021-08-26-22-58-05-utc-pmmi2d677j24zea7lk5p7lkjes4o2pcxuv3h2nmig0.jpg"
  },
  {
    title: "Luxury Udaipur Tour",
    path: "/luxury-udaipur",
    days: "7 Days",
    countries: "India",
    cities: "Udaipur, Kumbhalgarh",
    dates: "5 Dates",
    price: "₹42,000",
    emi: "₹1,900/mo",
    image: "https://cdn.esquireindia.co.in/article/2025-08-27T11%3A29%3A12.540Z-LEAD%20Facade_4%20copia.jpg"
  }
];

const Udaipur = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>Udaipur Tour Packages</h1>

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
              <div><span>🌊</span><p>Lake Tour</p></div>
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

export default Udaipur;