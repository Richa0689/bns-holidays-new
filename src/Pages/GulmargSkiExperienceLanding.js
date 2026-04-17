import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const GulmargSkiExperienceLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://brownchinarkashmir.com/wp-content/uploads/2024/11/ice_skating_in_gulmarg_brown_chinar_kashmir.webp"
          alt="Gulmarg Ski Experience"
        />
        <div className="hero-content">
          <h1>Gulmarg Ski Experience</h1>
          <p>Snow Sports. Skiing. Himalayan Thrill.</p>

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
              src="https://static2.tripoto.com/media/filter/tst/img/OgData/1492688329_1492666629_dsc00082.jpg"
              alt="Skiing"
            />
            <p>Ski Training</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://media.cnn.com/api/v1/images/stellar/prod/240112092135-02-gulmarg-snow.jpg?q=w_1110,c_fill"
              alt="Snow Mountains"
            />
            <p>Snow Mountains</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://s7ap1.scene7.com/is/image/incredibleindia/gulmarg-meadows-srinagar-jammu-and-kashmir-tri-hero-2?qlt=82&ts=1727163954495"
              alt="Gulmarg Valley"
            />
            <p>Gulmarg Valley</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://res.cloudinary.com/kmadmin/image/upload/v1724928080/kiomoi/Tangmarg_7042.jpg"
              alt="Tangmarg"
            />
            <p>Tangmarg Visit</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Gulmarg Ski Experience?</h2>

        <div className="why-grid">
          <div>🎿 Best Ski Slopes in India</div>
          <div>🏔️ Heavy Snow Season</div>
          <div>🚡 Gondola Ride Included</div>
          <div>📸 Professional Photo Spots</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Book Your Ski Adventure</h2>
        <p>6 Days of pure snow experience</p>
        <br />

        <Link to="/gulmarg">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>6 Days Ski Experience Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFrolCZjPfOLfTZOvrdZv8O8sUWn3pD5iAGA&s"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Srinagar & Transfer to Gulmarg</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.auliskiing.in/images/children%20ski%20in%20gulmarg.jpeg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Basic Ski Training</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://brownchinarkashmir.com/wp-content/uploads/2024/11/ice_skating_in_gulmarg_brown_chinar_kashmir.webp"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Advanced Ski Practice</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://chalbanjare.com/crmnew/img_master/package/DrungWaterfall_17716688140.webp"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Tangmarg Excursion</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.pexels.com/photos/11024977/pexels-photo-11024977.jpeg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Full Snow Activities & Photography</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.pexels.com/photos/31385966/pexels-photo-31385966.jpeg?cs=srgb&dl=pexels-aritra-hazra-249157205-31385966.jpg&fm=jpg"
              alt=""
            />
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

export default GulmargSkiExperienceLanding;