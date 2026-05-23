import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const CroatiaLanding5 = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://cdn.kimkim.com/files/a/images/c4b08e2d82a827182b8d140723539baff070c41c/big-c7991fc83155098557c887e72b30093f.jpg"
          alt="Croatia Tour"
        />

        <div className="hero-content">
          <h1>Croatia</h1>
          <p>
            Zagreb • Plitvice Lakes • Zadar • Split • Hvar • Dubrovnik
          </p>

          <Link to="/croatia">
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
              src="https://images.unsplash.com/photo-1549893074-4bc81f2c1f4c?w=600"
              alt="Zagreb"
            />
            <p>Zagreb City</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600"
              alt="Plitvice"
            />
            <p>Plitvice Lakes</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=600"
              alt="Zadar"
            />
            <p>Zadar Coast</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1526481280695-3c4691f82c9e?w=600"
              alt="Split"
            />
            <p>Split Old Town</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600"
              alt="Hvar"
            />
            <p>Hvar Island</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600"
              alt="Dubrovnik"
            />
            <p>Dubrovnik Walls</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏝️ Beautiful Adriatic Coast</div>
          <div>🏰 Historic Croatian Cities</div>
          <div>🌊 Island & Beach Experience</div>
          <div>📸 Perfect Europe Photography Tour</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Croatia in a Week</h2>

        <p>
          Discover lakes, islands, beaches and historic cities
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
        <h2>07 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1549893074-4bc81f2c1f4c?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{color:"blue"}}>Zagreb<br/>Arrival in Zagreb: Discover Zagreb</p>
              <p>Welcome to Zagreb, the charming capital of Croatia. Upon arrival at Zagreb Airport, you will be
greeted by your driver and transferred privately to your hotel for a smooth and comfortable start to
your journey.<br/>
Zagreb is a vibrant European city known for its Austro-Hungarian architecture, lively squares, scenic
promenades, and rich cultural heritage. From historic Upper Town with its cobbled streets to the
colourful markets and cafes of Lower Town, Zagreb offers a warm introduction to Croatia.<br/>
Overnight Stay in Zagreb</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color:"blue"}}>Zagreb – City and WWII Tunnels Walking Tour on Shared Basis</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, proceed for the City and WWII Tunnels Walking Tour on shared basis. This insightful
walking experience reveals Zagreb’s fascinating history, hidden tunnels from World War II, and key
landmarks including Ban Jelačić Square, Dolac Market, Stone Gate, and the historic Old Town. This
tour offers a blend of cultural, historical, and architectural highlights that bring Zagreb’s past to life.<br/>
Overnight Stay in Zagreb</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{color:"blue"}}>Zagreb – Split</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, enjoy a private transfer from your Zagreb Hotel to Zagreb Airport for your flight to
Split.<br/>
Upon arrival, meet your driver for a private transfer to your Split hotel.
Split, located on the Dalmatian Coast, is known for its beautiful waterfront promenade, stunning
beaches, and ancient Roman architecture. At the heart of Split lies the UNESCO-listed Diocletian’s
Palace, a living historical monument filled with shops, cafes, and residences within its ancient stone
walls. <br/>Overnight Stay in Split
</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1526481280695-3c4691f82c9e?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color:"blue"}}>Split – Old Town and Diocletian Palace Walking Tour on Shared Basis</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, proceed for the Old Town and Diocletian Palace Walking Tour on shared basis. This
tour takes you through Split’s most iconic attraction—the ancient Diocletian’s Palace—along with its
charming Old Town squares, temples, courtyards, and narrow medieval lanes. Your guide will reveal
the rich history of the Roman Empire and the city’s transformation over centuries.
Later, enjoy leisure time by the waterfront or explore local markets and cafes.<br/>
Overnight Stay in Split</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color:"blue"}}>Split – Dubrovnik</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, proceed with a private transfer from Split Hotel to Split Ferry Station. Board your
2nd Class Ferry from Split to Dubrovnik, enjoying views of the Adriatic coastline along the journey.
Upon arrival, a private transfer will take you from Dubrovnik Ferry Station to your hotel.
Dubrovnik, known as the “Pearl of the Adriatic,” is one of Europe’s most enchanting walled cities.
With its terracotta rooftops, marble streets, and breathtaking sea views, Dubrovnik offers an
unforgettable blend of history, culture, and natural beauty.<br/>
Overnight Stay in Dubrovnik</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{color:"blue"}}>Dubrovnik – The Ultimate Game of Thrones City Walking Tour on Shared Basis</p>
              <p>Breakfast at Hotel.<br/>
Today proceed for The Ultimate Game of Thrones City Walking Tour on shared basis. Explore the
filming locations used in the popular series, including iconic landmarks such as Fort Lovrijenac, Pile
Gate, and the majestic city walls. Your guide will share behind-the-scenes stories, historical facts,
and fascinating insights that connect Dubrovnik’s real history with its on-screen portrayal as King’s
Landing.<br/>
After the tour, enjoy free time to stroll through the Old Town, visit the bazaars, or relax by the
Adriatic Sea.<br/>
Overnight Stay in Dubrovnik
</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{color:"blue"}}>Dubrovnik</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, proceed with a private transfer from Dubrovnik Hotel to Dubrovnik Airport for your
onwards journey</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default CroatiaLanding5;