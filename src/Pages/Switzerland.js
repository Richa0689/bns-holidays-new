import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Best of Swiss & France",
    days: "8 Days",
    countries: "FRANCE + SWITZERLAND",
    cities: "2N Paris + 2N Geneva + 3N Zurich",
    dates: "10 Dates",
    // price: "₹2,10,000",
    emi: "₹9,500/mo",
    image: "https://media1.thrillophilia.com/filestore/lkfeq29j545x49q7b31uz28cp35s_shutterstock_1926669674.jpg?w=580&dpr=2",
    link: "/Swiss-France"
  },
  {
    title: "Best of Vienna/Munich/Zurich",
    days: "7 Days ",
    countries: "GERMANY + SWITZERLAND + AUSTRIA",
    cities: "2N Vienna + 2N Munich + 2N Zurich",
    price: "₹1,80,000",
    emi: "₹8,200/mo",
    image: "https://www.iberia.com/content/dam/iberia-cheap-flights-landings/images/destinations/cities/eu/de/muc/MUC-info.jpg",
    link: "/Munich-Zurich"
  },
  {
    title: "Best of Vienna/Munich/Zurich",
    days: "8 Days ",
    countries: "GERMANY + SWITZERLAND + AUSTRIA",
    cities: "3N Vienna + 2N Munich + 2N Zurich",
    price: "₹1,95,000",
    emi: "₹8,800/mo",
    image: "https://wallpaperaccess.com/full/156797.jpg",
    link: "/Best-Vienna"
  },
  {
    title: "GOLDEN WEST COAST 2026 | 6 Nights / 7 Days",
    days: "7 Days",
    countries: "SWITZERLAND + AUSTRIA + GERMANY",
    cities: "Las Vegas • Los Angeles • Fresno •  San Francisco",
    price: "₹1,60,000",
    emi: "₹7,500/mo",
    image: "https://tse3.mm.bing.net/th/id/OIP.FFOaBbccF8rrCWzLTdiBxAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "/vegas-grand-canyon"
  },
  {
    title: "Zurich + Bern + Geneva",
    days: "8 Days",
    countries: "SWITZERLAND",
    // cities: "5 Cities",
    // dates: "4 Dates",
    price: "₹2,80,000",
    emi: "₹12,500/mo",
    image: "https://cdn.wallpapersafari.com/50/75/3FnJQI.jpg",
    link: "/Zurich-Bern"
  },
  {
    title: "Explore Geneva + Montreux + Zermatt",
    days: "7 Days",
    countries: "SWITZERLAND",
    cities: "Geneva 2N + Montreux 2N + Zermatt 2N",
    // dates: "4 Dates",
    price: "₹2,80,000",
    emi: "₹12,500/mo",
    image: "https://wallpaperaccess.com/full/7946470.jpg",
    link: "/Explore-Geneva"
  },
  {
    title: "Glimpses of Switzerland ",
    days: "7 Days",
    countries: "SWITZERLAND",
    cities: "2N LUCERNE, 2N INTERLAKEN & 2N GENEVA",
    // dates: "4 Dates",
    price: "₹2,80,000",
    emi: "₹12,500/mo",
    image: "https://wallpaperaccess.com/full/1455073.jpg",
    link: "/Glimpses-Switzerland "
  },
  {
    title: "From Rhine fall to Glacier 3000   ",
    days: "8 Days",
    countries: "SWITZERLAND",
    cities: "3N Lucerne, 2N Interlaken, 2N Montreux",
    // dates: "4 Dates",
    price: "₹2,80,000",
    emi: "₹12,500/mo",
    image: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/11/29111159/lauterbrunnen.jpeg",
    link: "/Rhine-fall"
  },
  {
    title: "Scenic Switzerland Discovery ",
    days: "10 Days",
    countries: "SWITZERLAND",
    cities: "3N Lucerne, 2N Interlaken, 2N Zermatt, 2N Montreux",
    // dates: "4 Dates",
    price: "₹2,80,000",
    emi: "₹12,500/mo",
    image: "https://wallpapers.com/images/hd/switzerland-1920-x-1080-background-pj9eqf8k6li4z88u.jpg",
    link: "/Scenic-Switzerland Discovery"
  },
  {
    title: " Swiss Panorama Experience: Montreux, Lausanne & Geneva",
    days: "7 Days",
    countries: "SWITZERLAND",
    cities: "02N Montreux, 02n Lausanne, 02N Geneva",
    // dates: "4 Dates",
    price: "₹2,80,000",
    emi: "₹12,500/mo",
    image: "https://wallpaperaccess.com/full/844198.jpg",
    link: "/Swiss-Panorama"
  },
  {
    title: "Best of Engelberg + Grindelwald + Zurich",
    days: "7 Days",
    countries: "SWITZERLAND",
    cities: "N 02 Engelberg+02 N Grindelwald+02 Zurich",
    // dates: "4 Dates",
    price: "₹2,80,000",
    emi: "₹12,500/mo",
    image: "https://wallpapercave.com/wp/wp13056227.jpg",
    link: "/Best-Engelberg" 
  },
  {
    title: "From Zurich’s Charm to Mont Blanc Views",
    days: "7 Days",
    countries: "SWITZERLAND",
    cities: "2N Zurich + 2N Bern + 2N Geneva",
    // dates: "4 Dates",
    price: "₹2,80,000",
    emi: "₹12,500/mo",
    image: "https://wallpaperaccess.com/full/8466037.jpg",
    link: "/Zurich’s-Charm "
  },
  
];

const USA = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>Switzerland Tour Packages</h1>

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