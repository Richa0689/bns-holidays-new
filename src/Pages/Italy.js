import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of Italy",
    path: "/italy-landing",
    days: "7 Days",
    countries: "1 Country",
    cities: "3 Cities",
    dates: "10 Dates",
    price: "₹1,70,000",
    emi: "₹7,500/mo",
    image: "https://www.onthegotours.com/repository/Cinque-Terra--Best-places-to-visit-in-Italy--On-The-Go-Tours-352391500906401.jpg"
  },
  {
    title: "Rome & Venice",
    path: "/rome-venice",
    days: "6 Days",
    countries: "1 Country",
    cities: "2 Cities",
    dates: "8 Dates",
    price: "₹1,55,000",
    emi: "₹6,800/mo",
    image: "https://cdn-imgix.headout.com/media/images/4e9e91d55aa1ad249b135d0a1cee46d8-Grand%20Canal%20Venice.jpg"
  },
  {
    title: "Florence Art Tour",
    path: "/florence-tour",
    days: "5 Days",
    countries: "1 Country",
    cities: "1 City",
    dates: "7 Dates",
    price: "₹1,40,000",
    emi: "₹6,200/mo",
    image: "https://media.tacdn.com/media/attractions-splice-spp-720x480/07/1d/59/ad.jpg"
  },
  {
    title: "Amalfi Coast Escape",
    path: "/amalfi-coast",
    days: "5 Days",
    countries: "1 Country",
    cities: "2 Cities",
    dates: "6 Dates",
    price: "₹1,60,000",
    emi: "₹7,000/mo",
    image: "https://greeking.me/images/galleries/The-Great-Italian-Coastline-Escape/amalfi-coast.jpg"
  },
  {
    title: "Luxury Italy Tour",
    path: "/luxury-italy",
    days: "9 Days",
    countries: "1 Country",
    cities: "4 Cities",
    dates: "4 Dates",
    price: "₹2,40,000",
    emi: "₹10,500/mo",
    image: "https://luxoitalia.com/wp-content/uploads/2023/08/Luxury-Italy-Vacations-Tips.jpg"
  }
];

const Italy = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>Italy Tour Packages</h1>

      {tours.map((tour, index) => (
        <div className="tour-card" key={index}>

          <div className="tour-image">
            <span className="badge">Popular Today</span>
            <img src={tour.image} alt={tour.title} />
          </div>

          <div className="tour-info">
            <h2>
              <Link to={tour.path} className="title-link">
                {tour.title}
              </Link>
            </h2>

            <div className="rating">
              ⭐⭐⭐⭐⭐ <span>110 Reviews</span>
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

export default Italy;