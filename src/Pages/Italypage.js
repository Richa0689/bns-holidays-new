import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const Italypage = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1523906630133-f6934a1ab9c4"
          alt="Italy"
        />
        <div className="hero-content">
          <h1>Explore Italy</h1>
          <p>History. Romance. Culture.</p>
          <Link to="/Pages/italy">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1502602898657-91760cbb34" alt="" />
            <p>Rome</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1499856871958-9627545d1a" alt="" />
            <p>Venice</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1543429776-278c1c3a2e" alt="" />
            <p>Florence</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1507525428034-23cf961d3e" alt="" />
            <p>Amalfi Coast</p>
          </div>
        </div>
      </div>

      {/* Why Choose */}
      <div className="why-section">
        <h2>Why Choose Italy Tours?</h2>

        <div className="why-grid">
          <div>🏛️ Rich History & Architecture</div>
          <div>🍝 World Famous Cuisine</div>
          <div>🎨 Art & Culture</div>
          <div>💑 Romantic Destinations</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Dream Italy Trip</h2>
        <p>Book now and explore the beauty of Italy</p><br />
        <Link to="/Pages/italy">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>7 Days Italy Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1502602898657-3e760cbb34" alt="Day 1" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Rome & City Orientation</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1552832230-c0197311b5" alt="Day 2" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Colosseum, Vatican City, Trevi Fountain</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1543429776-278c1c3a2e" alt="Day 3" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Travel to Florence & Sightseeing</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1473959383416-910d9c2b5e" alt="Day 4" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Explore Florence Museums & Pisa</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-14998568719585b9627545d1a" alt="Day 5" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Travel to Venice & Gondola Ride</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-150576171935-60b3a7427bad" alt="Day 6" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Venice Island Tour & Shopping</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-57198894-247b23fe5ade" alt="Day 7" />
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

export default Italypage;