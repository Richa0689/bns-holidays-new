import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxuryGermanyLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-147162332082-752e8bbf8413"
          alt="Luxury Germany"
        />
        <div className="hero-content">
          <h1>Luxury Germany Tour</h1>
          <p>Premium. Comfort. Elegance.</p>
          <Link to="/germany">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Luxury Experiences</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-15656233408-d77e39b88af6" alt="" />
            <p>Neuschwanstein Castle Stay</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-15057611935-60b3a7427bad" alt="" />
            <p>Luxury Alpine Resorts</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-15267792512-939e64788e3c" alt="" />
            <p>Premium City Tours</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-15017858841-af3ef285b470" alt="" />
            <p>Private Mountain Excursions</p>
          </div>
        </div>
      </div>

      {/* Why Choose */}
      <div className="why-section">
        <h2>Why Choose Luxury Germany?</h2>

        <div className="why-grid">
          <div>🏨 5-Star Stays</div>
          <div>🚘 Private Transfers</div>
          <div>🍽️ Fine Dining Experiences</div>
          <div>👨‍✈️ Guided Premium Tours</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Luxury Travel</h2>
        <p>Discover Germany in premium style</p><br />
        <Link to="/germany">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>9 Days Luxury Germany Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-155956336c667ba5f5480" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Berlin & Luxury Hotel Stay</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-16047547629-3e5728249d73" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Private Berlin City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1575722270-626b0208df99" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Travel to Munich via Premium Train</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15844480764-374f81551427" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Munich Luxury City Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15656238408-d77e39b88af6" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Neuschwanstein Castle Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15000489959-d23a436266cf" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Bavarian Alps Luxury Retreat</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15015949352-04cda38ebc29" alt="" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p>Rhine Valley Private Cruise</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15051671935-60b3a7427bad" alt="" />
            <div className="day-content">
              <h3>Day 8</h3>
              <p>Luxury Leisure & Shopping</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15269259212-939e64788e3c" alt="" />
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

export default LuxuryGermanyLanding;