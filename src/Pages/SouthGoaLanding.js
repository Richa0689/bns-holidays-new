import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const SouthGoaLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://static.toiimg.com/thumb/msid-113230247,width-748,height-499,resizemode=4,imgsize-220692/.jpg"
          alt="South Goa Tour"
        />

        <div className="hero-content">
          <h1>Best of South Goa</h1>
          <p>Peaceful Beaches • Nature • Relaxation</p>

          <Link to="/Pages/southgoa">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3e/36/9b/colva-sea-beach.jpg?w=1200&h=-1&s=1" alt="" />
            <p>Colva Beach</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.tourmyindia.com/states/goa/image/palolem-beach-banner.webp" alt="" />
            <p>Palolem Beach</p>
          </div>

          <div className="highlight-card">
            <img src="https://orchidresortgoa.com/assets/images/blog/attraction2.webp" alt="" />
            <p>Benaulim Beach</p>
          </div>

          <div className="highlight-card">
            <img src="https://itsgoa.com/wp-content/uploads/2022/01/20220119_220024.jpg" alt="" />
            <p>Sunset Views</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🌴 Calm & Peaceful Beaches</div>
          <div>🏖️ Less Crowded Areas</div>
          <div>📸 Scenic Photography Spots</div>
          <div>🚗 Comfortable Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Relax in South Goa</h2>
        <p>4 Days of peace & nature</p><br />

        <Link to="/Pages/southgoa">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>4 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://www.tripsavvy.com/thmb/T8V1T6ib1YhYajcQWrIZz93es9g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-103816249-566fbda73df78ce161af174c.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Beach Resort Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3e/36/9b/colva-sea-beach.jpg?w=800&h=-1&s=1" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Colva & Benaulim Beach Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://thespace.ink/wp-content/uploads/2024/04/South-Goa-scaled-1.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Palolem Beach Relaxation</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://logout.world/media/event/1365/9v91xqnq4jb890flp6g600w1dudy_1589527314_1sssttr.jpg" alt="" />
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

export default SouthGoaLanding;