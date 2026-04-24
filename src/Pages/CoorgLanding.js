import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const CoorgLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.holidify.com/images/bgImages/COORG.jpg"
          alt="Coorg"
        />
        <div className="hero-content">
          <h1>Coorg Tour</h1>
          <p>Scotland of India. Coffee Estates. Nature.</p>
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
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Abbey_Falls_20191220130511.jpg" alt="" />
            <p>Abbey Falls</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Raja_s_Seat_20191220130532.jpg" alt="" />
            <p>Raja's Seat</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Madikeri_Fort_20191220130551.jpg" alt="" />
            <p>Madikeri Fort</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Coffee_Plantations_20191220130610.jpg" alt="" />
            <p>Coffee Plantations</p>
          </div>
        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Visit Coorg?</h2>

        <div className="why-grid">
          <div>☕ Famous Coffee Estates</div>
          <div>🌄 Scenic Hill Views</div>
          <div>🌊 Beautiful Waterfalls</div>
          <div>🌿 Peaceful Nature Retreat</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Escape to Nature in Coorg</h2>
        <p>Book your Coorg journey today</p><br />
        <Link to="/karnataka-tours">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>4 Days Tour Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://www.holidify.com/images/bgImages/COORG.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}> </p>
              <p> </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Abbey_Falls_20191220130511.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}> </p>
              <p> </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Coffee_Plantations_20191220130610.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}> </p>
              <p> </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Madikeri_Fort_20191220130551.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}> </p>
              <p> </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default CoorgLanding;