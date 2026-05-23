import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const HungaryLanding5 = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.luxurygold.com/media/epsotnsb/czech-republic-luxury-tours-travel-guide.jpeg?center=0.4923572164072419%2C0.500010000200004&format=webp&mode=crop&width=900&height=600&quality=80"
          alt="Vienna Budapest Prague Tour"
        />

        <div className="hero-content">
          <h1>Vienna + Budapest + Prague</h1>

          <p>
            Experience the charm of Central Europe with a journey through
            Vienna, Budapest, and Prague filled with history, culture,
            and breathtaking architecture.
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
              src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600"
              alt=""
            />
            <p>Vienna City Tour</p>
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
              src="https://images.unsplash.com/photo-1524041255072-7da0525d6b24?w=600"
              alt=""
            />
            <p>Prague Castle</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=600"
              alt=""
            />
            <p>Danube River Cruise</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Explore Historic Capitals</div>
          <div>📸 Beautiful European Architecture</div>
          <div>🍽️ Enjoy Local Cuisine & Culture</div>
          <div>🚌 Comfortable Guided Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Discover Central Europe</h2>

        <p>
          Book your Vienna, Budapest & Prague tour today
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
        <h2>7 Days Tour Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{color:"blue"}}> Vienna <br/>Welcome to Austria –</p>
              <p>Welcome to Vienna! Upon arrival at Vienna Airport, enjoy a private transfer to your hotel. Check in,
relax, and spend the evening exploring the elegant streets around the Ringstrasse, St. Stephen’s
Cathedral, or Vienna’s classic cafés at your leisure<br/>
Overnight Stay in Vienna</p>

            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color:"blue"}}>Vienna</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, proceed for the Schönbrunn Palace & Gardens Skip-the-Line Tour (shared basis,
included). Explore the magnificent imperial residence, wander through the lavishly decorated state
rooms, and learn about the lives of the Habsburg rulers. Stroll through the beautifully manicured
Baroque gardens and enjoy spectacular viewpoints across the palace grounds.<br/>
Return to the city center and enjoy the rest of the day at leisure — explore Hofburg Palace, Belvedere,
or Vienna’s vibrant shopping streets.<br/>
Overnight Stay in Vienna</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1549877452-9c387954fbc2?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{color:"blue"}}>Vienna - Budapest</p>
              <p>Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Vienna Hotel to Station. Board your train from Vienna to Budapest. Upon
arrival at Budapest Station, enjoy a private transfer to your hotel. Check in and spend the evening
relaxing or exploring the beautiful Danube riverside illuminated by night.<br/>
Overnight Stay in Budapest</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1549877452-9c387954fbc2?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color:"blue"}}>Budapest</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, enjoy your City Highlights Sightseeing Cruise (included). Sail along the Danube River
and admire iconic landmarks such as the Hungarian Parliament Building, Buda Castle, Chain Bridge,
Gellért Hill, and the historic riverbanks of Budapest. Listen to informative audio commentary as you
experience the city from a unique perspective.<br/>
Afternoon and evening at leisure — explore Fisherman’s Bastion, stroll around Váci Utca, or unwind
in one of Budapest’s famous thermal baths.<br/>
Overnight Stay in Budapest</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1524041255072-7da0525d6b24?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color:"blue"}}>Budapest – Prague</p>
              <p>Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Budapest Hotel to Train Station. Board your train from Budapest to Prague.
Upon arrival at Prague Station, enjoy a private transfer to your hotel. Check in and spend the
evening walking through Old Town Square, Charles Bridge, or the lively café districts.<br/>
Overnight Stay in Prague</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1524041255072-7da0525d6b24?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{color:"blue"}}>Prague - Prague Castle Skip-the-Line Ticket with Audio guide</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, visit Prague Castle using your Skip-the-Line Ticket with Audio guide (included).
Explore St. Vitus Cathedral, the Old Royal Palace, St. George’s Basilica, and the charming Golden
Lane while learning about the history of one of the world’s largest ancient castle complexes.
Rest of the day is free — discover the Astronomical Clock, stroll along the Vltava River, or enjoy local
markets and cafés.<br/>
Overnight Stay in Prague</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{color:"blue"}}>Prague</p>
              <p>Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Prague Hotel to Prague Airport for your onward flight.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default HungaryLanding5;