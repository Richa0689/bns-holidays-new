import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const AbuFerrariLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-151868409-3c830dcef090"
          alt="Ferrari World Abu Dhabi"
        />
        <div className="hero-content">
          <h1>Abu Dhabi & Ferrari World</h1>
          <p>Speed. Luxury. Adventure.</p>
          <Link to="/abu-dhabi">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1563720223185-11003d51935" alt="" />
            <p>Ferrari World Rides</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1578898886655-1cd2c8b92a0" alt="" />
            <p>Sheikh Zayed Mosque</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1526481280691-9065fbcc9c3" alt="" />
            <p>Desert Safari</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1504274066651-8d31a56b11a" alt="" />
            <p>Corniche & City Views</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏎️ World’s Fastest Roller Coaster</div>
          <div>🎢 Thrilling Theme Park</div>
          <div>🕌 Cultural Sightseeing</div>
          <div>🏜️ Desert Adventure</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Ferrari World</h2>
        <p>Book now for an unforgettable adventure</p><br />
        <Link to="/abu-dhabi">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>4 Days Ferrari World Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1518684079-" alt="Day 1" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1563720223185-1100d516935" alt="Day 2" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Full Day at Ferrari World</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1578898886655-1cd28b9c2a0" alt="Day 3" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Sheikh Zayed Mosque & Leisure</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1526481280691-906fbc7c9c3" alt="Day 4" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Desert Safari & Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AbuFerrariLanding;