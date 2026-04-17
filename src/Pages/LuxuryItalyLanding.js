import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxuryItalyLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
          alt="Luxury Italy"
        />
        <div className="hero-content">
          <h1>Luxury Italy Tour</h1>
          <p>Elegance. Comfort. Premium Experience.</p>
          <Link to="/italy">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Luxury Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34" alt="" />
            <p>Rome</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1523906630133-f6934a1ab9c4" alt="" />
            <p>Venice</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1543429776-2782fc1c3a2e" alt="" />
            <p>Florence</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" alt="" />
            <p>Milan</p>
          </div>
        </div>
      </div>

      {/* Why Choose */}
      <div className="why-section">
        <h2>Why Choose Luxury Italy?</h2>

        <div className="why-grid">
          <div>🏨 Premium Hotels</div>
          <div>🚗 Private Transfers</div>
          <div>🍷 Fine Dining</div>
          <div>🎭 Exclusive Experiences</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Italy in Luxury</h2>
        <p>Book now and enjoy a premium Italian vacation</p><br />
        <Link to="/italy">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>9 Days Luxury Italy Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Rome & Luxury Stay</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1531572753322-ad063cecc140" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Rome Sightseeing & Vatican Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Leisure & Shopping</p>
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
              <p>Gondola Ride & City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1543429776-2782fc1c3a2e" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Travel to Florence</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1549887534-3ec93abae1b5" alt="" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p>Art & Culture Exploration</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" alt="" />
            <div className="day-content">
              <h3>Day 8</h3>
              <p>Travel to Milan & Luxury Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a" alt="" />
            <div className="day-content">
              <h3>Day 9</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default LuxuryItalyLanding;