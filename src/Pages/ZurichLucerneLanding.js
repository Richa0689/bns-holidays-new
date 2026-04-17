import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const ZurichLucerneLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1521295121788a321d551ad2"
          alt="Zurich Lucerne"
        />
        <div className="hero-content">
          <h1>Zurich & Lucerne</h1>
          <p>Swiss Beauty & Scenic Lakes</p>
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
            <img src="https://images.unsplash.com/photo-15057616719-60b3a7427bad" alt="" />
            <p>Zurich City</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-15212951217-8a321d551ad2" alt="" />
            <p>Lucerne Lake</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-15000489939-d23a436266cf" alt="" />
            <p>Interlaken Visit</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-15017858880-af3ef285b470" alt="" />
            <p>Mount Excursion</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏔️ Swiss Alps Views</div>
          <div>🚞 Scenic Train Journeys</div>
          <div>🏞️ Lake Lucerne Beauty</div>
          <div>🛍️ Shopping in Zurich</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Zurich & Lucerne Trip</h2>
        <p>Book now and explore Switzerland</p><br />
        <Link to="/Pages/switzerland">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>5 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15057616719-60b3a7427bad" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Zurich</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1521295121-8a321d551ad2" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Zurich City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1521295123-8a321d551ad2" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Travel to Lucerne & Lake Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1501785841-af3ef285b470" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Mount Titlis / Excursion</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15029209128-1aa500764cbd" alt="" />
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

export default ZurichLucerneLanding;