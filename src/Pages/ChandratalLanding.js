import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const ChandratalLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/b0/24/45/view-of-chandertaal-from.jpg?w=900&h=-1&s=1"
          alt="Chandratal Lake"
        />
        <div className="hero-content">
          <h1>Chandratal Lake Tour</h1>
          <p>Moon Lake. Serenity. Himalayan Beauty.</p>
          <Link to="/spiti">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/e5/bc/20/the-memserizing-beauty.jpg?w=1200&h=1200&s=1" alt="" />
            <p>Chandratal Lake</p>
          </div>

          <div className="highlight-card">
            <img src="https://media1.thrillophilia.com/filestore/ualn079cljfensp107sbcg59haf6_1577437030_shutterstock_613941764.jpg?w=400&dpr=2" alt="" />
            <p>Kunzum Pass</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/d8/62/4c/dhankar-lake.jpg?w=1200&h=-1&s=1" alt="" />
            <p>Spiti Valley</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/77/00/20/goldrop-camps-sarchu.jpg?w=1200&h=-1&s=1" alt="" />
            <p>Camping Site</p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE */}
      <div className="why-section">
        <h2>Why Visit Chandratal?</h2>

        <div className="why-grid">
          <div>🌙 Moon-Shaped Lake</div>
          <div>🏔️ Scenic Himalayan Views</div>
          <div>⛺ Lakeside Camping</div>
          <div>📸 Perfect Photography Spot</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Nature Like Never Before</h2>
        <p>Book your Chandratal journey today</p><br />
        <Link to="/spiti">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>5 Days Tour Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://spitivalleypackages.com/wp-content/uploads/2025/07/Which-Route-is-Best-for-Spiti-from-Delhi-in-August-1024x576.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Manali & Overnight Stay</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://spitivalleypackages.com/wp-content/uploads/2026/03/Why-May-is-tricky-at-Kunzum-Pass-1024x576.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Drive to Chandratal via Kunzum Pass</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.thegrandindianroute.com/wp-content/uploads/2024/02/Untitled-design-2024-08-13T152913.602.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Explore Chandratal Lake & Camping</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://photos.awalkintheworld.com/wp-content/uploads/2020/08/most-beautiful-road-trip-india-scaled.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Return Journey to Manali</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://wanderon-images.gumlet.io/gallery/new/2025/03/17/1742208031350-spiti-valley-road-trip.webp" alt="" />
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

export default ChandratalLanding;