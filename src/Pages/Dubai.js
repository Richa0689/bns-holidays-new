import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of Dubai",
    path: "/dubai-landing",
    days: "6 Days",
    countries: "1 Country",
    cities: "2 Cities",
    dates: "10 Dates",
    price: "₹85,000",
    emi: "₹4,000/mo",
    image: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Middle%20East/Dubai/an-insiders-guide-to-dubai-lead-image-skyline.jpg?imwidth=640"
  },
  {
    title: "Dubai & Abu Dhabi",
    path: "/dubai-abu",
    days: "5 Days",
    countries: "1 Country",
    cities: "2 Cities",
    dates: "8 Dates",
    price: "₹75,000",
    emi: "₹3,500/mo",
    image: "https://www.sportsnepaltour.com/img/package/1366030822_1668323427dubai-abu-dhabi-tour.jpg"
  },
  {
    title: "Desert Safari Special",
    path: "/desert-safari",
    days: "4 Days",
    countries: "1 Country",
    cities: "1 City",
    dates: "7 Dates",
    price: "₹65,000",
    emi: "₹3,000/mo",
    image: "https://www.dsktravelsdubai.com/wp-content/uploads/2024/12/desert-safari.jpg"
  },
  {
    title: "Luxury Dubai Tour",
    path: "/luxury-dubai",
    days: "8 Days",
    countries: "1 Country",
    cities: "3 Cities",
    dates: "4 Dates",
    price: "₹1,50,000",
    emi: "₹6,500/mo",
    image: "https://imgcdn.flamingotravels.co.in/Images/Menu/Theme/Dubai%20Luxury%20Tours%20(1).jpg"
  }
];

const Dubai = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>Dubai Tour Packages</h1>

      {tours.map((tour, index) => (
        <div className="tour-card" key={index}>

          <div className="tour-image">
            <span className="badge">Popular Today</span>
            <img src={tour.image} alt={tour.title} />
          </div>

          <div className="tour-info">
           <h2>
  <Link to={tour.path} className="title-link">
    {tour.title}
  </Link>
</h2>

            <div className="rating">
              ⭐⭐⭐⭐⭐ <span>100 Reviews</span>
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

export default Dubai;