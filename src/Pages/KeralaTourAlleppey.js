import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const AlleppeyLanding = () => {
  return (
    <div className="kerala-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLGvgGokKpqt6i72Z8RHuvU6odg9wKxLjbyA&s"
          alt="Kerala Alleppey Tour"
          loading="lazy"
        />

        <div className="hero-content">
          <h1>Kerala Alleppey Tour</h1>
          <p>Backwaters. Beaches. Nature & Relaxation.</p>

          <Link to="/kerala-tours">
            <button className="explore-btn">
              View Tours
            </button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Major Destinations</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img
              src="https://www.holidify.com/images/cmsuploads/compressed/PeriyarNationalPark_20190731112747.jpg"
              alt="Thekkady Wildlife"
              loading="lazy"
            />
            <p>Thekkady Wildlife</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://www.holidify.com/images/bgImages/ALLEPPY.jpg"
              alt="Alleppey Backwaters"
              loading="lazy"
            />
            <p>Alleppey Backwaters</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://www.holidify.com/images/compressed/dest_pxa_11161.jpg"
              alt="Kovalam Beach"
              loading="lazy"
            />
            <p>Kovalam Beach</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://www.holidify.com/images/compressed/attr1818.jpg"
              alt="Trivandrum City"
              loading="lazy"
            />
            <p>Trivandrum City</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose Alleppey Tour?</h2>

        <div className="why-grid">
          <div>🚤 Famous Houseboat Experience</div>
          <div>🌴 Beautiful Kerala Beaches</div>
          <div>🐘 Wildlife & Nature</div>
          <div>🏝️ Relaxing Vacation Experience</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Discover Kerala Backwaters</h2>

        <p>
          Experience unforgettable Kerala holidays
        </p>

        <br />

        <Link to="/kerala-tours">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>8 Days Tour Itinerary</h2>

        <div className="itinerary-list">

          {/* DAY 1 */}
          <div className="day-card">
            <img
              src="https://www.holidify.com/imags/cmsuploads/compressed/PeriyarNationalPark_20190731112747.jpg"
              alt="Thekkady"
              loading="lazy"
            />

            <div className="day-content">
              <h3>Day 1</h3>

              <p style={{ color: "blue" }}></p>
              <p></p>
            </div>
          </div>

          {/* DAY 2 */}
          <div className="day-card">
            <img
              src="https://www.holidify.com/images/cmsuplads/compressed/PeriyarNationalPark_20190731112747.jpg"
              alt="Periyar Wildlife"
              loading="lazy"
            />

            <div className="day-content">
              <h3>Day 2</h3>

              <p style={{ color: "blue" }}></p>
              <p></p>
            </div>
          </div>

          {/* DAY 3 */}
          <div className="day-card">
            <img
              src="https://www.holidify.com/images/bgImaes/ALLEPPEY.jpg"
              alt="Alleppey"
              loading="lazy"
            />

            <div className="day-content">
              <h3>Day 3</h3>

              <p style={{ color: "blue" }}></p>
              <p></p>
            </div>
          </div>

          {/* DAY 4 */}
          <div className="day-card">
            <img
              src="https://www.holidify.com/images/bgImges/ALLEPPEY.jpg"
              alt="Houseboat"
              loading="lazy"
            />

            <div className="day-content">
              <h3>Day 4</h3>

              <p style={{ color: "blue" }}> </p>
              <p></p>
            </div>
          </div>

          {/* DAY 5 */}
          <div className="day-card">
            <img
              src="https://www.holidify.com/images/compessed/dest_pixa_11161.jpg"
              alt="Kovalam"
              loading="lazy"
            />

            <div className="day-content">
              <h3>Day 5</h3>

              <p style={{ color: "blue" }}></p>
              <p></p>
            </div>
          </div>

          {/* DAY 6 */}
          <div className="day-card">
            <img
              src="https://www.holidify.com/images/comprssed/attr_1568.jpg"
              alt="Kovalam Activities"
              loading="lazy"
            />

            <div className="day-content">
              <h3>Day 6</h3>

              <p style={{ color: "blue" }}></p>
              <p></p>
            </div>
          </div>

          {/* DAY 7 */}
          <div className="day-card">
            <img
              src="https://www.holidify.com/images/compresse/attr_1818.jpg"
              alt="Trivandrum"
              loading="lazy"
            />

            <div className="day-content">
              <h3>Day 7</h3>

              <p style={{ color: "blue" }}></p>
              <p></p>
            </div>
          </div>

          {/* DAY 8 */}
          <div className="day-card">
            <img
              src="https://www.holidify.com/images/bgImages/OCHI.jpg"
              alt="Departure"
              loading="lazy"
            />

            <div className="day-content">
              <h3>Day 8</h3>

              <p style={{ color: "blue" }}> </p>
              <p></p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AlleppeyLanding;