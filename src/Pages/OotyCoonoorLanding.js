import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const OotyCoonoorLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://myholidayhappiness.com/uploads/ooty-9063.jpg"
          alt="Ooty Coonoor Tour"
        />

        <div className="hero-content">
          <h1>Ooty & Coonoor</h1>
          <p>Hills • Tea Gardens • Scenic Train</p>

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
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/rose-garden-ooty-tamil-nadu-2-attr-hero?qlt=82&ts=1751459183431" alt="" />
            <p>Ooty Lake & Gardens</p>
          </div>

          <div className="highlight-card">
            <img src="https://static-blog.treebo.com/wp-content/uploads/2023/08/Ketty-Valley-1024x675.jpg" alt="" />
            <p>Coonoor Tea Estates</p>
          </div>

          <div className="highlight-card">
            <img src="https://cheapootytours.com/wp-content/uploads/2021/10/dolphin-nose.jpg" alt="" />
            <p>Dolphin’s Nose Viewpoint</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2024/03/12110304/Nilgiri-Mountain-Railway-India-Rajesh-Narayanan-Shutterstock-edited-1600x900.jpg" alt="" />
            <p>Nilgiri Toy Train Ride</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🌄 Dual Hill Stations</div>
          <div>🚞 Toy Train Experience</div>
          <div>🌿 Tea Garden Views</div>
          <div>📸 Perfect Scenic Spots</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore Nilgiri Hills</h2>
        <p>5 Days of nature & beauty</p><br />

        <Link to="/Pages/ooty">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>5 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/40/6d/2e/caption.jpg?w=1200&h=-1&s=1" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Ooty & Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/rose-garden-ooty-tamil-nadu-1-attr-hero?qlt=82&ts=1751459181352" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Ooty Lake & Botanical Garden</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://cdn.tripspoint.com/uploads/photos/2173/ooty-coonoor-tour-from-bangalore_kTm6F.jpeg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Transfer to Coonoor & Sightseeing</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.traeminentindiatours.com/uploads/top_thing_image/1585550285_Toy-Train-Ooty.webp" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Toy Train Ride & Tea Gardens</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.holidaylap.com/wp-content/uploads/2025/02/DALL%C2%B7E-2025-02-24-09.38.23-A-scenic-view-of-Ooty-India-featuring-lush-green-tea-plantations-mist-covered-hills-and-a-winding-road-leading-through-the-mountains.-The-image-ca.png" alt="" />
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

export default OotyCoonoorLanding;