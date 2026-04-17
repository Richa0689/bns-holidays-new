import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const PolandLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1544989164-31dc3c645987"
          alt="Poland"
        />
        <div className="hero-content">
          <h1>Best of Poland</h1>
          <p>8 Days • Warsaw, Krakow & Gdansk • Cultural Europe Tour</p>

          <Link to="/poland">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1555992336-03a23c6c5e1b" alt="" />
            <p>Warsaw</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba" alt="" />
            <p>Krakow</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" alt="" />
            <p>Gdansk</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1544989164-31dc3c645987" alt="" />
            <p>Old Town Views</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Choose Poland?</h2>

        <div className="why-grid">
          <div>🏰 Historic Cities</div>
          <div>🎭 Rich Culture & Heritage</div>
          <div>🌊 Baltic Coast Beauty</div>
          <div>🍽️ Authentic European Cuisine</div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="cta-section">
        <h2>Plan Your Poland Trip</h2>
        <p>Explore Europe’s hidden gem with unforgettable experiences</p>
        <br />

        <Link to="/poland">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>8 Days Poland Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1555992336-03a23c6c5e1b" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Warsaw & Leisure Evening</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1555992336-03a23c6c5e1b" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Warsaw City Tour & Old Town Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Travel to Krakow</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Krakow Heritage Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Travel to Gdansk</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Gdansk Coastal Exploration</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1544989164-31dc3c645987" alt="" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p>Shopping & Free Day</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1544989164-31dc3c645987" alt="" />
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

export default PolandLanding;