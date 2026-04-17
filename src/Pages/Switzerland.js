import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of Switzerland",
    path: "/switzerland-landing",
    days: "7 Days",
    countries: "1 Country",
    cities: "3 Cities",
    dates: "10 Dates",
    price: "₹1,80,000",
    emi: "₹7,500/mo",
    image: "https://www.flamingotravels.co.in/_next/image?url=https%3A%2F%2Fimgcdn.flamingotravels.co.in%2FImages%2FCountry%2Fswitzerland-best-time-to-visit.jpg&w=1080&q=75"
  },
  {
    title: "Zurich & Lucerne",
    path: "/zurich-lucerne",
    days: "5 Days",
    countries: "1 Country",
    cities: "2 Cities",
    dates: "8 Dates",
    price: "₹1,60,000",
    emi: "₹6,800/mo",
    image: "https://cdn.enjoytravel.com/img/Big7Enjoy/en/travel-news/places-to-visit/zurich-lucerne-how-to-choose/zurich-lucerne-how-to-choose-things-to-do.webp"
  },
  {
    title: "Interlaken Adventure",
    path: "/interlaken",
    days: "6 Days",
    countries: "1 Country",
    cities: "2 Cities",
    dates: "7 Dates",
    price: "₹1,70,000",
    emi: "₹7,200/mo",
    image: "https://res.klook.com/image/upload/q_85/c_fill,w_1360/v1718104142/tjyst99c8xrqf1kimvsf.webp"
  },
  {
    title: "Swiss Alps Tour",
    path: "/swiss-alps",
    days: "5 Days",
    countries: "1 Country",
    cities: "2 Cities",
    dates: "6 Dates",
    price: "₹1,65,000",
    emi: "₹7,000/mo",
    image: "https://s1.it.atcdn.net/wp-content/uploads/2015/11/shutterstock_279572969.jpg"
  },
  {
    title: "Luxury Switzerland Tour",
    path: "/luxury-switzerland",
    days: "9 Days",
    countries: "1 Country",
    cities: "4 Cities",
    dates: "4 Dates",
    price: "₹2,50,000",
    emi: "₹10,500/mo",
    image: "https://www.komfytrip.com/_next/image?url=https%3A%2F%2Fcomfy-blogs.s3.ap-south-1.amazonaws.com%2FSwitzerland-Oberhofen-Castle-e1432297557565.jpg_1752324756&w=3840&q=75"
  }
];

const Switzerland = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>Switzerland Tour Packages</h1>

      {tours.map((tour, index) => (
        <div className="tour-card" key={index}>

          {/* Image */}
          <div className="tour-image">
            <span className="badge">Popular Today</span>
            <img src={tour.image} alt={tour.title} />
          </div>

          {/* Info */}
          <div className="tour-info">
            <h2>
              <Link to={tour.path} className="title-link">
                {tour.title}
              </Link>
            </h2>

            <div className="rating">
              ⭐⭐⭐⭐⭐ <span>110 Reviews</span>
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

          {/* Price */}
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

export default Switzerland;