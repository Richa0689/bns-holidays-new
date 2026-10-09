import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of Australia",
    days: "8 Days",
    countries: "1 Country",
    cities: "3 Cities",
    dates: "12 Dates",
    price: "₹1,75,000",
    emi: "₹8,500/mo",
    image: "https://cms.gap360.com/storage/thumbs/media/lucky-bay-900x720-fit.jpg"
  },
  {
    title: "Sydney & Melbourne",
    days: "6 Days",
    countries: "1 Country",
    cities: "2 Cities",
    dates: "8 Dates",
    price: "₹1,45,000",
    emi: "₹7,200/mo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6aw7DYMOoOkOdr449QAmMa42fDSjgRYNreA&s"
  },
  {
    title: "Gold Coast Fun Tour",
    days: "5 Days",
    countries: "1 Country",
    cities: "1 City",
    dates: "6 Dates",
    price: "₹1,20,000",
    emi: "₹6,000/mo",
    image: "https://dynamic-media.tacdn.com/media/photo-o/30/3b/6c/1f/caption.jpg?w=2400&h=-1&s=1"
  },
  {
    title: "Great Ocean Road Trip",
    days: "7 Days",
    countries: "1 Country",
    cities: "2 Cities",
    dates: "10 Dates",
    price: "₹1,55,000",
    emi: "₹7,800/mo",
    image: "https://media.gettyimages.com/id/1368895123/video/aerial-view-of-car-driving-on-australia-great-ocean-coastal-road.jpg?s=640x640&k=20&c=836fDXOwJrLntD67SFmiwc6qwf2g_Dplq6VAxkgcdNg="
  },
  {
    title: "Luxury Australia Tour",
    days: "10 Days",
    countries: "1 Country",
    cities: "4 Cities",
    dates: "5 Dates",
    price: "₹2,25,000",
    emi: "₹10,500/mo",
    image: "https://cdn.kimkim.com/files/a/images/ead7bb13dd4e8182a4ca3bd5b1360e40e44c4a4f/original-446044f29d597c41f4478f1e0b9d7a6d.jpg"
  }
];

const Australia = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="tour-container">
      <h1>Australia Tour Packages</h1>

      {tours.map((tour, index) => (
        <div className="tour-card" key={index}>
          

          {/* LEFT IMAGE */}
          <div className="tour-image">
            <span className="badge">Popular Today</span>
            <img src={tour.image} alt={tour.title} />
          </div>

          {/* MIDDLE CONTENT */}
          <div className="tour-info">
            <h2>
  {tour.title === "Best of Australia" ? (
    <Link to="/destinations/australia-tours" className="title-link">
      {tour.title}
    </Link>
  ) : tour.title === "Sydney & Melbourne" ? (
    <Link to="/destinations/sydney-melbourne" className="title-link">
      {tour.title}
    </Link>
  ) : tour.title === "Gold Coast Fun Tour" ? (
    <Link to="/destinations/gold-coast" className="title-link">
      {tour.title}
    </Link>
  ) : tour.title === "Great Ocean Road Trip" ? (
    <Link to="/destinations/great-ocean" className="title-link">
      {tour.title}
    </Link>
  ) : tour.title === "Luxury Australia Tour" ? (
    <Link to="/destinations/luxury-aus" className="title-link">
      {tour.title}
    </Link>
  ) : (
    tour.title
  )}
</h2>
            <div className="rating">
              ⭐⭐⭐⭐⭐ <span>120 Reviews</span>
            </div>
            {showModal && (
  <div className="modal-overlay">
    <div className="modal-box">

      {/* HEADER */}
      <div className="modal-header">
        <h2>Tour Includes</h2>
        <span className="close-btn" onClick={() => setShowModal(false)}>
          ✕
        </span>
      </div>

      {/* ICONS */}
      <div className="icons-row">
        <div><span>🏨</span><p>Hotel</p></div>
        <div><span>🍽️</span><p>Meals</p></div>
        <div><span>✈️</span><p>Flight</p></div>
        <div><span>📷</span><p>Sightseeing</p></div>
        <div><span>🚌</span><p>Transport</p></div>
        <div><span>📄</span><p>Visa</p></div>
      </div>

      {/* CONTENT */}
      <div className="modal-content">
        <p>
          👨‍✈️ Tour includes the services of <b>BNS Holidays</b> .
        </p>

        <p className="note">
          *Except for joining/leaving. To & fro economy class airfare is included for all departure cities.
          <br />
          *Taxes Extra.
        </p>
      </div>

    </div>
  </div>
)}

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

          {/* RIGHT PRICE BOX */}
          <div className="tour-price">
            <p className="start">Starts from</p>
            <h2>{tour.price}</h2>
            <p className="emi">EMI from {tour.emi}</p>

            <button className="book-btn">Book Online</button>
            <button 
            className="whatsapp-btn">
             Share on WhatsApp
            </button>
            <button className="details-btn">View Tour Details</button>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Australia;