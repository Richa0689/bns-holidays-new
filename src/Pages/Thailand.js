import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of Thailand",
    days: "6 Days",
    countries: "1 Country",
    cities: "2 Cities",
    dates: "10 Dates",
    price: "₹30,000",
    emi: "₹1,000/mo",
    image: "https://www.hostelworld.com/blog/wp-content/uploads/2019/12/Best-places-to-visit-in-Thailand-@cadop.jpg"
  },
  {
    title: "Bangkok & Pattaya",
    days: "7 Days",
    countries: "1 Country",
    cities: "2 Cities",
    dates: "8 Dates",
    price: "₹28,000",
    emi: "₹1,000/mo",
    image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/b3/6f/2b.jpg"
  },
  {
    title: "Phuket & Krabi",
    days: "8 Days",
    countries: "1 Country",
    cities: "2 Cities",
    dates: "7 Dates",
    price: "₹35,000",
    emi: "₹1,200/mo",
    image: "https://www.onthegotours.com/repository/Railay-Beach-in-Krabi-Thailand-663831538129694.jpg"
  },
  {
    title: "Thailand Luxury Tour",
    days: "8 Days",
    countries: "1 Country",
    cities: "3 Cities",
    dates: "5 Dates",
    price: "₹45,000",
    emi: "₹2,000/mo",
    image: "https://cdn.forevervacation.com/uploads/destination/bangkok.jpeg"
  }
];

const Thailand = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* ── VIDEO HERO — outside tour-container so nothing clips it ── */}
      <div className="video-hero">
        <div className="video-hero__inner">
          <iframe
            src="https://www.youtube.com/embed/SadzfrxVuF0?si=OnMpYt8JR0Xufymr&autoplay=1&mute=1&loop=1&playlist=SadzfrxVuF0&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&playsinline=1"
            title="Thailand Tour"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="video-hero__shield" />
      </div>
      {/* ── END VIDEO HERO ── */}

      <div className="tour-container">
        <h1>Thailand Tour Packages</h1>

        {tours.map((tour, index) => (
          <div className="tour-card" key={index}>

            {/* IMAGE */}
            <div className="tour-image">
              <span className="badge">Popular Today</span>
              <img src={tour.image} alt={tour.title} />
            </div>

            {/* CONTENT */}
            <div className="tour-info">
              <h2>
                {tour.title === "Best of Thailand" ? (
                  <Link to="/thailand-landing" className="title-link">
                    {tour.title}
                  </Link>
                ) : tour.title === "Bangkok & Pattaya" ? (
                  <Link to="/bangkok-pattaya" className="title-link">{tour.title}</Link>
                ) : tour.title === "Phuket & Krabi" ? (
                  <Link to="/phuket-krabi" className="title-link">{tour.title}</Link>
                ) : tour.title === "Thailand Luxury Tour" ? (
                  <Link to="/thailand-luxury" className="title-link">{tour.title}</Link>
                ) : (
                  tour.title
                )}
              </h2>

              {showModal && (
                <div className="modal-overlay">
                  <div className="modal-box">

                    <div className="modal-header">
                      <h2>Tour Includes</h2>
                      <span className="close-btn" onClick={() => setShowModal(false)}>✕</span>
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
                      <p>👨‍✈️ Tour includes services of <b>BNS Holidays</b>.</p>
                      <p className="note">
                        *Airfare included. Taxes extra.
                      </p>
                    </div>

                  </div>
                </div>
              )}

              <p className="details">
                {tour.days} • {tour.countries} • {tour.cities}, {tour.dates}
              </p>

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
      </div>
    </>
  );
};

export default Thailand;