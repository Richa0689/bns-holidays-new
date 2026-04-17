import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

export default function UniversalSingapore() {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://jnptravelvn.com/wp-content/uploads/2022/12/universal-studios-singapore-kids-family-guide-honeykids-asia.jpg"
          alt="Universal Studios Tour"
        />

        <div className="hero-content">
          <h1>Universal Studios Tour</h1>
          <p>Thrill, Adventure & Entertainment</p>

          <Link to="/booking">
            <button className="explore-btn">Book Now</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://www.blogaberry.com/wp-content/uploads/2025/02/uss3.jpg" />
            <p>Universal Studios Rides</p>
          </div>

          <div className="highlight-card">
            <img src="https://ik.imagekit.io/travalot/development/resources/attachments/2025/10/26/fe2dd400-caab-11f0-a4d3-1701e583a587.jpg?tr=w-1600,h-1067,c-at_max:f-webp:q-85" />
            <p>Adventure Zones</p>
          </div>

          <div className="highlight-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-360x240/15/54/9f/ba.jpg" />
            <p>Live Shows</p>
          </div>

          <div className="highlight-card">
            <img src="https://media.timeout.com/images/106202835/750/422/image.jpg" />
            <p>Shopping & Dining</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Trip?</h2>

        <div className="why-grid">
          <div>🎢 World-Class Rides</div>
          <div>🎬 Movie-Themed Attractions</div>
          <div>👨‍👩‍👧 Family Friendly</div>
          <div>📸 Instagram Spots</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Book Your Adventure Now</h2>
        <p>Starting at ₹75,000 | EMI ₹3,500/month</p>

        <Link to="/booking">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>3 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://imagedelivery.net/W3Iz4WACAy2J0qT0cCT3xA/didi/articles/po751buolr3s9xuh8stcxmr9/public" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Singapore & Leisure Time</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/97/7c/c9/caption.jpg?w=1200&h=-1&s=1" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Full Day at Universal Studios</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2024/02/29120039/singapore-duty-free-1-1.jpeg" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Shopping & Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}