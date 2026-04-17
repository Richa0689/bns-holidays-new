import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const BaliLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Bali"
        />
        <div className="hero-content">
          <h1>Explore Bali</h1>
          <p>Relax. Discover. Travel.</p>
          <Link to="/bali">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="" />
            <p>Kuta Beach</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1555400082-8b9c3e7b9b91" alt="" />
            <p>Ubud</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1526779259212-939e64788e3c" alt="" />
            <p>Tanah Lot</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1493558103817-58b2924bce98" alt="" />
            <p>Seminyak</p>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="why-section">
        <h2>Why Choose Bali?</h2>

        <div className="why-grid">
          <div>🏝️ Beautiful Beaches</div>
          <div>🌿 Nature & Temples</div>
          <div>🛍️ Shopping & Cafes</div>
          <div>💆 Relaxing Spa Experience</div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Plan Your Dream Bali Trip</h2>
        <p>Book now and get best deals on Bali tours</p><br />
        <Link to="/bali">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary Section (Same Style as USA) */}
      <div className="itinerary-section">
        <h2>6 Days Bali Itinerary</h2>

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
              <p>Ubud Temples & Rice Terraces</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1526779259212-939e64788e3c" alt="Day 4" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Tanah Lot Temple Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552" alt="Day 5" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Shopping & Leisure Day</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1502920917128-1aa500764b6a" alt="Day 6" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default BaliLanding;