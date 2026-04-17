import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const BaliBeachLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1493558103817-58b2924bce"
          alt="Bali Beach"
        />
        <div className="hero-content">
          <h1>Bali Beach Retreat</h1>
          <p>Relax. Sun. Sand.</p>
          <Link to="/bali">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Beach Experiences</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="" />
            <p>Kuta Beach</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1493558103817-58b2924bce98" alt="" />
            <p>Seminyak Beach</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1502920917128-1aa500764b6a" alt="" />
            <p>Sunset Views</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1526779259212-939e64788e3c" alt="" />
            <p>Beach Resorts</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏖️ Stunning Beaches</div>
          <div>🌅 Amazing Sunsets</div>
          <div>💆 Relax & Spa</div>
          <div>🍹 Beachside Cafes</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Beach Holiday</h2>
        <p>Best deals on Bali beach tours</p><br />
        <Link to="/bali">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary Section with Images */}
      <div className="itinerary-section">
        <h2>4 Days Bali Beach Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d" alt="Day 1" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Bali & Beach Leisure</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Day 2" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Kuta Beach & Water Activities</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1502920917128-1aa500764b6a" alt="Day 3" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Relax at Resort & Sunset Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1502920917128-1aa500764b6a" alt="Day 4" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default BaliBeachLanding;