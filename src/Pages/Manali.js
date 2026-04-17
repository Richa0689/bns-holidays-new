import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of Manali",
    path: "/manali-landing",
    days: "5 Days",
    countries: "India",
    cities: "Manali, Solang Valley",
    dates: "10 Dates",
    price: "₹25,000",
    emi: "₹1,200/mo",
    image: "https://www.justahotels.com/wp-content/uploads/2023/10/Places-To-Visit-in-Manali.jpg"
  },
  {
    title: "Manali & Rohtang Pass",
    path: "/rohtang-landing",
    days: "6 Days",
    countries: "India",
    cities: "Manali, Rohtang Pass",
    dates: "8 Dates",
    price: "₹30,000",
    emi: "₹1,500/mo",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/rohtang-pass-manali-himachal-pradesh-1-attr-hero?qlt=82&ts=1726730701545"
  },
  {
    title: "Adventure Manali Tour",
    path: "/manali-adventure",
    days: "4 Days",
    countries: "India",
    cities: "Manali",
    dates: "6 Dates",
    price: "₹20,000",
    emi: "₹1,000/mo",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/The-Best-Adventure-Experiences-in-Manali1-hero?qlt=82&ts=1726731002736"
  },
  {
    title: "Luxury Manali Tour",
    path: "/luxury-manali",
    days: "7 Days",
    countries: "India",
    cities: "Manali, Kasol",
    dates: "5 Dates",
    price: "₹45,000",
    emi: "₹2,000/mo",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/29/13/4a/f0/tiaraa-hotels-resorts.jpg"
  }
];

const Manali = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>Manali Tour Packages</h1>

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

export default Manali;