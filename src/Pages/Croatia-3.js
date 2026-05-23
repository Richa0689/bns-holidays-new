// CroatiaLanding3.js

import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const CroatiaLanding3 = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://cdn.kimkim.com/files/a/images/c4b08e2d82a827182b8d140723539baff070c41c/big-c7991fc83155098557c887e72b30093f.jpg"
          alt="Croatia Tour"
        />

        <div className="hero-content">
          <h1>Two Cities, One Coast</h1>
          <p>Dubrovnik • Split • Croatia</p>

          <Link to="/croatia">
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
              src="https://images.unsplash.com/photo-1555990538-1736b0258235?w=600"
              alt="Dubrovnik"
            />
            <p>Dubrovnik Old Town</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=600"
              alt="Split"
            />
            <p>Split Waterfront</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600"
              alt="Beach"
            />
            <p>Adriatic Beaches</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=600"
              alt="Coast"
            />
            <p>Scenic Croatian Coast</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🌊 Beautiful Coastline</div>
          <div>🏛️ Historic Cities</div>
          <div>🏝️ Relaxing Beaches</div>
          <div>📸 Perfect Photography Spots</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore Croatia’s Coast</h2>

        <p>
          Book your Dubrovnik & Split escape today
        </p>

        <br />

        <Link to="/croatia">
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
              src="https://images.unsplash.com/photo-1555990538-1736b0258235?w=600"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{color:"blue"}}>Zadar<br/>Arrival in Zadar: “Meet. Feel. Explore”</p>
              <p>Welcome to Zadar, one of Croatia’s most charming coastal cities known for its Roman ruins, stunning
sunsets, and the unique Sea Organ. Upon arrival at Zadar Airport, enjoy a seamless private transfer to
your hotel for a comfortable start to your journey.
Spend the rest of the day at leisure exploring the Old Town, strolling along the waterfront, or simply
soaking in the peaceful Mediterranean atmosphere. Zadar’s historic charm and seaside beauty set the
perfect tone for your Croatian holiday.<br/>
Overnight Stay in Zadar
</p>

            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color:"blue"}}>Zadar - Preko, Osljak, and Kali Island Boat Tour on Shared Basis</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, proceed for a shared boat tour to the beautiful islands of Preko, Osljak, and Kali.
This scenic excursion offers crystal-clear waters, quaint fishing villages, and panoramic views of the
Adriatic coastline. Explore charming local communities, enjoy swimming opportunities, and
appreciate the natural beauty of Croatia’s island gems.<br/>
Return to Zadar in the afternoon and enjoy the rest of the day at your own pace.<br/>
Overnight Stay in Zadar</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=600"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{color:"blue"}}>Zadar – Split</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, check out and enjoy a comfortable private transfer to the vibrant coastal city of
Split. With its bustling waterfront promenade and the iconic Diocletian’s Palace, Split offers a
beautiful blend of history and modern Mediterranean culture.<br/>
Upon arrival, check in and spend the rest of the day exploring Split’s charming old town, local cafes,
or nearby beaches.<br/>
Overnight Stay in Split</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=600"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color:"blue"}}>Split – Blue Lagoon, Borko Beach & Šolta Tour on Shared Basis</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, embark on a shared full-day tour to the Blue Lagoon, Borko Beach, and the island of
Šolta. This exciting boat trip offers turquoise waters perfect for swimming, stunning coastal
landscapes, and relaxing island vibes.<br/>
Spend time snorkeling, sightseeing, or simply basking in the beauty of Croatia’s Dalmatian coast.
Return to Split in the evening after an unforgettable day on the Adriatic.<br/>
Overnight Stay in Split
</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color:"blue"}}>Split</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, proceed to Split Airport with a private transfer for your onwards flight, marking the
end of your memorable Croatian getaway.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default CroatiaLanding3;