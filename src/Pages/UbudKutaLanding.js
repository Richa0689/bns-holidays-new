import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const UbudKutaLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1555400082-8b9c3e7b9b91"
          alt="Ubud Kuta"
        />
        <div className="hero-content">
          <h1>Ubud & Kuta Escape</h1>
          <p>Beaches. Culture. Nature.</p>
          <Link to="/bali">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="" />
            <p>Kuta Beach</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1555400082-8b9c3e7b9b91" alt="" />
            <p>Ubud Temples</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1526779259212-939e64788e3c" alt="" />
            <p>Rice Terraces</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1493558103817-58b2924bce98" alt="" />
            <p>Shopping Streets</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏖️ Beach + Culture Combo</div>
          <div>🌿 Nature & Relaxation</div>
          <div>📸 Instagram Spots</div>
          <div>🍽️ Local Food Experience</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Bali Escape</h2>
        <p>Best deals on Bali tours</p><br />
        <Link to="/bali">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary Section with Images */}
      <div className="itinerary-section">
        <h2>5 Days Ubud & Kuta Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d" alt="Day 1" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Bali & Leisure</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Day 2" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Kuta Beach & Sunset</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1555400082-8b9c3e7b9b91" alt="Day 3" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Ubud Temples & Cultural Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1526779259212-939e64788e3c" alt="Day 4" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Rice Terraces & Nature Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1502920917128-1aa500764b6a" alt="Day 5" />
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

export default UbudKutaLanding;