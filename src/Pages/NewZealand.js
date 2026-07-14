import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of New Zealand",
    days: "8 Days",
    countries: "1 Country",
    cities: "3 Cities",
    dates: "10 Dates",
    price: "₹1,40,000",
    emi: "₹12,000/mo",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad"
  },
  {
    title: "Auckland & Queenstown",
    days: "6 Days",
    countries: "1 Country",
    cities: "2 Cities",
    dates: "8 Dates",
    price: "₹1,85,000",
    emi: "₹8,200/mo",
    image: "https://images.unsplash.com/photo-1502780402662-acc019177cd3"
  },
  {
    title: "Queenstown Adventure Tour",
    days: "5 Days",
    countries: "1 Country",
    cities: "1 City",
    dates: "6 Dates",
    price: "₹1,65,000",
    emi: "₹7,500/mo",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1"
  },
  {
    title: "Milford Sound Experience",
    days: "7 Days",
    countries: "1 Country",
    cities: "2 Cities",
    dates: "9 Dates",
    price: "₹1,95,000",
    emi: "₹8,800/mo",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  },
  {
    title: "Luxury New Zealand Tour",
    days: "10 Days",
    countries: "1 Country",
    cities: "4 Cities",
    dates: "5 Dates",
    price: "₹2,80,000",
    emi: "₹25,000/mo",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
  }
];

const NewZealand = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>New Zealand Tour Packages</h1>

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
              {tour.title === "Best of New Zealand" ? (
                <Link to="/nz-landing" className="title-link">
                  {tour.title}
                </Link>
              ) : tour.title === "Auckland & Queenstown" ? (
                <Link to="/auckland-queenstown" className="title-link">
                  {tour.title}
                </Link>
              ) : tour.title === "Queenstown Adventure Tour" ? (
                <Link to="/queenstown" className="title-link">
                  {tour.title}
                </Link>
              ) : tour.title === "Milford Sound Experience" ? (
                <Link to="/milford" className="title-link">
                  {tour.title}
                </Link>
              ) : tour.title === "Luxury New Zealand Tour" ? (
                <Link to="/luxury-nz" className="title-link">
                  {tour.title}
                </Link>
              ) : (
                tour.title
              )}
            </h2>

            <div className="rating">
              ⭐⭐⭐⭐⭐ <span>100 Reviews</span>
            </div>

            {showModal && (
              <div className="modal-overlay">
                <div className="modal-box">

                  <div className="modal-header">
                    <h2>Tour Includes</h2>
                    <span className="close-btn" onClick={() => setShowModal(false)}>✕</span>
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
                    <p>👨‍✈️ Tour includes services of <b>BNS Holidays</b>.</p>
                    <p className="note">
                      *Airfare included. Taxes extra.
                    </p>
                  </div>

                </div>
              </div>
            )}

            <p className="inclusive" onClick={() => setShowModal(true)}>
              ∞ All Inclusive
            </p>

            <p className="details">
              {tour.days} • {tour.countries} • {tour.cities}, {tour.dates}
            </p>

            <p className="dates">Dates Filling Fast</p>
          </div>

          {/* RIGHT PRICE */}
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
    </div>
  );
};

export default NewZealand;