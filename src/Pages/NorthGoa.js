import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of North Goa",
    path: "/northgoa-landing",
    days: "4 Days",
    countries: "India",
    cities: "Baga, Calangute, Anjuna",
    dates: "10 Dates",
    price: "₹18,000",
    emi: "₹900/mo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5sxoybx5Zt4kLCZQiDms57jdp8P-2bwio-Q&s"
  },
  {
    title: "North Goa Beach Party",
    path: "/northgoa-party",
    days: "5 Days",
    countries: "India",
    cities: "Baga, Anjuna",
    dates: "8 Dates",
    price: "₹22,000",
    emi: "₹1,100/mo",
    image: "https://img.avianexperiences.com/trek/93d00296-e382-4e40-b4b5-aa24f27403e0"
  },
  {
    title: "Adventure North Goa Trip",
    path: "/northgoa-adventure",
    days: "4 Days",
    countries: "India",
    cities: "North Goa",
    dates: "6 Dates",
    price: "₹20,000",
    emi: "₹1,000/mo",
    image: "https://media1.thrillophilia.com/filestore/pfjjpcm0q3ryva2eak63xp5994ku_1463255744_Screen_Shot_2016-05-15_at_1.25.28_AM.png.jpg?w=400&dpr=2"
  },
  {
    title: "Luxury North Goa Tour",
    path: "/luxury-northgoa",
    days: "6 Days",
    countries: "India",
    cities: "North Goa, Candolim",
    dates: "5 Dates",
    price: "₹35,000",
    emi: "₹1,600/mo",
    image: "https://cdn.thegoavilla.com/static/img/articles/hotels-grand-hyatt-goa.jpg"
  }
];

const NorthGoa = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>North Goa Tour Packages</h1>

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
              ⭐⭐⭐⭐⭐ <span>150 Reviews</span>
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
              <div><span>🏖️</span><p>Beach Tour</p></div>
              <div><span>🎉</span><p>Party</p></div>
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

export default NorthGoa;