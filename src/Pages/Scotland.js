import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Classic UK Escape: London, Newport & Edinburgh Highlights",  
    days: "7 Days",
    countries: "ENGLAND + WALES + SCOTLAND",
    cities: "02N London | 02N Newport | 02N Edinburgh",
    // dates: "10 Dates",
    price: "₹2,10,000",
    emi: "₹9,500/mo",
    image: "https://tse1.mm.bing.net/th/id/OIP.5cuMNm0sMZgCIvUnbcsOKwHaFG?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "/UK-Escape"
  },
  {
    title: "Best of Edinburgh & Glasgow",
    days: "7 Days ",
    countries: "SCOTLAND",
    cities: "03 Night Edinburgh+ 03 Night Glasgow",
    price: "₹1,80,000",
    emi: "₹8,200/mo",
    image: "https://tse3.mm.bing.net/th/id/OIP.5hDnbMU1irvfq0TjzibaHwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "/Edinburgh-Glasgow"
  },
  {
    title: "Grand Britain Experience: England & Scotland Highlights",
    days: "8 Days ",
    countries: "ENGLAND + SCOTLAND",
    cities: "04N London, 03N Edinburgh",
    price: "₹1,95,000",
    emi: "₹8,800/mo",
    image: "https://wallpaperaccess.com/full/156797.jpg",
    link: "/England-Scotland"
  },
  {
    title: "Grand Britain Experience: England & Scotland Highlights",
    days: "8 Days",
    countries: "ENGLAND + SCOTLAND",
    cities: "03N London, 02N Edinburgh, 02N Glasgow",
    price: "₹1,60,000",
    emi: "₹7,500/mo",
    image: "https://th.bing.com/th/id/OIP.h9zCYxaBL4-yaTBvNqPv6wHaEo?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "/Grand-Britain"
  },
  {
    title: "Explore Edinburgh + Glasgow + Inverness",
    days: "7 Days",
    countries: "SCOTLAND",
    cities: "02N Edinburgh+ 02N Glasgow+ 02NInverness",
    // dates: "4 Dates",
    price: "₹2,80,000",
    emi: "₹12,500/mo",
    image: "https://th.bing.com/th/id/OIP.2EcxkXqb1Gkyz7avHyb-XAHaEK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "/Glasgow-Inverness"
  },
  {
    title: "Best of Edinburgh & Glasgow",
    days: "7 Days",
    countries: "SCOTLAND",
    cities: "03 Night Edinburgh+ 03 Night Glasgow",
    // dates: "4 Dates",
    price: "₹2,80,000",
    emi: "₹12,500/mo",
    image: "https://tse4.mm.bing.net/th/id/OIP.a51rtfBIIZZlTQZ_I8C6VQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "/Edinburgh-Glasgow"
  },
//   {
//     title: "Best of Barcelona + Valencia + Seville + Madrid",
//     days: "8 Days",
//     countries: "SPAIN",
//     cities: "2N Barcelona, 1N Valencia, 2N Seville, 2N Madrid",
//     // dates: "4 Dates",
//     price: "₹2,80,000",
//     emi: "₹12,500/mo",
//     image: "https://wallpaperaccess.com/full/1455073.jpg",
//     link: "/Seville-Madrid"
//   },
//   {
//     title: "From Gaudí’s Barcelona to Andalusian",
//     days: " 9 Days",
//     countries: "SPAIN",
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
//     countries: "SPAIN",
//     cities: "2N Seville, 2N Lisbon, 1N Porto",
//     // dates: "4 Dates",
//     price: "₹2,80,000",
//     emi: "₹12,500/mo",
//     image: "https://wallpapers.com/images/hd/switzerland-1920-x-1080-background-pj9eqf8k6li4z88u.jpg",
//     link: "/Lisbon-Porto"
//   },
//   {
//     title: " From Spain’s Royal Cities to Portugal’s",
//     days: "9 Days",
//     countries: "SPAIN + PORTUGAL",
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
// //   {
// //     title: "From Zurich’s Charm to Mont Blanc Views",
// //     days: "7 Days",
// //     countries: "SPAIN + FRANCE",
// //     cities: "2N Zurich + 2N Bern + 2N Geneva",
// //     // dates: "4 Dates",
// //     price: "₹2,80,000",
// //     emi: "₹12,500/mo",
// //     image: "https://wallpaperaccess.com/full/8466037.jpg",
// //     link: "/Zurich’s-Charm "
// //   },
  
];

const USA = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>Scotland Tour Packages</h1>

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