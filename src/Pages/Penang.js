import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const PenangLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1606800052052-a08af7148866"
          alt="Penang"
        />
        <div className="hero-content">
          <h1>Penang Heritage Tour</h1>
          <p>Culture. Food. History.</p>
          <Link to="/malaysia">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Attractions</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/George_Town_Penang.jpg" alt="" />
            <p>George Town</p>
          </div>

          <div className="highlight-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Kek_Lok_Si_Temple.jpg" alt="" />
            <p>Kek Lok Si Temple</p>
          </div>

          <div className="highlight-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Penang_Hill_view.jpg" alt="" />
            <p>Penang Hill</p>
          </div>

          <div className="highlight-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Penang_street_art.jpg" alt="" />
            <p>Street Art</p>
          </div>
        </div>
      </div>

      {/* Why Choose */}
      <div className="why-section">
        <h2>Why Choose Penang?</h2>

        <div className="why-grid">
          <div>🏛️ Rich Heritage Sites</div>
          <div>🍜 Famous Street Food</div>
          <div>🎨 Unique Street Art</div>
          <div>🏞️ Scenic Hill Views</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Penang Trip</h2>
        <p>Discover Malaysia’s cultural gem</p><br />
        <Link to="/malaysia">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>5 Days Penang Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/George_Town_Penang.jpg" alt="Day 1" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Penang & Leisure</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Penang_street_art.jpg" alt="Day 2" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>George Town Heritage & Street Art Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Kek_Lok_Si_Temple.jpg" alt="Day 3" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Kek Lok Si Temple & Cultural Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Penang_Hill_view.jpg" alt="Day 4" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Penang Hill & Scenic Exploration</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Kuala_Lumpur_International_Airport.jpg" alt="Day 5" />
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

export default PenangLanding;