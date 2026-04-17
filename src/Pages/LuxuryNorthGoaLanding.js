import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxuryNorthGoaLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Luxury North Goa Tour"
        />

        <div className="hero-content">
          <h1>Luxury North Goa Tour</h1>
          <p>Luxury • Beaches • Comfort</p>

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
            <p>Candolim Beach Luxury Stay</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" alt="" />
            <p>Private Beach Resorts</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" alt="" />
            <p>Sunset Cruise</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt="" />
            <p>Fine Dining Experience</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>👑 Premium Beach Resorts</div>
          <div>🌴 Private Experiences</div>
          <div>🍽️ Luxury Dining</div>
          <div>🚗 Comfortable Transfers</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Luxury in Goa</h2>
        <p>6 Days of premium comfort</p><br />

        <Link to="/Pages/northgoa">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>6 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Luxury Resort Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Private Beach Relaxation</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Sunset Cruise Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>North Goa Sightseeing</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Leisure & Spa Day</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default LuxuryNorthGoaLanding;