import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of Spiti Valley",
    days: "7 Days",
    countries: "India",
    cities: "Kaza, Key Monastery, Chandratal",
    dates: "10 Dates",
    price: "₹35,000",
    emi: "₹1,800/mo",
    image: "https://bloominghimalaya.com/wp-content/uploads/2025/01/spiti.jpeg"
  },
  {
    title: "Spiti Adventure Trip",
    days: "6 Days",
    countries: "India",
    cities: "Kaza, Hikkim, Langza",
    dates: "8 Dates",
    price: "₹30,000",
    emi: "₹1,500/mo",
    image: "https://himtrek.co.in/wp-content/uploads/2024/08/Winter-Spiti.webp"
  },
  {
    title: "Chandratal Lake Tour",
    days: "5 Days",
    countries: "India",
    cities: "Chandratal, Kunzum Pass",
    dates: "6 Dates",
    price: "₹28,000",
    emi: "₹1,300/mo",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/b0/24/45/view-of-chandertaal-from.jpg?w=900&h=-1&s=1"
  },
  {
    title: "Luxury Spiti Tour",
    days: "8 Days",
    countries: "India",
    cities: "Manali, Kaza, Chandratal",
    dates: "5 Dates",
    price: "₹45,000",
    emi: "₹2,200/mo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwEqTlx5wNZ79B6K80QPwhP7ZvlmFrj3mT4w&s"
  }
];

const Spiti = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>Spiti Valley Tour Packages</h1>

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
              {tour.title === "Best of Spiti Valley" ? (
                <Link to="/spiti-landing" className="title-link">{tour.title}</Link>
              ) : tour.title === "Spiti Adventure Trip" ? (
                <Link to="/spiti-adventure" className="title-link">{tour.title}</Link>
              ) : tour.title === "Chandratal Lake Tour" ? (
                <Link to="/chandratal" className="title-link">{tour.title}</Link>
              ) : tour.title === "Luxury Spiti Tour" ? (
                <Link to="/luxury-spiti" className="title-link">{tour.title}</Link>
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
              <div><span>🚙</span><p>Transport</p></div>
              <div><span>📷</span><p>Sightseeing</p></div>
              <div><span>🏔️</span><p>Adventure</p></div>
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

export default Spiti;