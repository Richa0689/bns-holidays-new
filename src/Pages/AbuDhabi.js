import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of Abu Dhabi",
    path: "/abu-landing",
    days: "5 Days",
    countries: "1 Country",
    cities: "1 City",
    dates: "8 Dates",
    price: "₹70,000",
    emi: "₹3,200/mo",
    image: "https://morafiq.ae/wp-content/uploads/2024/11/Qasr-Al-Watan.png"
  },
  {
    title: "Abu Dhabi City Tour",
    path: "/abu-city",
    days: "4 Days",
    countries: "1 Country",
    cities: "1 City",
    dates: "6 Dates",
    price: "₹60,000",
    emi: "₹2,800/mo",
    image: "https://the7tours.com/wp-content/uploads/2026/02/Abu-Dhabi-skyline-with-Sheikh-Zayed-Grand-Mosque-tourists-exploring-city-attractions.jpeg"
  },
  {
    title: "Abu Dhabi Cultural Tour",
    path: "/abu-culture",
    days: "5 Days",
    countries: "1 Country",
    cities: "1 City",
    dates: "7 Dates",
    price: "₹68,000",
    emi: "₹3,000/mo",
    image: "https://namayratourism.com/public/data/product/abu-dhabi-cultural-heritag-tour.jpg"
  },
  {
    title: "Abu Dhabi & Ferrari World",
    path: "/abu-ferrari",
    days: "4 Days",
    countries: "1 Country",
    cities: "1 City",
    dates: "6 Dates",
    price: "₹75,000",
    emi: "₹3,500/mo",
    image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/de/9e/95.jpg"
  },
  {
    title: "Luxury Abu Dhabi Tour",
    path: "/abu-luxury",
    days: "6 Days",
    countries: "1 Country",
    cities: "1 City",
    dates: "4 Dates",
    price: "₹1,10,000",
    emi: "₹5,000/mo",
    image: "https://res.klook.com/images/w_1200,h_630,c_fill,q_65/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/se5zfkqttefeg2jx7wii/Luxury%20Abu%20Dhabi%20City%20Tour%20from%20Dubai.jpg"
  }
];

const AbuDhabi = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>Abu Dhabi Tour Packages</h1>

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
              ⭐⭐⭐⭐⭐ <span>95 Reviews</span>
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

export default AbuDhabi;