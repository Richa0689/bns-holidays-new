import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of Gulmarg",
    days: "6 Days",
    countries: "India",
    cities: "Gulmarg, Srinagar",
    dates: "10 Dates",
    price: "₹22,000",
    emi: "₹1,000/mo",
    image: "https://tripmore.in/wp-content/uploads/2022/04/Gulmarg-Beautiful-1024x1024.jpg"
  },
  {
    title: "Gulmarg Snow Adventure",
    days: "5 Days",
    countries: "India",
    cities: "Gulmarg",
    dates: "8 Dates",
    price: "₹28,000",
    emi: "₹1,300/mo",
    image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXd5KPWLEfzy0OPNHRHu0-T5M_yRV6QjglyDiV5qmlk1I2S5FD5kHIS2SMGtHbnKmAz5KP6Ge3c9B7b5WAva4XV7dQyQzZxk3CSNC51khtRKWqEvr18k6WphiRZA1mrVHy2KWriRp38WDuSsY5xKdGYFNN2n?key=-qpx1yRVl0il97PXB2RYvA"
  },
  {
    title: "Gulmarg Ski Experience",
    days: "6 Days",
    countries: "India",
    cities: "Gulmarg, Tangmarg",
    dates: "6 Dates",
    price: "₹35,000",
    emi: "₹1,600/mo",
    image: "https://brownchinarkashmir.com/wp-content/uploads/2024/11/ice_skating_in_gulmarg_brown_chinar_kashmir.webp"
  },
  {
    title: "Luxury Gulmarg Tour",
    days: "7 Days",
    countries: "India",
    cities: "Gulmarg, Srinagar, Pahalgam",
    dates: "5 Dates",
    price: "₹50,000",
    emi: "₹2,200/mo",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/11/3a/04/1a/the-khyber-himalayan.jpg"
  }
];

const Gulmarg = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>Gulmarg Tour Packages</h1>

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
              {tour.title === "Best of Gulmarg" ? (
                <Link to="/gulmarg" className="title-link">
                  {tour.title}
                </Link>
              ) : tour.title === "Gulmarg Snow Adventure" ? (
                <Link to="/gulmarg-snow-adventure" className="title-link">
                  {tour.title}
                </Link>
              ) : tour.title === "Gulmarg Ski Experience" ? (
                <Link to="/gulmarg-ski-experience" className="title-link">
                  {tour.title}
                </Link>
              ) : tour.title === "Luxury Gulmarg Tour" ? (
                <Link to="/luxury-gulmarg" className="title-link">
                  {tour.title}
                </Link>
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
              <div><span>🎿</span><p>Ski Equipment</p></div>
              <div><span>📷</span><p>Sightseeing</p></div>
              <div><span>📄</span><p>Permit</p></div>
            </div>

            <div className="modal-content">
              <p>
                👨‍✈️ Tour includes the services of <b>BNS Holidays</b>.
              </p>

              <p className="note">
                *Accommodation & transport included.
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

export default Gulmarg;