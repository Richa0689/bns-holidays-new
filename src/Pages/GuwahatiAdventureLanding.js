import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const GuwahatiAdventureLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://flyhighholiday.com/wp-content/uploads/2025/02/pexels-nandhu-kumar-13691355-scaled-1.jpg"
          alt="Adventure Guwahati Trip"
        />

        <div className="hero-content">
          <h1>Adventure Guwahati Trip</h1>
          <p>Adventure • Nature • Thrill</p>

          <Link to="/Pages/guwahati">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://www.gokitetours.com/wp-content/uploads/2025/02/Top-8-Incredible-Trekking-places-In-Guwahati-950x950.webp" alt="" />
            <p>Trekking Trails</p>
          </div>

          <div className="highlight-card">
            <img src="https://d26dp53kz39178.cloudfront.net/media/uploads/products/River_Rafting_-_gumak-1773578598047.webp" alt="" />
            <p>River Rafting</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/06/12/be/caption.jpg?w=500&h=400&s=1" alt="" />
            <p>Wildlife Exploration</p>
          </div>

          <div className="highlight-card">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/gandhi-mandap-guwahati-assam-1-attr-hero?qlt=82&ts=1742165026867" alt="" />
            <p>Scenic Views</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🔥 Thrilling Adventures</div>
          <div>🌄 Nature Exploration</div>
          <div>📸 Adventure Photography</div>
          <div>🚗 Comfortable Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Adventure in Northeast</h2>
        <p>4 Days of thrill & exploration</p><br />

        <Link to="/Pages/guwahati">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>4 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://rukmini-ct.flixcart.com/q_75,w_420,h_300,fl_progressive,e_sharpen:80,c_fill,dpr_2,f_auto/ct-hotel-images/places/hotels/cms1338/1338548/images/image_1338548_49623b6f-ccf3-4438-a720-aa3cb713d141_proc.jpeg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://wanderon-images.gumlet.io/blogs/new/2025/01/23/adventure-activities-in-guwahati.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Trekking & Adventure Activities</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/06/12/be/caption.jpg?w=500&h=400&s=1" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Wildlife & Sightseeing</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5JOxg1E2KiuSKHWobfG02QqUUCmDyqtdjkg&s" alt="" />
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

export default GuwahatiAdventureLanding;