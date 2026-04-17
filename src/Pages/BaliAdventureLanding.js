import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const BaliAdventureLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1549887534-3ec93abae1b5"
          alt="Bali Adventure"
        />
        <div className="hero-content">
          <h1>Bali Adventure Tour</h1>
          <p>Thrill. Explore. Experience.</p>
          <Link to="/bali">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Adventure Highlights</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1549887534-3ec93abae1b5" alt="" />
            <p>ATV Ride</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="" />
            <p>River Rafting</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="" />
            <p>Water Sports</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1526779259212-939e64788e3c" alt="" />
            <p>Mountain Views</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose Adventure Tour?</h2>

        <div className="why-grid">
          <div>🚵 Thrilling Activities</div>
          <div>🌊 Water Adventures</div>
          <div>🌄 Nature Exploration</div>
          <div>🔥 Unique Experiences</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Adventure Trip</h2>
        <p>Best deals on Bali adventure tours</p><br />
        <Link to="/bali">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary Section with Images */}
      <div className="itinerary-section">
        <h2>5 Days Adventure Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d" alt="Day 1" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Bali & Leisure</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Day 2" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>River Rafting Adventure</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1549887534-3ec93abae1b5" alt="Day 3" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>ATV Ride & Jungle Exploration</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Day 4" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Water Sports & Beach Activities</p>
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

export default BaliAdventureLanding;