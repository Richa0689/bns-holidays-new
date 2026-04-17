import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const DanubeCruiseLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
          alt="Danube Cruise"
        />
        <div className="hero-content">
          <h1>Danube River Cruise</h1>
          <p>7 Days • Hungary & Austria • Luxury River Experience</p>

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
            <img src="https://images.unsplash.com/photo-1526481280695-3c687fd5432c" alt="" />
            <p>Budapest</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34" alt="" />
            <p>Danube River</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1526481280695-3c687fd5432c" alt="" />
            <p>Vienna</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" alt="" />
            <p>River Cruise Views</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Choose Danube Cruise?</h2>

        <div className="why-grid">
          <div>🚢 Luxury River Cruise</div>
          <div>🏰 Historic Cities</div>
          <div>🌉 Scenic Views</div>
          <div>🍷 European Culture</div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="cta-section">
        <h2>Experience the Danube Journey</h2>
        <p>Relax and explore Europe in luxury</p>
        <br />

        <Link to="/Pages/hungary">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>7 Days Danube Cruise Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1526481280695-3c687fd5432c" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Budapest & Boarding Cruise</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Budapest City Exploration</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Scenic Sailing on Danube</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1526481280695-3c687fd5432c" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Arrival in Vienna</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Vienna City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Relax & River Views</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1526481280695-3c687fd5432c" alt="" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default DanubeCruiseLanding;