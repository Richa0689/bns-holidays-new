import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const BangaloreLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.holidify.com/images/bgImages/BANGALORE.jpg"
          alt="Bangalore"
        />
        <div className="hero-content">
          <h1>Bangalore Tour</h1>
          <p>Garden City. Tech Hub. Culture.</p>
          <Link to="/karnataka-tours">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Attractions</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Lalbagh_Bangalore_20191220124731.jpg" alt="" />
            <p>Lalbagh Garden</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_Palace_20191220124750.jpg" alt="" />
            <p>Bangalore Palace</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Cubbon_Park_20191220124807.jpg" alt="" />
            <p>Cubbon Park</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/ISKCON_Temple_20191220124826.jpg" alt="" />
            <p>ISKCON Temple</p>
          </div>
        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Visit Bangalore?</h2>

        <div className="why-grid">
          <div>🌳 Garden City of India</div>
          <div>🏙️ IT Hub & Modern Lifestyle</div>
          <div>🍽️ Amazing Food Culture</div>
          <div>🌄 Nearby Hill Stations</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore Bangalore Today</h2>
        <p>Book your Bangalore journey now</p><br />
        <Link to="/karnataka-tours">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>4 Days Tour Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://www.holidify.com/images/bgImages/BANGALORE.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>Arrive Bangalore + Drive to Mysore (140 Kms / 3 – 4 Hrs)</p>
              <p>On arrival at Bangalore, meet our chauffeur waiting for you and proceed towards Mysore. Arrive Mysore in the noon and check into the hotel. Later proceed for sightseeing of Mysore visiting Maharaja’s Palace. Later in the evening proceed to KRS Dam and Brindavan Gardens. One can also enjoy Sound & Light show in the Gardens. Evening free at leisure. Overnight in the hotel.</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Lalbagh_Bangalore_20191220124731.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Drive to Mysore – Coorg (140 Kms / 3 – 4 Hrs)</p>
              <p>After breakfast, check out of the hotel and drive to Coorg. On the way visit the famous Buddhist Monastery and the Golden Buddha Temple located in Bylekuppe. Bylekuppe - One of the largest Tibetan settlements in South India, it is known for its monasteries, handicrafts, carpet factories, and incense factory. Arrive Coorg in the evening and check into the hotel. Rest of the day free at leisure. Evening free for relaxation. Overnight in the hotel.</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/ISKCON_Temple_20191220124826.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Coorg</p>
              <p>After breakfast, enjoy sightseeing of Coorg visiting Omkareshwara Temple, Madikeri Fort, Abbey Falls and Raja’s Seat. Evening free at leisure. Overnight in the hotel.</p>
            </div>
          </div>
          <div className="day-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/ISKCON_Temple_20191220124826.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Drive Coorg – Bangalore Drop (290 Kms / 5 – 6 Hrs)</p>
              <p>After breakfast, time free until noon. Later check out of the hotel and transfer to Bangalore rail station / airport in time for your onward journey.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default BangaloreLanding;