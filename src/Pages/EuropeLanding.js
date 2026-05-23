import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const austriaTours = [
  {
    title: "Scenic Europe Escape: Ljubljana, Salzburg & Munich",
    days: "7 Days",
    countries: "SLOVENIA + AUSTRIA + GERMANY",
    cities: "Ljubljana, Salzburg & Munich",
    dates: "12 Dates",
    price: "₹2,50,000",
    emi: "₹11,500/mo",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/26/c1/cc/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_4ffab338edf9ee7e4c5d"
  },
  {
    title: "Budapest + Vienna + Prague || 06 Nights/07 Days",
    days: "7 Days",
    countries: "HUNGARY + AUSTRIA + CZECH REPUBLIC",
    cities: "Budapest, Vienna & Prague",
    dates: "8 Dates",
    price: "₹3,10,000",
    emi: "₹14,200/mo",
    image: "https://vlt.tours/wp-content/uploads/2025/11/upload-1200.webp"
  },
  {
    title: "Budapest + Vienna + Prague 08 Nights/09 Days",
    days: "9 Days",
    countries: "HUNGARY + AUSTRIA + CZECH REPUBLIC",
    cities: "Budapest, Vienna & Prague",
    dates: "6 Dates",
    price: "₹2,75,000",
    emi: "₹12,700/mo",
    image: "https://www.catsninelives.com/wp-content/uploads/2023/04/Cats-Nine-Lives-Prague-54.jpg"
  },
   {
    title: "Munich + Innsbruck + Salzburg + Vienna||08 Nights/09 Days",
    days: "9 Days",
    countries: "GERMANY + AUSTRIA",
    cities: "Vienna, Munich & Zurich",
    dates: "10 Dates",
    price: "₹1,85,000",
    emi: "₹8,500/mo",
    image: "https://www.railbookers.com/sites/railbookers/files/styles/hero/public/images/Innsbruck-Mountains-River.jpg?h=6e972868&itok=j9rFCOgT"
  },
  {
    title: "Best of Vienna/Munich/Zurich || 06 Nights/07 Days",
    days: "7 Days",
    countries: "GERMANY + SWITZERLAND + AUSTRIA",
    cities: "Vienna, Munich & Zurich",
    dates: "10 Dates",
    price: "₹1,85,000",
    emi: "₹8,500/mo",
    image: "https://res-2.cloudinary.com/gorealtravel/image/upload/f_auto,q_auto,q_50/v1733565690/production/marketing/itinerary/67541b35e8c263000bb727b9/marketing_picture/67541cfae8c263000bb72826/file/prague-river-and-castle-view-small.webp"
  },
  {
    title: "Best of Vienna/Munich/Zurich || 07 Nights/08 Days",
    days: "8 Days",
    countries: "GERMANY + SWITZERLAND + AUSTRIA",
    cities: "Vienna, Munich & Zurich",
    dates: "10 Dates",
    price: "₹1,85,000",
    emi: "₹8,500/mo",
    image: "https://res-2.cloudinary.com/gorealtravel/image/upload/f_auto,q_auto,q_50/v1713362978/production/marketing/itinerary/661fd80e0273341195707608/marketing_picture/661fd81a02733411957076d0/file/2.webp"
  },
  {
    title: "Zurich + Innsbruck + Salzburg || 06 Nights/07 Days",
    days: "7 Days",
    countries: "SWITZERLAND + AUSTRIA + GERMANY",
    cities: "Vienna, Munich & Zurich",
    dates: "10 Dates",
    price: "₹1,85,000",
    emi: "₹8,500/mo",
    image: "https://pictures.tripmasters.com/images/apkg/1730/innsbruck_-_aerial_view-1030503-500.jpg"
  },
  {
    title: "Vienna + Budapest + Prague || 06 Nights/07 Days",
    days: "7 Days",
    countries: "AUSTRIA + HUNGARY + CZECH REPUBLIC",
    cities: "Vienna, Budapest & Prague",
    dates: "10 Dates",
    price: "₹1,85,000",
    emi: "₹8,500/mo",
    image: "https://vlt.tours/wp-content/uploads/2025/11/upload-1200.webp"
  },
  {
    title: "Munich + Innsbruck + Salzburg + Vienna||08 Nights/09 Days",
    days: "9 Days",
    countries: "GERMANY + AUSTRIA",
    cities: "munich, Innsbruck, Salzburg & Vienna",
    dates: "10 Dates",
    price: "₹1,85,000",
    emi: "₹8,500/mo",
    image: "https://tripophia.net/media/catalog/product/1/_/1_32__2_30.jpg"
  },
  {
    title: "From Munich’s Majesty to Innsbruck’s Alps|| 6N/7D",
    days: "7 Days",
    countries: "AUSTRIA",
    cities: "Munich, Innsbruck & Salzburg",
    dates: "10 Dates",
    price: "₹1,85,000",
    emi: "₹8,500/mo",
    image: "https://images.daytrip.com/Innsbruck4as.jpeg?w=2048&q=30"
  },
  {
    title: "From Medieval Streets to Imperial Palaces|| 9N/10D",
    days: "10 Days",
    countries: "CZECH REPUBLIC + AUSTRIA + HUNGARY",
    cities: "Prague, Vienna & Budapest",
    dates: "10 Dates",
    price: "₹1,85,000",
    emi: "₹8,500/mo",
    image: "https://images.greeka.com/resized/user_images/WinfriedRusch/580/php2p1zDu.jpg"
  }
];

