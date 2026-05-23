import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const HungaryLanding2 = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.luxurygold.com/media/epsotnsb/czech-republic-luxury-tours-travel-guide.jpeg?center=0.4923572164072419%2C0.500010000200004&format=webp&mode=crop&width=900&height=600&quality=80"
          alt="Central Europe Escape"
        />

        <div className="hero-content">
          <h1>Central Europe Escape</h1>

          <p>
            Discover the beauty of Budapest, Zagreb, Ljubljana,
            and the peaceful Lake Balaton on this unforgettable
            Central Europe journey.
          </p>

          <Link to="/hungary-landing1">
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
              src="https://images.unsplash.com/photo-1549877452-9c387954fbc2?w=600"
              alt=""
            />
            <p>Budapest Parliament</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=600"
              alt=""
            />
            <p>Zagreb City Streets</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1577083552431-6e5fd75fcfbf?w=600"
              alt=""
            />
            <p>Ljubljana Castle</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=600"
              alt=""
            />
            <p>Lake Balaton</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Historic European Cities</div>
          <div>🌊 Beautiful Lakes & Landscapes</div>
          <div>📸 Perfect Multi-Country Tour</div>
          <div>🍽️ Local European Cuisine</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Central Europe</h2>

        <p>
          Book your Budapest, Zagreb & Ljubljana tour today
        </p>

        <br />

        <Link to="/hungary-landing1">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>8 Days Tour Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1549877452-9c387954fbc2?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{color:"blue"}}>Arrival in Budapest</p>
              <p>Welcome to Budapest — the “Paris of the East,” known for its thermal baths and stunning
architecture!<br/>
Upon arrival, meet your private driver at the airport<br/>
Transfer comfortably to your hotel: Star City Hotel (or similar)<br/>
Check in and relax<br/>
Overnight Stay in Budapest</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1549877452-9c387954fbc2?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color:"blue"}}>Budapest City Tour + Széchenyi Spa</p>
              <p>Breakfast at the hotel<br/>
Hop-On Hop-Off Bus Tour (24 Hours)<br/>
Explore major attractions such as:<br/>
Hungarian Parliament Building<br/>
Buda Castle<br/>
Heroes' Square<br/>
Széchenyi Thermal Bath Experience<br/>
Enjoy entry to one of Europe’s largest and most famous thermal bath complexes<br/>
Relax in natural hot spring pools and spa facilities<br/>
Overnight Stay in Budapest</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{color:"blue"}}>Budapest at Leisure</p>
              <p>Breakfast at the hotel<br/>
 Day free to explore at your own pace<br/>
 Suggested experiences:<br/>
Walk across the Chain Bridge<br/>
Visit Fisherman's Bastion for panoramic views<br/>
Enjoy local Hungarian cuisine<br/>
Overnight Stay in Budapest</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color:"blue"}}>Budapest → Zagreb</p>
              <p>Breakfast at the hotel<br/>
Private Transfer to Zagreb<br/>
Comfortable intercity transfer directly to your hotel Check in at Best Western Hotel Stella (or similar)<br/>
Overnight Stay in Zagreb </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color:"blue"}}>Plitvice Lakes & Rastoke Tour</p>
              <p>Breakfast at the hotel<br/>
 Plitvice Lakes Guided Tour with Ticket & Rastoke (SIC)<br/>
Visit:<br/>
Plitvice Lakes National Park — famous for cascading lakes and waterfalls<br/>
Rastoke — a picturesque watermill village<br/>
Overnight Stay in Zagreb</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1577083552431-6e5fd75fcfbf?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{color:"blue"}}>Zagreb → Ljubljana</p>
              <p>Breakfast at the hotel<br/>
Private Transfer to Ljubljana<br/>
Transfer directly to your hotel: Ibis Styles Ljubljana Centre (or similar)<br/>
Check in and relax<br/>
Overnight Stay in Ljubljana</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1577083552431-6e5fd75fcfbf?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{color:"blue"}}>Lake Bled Day Tour</p>
              <p>Breakfast at the hotel<br/>
 Lake Bled Day Tour (SIC)<br/>
Explore:<br/>
• Lake Bled<br/>
• Bled Island<br/>
• Bled Castle<br/>
Overnight Stay in Ljubljana</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1549877452-9c387954fbc2?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{color:"blue"}}>Ljubljana → Departure</p>
              <p>Breakfast at the hotel<br/>
Private transfer to the airport<br/>
Depart with unforgettable Central European memories</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default HungaryLanding2;