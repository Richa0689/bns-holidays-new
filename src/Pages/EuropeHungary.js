import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const hungaryTours = [
  {
    title: "Central Europe Escape: Budapest, Zagreb & Ljubljana",
    path: "/hungary-landing2",
    days: "8 Days",
    countries: "HUNGARY + CROATIA + SLOVENIA",
    cities: "Budapest, Zagreb, Ljubljana & Lake Balaton",
    dates: "5 Dates",
    price: "₹3,20,000",
    emi: "₹14,500/mo",
    image:
      "https://media2.thrillophilia.com/images/photos/000/179/082/original/1573797301_shutterstock_1075765313.jpg?width=975&height=600"
  },
  {
    title: "Budapest + Vienna + Prague || 06 Nights/07 Days",
    path: "/hungary-landing3",
    days: "7 Days",
    countries: "HUNGARY + AUSTRIA + CZECH REPUBLIC",
    cities: "Budapest, Prague, Vienna & Lake Balaton",
    dates: "5 Dates",
    price: "₹3,20,000",
    emi: "₹14,500/mo",
    image:
      "https://blogassets.airtel.in/wp-content/uploads/2024/11/hungary.jpg"
  },
  {
    title: "Budapest + Vienna + Prague 08 Nights/09 Days",
    path: "/hungary-landing4",
    days: "9 Days",
    countries: "HUNGARY + AUSTRIA + CZECH REPUBLIC",
    cities: " Budapest, Prague, Vienna",
    dates: "5 Dates",
    price: "₹3,20,000",
    emi: "₹14,500/mo",
    image:
      "https://images.pexels.com/photos/34430993/pexels-photo-34430993.jpeg?cs=srgb&dl=pexels-kelly-34430993.jpg&fm=jpg"
  },
  {
    title: "Vienna + Budapest + Prague || 06 Nights/07 Days",
    path: "/hungary-landing5",
    days: "7 Days",
    countries: "AUSTRIA + HUNGARY + CZECH REPUBLIC",
    cities: "Budapest, Prague, Vienna",
    dates: "5 Dates",
    price: "₹3,20,000",
    emi: "₹14,500/mo",
    image:
      "https://www.eurochange.co.uk/media/ivja0oqw/adobestock_277061588-min.jpeg?width=504&height=575&v=1dc021a11a47cb0"
  },
  {
    title: "From Medieval Streets to Imperial Palaces || 9N/10D",
    path: "/hungary-landing6",
    days: "10 Days",
    countries: "CZECH REPUBLIC + AUSTRIA + HUNGARY",
    cities: "Budapest, Prague, Vienna & Lake Balaton",
    dates: "5 Dates",
    price: "₹3,20,000",
    emi: "₹14,500/mo",
    image:
      "https://res.klook.com/image/upload/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/belq7ojsvqj9fjbb1sjp.jpg"
  }
];

const HungaryLanding = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">

      <h1>Hungary Tour Packages</h1>

      {hungaryTours.map((tour, index) => (
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

export default HungaryLanding;