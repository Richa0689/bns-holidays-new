import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of Germany",
    path: "/germany-landing",
    days: "7 Days",
    countries: "1 Country",
    cities: "3 Cities",
    dates: "10 Dates",
    price: "₹1,60,000",
    emi: "₹7,000/mo",
    image: "https://www.trafalgar.com/media/bf4ly2mp/best-germany-guided-tour-1.jpg"
  },
  {
    title: "Berlin & Munich",
    path: "/berlin-munich",
    days: "6 Days",
    countries: "1 Country",
    cities: "2 Cities",
    dates: "8 Dates",
    price: "₹1,45,000",
    emi: "₹6,500/mo",
    image: "https://cdn.kimkim.com/files/a/images/83e21b71cad48cd7a72f7f6ae8ed2d1912dfee00/original-2787002f697517df1c1dd3ec68c5a1d7.jpg"
  },
  {
    title: " Rhine Tour",
    path: "/rhine-tour",
    days: "5 Days",
    countries: "1 Country",
    cities: "2 Cities",
    dates: "7 Dates",
    price: "₹1,35,000",
    emi: "₹6,000/mo",
    image: "https://cdn.adventure-life.com/14/36/93/rhine_river/1300x820.webp"
  },
  {
    title: "Bavarian Alps Escape",
    path: "/bavarian-alps",
    days: "5 Days",
    countries: "1 Country",
    cities: "2 Cities",
    dates: "6 Dates",
    price: "₹1,50,000",
    emi: "₹6,800/mo",
    image: "https://i.natgeofe.com/n/c5177c9b-a1b8-42a7-8988-9a0dd2985f0e/Germany_GBY5PM_HR.jpg"
  },
  {
    title: "Luxury Germany Tour",
    path: "/luxury-germany",
    days: "9 Days",
    countries: "1 Country",
    cities: "4 Cities",
    dates: "4 Dates",
    price: "₹2,20,000",
    emi: "₹9,500/mo",
    image: "https://www.zicasso.com/static/7486d78c49a2bd7d8d575ac5f23ac9b1/d6a2b/7486d78c49a2bd7d8d575ac5f23ac9b1.jpg"
  }
];

const Germany = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>Germany Tour Packages</h1>

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
              <span className="close-btn" onClick={() => setShowModal(false)}>
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

export default Germany;