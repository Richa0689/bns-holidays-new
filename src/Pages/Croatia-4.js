// CroatiaLanding4.js

import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const CroatiaLanding4 = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.croatiatimestravel.co.nz/library/trips/tours/signature-tours/delights-of-croatia-slovenia-sg-tour-ctt-zs-2025/delights-of-croatia-slovenia-sg-tour-ctt-zs-2025-banner.jpg"
          alt="Croatia Slovenia Tour"
        />

        <div className="hero-content">
          <h1>Two Capitals, One Journey</h1>
          <p>Zagreb • Ljubljana • Europe Escape</p>

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
              src="https://tse2.mm.bing.net/th/id/OIP.zinISmdhavE4HnuAkDW9KwHaFe?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Zagreb"
            />
            <p>Zagreb City Tour</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://travel.usnews.com/images/ljubljana_old_town_staro_mesto_tfJIbN9.jpg"
              alt="Ljubljana"
            />
            <p>Ljubljana Old Town</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.SIfui7Xuy4Zj-fJYt99hWQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Architecture"
            />
            <p>European Architecture</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.ukM8ahostltGFKe6aroDnQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Lake"
            />
            <p>Lake Bled Excursion</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🌍 Two Beautiful Capitals</div>
          <div>🏰 Historic Streets</div>
          <div>📸 Scenic Landscapes</div>
          <div>🍽️ European Food Experience</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Croatia & Slovenia</h2>

        <p>
          Book your Zagreb & Ljubljana getaway today
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
              src="https://www.travellingking.com/wp-content/uploads/2023/04/Zagreb-Zagreb-city-downtown.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{color:"blue"}}>Zagreb <br/>Arrival in Zagreb: Close to the city, Close to the heart</p>
              <p>
                Welcome to Zagreb, Croatia’s vibrant capital city, where historic architecture, charming streets, and
lively squares set the stage for your Central European adventure. Upon arrival at Zagreb Airport, a
private transfer will meet you and escort you seamlessly to your hotel in the city.
Spend the remainder of the day at leisure, soaking in Zagreb’s unique blend of culture, art, and café
life. Whether you choose to stroll through Ban Jelačić Square or relax at a local café, Zagreb
welcomes you with warmth and charm.<br/>
Overnight Stay in Zagreb</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://travel-buddies.com/wp-content/uploads/2024/10/2_zagreb-walking-tour-of-city-center-funicular-ww2-tunnels.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color:"blue"}}>Zagreb – City & WWII Tunnels Walking Tour on Shared Basis</p>
              <p>Breakfast at Hotel.<br/>
Today, proceed for your shared City and WWII Tunnels Walking Tour, a fascinating journey through
Zagreb’s past and present. This immersive tour takes you through notable city landmarks before
descending into the historical WWII tunnels beneath the city. Expert guides bring the wartime stories
and architectural history to life, making this an essential experience for culture and history lovers.
After the tour, you may continue exploring Zagreb at your own pace.<br/>
Overnight Stay in Zagreb</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://wallpapercave.com/wp/wp4289264.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{color:"blue"}}>Zagreb – Ljubljana</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, enjoy a private transfer from your Zagreb hotel to Zagreb Airport for your onward
journey.Upon arrival at Ljubljana Airport, enjoy a comfortable private transfer to your hotel in
Ljubljana.Ljubljana, the charming capital of Slovenia, is known for its beautiful riverfront, elegant
bridges, vibrant café culture, and picturesque Old Town dominated by the hilltop Ljubljana Castle.The
rest of the day is free for you to explore the city at leisure and soak in the relaxed atmosphere of this
delightful European capital.<br/>
Overnight Stay in Ljubljana.
</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.Ltlfeu3I2zRqTs2kVVYVwAHaEf?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color:"blue"}}>Highlight of the Day: Postojna Cave & Predjama Castle Tour</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, proceed for the Postojna Cave and Predjama Castle Tour on shared basis from
Ljubljana.<br/>
Begin your journey with a visit to the spectacular Postojna Cave, one of the largest and most famous
karst cave systems in the world. Enjoy a unique underground train ride followed by a guided walk
through magnificent chambers filled with stunning stalactites, stalagmites, and fascinating rock
formations.Continue your excursion with a visit to the impressive Predjama Castle, dramatically built
into the mouth of a towering cliff. This medieval castle is one of the most picturesque in Europe and
offers fascinating stories of knights, legends, and centuries of history.After the tour, return to
Ljubljana.<br/>
Overnight Stay in Ljubljana.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20221210/pngtree-sunset-above-ljubljana-aerial-view-cityscape-scene-cathedral-photo-image_23352356.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color:"blue"}}>Ljubljana</p>
              <p>Breakfast at Hotel.<br/>
After a delightful stay in Slovenia, proceed to Ljubljana Airport with a private transfer for your
onwards journey.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default CroatiaLanding4;