import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const croatiaTours = [
  {
    title: "Central Europe Escape: Budapest, Zagreb & Ljubljana",
    path: "/croatia-landing-1",
    days: "8 Days",
    countries: "HUNGARY + CROATIA + SLOVENIA",
    cities: "budapest, zagreb & ljubljana",
    dates: "8 Dates",
    price: "₹95,000",
    emi: "₹8,300/mo",
    image:
      "https://www.luxurylifestylemag.co.uk/wp-content/uploads/2021/11/bigstock-Historical-And-Ordinary-Views-411644287.jpg"
  },
  {
    title: "Coast & Islands",
    path: "/croatia-landing-2",
    days: "7 Days",
    countries: "CROATIA",
    cities: "Dubrovnik, Split, Zagreb & Zadar",
    dates: "8 Dates",
    price: "₹1,05,000",
    emi: "₹9,200/mo",
    image:
      "https://media.istockphoto.com/id/907591300/photo/beautiful-beach-mediterranean-sea-makarska-riviera-croatia.jpg?s=612x612&w=0&k=20&c=g5x7p4G2d615F9ZZTn57nGtuo_0-UJhgmfsx5aBzobw="
  },
  {
    title: "Two Cities, One Coast 04 Nights/05 Days",
    path: "/croatia-landing-3",
    days: "5 Days",
    countries: "CROATIA",
    cities: "Dubrovnik & Split",
    dates: "8 Dates",
    price: "₹90,000",
    emi: "₹7,500/mo",
    image:
      "https://cdn.kimkim.com/files/a/images/f44cb4223e79e47e17b9c56c74023335661f25dc/original-7488d48f57a047ff6cd9cc35ed19c509.jpg"
  },
  {
    title: "Two Capitals, One Journey 04 Nights/05 Days",
    path: "/croatia-landing-4",
    days: "5 Days",
    countries: "CROATIA + SLOVENIA",
    cities: " Zagreb & Ljubljana",
    dates: "8 Dates",
    price: "₹85,000",
    emi: "₹7,500/mo",
    image:
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/e5/b9/27.jpg"
  },
  {
    title: "Croatia in a Week Zagreb 06 Nights/07 Days",
    path: "/croatia-landing-5",
    days: "7 Days",
    countries: "CROATIA + SLOVENIA",
    cities: " Zagreb, Plitvice Lakes, Zadar, Split, Hvar & Dubrovnik",
    dates: "8 Dates",
    price: "₹1,35,000",
    emi: "₹11,900/mo",
    image:
      "https://cdn.kimkim.com/files/a/images/7ebcf5705583404cb8ef05a7456219aae9e768bc/big-2b917b744003d5e42b28e1a8a894983d.jpg"
  }
];

const Croatia = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">

      <h1>Croatia Tour Packages</h1>

      {croatiaTours.map((tour, index) => (
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

export default Croatia;