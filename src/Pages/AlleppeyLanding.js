import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const AlleppeyLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.trawell.in/images/tours/Alleppey.jpg"
          alt="Best of Alleppey"
        />

        <div className="hero-content">
          <h1>Best of Alleppey</h1>
          <p>Backwaters • Houseboats • Nature</p>

          <Link to="/alleppey">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/5b/67/37/feel-the-refreshing-backwater.jpg?w=1200&h=1200&s=1" alt="" />
            <p>Backwater Cruise</p>
          </div>

          <div className="highlight-card">
            <img src="https://lakequeenhouseboats.com/wp-content/uploads/2024/11/houseboat.jpg" alt="" />
            <p>Houseboat Stay</p>
          </div>

          <div className="highlight-card">
            <img src="https://mytriphack.com/wp-content/uploads/2018/03/Kerala-backwater-village.jpg" alt="" />
            <p>Village Life Experience</p>
          </div>

          <div className="highlight-card">
            <img src="https://thumbs.dreamstime.com/b/blessed-nature-s-scenic-backwaters-lagoons-canals-beaches-alappuzha-alleppey-located-vembanad-lake-225355370.jpg" alt="" />
            <p>Scenic Waterways</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Visit Alleppey?</h2>

        <div className="why-grid">
          <div>🚤 Backwater Cruises</div>
          <div>🏡 Houseboat Living</div>
          <div>🌴 Coconut Lagoons</div>
          <div>📸 Peaceful Nature</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Alleppey Trip</h2>
        <p>4 Days of relaxation & beauty</p>
        <br />

        <Link to="/alleppey">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>4 Days Alleppey Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://media1.thrillophilia.com/filestore/r0vpdnja7h511wjpa2f5aangdacu_image%20-%202025-02-20T131104,447_enhanced.png?w=400&dpr=2" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Check-in to Houseboat</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/5b/67/37/feel-the-refreshing-backwater.jpg?w=1200&h=1200&s=1" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Backwater Cruise & Village Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://site.outlookindia.com/traveller/wp-content/uploads/2017/03/alleppey-backwater5-copy-F.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Leisure & Local Exploration</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://keralatourpackagesguide.com/wp-content/uploads/2018/01/Kodaikanal-Munnar-Alleppey-Tour-Packages.jpg" alt="" />
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

export default AlleppeyLanding;