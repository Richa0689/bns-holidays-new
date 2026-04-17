import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const AdventureManaliLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.tripsavvy.com/thmb/ZDRQXV-PiFDTFZu4x22mZkYuw9s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-930881934-5ae56fe48023b90036464e72.jpg"
          alt="Adventure Manali"
        />
        <div className="hero-content">
          <h1>Adventure Manali Tour</h1>
          <p>4 Days • Thrill & Adventure </p>

          <Link to="/manali">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Adventure Spots</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/05/0f/94/c2/paragliding-in-solang.jpg" alt="" />
            <p>Solang Valley</p>
          </div>

          <div className="highlight-card">
            <img src="https://img.avianexperiences.com/attraction/ce2675a8-a338-48d9-ae23-ea5918d1066e" alt="" />
            <p>Paragliding</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.adventurush.com/wp-content/uploads/2022/07/3-16.jpg" alt="" />
            <p>River Rafting</p>
          </div>

          <div className="highlight-card">
            <img src="https://lh4.googleusercontent.com/proxy/pnTAy5-NU3WNBZ6QG_T1IN18xiaI1rGkpVbe8ccd9sl2kLujMmac739SeXM0Ru17_EmqA6Q1j5uwPBuPkJVVunyEUcIBADAro7bb" alt="" />
            <p>Camping</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Choose Adventure Manali?</h2>

        <div className="why-grid">
          <div>🪂 Paragliding Thrill</div>
          <div>🚣 River Rafting</div>
          <div>🏔️ Mountain Trekking</div>
          <div>🔥 Bonfire & Camping</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Ready for Adventure?</h2>
        <p>Experience adrenaline in the Himalayas</p>
        <br />

        <Link to="/manali">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>4 Days Adventure Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://discoverkullumanali.in/wp-content/uploads/2020/01/The-Mall-Road-of-Manali-1024x530.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Manali & Local Exploration</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://uttarakhandtravelagency.com/images/Solang_Valley_1754981626.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Solang Valley Adventure (Paragliding, Skiing)</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://kullumanali.org/wp-content/uploads/2018/06/White-Water-Rafting-in-Manali-gallery-1.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>River Rafting & Camping Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Kullu_Manali_Airport_in_Bhunter_02.jpg" alt="" />
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

export default AdventureManaliLanding;