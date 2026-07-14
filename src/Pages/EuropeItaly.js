import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const italyTours = [
  {
    title: "Explore Florence + Pisa + Rome || 07 Nights / 08 Days",
    path: "/italy-landing2",
    days: "8 Days",
    countries: "ITALY",
    cities: "Rome, Florence, Venice, Milan, Pisa & Amalfi Coast",
    dates: "5 Dates",
    price: "₹1,40,000",
    emi: "₹12,300/mo",
    image:
      "https://clickstay.s3-eu-west-1.amazonaws.com/images/blog/post/Cinqueterra.jpg"
  },
   {
    title: "Experience the Essence of Italy 09 Nights 10 Days",
    path: "/italy-landing3",
    days: "10 Days",
    countries: "ITALY",
    cities: "Rome, Florence, Venice, Milan, Pisa & Amalfi Coast",
    dates: "5 Dates",
    price: "₹1,80,000",
    emi: "₹15,800/mo",
    image:
      "https://images.onthegotours.com/Best-places-to-visit-in-Italy--page-menu-image--On-The-Go-Tours-352471500906850.jpg"
  },
  {
    title: "From the French Riviera to Milan’s Elegance || 6N/7D",
    path: "/italy-landing4",
    days: "7 Days",
    countries: "FRANCE + ITALY",
    cities: "Rome, Florence, Venice, Milan, Pisa & Amalfi Coast",
    dates: "5 Dates",
    price: "₹1,25,000",
    emi: "₹11,000/mo",
    image:
      "https://static.wixstatic.com/media/e41b5c_163dbea574a142e0a3863bd38f340366~mv2.jpg/v1/fill/w_2400,h_1600,al_c,q_90/portofino-italy.jpg"
  },
  {
    title: "Explore Florence + Pisa + Rome || 06 Nights / 07 Days",
    path: "/italy-landing5",
    days: "7 Days",
    countries: "ITALY",
    cities: "Rome, Florence, Venice, Milan, Pisa & Amalfi Coast",
    dates: "5 Dates",
    price: "₹1,25,000",
    emi: "₹11,000/mo",
    image:
      "https://www.emperortraveline.com/wp-content/uploads/2022/09/Italy.jpg"
  }
  
];

const ItalyLanding = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">

      <h1>Italy Tour Packages</h1>

      {italyTours.map((tour, index) => (
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

export default ItalyLanding;