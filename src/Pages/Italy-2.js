import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const ItalyLanding3 = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.luxurygold.com/media/epsotnsb/czech-republic-luxury-tours-travel-guide.jpeg?center=0.4923572164072419%2C0.500010000200004&format=webp&mode=crop&width=900&height=600&quality=80"
          alt="Italy Tour"
        />

        <div className="hero-content">
          <h1>Experience the Essence of Italy</h1>

          <p>
            Roman History • Venetian Canals • Tuscan Beauty
          </p>

          <Link to="/italy-landing">
            <button className="explore-btn">
              View Tours
            </button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Italian Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600"
              alt=""
            />
            <p>Rome & Colosseum</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1543429257-3eb0b65d0ec8?w=600"
              alt=""
            />
            <p>Florence Art & Architecture</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600"
              alt=""
            />
            <p>Venice Gondola Ride</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1525874684015-58379d421a52?w=600"
              alt=""
            />
            <p>Pisa Tower</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600"
              alt=""
            />
            <p>Amalfi Coast</p>
          </div>

          

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏛️ Explore Italy’s Ancient Wonders</div>
          <div>🎨 Discover Renaissance Culture</div>
          <div>🍝 Taste Authentic Italian Cuisine</div>
          <div>📸 Scenic Landscapes & Coastal Beauty</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Your Italian Adventure Awaits</h2>

        <p>
          Book your dream Italy vacation today
        </p>

        <br />

        <Link to="/italy-landing">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>09 Nights / 10 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{color:"blue"}}> Milan<br/>Arrival in Milan: Begin Your Northern Italy Journey<br/>Milan Hop on Hop Off Tour and Cathedral & Duomo Terraces Entrance Ticket (as per next day’s<br/>program, subject to availability)</p>
              <p>Welcome to Milan, Italy’s fashion capital and a city where history blends seamlessly with modern
elegance. Upon your arrival at Milan Airport, a private transfer will take you directly to your hotel for
a smooth and comfortable start to your holiday.
Milan welcomes you with its stylish neighbourhoods, grand architecture, and vibrant cultural energy.
Spend your evening strolling through the beautiful streets, enjoying Italian cuisine, or simply relaxing
after your journey.<br/>
Overnight Stay in Milan.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color:"blue"}}>Milan – Milan Hop on Hop Off Tour and Duomo Visit<br/>Breakfast at Hotel.<br/>Milan Hop on Hop Off Tour and Cathedral & Duomo Terraces Entrance Ticket</p>
              <p>After breakfast, proceed for your one-day Hop on Hop Off bus tour of Milan, allowing you to explore
major highlights at your own pace. Witness iconic landmarks such as Sforza Castle, Teatro alla Scala,
and the fashionable districts that define Milan’s global reputation.
A major highlight of your day is your visit to the majestic Milan Cathedral. With your Cathedral and
Duomo Terraces Entrance Ticket, explore one of the world’s most stunning Gothic masterpieces and
climb to the terraces for breathtaking views of the city’s skyline.<br/>
Overnight Stay in Milan</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1543429257-3eb0b65d0ec8?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{color:"blue"}}> Milan – Como, Bellagio and Lugano Excursion<br/>Breakfast at Hotel.</p>
              <p>Milan Discover Como, Bellagio, and Lugano<br/>
After breakfast, proceed for a full-day excursion to the scenic lake region. Explore the charming
town of Como, enjoy the beauty of Lake Como, and continue to the picturesque village of Bellagio,
known for its romantic landscapes. The tour also includes a visit to Lugano, offering a blend of Swiss
charm and Mediterranean flair.<br/>
Return to Milan in the evening with wonderful memories of Northern Italy’s most beautiful
destinations.<br/>
Overnight Stay in Milan.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1543429257-3eb0b65d0ec8?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color:"blue"}}> Milan – Venice<br/>Breakfast at Hotel.</p>
              <p>After breakfast, a private transfer will take you from your Milan hotel to Milan Train Station for your
onward journey to Venice.<br/>
Upon arrival, make your way to your hotel in the charming city of canals, bridges, and timeless
romance. Venice welcomes you with its serene waterways, historic architecture, and captivating
ambience. Enjoy your evening walking through its narrow alleys or relaxing near the Grand Canal.<br/>
Overnight Stay in Venice</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1525874684015-58379d421a52?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color:"blue"}}> Venice – Gondola Ride<br/>Breakfast at Hotel.<br/>Gondola Ride on Shared Basis</p>
              <p>After breakfast, proceed for your classic Venetian Gondola Ride on shared basis. Glide along the city’s
picturesque canals, passing under ancient bridges and by elegant palaces that showcase Venice’s rich
heritage.<br/>
This peaceful ride offers an authentic and memorable Venetian experience. Enjoy the rest of your day
exploring St. Mark’s Square, Rialto Bridge, and other iconic locations of this magical floating city.<br/>
Overnight Stay in Venice</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{color:"blue"}}> Venice – Florence<br/>Breakfast at Hotel.</p>
              <p>After breakfast, proceed on your own to Venice Train Station to board your train to Florence, the
cradle of the Renaissance.<br/>
Upon arrival, make your way to your hotel. Florence greets you with world-famous art, historic
squares, and architectural masterpieces. Spend your evening strolling through the old town or
enjoying authentic Tuscan cuisine.<br/>
Overnight Stay in Florence.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{color:"blue"}}> Florence – Florence Hop on Hop Off Tour</p>
              <p>Breakfast at Hotel.<br/>
Florence 01 Day Hop on Hop Off Bus Tour<br/>
After breakfast, enjoy your one-day Hop on Hop Off bus tour of Florence. Discover the city’s
renowned landmarks, including the Florence Cathedral, Piazza della Signoria, Ponte Vecchio, and
viewpoints offering stunning panoramas of the city.<br/>
The tour allows you to explore Florence’s artistic and cultural heritage at your own pace.<br/>
Overnight Stay in Florence.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{color:"blue"}}> Florence – Rome<br/>Breakfast at Hotel.</p>
              <p>After breakfast, proceed on your own to Florence Train Station to board your train to Rome, the
Eternal City.<br/>
Upon arrival in Rome, make your way to your hotel. Rome’s rich history, lively streets, and iconic
monuments create an unforgettable atmosphere. Enjoy your evening at leisure exploring nearby
piazzas or cafés.<br/>
Overnight Stay in Rome.
</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 9</h3>
              <p style={{color:"blue"}}> Rome – Rome Hop on Hop Off Tour and Colosseum Visit <br/>Breakfast at Hotel.</p> 
              <p>Rome Hop on Hop Off Tour and Colosseum Entry Ticket.<br/>
After breakfast, enjoy your Rome one-day Hop on Hop Off Bus Tour, offering the perfect way to
explore key Roman attractions at your leisure. Visit sites such as the Roman Forum, Trevi Fountain,
Spanish Steps, and Vatican City.<br/>
A signature highlight of the day is your visit to the iconic Colosseum. With your entry ticket, explore
this ancient amphitheatre, learning about the gladiators, emperors, and historic events that shaped
Roman history.<br/>
Overnight Stay in Rome</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 10</h3>
              <p style={{color:"blue"}}> Rome</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, proceed to Rome Airport with a comfortable private transfer, marking the end of
your beautiful Italian holiday.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ItalyLanding3;