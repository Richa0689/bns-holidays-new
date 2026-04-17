import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of South Goa",
    path: "/southgoa-landing",
    days: "4 Days",
    countries: "India",
    cities: "Colva, Palolem, Benaulim",
    dates: "10 Dates",
    price: "₹20,000",
    emi: "₹1,000/mo",
    image: "https://static.toiimg.com/thumb/msid-113230247,width-748,height-499,resizemode=4,imgsize-220692/.jpg"
  },
  {
    title: "South Goa Beach Escape",
    path: "/southgoa-escape",
    days: "5 Days",
    countries: "India",
    cities: "Palolem, Agonda",
    dates: "8 Dates",
    price: "₹25,000",
    emi: "₹1,200/mo",
    image: "https://7seasfly.com/wp-content/uploads/2024/01/palolem-beach-scaled.jpg"
  },
  {
    title: "Adventure South Goa Trip",
    path: "/southgoa-adventure",
    days: "4 Days",
    countries: "India",
    cities: "South Goa",
    dates: "6 Dates",
    price: "₹22,000",
    emi: "₹1,100/mo",
    image: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_80,w_1536,h_864,r_0,c_crop,q_90,fl_progressive/w_500,f_auto,c_fit/nature-trails-resorts/Family_vacation_Goa_South"
  },
  {
    title: "Luxury South Goa Tour",
    path: "/luxury-southgoa",
    days: "6 Days",
    countries: "India",
    cities: "Palolem, Colva",
    dates: "5 Dates",
    price: "₹38,000",
    emi: "₹1,700/mo",
    image: "https://orchidresortgoa.com/assets/images/blog/blogrussian2-1.webp"
  }
];

const SouthGoa = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>South Goa Tour Packages</h1>

      {tours.map((tour, index) => (
        <div className="tour-card" key={index}>

          {/* IMAGE */}
          <div className="tour-image">
            <span className="badge">Peaceful Goa</span>
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
              ⭐⭐⭐⭐⭐ <span>140 Reviews</span>
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

            <p className="dates">Limited Dates Available</p>
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
              <div><span>🏖️</span><p>Beaches</p></div>
              <div><span>🌴</span><p>Nature</p></div>
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

export default SouthGoa;