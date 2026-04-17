import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of Pahalgam",
    path: "/pahalgam-landing",
    days: "5 Days",
    countries: "India",
    cities: "Pahalgam, Aru Valley",
    dates: "10 Dates",
    price: "₹28,000",
    emi: "₹1,300/mo",
    image: "https://www.holidify.com/images/bgImages/PAHALGAM.jpg"
  },
  {
    title: "Pahalgam Valley Explorer",
    path: "/pahalgam-valley",
    days: "6 Days",
    countries: "India",
    cities: "Pahalgam, Betaab Valley",
    dates: "8 Dates",
    price: "₹32,000",
    emi: "₹1,500/mo",
    image: "https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/destination/m_Pahalgam_tv_destination_img_1_l_829_1473.jpg"
  },
  {
    title: "Adventure Pahalgam Trip",
    path: "/pahalgam-adventure",
    days: "4 Days",
    countries: "India",
    cities: "Aru Valley, Lidder River",
    dates: "6 Dates",
    price: "₹22,000",
    emi: "₹1,000/mo",
    image: "https://imgcld.yatra.com/ytimages/image/upload/v1517481435/AdvNation/ANN_DES24/ann_top_PahalgamAndSonamarg_vgRKS8.jpg"
  },
  {
    title: "Luxury Pahalgam Tour",
    path: "/luxury-pahalgam",
    days: "7 Days",
    countries: "India",
    cities: "Pahalgam, Srinagar",
    dates: "5 Dates",
    price: "₹45,000",
    emi: "₹2,000/mo",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/607392029.jpg?k=140f80ed709ef4d7682c27b7db84d35e13c550c057de1ca117b696bfb595422e&o="
  }
];

const Pahalgam = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>Pahalgam Tour Packages</h1>

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
              <Link to={tour.path} className="title-link">
                {tour.title}
              </Link>
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

      {/* MODAL */}
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
              <div><span>🚗</span><p>Transport</p></div>
              <div><span>📷</span><p>Sightseeing</p></div>
              <div><span>🎒</span><p>Guide</p></div>
              <div><span>📄</span><p>Permit</p></div>
            </div>

            <div className="modal-content">
              <p>
                👨‍✈️ Tour includes services of <b>BNS Holidays</b>.
              </p>

              <p className="note">
                *Transport & hotel included<br />
                *Taxes extra
              </p>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Pahalgam;