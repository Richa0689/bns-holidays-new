import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const MunnarLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.thewindmunnar.com/images/monsoon-Munnar.jpg"
          alt="Best of Munnar"
        />

        <div className="hero-content">
          <h1>Best of Munnar</h1>
          <p>Tea Gardens • Hills • Nature Escape</p>

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
            <img src="https://lh4.googleusercontent.com/proxy/0m93vMJ5mWjIxMmhlrJ8RAVa5WDa5glN6pX4QgBrxH6DjINXJlonbH2ILP_7flKBDXBkQiYFRyNR39VjvcYj2g4QzBUP1nTd-BsiDV7aE9Bkedv2ncBZZ_xmCzxksIGm1jo8Fvwot9jTq9Ds" alt="" />
            <p>Tea Plantations</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/c6/0f/d0/anamudi-peak.jpg?w=500&h=500&s=1" alt="" />
            <p>Mountain Views</p>
          </div>

          <div className="highlight-card">
            <img src="https://img.avianexperiences.com/attraction/4e119b87-00ed-47e2-bd34-7617d72cdd70" alt="" />
            <p>Waterfalls</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.bluebirdtravels.in/wp-content/uploads/munnar/Eco-Point-scaled-1200x675-cropped.jpg" alt="" />
            <p>Eco Points</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Visit Munnar?</h2>

        <div className="why-grid">
          <div>🌿 Tea Gardens</div>
          <div>⛰️ Scenic Hills</div>
          <div>🌄 Sunrise Views</div>
          <div>📸 Perfect Photography</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Munnar Trip</h2>
        <p>5 Days of refreshing nature</p>
        <br />

        <Link to="/munnar">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>5 Days Munnar Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://www.indiantempletour.com/wp-content/uploads/2018/08/munnar-to-alleppey.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Transfer to Munnar</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/16/24/b9/camping-at-the-top-of.jpg?w=900&h=-1&s=1" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Tea Gardens & Local Sightseeing</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://img.avianexperiences.com/attraction/4e119b87-00ed-47e2-bd34-7617d72cdd70" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Waterfalls & Eco Point Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://planyourtour.in/wp-content/uploads/2023/09/Shopping-places-in-Munnar.webp" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Leisure & Shopping</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media1.thrillophilia.com/filestore/bhj01jvfn8bpplha6gssvwtlocbo_pexels-bhagath-j-prakash-14360289.jpg?w=400&dpr=2" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default MunnarLanding;