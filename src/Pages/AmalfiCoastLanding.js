import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const AmalfiCoastLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Amalfi Coast"
        />
        <div className="hero-content">
          <h1>Amalfi Coast Escape</h1>
          <p>Sea. Cliffs. Luxury.</p>
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
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="" />
            <p>Amalfi Coast</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1523906630133-f6934a1ab9c4" alt="" />
            <p>Positano</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" alt="" />
            <p>Sorrento</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1493558103817-58b2924bce98" alt="" />
            <p>Capri Island</p>
          </div>
        </div>
      </div>

      {/* Why Choose */}
      <div className="why-section">
        <h2>Why Choose Amalfi Tour?</h2>

        <div className="why-grid">
          <div>🌊 Stunning Coastlines</div>
          <div>🏝️ Island Excursions</div>
          <div>📸 Scenic Views</div>
          <div>🍷 Mediterranean Lifestyle</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Amalfi Trip</h2>
        <p>Book now and enjoy Italy’s most beautiful coast</p><br />
        <Link to="/italy">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>5 Days Amalfi Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Relax at Amalfi Coast</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1523906630133-f6934a1ab9c4" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Explore Positano</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Visit Sorrento & Coastal Drive</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1493558103817-58b2924bce98" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Capri Island Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="" />
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

export default AmalfiCoastLanding;