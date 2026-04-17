import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxuryMalaysiaLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3"
          alt="Luxury Malaysia"
        />
        <div className="hero-content">
          <h1>Luxury Malaysia Tour</h1>
          <p>Experience Comfort & Elegance</p>
          <Link to="/malaysia">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Luxury Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Kuala_Lumpur_Skyline.jpg" alt="" />
            <p>Kuala Lumpur</p>
          </div>

          <div className="highlight-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Langkawi_Sky_Bridge.jpg" alt="" />
            <p>Langkawi</p>
          </div>

          <div className="highlight-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/George_Town_Penang.jpg" alt="" />
            <p>Penang</p>
          </div>

          <div className="highlight-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Resort_beach_malaysia.jpg" alt="" />
            <p>Luxury Resorts</p>
          </div>
        </div>
      </div>

      {/* Why Choose */}
      <div className="why-section">
        <h2>Why Choose Luxury Malaysia?</h2>

        <div className="why-grid">
          <div>🏨 5-Star Hotels</div>
          <div>🍽️ Fine Dining Experiences</div>
          <div>🚗 Private Transfers</div>
          <div>🌴 Premium Island Resorts</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Luxury Trip</h2>
        <p>Enjoy premium travel experience in Malaysia</p><br />
        <Link to="/malaysia">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>8 Days Luxury Malaysia Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Kuala_Lumpur_Skyline.jpg" alt="Day 1" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Kuala Lumpur & Luxury Stay</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Petronas_Towers_at_night_%28cropped%29.jpg" alt="Day 2" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>City Tour & Petronas Towers Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Langkawi_Sky_Bridge.jpg" alt="Day 3" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Travel to Langkawi & Resort Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Resort_beach_malaysia.jpg" alt="Day 4" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Relax at Luxury Beach Resort</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/George_Town_Penang.jpg" alt="Day 5" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Travel to Penang</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Penang_street_art.jpg" alt="Day 6" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Heritage & Cultural Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Penang_Hill_view.jpg" alt="Day 7" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p>Leisure & Shopping</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Kuala_Lumpur_International_Airport.jpg" alt="Day 8" />
            <div className="day-content">
              <h3>Day 8</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default LuxuryMalaysiaLanding;