import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const GulmargSnowAdventureLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://img.avianexperiences.com/attraction/c0cbdd7b-e447-4992-a92e-01c4efe41c38"
          alt="Gulmarg Snow Adventure"
        />
        <div className="hero-content">
          <h1>Gulmarg Snow Adventure</h1>
          <p>Snow, Skiing & Himalayan Thrill</p>

          <Link to="/gulmarg">
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
              src="https://www.shutterstock.com/image-photo/aerial-view-snowcovered-gulmarg-kashmir-600nw-2683718581.jpg"
              alt="Snow View"
            />
            <p>Snow View</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://www.bikatadventures.com/images/Gallery/IMG1000X548/img-Ski-Course-Gulmarg9211-Bikat-Adventures.jpg"
              alt="Skiing"
            />
            <p>Skiing Adventure</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://media.dpauls.com/drive-server/images/packages/india/srinagar/dal-lake-at-srinagar-kashmir-india.jpg"
              alt="Srinagar"
            />
            <p>Srinagar Trip</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://www.acethehimalaya.com/wp-content/uploads/2025/09/easly-and-accessible-himalayan-viewpoints-in-nepal.jpg"
              alt="Mountains"
            />
            <p>Himalayan Views</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Choose Gulmarg Adventure?</h2>

        <div className="why-grid">
          <div>🎿 Skiing Capital of India</div>
          <div>🏔️ Heavy Snowfall Region</div>
          <div>🚡 Gondola Ride Experience</div>
          <div>📸 Instagram-Worthy Views</div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="cta-section">
        <h2>Book Your Snow Adventure</h2>
        <p>Experience the thrill of Gulmarg</p>
        <br />

        <Link to="/gulmarg">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>5 Days Gulmarg Snow Adventure</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://traveltagline.com/wp-content/uploads/2021/03/Top-Things-to-Do-in-Jammu-and-Kashmir-800x450.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Srinagar & Transfer to Gulmarg</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tripperhub.com/wp-content/uploads/2025/02/Skiing3.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Snow Activities & Ski Training</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://topclassholidays.com/wp-content/uploads/2024/03/Gulmarg-gondola-the-highest-cable-car-in-the-world.jpeg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Gondola Ride & Snow Trekking</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://imgcld.yatra.com/ytimages/image/upload/v1466686656/pahalgam_1466686652.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Photography & Local Exploration</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://bharatexplored.com/wp-content/uploads/2026/02/Srinagar-to-Gulmarg-Distance-The-Ultimate-Travel-Guide-2026-2.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Return to Srinagar & Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default GulmargSnowAdventureLanding;