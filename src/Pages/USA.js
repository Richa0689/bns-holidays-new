import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of USA",
    days: "9 Days",
    countries: "1 Country",
    cities: "4 Cities",
    dates: "10 Dates",
    price: "₹2,10,000",
    emi: "₹9,500/mo",
    image: "https://k1047.com/uploads/2022/04/statue-of-liberty-992552_1920.jpg?format=webp&optimize=high&precrop=16%3A9%2Csmart"
  },
  {
    title: "New York & Washington",
    days: "6 Days",
    countries: "1 Country",
    cities: "2 Cities",
    dates: "8 Dates",
    price: "₹1,80,000",
    emi: "₹8,200/mo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJzlPYkFjzky1uQxRGpM_KcMZ1rqe7z6Otcw&s"
  },
  {
    title: "California Dream Tour",
    days: "7 Days",
    countries: "1 Country",
    cities: "3 Cities",
    dates: "6 Dates",
    price: "₹1,95,000",
    emi: "₹8,800/mo",
    image: "https://cdn.shortpixel.ai/spai/q_+w_973+to_webp+ret_img/www.california-tour.com/wp-content/uploads/thumbnails/california.jpg"
  },
  {
    title: "Las Vegas & Grand Canyon",
    days: "5 Days",
    countries: "1 Country",
    cities: "2 Cities",
    dates: "7 Dates",
    price: "₹1,60,000",
    emi: "₹7,500/mo",
    image: "https://localadventurer.com/wp-content/uploads/2020/09/grand-canyon-glass-bridge.jpg"
  },
  {
    title: "Luxury USA Tour",
    days: "12 Days",
    countries: "1 Country",
    cities: "5 Cities",
    dates: "4 Dates",
    price: "₹2,80,000",
    emi: "₹12,500/mo",
    image: "https://b2bzend.s3.ap-south-1.amazonaws.com/img/162492/package/images/usa-panorama-east-west-luxury-coach-tour_1762948249"
  }
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
  {tour.title === "Best of USA" ? (
    <Link to="/usa-landing" className="title-link">{tour.title}</Link>
  ) : tour.title === "New York & Washington" ? (
    <Link to="/ny-washington" className="title-link">{tour.title}</Link>
  ) : tour.title === "California Dream Tour" ? (
    <Link to="/california" className="title-link">{tour.title}</Link>
  ) : tour.title === "Las Vegas & Grand Canyon" ? (
    <Link to="/vegas-grand" className="title-link">{tour.title}</Link>
  ) : tour.title === "Luxury USA Tour" ? (
    <Link to="/luxury-usa" className="title-link">{tour.title}</Link>
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