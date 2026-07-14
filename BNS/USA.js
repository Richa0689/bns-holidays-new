import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "	USA Panorama East and West Luxury Coach Tour Itinerary",
    days: "13 Days",
    countries: "USA",
    cities: "New York • Philadelphia • Washington, D.C. • Harrisburg • Niagara Falls • Las Vegas • Los Angeles • Fresno •  Francisco",
    dates: "10 Dates",
    price: "₹2,10,000",
    emi: "₹9,500/mo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0El0rRmdIUqkCnMlHpEgqzCjLOXcAhHWuASxwYnGnKEZy_-reL_JJwOI5&s=10",
    link: "/usa-panorama"
  },
  {
    title: "	USA Panorama East and West Luxury Coach Tour Itinerary",
    days: "13 Days ",
    countries: "USA",
    cities: "New York • Philadelphia • Washington, D.C. • Harrisburg • Niagara Falls • Las Vegas • Los Angeles • Fresno •  San Francisco",
    price: "₹1,80,000",
    emi: "₹8,200/mo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4jytCNCdsvr0Wv5Zx2HFyX6HlRyj0fAfyjtzQDor4RA&s=10",
    link: "/golden-west-coast"
  },
  {
    title: "USA GALA East Coast Luxury Coach Tour Itinerary",
    days: "7 Days ",
    countries: "USA",
    cities: "New York • Philadelphia • Washington, D.C. • Harrisburg • Niagara Falls",
    price: "₹1,95,000",
    emi: "₹8,800/mo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHlPR-YXmkzrrhkbGNe8y-lYGnrRuymfsjmmwduuLew&s=10",
    link: "/california"
  },
  {
    title: "GOLDEN WEST COAST 2026 | 6 Nights / 7 Days",
    days: "7 Days",
    countries: "USA",
    cities: "Las Vegas • Los Angeles • Fresno •  San Francisco",
    price: "₹1,60,000",
    emi: "₹7,500/mo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV-109kQnqwFpwiIyok8ru9MMEPRrDU_efDMGZLSmqPA&s=10",
    link: "/vegas-grand-canyon"
  },
  // {
  //   title: "Luxury USA Tour",
  //   days: "12 Days",
  //   countries: "1 Country",
  //   cities: "5 Cities",
  //   dates: "4 Dates",
  //   price: "₹2,80,000",
  //   emi: "₹12,500/mo",
  //   image: "https://b2bzend.s3.ap-south-1.amazonaws.com/img/162492/package/images/usa-panorama-east-west-luxury-coach-tour_1762948249",
  //   link: "/luxury-usa"
  // }
];

const USA = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>USA Tour Packages</h1>

      {tours.map((tour, index) => (
        <div className="tour-card" key={index}>

          <div className="tour-image">
            <span className="badge">Popular Today</span>
            <img src={tour.image} alt={tour.title} />
          </div>

          <div className="tour-info">
            <h2>
              {tour.link ? (
                <Link to={tour.link} className="title-link">{tour.title}</Link>
              ) : (
                tour.title
              )}
            </h2>

            
            <p className="details">
              {tour.days} • {tour.countries} • {tour.cities}, {tour.dates}
            </p>

           
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

      {/*  Modal */}
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

export default USA;