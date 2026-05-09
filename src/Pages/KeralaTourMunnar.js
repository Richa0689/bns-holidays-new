import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const MunnarLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.holidify.com/images/bgImages/MUNNAR.jpg"
          alt="Kerala Munnar Tour"
        />
        <div className="hero-content">
          <h1>Kerala Munnar Tour</h1>
          <p>Tea Gardens. Backwaters. Nature Escape.</p>
          <Link to="/kerala-tours">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Major Destinations</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img
              src="https://www.holidify.com/images/bgImages/MUNNAR.jpg"
              alt=""
            />
            <p>Munnar Tea Gardens</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://www.holidify.com/images/cmsuploads/compressed/PeriyarNationalPark_20190731112747.jpg"
              alt=""
            />
            <p>Thekkady Wildlife</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1074088838_20190822110110.jpg"
              alt=""
            />
            <p>Kumarakom Backwaters</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://www.holidify.com/images/bgImages/KOCHI.jpg"
              alt=""
            />
            <p>Cochin Heritage</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose Kerala Tour?</h2>

        <div className="why-grid">
          <div>🌿 Beautiful Tea Plantations</div>
          <div>🚤 Scenic Backwaters</div>
          <div>🐘 Wildlife Experience</div>
          <div>🏝️ Peaceful Nature Escape</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience God's Own Country</h2>
        <p>Book your Kerala tour today</p><br />

        <Link to="/kerala-tours">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>6 Days Tour Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://www.holidify.com/images/bgImages/KOCHI.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>Arrive Cochin – Munnar (130Kms / 3 – 4 Hrs)</p>
              <p>On arrival at Cochin, meet our chauffeur waiting for you
and proceed towards Munnar. Arrive at Munnar Check in
to the hotel. Which is situated at the confluence of three
mountain streams - Mudrapuzha, Nallathanni and
Kundala. Rest of the day free at leisure. Overnight in the
hotel</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.holidify.com/images/bgImages/MUNNAR.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Munnar</p>
              <p>After breakfast, enjoy sightseeing of Munnar visiting the
Eravikulam National Park where you can see the very rare
mountain goats locally called the Nilgiri Tahr, the
Mattupetty Dam &amp; Dairy Farm, Old Munnar Town,
the town market etc... Rest of the day at leisure. Overnight
stay at your hotel.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.holidify.com/images/cmsuploads/compressed/EravikulamNationalPark_20190731112212.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Munnar Sightseeing & Eravikulam National Park</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.holidify.com/images/cmsuploads/compressed/PeriyarNationalPark_20190731112747.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Travel to Thekkady & Wildlife Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1074088838_20190822110110.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Kumarakom Backwater Houseboat Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.holidify.com/images/bgImages/KOCHI.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Return to Cochin & Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default MunnarLanding;