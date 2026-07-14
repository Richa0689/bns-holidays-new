import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of Malaysia",
    days: "6 Days",
    countries: "1 Country",
    cities: "2 Cities",
    dates: "10 Dates",
    price: "₹33,000",
    emi: "₹3,000/mo",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/a4/4a/26/langkawi-from-above.jpg?w=1200&h=700&s=1"
  },
  {
    title: "Kuala Lumpur",
    days: "4 Days",
    countries: "1 Country",
    cities: "Kuala Lumpur",
    dates: "8 Dates",
    price: "₹35,000",
    emi: "₹3,100/mo",
    image: "https://travelxploria.com/_next/image?url=https%3A%2F%2Ftravelxploria.com%2Fuploads_media%2Fblog%2F1750246793100-AdobeStock_500048544-min.jpeg&w=3840&q=75"
  },
  {
    title: "Langkawi",
    days: "4 Days",
    countries: "1 Country",
    cities: "Langkawi",
    dates: "6 Dates",
    price: "₹30,000",
    emi: "₹2,700/mo",
    image: "https://houseoftravel-prod-a8a4d6a8eqgvdscd.z02.azurefd.net/media/wyxfqg5p/malaysia-mountains-ocean-water-asia-malaysia-bohey-dulang-island-getty-826412034-nora-carol-photographyjpg.jpg?width=1920&height=1080&v=1db4b42581f4290"
  },
  {
    title: "Penang Heritage Tour",
    days: "5 Days",
    countries: "1 Country",
    cities: "1 City",
    dates: "7 Dates",
    price: "₹32,000",
    emi: "₹2,900/mo",
    image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/d7/cb/7a.jpg"
  },
  {
    title: "Luxury Malaysia Tour",
    days: "8 Days",
    countries: "1 Country",
    cities: "3 Cities",
    dates: "4 Dates",
    price: "₹40,000",
    emi: "₹3,600/mo",
    image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0f/3f/68/5f.jpg"
  }
];

const Malaysia = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* ── VIDEO HERO — outside tour-container so nothing clips it ── */}
      <div className="video-hero">
        <div className="video-hero__inner">
          <iframe
            src="https://www.youtube.com/embed/arNcqmgXPqc?si=60YiG_0YZylsYPna&autoplay=1&mute=1&loop=1&playlist=arNcqmgXPqc&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&playsinline=1&start=30"
            title="Malaysia Tour"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="video-hero__shield" />
      </div>
      {/* ── END VIDEO HERO ── */}

      <div className="tour-container">
        <h1>Malaysia Tour Packages</h1>

        {tours.map((tour, index) => (
          <div className="tour-card" key={index}>

            <div className="tour-image">
              <span className="badge">Popular Today</span>
              <img src={tour.image} alt={tour.title} />
            </div>

            <div className="tour-info">
              <h2>
                {tour.title === "Best of Malaysia" ? (
                  <Link to="/malaysia-landing" className="title-link">{tour.title}</Link>
                ) : tour.title === "Kuala Lumpur" ? (
                  <Link to="/kl-genting" className="title-link">{tour.title}</Link>
                ) : tour.title === "Langkawi" ? (
                  <Link to="/langkawi" className="title-link">{tour.title}</Link>
                ) : tour.title === "Penang Heritage Tour" ? (
                  <Link to="/penang" className="title-link">{tour.title}</Link>
                ) : tour.title === "Luxury Malaysia Tour" ? (
                  <Link to="/luxury-malaysia" className="title-link">{tour.title}</Link>
                ) : (
                  tour.title
                )}
              </h2>

              <p className="details">
                {tour.days} • {tour.countries} • {tour.cities}, {tour.dates}
              </p>
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
    </>
  );
};

export default Malaysia;