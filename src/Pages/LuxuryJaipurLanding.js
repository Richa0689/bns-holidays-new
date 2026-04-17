import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxuryJaipurLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://footlooseholidays.com/wp-content/uploads/2019/06/Jaipur-Luxury-Tour.jpg"
          alt="Luxury Jaipur Tour"
        />

        <div className="hero-content">
          <h1>Luxury Jaipur Tour</h1>
          <p>Luxury • Royal Palaces • Premium Experience</p>

          <Link to="/Pages/jaipur">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/b7/69/50/spread-over-85-acres.jpg?w=900&h=500&s=1" alt="" />
            <p>Luxury Palace Stay</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/e2/a5/bc/caption.jpg?w=900&h=500&s=1" alt="" />
            <p>Amber Fort Visit</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/08/17/fc/wow.jpg?w=900&h=500&s=1" alt="" />
            <p>Jodhpur Fort Experience</p>
          </div>

          <div className="highlight-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/6a/81/84.jpg" alt="" />
            <p>Private City Tour</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏨 Premium Heritage Hotels</div>
          <div>👑 Royal Palace Experience</div>
          <div>🍽️ Fine Dining & Comfort</div>
          <div>🚗 Private Luxury Transport</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Royal Luxury in Rajasthan</h2>
        <p>7 Days of elegance & comfort</p><br />

        <Link to="/Pages/jaipur">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>7 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/2c/1b/25/d4/dining-at-the-oberoi.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Luxury Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/df/02/0b.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Amber Fort & City Palace</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6a/fb/cd.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Jaipur Sightseeing</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/9c/34/e4.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Transfer to Jodhpur</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/99/ae/7f/images-14-largejpg.jpg?w=700&h=400&s=1" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Jodhpur Fort & Heritage Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/2c/1b/25/d4/dining-at-the-oberoi.jpg" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Leisure & Luxury Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://shafskyaviation.com/wp-content/uploads/2024/04/2023-03-25.jpg" alt="" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default LuxuryJaipurLanding;