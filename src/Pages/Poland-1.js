import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const PolandLanding2 = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.luxurygold.com/media/epsotnsb/czech-republic-luxury-tours-travel-guide.jpeg?center=0.4923572164072419%2C0.500010000200004&format=webp&mode=crop&width=900&height=600&quality=80"
          alt="Poland Tour"
        />

        <div className="hero-content">
          <h1>Classic Poland Escape</h1>

          <p>
            Discover Warsaw & Kraków Highlights
          </p>

          <Link to="/poland-landing1">
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
              src="https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=600"
              alt=""
            />
            <p>Warsaw Old Town</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600"
              alt=""
            />
            <p>Kraków Main Square</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1524047934617-cb782c24e5f7?w=600"
              alt=""
            />
            <p>Historic Architecture</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600"
              alt=""
            />
            <p>European Culture</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">

        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Explore Poland’s Historic Cities</div>
          <div>📸 Beautiful European Landmarks</div>
          <div>🍽️ Taste Authentic Polish Cuisine</div>
          <div>🚌 Comfortable Guided Tour</div>
        </div>

      </div>

      {/* CTA */}
      <div className="cta-section">

        <h2>Plan Your Poland Journey</h2>

        <p>
          Explore the beauty of Warsaw & Kraków
        </p>

        <br />

        <Link to="/poland-landing1">
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
              src="https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{color:"blue"}}>Arrival in Warsaw</p>
              <p>Welcome to Warsaw — a city where history meets modern charm!<br/>
Upon arrival, meet your private driver at the airport<br/>
Enjoy a comfortable transfer to your hotel: Metropol Hotel Warsaw (or similar)<br/>
Check in and relax<br/>
Overnight Stay in Warsaw</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color:"blue"}}>Warsaw City Tour</p>
              <p>Breakfast at the hotel<br/>
 Warsaw Hop-On Hop-Off Bus Tour (24 Hours)<br/>
Explore key attractions such as:<br/>
Old Town Warsaw<br/>
Royal Castle Warsaw<br/>
Palace of Culture and Science<br/>
Overnight Stay in Warsaw</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1524047934617-cb782c24e5f7?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{color:"blue"}}>Warsaw → Kraków</p>
              <p>Breakfast at the hotel<br/>
Private transfer to the train station<br/>
Travel to Kraków<br/>
Private transfer to your hotel: Hotel Pollera (or similar)<br/>
Check in and relax<br/>
Overnight Stay in Kraków</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color:"blue"}}>Zakopane & Thermal Pools Tour</p>
              <p>Breakfast at the hotel<br/>
 Zakopane Tour with Thermal Pools (SIC)<br/>
Visit the scenic mountain resort town of Zakopane<br/>
Highlights:<br/>
Stunning views of the Tatra Mountains<br/>
Explore local markets and wooden architecture<br/>
Relax in natural thermal pools<br/> Overnight Stay in Kraków</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color:"blue"}}>Wieliczka Salt Mine Tour</p>
              <p>Breakfast at the hotel<br/>
 Wieliczka Salt Mine Tour (SIC)<br/>
Discover the underground wonder of Wieliczka Salt Mine<br/>
Highlights:<br/>
Intricate salt carvings and chapels<br/>
Fascinating underground tunnels<br/>
UNESCO World Heritage Site
Overnight Stay in Kraków</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{color:"blue"}}>Free Day in Kraków</p>
              <p>Breakfast at the hotel<br/>
 Day at Leisure for Self-Exploration / Shopping<br/>
 Suggested experiences:<br/>
Explore Main Market Square Kraków<br/>
Visit Wawel Castle<br/>
Enjoy cafés, shopping, and local food<br/>
Overnight Stay in Kraków</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{color:"blue"}}>Kraków → Departure</p>
              <p>Breakfast at the hotel<br/>
Private transfer to the airport<br/>
Depart with unforgettable Poland memories </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default PolandLanding2;