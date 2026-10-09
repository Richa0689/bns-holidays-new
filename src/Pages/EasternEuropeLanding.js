import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const EasternEuropeLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://cdn.scenicglobal.com/webfile/EESC-IMG-2022.jpg"
          alt="Eastern Europe"
        />
        <div className="hero-content">
          <h1>Eastern Europe Explorer</h1>
          <p>9 Days • 3 Countries • 5 Cities</p>
          <Link to="/destinations/europe">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://welovetravel.in/wp-content/uploads/2024/05/Lady-of-our-Church-best-photo-spots-in-Prague.jpg" alt="" />
            <p>Prague</p>
          </div>

          <div className="highlight-card">
            <img src="https://lp-cms-production.imgix.net/2023-03/GettyRF_473481530.jpg" alt="" />
            <p>Budapest</p>
          </div>

          <div className="highlight-card">
            <img src="https://theluxuryvacationguide.com/wp-content/uploads/2022/10/vienna-austria-3-1.jpg" alt="" />
            <p>Vienna</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/cc/b5/2c/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_3c848eb9c2e97ca6204c" alt="" />
            <p>Krakow</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Historic Castles</div>
          <div>🌍 Multi-Country Experience</div>
          <div>🍲 Local Cuisine</div>
          <div>🚆 Scenic Routes</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Dream Trip</h2>
        <p>Starting from ₹2,20,000</p><br />
        <Link to="/europe">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>9 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://c8.alamy.com/comp/T432K0/tourists-arrive-at-prague-international-airport-ready-to-leave-the-airport-and-start-their-holidays-T432K0.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Prague</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/e1/14/5e.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Prague City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://i0.wp.com/travelobservations.com/wp-content/uploads/2023/07/budapest-scaled.jpg?resize=1800%2C1200&ssl=1" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Travel to Budapest</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/24/fc/63.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Budapest City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.tripsavvy.com/thmb/XUvkLs7XIVZ67uD33KAO17pxCCo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/IMG_9525-76f0050cea1043e59b156f0ba8d4ac1f.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Travel to Vienna</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-360x240/15/51/f1/ac.jpg" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Vienna Sightseeing</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.nomadicmatt.com/wp-content/uploads/2018/02/krakowguide.jpg" alt="" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p>Travel to Krakow</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://c8.alamy.com/comp/PBP2E7/krakow-poland-may-30-2015-fountain-in-the-galeria-krakowska-city-mall-krakow-poland-galeria-krakowska-has-270-specialty-shops-cafes-and-resta-PBP2E7.jpg" alt="" />
            <div className="day-content">
              <h3>Day 8</h3>
              <p>Leisure & Shopping</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://thumbs.dreamstime.com/b/rome-italy-december-departure-entrance-terminal-fiumicino-airport-425547408.jpg" alt="" />
            <div className="day-content">
              <h3>Day 9</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default EasternEuropeLanding;