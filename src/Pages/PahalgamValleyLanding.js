import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const PahalgamValleyLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://kashmirlife.net/wp-content/uploads/2023/06/BVP1.jpg"
          alt="Pahalgam Valley Explorer"
        />

        <div className="hero-content">
          <h1>Pahalgam Valley Explorer</h1>
          <p>Betaab Valley • Meadows • Himalayan Rivers</p>

          <Link to="/pahalgam">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img
              src="https://static2.tripoto.com/media/filter/tst/img/OgData/1490866859_1490802234_fullsizerender.jpg"
              alt="Pahalgam Valley"
            />
            <p>Green Valleys</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1746976343707-b7e6b4d61b39?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8"
              alt="Mountains"
            />
            <p>Himalayan Peaks</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Lidder_River_1.jpg/1280px-Lidder_River_1.jpg"
              alt="River"
            />
            <p>Lidder River</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2F1720009452815_Betaab_Valley_Pahalgam_Anantnag.jpg&w=1920&q=75"
              alt="Betaab Valley"
            />
            <p>Betaab Valley</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Visit Pahalgam Valley?</h2>

        <div className="why-grid">
          <div>🌿 Scenic Meadows</div>
          <div>🏔️ Snow Mountains</div>
          <div>🐎 Horse Riding</div>
          <div>📸 Film Shooting Spots</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Pahalgam Trip</h2>
        <p>5 Days of pure Himalayan beauty</p>
        <br />

        <Link to="/pahalgam">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>5 Days Pahalgam Valley Explorer</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://mytriphack.com/wp-content/uploads/2018/05/Pahalgam-taxi-stand.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Srinagar & Transfer to Pahalgam</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.vibrantfootsteps.com/wp-content/uploads/2023/06/20230602_072849-PS-scaled.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Betaab Valley Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.bookyourown.net/_next/image?url=https%3A%2F%2Fapi.bookyourown.net%2Fstorage%2Fmisc%2FatgBcx1sU8W0hXTQcrzy1giwO8Bj0fsZstwsS80J.webp&w=3840&q=75" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Aru Valley Exploration</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://hblimg.mmtcdn.com/content/hubble/img/pahalgam/mmt/activities/m_activities_pahalgam_lidder_river_l_359_539.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Lidder River & Nature Walks</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.kashmirhills.com/wp-content/uploads/2024/05/Pahalgam-Flea-Market-Kashmirhills.com-1.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Local Sightseeing & Shopping</p>
            </div>
          </div>



        </div>
      </div>

    </div>
  );
};

export default PahalgamValleyLanding;