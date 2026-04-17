import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const ChennaiCulturalLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://vishwavihar.com/images/tours/grid/85_2_chennai-and-around-.jpg"
          alt="Chennai Cultural Tour"
        />

        <div className="hero-content">
          <h1>Chennai Cultural Tour</h1>
          <p>Culture • Temples • Tradition</p>

          <Link to="/Pages/chennai">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://www.transindiatravels.com/wp-content/uploads/kapaleeshwarar-temple.jpg" alt="" />
            <p>Kapaleeshwarar Temple</p>
          </div>

          <div className="highlight-card">
            <img src="https://imgmediagumlet.lbb.in/media/2024/05/664afa7a6dc77b6f098b45be_1716189818492.jpg" alt="" />
            <p>Traditional Dance Shows</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.alphonsostories.com/AlphonSoStoriesImages/downloads/08--top-things-to-do-at-dakshinachitra-museum.jpg" alt="" />
            <p>Local Markets & Culture</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.fabhotels.com/blog/wp-content/uploads/2019/02/Valluvar-Kottam.jpg" alt="" />
            <p>Historic Landmarks</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏛️ Rich Cultural Heritage</div>
          <div>🎭 Traditional Experiences</div>
          <div>🍛 Authentic South Indian Food</div>
          <div>📸 Cultural Photography Spots</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Chennai Culture</h2>
        <p>3 Days of heritage & traditions</p><br />

        <Link to="/Pages/chennai">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>3 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/12/5c/62/3c.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Cultural City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/16/03/3e/c7.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Temple Visits & Traditional Shows</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.easemytrip.com/media/Blog/India/637046651383771408/637046651383771408Q1HNTB.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Local Market Visit & Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ChennaiCulturalLanding;