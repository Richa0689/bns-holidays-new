import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Classic UK Escape: London, Cardiff & Liverpool Highlights ",
    days: "7 Days",
    countries: "ENGLAND + WALES",
    cities: "02N London | 02N Cardiff | 02N Liverpool",
    // dates: "10 Dates",
    price: "₹2,10,000",
    emi: "₹9,500/mo",
    image: "https://escapetobritain.com/wp-content/uploads/2022/10/visit-liverpool_1925176130.jpeg",
    link: "/UK-Escape"
  },
  {
    title: "Classic UK Escape: London, Cardiff & Manchester Highlights ",
    days: "7 Days ",
    countries: "ENGLAND + WALES",
    cities: "02N London | 02N Cardiff | 02N Manchester",
    price: "₹1,80,000",
    emi: "₹8,200/mo",
    image: "https://tse4.mm.bing.net/th/id/OIP.Saquj4T9bb6TOlZpTxdbSQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "/Cardiff-Manchester"
  },
  {
    title: "Classic UK Escape: London, Newport & Edinburgh Highlights  ",
    days: "7 Days ",
    countries: "ENGLAND + WALES + SCOTLAND",
    cities: "02N London | 02N Newport | 02N Edinburgh",
    price: "₹1,95,000",
    emi: "₹8,800/mo",
    image: "https://tse3.mm.bing.net/th/id/OIP.vWjtn34PXpvp7bX3kKn6uAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "/ London-Newport"
  },
  {
    title: "Grand Britain Experience: England & Scotland Highlights",
    days: "8 Days",
    countries: "ENGLAND + SCOTLAND",
    cities: "04N London, 03N Edinburgh",
    // dates: "7 Dates",
    price: "₹1,60,000",
    emi: "₹7,500/mo",
    image: "https://www.marcieinmommyland.com/wp-content/uploads/2023/03/Carlton-Hill-in-Edinburgh.jpg",
    link: "/Grand-Britain "
  },
  {
    title: "Classic UK Explorer|",
    days: "7 Days",
    countries: "ENGLAND",
    cities: "4N LONDON & 2N MANCHESTER",
    // dates: "4 Dates",
    price: "₹2,80,000",
    emi: "₹12,500/mo",
    image: "https://cdn.prod.website-files.com/6717e51a568b34f160a4e990/693139fb0dce5428e3809f73_60Classic_white_yacht_sailing_blue_ocean_vibrant_sunset_sky_1920x1080.webp",
    link: "/Classic-UK"
  },
  {
    title: "Classic Europe Escape: London & Amsterdam Highlights",
    days: "7 Days",
    countries: "ENGLAND + NETHERLANDS",
    cities: "03N London, 03N Amsterdam",
    // dates: "4 Dates",
    price: "₹2,80,000",
    emi: "₹12,500/mo",
    image: "https://www.flyingandtravel.com/wp-content/uploads/2018/06/things-to-do-in-amsterdam-travel-tips.jpg",
    link: "/Classic-Europe"
  },
  {
    title: " Classic UK Explorer",
    days: "8 Days",
    countries: "ENGLAND",
    cities: "3N LONDON, 2N BIRMINGHAM & 2N MANCHESTER",
    // dates: "4 Dates",
    price: "₹2,80,000",
    emi: "₹12,500/mo",
    image: "https://tse4.mm.bing.net/th/id/OIP.sMEeRpY6ddjho1ygjfQJCwHaDt?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "/classic-uK"
  },
  {
    title: "Grand Britain Experience: England & Scotland Highlights",
    days: "8  Days",
    countries: "03N London, 02N Edinburgh, 02N Glasgow",
    cities: "4N LONDON & 2N MANCHESTER",
    // dates: "4 Dates",
    price: "₹2,80,000",
    emi: "₹12,500/mo",
    image: "https://media.vintrica.com/tr:f-auto/gb-bg.jpg",
    link: "/Grand-Britain "
  },
  {
    title: "Explore London + Ireland Combination",
    days: "7 Days",
    countries: "ENGLAND + IRELAND",
    cities: "03 Night London +03Night Dublin",
    // dates: "4 Dates",
    price: "₹2,80,000",
    emi: "₹12,500/mo",
    image: "https://tse1.mm.bing.net/th/id/OIP.NBdvC2RUFFwxPpxiF0W_ZQHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "/London-Ireland "
  },
  {
    title: "British Isles Grand Discovery: London, Dublin & Belfast",
    days: "10 Days",
    countries: "ENGLAND + IRELAND + NORTHERN IRELAND",
    cities: "03N London, 03N Dublin, 03N Belfast",
    // dates: "4 Dates",
    price: "₹2,80,000",
    emi: "₹12,500/mo",
    image: "https://intersightholidays.com/storage/package/1750242021685292e552766.webp",
    link: "/Grand-Discovery"
  }
];

const USA = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>England Tour Packages</h1>

      {tours.map((tour, index) => (
        <div className="tour-card" key={index}>

          <div className="tour-image">
            <span className="badge">Popular Today</span>
            <img src={tour.image} alt={tour.title} />
          </div>

          <div className="tour-info">
            <h2>
              {tour.link ? (
                <Link to={tour.link} className="title-link">{tour.title}</Link>
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

      {/*  Modal */}
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

export default USA;