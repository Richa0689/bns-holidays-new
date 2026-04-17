import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const InterlakenLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-15000489939-d23a436266cf"
          alt="Interlaken"
        />
        <div className="hero-content">
          <h1>Interlaken Adventure</h1>
          <p>Thrill. Nature. Swiss Alps.</p>
          <Link to="/Pages/switzerland">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-15008993959-d23a436266cf" alt="" />
            <p>Interlaken Valley</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-15015888041-af3ef285b470" alt="" />
            <p>Jungfraujoch</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-15075428034-b723cf961d3e" alt="" />
            <p>Adventure Sports</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-14913895911-0055eca6402d" alt="" />
            <p>Lake Views</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏔️ Alpine Adventures</div>
          <div>🪂 Paragliding & Thrill</div>
          <div>🏞️ Scenic Landscapes</div>
          <div>🚞 Swiss Rail Experience</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Interlaken Trip</h2>
        <p>Book now for an unforgettable adventure</p><br />
        <Link to="/Pages/switzerland">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>6 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15061671935-60b3a7427bad" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Zurich</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15295121783-8a321d551ad2" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Travel to Interlaken</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15048993959-d23a436266cf" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Explore Interlaken & Adventure Activities</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15085888041-af3ef285b470" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Jungfraujoch Excursion</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15075428034-b723cf961d3e" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Leisure & Local Exploration</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15020917128-1aa500764cbd" alt="" />
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

export default InterlakenLanding;