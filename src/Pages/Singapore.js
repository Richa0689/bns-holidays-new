import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of Singapore",
    days: "6 Days",
    countries: "1 Country",
    cities: "Singapore",
    dates: "10 Dates",
    price: "₹95,000",
    emi: "₹4,500/mo",
    image: "https://www.sharpholidays.in/blog/wp-content/uploads/2018/05/Singapore-1280x540.jpg"
  },
  {
    title: "Singapore & Sentosa",
    days: "4 Days",
    countries: "1 Country",
    cities: "1 City",
    dates: "8 Dates",
    price: "₹85,000",
    emi: "₹4,000/mo",
    image: "https://cdn-imgix.headout.com/media/images/db6db2b3c8ff8558c2f86919cfea4405-7359-singapore-sentosa-fun-pass-03.jpg?auto=format&w=900&h=562.5&q=90&ar=16%3A10&fit=crop"
  },
  {
    title: "Universal Studios Tour",
    days: "3 Days",
    countries: "1 Country",
    cities: "1 City",
    dates: "6 Dates",
    price: "₹75,000",
    emi: "₹3,500/mo",
    image: "https://jnptravelvn.com/wp-content/uploads/2022/12/universal-studios-singapore-kids-family-guide-honeykids-asia.jpg"
  },
  {
    title: "Luxury Singapore Tour",
    days: "6 Days",
    countries: "1 Country",
    cities: "1 City",
    dates: "5 Dates",
    price: "₹1,20,000",
    emi: "₹5,500/mo",
    image: "https://d3lf10b5gahyby.cloudfront.net/web_app/packages-page/singapore.jpg"
  }
];

const Singapore = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* ── VIDEO HERO — outside tour-container so nothing clips it ── */}
      <div className="video-hero">
        <div className="video-hero__inner">
          <iframe
            src="https://www.youtube.com/embed/dPOyMQwIQfE?si=rMvNY1ZkttefYlsc&autoplay=1&mute=1&loop=1&playlist=dPOyMQwIQfE&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&playsinline=1"
            title="Singapore Tour"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="video-hero__shield" />
      </div>
      {/* ── END VIDEO HERO ── */}

      <div className="tour-container">
        <h1>Singapore Tour Packages</h1>

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
                {tour.title === "Best of Singapore" ? (
                  <Link to="/best-of-singapore" className="title-link">
                    {tour.title}
                  </Link>
                ) : tour.title === "Singapore & Sentosa" ? (
                  <Link to="/singapore-sentosa" className="title-link">{tour.title}</Link>
                ) : tour.title === "Universal Studios Tour" ? (
                  <Link to="/universal-singapore" className="title-link">
                    {tour.title}
                  </Link>
                ) : tour.title === "Luxury Singapore Tour" ? (
                  <Link to="/luxury-singapore" className="title-link">{tour.title}</Link>
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

export default Singapore;