import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const NorthGoaAdventureLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          alt="Adventure North Goa Trip"
        />

        <div className="hero-content">
          <h1>Adventure North Goa Trip</h1>
          <p>Beaches • Water Sports • Thrill</p>

          <Link to="/Pages/northgoa">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="" />
            <p>Jet Skiing</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" alt="" />
            <p>Parasailing</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" alt="" />
            <p>Banana Ride</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt="" />
            <p>Beach Exploration</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🔥 Extreme Water Sports</div>
          <div>🏖️ Beautiful Beaches</div>
          <div>📸 Adventure Photography</div>
          <div>🚗 Safe Travel Experience</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Feel the Adventure of Goa</h2>
        <p>4 Days of thrill & fun</p><br />

        <Link to="/Pages/northgoa">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>4 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Beach Resort Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Water Sports Activities</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Island & Beach Adventure</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt="" />
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

export default NorthGoaAdventureLanding;