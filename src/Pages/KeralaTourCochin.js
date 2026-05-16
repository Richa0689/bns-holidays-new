import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const CochinLanding = () => {
  return (
    <div className="kerala-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgC_SiyAJ5OQD3WQcEy-BIstIND_v2JgTU0A&s"
          alt="Kerala Cochin Tour"
          loading="lazy"
        />

        <div className="hero-content">
          <h1>Kerala Cochin Tour</h1>
          <p>Backwaters. Beaches. Culture & Nature.</p>

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
            <imgg
              src="https://www.holidify.com/images/bgImages/KOCHI.jp"
              alt="Cochin Heritage"
              loading="lazy"
            />
            <p>Cochin Heritage</p>
          </div>

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
              src="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1074088838_20190822110110.jpg"
              alt="Kumarakom Backwaters"
              loading="lazy"
            />
            <p>Kumarakom Backwaters</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://www.holidify.com/images/compressed/dest_pixa_11161.jpg"
              alt="Kovalam Beach"
              loading="lazy"
            />
            <p>Kovalam Beach</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose Kerala Cochin Tour?</h2>

        <div className="why-grid">
          <div>🌴 Scenic Beaches</div>
          <div>🚤 Backwater Cruises</div>
          <div>🐘 Wildlife Adventure</div>
          <div>🏨 Relaxing Stay Experience</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore Beautiful Kerala</h2>

        <p>
          Discover beaches, backwaters and culture
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
        <h2>7 Days Tour Itinerary</h2>

        <div className="itinerary-list">

          {/* DAY 1 */}
          <div className="day-card">
            <img
              src="https://www.holidify.com/images/bgImages/KOCHI.jpg"
              alt="Cochin"
              loading="lazy"
            />

            <div className="day-content">
              <h3>Day 1</h3>

              <p style={{ color: "blue" }}>
           
              </p>

              <p>
                
              </p>
            </div>
          </div>

          {/* DAY 2 */}
          <div className="day-card">
            <img
              src="https://www.holidify.com/images/cmsuploads/compressed/PeriyarNationalPark_20190731112747.jpg"
              alt="Thekkady"
              loading="lazy"
            />

            <div className="day-content">
              <h3>Day 2</h3>

              <p style={{ color: "blue" }}>
               
              </p>

              <p>
                
              </p>
            </div>
          </div>

          {/* DAY 3 */}
          <div className="day-card">
            <img
              src="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1074088838_20190822110110.jpg"
              alt="Kumarakom"
              loading="lazy"
            />

            <div className="day-content">
              <h3>Day 3</h3>

              <p style={{ color: "blue" }}>
                
              </p>

              <p>
               
              </p>
            </div>
          </div>

          {/* DAY 4 */}
          <div className="day-card">
            <img
              src="https://www.holidify.com/images/bgImages/ALLEPPEY.jpg"
              alt="Houseboat"
              loading="lazy"
            />

            <div className="day-content">
              <h3>Day 4</h3>

              <p style={{ color: "blue" }}>
                
              </p>

              <p>
                
              </p>
            </div>
          </div>

          {/* DAY 5 */}
          <div className="day-card">
            <img
              src="https://www.holidify.com/images/compressed/dest_pixa_11161.jpg"
              alt="Kovalam Beach"
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
              src="https://www.holidify.com/images/compressed/attr_1568.jpg"
              alt="Kovalam Activities"
              loading="lazy"
            />

            <div className="day-content">
              <h3>Day 6</h3>

              <p style={{ color: "blue" }}>
               
              </p><p>
                
              </p>
            </div>
          </div>

          {/* DAY 7 */}
          <div className="day-card">
            <img
              src="https://www.holidify.com/images/bgImages/KOCHI.jpg"
              alt="Departure"
              loading="lazy"
            />

            <div className="day-content">
              <h3>Day 7</h3>

              <p style={{ color: "blue" }}>
               
              </p> <p>
                
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default CochinLanding;