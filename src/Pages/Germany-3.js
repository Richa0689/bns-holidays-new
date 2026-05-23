import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const GermanyLanding4 = () => {
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
            Munich • Stuttgart • Frankfurt
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
              src="https://images.unsplash.com/photo-15212121783-8a321d551ad2?w=600"
              alt="Munich"
            />
            <p>Munich City</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-15124539797-5ea266f8880c?w=600"
              alt="Stuttgart"
            />
            <p>Stuttgart Streets</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1502602898657e91760cbb34?w=600"
              alt="Frankfurt"
            />
            <p>Frankfurt Skyline</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b6d89ba3ee?w=600"
              alt="Castle"
            />
            <p>Historic Architecture</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Explore Historic German Cities</div>
          <div>🚗 Experience Germany’s Automobile Heritage</div>
          <div>🌆 Enjoy Modern & Traditional Germany</div>
          <div>📸 Perfect Europe Photography Tour</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Discover Germany in 7 Days</h2>

        <p>
          Explore vibrant cities, rich culture and modern architecture
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
              src="https://images.unsplash.com/photo-1521295121783-821d551ad2?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 1</h3>

              <p style={{ color: "blue" }}>
                 Munich <br/>Welcome to Germany –
              </p>

              <p>
                Welcome to Munich! Upon arrival at Munich Airport, enjoy a private transfer to your hotel. Check in,
relax, and spend the evening exploring Marienplatz, the Old Town streets, or Munich’s lively beer
gardens at your leisure.<br/>
Overnight Stay in Munich
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1491553895911-0055a6402d?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 2</h3>

              <p style={{ color: "blue" }}>
                Munich
              </p>

              <p>
               Breakfast at Hotel.<br/>
After breakfast, proceed for your Neuschwanstein & Linderhof Castle Full-Day Trip (included). Visit
two of Bavaria’s most iconic royal castles, surrounded by dramatic Alpine landscapes. Explore the
fairy-tale Neuschwanstein Castle and the elegant Linderhof Palace, while learning about King Ludwig
II’s fascinating history.<br/>
Overnight Stay in Munich
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea268880c?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 3</h3>

              <p style={{ color: "blue" }}>
               Munich - Stuttgart
              </p>

              <p>
                Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Munich Hotel to Train Station. Board your train from Munich to Stuttgart.
Upon arrival at Stuttgart Station, enjoy a private transfer to your hotel. Check in and explore
Stuttgart’s modern city center,Königstrasse shopping street, or the Palace Square area..<br/>
Overnight Stay in Stuttgart
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586ba3ee?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 4</h3>

              <p style={{ color: "blue" }}>
                Stuttgart
              </p>

              <p>
                Breakfast at Hotel.<br/>
After breakfast, begin your Stuttgart 24-Hour Hop-On Hop-Off Sightseeing Bus Tour (ticket
included). Explore major attractions such as the Mercedes-Benz Museum, Television Tower,
Schlossplatz, vineyards, and art museums at your own pace. Enjoy informative commentary as you
discover the cultural and architectural highlights of Stuttgart.<br/>
Overnight Stay in Stuttgart
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e917cbb34?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 5</h3>

              <p style={{ color: "blue" }}>
                Stuttgart - Frankfurt
              </p>

              <p>
                Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Stuttgart Hotel to Station. Board your train from Stuttgart to Frankfurt. Upon
arrival at Frankfurt Station, enjoy a private transfer to your hotel. Check in and explore the modern
skyline, Römerberg Square, or the riverside promenade..<br/>
Overnight Stay in Frankfurt
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1516550893923-42d28e57af?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 6</h3>

              <p style={{ color: "blue" }}>
                Frankfurt
              </p>

              <p>
                Breakfast at Hotel.<br/>
After breakfast, enjoy your River Main Sightseeing Cruise with Commentary (included). Sail past
Frankfurt’s striking skyline, historic bridges, museums, and riverside landmarks while learning about
the city’s history and culture.<br/>
Later, explore Frankfurt using your Hop-On, Hop-Off Grand or Express Bus Ticket (included). Visit key
attractions such as Römer, Palm Garden, old opera house, museums along the River Main, and
modern business districts.<br/>
Overnight Stay in Frankfurt

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d8a3ee?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 7</h3>

              <p style={{ color: "blue" }}>
               Frankfurt 
              </p>

              <p>
                Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Frankfurt Hotel to Frankfurt Airport for your onward flight.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default GermanyLanding4;