import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const AbuLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3"
          alt="Abu Dhabi"
        />
        <div className="hero-content">
          <h1>Explore Abu Dhabi</h1>
          <p>Luxury. Culture. Adventure.</p>
          <Link to="/Pages/abu-dhabi">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1578898886655-1cd2c8b9c2a" alt="" />
            <p>Sheikh Zayed Mosque</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1563720223185-11003d51695" alt="" />
            <p>Ferrari World</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1526481280691-9065fbc7c93" alt="" />
            <p>Desert Safari</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1504274066651-8d31a536b1a" alt="" />
            <p>Corniche Beach</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose Abu Dhabi?</h2>

        <div className="why-grid">
          <div>🕌 Rich Culture & Heritage</div>
          <div>🏎️ Ferrari World Adventure</div>
          <div>🏜️ Desert Safari Experience</div>
          <div>🏖️ Luxury Beaches</div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Plan Your Abu Dhabi Trip</h2>
        <p>Book now and enjoy premium travel experience</p><br />
        <Link to="/Pages/abu-dhabi">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary Section */}
      <div className="itinerary-section">
        <h2>5 Days Abu Dhabi Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1589308078059-be1415eab" alt="Day 1" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Abu Dhabi & City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1578898886655-1cd2c8b9c" alt="Day 2" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Visit Sheikh Zayed Grand Mosque</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1563720223185-11003d516" alt="Day 3" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Ferrari World Theme Park</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1526481280691-9065fbc7c" alt="Day 4" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Desert Safari & Cultural Show</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1504274066651-8d31a536" alt="Day 5" />
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

export default AbuLanding;