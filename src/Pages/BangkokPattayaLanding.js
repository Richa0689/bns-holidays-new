import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const BangkokPattayaLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://www.travelandleisure.com/thmb/nDDNqO2EctQhiIfZrxeXTF47zhE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-koh-phi-phi-PLACESTHAILAND1023-09b9d347b3cd4844b4ae19e4e06a9a6d.jpg"
          alt="Bangkok Pattaya"
        />
        <div className="hero-content">
          <h1>Bangkok & Pattaya</h1>
          <p>City Life. Beaches. Night Fun.</p>
          <Link to="/thailand">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/e3/e6/92/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_cd56231660940ec6f969" />
            <p>Bangkok Temples</p>
          </div>

          <div className="highlight-card">
            <img src="https://cdn.kimkim.com/files/a/images/e07d7b506bbfacc0f20c4b5aadf98f948345e737/original-451bc13b2bf831633ffb88ee321cf71e.jpg" />
            <p>Pattaya Beach</p>
          </div>

          <div className="highlight-card">
            <img src="https://img.avianexperiences.com/attractions/52358e01-bfdb-4e98-b18a-0b5d25235073" />
            <p>Coral Island</p>
          </div>

          <div className="highlight-card">
            <img src="https://yourthaiguide.com/wp-content/uploads/2025/08/your-thai-guide-bangkok-floating-markets-3.jpg" />
            <p>Floating Market</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏙️ Vibrant City Life</div>
          <div>🏝️ Beach Experience</div>
          <div>🍜 Street Food</div>
          <div>🎉 Nightlife</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Book Bangkok & Pattaya Tour</h2>
        <p>Starting at ₹75,000 | EMI ₹3,500/month</p><br />
        <Link to="/thailand">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>5 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://liveandletsfly.com/wp-content/uploads/2021/12/Bangkok-BKK-Arrival-2021-4.jpeg" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Bangkok</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/12/5f/9e/bb.jpg" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Temple Tour & City Sightseeing</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/16/bb/76.jpg" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Transfer to Pattaya</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://res.klook.com/images/w_1200,h_630,c_fill,q_65/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/net4xhzgfs66pnzagjro/KohLan(CoralIsland)SnorkelingTourinPattaya,Thailand-KlookIndia.jpg" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Coral Island Tour & Beach Activities</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://thumbs.dreamstime.com/b/shopping-departure-halls-suvarnabhumi-international-airport-bangkok-capital-thailand-th-october-stock-image-as-jpg-341434718.jpg" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Shopping & Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default BangkokPattayaLanding;