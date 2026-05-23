import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const GermanyLanding2 = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://cdn.kimkim.com/files/a/images/e28c94ae4c1bb7b133f6039ab141910c3581949d/original-d8146eba4d5c03ddb9a619c95108daf4.jpg"
          alt="Germany Tour"
        />

        <div className="hero-content">
          <h1>Germany</h1>

          <p>
            Ljubljana • Salzburg • Munich
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
              src="https://images.unsplash.com/photo-1541849546-216549ae216d?w=600"
              alt="Ljubljana"
            />
            <p>Ljubljana Old Town</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1505764706515-aa95265c5abc?w=600"
              alt="Salzburg"
            />
            <p>Salzburg City</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=600"
              alt="Munich"
            />
            <p>Munich Streets</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600"
              alt="Castle"
            />
            <p>European Architecture</p>
          </div>

          

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏔️ Beautiful Alpine Landscapes</div>
          <div>🏰 Historic European Cities</div>
          <div>🎻 Austrian & German Cultural Experience</div>
          <div>📸 Perfect Scenic Europe Tour</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Scenic Europe in 7 Days</h2>

        <p>
          Discover charming cities, mountains and unforgettable culture
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
              src="https://images.unsplash.com/photo-15418495416549ae216d?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 1</h3>

              <p style={{ color: "blue" }}>
                Arrival in Ljubljana
              </p>

              <p>
                Welcome to Ljubljana — a charming and green European capital!
Upon arrival, meet your private driver at the airport
Enjoy a comfortable transfer to your hotel: Ibis Styles Ljubljana Centre (or similar)
Check in and relax<br/>
Overnight Stay in Ljubljana
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1505764706-aa95265c5abc?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 2</h3>

              <p style={{ color: "blue" }}>
                Lake Bled Day Tour
              </p>

              <p>
                Breakfast at the hotel<br/>
 Lake Bled Day Tour (SIC)<br/>
Visit the stunning alpine resort of Lake Bled<br/>
Highlights include:<br/>
The iconic Bled Island with its picturesque church<br/>
Bled Castle perched above the lake<br/>
Scenic views of the Julian Alps<br/>
Overnight Stay in Ljubljana
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-14915538055eca6402d?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 3</h3>

              <p style={{ color: "blue" }}>
                Ljubljana → Salzburg
              </p>

              <p>
                Breakfast at the hotel<br/>
Private transfer to the station<br/>
Board your train to Salzburg<br/>
Private transfer to your hotel: Leonardo Hotel Salzburg City Center (or similar)<br/>
Rest of the day at leisure<br/>
Overnight Stay in Salzburg
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-150260287-3e91760cbb34?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 4</h3>

              <p style={{ color: "blue" }}>
                Hallstatt Half-Day Tour
              </p>

              <p>
                Breakfast at the hotel<br/>
 Hallstatt Half-Day Tour (SIC)<br/>
Visit the postcard-perfect village of Hallstatt<br/>
Highlights:<br/>
Stunning lake and mountain scenery<br/>
Traditional alpine houses <br/>Free time to explore this fairytale destination<br/>
Overnight Stay in Salzburg
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1521295183-8a321d551ad2?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 5</h3>

              <p style={{ color: "blue" }}>
                Salzburg → Munich
              </p>

              <p>
               Breakfast at the hotel<br/>
Private transfer to the station<br/>
Train journey to Munich<br/>
Private transfer to your hotel: Cocoon Stachus (or similar)<br/>
Overnight Stay in Munich
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1512453998-5ea266f8880c?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 6</h3>

              <p style={{ color: "blue" }}>
                Munich City Tour
              </p>

              <p>
                Breakfast at the hotel<br/>
 Munich Hop-On Hop-Off Bus Tour (24 Hours)<br/>
Explore top attractions such as:<br/>
Marienplatz<br/>
Nymphenburg Palace<br/>
English Garden<br/>
Overnight Stay in Munich
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1500530697-b586d89ba3ee?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 7</h3>

              <p style={{ color: "blue" }}>
               Munich → Departure
              </p>

              <p>
               Breakfast at the hotel<br/>
Private transfer to the airport<br/>
 Depart with unforgettable European memories
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default GermanyLanding2;