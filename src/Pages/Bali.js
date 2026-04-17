import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of Bali",
    days: "6 Days",
    countries: "1 Country",
    cities: "2 Cities",
    dates: "10 Dates",
    price: "₹60,000",
    emi: "₹2,800/mo",
    image: "https://www.goatsontheroad.com/wp-content/uploads/2019/08/hindu-temple-where-to-go-in-bali.jpg"
  },
  {
    title: "Ubud & Kuta Escape",
    days: "5 Days",
    countries: "1 Country",
    cities: "2 Cities",
    dates: "8 Dates",
    price: "₹55,000",
    emi: "₹2,500/mo",
    image: "https://www.xplorejourney.com/wp-content/uploads/2026/02/unnamed-1.jpg"
  },
  {
    title: "Bali Beach Retreat",
    days: "4 Days",
    countries: "1 Country",
    cities: "1 City",
    dates: "6 Dates",
    price: "₹50,000",
    emi: "₹2,300/mo",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/35/e8/66/bali-garden-beach-resort.jpg?w=900&h=500&s=1"
  },
  {
    title: "Bali Adventure Tour",
    days: "5 Days",
    countries: "1 Country",
    cities: "2 Cities",
    dates: "7 Dates",
    price: "₹58,000",
    emi: "₹2,600/mo",
    image: "https://i0.wp.com/inclusivebalitour.com/wp-content/uploads/2019/07/ATV-Ride-Adventure.jpg?resize=474%2C284&ssl=1"
  },
  {
    title: "Luxury Bali Tour",
    days: "7 Days",
    countries: "1 Country",
    cities: "3 Cities",
    dates: "4 Dates",
    price: "₹95,000",
    emi: "₹4,500/mo",
    image: "https://www.viceroybali.com/wp-content/uploads/2024/10/Luxury-Bali-Itinerary-1.png"
  }
];

const Bali = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>Bali Tour Packages</h1>

      {tours.map((tour, index) => (
        <div className="tour-card" key={index}>

          <div className="tour-image">
            <span className="badge">Popular Today</span>
            <img src={tour.image} alt={tour.title} />
          </div>

          <div className="tour-info">
            <h2>
              {tour.title === "Best of Bali" ? (
                <Link to="/bali-landing" className="title-link">{tour.title}</Link>
              ) : tour.title === "Ubud & Kuta Escape" ? (
                <Link to="/ubud-kuta" className="title-link">{tour.title}</Link>
              ) : tour.title === "Bali Beach Retreat" ? (
                <Link to="/bali-beach" className="title-link">{tour.title}</Link>
              ) : tour.title === "Bali Adventure Tour" ? (
                <Link to="/bali-adventure" className="title-link">{tour.title}</Link>
              ) : tour.title === "Luxury Bali Tour" ? (
                <Link to="/luxury-bali" className="title-link">{tour.title}</Link>
              ) : (
                tour.title
              )}
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

export default Bali;