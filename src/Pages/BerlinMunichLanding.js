import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const BerlinMunichLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://i.natgeofe.com/n/b234ec7d-a988-4b75-9e65-749ddcbea7a0/citylife_berlin_2B4H3T1_web.jpg"
          alt="Berlin Munich"
        />
        <div className="hero-content">
          <h1>Berlin & Munich</h1>
          <p>History. Culture. Modern Vibes.</p>
          <Link to="/germany">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Attractions</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://wallpapercave.com/wp/wp4196995.jpg" alt="" />
            <p>Brandenburg Gate</p>
          </div>

          <div className="highlight-card">
            <img src="https://i.pinimg.com/736x/14/44/a6/1444a6b1510f3c2d25a6141be3e46653.jpg" alt="" />
            <p>Berlin Wall</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.hotel-rothof.de/fileadmin/_processed_/8/0/csm_hotel-rothof-muenchen-erleben-marienplatz_4adb2e6dee.jpg" alt="" />
            <p>Marienplatz</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.daytrip.com/neuschwanstein2.jpg?w=1920&q=30" alt="" />
            <p>Neuschwanstein Castle</p>
          </div>
        </div>
      </div>

      {/* Why Choose */}
      <div className="why-section">
        <h2>Why Choose Germany Tours?</h2>

        <div className="why-grid">
          <div>🏰 Historic Landmarks</div>
          <div>🍺 Famous Beer Culture</div>
          <div>🚆 Scenic Train Journeys</div>
          <div>🎭 Rich Art & Museums</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Germany Trip</h2>
        <p>Explore Berlin & Munich with best deals</p><br />
        <Link to="/germany">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>6 Days Germany Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://media.istockphoto.com/id/1172053745/photo/berlin-schonefeld-airport-architecture-and-passengers-in-berlin-germany.jpg?s=612x612&w=0&k=20&c=4MAAEaChtfnalhhDhk7rstS7ZPyKAS0z8UgGybpAb0A=" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Berlin & City Orientation</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.deutschland.de/sites/default/files/media/image/bild1_istock-1702713395_.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Berlin Wall, Brandenburg Gate, Museums</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkyZuhA1AoTEA632JqS0iml_a-FrF8tVcFVg&s" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Travel to Munich</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.civitatis.com/f/alemania/munich/guia/city-tour-card-muenchen.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Munich City Tour & Marienplatz</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQcyf4hPsmtM2wlgtZ04rJtId_DfrmXYKbgg&s" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Neuschwanstein Castle Excursion</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://c8.alamy.com/comp/3CRB704/munich-germany-august-19-2025-terminal-of-munich-airport-in-germany-3CRB704.jpg" alt="" />
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

export default BerlinMunichLanding;