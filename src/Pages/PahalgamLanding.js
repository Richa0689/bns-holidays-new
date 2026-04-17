import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const PahalgamLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://s7ap1.scene7.com/is/image/incredibleindia/3-amarnath-yatra-pahalgam-jammu-and-kashmir-city-hero-new?qlt=82&ts=1726728787453"
          alt="Best of Pahalgam"
        />

        <div className="hero-content">
          <h1>Best of Pahalgam</h1>
          <p>Valleys, Rivers & Himalayan Beauty</p>

          <Link to="/pahalgam">
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
              src="https://www.tourmyindia.com/socialimg/aru-valley-pahalgam.jpg"
              alt="Aru Valley"
            />
            <p>Aru Valley</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJ8PxQyOg44q_lKKQ2TleSWuFJqtUUzVWYQ&s"
              alt="Himalayas"
            />
            <p>Himalayan Views</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://www.kashmirhills.com/wp-content/uploads/2015/02/lidder-river-kashmirhills.com-2.jpg"
              alt="River"
            />
            <p>Lidder River</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://www.vibrantfootsteps.com/wp-content/uploads/2023/06/20230602_072849-PS-scaled.jpg"
              alt="Nature"
            />
            <p>Nature Walks</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Choose Pahalgam?</h2>

        <div className="why-grid">
          <div>🌿 Green Valleys</div>
          <div>🏔️ Snow Peaks</div>
          <div>🐎 Horse Riding</div>
          <div>📸 Scenic Photography</div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="cta-section">
        <h2>Plan Your Pahalgam Trip</h2>
        <p>5 Days of Himalayan beauty</p>
        <br />

        <Link to="/pahalgam">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>5 Days Pahalgam Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://www.stayvista.com/blog/wp-content/uploads/2025/11/Srinagar_to_Pahalgam_-_vrvvkbjk2k23iph_212-1024x768.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Srinagar & Transfer to Pahalgam</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://charzanholidays.com/wp-content/uploads/2024/08/Aru_valley_pahalgam__charzan_holidays.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Aru Valley Exploration</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://valleytripplanner.in/wp-content/uploads/2023/09/betaab-valley-min.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Betaab Valley Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.lehladakhtourism.com/pahalgam/images/pahalgam.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>River Side & Local Sightseeing</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://theroamingshoes.com/wp-content/uploads/2023/08/DSC_1127-1024x683.jpg"
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

export default PahalgamLanding;