import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const NorthGoaLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://meetmyholiders.com/wp-content/uploads/2019/09/MMH-Goa-11-870x555.jpg"
          alt="North Goa Tour"
        />

        <div className="hero-content">
          <h1>Best of North Goa</h1>
          <p>Beaches • Parties • Sunsets</p>

          <Link to="/Pages/northgoa">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://media-cdn.tripadvisor.com/media/photo-c/1280x250/0e/a7/1a/90/goa-quick-guide-largejpg.jpg" alt="" />
            <p>Baga Beach</p>
          </div>

          <div className="highlight-card">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/calangute-beach-goa-7-musthead-hero?qlt=82&ts=1742168166188" alt="" />
            <p>Calangute Beach</p>
          </div>

          <div className="highlight-card">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/anjuna-beach-goa-goa-anjuna-beach--goa-1-attr-hero?qlt=82&ts=1742165925385" alt="" />
            <p>Anjuna Beach</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.tripsavvy.com/thmb/NT2EXb5ZjLp3CIG80y7iTs8fupw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/image2-d2ccc758de1941fba72142ea712bf7bf.jpg" alt="" />
            <p>Beach Parties</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏖️ Famous Beaches</div>
          <div>🎉 Nightlife & Parties</div>
          <div>📸 Stunning Sunsets</div>
          <div>🚗 Comfortable Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Goa Vibes</h2>
        <p>4 Days of fun & relaxation</p><br />

        <Link to="/Pages/northgoa">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>4 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/52/b1/9f/caption.jpg?w=900&h=500&s=1" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Beachside Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/baga-beach-goa-goa-baga-beach-5-attr-hero?qlt=82&ts=1742158715782" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Baga & Calangute Beach Exploration</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqRWRYzhssd3_8qzkE_SIWiaUfu2f1eiZaDw&s" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Anjuna Beach & Night Party</p>
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

export default NorthGoaLanding;