const EuropeLanding = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">

      <h1>Austria Tour Packages</h1>

      {austriaTours.map((tour, index) => (
        <div className="tour-card" key={index}>

          <div className="tour-image">
            <span className="badge">Popular Today</span>
            <img src={tour.image} alt={tour.title} />
          </div>

          <div className="tour-info">
            <div className="tour-info">
  <h2>
    {tour.title === "Scenic Europe Escape: Ljubljana, Salzburg & Munich" ? (
      <Link to="/austria-landing" className="title-link">{tour.title}</Link>
    ) : tour.title === "Budapest + Vienna + Prague || 06 Nights/07 Days" ? (
      <Link to="/austria-landing-2" className="title-link">{tour.title}</Link>
    ) : tour.title === "Budapest + Vienna + Prague 08 Nights/09 Days" ? (
      <Link to="/austria-landing-3" className="title-link">{tour.title}</Link>
    ) : tour.title === "Best of Vienna/Munich/Zurich || 06 Nights/07 Days" ? (
      <Link to="/austria-landing-4" className="title-link">{tour.title}</Link>
    ) : (
      tour.title === "Munich + Innsbruck + Salzburg + Vienna||08 Nights/09 Days" ? (
        <Link to="/austria-landing-5" className="title-link">{tour.title}</Link>
      ) : (
        tour.title === "Best of Vienna/Munich/Zurich || 07 Nights/08 Days" ? (
          <Link to="/austria-landing-6" className="title-link">{tour.title}</Link>
        ) : (
          tour.title === "Zurich + Innsbruck + Salzburg || 06 Nights/07 Days" ? (
            <Link to="/austria-landing-7" className="title-link">{tour.title}</Link>
          ) : (
            tour.title === "Vienna + Budapest + Prague || 06 Nights/07 Days" ? (
              <Link to="/austria-landing-8" className="title-link">{tour.title}</Link>
            ) : (
              tour.title === "From Munich’s Majesty to Innsbruck’s Alps|| 6N/7D" ? (
                <Link to="/austria-landing-9" className="title-link">{tour.title}</Link>
              ) : (
                tour.title === "From Medieval Streets to Imperial Palaces|| 9N/10D" ? (
                  <Link to="/austria-landing-10" className="title-link">{tour.title}</Link>
                ) : (
                  tour.title
                )
              )
            )
          )
        )
      )
    )}
  </h2>

  <p className="details">
    {tour.days} • {tour.countries} • {tour.cities}, {tour.dates}
  </p>
</div>
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

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-header">
              <h2>Tour Includes</h2>
              <span className="close-btn" onClick={() => setShowModal(false)}>✕</span>
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
              <p>👨‍✈️ Tour includes the services of <b>BNS Holidays</b>.</p>
              <p className="note">
                *Except for joining/leaving. To & fro economy class airfare is included.
                <br />*Taxes Extra.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default EuropeLanding;