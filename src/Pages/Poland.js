import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of Poland",
    days: "8 Days",
    countries: "1 Country",
    cities: "Warsaw, Krakow, Gdansk",
    dates: "10 Dates",
    price: "₹1,60,000",
    emi: "₹7,200/mo",
    image: "https://www.gokitetours.com/wp-content/uploads/2024/07/The-Best-places-to-visit-in-Poland.webp"
  },
  {
    title: "Warsaw & Krakow Tour",
    days: "6 Days",
    countries: "1 Country",
    cities: "Warsaw, Krakow",
    dates: "8 Dates",
    price: "₹1,30,000",
    emi: "₹6,000/mo",
    image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/33/a6/2b.jpg"
  },
  {
    title: "Krakow Heritage Tour",
    days: "5 Days",
    countries: "1 Country",
    cities: "Krakow",
    dates: "6 Dates",
    price: "₹1,10,000",
    emi: "₹5,200/mo",
    image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/b0/38/7a.jpg"
  },
  {
    title: "Gdansk Coastal Tour",
    days: "7 Days",
    countries: "1 Country",
    cities: "Gdansk, Sopot",
    dates: "7 Dates",
    price: "₹1,45,000",
    emi: "₹6,800/mo",
    image: "https://thetravelmum.com/content/uploads/2024/09/gdansk-7505686_1280-e1726868178338.jpg"
  },
  {
    title: "Luxury Poland Tour",
    days: "10 Days",
    countries: "1 Country",
    cities: "Warsaw, Krakow, Zakopane",
    dates: "5 Dates",
    price: "₹2,10,000",
    emi: "₹9,500/mo",
    image: "https://cdn.shopify.com/s/files/1/0708/9225/7595/files/Moszna_Castle_Zamkowa_1_47-370_Moszna_Poland_480x480.jpg?v=1675069643"
  }
];

const Poland = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>Poland Tour Packages</h1>

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
              {tour.title === "Best of Poland" ? (
                <Link to="/poland-landing" className="title-link">{tour.title}</Link>
              ) : tour.title === "Warsaw & Krakow Tour" ? (
                <Link to="/warsaw-krakow" className="title-link">{tour.title}</Link>
              ) : tour.title === "Krakow Heritage Tour" ? (
                <Link to="/krakow" className="title-link">{tour.title}</Link>
              ) : tour.title === "Gdansk Coastal Tour" ? (
                <Link to="/gdansk" className="title-link">{tour.title}</Link>
              ) : tour.title === "Luxury Poland Tour" ? (
                <Link to="/luxury-poland" className="title-link">{tour.title}</Link>
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

      {/* MODAL (same as USA) */}
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

export default Poland;