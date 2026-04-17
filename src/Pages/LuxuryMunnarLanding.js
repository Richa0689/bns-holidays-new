import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxuryMunnarLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.trawell.in/images/tours/Munnar.jpg"
          alt="Luxury Munnar Tour"
        />

        <div className="hero-content">
          <h1>Luxury Munnar Tour</h1>
          <p>Premium Stay • Nature • Relaxation</p>

          <Link to="/munnar">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://gos3.ibcdn.com/f5276854c73d11edbc4e0a58a9feac02.jpg" alt="" />
            <p>Luxury Resorts</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/16/24/b9/camping-at-the-top-of.jpg?w=1200&h=-1&s=1" alt="" />
            <p>Tea Estate Views</p>
          </div>

          <div className="highlight-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-360x240/12/d3/ce/19.jpg" alt="" />
            <p>Private Hill Tours</p>
          </div>

          <div className="highlight-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/a6/63/0b.jpg" alt="" />
            <p>Kochi City Visit</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Choose Luxury Munnar?</h2>

        <div className="why-grid">
          <div>🏨 Premium Resorts</div>
          <div>🌿 Scenic Tea Gardens</div>
          <div>🚗 Private Transfers</div>
          <div>📸 Relaxing Experience</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Luxury Trip</h2>
        <p>7 Days of comfort & beauty</p>
        <br />

        <Link to="/munnar">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>7 Days Luxury Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://www.savaari.com/blog/wp-content/uploads/2020/03/kochi-to-munnar-highway.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Kochi & Transfer to Munnar</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://munnar.holiday/api/uploads/1767610732165_3e5m9g.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Tea Gardens & Resort Relaxation</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/16/05/78/b3.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Private Sightseeing Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/331268401.jpg?k=0be95b32a4c658c3a1dfa10632c21dfda9f44f87c837331bb5ee3f449780ce07&o=" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Leisure & Spa Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://cdn.getyourguide.com/img/tour/5b7d0f51d8e41.jpeg/60.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Excursion & Photography Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://pictures.trodly.com/image/activity/3381/size-262x162/mode-crop/64ae488ce6d4c.jpg" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Return to Kochi & City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.ewsholidays.com/wp-content/uploads/2018/10/Tea-Garden-Munnar-Kerala-101.jpg" alt="" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default LuxuryMunnarLanding;