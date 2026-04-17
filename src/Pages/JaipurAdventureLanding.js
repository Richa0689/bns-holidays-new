import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const JaipurAdventureLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://www.jaipurstuff.com/wp-content/uploads/2019/03/ADVENTURE.jpg"
          alt="Adventure Jaipur Trip"
        />

        <div className="hero-content">
          <h1>Adventure Jaipur Trip</h1>
          <p>Adventure • Desert • Royal Thrill</p>

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
            <img src="https://www.rajasthantourpackages.in/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fx7ulapdbp%2F30ec11f4-e0bd-4032-9d45-a4deb846311d-5days-jaipur-udaipur-desert-tours.jpg&w=3840&q=75" alt="" />
            <p>Desert Safari</p>
          </div>

          <div className="highlight-card">
            <img src="https://ik.imagekit.io/x7ulapdbp/blogs/jeep-safari-in-jaipur-desert.jpg?updatedAt=1755836110545" alt="" />
            <p>Jeep Ride Adventure</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.agoda.com/wp-content/uploads/2024/02/Nahargath-Fort-Jaipur-India-1050x700.jpg" alt="" />
            <p>Fort Exploration</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.cityofjaipur.com/media/3656/sunset5.jpg" alt="" />
            <p>Sunset Views</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🔥 Thrilling Desert Adventures</div>
          <div>🏜️ Unique Rajasthan Experience</div>
          <div>📸 Amazing Photography Spots</div>
          <div>🚗 Comfortable Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Feel the Adventure of Jaipur</h2>
        <p>4 Days of thrill & exploration</p><br />

        <Link to="/Pages/jaipur">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>4 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://pix10.agoda.net/hotelImages/757073/0/b15338e1e2a5a6b8747d3a96e8a52262.jpg?ce=2&s=702x392" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.sushanttravels.com/uploads/lKX6Z1B_jeep_Sapari_In_rajasthan_3.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Desert Safari & Jeep Ride</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_Jaipur_tv_destination_img_9_l_667_1000.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Fort Exploration & Sightseeing</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://img.staticmb.com/mbcontent/images/crop/uploads/2023/7/Jaipur-International-Airport-Terminal_0_1200.jpg.webp" alt="" />
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

export default JaipurAdventureLanding;