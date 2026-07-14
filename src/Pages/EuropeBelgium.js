import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const belgiumTours = [
  {
    title: "From Windmills to the Eiffel 06 Nights/07 Days",
    path: "/belgium-landing-1",
    days: "7 Days",
    countries: "NETHERLANDS + BELGIUM + FRANCE",
    cities: "Amsterdam, Brussels & Paris",
    dates: "10 Dates",
    price: "₹1,25,000",
    emi: "₹11,000/mo",
    image: "https://www.shutterstock.com/image-photo/ghent-belgium-old-town-cityscape-600nw-2514665601.jpg"
  },
  {
    title: "Amsterdam to Paris Escape|| 08 Nights / 09 Days",
    path: "/belgium-landing-2",
    days: "9 Days",
    countries: "NETHERLANDS + BELGIUM + FRANCE",
    cities: "Amsterdam, Brussels, Ghent & Bruges",
    dates: "8 Dates",
    price: "₹1,75,000",
    emi: "₹15,500/mo",
    image: "https://img.freepik.com/premium-photo/eiffel-tower-aerial-view-paris_78361-12651.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    title: "Explore Brussels + Antwerp + Rotterdam||06 Nights / 07 Days",
    path: "/belgium-landing-3",
    days: "7 Days",
    countries: "BELGIUM + NETHERLANDS",
    cities: "Brussels, Antwerp & Rotterdam",
    dates: "12 Dates",
    price: "₹1,20,000",
    emi: "₹10,500/mo",
    image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/87/2f/aa.jpg"
  }
];

const BelgiumLanding = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">

      <h1>Belgium Tour Packages</h1>

      {belgiumTours.map((tour, index) => (
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
            <p className="emi">EMI from {tour.emi}</p>

            <button className="book-btn">Send Query</button>
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

export default BelgiumLanding;