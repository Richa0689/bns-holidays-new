import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const denmarkTours = [
  {
    title: "Best of Copenhagen and Gothenburg|| 04 Nights/05 Days",
    path: "/denmark-landing2",
    days: "5 Days",
    countries: "DENMARK + SWEDEN",
    cities: "Copenhagen, Aarhus, Aalborg & Odense",
    dates: "5 Dates",
    price: "₹3,20,000",
    emi: "₹14,500/mo",
    image:
      "https://thumbs.dreamstime.com/b/copenhagen-denmark-aerial-panoramic-skyline-view-royal-palace-115122754.jpg"
  },
  {
    title: "Best of Sweden || 04 Nights/05 Days",
    path: "/denmark-landing3",
    days: "5 Days",
    countries: "DENMARK + SWEDEN",
    cities: "Copenhagen, Malmö, Gothenburg & Aarhus",
    dates: "5 Dates",
    price: "₹3,20,000",
    emi: "₹14,500/mo",
    image:
      "https://thumbs.dreamstime.com/b/copenhagen-denmark-aerial-panoramic-skyline-view-royal-palace-115122754.jpg"
  },
  {
    title: "Best of Denmark and Germany 07 Nights/08 Days",
    path: "/denmark-landing4",
    days: "8 Days",
    countries: "DENMARK + GERMANY",
    cities: "Copenhagen, Oslo & Aarhus",
    dates: "5 Dates",
    price: "₹3,20,000",
    emi: "₹14,500/mo",
    image:
      "https://thumbs.dreamstime.com/b/copenhagen-denmark-aerial-panoramic-skyline-view-royal-palace-115122754.jpg"
  },
  {
    title: "Glimpses of Denmark, Sweden & Germany 07 Nights/08 Days",
    path: "/denmark-landing5",
    days: "8 Days",
    countries: "DENMARK + SWEDEN + GERMANY",
    cities: "Copenhagen, Oslo & Aarhus",
    dates: "5 Dates",
    price: "₹3,20,000",
    emi: "₹14,500/mo",
    image:
      "https://thumbs.dreamstime.com/b/copenhagen-denmark-aerial-panoramic-skyline-view-royal-palace-115122754.jpg"
  },
   {
    title: "Explore Denmark, Sweden and Norway 07 Nights/08 Days",
    path: "/denmark-landing6",
    days: "8 Days",
    countries: "DENMARK + SWEDEN + NORWAY",
    cities: "Copenhagen, Oslo & Aarhus",
    dates: "5 Dates",
    price: "₹3,20,000",
    emi: "₹14,500/mo",
    image:
      "https://thumbs.dreamstime.com/b/copenhagen-denmark-aerial-panoramic-skyline-view-royal-palace-115122754.jpg"
  }
];

const DenmarkLanding = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">

      <h1>Denmark Tour Packages</h1>

      {denmarkTours.map((tour, index) => (
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

export default DenmarkLanding;