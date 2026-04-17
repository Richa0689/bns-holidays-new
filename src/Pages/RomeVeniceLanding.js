import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const RomeVeniceLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
          alt="Italy"
        />
        <div className="hero-content">
          <h1>Rome & Venice</h1>
          <p>Romance. History. Beauty.</p>
          <Link to="/italy">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1529260830199-42c24126f198" alt="" />
            <p>Colosseum</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1531572753322-ad063cecc140" alt="" />
            <p>Vatican City</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1523906630133-f6934a1ab9c4" alt="" />
            <p>Venice Canals</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" alt="" />
            <p>St Mark’s Square</p>
          </div>
        </div>
      </div>

      {/* Why Choose */}
      <div className="why-section">
        <h2>Why Choose Italy Tours?</h2>

        <div className="why-grid">
          <div>🏛️ Ancient History</div>
          <div>🚤 Gondola Rides</div>
          <div>🍝 Italian Cuisine</div>
          <div>📸 Romantic Destinations</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Italy Trip</h2>
        <p>Book now and explore Rome & Venice</p><br />
        <Link to="/italy">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>6 Days Italy Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1529260830199-42c24126f198" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Rome & Leisure</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1531572753322-ad063cecc140" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Colosseum, Roman Forum, Vatican City</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Trevi Fountain, Spanish Steps</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1523906630133-f6934a1ab9c4" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Travel to Venice</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Gondola Ride & St Mark’s Square</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" alt="" />
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

export default RomeVeniceLanding;