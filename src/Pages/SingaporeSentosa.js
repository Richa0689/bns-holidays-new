import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

export default function SingaporeSentosa() {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5be172e38f513032e447734b/1558366937124-5ZJ9AAZ5Z721YPY0T588/Sentosa-Picture.jpg"
          alt="Singapore & Sentosa"
        />

        <div className="hero-content">
          <h1>Singapore & Sentosa</h1>
          <p>City Life + Island Adventure</p>

          <Link to="/booking">
            <button className="explore-btn">Book Now</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Attractions</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/ef/e8/b9/experiences-infinity.jpg?w=900&h=500&s=1" />
            <p>Marina Bay Sands</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/d9/0e/f0/gardens-by-the-bay.jpg?w=1200&h=-1&s=1" />
            <p>Gardens by the Bay</p>
          </div>

          <div className="highlight-card">
            <img src="https://media.cnn.com/api/v1/images/stellar/prod/220901143330-01-sentosa-island-history-universal.jpg?c=original" />
            <p>Sentosa Island</p>
          </div>

          <div className="highlight-card">
            <img src="https://image-tc.galaxy.tf/wijpeg-767sibeh8vndrezlnt0mmc1d3/nostalgia-hotel-sentosa_standard.jpg?crop=57%2C0%2C867%2C650" />
            <p>Universal Studios</p>
          </div>
        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Choose This Trip?</h2>

        <div className="why-grid">
          <div>🌆 Modern City Experience</div>
          <div>🏝️ Island Adventure</div>
          <div>🎢 Theme Park Fun</div>
          <div>🛍️ Shopping & Food</div>
        </div>
      </div>

      {/* CTA SECTION (same position as USA page) */}
      <div className="cta-section">
        <h2>Plan Your Singapore Trip</h2>
        <p>Starting at ₹85,000 | EMI ₹4,000/month</p>

        <Link to="/booking">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY (WITH IMAGES) */}
      <div className="itinerary-section">
        <h2>4 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/353208199.jpg?k=7c19cc136dd0e22c93496e59e1f75c438c9caceaebdb9d8580049cfc4b54793c&o=" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Singapore & Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/96/7a/c5.jpg" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>City Tour & Marina Bay Sands</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/2f/8a/d6/f7/the-only-beachfront-resort.jpg" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Sentosa Island Full Day</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://thumbs.dreamstime.com/b/souvenir-shopi-n-departure-hall-changi-airport-terminal-singapore-feb-shop-equipped-to-handle-over-million-passengers-year-312859456.jpg" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Shopping & Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}