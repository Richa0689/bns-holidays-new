import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of Ooty",
    path: "/ooty-landing",
    days: "4 Days",
    countries: "India",
    cities: "Ooty, Botanical Garden",
    dates: "10 Dates",
    price: "₹18,000",
    emi: "₹900/mo",
    image: "https://hikerwolf.com/wp-content/uploads/2020/06/Ooty.jpg"
  },
  {
    title: "Ooty & Coonoor",
    path: "/ooty-coonoor",
    days: "5 Days",
    countries: "India",
    cities: "Ooty, Coonoor",
    dates: "8 Dates",
    price: "₹22,000",
    emi: "₹1,100/mo",
    image: "https://www.stayvista.com/blog/wp-content/uploads/2023/10/ooty1.jpeg"
  },
  {
    title: "Adventure Ooty Trip",
    path: "/ooty-adventure",
    days: "3 Days",
    countries: "India",
    cities: "Ooty Hills",
    dates: "6 Dates",
    price: "₹15,000",
    emi: "₹700/mo",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/70/af/e2/refreshing-adventure.jpg?w=900&h=-1&s=1"
  },
  {
    title: "Luxury Ooty Tour",
    path: "/luxury-ooty",
    days: "6 Days",
    countries: "India",
    cities: "Ooty, Coonoor",
    dates: "5 Dates",
    price: "₹35,000",
    emi: "₹1,800/mo",
    image: "https://ootytourism.co.in/images/v2/packages/luxury-ooty-tour-package-for-1-night-2-days-header.jpg"
  }
];

const Ooty = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>Ooty Tour Packages</h1>

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
              <div><span>🎯</span><p>Activities</p></div>
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

export default Ooty;