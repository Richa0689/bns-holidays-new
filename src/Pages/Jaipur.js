import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of Jaipur",
    path: "/jaipur-landing",
    days: "4 Days",
    countries: "India",
    cities: "Jaipur, Amber Fort",
    dates: "10 Dates",
    price: "₹18,000",
    emi: "₹900/mo",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/d3/a8/57/images-30-largejpg.jpg?w=500&h=-1&s=1"
  },
  {
    title: "Jaipur & Udaipur",
    path: "/jaipur-udaipur",
    days: "6 Days",
    countries: "India",
    cities: "Jaipur, Udaipur",
    dates: "8 Dates",
    price: "₹28,000",
    emi: "₹1,300/mo",
    image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0e/ee/43/23.jpg"
  },
  {
    title: "Adventure Jaipur Trip",
    path: "/jaipur-adventure",
    days: "4 Days",
    countries: "India",
    cities: "Jaipur",
    dates: "6 Dates",
    price: "₹20,000",
    emi: "₹1,000/mo",
    image: "https://www.jaipurtaxiservice.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fx7ulapdbp%2Fblogs%2FAll.jpg&w=3840&q=75"
  },
  {
    title: "Luxury Jaipur Tour",
    path: "/luxury-jaipur",
    days: "7 Days",
    countries: "India",
    cities: "Jaipur, Jodhpur",
    dates: "5 Dates",
    price: "₹40,000",
    emi: "₹1,800/mo",
    image: "https://d3vp2rl7047vsp.cloudfront.net/articles/article_images/000/000/022/original/Bike-Trip-Exploring-Jaipur-City-Palace_%28Large%29.jpg?1726214295"
  }
];

const Jaipur = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>Jaipur Tour Packages</h1>

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
              <div><span>🏰</span><p>Heritage Visit</p></div>
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

export default Jaipur;