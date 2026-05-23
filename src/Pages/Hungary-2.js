import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const HungaryLanding3 = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.luxurygold.com/media/epsotnsb/czech-republic-luxury-tours-travel-guide.jpeg?center=0.4923572164072419%2C0.500010000200004&format=webp&mode=crop&width=900&height=600&quality=80"
          alt="Budapest Vienna Prague Tour"
        />

        <div className="hero-content">
          <h1>Budapest + Vienna + Prague</h1>

          <p>
            Explore the elegance of Vienna, the beauty of Budapest,
            and the historic charm of Prague on this unforgettable
            European getaway.
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
              src="https://images.unsplash.com/photo-1549877452-9c387954fbc2?w=600"
              alt=""
            />
            <p>Budapest Parliament</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600"
              alt=""
            />
            <p>Vienna City Center</p>
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
            <p>Lake Balaton</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Explore Historic Capitals</div>
          <div>📸 Stunning Architecture</div>
          <div>🍽️ European Food & Culture</div>
          <div>🚌 Comfortable Guided Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Central Europe</h2>

        <p>
          Book your Budapest, Vienna & Prague journey today
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
              src="https://images.unsplash.com/photo-1549877452-9c387954fbc2?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{color:"blue"}}> Budapest <br/>Budapest City Highlights Sightseeing Cruise – Entrance Ticket & Tour (Included)</p>
              <p>Welcome to Hungary –<br/>
Welcome to Budapest! Upon arrival at Budapest Airport, enjoy a private transfer to your hotel. Check
in, relax, and spend the evening walking along the Danube Promenade or exploring the lively streets
around Váci Utca at your own pace.<br/>
Overnight Stay in Budapest</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1549877452-9c387954fbc2?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color:"blue"}}>Budapest - Budapest City Highlights Sightseeing Cruise – Entrance Ticket & Tour (Included)</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, proceed for your Budapest City Highlights Sightseeing Cruise (ticket included). Sail
along the Danube and enjoy stunning views of the Parliament Building, Buda Castle, Chain Bridge,
Gellért Hill and the picturesque riverbanks of Budapest. Take in the city’s iconic architecture while
listening to informative commentary during the cruise.<br/>
Rest of the day is free for leisure — explore Fisherman’s Bastion, Heroes’ Square, or Budapest’s
famous thermal baths.<br/>
Overnight Stay in Budapest</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{color:"blue"}}>Budapest – Vienna</p>
              <p>Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Budapest Hotel to the Train Station. Board your train from Budapest to Vienna.
Upon arrival at Vienna Station, enjoy a private transfer to your hotel. Check in and spend the
evening strolling around the Ringstrasse, St. Stephen’s Cathedral area, or visiting a traditional
Viennese café.<br/>
Overnight Stay in Vienna</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color:"blue"}}>Vienna</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, proceed for the Schönbrunn Palace & Gardens Skip-the-Line Tour (shared basis,
included). Visit the magnificent imperial residence, stroll through the ornate halls, and learn about
the Habsburg dynasty. Enjoy the exquisite Baroque gardens, fountains, and viewpoints surrounding
the palace grounds.<br/>
Return to the city center and enjoy your afternoon at leisure — explore the Hofburg Palace,
Rathausplatz or Vienna’s classical music and coffee culture.<br/>
Overnight Stay in Vienna</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color:"blue"}}>Vienna - Prague</p>
              <p>Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Vienna Hotel to Station. Board your train from Vienna to Prague. Upon arrival
at Prague Station, enjoy a private transfer to your hotel. Check in and relax, or take an evening walk
across Charles Bridge and explore Old Town Square.<br/>
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
              <p style={{color:"blue"}}>Prague - Prague Castle Skip-the-Line Ticket with Audioguide</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, proceed to visit Prague Castle using your Skip-the-Line Ticket with Audioguide
(included). Explore St. Vitus Cathedral, the Old Royal Palace, St. George’s Basilica, and the charming
Golden Lane, while learning about the history of the world’s largest ancient castle complex.
Afternoon and evening at leisure — explore the Astronomical Clock, Vltava riverside, or enjoy cafés
and local markets in the Old Town area.<br/>
Overnight Stay in Prague</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1549877452-9c387954fbc2?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{color:"blue"}}>Prague</p>
              <p>Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Prague Hotel to Airport for your onward flight</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default HungaryLanding3;