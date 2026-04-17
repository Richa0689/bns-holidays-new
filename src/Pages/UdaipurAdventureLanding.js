import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const UdaipurAdventureLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://www.trawell.in/images/tours/Udaipur.jpg"
          alt="Adventure Udaipur Trip"
        />

        <div className="hero-content">
          <h1>Adventure Udaipur Trip</h1>
          <p>Adventure • Lakes • Thrill</p>

          <Link to="/Pages/udaipur">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/87/69/bd.jpg" alt="" />
            <p>Boating Adventure</p>
          </div>

          <div className="highlight-card">
            <img src="https://lp-cms-production.imgix.net/2025-04/LPT0410021-crop.jpg?auto=format,compress&q=72&w=1440&h=810&fit=crop" alt="" />
            <p>Lake Exploration</p>
          </div>

          <div className="highlight-card">
            <img src="https://goyahills.com/wp-content/uploads/2025/02/bahubali-hills-udaipurs-most-scenic-trek.jpg" alt="" />
            <p>Hill Trekking</p>
          </div>

          <div className="highlight-card">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/2-kumbhalgarh-fort-udaipur-rajasthan-attr-hero?qlt=82&ts=1742175707597" alt="" />
            <p>Fort Exploration</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🔥 Thrilling Experiences</div>
          <div>🌊 Lake Adventures</div>
          <div>📸 Scenic Photography Spots</div>
          <div>🚗 Comfortable Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Feel the Adventure of Udaipur</h2>
        <p>4 Days of thrill & fun</p><br />

        <Link to="/Pages/udaipur">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>4 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://gos3.ibcdn.com/16e5d174-a551-4048-aaa0-5d9d3a970a84.png" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.rajasthanplaces.com/wp-content/uploads/2024/08/Lake-Pichola.webp" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Lake Activities & Boating</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://s3.india.com/wp-content/uploads/2024/10/Kumbhalgarh-Wildlife-Sanctuary.jpg?impolicy=Medium_Widthonly&w=350&h=263" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Trekking & Fort Exploration</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.tripsavvy.com/thmb/BbWF9ZuTLZH4Uy2dc3Cf3q4dAbo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Airport-Udaipur_Terminal_Snapseed_Darkroom-84577177dca442cd9612209fa1ceab25.jpg" alt="" />
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

export default UdaipurAdventureLanding;