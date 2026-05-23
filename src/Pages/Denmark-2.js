import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const DenmarkLanding3 = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://thumbs.dreamstime.com/b/copenhagen-denmark-aerial-panoramic-skyline-view-royal-palace-115122754.jpg"
          alt="Best of Sweden Tour"
        />

        <div className="hero-content">
          <h1>Best of Sweden</h1>

          <p>
            Explore the beauty of Scandinavia with an unforgettable
            journey through Copenhagen, Malmö, Gothenburg, and Aarhus.
          </p>

          <Link to="/denmark-landing1">
            <button className="explore-btn">
              View Tours
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
              src="https://images.unsplash.com/photo-1513622470522-26c3c8a4bc?w=600"
              alt=""
            />
            <p>Copenhagen Waterfront</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1509356843151-3e7d962e11?w=600"
              alt=""
            />
            <p>Malmö City Views</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1521295121783-8a32151ad2?w=600"
              alt=""
            />
            <p>Gothenburg Streets</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b5869ba3ee?w=600"
              alt=""
            />
            <p>Aarhus Architecture</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Explore Scandinavian Cities</div>
          <div>📸 Stunning Nordic Landscapes</div>
          <div>🍽️ Taste Nordic Cuisine</div>
          <div>🚌 Comfortable Guided Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Scandinavia</h2>

        <p>
          Book your Denmark & Sweden adventure today
        </p>

        <br />

        <Link to="/denmark-landing1">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>5 Days Tour Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1513622470522-26c3c854bc?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{color:"blue"}}> Stockholm <br/>Welcome to Stockholm – The Nordic Pearl!</p>
              <p>Stockholm is the cultural, media, political, and economic centre of Sweden. The Stockholm region
alone accounts for over a third of the country's GDP, and is among the top 10 regions in Europe by
GDP per capita. Considered a global city, it is the largest in Scandinavia and the main centre for
corporate headquarters in the Nordic region.<br/>
Overnight Stay in Stockholm</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1513622470522-26c3c8bc?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color:"blue"}}>Stockholm Hop-On Hop-Off + Vasa Museum Guided Tour</p>
              <p>Breakfast at Hotel.<br/>
Start your day with the Stockholm Hop-on Hop-off Bus Tour (1 Day Pass – SIC Basis). Explore top
highlights like:<br/>
Royal Palace<br/>
Gamla Stan (Old Town)<br/>
City Hall<br/>
ABBA Museum<br/>
Djurgården Island<br/>
Later, proceed for your Vasa Museum Guided Tour (Entry Ticket Included). Discover the world’s only
preserved 17th-century warship and learn about Sweden’s maritime history.
Evening is free for leisure, shopping, or enjoying Swedish cuisine.<br/>
Overnight Stay in Stockholm</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1509356843151-3e7d96211?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{color:"blue"}}>Stockholm → Gothenburg</p>
              <p>Breakfast at Hotel.<br/>
This morning, proceed for your private transfer from Stockholm Hotel to Stockholm Station to board
your train to Gothenburg.<br/>
Arrive in Gothenburg, Sweden’s charming west-coast city, and enjoy a private transfer from
Gothenburg Station to your hotel.<br/>
Rest of the day is free to explore the harbour area, canals, and café culture.<br/>
Overnight Stay in Gothenburg</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1521295121783-8a321d5d2?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color:"blue"}}>Amphibious Bus Tour + Guided Walking Tour</p>
              <p>Breakfast at Hotel.<br/>
Land & Water Amphibious Bus Sightseeing Tour (SIC Basis – 1 Hour)
Experience Gothenburg like never before as you aboard the amphibious “Ocean Bus” that travels both
on land and water! Enjoy fun commentary and scenic views of the city’s major landmarks.<br/>
Private Walking Tour (Shared Basis)<br/>
Later, join a guided Walking Tour to explore Gothenburg’s history, architecture, and cultural
highlights. Walk through charming squares, lively markets, and beautiful boulevards with your expert
guide.<br/>
Overnight Stay in Gothenburg</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89bee?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color:"blue"}}> Gothenburg</p>
              <p>Breakfast at Hotel.<br/>
Check out and enjoy a comfortable private transfer from Gothenburg hotel to Gothenburg Airport for
your flight back to India.<br/>
Your memorable Sweden trip ends with wonderful experiences and beautiful memories!</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default DenmarkLanding3;