import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxuryKochiLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/2e/d4/6f/e9/aerial-view.jpg"
          alt="Luxury Kochi Tour"
        />

        <div className="hero-content">
          <h1>Luxury Kochi Tour</h1>
          <p>Luxury • Backwaters • Premium Experience</p>

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
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/12/a5/55/7d/forte-kochi.jpg" alt="" />
            <p>Luxury Stay in Kochi</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.pelago.com/img/products/IN-India/cochin-private-tour-of-heritage-and-backwaters-from-cochin-hotels-or-cochin-port/44fb31b8-8d16-414b-a3eb-9a689f46823a_cochin-private-tour-of-heritage-and-backwaters-from-cochin-hotels-or-cochin-port.jpg" alt="" />
            <p>Private Heritage Tour</p>
          </div>

          <div className="highlight-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/89/8e/7b.jpg" alt="" />
            <p>Alleppey Houseboat</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.civitatis.com/f/india/cochin/paseo-casa-flotante-fort-kochi-589x392.jpg" alt="" />
            <p>Premium Backwater Cruise</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏨 Premium Hotels</div>
          <div>🚤 Private Houseboat</div>
          <div>🍽️ Fine Dining</div>
          <div>🌴 Exclusive Experience</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Luxury Kerala</h2>
        <p>7 Days of comfort & elegance</p><br />

        <Link to="/kochi">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>7 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/12/a5/55/7d/forte-kochi.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Kochi & Luxury Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/de/f0/eb/backwater-tourism.jpg?w=700&h=-1&s=1" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Private Kochi Sightseeing Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media1.thrillophilia.com/filestore/r0vpdnja7h511wjpa2f5aangdacu_image%20-%202025-02-20T131104,447_enhanced.png?w=400&dpr=2" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Transfer to Alleppey & Luxury Houseboat</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://static.wixstatic.com/media/ed75e9_a632f4cd3b5444549d4a4f12be78f530~mv2_d_3119_2079_s_2.jpg/v1/fill/w_2500,h_1666,al_c/ed75e9_a632f4cd3b5444549d4a4f12be78f530~mv2_d_3119_2079_s_2.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Backwater Cruise & Relaxation</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.ramadakochi.com/blogs/wp-content/uploads/2023/05/3.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Resort Stay & Leisure</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://wanderon-images.gumlet.io/blogs/new/2024/11/flea-markets-of-kochi.jpg?auto=compress%2Cformat&w=768" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Explore Local Culture & Markets</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.mappls.com/place/6O6G7R_1648801700521_0.png" alt="" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default LuxuryKochiLanding;