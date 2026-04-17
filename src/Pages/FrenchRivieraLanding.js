import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const FrenchRivieraLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://content.api.news/v3/images/bin/ad55733795ff005e26afcd9f360dcf87"
          alt="French Riviera"
        />
        <div className="hero-content">
          <h1>French Riviera Escape</h1>
          <p>Luxury. Beaches. Elegance.</p>
          <Link to="/france">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://images.pexels.com/photos/7102939/pexels-photo-7102939.jpeg" alt="" />
            <p>Nice</p>
          </div>

          <div className="highlight-card">
            <img src="https://cdn.kimkim.com/files/a/images/6401ff96b96616fb2a4098ed2e683c901dd70de5/big-04d43bffbc3039abc1d9b8d3a7fc4617.jpg" alt="" />
            <p>Monaco</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f7/43/cannes.jpg?w=1200&h=700&s=1" alt="" />
            <p>Cannes</p>
          </div>

          <div className="highlight-card">
            <img src="https://specials-images.forbesimg.com/imageserve/541979386/960x0.jpg?fit=scale" alt="" />
            <p>Riviera Beaches</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏖️ Stunning Beaches</div>
          <div>🚤 Luxury Lifestyle</div>
          <div>🎬 Cannes Film City</div>
          <div>🌅 Scenic Coastal Views</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Riviera Getaway</h2>
        <p>Book now and enjoy luxury on the French coast</p><br />
        <Link to="/france">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>5 Days French Riviera Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://thumbs.dreamstime.com/b/nice-airport-france-may-many-arrival-passengers-leaving-following-exit-sign-62921992.jpg" alt="Day 1" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Nice & City Exploration</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/0a/c4/55/photo1jpg.jpg?w=900&h=500&s=1" alt="Day 2" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Visit Monaco & Monte Carlo</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/d1ed74a23b524bb38e5a29e211cea86ca0993143/big-6f5e407e0441503aab976c6ece21e36e.jpg" alt="Day 3" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Explore Cannes & Beaches</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.pexels.com/photos/33659660/pexels-photo-33659660/free-photo-of-bustling-interior-of-westfield-les-4-temps-mall.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Day 4" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Leisure Day & Shopping</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.nationalworld.com/jpim-static/image/2024/07/11/18/02/GettyImages-2149497832-(1).jpg?width=1200&enable=upscale" alt="Day 5" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default FrenchRivieraLanding;