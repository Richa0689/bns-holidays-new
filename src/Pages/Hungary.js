import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of Hungary",
    days: "6 Days",
    countries: "1 Country",
    cities: "Budapest, Szentendre",
    dates: "10 Dates",
    price: "₹1,20,000",
    emi: "₹5,500/mo",
    image: "https://blogassets.airtel.in/wp-content/uploads/2024/11/hungary.jpg"
  },
  {
    title: "Budapest City Explorer",
    days: "5 Days",
    countries: "1 Country",
    cities: "Budapest",
    dates: "8 Dates",
    price: "₹95,000",
    emi: "₹4,500/mo",
    image: "https://cdn.audleytravel.com/1024/731/79/15999174-szchenyi-thermal-bath-budapest.jpg"
  },
  {
    title: "Danube River Cruise",
    days: "7 Days",
    countries: "1 Country",
    cities: "Budapest, Vienna",
    dates: "6 Dates",
    price: "₹1,40,000",
    emi: "₹6,500/mo",
    image: "https://imageio.forbes.com/specials-images/imageserve/675c1200738a531bdd1ae1f7/best-danube-river-cruises/0x0.jpg?crop=1728,1152,x161,y0,safe&height=474&width=711&fit=bounds"
  },
  {
    title: "Luxury Hungary Tour",
    days: "8 Days",
    countries: "1 Country",
    cities: "Budapest, Eger, Lake Balaton",
    dates: "5 Dates",
    price: "₹1,80,000",
    emi: "₹8,000/mo",
    image: "https://i.ytimg.com/vi/CVHHKQW1v-g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDpHhuBTFGrVR4wXqQpgEDG9n7a7A"
  },
];

const Hungary = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>Hungary Tour Packages</h1>

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
              {tour.title === "Best of Hungary" ? (
                <Link to="/hungary-landing" className="title-link">
                  {tour.title}
                </Link>
                ) : tour.title === "Budapest City Explorer" ? (
                  <Link to="/budapest-landing" className="title-link">
                    {tour.title}
                  </Link>
                ) : tour.title === "Danube River Cruise" ? (
                    <Link to="/danube-cruise" className="title-link">
                      {tour.title}
                    </Link>
                    ) : tour.title === "Luxury Hungary Tour" ? (
                    <Link to="/luxury-hungary" className="title-link">
                      {tour.title}
                    </Link>
                  ) : tour.title}
            </h2>

            <div className="rating">
              ⭐⭐⭐⭐⭐ <span>120 Reviews</span>
            </div>

            <p className="inclusive" onClick={() => setShowModal(true)}>
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

      {/*  */}
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

export default Hungary;