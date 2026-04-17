import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxuryChennaiLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/c6/af/d6/photo1jpg.jpg?w=900&h=500&s=1"
          alt="Luxury Chennai Tour"
        />

        <div className="hero-content">
          <h1>Luxury Chennai Tour</h1>
          <p>Luxury • Beaches • Premium Experience</p>

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
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/2d/3e/fc/2d/exterior.jpg" alt="" />
            <p>Luxury Beach Stay</p>
          </div>

          <div className="highlight-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/14/b9/25/c6.jpg" alt="" />
            <p>Pondicherry French Streets</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.freetour.com/images/tours/42913/full-day-chennai-private-sightseeing-tour-02.jpg" alt="" />
            <p>Private Sightseeing</p>
          </div>

          <div className="highlight-card">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/2b/ff/23/7d/hotel-entrance.jpg" alt="" />
            <p>Premium Resorts</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏨 5-Star Luxury Hotels</div>
          <div>🚗 Private Transfers</div>
          <div>🍽️ Fine Dining Experience</div>
          <div>🌊 Beachside Relaxation</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Luxury Chennai</h2>
        <p>6 Days of premium travel & relaxation</p><br />

        <Link to="/Pages/chennai">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>6 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.trvl-media.com/lodging/5000000/4800000/4791400/4791355/2b4b06b8.jpg?impolicy=fcrop&w=357&h=201&p=1&q=medium" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Luxury Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://i0.wp.com/oneday.travel/wp-content/uploads/one-day-chennai-local-sightseeing-tour-package-marina-beach.jpg?resize=750%2C400&ssl=1" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Chennai City Tour & Beach Evening</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.tacdn.com/media/photo-m/1280/31/08/d9/23/caption.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Travel to Pondicherry & Leisure</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/ad/32.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Pondicherry Sightseeing</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/12/Ampa-Skywalk-Mall.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Relaxation & Shopping</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.tripsavvy.com/thmb/Eo2NPF6M7XlLmRaiG_PPahQ-45k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-917438022-5ab7c9eb8023b900368d6810.jpg" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default LuxuryChennaiLanding;