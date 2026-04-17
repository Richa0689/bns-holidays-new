import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxuryBaliLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1526779259212-939e64788e3"
          alt="Luxury Bali"
        />
        <div className="hero-content">
          <h1>Luxury Bali Tour</h1>
          <p>Luxury. Comfort. Elegance.</p>
          <Link to="/bali">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Luxury Experiences</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1526779259212-939e64788e3c" alt="" />
            <p>Luxury Resorts</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1502920917128-1aa500764b6a" alt="" />
            <p>Private Beach</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="" />
            <p>Spa & Wellness</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1493558103817-58b2924bce98" alt="" />
            <p>Fine Dining</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose Luxury Bali?</h2>

        <div className="why-grid">
          <div>🏨 5-Star Resorts</div>
          <div>🍽️ Premium Dining</div>
          <div>💆 Spa & Relaxation</div>
          <div>🚗 Private Transfers</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Luxury Vacation</h2>
        <p>Exclusive deals on luxury Bali tours</p><br />
        <Link to="/bali">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary Section with Images */}
      <div className="itinerary-section">
        <h2>7 Days Luxury Bali Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d" alt="Day 1" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Luxury Resort Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1502920917128-1aa500764b6a" alt="Day 2" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Private Beach Relaxation</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Day 3" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Spa & Wellness Retreat</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1555400082-8b9c3e7b9b91" alt="Day 4" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Ubud Cultural Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1526779259212-939e64788e3c" alt="Day 5" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Temple Visits & Scenic Views</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1493558103817-58b2924bce9" alt="Day 6" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Fine Dining & Leisure</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1502920917128-1aa500764b6a" alt="Day 7" />
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

export default LuxuryBaliLanding;