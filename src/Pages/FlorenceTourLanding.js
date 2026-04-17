import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const FlorenceTourLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1543429776-2782fc1c3a2e"
          alt="Florence"
        />
        <div className="hero-content">
          <h1>Florence Art Tour</h1>
          <p>Art. Culture. Renaissance.</p>
          <Link to="/italy">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Attractions</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" alt="" />
            <p>Florence Cathedral</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1549887534-3ec93abae1b5" alt="" />
            <p>Uffizi Gallery</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1523906630133-f6934a1ab9c4" alt="" />
            <p>Ponte Vecchio</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1522098543979-ffc7f79d7c13" alt="" />
            <p>Michelangelo Square</p>
          </div>
        </div>
      </div>

      {/* Why Choose */}
      <div className="why-section">
        <h2>Why Choose Florence Tour?</h2>

        <div className="why-grid">
          <div>🎨 World Famous Art</div>
          <div>🏛️ Renaissance Architecture</div>
          <div>📸 Scenic Views</div>
          <div>🍝 Italian Cuisine</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Florence Trip</h2>
        <p>Book now and explore the art capital of Italy</p><br />
        <Link to="/italy">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>5 Days Florence Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1543429776-2782fc1c3a2e" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Florence & Leisure</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Florence Cathedral & City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1549887534-3ec93abae1b5" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Uffizi Gallery & Art Exploration</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1523906630133-f6934a1ab9c4" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Ponte Vecchio & Shopping</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1522098543979-ffc7f79d7c13" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default FlorenceTourLanding;