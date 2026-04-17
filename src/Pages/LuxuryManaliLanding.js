import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxuryManaliLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.bookmarkresorts.com/wp-content/uploads/2024/07/Bookmark-Manali-1000X670.png"
          alt="Luxury Manali"
        />
        <div className="hero-content">
          <h1>Luxury Manali Tour</h1>
          <p>7 Days • Manali & Kasol • Premium Himalayan Experience</p>

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
            <img src="https://www.tripsavvy.com/thmb/ZDRQXV-PiFDTFZu4x22mZkYuw9s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-930881934-5ae56fe48023b90036464e72.jpg" alt="" />
            <p>Manali</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.pelago.com/img/products/IN-India/kasol-kheerganga-trek-3d-2n-all-inclusive-with-banbanjara/be310822-ae21-4976-8c3d-ab340f6a36fb_kasol-kheerganga-trek-3d-2n-all-inclusive-with-banbanjara.jpg" alt="" />
            <p>Kasol</p>
          </div>

          <div className="highlight-card">
            <img src="https://hblimg.mmtcdn.com/content/hubble/img/manali/mmt/activities/m_activities-manali-solang-valley_l_400_640.jpg" alt="" />
            <p>Solang Valley</p>
          </div>

          <div className="highlight-card">
            <img src="https://cdn.sanity.io/images/ocl5w36p/prod5/1584223fda1175e4d4adf497ee03da8f5d5fb353-3840x1860.jpg" alt="" />
            <p>Luxury Resorts</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Choose Luxury Manali?</h2>

        <div className="why-grid">
          <div>🏨 Premium Stays</div>
          <div>🚗 Private Transfers</div>
          <div>🌄 Scenic Luxury Views</div>
          <div>🍽️ Fine Dining Experience</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Luxury in the Himalayas</h2>
        <p>Relax, unwind, and enjoy premium travel</p>
        <br />

        <Link to="/manali">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>6 Days Luxury Manali Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://cdn.sanity.io/images/ocl5w36p/prod5/1584223fda1175e4d4adf497ee03da8f5d5fb353-3840x1860.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Manali & Luxury Hotel Stay</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/b2/79/37/solang-valley-manali.jpg?w=1200&h=-1&s=1" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Solang Valley & Adventure Activities</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbE1Ep-fbS4cNRjNq8Urvpb5TV6scbOYVBLQ&s" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Rohtang Pass Excursion</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1f/08/a2/13/caption.jpg?w=1200&h=-1&s=1" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Travel to Kasol & Riverside Stay</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTR61GDNkzLanvc8MPDxdyeB8Mtuse4AN8cw&s" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Kasol Exploration & Café Culture</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://img.avianexperiences.com/attraction/c17f9e66-a305-4a2d-927d-f66b3b169a37" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Return to Manali & Shopping</p>
            </div>
          </div>

          

        </div>
      </div>

    </div>
  );
};

export default LuxuryManaliLanding;