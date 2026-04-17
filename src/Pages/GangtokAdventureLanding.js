import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const GangtokAdventureLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://s7ap1.scene7.com/is/image/incredibleindia/Copy-of-Gangtok-A-Paradise-for-Adventure-Enthusiasts1-hero?qlt=82&ts=1742154448490"
          alt="Adventure Gangtok Trip"
        />

        <div className="hero-content">
          <h1>Adventure Gangtok Trip</h1>
          <p>Adventure • Mountains • Thrill</p>

          <Link to="/Pages/gangtok">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://media1.thrillophilia.com/filestore/8c4endyet4gv16wx0d1otkevk90l_pexels-saikat-ghosh-914128.jpg?w=400&dpr=2" alt="" />
            <p>Trekking Trails</p>
          </div>

          <div className="highlight-card">
            <img src="https://trekinsikkim.in/_next/image?url=https%3A%2F%2Fupload.trekinsikkim.in%2Fuploads%2Fmedia-gallery%2Ffiles-1748704123599-657322907&w=3840&q=75" alt="" />
            <p>Mountain Adventures</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.esikkimtourism.in/wp-content/uploads/2019/04/rvrrftngseptmbbr.jpg" alt="" />
            <p>River Activities</p>
          </div>

          <div className="highlight-card">
            <img src="https://trekinsikkim.in/_next/image?url=https%3A%2F%2Fupload.trekinsikkim.in%2Fuploads%2Fmedia-gallery%2Ffiles-1748693739660-582424567&w=3840&q=75" alt="" />
            <p>Scenic Views</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏔️ Thrilling Experiences</div>
          <div>🥾 Trekking & Exploration</div>
          <div>📸 Adventure Photography</div>
          <div>🚗 Comfortable Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Feel the Adventure</h2>
        <p>4 Days of thrill & exploration</p><br />

        <Link to="/Pages/gangtok">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>4 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/f7/e2/42/exterior.jpg?w=400&h=300&s=1" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://miro.medium.com/v2/resize:fit:600/1*y_Yu2b7hrAuG-B4rkAjuCg.jpeg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Trekking & Adventure Activities</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.stayvista.com/blog/wp-content/uploads/2024/12/file-TEBehMmkzvzqhMnzF3s4KH.webp" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>River Activities & Sightseeing</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.istockphoto.com/id/1589827097/photo/high-angle-view-of-townscape-and-mountains-against-sky-gangtok-sikkim.jpg?s=612x612&w=0&k=20&c=IhraQMUR00pcm_thrnk1I2zwH30kvlrCPRAtWjq7E5o=" alt="" />
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

export default GangtokAdventureLanding;