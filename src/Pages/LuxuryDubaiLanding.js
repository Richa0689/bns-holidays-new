import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxuryDubaiLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a"
          alt="Luxury Dubai"
        />
        <div className="hero-content">
          <h1>Luxury Dubai Tour</h1>
          <p>Ultimate Luxury & Comfort Experience</p>
          <Link to="/dubai">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Luxury Highlights</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a" alt="" />
            <p>Burj Khalifa Experience</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1518684079-3c830dcef090" alt="" />
            <p>Dubai Marina Yacht</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d" alt="" />
            <p>Luxury Hotels</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1526481280691-9065fbc7c9c3" alt="" />
            <p>Desert Safari Premium</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose Luxury Dubai?</h2>

        <div className="why-grid">
          <div>🏨 5-Star Accommodation</div>
          <div>🚤 Private Yacht Experience</div>
          <div>🛍️ Premium Shopping</div>
          <div>🍽️ Fine Dining & Nightlife</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Luxury Dubai Trip</h2>
        <p>Enjoy world-class luxury packages</p><br />
        <Link to="/dubai">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>8 Days Luxury Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & 5-Star Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Burj Khalifa & Dubai Mall VIP Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1518684079-3c830dcef090" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Dubai Marina Yacht Cruise</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1526481280691-9065fbc7c9c3" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Desert Safari with Luxury Camp</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Palm Jumeirah & Atlantis Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1518684079-3c830dcef090" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Shopping & Leisure Day</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1502920917128-1aa500764b6a" alt="" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p>Relaxation & Spa Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1502920917128-1aa500764b6a" alt="" />
            <div className="day-content">
              <h3>Day 8</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default LuxuryDubaiLanding;