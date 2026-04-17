import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of Guwahati",
    path: "/guwahati-landing",
    days: "4 Days",
    countries: "India",
    cities: "Guwahati, Kamakhya Temple",
    dates: "10 Dates",
    price: "₹18,000",
    emi: "₹900/mo",
    image: "https://www.esikkimtourism.in/wp-content/uploads/2018/07/Guwahati-Agnigarh-Hill.jpg"
  },
  {
    title: "Guwahati & Shillong",
    path: "/guwahati-shillong",
    days: "6 Days",
    countries: "India",
    cities: "Guwahati, Shillong",
    dates: "8 Dates",
    price: "₹28,000",
    emi: "₹1,300/mo",
    image: "https://www.indiantempletour.com/wp-content/uploads/2022/08/gu.jpg"
  },
  {
    title: "Adventure Guwahati Trip",
    path: "/guwahati-adventure",
    days: "4 Days",
    countries: "India",
    cities: "Guwahati",
    dates: "6 Dates",
    price: "₹20,000",
    emi: "₹1,000/mo",
    image: "https://d26dp53kz39178.cloudfront.net/media/uploads/Location_Based_Travel_Guide_Images/image5_result-1657358516425.webp"
  },
  {
    title: "Luxury Guwahati Tour",
    path: "/luxury-guwahati",
    days: "7 Days",
    countries: "India",
    cities: "Guwahati, Kaziranga",
    dates: "5 Dates",
    price: "₹40,000",
    emi: "₹1,800/mo",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/63/2d/cf/mayfair-spring-valley.jpg?w=1200&h=-1&s=1"
  }
];

const Guwahati = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>Guwahati Tour Packages</h1>

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
              <div><span>🛕</span><p>Temple Visit</p></div>
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

export default Guwahati;