import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of Srinagar",
    days: "5 Days",
    countries: "India",
    cities: "Srinagar, Gulmarg",
    dates: "10 Dates",
    price: "₹28,000",
    emi: "₹1,300/mo",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/dal-lake-srinagar-jammu-&-kashmir-2-attr-hero?qlt=82&ts=1726816668703"
  },
  {
    title: "Srinagar & Gulmarg",
    days: "6 Days",
    countries: "India",
    cities: "Srinagar, Gulmarg",
    dates: "8 Dates",
    price: "₹32,000",
    emi: "₹1,500/mo",
    image: "https://www.incredibleindia.gov.in/content/dam/incredible-india/images/trips/jammu-and-kashmir/srinagar/gulmarg-serenity-escape/gulmarg-meadows-srinagar-tri-iter-day1.jpg"
  },
  {
    title: "Srinagar Houseboat Experience",
    days: "4 Days",
    countries: "India",
    cities: "Dal Lake, Srinagar",
    dates: "6 Dates",
    price: "₹25,000",
    emi: "₹1,100/mo",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/7d/c2/43/kashmir-group-of-houseboats.jpg?w=900&h=-1&s=1"
  },
  {
    title: "Luxury Kashmir Tour",
    days: "7 Days",
    countries: "India",
    cities: "Srinagar, Pahalgam, Gulmarg",
    dates: "5 Dates",
    price: "₹45,000",
    emi: "₹2,000/mo",
    image: "https://brownchinarkashmir.com/wp-content/uploads/2024/11/Kashmir_Luxury_Tour_Packages_brown_chinar_kashmir.webp"
  }
];

const Srinagar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>Srinagar Tour Packages</h1>

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
              {tour.title === "Best of Srinagar" ? (
                <Link to="/srinagar-landing" className="title-link">{tour.title}</Link>
              ) : tour.title === "Srinagar & Gulmarg" ? (
                <Link to="/gulmarg" className="title-link">{tour.title}</Link>
              ) : tour.title === "Srinagar Houseboat Experience" ? (
                <Link to="/houseboat" className="title-link">{tour.title}</Link>
              ) : tour.title === "Luxury Kashmir Tour" ? (
                <Link to="/luxury-kashmir" className="title-link">{tour.title}</Link>
              ) : (
                tour.title
              )}
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
              <div><span>🛶</span><p>Houseboat</p></div>
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

export default Srinagar;