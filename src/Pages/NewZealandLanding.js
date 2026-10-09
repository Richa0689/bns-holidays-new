import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const NewZealandLanding = () => {
  return (
    <div className="usa-landing">

      {/* 🌄 Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1507699622108-4be3abd695ad"
          alt="New Zealand"
        />
        <div className="hero-content">
          <h1>Explore New Zealand</h1>
          <p>Adventure. Nature. Beauty.</p>
          <Link to="/destinations/new-zealand">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* 🌍 Highlights */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1502780402662-acc019177cd3" alt="" />
            <p>Auckland</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1" alt="" />
            <p>Queenstown</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt="" />
            <p>Milford Sound</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" alt="" />
            <p>Rotorua</p>
          </div>
        </div>
      </div>

      {/* ⭐ Why Choose */}
      <div className="why-section">
        <h2>Why Choose New Zealand Tours?</h2>

        <div className="why-grid">
          <div>🏔️ Stunning Landscapes</div>
          <div>🚁 Adventure Activities</div>
          <div>🌊 Fjords & Lakes</div>
          <div>🌿 Nature & Wildlife</div>
        </div>
      </div>

      {/* 📞 CTA */}
      <div className="cta-section">
        <h2>Plan Your Dream New Zealand Trip</h2>
        <p>Book now and explore natural paradise</p><br />
        <Link to="/new-zealand">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* 🗺️ Itinerary */}
      <div className="itinerary-section">
        <h2>8 Days New Zealand Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1502780402662-acc019177cd3" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Auckland</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Auckland City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Travel to Rotorua</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Queenstown Adventure</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Milford Sound Cruise</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Leisure & Activities</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1502780402662-acc019177cd3" alt="" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p>Shopping & Free Time</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1507699622108-4be3abd695ad" alt="" />
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

export default NewZealandLanding;