import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Kenya's Ultimate Safari Circuit  ",
    path: "/kenya-UltimateSafariCircuit",
    days: "8 Days",
    countries: "Kenya",
    cities: " Amboseli National Park",
    dates: "8 Dates",
    price: "₹1,85,000",
    emi: "₹16,200/mo",
    image:
      "https://cheetah.org/canada/wp-content/uploads/sites/5/2025/10/Family-2-copy.jpg"
  },
  {
    title: "Wild Escapade ",
    path: "/kenya-WildEscapade",
    days: "6 Days",
    countries: "Kenya",
    cities: "Ol Pejeta Conservancy",
    dates: "10 Dates",
    price: "₹1,60,000",
    emi: "₹14,000/mo",
    image:
      "https://media.licdn.com/dms/image/v2/D4E12AQEINK_OsQHrEA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1712825950898?e=2147483647&v=beta&t=XgqNNNdD7YB1sBmoVoZyj7EuVB5SDaIY0Eou1-dl38A"
  },
  {
    title: "Wild Serenade",
    path: "/kenya-WildSerenade",
    days: "4 Days",
    countries: "Kenya",
    cities: "Lake Elementaita",
    dates: "6 Dates",
    price: "₹1,80,000",
    emi: "₹15,800/mo",
    image:
      "https://travelofiesta.com/public/images/featured-images/1708517616.webp"
  },
  {
    title: "Echoes Of The Wild ",
    path: "/kenya-EchoesOfTheWild ",
    days: "7 Days",
    countries: "Kenya",
    cities: "Echoes Of The Wild ",
    dates: "6 Dates",
    price: "₹2,10,000",
    emi: "₹18,400/mo",
    image:
      "https://wildlifesafari.co.ke/wp-content/uploads/2022/01/Shutterstock_Wildlife_BlackRhinoAndCalf.jpg"
  },
  {
    title: "Amboseli Wild Trails ",
    path: "/kenya-AmboseliWildTrails ",
    days: "4 Days",
    countries: "Kenya",
    cities: "Amboseli Wild Trails ",
    dates: "6 Dates",
    price: "₹1,55,000",
    emi: "₹13,600/mo",
    image:
      "https://media.assettype.com/outlooktraveller/2025-03-08/9c9glnfz/Amboseli-National-Park?w=1200&auto=format%2Ccompress&fit=max&format=webp&dpr=1.0"
  },
  {
    title: "Predators & Pink Feathers ",
    path: "/kenya-PredatorsAndPinkFeathers ",
    days: "5 Days",
    countries: "Kenya",
    cities: "Predators & Pink Feathers ",
    dates: "6 Dates",
    price: "₹1,95,000",
    emi: "₹17,200/mo",
    image:
      "https://www.airpano.com/files/flamingo_01_big.jpg"
  },
  {
    title: "Into The Heart Of The Wild ",
    path: "/kenya-IntoTheHeartOfTheWild ",
    days: "7 Days",
    countries: "Kenya",
    cities: "Into The Heart Of The Wild ",
    dates: "6 Dates",
    price: "₹2,20,000",
    emi: "₹19,300/mo",
    image:
      "https://feelthedifferenceadventures.com/wp-content/uploads/2023/12/maasai-mara8.jpg"
  },
];

const KenyaTours = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* ── VIDEO HERO — outside tour-container so nothing clips it ── */}
      <div className="video-hero">
  <div className="video-hero__inner">
    <iframe
      src="https://www.youtube.com/embed/NGmH2UQ-prk?autoplay=1&mute=1&loop=1&playlist=NGmH2UQ-prk&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&playsinline=1&start=55"
      title="Kenya Safari"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
  <div className="video-hero__shield" />
</div>
      {/* ── END VIDEO HERO ── */}

      <div className="tour-container">
        <h1>Kenya Tour Packages</h1>

        {tours.map((tour, index) => (
          <div className="tour-card" key={index}>

            {/* IMAGE */}
            <div className="tour-image">
              <span className="badge">Trending Safari</span>
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
                {tour.days} • {tour.countries} • {tour.cities}
              </p>

              
            </div>

            {/* PRICE */}
            <div className="tour-price">
              <p className="start">Starts from</p>
              <h2>{tour.price}</h2>
              <p className="emi">EMI from {tour.emi}</p>

              <button className="book-btn">Book Online</button>
              <button className="whatsapp-btn">Share on WhatsApp</button>
              <Link to={tour.path} className="details-link">
                <button className="details-btn">View Tour Details</button>
              </Link>
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
                <div><span>🚙</span><p>Safari Jeep</p></div>
                <div><span>📷</span><p>Sightseeing</p></div>
                <div><span>🦁</span><p>Wildlife Safari</p></div>
                <div><span>📄</span><p>Guide</p></div>
              </div>

              <div className="modal-content">
                <p>
                  👨‍✈️ Tour includes the services of <b>BNS Holidays</b>.
                </p>
                <p className="note">
                  *Hotel, meals & safari included.
                  <br />
                  *Visa & taxes extra.
                </p>
              </div>

            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default KenyaTours;