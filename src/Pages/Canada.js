import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of Canada",
    days: "8 Days",
    countries: "1 Country",
    cities: "3 Cities",
    dates: "10 Dates",
    price: "₹1,95,000",
    emi: "₹9,000/mo",
    image: "https://www.gokitetours.com/wp-content/uploads/2025/05/1.-Banff-National-Park-Alberta-.webp"
  },
  {
    title: "Toronto & Niagara Falls",
    days: "6 Days",
    countries: "1 Country",
    cities: "2 Cities",
    dates: "8 Dates",
    price: "₹1,70,000",
    emi: "₹8,000/mo",
    image: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_640,q_65,w_640/v1/clients/toronto/Niagara_Falls_Skylon_Tower_large_5f4c268b-bd1b-4c48-921f-982e34d773fa.jpg"
  },
  {
    title: "Vancouver & Victoria",
    days: "7 Days",
    countries: "1 Country",
    cities: "2 Cities",
    dates: "6 Dates",
    price: "₹1,85,000",
    emi: "₹8,500/mo",
    image: "https://media.istockphoto.com/id/496608530/photo/historic-parliament-building-in-victoria-with-colorful-flowers-bc-canada.jpg?s=612x612&w=0&k=20&c=YqJl13eoK-esSqAez6BGGoRdG_jD8t_Yx_bEndsh1Fw="
  },
  {
    title: "Rocky Mountains Tour",
    days: "9 Days",
    countries: "1 Country",
    cities: "3 Cities",
    dates: "5 Dates",
    price: "₹2,20,000",
    emi: "₹10,200/mo",
    image: "https://www.travelmanagers.com.au/wp-content/uploads/2024/11/Untitled-design.jpg"
  },
  {
    title: "Luxury Canada Tour",
    days: "12 Days",
    countries: "1 Country",
    cities: "4 Cities",
    dates: "4 Dates",
    price: "₹2,80,000",
    emi: "₹12,500/mo",
    image: "https://cdn.tourradar.com/s3/tour/1500x800/275419_66223427ebeae.jpg"
  }
];

const Canada = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>Canada Tour Packages</h1>

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
  {tour.title === "Best of Canada" ? (
    <Link to="/destinations/canada-tours" className="title-link">{tour.title}</Link>
  ) : tour.title === "Toronto & Niagara Falls" ? (
    <Link to="/destinations/toronto-niagara" className="title-link">{tour.title}</Link>
  ) : tour.title === "Vancouver & Victoria" ? (
    <Link to="/destinations/vancouver-victoria" className="title-link">{tour.title}</Link>
  ) : tour.title === "Rocky Mountains Tour" ? (
    <Link to="/destinations/rocky-tour" className="title-link">{tour.title}</Link>
  ) : tour.title === "Luxury Canada Tour" ? (
    <Link to="/destinations/luxury-canada" className="title-link">{tour.title}</Link>
  ) : (
    tour.title
  )}
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
              <div><span>✈️</span><p>Flight</p></div>
              <div><span>📷</span><p>Sightseeing</p></div>
              <div><span>🚌</span><p>Transport</p></div>
              <div><span>📄</span><p>Visa</p></div>
            </div>

            <div className="modal-content">
              <p>
                👨‍✈️ Tour includes the services of <b>BNS Holidays</b> .
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

export default Canada;