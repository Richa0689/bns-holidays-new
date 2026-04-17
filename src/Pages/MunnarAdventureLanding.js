import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const MunnarAdventureLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://spicetreemunnar.com/wp-content/uploads/2022/10/Pothamedu-Viewpoint-1.jpg"
          alt="Adventure Munnar Trip"
        />

        <div className="hero-content">
          <h1>Adventure Munnar Trip</h1>
          <p>Hills • Trekking • Nature Adventure</p>

          <Link to="/munnar">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://cdn.tripspoint.com/uploads/photos/12113/dawns-embrace-sun-rise-trek-at-lakshmi-hills-munnar_44OQo.jpeg" alt="" />
            <p>Mountain Trekking</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/95/2c/a0/tea-gardens.jpg?w=900&h=500&s=1" alt="" />
            <p>Tea Plantation Trails</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.ourmunnartrip.com/upload_pic/destinations/gallery/waterfalls-frontview.webp" alt="" />
            <p>Waterfall Exploration</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.exoticamp.com/vendors/images/profile/1_20240822T135535856Z.jpg" alt="" />
            <p>Camping & Nature Stay</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Choose Adventure Munnar?</h2>

        <div className="why-grid">
          <div>🥾 Trekking Trails</div>
          <div>⛰️ Scenic Hills</div>
          <div>🔥 Camping Experience</div>
          <div>📸 Nature Photography</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Adventure Trip</h2>
        <p>4 Days of thrill & nature</p>
        <br />

        <Link to="/munnar">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>4 Days Adventure Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://mytriphack.com/wp-content/uploads/2018/01/DSC08281.jpg.webp" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Trek Introduction</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/95/2c/a0/tea-gardens.jpg?w=900&h=500&s=1" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Mountain Trek & Tea Garden Walk</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/thommankuthu-waterfall-munnar-kerala-2-attr-hero?qlt=82&ts=1726672752748" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Waterfall Visit & Camping Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.periyarnationalparkonline.in/images/munnar-tour.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Leisure & Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default MunnarAdventureLanding;