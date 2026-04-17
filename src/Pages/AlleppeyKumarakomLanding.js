import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const AlleppeyKumarakomLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://theholidaysdestination.com/wp-content/uploads/2022/02/alleppey-tour-2.jpg"
          alt="Alleppey Kumarakom"
        />

        <div className="hero-content">
          <h1>Alleppey & Kumarakom</h1>
          <p>Backwaters • Nature • Serenity</p>

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
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/a0/51/e8.jpg" alt="" />
            <p>Backwater Cruise</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.raptorholidays.com/cdn/shop/products/hb1_86c0ed89-5a1b-41a3-aabf-147a488b79d5_1024x1024.jpg?v=1485948409" alt="" />
            <p>Houseboat Stay</p>
          </div>

          <div className="highlight-card">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/kumarakom-bird-sanctuary-kumarakom-kerala-1-new-attr-hero?qlt=82&ts=1727367750122" alt="" />
            <p>Kumarakom Bird Sanctuary</p>
          </div>

          <div className="highlight-card">
            <img src="https://mytriphack.com/wp-content/uploads/2018/03/Kerala-backwater-village.jpg" alt="" />
            <p>Village Life Experience</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🚤 Scenic Backwaters</div>
          <div>🦜 Bird Sanctuary Visit</div>
          <div>🏡 Houseboat Experience</div>
          <div>🌴 Peaceful Nature</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore Kerala’s Backwaters</h2>
        <p>5 Days of beauty & relaxation</p><br />

        <Link to="/alleppey">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>5 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://site.outlookindia.com/traveller/wp-content/uploads/2017/03/alleppey-backwater5-copy-F.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Alleppey & Leisure</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://alleppeyhouseboat.in/wp-content/uploads/2020/02/2-banner-2.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Houseboat Stay & Backwater Cruise</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/246622174.jpg?k=0be9d5c1063620c3a244ecab69a7af20bf9b75af116879886babcf4c01bc69cc&o=" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Transfer to Kumarakom & Resort Stay</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://i0.wp.com/stampedmoments.com/wp-content/uploads/2023/09/alleppey-backwaters-4.jpg?fit=1024%2C512&ssl=1" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Visit Bird Sanctuary & Local Sightseeing</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://keralatourpackagesguide.com/wp-content/uploads/2018/01/Kodaikanal-Munnar-Alleppey-Tour-Packages.jpg" alt="" />
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

export default AlleppeyKumarakomLanding;