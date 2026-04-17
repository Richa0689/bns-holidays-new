import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const KLGenting = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://cdn.tripspoint.com/uploads/photos/14640/genting-highlands-day-trip-with-cable-cable-car-sic_RNtYR.jpeg"
          alt="KL Genting"
        />
        <div className="hero-content">
          <h1>Kuala Lumpur & Genting</h1>
          <p>City Lights & Hilltop Fun</p>
          <Link to="/malaysia">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07" />
            <p>Petronas Twin Towers</p>
          </div>

          <div className="highlight-card">
            <img src="https://wanderon-images.gumlet.io/blogs/new/2024/06/genting-highlands-travel-guide-in-malaysia.jpg" />
            <p>Genting Highlands</p>
          </div>

          <div className="highlight-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/16/13/82/28.jpg" />
            <p>Cable Car Ride</p>
          </div>

          <div className="highlight-card">
            <img src="https://wanderon-images.gumlet.io/blogs/new/2024/07/best-time-to-visit-petaling-street-in-malaysia-scaled.jpg?auto=compress%2Cformat&w=768" />
            <p>Shopping & Nightlife</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏙️ Modern City Experience</div>
          <div>🎢 Genting Theme Parks</div>
          <div>🚡 Scenic Cable Car Ride</div>
          <div>🛍️ Shopping Paradise</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Malaysia Trip</h2>
        <p>Book now and get best deals</p><br />
        <Link to="/malaysia">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>5 Days KL & Genting Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/a1/dd/69.jpg" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Kuala Lumpur & Leisure Time</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/11/6d/12/1e.jpg" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>City Tour & Petronas Towers Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/21/54/1e.jpg" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Genting Highlands & Cable Car Ride</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://cdn.sanity.io/images/nxpteyfv/goguides/c3ac15fe25e0ba662668115a53f62056158617f1-1600x1066.jpg" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Shopping & Free Day</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/s1-1715756033102.jpg" />
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

export default KLGenting;