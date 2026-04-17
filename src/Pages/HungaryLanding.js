import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const HungaryLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1541849546-216549ae216d"
          alt="Hungary"
        />
        <div className="hero-content">
          <h1>Best of Hungary</h1>
          <p>Thermal baths. Danube views. Historic beauty.</p>

          <Link to="/Pages/hungary">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
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
            <img src="https://images.unsplash.com/photo-1541849546-216549ae216d" alt="" />
            <p>Szentendre</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1526481280695-3c687fd5432c" alt="" />
            <p>Lake Balaton</p>
          </div>
        </div>
      </div>

      {/* Why Choose */}
      <div className="why-section">
        <h2>Why Choose Hungary?</h2>

        <div className="why-grid">
          <div>🏰 Historic Architecture</div>
          <div>♨️ Thermal Baths</div>
          <div>🌉 Danube River Views</div>
          <div>🍷 Wine & Culture</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Dream Hungary Trip</h2>
        <p>Book now and explore the beauty of Hungary</p><br />

        <Link to="/Pages/hungary">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>6 Days Hungary Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1526481280695-3c687fd5432c" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Budapest & Leisure Evening</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1541849546-216549ae216d" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Budapest City Tour & Parliament Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Danube River Cruise Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1526481280695-3c687fd5432c" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Visit Szentendre Artistic Town</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1541849546-216549ae216d" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Lake Balaton Relaxation Day</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Shopping & Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default HungaryLanding;