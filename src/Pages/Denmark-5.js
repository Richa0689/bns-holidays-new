import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const DenmarkLanding6 = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://thumbs.dreamstime.com/b/copenhagen-denmark-aerial-panoramic-skyline-view-royal-palace-115122754.jpg"
          alt="Denmark Sweden Norway Tour"
        />

        <div className="hero-content">
          <h1>Explore Denmark, Sweden and Norway</h1>

          <p>
            Experience stunning fjords, Nordic culture, historic landmarks,
            and breathtaking waterfront cities.
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
              src="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=600"
              alt=""
            />
            <p>Copenhagen Waterfront</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600"
              alt=""
            />
            <p>Oslo Fjords & City Views</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=600"
              alt=""
            />
            <p>Scandinavian Architecture</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=600"
              alt=""
            />
            <p>Aarhus Cultural Experience</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Explore Scandinavian Capitals</div>
          <div>📸 Stunning Fjords & Landscapes</div>
          <div>🍽️ Enjoy Nordic Cuisine</div>
          <div>🚌 Comfortable Guided Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Scandinavia</h2>

        <p>
          Book your Denmark, Sweden & Norway adventure today
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
        <h2>8 Days Tour Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{color:"blue"}}> Copenhagen <br/>Welcome to Copenhagen –</p>
              <p>Welcome to Copenhagen! Upon arrival, you will enjoy a private transfer from the airport to your hotel.
Settle in, relax and enjoy your first evening in this vibrant Scandinavian capital — maybe explore local
streets.<br/>
Overnight Stay in Copenhagen</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color:"blue"}}>Copenhagen – Group Walking Tour on Shared Basis & Copenhagen Canal Cruise Ticket</p>
              <p>Breakfast at Hotel.<br/>
After breakfast proceed to Copenhagen Group Walking tour on Shared basis. explore central
Copenhagen highlights (historic centre, main streets, landmarks, city vibe). Our Politically Incorrect
guides blend humour with history, creating a tour for those who are tired of traditional sightseeing
and excited by the idea of being pleasantly offended. Our guides will try to make you laugh (even
when you -probably- shouldn't) as we uncover the stories hidden in Copenhagen’s historic streets.
After lunch (on your own), take the Copenhagen Canal Cruise (ticket included) — a nice way to see
the city from the water, see historic buildings, harbour area, waterways. Experience Copenhagen
from the water on a canal cruise and see how the past and present merge as you travel along idyllic
canals, passing many of the city’s most famous landmarks, old and new.<br/>
Overnight Stay in Copenhagen</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{color:"blue"}}>Copenhagen – The Forest Tower & Forgotten Giants Trolls Trip from Copenhagen on SIC basis
(Forest Tower Entrance Not Included)</p>
              <p>Breakfast at Hotel.<br/>
After breakfast proceed to Forest Tower & Forgotten Giants Trolls Trip from Copenhagen on SIC
basis. Guest need to each the meeting Point on their own. Explore Denmark’s Forest Tower without
the hassle of arranging your own round-trip transportation. Ideal for architecture and nature lovers
alike, climb to the observation deck 140 meters above sea level and walk along wooden walkways
while enjoying the surrounding scenery.<br/>Overnight Stay in Copenhagen.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color:"blue"}}>Copenhagen – Stockholm</p>
              <p>After breakfast you check out and take the private transfer to Copenhagen Airport for your flight to
Stockholm. On arrival in Stockholm, you take private transfer from airport to hotel. Once checked in,
you have leisure time to recover from travel or take an evening walk around the city to soak in
Stockholm’s atmosphere<br/>
Overnight Stay in Stockholm.
</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color:"blue"}}>Stockholm – Stockholm Old Town Walking Tour on Shared Basis</p>
              <p>Breakfast at Hotel.<br/>
Following breakfast at hotel, you join a shared-basis walking tour through Stockholm’s Old Town
(historic centre). You explore narrow medieval streets, visit vintage buildings, soak in the old-town
ambience that reflects centuries of history, and get a feel for Stockholm’s unique character. After
the walking tour, the rest of the day and evening is at your leisure — you may wander seaside
streets, enjoy local cafés or restaurants, or plan your own sightseeing.<br/>
Overnight Stay in Stockholm</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{color:"blue"}}>Stockholm – Oslo</p>
              <p>After breakfast and check-out, you take private transfer from Stockholm hotel to airport, then travel
to Oslo. On arrival in Oslo, you will be met and transferred privately to your hotel. Once settled, you
have the rest of the day free — you may rest or take a relaxed stroll around Oslo neighbourhoods,
depending on your energy after travel.<br/>
Overnight Stay in Oslo</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{color:"blue"}}>Oslo - Oslo Guided Walking Tour on Shared Basis with Scenic Fjord Cruise</p>
              <p>Breakfast at Hotel.<br/>
Breakfast at hotel starts the day. You then go on a guided walking tour of Oslo (shared basis), exploring
major city landmarks, neighbourhoods, and gaining insight into the history and culture of the
Norwegian capital. Later in the day you enjoy a scenic cruise on the Oslofjord (on shared basis) — a
2-hour (approx.) cruise that lets you see Oslo from the water, view the rocky shores, small islands,
wooded hills and get a different perspective of the city and its natural surroundings. This fjord cruise
is a popular way to experience Oslo beyond its urban core<br/>
Overnight Stay in Oslo</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{color:"blue"}}>Oslo</p>
              <p>Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Oslo Hotel to Oslo Airport.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default DenmarkLanding6;