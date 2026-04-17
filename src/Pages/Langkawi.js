import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LangkawiLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Langkawi"
        />
        <div className="hero-content">
          <h1>Langkawi Island Escape</h1>
          <p>Relax. Explore. Enjoy Beaches.</p>
          <Link to="/malaysia">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="highlights">
        <h2>Top Attractions</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="" />
            <p>Langkawi Beach</p>
          </div>

          <div className="highlight-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Langkawi_Sky_Bridge.jpg" alt="" />
            <p>Sky Bridge</p>
          </div>

          <div className="highlight-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Langkawi_cable_car.jpg" alt="" />
            <p>Cable Car</p>
          </div>

          <div className="highlight-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Eagle_Square_Langkawi.jpg" alt="" />
            <p>Eagle Square</p>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="why-section">
        <h2>Why Choose Langkawi?</h2>

        <div className="why-grid">
          <div>🏝️ Beautiful Beaches</div>
          <div>🚡 Scenic Cable Car Rides</div>
          <div>🌅 Relaxing Island Vibes</div>
          <div>🛍️ Duty-Free Shopping</div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Plan Your Langkawi Trip</h2>
        <p>Best deals on island vacations</p><br />
        <Link to="/malaysia">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary Section */}
      <div className="itinerary-section">
        <h2>4 Days Langkawi Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Day 1" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Langkawi & Beach Relaxation</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Langkawi_Sky_Bridge.jpg" alt="Day 2" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Sky Bridge & Cable Car Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Eagle_Square_Langkawi.jpg" alt="Day 3" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Island Tour & Shopping</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Kuala_Lumpur_International_Airport.jpg" alt="Day 4" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default LangkawiLanding;