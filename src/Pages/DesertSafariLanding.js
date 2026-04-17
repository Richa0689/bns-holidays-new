import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const DesertSafariLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1526481280691-9065fbc7c9c3"
          alt="Desert Safari"
        />
        <div className="hero-content">
          <h1>Desert Safari Special</h1>
          <p>Adventure in the Golden Sands</p>
          <Link to="/dubai">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1526481280691-9065fbc7c9c3" alt="" />
            <p>Desert Dune Bashing</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1502920917128-1aa500764b6a" alt="" />
            <p>Sunset Views</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c" alt="" />
            <p>Camel Ride</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a" alt="" />
            <p>BBQ Dinner & Shows</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose Desert Safari?</h2>

        <div className="why-grid">
          <div>🏜️ Thrilling Adventure</div>
          <div>🌅 Beautiful Sunsets</div>
          <div>🐪 Cultural Experience</div>
          <div>🍽️ Live Entertainment & Food</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Book Your Desert Adventure</h2>
        <p>Experience the best desert safari in Dubai</p><br />
        <Link to="/dubai">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>4 Days Desert Safari Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Evening Desert Camp</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1526481280691-9065fbc7c9c3" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Dune Bashing & Camel Ride</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1502920917128-1aa500764b6a" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Sunset Safari & Cultural Show</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a" alt="" />
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

export default DesertSafariLanding;