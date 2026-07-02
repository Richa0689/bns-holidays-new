import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const BudapestLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://wallpaperaccess.com/full/8345337.jpg"
          alt="Budapest"
        />
        <div className="hero-content">
          <h1>Budapest City Explorer</h1>
          <p>5 Days • 1 Country • 8 Dates • Europe’s Gem</p>

          <Link to="/Pages/hungary">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://images8.alphacoders.com/536/thumb-1920-536258.jpg" alt="" />
            <p>Budapest Parliament</p>
          </div>

          <div className="highlight-card">
            <img src="https://wallpaperaccess.com/full/5970610.jpg" alt="" />
            <p>Danube River</p>
          </div>

          <div className="highlight-card">
            <img src="https://wallpapers.com/images/hd/8k-ultra-hd-szechenyi-chain-bridge-jiay1ztj2wujwn16.jpg" alt="" />
            <p>Chain Bridge</p>
          </div>

          <div className="highlight-card">
            <img src="https://tse1.mm.bing.net/th/id/OIP.vyuDMsXe6hmq2Ofs6G-IIAHaHa?r=0&cb=thfc1falcon4&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
            <p>Thermal Baths</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Choose Budapest?</h2>

        <div className="why-grid">
          <div>🏰 Historic Architecture</div>
          <div>🌉 Danube River Views</div>
          <div>♨️ Thermal Bath Culture</div>
          <div>🍷 European Nightlife</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Budapest Trip Now</h2>
        <p>Discover the heart of Hungary</p>
        <br />

        <Link to="/Pages/hungary">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>5 Days Budapest Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://assets-global.website-files.com/60e43c7d6d05b671dff0dc1a/64f9a9e69165aa480e2191dd_Pest%20Walking%20Tour%20(9).webp" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Budapest & Leisure Walk</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.wondersoflondon.com/wp-content/uploads/free-tour-houses-of-parliament.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>City Tour & Parliament Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://afar.brightspotcdn.com/dims4/default/a314cc0/2147483647/strip/true/crop/3000x1592+0+500/resize/2880x1528!/quality/90/?url=https:%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Ffd%2F6e%2F83d44cde4e9eb5ef9786197077a2%2Famamagna-extended-centered-lp-md-3.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Danube River Cruise</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://deviatges.com/wp-content/uploads/2025/02/thermal-baths-near-Zakopane.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Thermal Baths Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://thekandytravels.com/assets/bangkok-shopping-departure-DCPv0rJg.jpg" alt="" />
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

export default BudapestLanding;