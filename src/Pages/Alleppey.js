import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of Alleppey",
    path: "/alleppey-landing",
    days: "4 Days",
    countries: "India",
    cities: "Alleppey, Backwaters",
    dates: "10 Dates",
    price: "₹18,000",
    emi: "₹900/mo",
    image: "https://www.trawell.in/images/tours/Alleppey.jpg"
  },
  {
    title: "Alleppey Houseboat Experience",
    path: "/houseboat-alleppey",
    days: "3 Days",
    countries: "India",
    cities: "Alleppey",
    dates: "8 Dates",
    price: "₹15,000",
    emi: "₹700/mo",
    image: "https://alleppeyhouseboatclub.com/wp-content/uploads/2018/03/IMG_01181-680x300.jpg"
  },
  {
    title: "Alleppey & Kumarakom",
    path: "/alleppey-kumarakom",
    days: "5 Days",
    countries: "India",
    cities: "Alleppey, Kumarakom",
    dates: "6 Dates",
    price: "₹22,000",
    emi: "₹1,100/mo",
    image: "https://alleppeyhouseboatclub.com/wp-content/uploads/2019/01/backwater-view.jpg"
  },
  {
    title: "Luxury Alleppey Tour",
    path: "/luxury-alleppey",
    days: "6 Days",
    countries: "India",
    cities: "Alleppey, Kochi",
    dates: "5 Dates",
    price: "₹35,000",
    emi: "₹1,600/mo",
    image: "https://gos3.ibcdn.com/db5d3758-0d75-4798-bfab-c387ba45f3ef.png"
  }
];

const Alleppey = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>Alleppey Tour Packages</h1>

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
              <div><span>🚤</span><p>Houseboat</p></div>
              <div><span>📷</span><p>Sightseeing</p></div>
              <div><span>🚗</span><p>Transport</p></div>
              <div><span>📄</span><p>Permit</p></div>
            </div>

            <div className="modal-content">
              <p>
                👨‍✈️ Tour includes the services of <b>BNS Holidays</b>.
              </p>

              <p className="note">
                *Houseboat stay included.
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

export default Alleppey;