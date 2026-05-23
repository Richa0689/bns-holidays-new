import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const DenmarkLanding5 = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://thumbs.dreamstime.com/b/copenhagen-denmark-aerial-panoramic-skyline-view-royal-palace-115122754.jpg"
          alt="Denmark Sweden Germany Tour"
        />

        <div className="hero-content">
          <h1>Glimpses of Denmark, Sweden & Germany</h1>

          <p>
            Experience the charm of Scandinavia and Central Europe with
            an unforgettable journey through Copenhagen, Oslo, and Aarhus.
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
            <p>Oslo Scenic Beauty</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=600"
              alt=""
            />
            <p>Aarhus Architecture</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600"
              alt=""
            />
            <p>European Cultural Experience</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Explore Scandinavian Capitals</div>
          <div>📸 Stunning Landscapes & Waterfronts</div>
          <div>🍽️ Enjoy Nordic & European Cuisine</div>
          <div>🚌 Comfortable Guided Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Scandinavia & Europe</h2>

        <p>
          Book your Denmark, Sweden & Germany adventure today
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
              <p style={{color:"blue"}}>Copenhagen <br/>Welcome to Copenhagen –</p>
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
when you -probably- shouldn't) as we uncover the stories hidden in Copenhagen’s historic streets.<br/>
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
              <p>Breakfast at Hotel.
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
Stockholm’s atmosphere<br />
Overnight Stay in Stockholm.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=600"
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
              <p style={{color:"blue"}}>Stockholm – Hamburg</p>
              <p>After breakfast you check out and take private transfer from hotel to airport (or transport hub), then
travel to Hamburg. On arrival, you take the included private transfer from Hamburg airport to your
hotel. Once checked in you have the evening at leisure — perhaps a gentle walk around Hamburg’s
central or old-town area, to get a first impression of the city.<br/>
Overnight Stay in Hamburg.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{color:"blue"}}>Hamburg - Hamburg Old Town guided Walking tour on Shared Basis</p>
              <p>Breakfast at Hotel.<br/>
Breakfast at hotel starts the day, followed by a shared-basis guided walking tour of Hamburg’s Old
Town. You explore historic architecture, city-centre landmarks and learn about the city’s past and
present. After the tour, you have free time — you may choose to walk around, visit local sights, sample
local food or shop.<br/>
Overnight Stay in Hamburg.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{color:"blue"}}>Hamburg</p>
              <p>Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Hamburg Hotel to Hamburg Airport.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default DenmarkLanding5;