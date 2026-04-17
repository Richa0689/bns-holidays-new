import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxuryGuwahatiLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://media1.thrillophilia.com/filestore/cgt1dhkmt5hnyex33iyt7sez545p_shutterstock_2430691739.jpg"
          alt="Luxury Guwahati Tour"
        />

        <div className="hero-content">
          <h1>Luxury Guwahati Tour</h1>
          <p>Luxury • Wildlife • Premium Experience</p>

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
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/2a/63/29/73/luxury-redefined-stay.jpg" alt="" />
            <p>Luxury Stay</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.touristhubindia.com/images/northeast/kaziranga-national-park-tour-from-guwahati.webp" alt="" />
            <p>Kaziranga Safari</p>
          </div>

          <div className="highlight-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX0fHT6NF1OyipAt8LL4uYM-b4_rPoxyoBsQ&s" alt="" />
            <p>Kamakhya Temple</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/56/0e/93/getlstd-property-photo.jpg?w=500&h=500&s=1" alt="" />
            <p>Premium River Cruise</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏨 Premium Hotels & Resorts</div>
          <div>🐘 Wildlife Safari Experience</div>
          <div>🍽️ Fine Dining</div>
          <div>🚗 Private Comfortable Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Luxury in Northeast</h2>
        <p>7 Days of comfort & elegance</p><br />

        <Link to="/Pages/guwahati">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>6 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/eb/52/ca/pool.jpg?w=1200&h=-1&s=1" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Luxury Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://kamakshitours.com/wp-content/uploads/2020/06/Seven-Temple-Tour-of-Guwahati-Feature-Image.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Kamakhya Temple Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.guwahatiairport.com/wp-content/uploads/2025/04/Guwahati-Kaziranga-Tour.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Transfer to Kaziranga</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://d26dp53kz39178.cloudfront.net/media/uploads/products/1_result-1664015313555.webp" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Kaziranga Jungle Safari</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/06/12/be/caption.jpg?w=500&h=400&s=1" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Wildlife Exploration</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-720x480/17/01/47/62.jpg" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Return & Leisure</p>
            </div>
          </div>


        </div>
      </div>

    </div>
  );
};

export default LuxuryGuwahatiLanding;