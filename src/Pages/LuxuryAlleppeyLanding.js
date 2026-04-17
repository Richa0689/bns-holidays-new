import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxuryAlleppeyLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://marineworld.in/wp-content/uploads/2024/10/types-of-plywood-1-1-3-1.webp"
          alt="Luxury Alleppey"
        />

        <div className="hero-content">
          <h1>Luxury Alleppey Tour</h1>
          <p>Luxury • Backwaters • Premium Stay</p>

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
            <img src="https://www.alleppeyhouseboat.org/images/houseboats/luxury-houseboats/1bedroom-luxury-alleppey-houseboats.jpg" alt="" />
            <p>Luxury Houseboat</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.thomascook.in/blog//wp-content/uploads/2018/05/houseboat-2031055_960_720.jpg" alt="" />
            <p>Private Backwater Cruise</p>
          </div>

          <div className="highlight-card">
            <img src="https://hblimg.mmtcdn.com/content/hubble/img/alleppey/mmt/activities/t_ufs/m_activities_alleppey_alleppey_beach_l_484_725.jpg" alt="" />
            <p>Kochi Sightseeing</p>
          </div>

          <div className="highlight-card">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/01/46/28/niraamaya-retreats-backwaters.jpg" alt="" />
            <p>Premium Resorts</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose Luxury Tour?</h2>

        <div className="why-grid">
          <div>🏨 Premium Resorts</div>
          <div>🚤 Private Houseboat</div>
          <div>🍽️ Fine Dining</div>
          <div>🌴 Exclusive Experience</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Luxury in Kerala</h2>
        <p>6 Days of comfort & elegance</p><br />

        <Link to="/alleppey">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>6 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/97/1a/95/aquatic-resort-aerial.jpg?w=1200&h=-1&s=1" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Kochi & Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://site.outlookindia.com/traveller/wp-content/uploads/2017/03/alleppey-backwater5-copy-F.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Kochi Sightseeing & Leisure</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/573937117.jpg?k=7154b9a6bb565382c172be1505496ec6f0d3fdf250854e78d9615c7672b1a9fa&o=" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Transfer to Alleppey & Luxury Houseboat Stay</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://img.avianexperiences.com/trek/bd12d627-294e-4087-b064-cc71f7d2bceb" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Backwater Cruise & Relaxation</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://gos3.ibcdn.com/535496e6-84d4-4996-a213-a6657702c029.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Resort Stay & Leisure Activities</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://static.wixstatic.com/media/36a61e_f3e5994a4dfd4e9795553681688f4f4f~mv2.jpg/v1/fill/w_640,h_426,al_c,q_90,enc_avif,quality_auto/36a61e_f3e5994a4dfd4e9795553681688f4f4f~mv2.jpg" alt="" />
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

export default LuxuryAlleppeyLanding;