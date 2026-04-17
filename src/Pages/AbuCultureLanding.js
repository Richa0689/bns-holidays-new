import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const AbuCultureLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1504274066651-8d31a36b11a"
          alt="Abu Dhabi Culture"
        />
        <div className="hero-content">
          <h1>Abu Dhabi Cultural Tour</h1>
          <p>Experience Heritage & Traditions</p>
          <Link to="/abu-dhabi">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Cultural Highlights</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1578898886655-1cd2c8b92a0" alt="" />
            <p>Sheikh Zayed Mosque</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1563720223185-11003d51935" alt="" />
            <p>Louvre Abu Dhabi</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1526481280691-9065fbc79c3" alt="" />
            <p>Desert Culture Experience</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1504274066651-8d31a53611a" alt="" />
            <p>Heritage Village</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🕌 Rich Islamic Architecture</div>
          <div>🏛️ World-Class Museums</div>
          <div>🏜️ Traditional Experiences</div>
          <div>🎭 Cultural Shows</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore Abu Dhabi Culture</h2>
        <p>Book now for a memorable cultural journey</p><br />
        <Link to="/abu-dhabi">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>5 Days Cultural Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1504274066651-8d31a53b11a" alt="Day 1" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Cultural Orientation</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1578898886655-1cd2c8bc2a0" alt="Day 2" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Visit Sheikh Zayed Grand Mosque</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1563720223185-11003d16935" alt="Day 3" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Louvre Museum & Heritage Village</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1526481280691-9065fbcc9c3" alt="Day 4" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Desert Cultural Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1504274066651-8d31a536b1a" alt="Day 5" />
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

export default AbuCultureLanding;