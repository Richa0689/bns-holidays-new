import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const TempleLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.holidify.co/images/bgImages/MADURAI.jpg"
          alt="Temple Tour"
        />
        <div className="hero-content">
          <h1>South India Temple Tour</h1>
          <p>Spiritual Journey. Divine Temples. Cultural Heritage.</p>
          <Link to="/tamilnadu-tours">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Major Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Tirupati_20191220133421.jpg" alt="" />
            <p>Tirupati Balaji Temple</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Vellore_Temple_20191220133445.jpg" alt="" />
            <p>Vellore Golden Temple</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Kanchipuram_20191220133506.jpg" alt="" />
            <p>Kanchipuram Temples</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Mahabalipuram_20191220132325.jpg" alt="" />
            <p>Mahabalipuram</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Kumbakonam_20191220133528.jpg" alt="" />
            <p>Kumbakonam Temples</p>
          </div>
        
        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose Temple Tour?</h2>

        <div className="why-grid">
          <div>🙏 Spiritual Experience</div>
          <div>🛕 Famous Temples of South India</div>
          <div>🏛️ Rich Cultural Heritage</div>
          <div>🌍 Multi-City Journey</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Start Your Divine Journey</h2>
        <p>Book your Temple Tour today</p><br />
        <Link to="/tamilnadu-tours">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>11 Days Tour Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://www.holidify.com/images/bgImages/CHENAI.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}></p>
              <p> </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Tirupati_20191220133421.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}></p>
              <p></p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Vellore_Temple_20191220133445.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}></p>
              <p></p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Kanchipuram_20191220133506.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}></p>
              <p></p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Mahabalipuram_20191220132325.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}></p>
              <p></p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Kumbakonam_20191220133528.jpg" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}></p>
              <p></p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Tanjore_Temple_20191220133549.jpg" alt="" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}></p>
              <p></p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Ramanathaswamy_Temple_20191220132728.jpg" alt="" />
            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{ color: "blue" }}></p>
              <p></p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.holidify.com/images/cmuploads/compressed/Meenakshi_Temple_20191220132805.jpg" alt="" />
            <div className="day-content">
              <h3>Day 9</h3>
              <p style={{ color: "blue" }}></p>
              <p></p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.holidify.com/images/bgImags/MAURAI.jpg" alt="" />
            <div className="day-content">
              <h3>Day 10</h3>
              <p style={{ color: "blue" }}></p>
              <p></p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.holidiy.com/images/bgImages/CHENNAI.jpg" alt="" />
            <div className="day-content">
              <h3>Day 11</h3>
              <p style={{ color: "blue" }}></p>
              <p></p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default TempleLanding;