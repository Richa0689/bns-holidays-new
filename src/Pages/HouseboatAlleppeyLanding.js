import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const HouseboatAlleppeyLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://bluejellycruises.com/wp-content/uploads/2024/04/blue-jellly-amber-slide-1.webp"
          alt="Alleppey Houseboat"
        />

        <div className="hero-content">
          <h1>Alleppey Houseboat Experience</h1>
          <p>Luxury • Backwaters • Relaxation</p>

          <Link to="/alleppey">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5pbg1IzzyIP7cNYlaFzjnR9n6axQmurNavA&s" alt="" />
            <p>Luxury Houseboat Stay</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/5e/59/d4/alleppey-backwater-tour.jpg?w=800&h=-1&s=1" alt="" />
            <p>Backwater Cruise</p>
          </div>

          <div className="highlight-card">
            <img src="https://res.cloudinary.com/kmadmin/image/upload/v1725511387/kiomoi/Kuttanad_3418.jpg" alt="" />
            <p>Village Life</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.indigocruise.com/images/tourist-place/ah01.webp" alt="" />
            <p>Sunset Views</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🚤 Private Houseboat</div>
          <div>🍽️ Traditional Kerala Meals</div>
          <div>🌴 Peaceful Backwaters</div>
          <div>📸 Scenic Photography</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Luxury on Water</h2>
        <p>3 Days of calm & comfort</p><br />

        <Link to="/alleppey">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>3 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://media1.thrillophilia.com/filestore/r0vpdnja7h511wjpa2f5aangdacu_image%20-%202025-02-20T131104,447_enhanced.png?w=400&dpr=2" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Houseboat Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/2c/f3/1b/4a/alleppey-backwater-cruise.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Full Day Backwater Cruise & Village Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://b3681537.smushcdn.com/3681537/wp-content/uploads/2023/08/houseboat-foods.jpg?lossy=2&strip=1&webp=1" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Breakfast & Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default HouseboatAlleppeyLanding;