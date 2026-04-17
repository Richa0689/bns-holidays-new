import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxurySwitzerland = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          alt="Luxury Switzerland"
        />
        <div className="hero-content">
          <h1>Luxury Switzerland Tour</h1>
          <p>Alps. Lakes. Luxury Experience.</p>

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
            <img src="https://images.unsplash.com/photo-15000489939d23a436266cf" alt="" />
            <p>Interlaken Luxury Stay</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-15212921783-8a321d551ad2" alt="" />
            <p>Lucerne Lake Views</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-150178588804af3ef285b470" alt="" />
            <p>Swiss Alps Scenic Train</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1507525428034723cf961d3e" alt="" />
            <p>Luxury Mountain Resorts</p>
          </div>

        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏔️ Premium Alpine Experience</div>
          <div>🚞 Scenic First-Class Train Travel</div>
          <div>🏨 5-Star Luxury Hotels</div>
          <div>❄️ Snow & Adventure Activities</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Luxury Switzerland Trip</h2>
        <p>Experience Switzerland like never before</p>
        <br />

        <Link to="/Pages/switzerland">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>9 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15061671935-60b3a7427bad" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Zurich</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15212121783-8a321d551ad2" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Transfer to Lucerne</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1500048993959-d23a436266cf" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Interlaken Luxury Stay</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Jungfraujoch Excursion</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Alpine Luxury Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1491553895911-0055eca38951" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Lake Geneva Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1500048993959-d23a436266cf" alt="" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p>Zurich City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" alt="" />
            <div className="day-content">
              <h3>Day 8</h3>
              <p>Free Leisure Day</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" alt="" />
            <div className="day-content">
              <h3>Day 9</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default LuxurySwitzerland;