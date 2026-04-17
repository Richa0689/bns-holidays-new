import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const KochiLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/de/f0/eb/backwater-tourism.jpg?w=700&h=-1&s=1"
          alt="Kochi"
        />

        <div className="hero-content">
          <h1>Best of Kochi</h1>
          <p>Culture • Beaches • Heritage</p>

          <Link to="/kochi">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://media1.thrillophilia.com/filestore/iyhdsi3ipex60his53wn4duhig2r_shutterstock_1688004694.jpg" alt="" />
            <p>Fort Kochi Streets</p>
          </div>

          <div className="highlight-card">
            <img src="https://img.avianexperiences.com/attractions/0a61c0a8-baba-462a-8246-dca4038bae03" alt="" />
            <p>Chinese Fishing Nets</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.ahotellife.com/wp-content/uploads/2023/04/Search-3.jpg" alt="" />
            <p>Colonial Architecture</p>
          </div>

          <div className="highlight-card">
            <img src="https://we-dpms.com/treks-trails/wp-content/uploads/2023/03/kerala-beaches.jpg" alt="" />
            <p>Sunset Beaches</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏝️ Coastal Beauty</div>
          <div>🏛️ Rich Heritage</div>
          <div>🎭 Cultural Experiences</div>
          <div>🍛 Local Cuisine</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore the Queen of Arabian Sea</h2>
        <p>4 Days of culture & relaxation</p><br />

        <Link to="/kochi">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>4 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://www.cial.aero/images/pressroom.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Kochi & Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media1.thrillophilia.com/filestore/216xc7pdhgqnhf4jm5mw6uqgjdhv_Indo-Portugese%20Museum%201.jpg?w=400&dpr=2" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Fort Kochi & Heritage Walk</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/09/a6/ab/92.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Beach Visit & Cultural Show</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.mappls.com/place/6O6G7R_1648801700521_0.png" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default KochiLanding;