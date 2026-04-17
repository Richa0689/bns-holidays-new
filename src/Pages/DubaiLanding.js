import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const DubaiLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a"
          alt="Dubai"
        />
        <div className="hero-content">
          <h1>Explore Dubai</h1>
          <p>Luxury. Adventure. Experience.</p>
          <Link to="/dubai">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Experiences in Dubai</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c" alt="" />
            <p>Burj Khalifa</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1526481280691-9065fbc7c9c3" alt="" />
            <p>Desert Safari</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d" alt="" />
            <p>Palm Jumeirah</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1518684079-3c830dcef090" alt="" />
            <p>Dubai Marina</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose Dubai Tours?</h2>

        <div className="why-grid">
          <div>🏙️ Modern Luxury City</div>
          <div>🏜️ Desert Adventures</div>
          <div>🛍️ Shopping Festivals</div>
          <div>🍽️ International Cuisine</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Dream Dubai Trip</h2>
        <p>Best deals on all Dubai tour packages</p><br />
        <Link to="/dubai">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary Section (Combined Experience) */}
      <div className="itinerary-section">
        <h2>6 Days Dubai Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Marina Walk</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Burj Khalifa & Dubai Mall</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1526481280691-9065fbc7c9c3" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Desert Safari & BBQ Night</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Palm Jumeirah & Atlantis</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1518684079-3c830dcef090" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Dubai City + Abu Dhabi Option</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1502920917128-1aa500764b6a" alt="" />
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

export default DubaiLanding;