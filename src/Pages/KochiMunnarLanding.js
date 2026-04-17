import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const KochiMunnarLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://www.munnar.holiday/munnartourism/wp-content/uploads/2023/10/cool-whrather-munnar.jpg"
          alt="Kochi Munnar"
        />

        <div className="hero-content">
          <h1>Kochi & Munnar</h1>
          <p>Beaches • Hills • Nature</p>

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
            <img src="https://i.redd.it/a-trip-to-fort-kochi-v0-bxbpqzp5hanf1.jpg?width=3024&format=pjpg&auto=webp&s=1b13b0b3c04a861998dedc261f53ced29607d3d9" alt="" />
            <p>Fort Kochi Exploration</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/95/2c/a0/tea-gardens.jpg?w=1200&h=-1&s=1" alt="" />
            <p>Munnar Tea Gardens</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.trawell.in/admin/images/upload/049130493Munnar_Main.jpg" alt="" />
            <p>Hill Station Views</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/11-breath-taking-waterfalls-in-kochi.jpg" alt="" />
            <p>Waterfalls & Nature</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏝️ Coastal + Hill Combo</div>
          <div>🌿 Tea Plantation Tours</div>
          <div>📸 Scenic Landscapes</div>
          <div>🚗 Comfortable Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Kerala’s Best</h2>
        <p>6 Days of beauty & relaxation</p><br />

        <Link to="/kochi">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>6 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://www.cial.aero/images/pressroom.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Kochi & Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media1.thrillophilia.com/filestore/iyhdsi3ipex60his53wn4duhig2r_shutterstock_1688004694.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Kochi Sightseeing & Fort Kochi Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://b3681537.smushcdn.com/3681537/wp-content/uploads/2013/06/cochin-to-munnar-by-ksrtc-bus.jpg?lossy=2&strip=1&webp=1" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Transfer to Munnar & Scenic Drive</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/16/05/78/b3.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Munnar Sightseeing & Tea Gardens</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/9f/48/7a.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Leisure & Nature Walk</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.mappls.com/place/6O6G7R_1648801700521_0.png" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default KochiMunnarLanding;