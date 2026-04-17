import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const BavarianAlpsLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-15000489939-d23a436266cf"
          alt="Bavarian Alps"
        />
        <div className="hero-content">
          <h1>Bavarian Alps Escape</h1>
          <p>Mountains. Lakes. Pure Nature.</p>
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
            <img src="https://images.unsplash.com/photo-15653833408-d77e39b88af6" alt="" />
            <p>Neuschwanstein Castle</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-15017888041-af3ef285b470" alt="" />
            <p>Zugspitze Mountain</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-15005855697-b586d89ba3ee" alt="" />
            <p>Alpine Lakes</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1505761935-60b3a7427bad" alt="" />
            <p>Scenic Villages</p>
          </div>
        </div>
      </div>

      {/* Why Choose */}
      <div className="why-section">
        <h2>Why Choose Bavarian Alps?</h2>

        <div className="why-grid">
          <div>🏔️ Stunning Mountain Views</div>
          <div>🚠 Cable Car Experiences</div>
          <div>🏞️ Crystal Clear Lakes</div>
          <div>📸 Perfect Photography Spots</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Alps Getaway</h2>
        <p>Experience Germany’s natural beauty</p><br />
        <Link to="/germany">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>5 Days Bavarian Alps Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15000489959-d23a436266cf" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Munich & Transfer to Alps</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15656238334-d77e39b88af6" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Visit Neuschwanstein Castle</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15017858880-af3ef285b470" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Zugspitze Mountain Excursion</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15005308556-b586d89ba3ee" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Explore Alpine Lakes & Villages</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15267792592-939e64788e3c" alt="" />
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

export default BavarianAlpsLanding;