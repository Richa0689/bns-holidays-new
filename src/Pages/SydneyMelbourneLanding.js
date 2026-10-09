import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const SydneyMelbourneLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://cdn.kimkim.com/files/a/images/2958db8b9cbc71114e424de9a10f1861f63b1ca5/original-bb5969c3d48f2eaa4c6a23bf45c8f92f.jpg"
          alt="Sydney Melbourne"
        />
        <div className="hero-content">
          <h1>Sydney & Melbourne</h1>
          <p>6 Days • 2 Cities • 1 Country</p>
          <Link to="/destinations/australia">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://www.absolutely-australia.com.au/things-to-see/new-south-wales/image/l/sydney-opera-house.jpg?__ver=1686808110" alt="" />
            <p>Sydney Opera House</p>
          </div>

          <div className="highlight-card">
            <img src="https://whileyoustayhome.com/wp-content/uploads/2024/07/1-Bondi-Beach-and-more-Sydney-beaches-australia-while-you-stay-home-15.jpg" alt="" />
            <p>Bondi Beach</p>
          </div>

          <div className="highlight-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Melbourne_skyline_sor.jpg" alt="" />
            <p>Melbourne City</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🌆 Iconic Cities</div>
          <div>🏖️ Beaches & Views</div>
          <div>🛍️ Shopping & Culture</div>
          <div>🍽️ Food Experience</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Sydney & Melbourne Trip</h2>
        <p>Starting from ₹1,45,000</p><br />
        <Link to="/australia">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>6 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://thumbs.dreamstime.com/b/people-waiting-arrivals-brisbane-airport-queensland-australia-mar-bne-has-third-highest-number-domestic-connections-384617833.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Sydney</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1667162813060-f02b7699a30d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Sydney Opera House & Harbour Bridge</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=400,height=265,dpr=2/tour_img/6f0eb832a6fbeacbe0670a7f5baf072d9c5c88327fc73678ad13b61a64b387b8.jpeg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Bondi Beach & City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://thewanderbug.com/wp-content/uploads/2019/10/Melbourne-Australia_Hero_3.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Travel to Melbourne</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.istockphoto.com/id/1129148532/photo/interior-view-of-royal-arcade-full-of-people-people-in-melbourne-australia.jpg?s=612x612&w=0&k=20&c=lyoAQWEB98RM7SL71HQfs6ptPQiRvHkL02dhctOs_Xw=" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Melbourne City Tour & Shopping</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://c8.alamy.com/comp/W6TXCX/departures-gate-at-brisbane-airport-international-terminal-queensland-qld-australia-W6TXCX.jpg" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default SydneyMelbourneLanding;