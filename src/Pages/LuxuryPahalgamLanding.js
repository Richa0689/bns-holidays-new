import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxuryPahalgamLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://media1.thrillophilia.com/filestore/wqji1fq7st4vk3y2uanw2wrnftpc_Shutterstock_1435773446%20(1).jpg"
          alt="Luxury Pahalgam Tour"
        />

        <div className="hero-content">
          <h1>Luxury Pahalgam Tour</h1>
          <p>Pahalgam • Srinagar • Premium Experience</p>

          <Link to="/pahalgam">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Luxury Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://q-xx.bstatic.com/xdata/images/hotel/608x352/607392029.webp?k=140f80ed709ef4d7682c27b7db84d35e13c550c057de1ca117b696bfb595422e&o=" alt="" />
            <p>Premium Resorts</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5d/77/cf/caption.jpg?w=500&h=400&s=1" alt="" />
            <p>Private Tours</p>
          </div>

          <div className="highlight-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3CUFbRK6_l5D_-XBxBX2lZ-QeRVJuqDtsTw&s" alt="" />
            <p>Mountain Views</p>
          </div>

          <div className="highlight-card">
            <img src="https://gos3.ibcdn.com/9f37c4b3-6711-4811-b1e5-bcf3814d550b.jpg" alt="" />
            <p>Luxury Stay</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Choose Luxury Tour?</h2>

        <div className="why-grid">
          <div>🏨 4★ / 5★ Hotels</div>
          <div>🚗 Private Transport</div>
          <div>🍽️ Premium Dining</div>
          <div>🧳 Hassle-Free Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Luxury in Kashmir</h2>
        <p>7 Days of comfort & scenic beauty</p>
        <br />

        <Link to="/pahalgam">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>7 Days Luxury Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/b3/1f/f4/pahalgam-hotel.jpg?w=900&h=500&s=1" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Srinagar & Luxury Stay</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtF0P1WNMpEO0AMHXQjpYuExRcvlcHoRRR5g&s" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Transfer to Pahalgam & Resort Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.vibrantfootsteps.com/wp-content/uploads/2023/06/20230602_072849-PS-scaled.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Betaab Valley Private Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://bunny-wp-pullzone-a1hdg9hgfm.b-cdn.net/wp-content/uploads/2023/06/natuire-beauty.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Aru Valley & Scenic Exploration</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/73/44/5f.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Return to Srinagar & Shikara Ride</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.kashmironline.com/top-destinations/pahalgam/images/Exploring%20the%20Street%20Markets.jpg" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Shopping & Leisure Day</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.cnbctv18.com/uploads/2024/01/indigo-airline-plane.jpg?impolicy=website&width=1200&height=900" alt="" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p>Departure with Memories</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default LuxuryPahalgamLanding;