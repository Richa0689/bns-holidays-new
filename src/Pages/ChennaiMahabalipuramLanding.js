import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const ChennaiMahabalipuramLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://oneday.travel/wp-content/uploads/one-day-chennai-to-mahabalipuram-and-kanchipuram-trip-sightseeing-tour-package-private-cab-header.jpg"
          alt="Chennai Mahabalipuram Tour"
        />

        <div className="hero-content">
          <h1>Chennai & Mahabalipuram</h1>
          <p>Heritage • Beaches • Temples</p>

          <Link to="/Pages/chennai">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/marina-beach-chennai-tamil-nadu-4-attr-hero?qlt=82&ts=1726655007714" alt="" />
            <p>Marina Beach</p>
          </div>

          <div className="highlight-card">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/1-shore-temple-mamallapuram-2-attr-hero?qlt=82&ts=1726654555333" alt="" />
            <p>Shore Temple</p>
          </div>

          <div className="highlight-card">
            <img src="https://indiano.travel/wp-content/uploads/2022/04/TOURIS1-3.jpg" alt="" />
            <p>Five Rathas</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.tourism-of-india.com/pictures/tourintro/chennai-pondicherry-tour-988.jpeg" alt="" />
            <p>Arjuna’s Penance</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏛️ UNESCO Heritage Sites</div>
          <div>🌊 Coastal Beauty</div>
          <div>📸 Iconic Stone Architecture</div>
          <div>🚗 Comfortable Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Discover Ancient Wonders</h2>
        <p>5 Days of history & seaside beauty</p><br />

        <Link to="/Pages/chennai">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>5 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://www.tripsavvy.com/thmb/Eo2NPF6M7XlLmRaiG_PPahQ-45k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-917438022-5ab7c9eb8023b900368d6810.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Chennai & Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/marina-beach-chennai-tamil-nadu-2-attr-hero?qlt=82&ts=1726655020013" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Chennai City Tour & Marina Beach</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/4a/8a/c0/shore-temple.jpg?w=500&h=400&s=1" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Mahabalipuram Sightseeing</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.agoda.com/wp-content/uploads/2024/03/Chennai-India-1049x700.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Explore Temples & Local Markets</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.tripsavvy.com/thmb/Eo2NPF6M7XlLmRaiG_PPahQ-45k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-917438022-5ab7c9eb8023b900368d6810.jpg" alt="" />
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

export default ChennaiMahabalipuramLanding;