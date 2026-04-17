import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const FranceLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://media.timeout.com/images/106223554/image.jpg"
          alt="France"
        />
        <div className="hero-content">
          <h1>Best of France</h1>
          <p>Romance. Culture. Elegance.</p>
          <Link to="/Pages/france">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://img.freepik.com/premium-photo/eiffel-tower-aerial-view-paris_78361-12651.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
            <p>Paris</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.pexels.com/photos/7102939/pexels-photo-7102939.jpeg" alt="" />
            <p>Nice</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/da/01/47/vieux-lyon.jpg?w=500&h=500&s=1" alt="" />
            <p>Lyon</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.ctfassets.net/i3kf1olze1gn/4FPylwuJOnsoD7uECnIpuY/a42936660cdf3abd834f24d05b37e3dc/GettyImages-805553090.jpg?q=55&w=640" alt="" />
            <p>French Riviera</p>
          </div>
        </div>
      </div>

      {/* Why Choose */}
      <div className="why-section">
        <h2>Why Choose France?</h2>

        <div className="why-grid">
          <div>🗼 Iconic Landmarks</div>
          <div>🍷 World-Class Cuisine</div>
          <div>🛍️ Fashion & Shopping</div>
          <div>🎨 Art & Culture</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Dream France Trip</h2>
        <p>Book now and explore the beauty of France</p><br />
        <Link to="/Pages/france">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>6 Days France Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://cdn.jwplayer.com/v2/media/yc6xi2Bb/thumbnails/ThPNzZqW.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Paris & Leisure Evening</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/ba/00/01.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Eiffel Tower, Seine River Cruise, City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/d6/22/47.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Visit Louvre Museum & Versailles Palace</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.pocketwanderings.com/wp-content/uploads/2023/07/Menton-France.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Travel to Nice & Beach Relaxation</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/92/09/fc/caption.jpg?w=1200&h=-1&s=1" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>French Riviera Tour & Monaco Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/fd/8d/84/caption.jpg?w=500&h=400&s=1" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Shopping & Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default FranceLanding;