import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxuryHungaryLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1526481280695-3c687fd5432c"
          alt="Luxury Hungary"
        />
        <div className="hero-content">
          <h1>Luxury Hungary Tour</h1>
          <p>8 Days • Budapest, Eger & Lake Balaton • Premium Experience</p>

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
            <p>Budapest</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1526481280695-3c687fd5432c" alt="" />
            <p>Eger Town</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" alt="" />
            <p>Lake Balaton</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34" alt="" />
            <p>Danube Views</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Choose Luxury Hungary Tour?</h2>

        <div className="why-grid">
          <div>🏨 Premium Hotels</div>
          <div>🍷 Wine Regions (Eger)</div>
          <div>🏞️ Scenic Lake Balaton</div>
          <div>🚗 Private Transfers</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Luxury in Hungary</h2>
        <p>Travel in comfort with exclusive experiences</p>
        <br />

        <Link to="/Pages/hungary">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>8 Days Luxury Hungary Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1526481280695-3c687fd5432c" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Budapest & Luxury Stay</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1541849546-216549ae216d" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Budapest City Tour & Fine Dining</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Danube Cruise Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1526481280695-3c687fd5432c" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Travel to Eger & Wine Tasting</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Explore Eger Town</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Lake Balaton Relaxation</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1526481280695-3c687fd5432c" alt="" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p>Return to Budapest & Shopping</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1526481280695-3c687fd5432c" alt="" />
            <div className="day-content">
              <h3>Day 8</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default LuxuryHungaryLanding;