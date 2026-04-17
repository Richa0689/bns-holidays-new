import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const ChennaiLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://content.skyscnr.com/m/4ec3560c93bea52e/original/IN_B2_A135_N_3L1_1.jpg?resize=1212px:683px"
          alt="Chennai Tour"
        />

        <div className="hero-content">
          <h1>Best of Chennai</h1>
          <p>Beaches • Culture • Heritage</p>

          <Link to="/Pages/chennai">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/marina-beach-chennai-tamil-nadu-4-attr-hero?qlt=82&ts=1726655007714" alt="" />
            <p>Marina Beach</p>
          </div>

          <div className="highlight-card">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/1-shore-temple-mamallapuram-2-attr-hero?qlt=82&ts=1726654555333" alt="" />
            <p>Mahabalipuram Temples</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.tamilnadutourism.com/images/chennai/card/kapaleeshwarar-temple.webp" alt="" />
            <p>Kapaleeshwarar Temple</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.tourmyindia.com/states/tamilnadu/images/fort-st-Georges1-1.jpg" alt="" />
            <p>Fort St. George</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🌊 Beautiful Beaches</div>
          <div>🏛️ Rich Heritage</div>
          <div>🍛 South Indian Cuisine</div>
          <div>🚗 Comfortable Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore Chennai</h2>
        <p>4 Days of culture & coastal beauty</p><br />

        <Link to="/Pages/chennai">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>4 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/49644911.jpg?k=483bd136346a08a0be8498ee67981822b2465053217f2a0ae7f87c73c115ed5f&o=" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/5c/20/a9/nice-places-to-see-at.jpg?w=700&h=-1&s=1" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Marina Beach & City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/36/89/a9.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Mahabalipuram Excursion</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.tripsavvy.com/thmb/Eo2NPF6M7XlLmRaiG_PPahQ-45k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-917438022-5ab7c9eb8023b900368d6810.jpg" alt="" />
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

export default ChennaiLanding;