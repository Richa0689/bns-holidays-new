import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const HampiLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.holidify.com/images/bgImages/HAMPI.jpg"
          alt="Hampi"
        />
        <div className="hero-content">
          <h1>Hampi Tour</h1>
          <p>Ancient Ruins. Heritage. Timeless Beauty.</p>
          <Link to="/karnataka-tours">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Attractions</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Virupaksha_Temple_20191220130904.jpg" alt="" />
            <p>Virupaksha Temple</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Vittala_Temple_20191220130925.jpg" alt="" />
            <p>Vittala Temple</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Lotus_Mahal_20191220130945.jpg" alt="" />
            <p>Lotus Mahal</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Hampi_Bazaar_20191220131002.jpg" alt="" />
            <p>Hampi Bazaar</p>
          </div>
        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Visit Hampi?</h2>

        <div className="why-grid">
          <div>🏛️ UNESCO World Heritage Site</div>
          <div>🪨 Ancient Ruins & Architecture</div>
          <div>🌄 Unique Rocky Landscapes</div>
          <div>📸 Perfect Photography Spot</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Step Into History at Hampi</h2>
        <p>Book your Hampi journey today</p><br />
        <Link to="/karnataka-tours">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>5 Days Tour Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://www.holidify.com/images/bgImages/HAMPI.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}> </p>
              <p> </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Virupaksha_Temple_20191220130904.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}> </p>
              <p> </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Vittala_Temple_20191220130925.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}> </p>
              <p> </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Lotus_Mahal_20191220130945.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}> </p>
              <p> </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Hampi_Bazaar_20191220131002.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}> </p>
              <p> </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default HampiLanding;