import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Classic Europe Escape: Warsaw & Prague Highlights",
    path: "/Escape-Warsaw",
    days: "6 Days",
    countries: "POLAND + CZECH REPUBLIC",
    cities: "02N Warsaw | 03N Prague",
    // dates: "10 Dates",
    price: "₹50,000",
    emi: "₹4,500/mo",
    image: "https://www.traveller.ee/blog/wp-content/uploads/2018/11/charles-bridge-in-prague-during-sunset.jpg"
  },
  {
    title: "Budapest + Vienna + Prague Nights",
    path: "/Budapest-Vienna",
    days: "7 days",
    countries: "HUNGARY + AUSTRIA + CZECH REPUBLIC",
    // cities: "2 Cities",
    // // dates: "8 Dates",
    price: "₹52,000",
    emi: "₹4,700/mo",
    image: "https://tse3.mm.bing.net/th/id/OIP.m1AUMnEtrB5aE4-KgksgawHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    title: "Budapest + Vienna + Prague",
    path: "/Vienna-Prague",
    days: "9 Days",
    countries: "HUNGARY + AUSTRIA + CZECH REPUBLIC",
    cities: "2N Budapest + 3N Vienna + 3N Prague",
    // // dates: "7 Dates",
    price: "₹55,000",
    emi: "₹5,000/mo",
    image: "https://www.dsktravelsdubai.com/wp-content/uploads/2024/12/desert-safari.jpg"
  },
  {
    title: "Vienna + Budapest + Prague",
    path: "/Budapest-Prague",
    days: "7 Days",
    countries: "AUSTRIA + HUNGARY + CZECH REPUBLIC",
    // cities: "3 Cities",
    // dates: "4 Dates",
    price: "₹60,000",
    emi: "₹5,400/mo",
    image: "https://th.bing.com/th/id/OIP.rZ_Aw1zfkwu0aQK1h2TryAHaEK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    title: "From Medieval Streets to Imperial Palaces",
    path: "/Medieval-Streets",
    days: "9 Days",
    countries: "CZECH REPUBLIC + AUSTRIA + HUNGARY",
    cities: "3N Prague + 3N Vienna + 2N Budapest",
    // dates: "4 Dates",
    price: "₹60,000",
    emi: "₹5,400/mo",
    image: "https://img.freepik.com/premium-photo/digital-painting-medieval-street-with-stone-buildings-towers_1187703-31670.jpg"
  }
];

const Dubai = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>Dubai Tour Packages</h1>

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
              ⭐⭐⭐⭐⭐ <span>100 Reviews</span>
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

export default Dubai;