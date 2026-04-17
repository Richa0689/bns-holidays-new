import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const BerlinMunichLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-15609691840fe8719e047"
          alt="Berlin Munich"
        />
        <div className="hero-content">
          <h1>Berlin & Munich</h1>
          <p>History. Culture. Modern Vibes.</p>
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
            <img src="https://images.unsplash.com/photo-15595362-c667ba5f5480" alt="" />
            <p>Brandenburg Gate</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-16047742629-3e5728249d73" alt="" />
            <p>Berlin Wall</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-15844487764-374f81551427" alt="" />
            <p>Marienplatz</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-15656238338-d77e39b88af6" alt="" />
            <p>Neuschwanstein Castle</p>
          </div>
        </div>
      </div>

      {/* Why Choose */}
      <div className="why-section">
        <h2>Why Choose Germany Tours?</h2>

        <div className="why-grid">
          <div>🏰 Historic Landmarks</div>
          <div>🍺 Famous Beer Culture</div>
          <div>🚆 Scenic Train Journeys</div>
          <div>🎭 Rich Art & Museums</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Germany Trip</h2>
        <p>Explore Berlin & Munich with best deals</p><br />
        <Link to="/germany">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>6 Days Germany Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15595633667ba5f5480" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Berlin & City Orientation</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-160475479-3e5728249d73" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Berlin Wall, Brandenburg Gate, Museums</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1575722290-626b0208df99" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Travel to Munich</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-158444804-374f81551427" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Munich City Tour & Marienplatz</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1565623808-d77e39b88af6" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Neuschwanstein Castle Excursion</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1526779259-939e64788e3c" alt="" />
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

export default BerlinMunichLanding;