import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const SwitzerlandLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          alt="Switzerland"
        />
        <div className="hero-content">
          <h1>Explore Switzerland</h1>
          <p>Mountains. Lakes. Scenic Beauty.</p>
          <Link to="/Pages/switzerland">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" alt="" />
            <p>Zurich</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2" alt="" />
            <p>Lucerne</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1500048993959-d23a436266cf" alt="" />
            <p>Interlaken</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" alt="" />
            <p>Jungfraujoch</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose Switzerland?</h2>

        <div className="why-grid">
          <div>🏔️ Swiss Alps</div>
          <div>🚞 Scenic Train Rides</div>
          <div>🏞️ Lakes & Nature</div>
          <div>🍫 Chocolates & Culture</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Dream Switzerland Trip</h2>
        <p>Book now and enjoy breathtaking views</p><br />
        <Link to="/Pages/switzerland">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>7 Days Switzerland Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-150576167935-60b3a7427bad" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Zurich</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-152129512783-8a321d551ad2" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Lucerne City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15000493959-d23a436266cf" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Interlaken Exploration</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15017858041-af3ef285b470" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Jungfraujoch Excursion</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-150752428034-b723cf961d3e" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Mount Titlis Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-14915538959-0055eca6402d" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Leisure & Shopping</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15029209171-1aa500764cbd" alt="" />
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

export default SwitzerlandLanding;