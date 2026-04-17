import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const PahalgamAdventureLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://img.avianexperiences.com/attractions/30e2ac25-d38e-4f4c-8082-0ac698f150cb"
          alt="Adventure Pahalgam Trip"
        />

        <div className="hero-content">
          <h1>Adventure Pahalgam Trip</h1>
          <p>Aru Valley • Lidder River • Thrilling Experiences</p>

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
            <img src="https://i0.wp.com/beyondwildplaces.com/wp-content/uploads/2021/12/Walking-to-Lidderwat-through-Aru-Valley.jpg?resize=780%2C585&ssl=1" alt="" />
            <p>Aru Valley Adventure</p>
          </div>

          <div className="highlight-card">
            <img src="https://media.moxtain.com/blogs/BestPlacesToVisitInMunsiyari/576/Munsiyari-Village.webp" alt="" />
            <p>Mountain Trails</p>
          </div>

          <div className="highlight-card">
            <img src="https://hblimg.mmtcdn.com/content/hubble/img/pahalgam/mmt/activities/m_activities_pahalgam_lidder_river_l_359_539.jpg" alt="" />
            <p>Lidder River</p>
          </div>

          <div className="highlight-card">
            <img src="https://gos3.ibcdn.com/3d9db06d-685c-48d6-8966-f93427bfcf84.jpg" alt="" />
            <p>Camping & Nature</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Choose This Adventure?</h2>

        <div className="why-grid">
          <div>🏔️ Trekking Trails</div>
          <div>🚣 River Activities</div>
          <div>🏕️ Camping Experience</div>
          <div>📸 Scenic Landscapes</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Start Your Adventure in Pahalgam</h2>
        <p>4 Days of thrill and nature</p>
        <br />

        <Link to="/pahalgam">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>4 Days Adventure Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://mytriphack.com/wp-content/uploads/2018/05/Pahalgam-taxi-stand.jpg.webp" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Transfer to Pahalgam</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://bunny-wp-pullzone-a1hdg9hgfm.b-cdn.net/wp-content/uploads/2023/06/natuire-beauty.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Aru Valley Trek & Exploration</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media1.thrillophilia.com/filestore/4qumniv2qe66a3r7a6p035wzkb2i_456996511.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Lidder River Activities & Camping</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://theroamingshoes.com/wp-content/uploads/2023/08/DSC_1127-1024x683.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Return Journey & Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default PahalgamAdventureLanding;