import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const GermanyLanding5 = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://cdn.kimkim.com/files/a/images/e28c94ae4c1bb7b133f6039ab141910c3581949d/original-d8146eba4d5c03ddb9a619c95108daf4.jpg"
          alt="Europe Tour"
        />

        <div className="hero-content">
          <h1>Europe Highlights</h1>

          <p>
            Vienna • Munich • Zurich
          </p>

          <Link to="/germany">
            <button className="explore-btn">
              Explore Tour
            </button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Tour Highlights</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-16550893923-42d28e5677af?w=600"
              alt="Vienna"
            />
            <p>Vienna City</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-11295121783-8a321d551ad2?w=600"
              alt="Munich"
            />
            <p>Munich Streets</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-15022898657-3e91760cbb34?w=600"
              alt="Zurich"
            />
            <p>Zurich Lake</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-15005308557-b586d89ba3ee?w=600"
              alt="Alps"
            />
            <p>Swiss Alps</p>
          </div>


        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏔️ Beautiful Swiss Landscapes</div>
          <div>🏰 Explore Historic European Cities</div>
          <div>🎻 Austrian & Bavarian Culture</div>
          <div>📸 Perfect Multi-Country Europe Tour</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore Europe in 7 Days</h2>

        <p>
          Discover Austria, Germany and Switzerland in one unforgettable journey
        </p>

        <br />

        <Link to="/germany">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>07 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-15165508933-42d28e5677af?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 1</h3>

              <p style={{ color: "blue" }}>
                Arrival in Vienna
              </p>

              <p>
                Welcome to Vienna, Austria’s elegant capital city.
                Explore grand boulevards, beautiful cafes and
                historic architecture.
                <br />
                Overnight Stay in Vienna
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1491553891-0055eca6402d?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 2</h3>

              <p style={{ color: "blue" }}>
                Vienna City Tour
              </p>

              <p>
                Visit Schönbrunn Palace, St. Stephen’s Cathedral
                and Vienna Opera House. Enjoy Austria’s
                rich musical and cultural heritage.
                <br />
                Overnight Stay in Vienna
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-152129512178a321d551ad2?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 3</h3>

              <p style={{ color: "blue" }}>
                Vienna – Munich
              </p>

              <p>
                Travel to Munich, Germany’s vibrant Bavarian capital.
                Explore lively squares, beer gardens and
                historic attractions.
                <br />
                Overnight Stay in Munich
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1512453979798-5e6f8880c?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 4</h3>

              <p style={{ color: "blue" }}>
                Munich Exploration
              </p>

              <p>
                Visit Marienplatz, Nymphenburg Palace and
                the English Garden. Experience Bavarian
                culture, food and shopping.
                <br />
                Overnight Stay in Munich
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e60cbb34?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 5</h3>

              <p style={{ color: "blue" }}>
                Munich – Zurich
              </p>

              <p>
                Proceed to Zurich, Switzerland’s financial
                and cultural hub. Enjoy scenic landscapes,
                lakeside views and modern city charm.
                <br />
                Overnight Stay in Zurich
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-150053085569786d89ba3ee?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 6</h3>

              <p style={{ color: "blue" }}>
                Zurich City Tour
              </p>

              <p>
                Explore Zurich Lake, Bahnhofstrasse,
                Old Town and scenic Swiss surroundings.
                Enjoy Swiss chocolates, cafes and shopping.
                <br />
                Overnight Stay in Zurich
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1500530855697-bd89ba3ee?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 7</h3>

              <p style={{ color: "blue" }}>
                Departure from Zurich
              </p>

              <p>
                After breakfast, transfer to Zurich Airport
                for your onward journey with unforgettable
                memories of Austria, Germany and Switzerland.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default GermanyLanding5;