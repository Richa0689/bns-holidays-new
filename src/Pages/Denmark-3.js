import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const DenmarkLanding4 = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://thumbs.dreamstime.com/b/copenhagen-denmark-aerial-panoramic-skyline-view-royal-palace-115122754.jpg"
          alt="Denmark Germany Tour"
        />

        <div className="hero-content">
          <h1>Best of Denmark and Germany</h1>

          <p>
            Discover the beauty of Northern Europe with an unforgettable
            journey through Copenhagen, Oslo, and Aarhus. 
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
            <p>Oslo Scenic Views</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=600"
              alt=""
            />
            <p>Aarhus City Architecture</p>
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
          <div>🏰 Explore Nordic Capitals</div>
          <div>📸 Beautiful Landscapes & Waterfronts</div>
          <div>🍽️ Taste Scandinavian Cuisine</div>
          <div>🚌 Comfortable Multi-City Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Northern Europe</h2>

        <p>
          Book your Denmark & Germany adventure today
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
streets.<br />
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
while enjoying the surrounding scenery. <br/>Overnight Stay in Copenhagen.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color:"blue"}}>Copenhagen – Hamburg</p>
              <p>Breakfast at Hotel. Check out from the Hotel.<br/>
After breakfast transfer from hotel to Airport on private basis.
Take Flight from Copenhagen to Hamburg.<br/>
Welcome to Hamburg! Upon arrival, you will enjoy a private transfer from the airport to your hotel.
Settle in, relax and enjoy your first evening and take a short evening walk around Hamburg Old Town
/ central area — to get a first taste of the city.<br/>
Overnight Stay in Hamburg</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color:"blue"}}>Hamburg – Hamburg Old Town guided Walking tour on Shared Basis</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, Join the Hamburg Old Town guided walking tour (shared basis, included). Explore
historic old town — architecture, old buildings, sights. We start at the city model on Rathausmarkt,
where we get a first overview of Hamburg's historical city structure. There's a lot to see and tell
around the Rathausmarkt.<br/>
Evening at leisure to explore Hamburg further: maybe harbour area, riverfront, local shops,
restaurants. Hamburg’s central station is big and well-connected, so you can also venture out.<br/>
Overnight Stay in Hamburg</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{color:"blue"}}>Hamburg – Berlin</p>
              <p>Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Hamburg Hotel to Hamburg Train Station.
Board train from Hamburg to Berlin.<br/>
Upon arriving at Berlin Train Station, enjoy a private transfer to your hotel.
Check in and spend the remaining day relaxing or taking a casual walk around Berlin’s central
districts — Alexanderplatz, Museum Island, or nearby cafés.<br/>
Overnight Stay in Berlin</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{color:"blue"}}>Berlin - Berlin 01 Day Hop on Hop Off Bus Tour with Berlin TV Tower Ticket</p>
              <p>Breakfast at Hotel.<br/>
After breakfast proceed to Berlin 01 Day Hop on Hop Off Bus Tour. Guest need to each the meeting
Point on their own. explore Berlin’s major landmarks at your own pace. Like Brandenburg Gate, Berlin
Wall Memorial, Checkpoint Charlie, Museum Island, Alexanderplatz and Reichstag Building.
Later, visit the iconic Berlin TV Tower with your included entrance ticket. Enjoy spectacular panoramic
views of Berlin’s skyline from the observation deck.<br/>
Spend the rest of the day at leisure — shopping, museums, historic sites, or enjoy Berlin’s vibrant food
scene.<br/>
Overnight Stay in Berlin</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{color:"blue"}}>Berlin</p>
              <p>Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Berlin Hotel to Berlin Airport.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default DenmarkLanding4;