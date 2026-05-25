import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const GermanyLanding6 = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://cdn.kimkim.com/files/a/images/e28c94ae4c1bb7b133f6039ab141910c3581949d/original-d8146eba4d5c03ddb9a619c95108daf4.jpg"
          alt="Europe Tour"
        />

        <div className="hero-content">
          <h1>Austria, Germany & Switzerland</h1>

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
              src="https://images.unsplash.com/photo-1593923-42d28e5677af?w=600"
              alt="Vienna"
            />
            <p>Vienna Heritage</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-152183-8a321d551ad2?w=600"
              alt="Munich"
            />
            <p>Munich Culture</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-150268657-3e91760cbb34?w=600"
              alt="Zurich"
            />
            <p>Zurich Lake</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-15005308-b586d89ba3ee?w=600"
              alt="Swiss Alps"
            />
            <p>Swiss Alps</p>
          </div>

          

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏔️ Stunning Swiss Landscapes</div>
          <div>🏰 Historic European Attractions</div>
          <div>🎻 Austrian & Bavarian Culture</div>
          <div>📸 Perfect Multi-Country Europe Journey</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore Europe in 8 Days</h2>

        <p>
          Experience the beauty of Austria, Germany and Switzerland
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
        <h2>08 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1516550892d28e5677af?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 1</h3>

              <p style={{ color: "blue" }}>
                Arrival in Vienna
              </p>

              <p>
                Welcome to Vienna, Austria’s elegant capital.
                Explore charming streets, grand palaces and
                traditional Viennese cafes.
                <br />
                Overnight Stay in Vienna
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-14915538955eca6402d?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 2</h3>

              <p style={{ color: "blue" }}>
                Vienna Sightseeing Tour
              </p>

              <p>
                Visit Schönbrunn Palace, Vienna Opera House,
                St. Stephen’s Cathedral and famous cultural landmarks.
                <br />
                Overnight Stay in Vienna
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-152129512121d551ad2?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 3</h3>

              <p style={{ color: "blue" }}>
                Vienna – Munich
              </p>

              <p>
                Travel to Munich, Germany’s Bavarian capital.
                Explore lively squares, historic landmarks
                and traditional beer gardens.
                <br />
                Overnight Stay in Munich
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1512453979a266f8880c?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 4</h3>

              <p style={{ color: "blue" }}>
                Munich City Tour
              </p>

              <p>
                Visit Marienplatz, Nymphenburg Palace,
                English Garden and enjoy Bavarian cuisine.
                <br />
                Overnight Stay in Munich
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-150260289891760cbb34?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 5</h3>

              <p style={{ color: "blue" }}>
                Munich – Zurich
              </p>

              <p>
                Proceed to Zurich, Switzerland’s scenic financial hub.
                Enjoy breathtaking Alpine views and lakeside beauty.
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
                Zurich & Swiss Alps Experience
              </p>

              <p>
                Explore Zurich Old Town, Zurich Lake
                and enjoy an excursion to the Swiss Alps
                for unforgettable mountain views.
                <br />
                Overnight Stay in Zurich
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-151655089392328e5677af?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 7</h3>

              <p style={{ color: "blue" }}>
                Leisure Day in Zurich
              </p>

              <p>
                Enjoy shopping at Bahnhofstrasse,
                Swiss chocolates, cafes and scenic lake views.
                Explore the city at your own pace.
                <br />
                Overnight Stay in Zurich
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 8</h3>

              <p style={{ color: "blue" }}>
                Departure from Zurich
              </p>

              <p>
                After breakfast, transfer to Zurich Airport
                for your onward journey with wonderful memories
                of Austria, Germany and Switzerland.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default GermanyLanding6;