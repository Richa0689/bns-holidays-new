import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const BudapestLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1526481280695-3c687fd5432c"
          alt="Budapest"
        />
        <div className="hero-content">
          <h1>Budapest City Explorer</h1>
          <p>5 Days • 1 Country • 8 Dates • Europe’s Gem</p>

          <Link to="/Pages/hungary">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1541849546-216549ae216d" alt="" />
            <p>Budapest Parliament</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34" alt="" />
            <p>Danube River</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1526481280695-3c687fd5432c" alt="" />
            <p>Chain Bridge</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" alt="" />
            <p>Thermal Baths</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Choose Budapest?</h2>

        <div className="why-grid">
          <div>🏰 Historic Architecture</div>
          <div>🌉 Danube River Views</div>
          <div>♨️ Thermal Bath Culture</div>
          <div>🍷 European Nightlife</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Budapest Trip Now</h2>
        <p>Discover the heart of Hungary</p>
        <br />

        <Link to="/Pages/hungary">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>5 Days Budapest Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1526481280695-3c687fd5432c" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Budapest & Leisure Walk</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1541849546-216549ae216d" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>City Tour & Parliament Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Danube River Cruise</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Thermal Baths Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1526481280695-3c687fd5432c" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Shopping & Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default BudapestLanding;