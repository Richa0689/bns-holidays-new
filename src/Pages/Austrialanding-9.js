import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const MunichInnsbruckSalzburgLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.railbookers.com.au/sites/railbookers/files/styles/hero/public/images/salzburg-1.jpg?h=3a3df0c5&itok=h-y7GlYK"
          alt="Munich Innsbruck Salzburg Tour"
        />

        <div className="hero-content">
          <h1>Munich’s Majesty to Innsbruck’s Alps</h1>
          <p>European Charm. Alpine Landscapes. Historic Cities.</p>

          <Link to="/europe">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/03/18/60/caption.jpg?w=500&h=400&s=1"
              alt=""
            />
            <p>Munich Germany</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://the-shooting-star.com/wp-content/uploads/2011/05/424142774_c28f79a6a4.jpg"
              alt=""
            />
            <p>Innsbruck Alps</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://media.istockphoto.com/id/509641529/photo/historic-town-of-salzburg-with-salzach-river-in-summer-austria.jpg?s=612x612&w=0&k=20&c=VPCNTdghkFuqzE4HKlJHfALOF2NqzYk6xUYIu3pXF-g="
              alt=""
            />
            <p>Salzburg Austria</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://thumbs.dreamstime.com/b/alpine-mountain-scenery-country-road-summer-beautiful-view-winding-pass-alps-peaks-glaciers-lakes-green-187249102.jpg"
              alt=""
            />
            <p>Scenic Alpine Views</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Europe Tour?</h2>

        <div className="why-grid">
          <div>🏔️ Stunning Alpine Landscapes</div>
          <div>🏰 Historic European Cities</div>
          <div>🚆 Scenic Train Journeys</div>
          <div>📸 Perfect Photography Spots</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Europe Like Never Before</h2>
        <p>Book your Munich, Innsbruck & Salzburg tour today</p>
        <br />

        <Link to="/europe">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>07 Days Tour Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCfrRa9bIzzjWDyBO_fNpNOrpvVBcrT_j8VA&s"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{color:"blue"}}> Munich</p>
              <p>Welcome to Munich – the capital of Bavaria and a city known for its rich history, grand architecture,
and lively cultural scene.<br/>
Upon arrival at Munich Airport, meet your driver for a private transfer to your city centre hotel.
Settle into your room and enjoy the rest of the day at leisure. Depending on your arrival time, you
may take a relaxing walk-through nearby streets, enjoy Bavarian cuisine, or simply unwind from
your journey.<br/>
Overnight Stay in Munich</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.muenchen.travel/var/ger_muc/storage/images/_aliases/stage_large/4/4/1/1/2181144-1-ger-DE/marienplatz-D-2687s-v1-foto-redline.jpg"              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color:"blue"}}>Munich – City Exploration</p>
              <p>Breakfast at the hotel<br/>
Begin your day with a Hop-On Hop-Off sightseeing tour, offering the perfect introduction to
Munich’s most iconic landmarks. Experience the city from an open-top bus, enjoying panoramic
views of its historic buildings, museums, and charming neighbourhoods. Feel free to explore at your
own pace, hopping off at the stops that interest you most.<br/>
Later, visit the magnificent Nymphenburg Palace, the former summer residence of Bavaria’s royal
family. Wander through its lavish halls, admire the grand Baroque architecture, and stroll through
the beautifully landscaped gardens that reflect centuries of royal history.<br/>
Overnight Stay in Munich</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media.istockphoto.com/id/509641529/photo/historic-town-of-salzburg-with-salzach-river-in-summer-austria.jpg?s=612x612&w=0&k=20&c=VPCNTdghkFuqzE4HKlJHfALOF2NqzYk6xUYIu3pXF-g="              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{color:"blue"}}>Munich – Salzburg</p>
              <p>Breakfast at the hotel<br/>
This morning, travel from Munich to the picturesque city of Salzburg. Upon arrival, transfer to your
hotel and settle in. The rest of the day is free to explore the city at your own pace—perhaps take a
walk along the Salzach River or enjoy the delightful charm of Salzburg’s Old Town, lined with cafés,
boutiques, and baroque architecture.<br/>
Overnight Stay in Salzburg
</p>
            </div>
          </div>

          <div className="day-card">
            <img
               src="https://www.meininger-hotels.com/blog/app/uploads/2021/05/shutterstock_557948761-min-1024x671.jpg"              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color:"blue"}}>Salzburg – The Original Sound of Music Tour</p>
              <p>Breakfast at the hotel<br/>
Today, enjoy a delightful half-day tour inspired by The Sound of Music. Immerse yourself in the world of the beloved film as you visit iconic locations featured in the movie. Travel through
picturesque countryside, sparkling lakes, and historic landmarks while hearing fascinating stories
and behind-the-scenes anecdotes. The breathtaking landscapes and nostalgic music make this
experience truly memorable.<br/>
Overnight Stay in Salzburg.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKxZ3T-EN_aN92spmqWJoJUmb7jlmGSB-1UQ&s"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color:"blue"}}>Salzburg – Innsbruck</p>
              <p>Breakfast at the hotel<br/>
Leave Salzburg behind and travel by train to the charming alpine city of Innsbruck. After checking in
at your hotel, the rest of the day is yours to enjoy. Stroll through the medieval Old Town, admire the
famous Golden Roof, or simply soak in the stunning mountain views that surround the city.<br/>
Overnight Stay in Innsbruck.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo-3ZkCxU_v925Z5U8E8HuCgCgqH_UH1NeIQ&s"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{color:"blue"}}>Innsbruck – Swarovski Crystal Worlds Experience</p>
              <p>Breakfast at the hotel<br/>
Today brings a magical visit to Swarovski Crystal Worlds, a sparkling attraction that blends art,
imagination, and innovation. Explore the Chambers of Wonder, marvel at dazzling crystal
installations, and wander through beautifully designed outdoor spaces, including the breathtaking
Crystal Cloud. It’s an enchanting experience suitable for visitors of all ages.<br/>
Overnight Stay in Innsbruck.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://thumbs.dreamstime.com/b/airport-innsbruck-check-19615644.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{color:"blue"}}>Innsbruck</p>
              <p>Breakfast at the hotel<br/>
After checking out, proceed to Innsbruck Airport for your onward flight. Get back with beautiful
memories of Bavaria’s culture, Salzburg’s musical charm, and Innsbruck’s alpine elegance.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default MunichInnsbruckSalzburgLanding;