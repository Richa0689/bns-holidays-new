import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const franceTours = [
  {
    title: "From Windmills to the Eiffel 06 Nights/07 Days",
    path: "/france-landing2",
    days: "7 Days",
    countries: "NETHERLANDS + FRANCE",
    cities: " Amsterdam, Paris",
    dates: "5 Dates",
    price: "₹1,60,000",
    emi: "₹14,000/mo",
    image:
      "https://www.royalcaribbean.com/media-assets/pmc/content/dam/shore-x/paris-le-havre-leh/lh17-paris-sightseeing-without-lunch/stock-photo-skyline-of-paris-with-eiffel-tower-at-sunset-in-paris-france-eiffel-tower-is-one-of-the-most-752725282.jpg?w=1920"
  },
  {
    title: "Best of Swiss & France || 07 Nights/08 Days",
    path: "/france-landing3",
    days: "8 Days",
    countries: "FRANCE + SWITZERLAND",
    cities: "Paris,Geneva,Zurich",
    dates: "5 Dates",
    price: "₹1,85,000",
    emi: "₹16,200/mo",
    image:
      "https://www.onthegotours.com/repository/atv1-Gruyeres-20221115231723.jpg"
  },
  {
    title: "From Windmills to the Eiffel 06 Nights/07 Days",
    path: "/france-landing4",
    days: "7 Days",
    countries: "NETHERLANDS + BELGIUM + FRANCE",
    cities: "Amsterdam , Brussels ,Paris ",
    dates: "5 Dates",
    price: "₹1,60,000",
    emi: "₹14,000/mo",
    image:
      "https://thumbs.dreamstime.com/b/floral-windmill-steam-engine-train-eiffel-tower-beautiful-colorful-flowers-inside-famous-miracle-garden-dubai-372471009.jpg"
  },
  {
    title: "Amsterdam to Paris Escape|| 08 Nights / 09 Days",
    path: "/france-landing5",
    days: "9 Days",
    countries: "NETHERLANDS + BELGIUM + FRANCE",
    cities: "Amsterdam , Brussels ,Paris",
    dates: "5 Dates",
    price: "₹1,95,000",
    emi: "₹17,200/mo",
    image:
      "https://res.klook.com/image/upload/fl_lossy.progressive,q_60/Mobile/City/swox6wjsl5ndvkv5jvum.jpg"
  },
   {
    title: "Spanish–French Riviera Delight|| 06 Nights / 07 Days",
    path: "/france-landing6",
    days: "6 Days",
    countries: "SPAIN + FRANCE",
    cities: "Barcelona, Nice",
    dates: "5 Dates",
    price: "₹1,55,000",
    emi: "₹13,600/mo",
    image:
      "https://images.squarespace-cdn.com/content/v1/5dc482398b0f251be08da4f3/1598555562284-DJF2IN5C177CIBKQSS83/FrenchRiviera-Hero.jpg?format=2500w"
  },
  {
    title: "Best of Paris + Lyon + Marseille|| 06 Nights/07 Days",
    path: "/france-landing7",
    days: "7 Days",
    countries: "FRANCE",
    cities: "Paris, Lyon , Marseille ",
    dates: "5 Dates",
    price: "₹1,45,000",
    emi: "₹12,700/mo",
    image:
      "https://media.istockphoto.com/id/1351435368/photo/lyon-france-panoramic-view-in-summer.jpg?s=612x612&w=0&k=20&c=kiQoCIdkg1Dyr2p7GaObjmk2EcYnvIN9sWiF5Qe2lwk="
  },
  {
    title: "France Grand Discovery: Paris, Marseille & French Riviera 09 N / 10 D",
    path: "/france-landing8",
    days: "10 Days",
    countries: "FRANCE",
    cities: "Paris,  Marseille,  Nice",
    dates: "5 Dates",
    price: "₹2,10,000",
    emi: "₹18,400/mo",
    image:
      "https://ultra1911.com/cdn/shop/articles/sea-coast-lighthouse-town-river-cityscape-562439-pxhere.com.jpg?v=1666713203"
  },
  {
    title: "France City Explorer|| 06 Nights / 07 Days",
    path: "/france-landing9",
    days: "7 Days",
    countries: "FRANCE",
    cities: "Paris, Nice ",
    dates: "5 Dates",
    price: "₹1,30,000",
    emi: "₹11,400/mo",
    image:
      "https://www.longtermrentalsinfrance.com/images/1320/bordeaux-city-france.jpg"
  },
  {
    title: "From the French Riviera to Milan’s Elegance || 6N/7D",
    path: "/france-landing10",
    days: "7 Days",
    countries: "FRANCE + ITALY",
    cities: "Nice, Monaco ,Milan",
    dates: "5 Dates",
    price: "₹1,25,000",
    emi: "₹11,000/mo",
    image:
      "https://www.tripsavvy.com/thmb/YJBDYtqVoIgImpcJJvLuTqtBovs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Nice-bf62cc29a2af4e799b519bf2a0b0a71f.jpg"
  }
];

const FranceLanding = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">

      <h1>France Tour Packages</h1>

      {franceTours.map((tour, index) => (
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
             Send Query
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

export default FranceLanding;