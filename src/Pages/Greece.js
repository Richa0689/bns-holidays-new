import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Athens",  
    days: "4 Days",
    countries: "Greece",
    cities: "3N Athens",
    // dates: "10 Dates",
    // price: "₹2,10,000",
    emi: "₹9,500/mo",
    image: "https://media1.thrillophilia.com/filestore/lkfeq29j545x49q7b31uz28cp35s_shutterstock_1926669674.jpg?w=580&dpr=2",
    link: "/Athens-Greece"
  },
  {
    title: "Athens, Mykonos, Santorini & Heraklion",
    days: "9 Days ",
    countries: "Greece",
    cities: "Athens 2N + Mykonos 2N + Santorini 2N + Heraklion 2N",
    price: "₹1,80,000",
    emi: "₹8,200/mo",
    image: "https://www.iberia.com/content/dam/iberia-cheap-flights-landings/images/destinations/cities/eu/de/muc/MUC-info.jpg",
    link: "/Athens-Mykonos"
  },
  {
    title: "Glimpses of Greece ",
    days: "6 Days ",
    countries: "Greece",
    cities: "Athens 2N + Santorini 3N",
    price: "₹1,95,000",
    emi: "₹8,800/mo",
    image: "https://wallpaperaccess.com/full/156797.jpg",
    link: "/Glimpses-Greece"
  },
  {
    title: "Best of Barcelona + Ibiza + Madrid",
    days: "8 Days",
    countries: "Greece",
    cities: "2N Barcelona, 2N Ibiza, 2N Madrid",
    price: "₹1,60,000",
    emi: "₹7,500/mo",
    image: "https://tse3.mm.bing.net/th/id/OIP.FFOaBbccF8rrCWzLTdiBxAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "/Best-Barcelona"
  },
  {
    title: "Best of Barcelona + Madrid",
    days: "7 Days",
    countries: "Greece",
    cities: "2N Barcelona, 2N Madrid",
    // dates: "4 Dates",
    price: "₹2,80,000",
    emi: "₹12,500/mo",
    image: "https://cdn.wallpapersafari.com/50/75/3FnJQI.jpg",
    link: "/Barcelona-Madridd"
  },
  {
    title: "Best of Barcelona + Valencia + Malaga + Seville",
    days: "4 Days",
    countries: "Greece",
    cities: "Myoknos 3N",
    // dates: "4 Dates",
    price: "₹2,80,000",
    emi: "₹12,500/mo",
    image: "https://wallpaperaccess.com/full/7946470.jpg",
    link: "/Valencia-Malaga"
  },
  {
    title: "Best of Barcelona + Valencia + Seville + Madrid",
    days: "4 Days",
    countries: "Greece",
    cities: "2N Barcelona, 1N Valencia, 2N Seville, 2N Madrid",
    // dates: "4 Dates",
    price: "₹2,80,000",
    emi: "₹12,500/mo",
    image: "https://wallpaperaccess.com/full/1455073.jpg",
    link: "/Seville-Madrid"
  },
//   {
//     title: "From Gaudí’s Barcelona to Andalusian",
//     days: " 9 Days",
//     countries: "Greece",
//     cities: "3N Barcelona + 3N Madrid + 2N Seville",
//     // dates: "4 Dates",
//     price: "₹2,80,000",
//     emi: "₹12,500/mo",
//     image: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/11/29111159/lauterbrunnen.jpeg",
//     link: "/Barcelona-Andalusian"
//   },
//   {
//     title: "Best of Seville + Lisbon + Porto",
//     days: "6 Days",
//     countries: "Greece",
//     cities: "2N Seville, 2N Lisbon, 1N Porto",
//     // dates: "4 Dates",
//     price: "₹2,80,000",
//     emi: "₹12,500/mo",
//     image: "https://wallpapers.com/images/hd/switzerland-1920-x-1080-background-pj9eqf8k6li4z88u.jpg",
//     link: "/Lisbon-Porto"
//   },
//   {
//     title: " From Greece’s Royal Cities to Portugal’s",
//     days: "8 Days",
//     countries: "Greece + PORTUGAL",
//     cities: "3N Madrid + 3N Lisbon + 2N Faro",
//     // dates: "4 Dates",
//     price: "₹2,80,000",
//     emi: "₹12,500/mo",
//     image: "https://wallpaperaccess.com/full/844198.jpg",
//     link: "/Cities-Portugal’s"
//   },
//   {
//     title: "Spanish–French Riviera Delight",
//     days: "7 Days",
//     countries: "SPAIN + PORTUGAL",
//     cities: "(3N BARCELONA & 3N NICE",
//     // dates: "4 Dates",
//     price: "₹2,80,000",
//     emi: "₹12,500/mo",
//     image: "https://wallpapercave.com/wp/wp13056227.jpg",
//     link: "/Riviera-Delight" 
//   },
//   {
//     title: "From Zurich’s Charm to Mont Blanc Views",
//     days: "7 Days",
//     countries: "SPAIN + FRANCE",
//     cities: "2N Zurich + 2N Bern + 2N Geneva",
//     // dates: "4 Dates",
//     price: "₹2,80,000",
//     emi: "₹12,500/mo",
//     image: "https://wallpaperaccess.com/full/8466037.jpg",
//     link: "/Zurich’s-Charm "
//   },
  
];

const USA = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>Greece Tour Packages</h1>

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