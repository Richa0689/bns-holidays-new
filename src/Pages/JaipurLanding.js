import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const JaipurLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://letourdeindia.com/wp-content/uploads/2025/01/Jaipur-Sightseeing-Heritage-Walks-%E2%80%93-No-Shopping-Tour-Hawamahal.jpg"
          alt="Jaipur Tour"
        />

        <div className="hero-content">
          <h1>Best of Jaipur</h1>
          <p>Heritage • Culture • Royal Experience</p>

          <Link to="/Pages/jaipur">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://www.rajasthanplaces.com/wp-content/uploads/2024/07/Amer-Fort-Jaipur.webp" alt="" />
            <p>Amber Fort</p>
          </div>

          <div className="highlight-card">
            <img src="https://cdn.britannica.com/25/242225-050-72142DF7/Front-facade-of-Palace-of-the-Winds-Hawa-Mahal-Jaipur-Rajasthan-India.jpg" alt="" />
            <p>Hawa Mahal</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.tripsavvy.com/thmb/1ztDauQqtdmijA8Gr3OfDpogmWs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-688926064-9b7d564a6387451bbe511184b54377a1.jpg" alt="" />
            <p>City Palace</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.indiasinvitation.com/wp-content/uploads/2020/01/Best-Shopping-Places-in-Jaipur.webp" alt="" />
            <p>Local Markets</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Royal Heritage Experience</div>
          <div>🎭 Cultural Exploration</div>
          <div>📸 Photography Spots</div>
          <div>🚗 Comfortable Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore Pink City</h2>
        <p>4 Days of royal charm</p><br />

        <Link to="/Pages/jaipur">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>4 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://cdn.sanity.io/images/ocl5w36p/prod5/02d5266ba2e7a05097c8aa5c6f5533095f8b50fc-3840x1860.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/16/43/3e/4e.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Amber Fort & City Palace Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/16/46/fd/a9.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Hawa Mahal & Local Market</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.elefantastic.in/tour_images/jaipur-2-days-tour-package.webp" alt="" />
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

export default JaipurLanding;