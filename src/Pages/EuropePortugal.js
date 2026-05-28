import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const portugalTours = [
  {
    title: "Best of Seville + Lisbon + Porto || 05 Nights/06 Days",
    path: "/portugal-landing-1",
    days: "8 Days",
    countries: "SPAIN + PORTUGAL",
    cities: "Lisbon, Porto, Sintra & Algarve",
    dates: "6 Dates",
    price: "₹1,20,000",
    emi: "₹5,600/mo",
    image:
      "https://cdn.kimkim.com/files/a/images/e3ccf2d1cd9dcfd11413aa769d8a6a8d6ea037f8/big-7990be2ee3e1abedd7fb479d906f99a0.jpg"
  },
  {
    title: "From Spain’s Royal Cities to Portugal’s Coastal Wonders|| 8N/9D",
    path: "/portugal-landing-2",
    days: "8 Days",
    countries: "SPAIN + PORTUGAL",
    cities: "Lisbon, Porto, Sintra & Algarve",
    dates: "6 Dates",
    price: "₹1,20,000",
    emi: "₹5,600/mo",
    image:
      "https://arzotravels.com/wp-content/uploads/2017/11/Camara-de-Lobos-Madeira-island-Portugal.jpg"
  }
];

const Portugal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">

      <h1>Portugal Tour Packages</h1>

      {portugalTours.map((tour, index) => (
        <div className="tour-card" key={index}>

          {/* IMAGE */}
          <div className="tour-image">
            <span className="badge">Popular Today</span>

            <img
              src={tour.image}
              alt={tour.title}
            />
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

export default Portugal;