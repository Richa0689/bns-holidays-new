import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const GermanyLanding3 = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://cdn.kimkim.com/files/a/images/e28c94ae4c1bb7b133f6039ab141910c3581949d/original-d8146eba4d5c03ddb9a619c95108daf4.jpg"
          alt="Germany Austria Tour"
        />

        <div className="hero-content">
          <h1>Germany & Austria</h1>

          <p>
            Munich • Innsbruck • Salzburg • Vienna
          </p>

          <Link to="/germany">
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
              src="https://images.unsplash.com/photo-15295121783-8a321d551ad2?w=600"
              alt="Munich"
            />
            <p>Munich City</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-15764706515-aa95265c5abc?w=600"
              alt="Innsbruck"
            />
            <p>Innsbruck Alps</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo91553895911-0055eca6402d?w=600"
              alt="Salzburg"
            />
            <p>Salzburg Old Town</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/phot1516550893923-42d28e5677af?w=600"
              alt="Vienna"
            />
            <p>Vienna Architecture</p>
          </div>

         

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏔️ Stunning Alpine Landscapes</div>
          <div>🏰 Historic European Cities</div>
          <div>🎻 Austrian & Bavarian Cultural Experience</div>
          <div>📸 Perfect Multi-Country Europe Tour</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore Germany & Austria in 9 Days</h2>

        <p>
          Experience mountains, culture and iconic European cities
        </p>

        <br />

        <Link to="/germany">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>09 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1521295121783-21d551ad2?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 1</h3>

              <p style={{ color: "blue" }}>
                Munich <br/>Welcome to Germany –
              </p>

              <p>
               Welcome to Munich! Upon arrival at Munich Airport, enjoy a private transfer to your hotel. Check in,
relax, and spend the evening exploring the vibrant streets around Marienplatz, Viktualienmarkt, or
Munich’s traditional Bavarian cafés.<br/>
Overnight Stay in Munich

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-15124539798-5ea266f8880c?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 2</h3>

              <p style={{ color: "blue" }}>
                Munich
              </p>

              <p>
                Breakfast at Hotel.<br/>
After breakfast, proceed for your Neuschwanstein & Linderhof Castle Full-Day Trip (included). Visit
two of King Ludwig II’s most iconic castles — the fairy-tale Neuschwanstein and the beautiful
Linderhof Palace. Enjoy guided insights into Bavarian royal history, stunning Alpine scenery, and
picturesque villages along the way.<br/>
Return to Munich and spend the evening at leisure — explore Munich Old Town, the English Garden,
or enjoy Bavarian cuisine.<br/>
Overnight Stay in Munich
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-150576470651aa95265c5abc?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 3</h3>

              <p style={{ color: "blue" }}>
                Munich – Innsbruck
              </p>

              <p>
                Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Munich Hotel to Train Station. Board your train from Munich to Innsbruck.
Upon arrival at Innsbruck Station, enjoy a private transfer to your hotel. Check in and explore the
medieval Old Town, the Golden Roof, or the scenic river promenade.<br/>
Overnight Stay in Innsbruck
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-15005308597-b586d89ba3ee?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 4</h3>

              <p style={{ color: "blue" }}>
                Innsbruck – Swarovski Crystal Worlds Entrance Ticket
              </p>

              <p>
               Breakfast at Hotel.<br/>
After breakfast, visit Swarovski Crystal Worlds (entrance ticket included). Discover the Chambers of
Wonder, immersive crystal art installations, and the magical outdoor garden designed to delight
visitors of all ages. Experience the Crystal Cloud, Mirror Pool, and unique exhibits that make this one
of Austria’s most iconic attractions.<br/>
Return to Innsbruck and enjoy the rest of the day at leisure — explore Nordkette viewpoints, local
cafés, or Maria-Theresien-Strasse.<br/>
Overnight Stay in Innsbruck
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1491553911-0055eca6402d?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 5</h3>

              <p style={{ color: "blue" }}>
               Innsbruck - Salzburg
              </p>

              <p>
                Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Innsbruck Hotel to Station. Board your train from Innsbruck to Salzburg. Upon
arrival at Salzburg Station, enjoy a private transfer to your hotel. Check in and relax, or spend the
evening exploring Salzburg’s Old Town, Mirabell Gardens, or the vibrant riverfront..<br/>
Overnight Stay in Salzburg

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-15026028657-3e91760cbb34?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 6</h3>

              <p style={{ color: "blue" }}>
                Salzburg – Half Day Original Sound of Music Tour on Shared Basis
              </p>

              <p>
                Breakfast at Hotel.<br/>
After breakfast, proceed for your Half Day Original Sound of Music Tour (shared basis, included).
Visit famous filming locations from the movie, including Mirabell Gardens, Leopoldskron Palace,
Lake District views, and the iconic gazebo. Learn behind-the-scenes stories of the Von Trapp family
and the musical legacy of Salzburg.<br/>
Afternoon and evening at leisure — explore the Hohensalzburg Fortress, Getreidegasse lanes, or
enjoy riverside cafés.<br/>
Overnight Stay in Salzburg

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-15165508933-42d28e5677af?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 7</h3>

              <p style={{ color: "blue" }}>
               Salzburg - Vienna
              </p>

              <p>
                Breakfast at Hotel. Check out from the Hotel.
Private transfer from Salzburg Hotel to Station. Board your train from Salzburg to Vienna. Upon
arrival at Vienna Station, enjoy a private transfer to your hotel. Check in and explore Vienna’s
historic streets, elegant squares, and famous coffee houses.<br/>
Overnight Stay in Vienna
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-151655089392328e5677af?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 8</h3>

              <p style={{ color: "blue" }}>
                Vienna
              </p>

              <p>
                Breakfast at Hotel.<br/>
After breakfast, proceed for the Schönbrunn Palace & Gardens Skip-the-Line Tour (shared basis,
included). Explore the magnificent imperial palace, walk through opulent rooms once used by the
Habsburgs, and enjoy the beautifully landscaped Baroque gardens.<br/>
Spend the rest of your day at leisure — visit the Hofburg Palace area, Belvedere Palace, or explore
Vienna’s shopping districts.<br/>
Overnight Stay in Vienna
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b589ba3ee?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 9</h3>

              <p style={{ color: "blue" }}>
                Vienna
              </p>

              <p>
                Breakfast at Hotel. Check out from the Hotel.<br/>
Private transfer from Vienna Hotel to Airport for your onward flight.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default GermanyLanding3;