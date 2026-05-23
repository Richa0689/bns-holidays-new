import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const PortugalLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://modularassets.cdn.ignitetravel.com/modular_multisite/wp-content/uploads/sites/2/2024/12/16130036/Budapest-Hungary-2.jpg"
          alt="Portugal Tour"
        />

        <div className="hero-content">
          <h1>Best of Seville + Lisbon + Porto</h1>

          <p>
            Spain & Portugal Tour • 05 Nights / 06 Days
          </p>

          <Link to="/portugal">
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
              src="https://images.unsplash.com/photo-1515963665762-77ef90e624fa?w=600"
              alt="Seville"
            />
            <p>Seville Old Town</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1513735492246-483525079686?w=600"
              alt="Lisbon"
            />
            <p>Lisbon City Tour</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600"
              alt="Porto"
            />
            <p>Porto Riverside</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=600"
              alt="Sintra"
            />
            <p>Sintra Palace</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Historic European Cities</div>
          <div>🌊 Beautiful Coastal Views</div>
          <div>🍷 Portuguese Food & Culture</div>
          <div>📸 Perfect Europe Photography Tour</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore Spain & Portugal</h2>

        <p>
          Experience culture, architecture & scenic beauty
        </p>

        <br />

        <Link to="/portugal">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>06 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1515963665762-77ef90e624fa?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{color:"blue"}}>Seville – Arrival<br/>Welcome to Seville – The Pearl of Andalusia!</p>
              <p>Your adventure begins with a smooth private transfer from Seville Airport to your hotel. Once you
arrive, settle in and get ready to experience one of Spain’s most enchanting cities, famous for its
Moorish architecture, flamenco rhythms, and historic charm. Explore the vibrant streets, indulge in
delicious tapas, and discover the warmth and beauty that make Seville unforgettable.<br/>
Overnight stay in Seville.
</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1515963665762-77ef90e624fa?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color:"blue"}}>Seville – Seville 01 Day Hop on Hop Off Bus Tour</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, proceed for your Seville Hop On Hop Off Bus Tour.<br/>
Highlight: 01 Day Hop On Hop Off Bus Tour included.<br/>
Hop aboard the iconic red double-decker bus and explore Seville’s most celebrated landmarks at
your own pace. With 14 convenient stops, you can visit prestigious Islamic monuments, lush
gardens, and enjoy the essence of Andalusian culture. Enjoy open-top views, onboard audio
commentary, free Wi-Fi, and additional free walking tours covering Plaza de España, Maria Luisa
Park, and the atmospheric Jewish Quarter of Santa Cruz.<br/>
Overnight stay in Seville.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1513735492246-483525079686?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{color:"blue"}}>Seville – Lisbon</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, check out from the hotel. A private transfer will take you to Seville Airport for your
onward flight to Lisbon.<br/>
Upon arrival in Lisbon, a private transfer will comfortably take you to your hotel.
Welcome to Lisbon – The City of Seven Hills!<br/>
Lisbon is a charming blend of historic traditions and contemporary culture. From cobbled streets
and pastel-colored buildings to its thriving food and arts scene, Lisbon offers a perfect balance of old
and new. Enjoy your day at leisure to explore the city’s atmospheric neighborhoods or relax at your
hotel.<br/>
Overnight stay in Lisbon.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color:"blue"}}>Lisbon – Lisbon 01 Day Hop-On Hop-Off Bus Tour</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, proceed for your Lisbon Hop-On Hop-Off Bus Tour.<br/>
Highlight: 01 Day Hop-On Hop-Off Bus Tour included.<br/>
Discover Lisbon’s highlights aboard an open-top sightseeing bus, offering the flexibility to explore iconic
attractions such as the Jerónimos Monastery, Belém Tower, and the historic Baixa district. Enjoy
panoramic views, informative audio commentary, and the freedom to hop on and off at your preferred
stops throughout the day.<br/>
Overnight stay in Lisbon.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color:"blue"}}>Lisbon – Porto</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, check out from the hotel and travel to Porto. Travelling from Lisbon to Porto by
train is a fantastic option, with trains running frequently throughout the day. The journey typically
takes around 2 hours and 39 minutes to 3 hours and 44 minutes, covering a distance of
approximately 274-332 kilometres.<br/>
Welcome to Porto – Portugal’s city of bridges, wine, and riverside charm!
Porto is known for its enchanting old town, stunning riverfront, and world-famous port wine.
Explore the cobbled lanes of Ribeira, take in the scenic Douro River views, or simply relax and enjoy
the city’s warm atmosphere.<br/>
Overnight stay in Porto.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{color:"blue"}}>Porto – Departure</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, check out from the hotel. A private transfer will take you from your Porto hotel to
Porto Airport for your departure flight.<br/>
Your journey through Seville, Lisbon, and Porto comes to an end with wonderful memories.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default PortugalLanding;