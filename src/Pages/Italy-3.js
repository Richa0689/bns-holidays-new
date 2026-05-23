import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const ItalyLanding4 = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.luxurygold.com/media/epsotnsb/czech-republic-luxury-tours-travel-guide.jpeg?center=0.4923572164072419%2C0.500010000200004&format=webp&mode=crop&width=900&height=600&quality=80"
          alt="France Italy Tour"
        />

        <div className="hero-content">
          <h1>French Riviera & Milan Elegance</h1>

          <p>
            Luxury Coastlines. Fashion Capitals. European Charm.
          </p>

          <Link to="/italy">
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
              src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600"
              alt=""
            />
            <p>French Riviera</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600"
              alt=""
            />
            <p>Milan City</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600"
              alt=""
            />
            <p>Venice Canals</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1525874684015-58379d421a52?w=600"
              alt=""
            />
            <p>Florence Architecture</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600"
              alt=""
            />
            <p>Rome Landmarks</p>
          </div>

          

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">

        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🌊 Stunning French Riviera Coast</div>
          <div>🏙️ Explore Stylish Milan</div>
          <div>🍝 Authentic Italian Cuisine</div>
          <div>📸 Perfect Europe Photography Spots</div>
        </div>

      </div>

      {/* CTA */}
      <div className="cta-section">

        <h2>Book Your Europe Escape</h2>

        <p>
          Discover the beauty of France & Italy
        </p>

        <br />

        <Link to="/italy">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>

      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">

        <h2>7 Days Tour Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{color:"blue"}}>Nice</p>
              <p>Welcome to Nice – the glamorous gateway to the French Riviera, known for its azure coastline,
artistic charm, and Mediterranean lifestyle.<br/>
Upon arrival at Nice Airport, enjoy a private transfer to your hotel in the city centre. Take the rest of
the day to relax and settle in. Depending on your arrival time, you may stroll along the Promenade
des Anglais, explore Old Town’s winding streets, or simply enjoy the coastal atmosphere.<br/>
Overnight Stay in Nice</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color:"blue"}}>Nice – Full day French Riviera Exploration</p>
              <p>Breakfast at the hotel<br/>
Today, embark on a wonderful full-day tour exploring the highlights of the French Riviera. Travel
through charming villages, glamorous coastal towns, and iconic destinations such as Èze, Monaco,
Monte Carlo, Antibes, Saint-Paul-de-Vence, and Cannes.<br/>
Enjoy medieval lanes, breathtaking coastal views, luxury marinas, perfumeries, and the famous
Croisette promenade. This immersive experience combines history, beauty, and French elegance—
perfect for discovering the essence of the Riviera.<br/>
Overnight Stay in Nice</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{color:"blue"}}>Nice – Monaco</p>
              <p>Breakfast at the hotel<br/>
This morning, transfer from Nice to the principality of Monaco in comfort, enjoying scenic views of
the Mediterranean coastline along the way. Pass delightful seaside towns and dramatic cliffs as you
make your way to one of the world’s most glamorous destinations.<br/>
Spend the rest of the day at leisure—perhaps explore Monaco’s harbour, wander through its
charming old streets, or enjoy the peaceful gardens overlooking the sea.<br/>
Overnight Stay in Monaco</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color:"blue"}}>Monaco – Discover Monaco at Your Own Pace</p>
              <p>Breakfast at the hotel<br/>
Explore Monaco with a Hop-On Hop-Off sightseeing tour that allows you to discover the
principality’s major attractions at your own pace. Visit Monte Carlo, Fontvieille, and the Rock of Monaco, home to historic landmarks such as the Prince’s Palace and the iconic Casino.
Enjoy spectacular views of the Mediterranean, admire luxurious yachts, and explore Monaco’s rich
cultural and historical heritage in a flexible and engaging way.<br/>
Overnight Stay in Monaco.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1525874684015-58379d421a52?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color:"blue"}}>Monaco – Milan </p>
              <p>Breakfast at the hotel<br/>
Leave Monaco behind and travel by train across picturesque landscapes to the fashionable Italian
city of Milan. After arriving in the city centre, check in to your hotel and enjoy the remainder of the
day at leisure.<br/>
Overnight Stay in Milan.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{color:"blue"}}>Milan City Sightseeing</p>
              <p>Breakfast at the hotel<br/>
Enjoy a full day of exploring Milan with a Hop-On Hop-Off sightseeing experience. Discover iconic
landmarks such as the majestic Duomo, the historic Sforza Castle, La Scala Opera House, and the
city’s stylish shopping districts. This tour offers the perfect mix of culture, history, and modern
elegance.<br/>
Later, visit the renowned Duomo di Milano Museum & Terraces, one of the world’s finest examples
of Gothic architecture. Marvel at the thousands of statues and ornate spires before taking the
elevator to the rooftop terraces, where sweeping views of the city and the distant Alps create an
unforgettable experience.<br/>
Overnight Stay in Milan.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{color:"blue"}}>Milan</p>
              <p>Breakfast at the hotel<br/>
After checking out, proceed to Milan Airport for your onward journey. Depart with cherished
memories of the sparkling French Riviera, the elegance of Monaco, and the architectural grandeur
of Milan.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ItalyLanding4;