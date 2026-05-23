import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const DenmarkLanding2 = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://thumbs.dreamstime.com/b/copenhagen-denmark-aerial-panoramic-skyline-view-royal-palace-115122754.jpg"
          alt="Copenhagen and Gothenburg Tour"
        />

        <div className="hero-content">
          <h1>Best of Copenhagen and Gothenburg</h1>

          <p>
            Discover the charm of Copenhagen and Gothenburg on this
            unforgettable Scandinavian getaway filled with beautiful
            canals, historic streets, Nordic culture, and modern design.
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
            <p>Copenhagen Nyhavn Harbor</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=600"
              alt=""
            />
            <p>Gothenburg City Views</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600"
              alt=""
            />
            <p>Scandinavian Waterfronts</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=600"
              alt=""
            />
            <p>Nordic Architecture</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Explore Scandinavian Cities</div>
          <div>📸 Stunning Nordic Landscapes</div>
          <div>🍽️ Experience Local Cuisine</div>
          <div>🚌 Comfortable Guided Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Scandinavia</h2>

        <p>
          Book your Copenhagen & Gothenburg journey today
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
              src="https://images.unsplash.com/photo-1513622470522-26c3c8a854b600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{color:"blue"}}>Copenhagen </p>
              <p>Welcome to Copenhagen – The capital city of Denmark!<br/>
Upon arrival at Copenhagen Airport, you will be greeted and transferred privately to your hotel. The
rest of the day is free to relax or explore the city on your own.
Stroll through Nyhavn harbour, taste local bakeries, or simply enjoy the fresh Nordic air.<br/>
Overnight stay in Copenhagen</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color:"blue"}}>Copenhagen – Hop on hop off City Tour + Boat Ride + Illusion Museum</p>
              <p>Breakfast at the hotel.<br/>
After breakfast, proceed for your Hop-on Hop-off City Tour of Copenhagen. Explore iconic<br/>
attractions like:<br/>
Rosenborg Castle<br/>
Amalienborg Palace<br/>
Tivoli Gardens<br/>
The Little Mermaid Statue<br/>
Later, enjoy a One-Way Boat Tour offering stunning views of canals and colorful townhouses.<br/>
Continue to the Copenhagen Illusion Museum (Entry Ticket Included) – a fun and interactive<br/>
experience perfect for all ages.<br/>
Overnight stay in Copenhagen.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1521295121783-8a321d551ad600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 3</h3>
               <p style={{color:"blue"}}>Paris – Copenhagen ➜ Gothenburg (By Train)</p>
               <p>Breakfast at the hotel.<br/>
Today, you will be transferred privately from your hotel to Copenhagen Train Station. Board your
train to Sweden’s harbour city, Gothenburg.<br/>
Upon arrival, you will get a private transfer from Gothenburg Station to your hotel. Time free at
leisure to relax or explore the shopping streets like Avenyn or enjoy waterfront cafes.<br/>
Overnight stay in Gothenburg.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1521295121783-8a321d551ad600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 4</h3>
               <p style={{color:"blue"}}>Guided Walking Tour – Gothenburg</p>
               <p>Breakfast at the hotel.<br/>
After breakfast, join a Guided Walking Tour of Gothenburg (Shared Basis).<br/>
Highlights include:<br/>
Gustav Adolfs Square<br/>
Gothenburg Cathedral<br/>
Feskekôrka Fish Market<br/>
Haga District (famous for giant cinnamon buns)<br/>
Enjoy the charming blend of Scandinavian architecture, beautiful parks, and lively markets.<br/>
Rest of the day is free to explore at your own pace.<br/>
Overnight stay in Gothenburg.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo94526585095-c41746248156?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 5</h3>
               <p style={{color:"blue"}}>Day 5: Gothenburg ➜ Copenhagen Airport (Departure)</p>
               <p>Breakfast at the hotel.<br/>
After breakfast, proceed with a private transfer from Gothenburg Hotel to Gothenburg Station.
On arrival in Copenhagen, you will again get your private transfer from Copenhagen Station to
Copenhagen Airport for your flight back home.<br/>
 End of your Scandinavian Journey with lifetime memories!</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default DenmarkLanding2;