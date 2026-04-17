import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const AbuCityLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1546410531-bb4caa6b42d"
          alt="Abu Dhabi City"
        />
        <div className="hero-content">
          <h1>Abu Dhabi City Tour</h1>
          <p>Explore Culture & Modern Wonders</p>
          <Link to="/abu-dhabi">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Attractions</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1578898886655-1cd2c8b9c2a0" alt="" />
            <p>Sheikh Zayed Mosque</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a" alt="" />
            <p>Emirates Palace</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1563720223185-11003d516935" alt="" />
            <p>Ferrari World</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1526481280691-9065fbc7c9c3" alt="" />
            <p>Corniche</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🕌 Cultural Landmarks</div>
          <div>🏙️ Modern Architecture</div>
          <div>🏎️ Theme Parks</div>
          <div>🛍️ Shopping & Leisure</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Abu Dhabi City Tour</h2>
        <p>Book now for the best experience</p><br />
        <Link to="/abu-dhabi">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>4 Days Abu Dhabi City Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d" alt="Day 1" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & City Orientation</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1578898886655-1cd2c8b9c2a0" alt="Day 2" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Sheikh Zayed Mosque & Emirates Palace</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1563720223185-11003d516935" alt="Day 3" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Ferrari World & Yas Island</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1526481280691-9065fbc7c9c3" alt="Day 4" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Corniche Walk & Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AbuCityLanding;