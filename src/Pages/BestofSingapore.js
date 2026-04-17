import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const SingaporeLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero */}
      <div className="hero-section">
        <img src="https://www.sharpholidays.in/blog/wp-content/uploads/2018/05/Singapore-1280x540.jpg" />
        <div className="hero-content">
          <h1>Best of Singapore</h1>
          <p>Modern City. Skyline. Attractions.</p>
          <Link to="/singapore">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Destinations</h2>
        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/ef/e8/b9/experiences-infinity.jpg?w=900&h=500&s=1" />
            <p>Marina Bay Sands</p>
          </div>
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1508964942454-1a56651d54ac" />
            <p>Gardens by the Bay</p>
          </div>
          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1565967511849-76a60a516170" />
            <p>Merlion Park</p>
          </div>
          <div className="highlight-card">
            <img src="https://www.trawell.in/admin/images/upload/930772574Sentosa_Island_Singapore.jpg" />
            <p>Sentosa Island</p>
          </div>
        </div>
      </div>

      {/* Why */}
      <div className="why-section">
        <h2>Why Choose Singapore?</h2>
        <div className="why-grid">
          <div>🌆 Futuristic City</div>
          <div>🌳 Clean & Green</div>
          <div>🛍️ Shopping Hub</div>
          <div>🍜 Food Paradise</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Singapore Trip</h2>
        <p>Starting at ₹95,000 | EMI ₹4,500/month</p>
        <Link to="/singapore">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
     <div className="itinerary-section">
  <h2>5 Days Itinerary</h2>

  <div className="itinerary-list">

    <div className="day-card">
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/22/Entrance_of_Night_Safari%2C_Singapore%2C_2012.jpg" />
      <div className="day-content">
        <h3>Day 1</h3>
        <p>Arrival & Night Safari</p>
      </div>
    </div>

    <div className="day-card">
      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/0a/92/56/sands-skypark.jpg?w=900&h=500&s=1" />
      <div className="day-content">
        <h3>Day 2</h3>
        <p>City Tour & Marina Bay Sands</p>
      </div>
    </div>

    <div className="day-card">
      <img src="https://agarwaltravels.in/wp-content/uploads/2016/07/SINGAPORE-IMAGE-FOR-WEBSITE-min-1.jpg" />
      <div className="day-content">
        <h3>Day 3</h3>
        <p>Sentosa Island Tour</p>
      </div>
    </div>

    <div className="day-card">
      <img src="https://d2mgzmtdeipcjp.cloudfront.net/files/magazine/2025/02/02/17384898052455.jpg" />
      <div className="day-content">
        <h3>Day 4</h3>
        <p>Universal Studios</p>
      </div>
    </div>

    <div className="day-card">
      <img src="https://nowboarding.changiairport.com/content/dam/canowboarding/article-assets/discover-changi/pro-tips-to-shopping-smart-at-changi-airport/1.jpg" />
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

export default SingaporeLanding;