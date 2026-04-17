import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const OotyAdventureLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://www.agoda.com/wp-content/uploads/2024/09/ooty-india-featured-1244x700.jpg"
          alt="Adventure Ooty Trip"
        />

        <div className="hero-content">
          <h1>Adventure Ooty Trip</h1>
          <p>Adventure • Hills • Thrill</p>

          <Link to="/Pages/ooty">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_651099808_20200120181956_20200120182016.jpg" alt="" />
            <p>Trekking in Ooty Hills</p>
          </div>

          <div className="highlight-card">
            <img src="https://res.cloudinary.com/dyiffrkzh/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_center,h_400,q_auto,w_700/v1701319503/bbj/cuhkufrzl8ne9zocl40t.jpg" alt="" />
            <p>Camping Experience</p>
          </div>

          <div className="highlight-card">
            <img src="https://media1.thrillophilia.com/filestore/9qbjn83xchtfbpk4bq8ovnwnl4ba_1587557136_Behind-Bars-Ooty-Glen-Morgan-Trail-FB-1024x768.jpg" alt="" />
            <p>Mountain Biking</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/9d/27/b3/fb-img-1536833683869.jpg?w=1200&h=-1&s=1" alt="" />
            <p>Nature Trails</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏕️ Adventure Activities</div>
          <div>🌄 Scenic Landscapes</div>
          <div>🚵 Outdoor Experiences</div>
          <div>🔥 Thrilling Getaway</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Feel the Adventure</h2>
        <p>3 Days of thrill & excitement</p><br />

        <Link to="/Pages/ooty">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>3 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2F1722321232438_33.jpg&w=1920&q=75" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Trekking Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://ootytourism.co.in/images/headers/amusement-and-theme-parks-in-ooty-header-ooty-tourism-cr-places-to-see-02-se-yt.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Camping & Adventure Activities</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/20/cc/b3.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Nature Walk & Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default OotyAdventureLanding;