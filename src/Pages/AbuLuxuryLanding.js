import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxuryAbuDhabiLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3"
          alt="Luxury Abu Dhabi"
        />
        <div className="hero-content">
          <h1>Luxury Abu Dhabi Tour</h1>
          <p>Experience Royal Luxury & Arabian Elegance</p>
          <Link to="/Pages/abu-dhabi">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1504274066651-8d31a56b11a" alt="" />
            <p>Sheikh Zayed Mosque</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1518684079-3c830dcef90" alt="" />
            <p>Ferrari World</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b44d" alt="" />
            <p>Louvre Abu Dhabi</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1526481280691-9065fb7c9c3" alt="" />
            <p>Desert Safari</p>
          </div>
        </div>
      </div>

      {/* Why Choose */}
      <div className="why-section">
        <h2>Why Choose Luxury Abu Dhabi?</h2>

        <div className="why-grid">
          <div>🏨 5-Star Luxury Hotels</div>
          <div>🚗 Private Transfers</div>
          <div>🏝️ Exclusive Experiences</div>
          <div>🍽️ Fine Dining</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Luxury Trip</h2>
        <p>Book now for premium Abu Dhabi experience</p><br />
        <Link to="/Pages/abu-dhabi">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>6 Days Luxury Abu Dhabi Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1589308078059-be1415ab4c3" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Luxury Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1504274066651-8d31a56b11a" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Sheikh Zayed Mosque & City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1518684079-3c830dcef90" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Ferrari World Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b44d" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Louvre Museum & Cultural Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1526481280691-9065fbcc9c3" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Luxury Desert Safari & Dinner</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961de" alt="" />
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

export default LuxuryAbuDhabiLanding;