import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

export default function SingaporeLuxury() {
  return (
    <div className="usa-landing luxury-theme">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://d3lf10b5gahyby.cloudfront.net/web_app/packages-page/singapore.jpg"
          alt="Luxury Singapore Tour"
        />

        <div className="hero-content">
          <h1>Luxury Singapore Tour</h1>
          <p>Premium Experience with Comfort & Style</p>

          <Link to="/booking">
            <button className="explore-btn">Book Now</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Luxury Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/ef/e8/b9/experiences-infinity.jpg?w=900&h=500&s=1" />
            <p>Marina Bay Sands Stay</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/1a/b0/b7/caption.jpg?w=500&h=400&s=1" />
            <p>Private City Tour</p>
          </div>

          <div className="highlight-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/23/39/5f.jpg" />
            <p>Sentosa VIP Access</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/e9/3b/29/koma-main-dining-room.jpg?w=800&h=400&s=1" />
            <p>Fine Dining Experience</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose Luxury?</h2>

        <div className="why-grid">
          <div>🏨 5-Star Hotels</div>
          <div>🚘 Private Transfers</div>
          <div>🍽️ Premium Dining</div>
          <div>🎟️ VIP Experiences</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Luxury Travel</h2>
        <p>Starting at ₹1,20,000 | EMI ₹5,500/month</p>

        <Link to="/booking">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>6 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://image-tc.galaxy.tf/wijpeg-5p5tjlswl8m0la67qlvin74gp/arrival-area-ii-the-fullerton-bay-hotel-singapore.jpg" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Luxury Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/96/7a/c5.jpg" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Private City Tour & Marina Bay Sands</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/8f/34/bc.jpg" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Sentosa Island VIP Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/c2/64/f9.jpg" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Universal Studios VIP Access</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/31/71/9e/photo1jpg.jpg?w=500&h=500&s=1" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Leisure & Premium Shopping</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.squarespace-cdn.com/content/v1/64ab6f4ba846cd50ddfc0124/1743137352001-JRIYIBWCDMLCUSD6ZYGG/unsplash-image-NUfyRUap3Xg.jpg" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Departure with Luxury Transfer</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}