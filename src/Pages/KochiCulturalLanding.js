import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const KochiCulturalLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://s3.india.com/wp-content/uploads/2024/04/Feature-Image_-Kochi.jpg##image/jpg"
          alt="Kochi Cultural Tour"
        />

        <div className="hero-content">
          <h1>Kochi Cultural Tour</h1>
          <p>Culture • Heritage • Traditions</p>

          <Link to="/kochi">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://media1.thrillophilia.com/filestore/216xc7pdhgqnhf4jm5mw6uqgjdhv_Indo-Portugese%20Museum%201.jpg?w=400&dpr=2" alt="" />
            <p>Fort Kochi Heritage Walk</p>
          </div>

          <div className="highlight-card">
            <img src="https://img.avianexperiences.com/attractions/0a61c0a8-baba-462a-8246-dca4038bae03" alt="" />
            <p>Chinese Fishing Nets</p>
          </div>

          <div className="highlight-card">
            <img src="https://b3681537.smushcdn.com/3681537/wp-content/uploads/2025/01/kathakali-performance-1024x576.jpg?lossy=2&strip=1&webp=1" alt="" />
            <p>Kathakali Dance Show</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/b1/cb/e8/broadway.jpg?w=500&h=-1&s=1" alt="" />
            <p>Local Markets & Cuisine</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏛️ Rich Heritage</div>
          <div>🎭 Cultural Performances</div>
          <div>🍛 Authentic Cuisine</div>
          <div>📸 Unique Experiences</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Culture of Kerala</h2>
        <p>5 Days of heritage & traditions</p><br />

        <Link to="/kochi">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>5 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://www.cial.aero/images/pressroom.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Kochi & Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/12/be/6b/20.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Fort Kochi & Heritage Walk</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/95/f7/51.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Kathakali Dance & Cultural Show</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://uppercrustindia.com/v3/media/postassets/2024/Oct/28/image-20241028222736-2_0.jpeg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Local Market Visit & Food Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.mappls.com/place/6O6G7R_1648801700521_0.png" alt="" />
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

export default KochiCulturalLanding;