import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const HungaryLanding6 = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.luxurygold.com/media/epsotnsb/czech-republic-luxury-tours-travel-guide.jpeg?center=0.4923572164072419%2C0.500010000200004&format=webp&mode=crop&width=900&height=600&quality=80"
          alt="Central Europe Tour"
        />

        <div className="hero-content">
          <h1>From Medieval Streets to Imperial Palaces</h1>

          <p>
            Journey through Prague, Vienna, Budapest, and Lake Balaton
            on an unforgettable 10-day European adventure filled with
            castles, culture, and historic beauty.
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
              src="https://images.unsplash.com/photo-1524041255072-7da0525d6b24?w=600"
              alt=""
            />
            <p>Prague Castle & Old Town</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600"
              alt=""
            />
            <p>Vienna Imperial Palaces</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1549877452-9c387954fbc2?w=600"
              alt=""
            />
            <p>Budapest Parliament</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=600"
              alt=""
            />
            <p>Lake Balaton Views</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Explore Historic European Capitals</div>
          <div>📸 Beautiful Architecture & Landscapes</div>
          <div>🍽️ Experience Local Food & Culture</div>
          <div>🚌 Comfortable Multi-City Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Central Europe</h2>

        <p>
          Book your Prague, Vienna & Budapest journey today
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
        <h2>10 Days Tour Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1524041255072-7da0525d6b24?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{color:"blue"}}>Prague</p>
              <p>Welcome to Prague – the enchanting City of a Hundred Spires, known for its fairy-tale skyline,
cobblestone streets, and rich medieval history.<br/>
Upon arrival at Prague Airport, enjoy a private transfer to your city centre hotel. Take the rest of the
day to relax, unwind, and begin soaking in the magical atmosphere of this charming European
capital. Whether you choose to stroll through Old Town or enjoy a classic Czech café, Prague offers a
captivating welcome.<br/>
Overnight Stay in Prague</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1524041255072-7da0525d6b24?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color:"blue"}}>Prague – City Tour, Castle Visit & Vltava Cruise</p>
              <p>Breakfast at the hotel<br/>
Start your day exploring Prague with a Hop-On Hop-Off tour, offering a comfortable way to see
major highlights such as Prague Castle, Old Town Square, and Mala Strana.
Later, visit Prague Castle, a historic complex dating back to the 9th century and home to centuries of
royal and political history.<br/>
In the evening, enjoy a Vltava River cruise, gliding past illuminated landmarks including Charles
Bridge and the Rudolfinum.<br/>
Overnight Stay in Prague</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{color:"blue"}}>Prague – Day Trip to Český Krumlov</p>
              <p>Breakfast at the hotel<br/>
Embark on a full-day trip to Český Krumlov, a UNESCO-listed medieval town known for its
picturesque streets and beautifully preserved castle. Explore its charming lanes and admire one of
the most striking castle complexes in Central Europe.<br/>
Overnight stay at Prague</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color:"blue"}}>Prague – Vienna </p>
              <p>Breakfast at the hotel<br/>
Travel by train from Prague to Vienna, the elegant capital of Austria. After checking in, spend the
remainder of the day at leisure—perhaps wandering through the historic city centre or relaxing in a
classic Viennese café.<br/>
Overnight in Vienna</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color:"blue"}}>Vienna – Hop-On Hop-Off, Schönbrunn Palace & City Cruise</p>
              <p>Breakfast at the hotel<br/>
Discover Vienna with a Hop-On Hop-Off tour, passing key attractions such as the State Opera,
Belvedere Palace, and the grand Ringstrasse.<br/>
Continue with a visit to Schönbrunn Palace, the former summer residence of the Habsburgs,
renowned for its opulent rooms and expansive gardens.<br/>
In the evening, enjoy a relaxing Danube Canal cruise, offering scenic views of modern and historic
Vienna.<br/>
Overnight stay in Vienna</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1549877452-9c387954fbc2?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{color:"blue"}}>Vienna – Day Trip to Bratislava</p>
              <p>Breakfast at the hotel<br/>
Take a day trip to Bratislava, where you’ll explore the charming Old Town and enjoy scenic views of
western Slovakia. The tour offers a pleasant mix of history, local culture, and countryside
landscapes, with free time to wander before returning to Vienna.<br/>
Overnight Stay in Vienna</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1549877452-9c387954fbc2?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{color:"blue"}}>Vienna – Budapest</p>
              <p>Breakfast at the hotel<br/>
Board your train to Budapest, a city famous for its riverside beauty and architectural elegance. After
your transfer and check-in, enjoy the evening at leisure exploring the vibrant streets or relaxing by
the Danube.<br/>
Overnight Stay in Budapest</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{color:"blue"}}>Budapest – Hop-On Hop-Off, Basilica Visit & Danube Cruise</p>
              <p>Breakfast at the hotel<br/>
Explore Budapest with a Day 1 of 2-Day Hop-On Hop-Off, covering its major attractions on both the
Buda and Pest sides.<br/>
Visit St. Stephen’s Basilica, admired for its beautiful interior and cultural significance.<br/>
In the evening, enjoy a Danube River cruise, offering stunning nighttime views of the Parliament,
Buda Castle, and the city’s illuminated bridges.<br/>
Overnight Stay in Budapest.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1549877452-9c387954fbc2?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 9</h3>
              <p style={{color:"blue"}}>Budapest</p>
              <p>Breakfast at the hotel<br/>
Enjoy Day 2 of your Hop-On Hop-Off tour, giving you more time to explore the city at your own
pace. Later, unwind at the world-famous Széchenyi Thermal Spa, known for its soothing outdoor
pools, healing thermal waters, and beautiful Neo-Baroque architecture — a classic Budapest
experience.<br/>
Overnight Stay in Budapest.
</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1524041255072-7da0525d6b24?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 10</h3>
              <p style={{color:"blue"}}>Budapest</p>
              <p>Breakfast at hotel<br/>
Check out and transfer to Budapest Airport for your onward flight, carrying wonderful memories of
Prague’s charm, Vienna’s imperial beauty, and Budapest’s riverside magic.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default HungaryLanding6;