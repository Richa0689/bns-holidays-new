import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const RohtangLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://s7ap1.scene7.com/is/image/incredibleindia/rohtang-pass-manali-himachal-pradesh-2-attr-hero?qlt=82&ts=1726730662558"
          alt="Rohtang Pass"
        />
        <div className="hero-content">
          <h1>Manali & Rohtang Pass</h1>
          <p>6 Days • Snow Adventure • Scenic Himalayas</p>

          <Link to="/manali">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Manali_City.jpg" alt="" />
            <p>Manali</p>
          </div>

          <div className="highlight-card">
            <img src="https://hblimg.mmtcdn.com/content/hubble/img/manali/mmt/activities/m_rohtang-pass_l_400_640.jpg" alt="" />
            <p>Rohtang Pass</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.incredibleindia-tourism.org/images/adventure-tours/solang-valley.jpg" alt="" />
            <p>Solang Valley</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.clubmahindra.com/storage/app/media/Resort/Club%20Mahindra%20Snow%20Peaks%20Manali%20Himachal%20Pradesh/SWPK_Exterior_01.jpg" alt="" />
            <p>Snow Peaks</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>❄️ Snow Experience</div>
          <div>🏔️ Himalayan Views</div>
          <div>🎿 Adventure Activities</div>
          <div>🚗 Scenic Road Trips</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Rohtang Adventure</h2>
        <p>Experience snow, mountains, and thrill</p>
        <br />

        <Link to="/manali">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>6 Days Manali & Rohtang Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://t.eucdn.in/tourism/lg/manali-9202425.webp" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Manali & Leisure Evening</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://img.avianexperiences.com/attraction/34481050-db18-438f-8576-e16833b8cdd0" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Solang Valley Adventure Activities</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://discoverkullumanali.in/wp-content/uploads/2019/10/Tourists-enjoy-snow-at-Rohtang-pass-6.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Rohtang Pass Snow Excursion</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/24/eb/eb/last-stop-cafe-area.jpg?w=900&h=500&s=1" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Old Manali & Café Exploration</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://manalitourplanner.com/wp-content/uploads/2024/01/How-to-reach-the-Tibetan-Market-in-Manali-1024x576.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Local Market & Shopping</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Kullu_Manali_Airport_in_Bhunter_02.jpg" alt="" />
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

export default RohtangLanding;