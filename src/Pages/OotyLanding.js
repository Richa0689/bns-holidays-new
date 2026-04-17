import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const OotyLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://mtgtravels.com/wp-content/uploads/2024/10/ooty-tour-3-870x540.jpg"
          alt="Ooty Tour"
        />

        <div className="hero-content">
          <h1>Best of Ooty</h1>
          <p>Hills • Nature • Relaxation</p>

          <Link to="/Pages/ooty">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/10/a3/0a/46/beautiful-botanical-garden.jpg" alt="" />
            <p>Botanical Garden</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.fabhotels.com/blog/wp-content/uploads/2018/10/1000x650-54.jpg" alt="" />
            <p>Ooty Lake Boating</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/3d/3d/ce/doddabetta-peak.jpg?w=900&h=500&s=1" alt="" />
            <p>Doddabetta Peak</p>
          </div>

          <div className="highlight-card">
            <img src="https://travel2ooty.s3.ap-south-1.amazonaws.com/tea-garden-hero.webp" alt="" />
            <p>Tea Gardens</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🌄 Scenic Hill Views</div>
          <div>🌿 Pleasant Weather</div>
          <div>🚗 Comfortable Travel</div>
          <div>📸 Perfect for Photography</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore Queen of Hills</h2>
        <p>4 Days of peace & nature</p><br />

        <Link to="/Pages/ooty">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>4 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://pix10.agoda.net/hotelImages/33088759/-1/e1e9f6c4d86ad3f95eb5e586dc88efe1.jpg?ce=0&s=414x232" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Ooty & Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/10/a3/0a/46/beautiful-botanical-garden.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Botanical Garden & Ooty Lake Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/3d/3d/ce/doddabetta-peak.jpg?w=900&h=500&s=1" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Doddabetta Peak & Tea Gardens</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2FIMG20220410121642_11zon.webp&w=1920&q=75" alt="" />
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

export default OotyLanding;