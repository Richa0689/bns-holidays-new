import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const DubaiAbuLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1518684079-3c830dcef090"
          alt="Dubai Abu Dhabi"
        />
        <div className="hero-content">
          <h1>Dubai & Abu Dhabi</h1>
          <p>Luxury Meets Culture</p>
          <Link to="/dubai">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a" alt="" />
            <p>Burj Khalifa</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1526481280691-9065fbc7c9c3" alt="" />
            <p>Desert Safari</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1518684079-3c830dcef090" alt="" />
            <p>Dubai Marina</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3" alt="" />
            <p>Abu Dhabi Mosque</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏙️ Dubai City Life</div>
          <div>🕌 Cultural Abu Dhabi</div>
          <div>🏜️ Desert Adventure</div>
          <div>🛍️ Luxury Shopping</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Dubai & Abu Dhabi Trip</h2>
        <p>Best deals for your perfect vacation</p><br />
        <Link to="/dubai">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>5 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Dubai Marina Walk</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Burj Khalifa & Dubai Mall</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1526481280691-9065fbc7c9c3" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Desert Safari & BBQ Dinner</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Abu Dhabi City Tour & Grand Mosque</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1502920917128-1aa500764b6a" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Shopping & Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default DubaiAbuLanding;