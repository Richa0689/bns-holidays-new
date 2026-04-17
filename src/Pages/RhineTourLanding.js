import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const RhineTourLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1501594907352-04a38ebc29"
          alt="Rhine Tour"
        />
        <div className="hero-content">
          <h1>Rhine Tour</h1>
          <p>Castles. Rivers. Scenic Beauty.</p>
          <Link to="/germany">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Attractions</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-15653736107-6c0c85a3c7f5" alt="" />
            <p>Rhine River Cruise</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-16002671460-8fdd0e1f8d2f" alt="" />
            <p>Cologne Cathedral</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-15289094045-2fa4ac7a08ba" alt="" />
            <p>Heidelberg Castle</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-15433413-8f8c6a1c7f3b" alt="" />
            <p>Rhine Valley Vineyards</p>
          </div>
        </div>
      </div>

      {/* Why Choose */}
      <div className="why-section">
        <h2>Why Choose Rhine Tour?</h2>

        <div className="why-grid">
          <div>🚢 Scenic River Cruises</div>
          <div>🏰 Fairy Tale Castles</div>
          <div>🍇 Vineyard Experiences</div>
          <div>📸 Stunning Landscapes</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore the Rhine Valley</h2>
        <p>Book your scenic Germany trip now</p><br />
        <Link to="/germany">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>5 Days Rhine Tour Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15653739107-6c0c85a3c7f5" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Frankfurt & Transfer to Rhine Valley</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-160027165460-8fdd0e1f8d2f" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Rhine River Cruise & Cologne Cathedral Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15289514045-2fa4ac7a08ba" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Heidelberg City Tour & Castle Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15430713-8f8c6a1c7f3b" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Explore Rhine Valley Vineyards</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15269259212-939e64788e3c" alt="" />
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

export default RhineTourLanding;