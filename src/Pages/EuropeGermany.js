import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const germanyTours = [
  {
    title: "Scenic Europe Escape: Ljubljana, Salzburg & Munich",
    path: "/germany-landing2",
    days: "7 Days",
    countries: "SLOVENIA + AUSTRIA + GERMANY",
    cities: "Ljubljana, Salzburg & Munich",
    dates: "5 Dates",
    price: "₹3,40,000",
    emi: "₹15,500/mo",
    image:
      "https://cdn.kimkim.com/files/a/images/e28c94ae4c1bb7b133f6039ab141910c3581949d/original-d8146eba4d5c03ddb9a619c95108daf4.jpg"
  },
  {
    title: "Munich + Innsbruck + Salzburg + Vienna||08 Nights/09 Days",
    path: "/germany-landing3",
    days: "9 Days",
    countries: "GERMANY + AUSTRIA",
    cities: "Munich , Innsbruck , Salzburg , Vienna",
    dates: "5 Dates",
    price: "₹3,80,000",
    emi: "₹17,500/mo",
    image:
      "https://cdn.kimkim.com/files/a/images/e28c94ae4c1bb7b133f6039ab141910c3581949d/original-d8146eba4d5c03ddb9a619c95108daf4.jpg"
  },
  {
    title: "Munich + Stuttgart + Frankfurt || 06 Nights/07 Days",
    path: "/germany-landing4",
    days: "7 Days",
    countries: "GERMANY",
    cities: "Munich , Stuttgart , Frankfurt",
    dates: "5 Dates",
    price: "₹4,10,000",
    emi: "₹18,500/mo",
    image:
      "https://cdn.kimkim.com/files/a/images/e28c94ae4c1bb7b133f6039ab141910c3581949d/original-d8146eba4d5c03ddb9a619c95108daf4.jpg"
  },
  {
    title: "Best of Vienna/Munich/Zurich || 06 Nights/07 Days",
    path: "/germany-landing5",
    days: "7 Days",
    countries: "GERMANY + SWITZERLAND + AUSTRIA",
    cities: "Vienna,Munich,Zurich",
    dates: "5 Dates",
    price: "₹4,50,000",
    emi: "₹20,500/mo",
    image:
      "https://cdn.kimkim.com/files/a/images/e28c94ae4c1bb7b133f6039ab141910c3581949d/original-d8146eba4d5c03ddb9a619c95108daf4.jpg"
  },
  {
    title: "Best of Vienna/Munich/Zurich || 07 Nights/08 Days",
    path: "/germany-landing6",
    days: "8 Days",
    countries: "GERMANY + SWITZERLAND + AUSTRIA",
    cities: "Vienna,Munich,Zurich",
    dates: "5 Dates",
    price: "₹4,70,000",
    emi: "₹21,500/mo",
    image:
      "https://cdn.kimkim.com/files/a/images/e28c94ae4c1bb7b133f6039ab141910c3581949d/original-d8146eba4d5c03ddb9a619c95108daf4.jpg"
  },
  {
    title: "Zurich + Innsbruck + Salzburg || 06 Nights/07 Days",
    path: "/germany-landing7",
    days: "7 Days",
    countries: "SWITZERLAND + AUSTRIA + GERMANY",
    cities: "Zurich , Innsbruck , Salzburg",
    dates: "5 Dates",
    price: "₹4,70,000",
    emi: "₹21,500/mo",
    image:
      "https://cdn.kimkim.com/files/a/images/e28c94ae4c1bb7b133f6039ab141910c3581949d/original-d8146eba4d5c03ddb9a619c95108daf4.jpg"
  },
  {
    title: "Amsterdam + Cologne + Frankfurt || 06 Nights / 07 Days",
    path: "/germany-landing8",
    days: "7 Days",
    countries: "NETHERLANDS + GERMANY",
    cities: "Amsterdam , Cologne , Frankfurt",
    dates: "5 Dates",
    price: "₹4,70,000",
    emi: "₹21,500/mo",
    image:
      "https://cdn.kimkim.com/files/a/images/e28c94ae4c1bb7b133f6039ab141910c3581949d/original-d8146eba4d5c03ddb9a619c95108daf4.jpg"
  },
  {
    title: "Best of Denmark and Germany 07 Nights/08 Days",
    path: "/germany-landing9",
    days: "8 Days",
    countries: "DENMARK + GERMANY",
    cities: "Frankfurt, Heidelberg & Munich",
    dates: "5 Dates",
    price: "₹4,70,000",
    emi: "₹21,500/mo",
    image:
      "https://cdn.kimkim.com/files/a/images/e28c94ae4c1bb7b133f6039ab141910c3581949d/original-d8146eba4d5c03ddb9a619c95108daf4.jpg"
  },
  {
    title: "Glimpses of Denmark, Sweden & Germany 07 Nights/08 Days",
    path: "/germany-landing10",
    days: "8 Days",
    countries: "DENMARK + SWEDEN + GERMANY",
    cities: "Denmark, Sweden & Germany",
    dates: "5 Dates",
    price: "₹4,70,000",
    emi: "₹21,500/mo",
    image:
      "https://cdn.kimkim.com/files/a/images/e28c94ae4c1bb7b133f6039ab141910c3581949d/original-d8146eba4d5c03ddb9a619c95108daf4.jpg"
  },
  {
    title: "Explore Frankfurt, Heidelberg & Munich || 06 Nights / 07 Days",
    path: "/germany-landing11",
    days: "7 Days",
    countries: "GERMANY",
    cities: " Frankfurt, Heidelberg & Munich",
    dates: "5 Dates",
    price: "₹4,70,000",
    emi: "₹21,500/mo",
    image:
      "https://cdn.kimkim.com/files/a/images/e28c94ae4c1bb7b133f6039ab141910c3581949d/original-d8146eba4d5c03ddb9a619c95108daf4.jpg"
  }
];

const GermanyLanding = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">

      <h1>Germany Tour Packages</h1>

      {germanyTours.map((tour, index) => (
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

            <p className="emi">
              EMI from {tour.emi}
            </p>

            <button className="book-btn">
              Book Online
            </button>

            <button className="whatsapp-btn">
              Share on WhatsApp
            </button>

            <button className="details-btn">
              View Tour Details
            </button>
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

export default GermanyLanding;