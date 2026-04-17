import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of Gangtok",
    path: "/gangtok-landing",
    days: "5 Days",
    countries: "India",
    cities: "Gangtok, Tsomgo Lake",
    dates: "10 Dates",
    price: "₹25,000",
    emi: "₹1,200/mo",
    image: "https://www.trawell.in/images/tours/Sikkim.jpg"
  },
  {
    title: "Gangtok & Nathula Pass",
    path: "/gangtok-nathula",
    days: "6 Days",
    countries: "India",
    cities: "Gangtok, Nathula Pass",
    dates: "8 Dates",
    price: "₹30,000",
    emi: "₹1,500/mo",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/nathu-la-pass-gangtok-sikkim-2-attr-hero?qlt=82&ts=1742153295335"
  },
  {
    title: "Adventure Gangtok Trip",
    path: "/gangtok-adventure",
    days: "4 Days",
    countries: "India",
    cities: "Gangtok",
    dates: "6 Dates",
    price: "₹20,000",
    emi: "₹1,000/mo",
    image: "https://www.esikkimtourism.in/wp-content/uploads/2019/05/adventure-tourism-sikkim-tts-230x202.jpg"
  },
  {
    title: "Luxury Gangtok Tour",
    path: "/luxury-gangtok",
    days: "7 Days",
    countries: "India",
    cities: "Gangtok, Lachung",
    dates: "5 Dates",
    price: "₹40,000",
    emi: "₹1,800/mo",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/2e/0a/e1/af/caption.jpg"
  }
];

const Gangtok = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>Gangtok Tour Packages</h1>

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
              <div><span>🏔️</span><p>Mountains</p></div>
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

export default Gangtok;