import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const GermanyLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://om.gokite.travel/wp-content/uploads/2025/04/Top-9-Best-Places-to-Visit-in-Germany-1.webp"
          alt="Germany"
        />
        <div className="hero-content">
          <h1>Best of Germany</h1>
          <p>Castles. Culture. Charm.</p>
          <Link to="/Pages/germany">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://content.api.news/v3/images/bin/64ac47abbeaad61d192cc6a4df8006b8" alt="" />
            <p>Berlin</p>
          </div>

          <div className="highlight-card">
            <img src="https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/031/412/original/68ede37d1f8a8b046c975f6cd18ebbce/article-germany-munich-new-town-hall.jpg" alt="" />
            <p>Munich</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/fc/cc/b0/stahleck-castle-and-the.jpg?w=1200&h=-1&s=1" alt="" />
            <p>Rhine Valley</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.travelandleisure.com/thmb/umcoSMJygYyG5OIYDdBPgnrJGLc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/01-neuschwanstein-castle-bavaria-NEUSCHWANSTEIN0417-273a040698f24fc1ac22e717bb3f1f0c.jpg" alt="" />
            <p>German Castles</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose Germany Tours?</h2>

        <div className="why-grid">
          <div>🏰 Fairytale Castles</div>
          <div>🍺 Famous Beer Culture</div>
          <div>🚄 Scenic Train Journeys</div>
          <div>🎶 Rich History & Culture</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Germany Trip</h2>
        <p>Book now and explore the best of Europe</p><br />
        <Link to="/Pages/germany">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>7 Days Germany Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://thumbs.dreamstime.com/b/bustling-airport-terminal-filled-passengers-checkin-counters-areas-various-travel-activities-berlin-germany-aug-409623345.jpg" alt="Day 1" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Berlin & City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.jugendkulturkarte.berlin/wp-content/uploads/2022/12/Museum-fuer-Kommunikation-Berlin-Foto-Michael-Ehrhart-1920x1281.jpg" alt="Day 2" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Berlin Sightseeing & Museums</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.residenz-muenchen.de/bilder/museum/slider_antiquarium/antiquarium_schwenkDE000501-575.jpg" alt="Day 3" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Travel to Munich</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://aws-tiqets-cdn.imgix.net/images/content/7184655d7fe541a1bd63dd29a568599b.jpg?auto=format%2Ccompress&fit=crop&q=70" alt="Day 4" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Munich City Tour & Culture</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.neuschwanstein.de/bilder/aktuell/schlosshof_DE000768_320-450.jpg" alt="Day 5" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Visit Neuschwanstein Castle</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://img.cruisecritic.net/cms-sb/f/1005231/1680x840/e746193d76/a-viking-longship-sails-the-middle-rhine.jpg?auto=format%2Cenhance&fit=crop&crop=entropy&q=50&w=2048&ixlib=react-9.10.0" alt="Day 6" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Rhine Valley Cruise</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://thumbs.dreamstime.com/b/people-inside-frankfurt-international-airport-departur-germany-may-departure-hall-major-92701327.jpg" alt="Day 7" />
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

export default GermanyLanding;