import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const JaipurUdaipurLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://res.cloudinary.com/dyiffrkzh/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_center,h_400,q_auto,w_700/v1694265121/bbj/tuytybnm2vqf1dcqhzeo.webp"
          alt="Jaipur Udaipur Tour"
        />

        <div className="hero-content">
          <h1>Jaipur & Udaipur</h1>
          <p>Royal Palaces • Lakes • Heritage</p>

          <Link to="/Pages/jaipur">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://www.tripsavvy.com/thmb/kCInqa2Yy8AZb9xm_OkIoPkFajg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-524151419-6d874058218e48e88803c5fca2f6c1d2.jpg" alt="" />
            <p>Amber Fort (Jaipur)</p>
          </div>

          <div className="highlight-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/13/d6/dc/00.jpg" alt="" />
            <p>City Palace</p>
          </div>

          <div className="highlight-card">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/lake-pichola-udaipur-rajasthan-6-attr-hero?qlt=82&ts=1742157000800" alt="" />
            <p>Lake Pichola (Udaipur)</p>
          </div>

          <div className="highlight-card">
            <img src="https://mytriptraveller.com/wp-content/uploads/2026/02/Pi7_Tool_udaipur-3229676_1280-1.webp" alt="" />
            <p>Udaipur Palace Views</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Royal Heritage Experience</div>
          <div>🌊 Beautiful Lake Views</div>
          <div>📸 Photography Spots</div>
          <div>🚗 Comfortable Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Royal Rajasthan</h2>
        <p>6 Days of heritage & luxury</p><br />

        <Link to="/Pages/jaipur">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>6 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://img.staticmb.com/mbcontent/images/crop/uploads/2023/7/Jaipur-International-Airport-Terminal_0_1200.jpg.webp" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Jaipur</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/amber-fort-jaipur-rajasthan-1-attr-hero?qlt=82&ts=1742157903972" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Amber Fort & City Palace</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.bharatbooking.com/admin/webroot/img/uploads/holiday-package-gallery/1707129379_861624-jaipur-sightseeing--tour-package-slider-image.webp" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Jaipur Sightseeing</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/3a/4e/66.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Transfer to Udaipur</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0f/a4/b7/ea.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Udaipur Sightseeing & Lake Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://airmundo.com/wp-content/uploads/2024/03/Jaipur-Airport-JAI.jpg" alt="" />
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

export default JaipurUdaipurLanding;