import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const polandTours = [
  {
    title: "Classic Poland Escape: Warsaw & Kraków Highlights ",
    path: "/poland-landing2",
    days: "7 Days",
    countries: "POLAND",
    cities: "Warsaw, Krakow",
    dates: "5 Dates",
    price: "₹3,20,000",
    emi: "₹14,500/mo",
    image:
      "https://cdn.britannica.com/26/115026-050-58B62437/Gdansk-Poland.jpg"
  },
   {
    title: "Classic Europe Escape: Warsaw & Prague Highlights",
    path: "/poland-landing3",
    days: "6 Days",
    countries: "POLAND + CZECH REPUBLIC",
    cities: "Warsaw, Prague",
    dates: "5 Dates",
    price: "₹3,20,000",
    emi: "₹14,500/mo",
    image:
      "https://hoppingfeet.com/wp-content/uploads/2024/02/IMG_5949-scaled.jpg"
  }
];

const PolandLanding = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">

      <h1>Poland Tour Packages</h1>

      {polandTours.map((tour, index) => (
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

            <p className="details">
              {tour.days} • {tour.countries} • {tour.cities}, {tour.dates}
            </p>

          </div>

          {/* PRICE */}
          <div className="tour-price">
            <p className="start">Starts from</p>

            <h2>{tour.price}</h2>

            <p className="emi">
              EMI from {tour.emi}
            </p>

            <button className="book-btn">
              Send Query
            </button>

            <button className="whatsapp-btn">
              Share on WhatsApp
            </button>

            <button className="details-btn">
              View Tour Details
            </button>
          </div>

        </div>
      ))}

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">

          <div className="modal-box">

            <div className="modal-header">
              <h2>Tour Includes</h2>

              <span
                className="close-btn"
                onClick={() => setShowModal(false)}
              >
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
                *Except for joining/leaving.
                To & fro economy class airfare is included.
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

export default PolandLanding;