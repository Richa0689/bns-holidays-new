import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const GuwahatiLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://www.toptourguide.com/images/Assam.jpg"
          alt="Guwahati Tour"
        />

        <div className="hero-content">
          <h1>Best of Guwahati</h1>
          <p>Temples • Nature • Culture</p>

          <Link to="/Pages/guwahati">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/kamakhya-temple-dispur-assam-2-attr-hero?qlt=82&ts=1742179171313" alt="" />
            <p>Kamakhya Temple</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.lostwithpurpose.com/wp-content/uploads/2018/01/DSC08313.jpg" alt="" />
            <p>Brahmaputra River Cruise</p>
          </div>

          <div className="highlight-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUoNjhK0zYglcztgUX99ShUJWuccPgstqUng&s" alt="" />
            <p>Umananda Island</p>
          </div>

          <div className="highlight-card">
            <img src="https://content.jdmagicbox.com/comp/def_content_category/markets/8-markets-8-c3b7h.jpg" alt="" />
            <p>Local Markets</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🛕 Spiritual Experience</div>
          <div>🌄 Scenic River Views</div>
          <div>📸 Cultural Exploration</div>
          <div>🚗 Comfortable Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore Guwahati</h2>
        <p>4 Days of culture & serenity</p><br />

        <Link to="/Pages/guwahati">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>4 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/21/ec/8b/facade.jpg?w=1200&h=-1&s=1" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/kamakhya-temple-dispur-assam-2-attr-hero?qlt=82&ts=1742179171313" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Kamakhya Temple Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.trawell.in/admin/images/upload/42491832Guwahati_Brahmaputra_River_Cruise_Main.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Brahmaputra River Cruise & Sightseeing</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://etimg.etb2bimg.com/photo/96268966.cms" alt="" />
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

export default GuwahatiLanding;