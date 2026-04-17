import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const HouseboatSrinagarLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://i0.wp.com/www.traveldiaryparnashree.com/wp-content/uploads/2023/06/IMG_5814-2.jpg?resize=1080%2C675&ssl=1"
          alt="Srinagar Houseboat Experience"
        />
        <div className="hero-content">
          <h1>Houseboat Experience</h1>
          <p>Dal Lake. Luxury Stay. Peaceful Vibes.</p>
          <Link to="/srinagar">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/dal-lake-srinagar-jammu-&-kashmir-2-attr-hero?qlt=82&ts=1726816668703" alt="" />
            <p>Dal Lake</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/25/48/f8/shiraz-houseboats-group.jpg?w=900&h=500&s=1" alt="" />
            <p>Luxury Houseboat</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.tourmyindia.com/states/jammu-kashmir/image/shikara-ride-jk3.jpg" alt="" />
            <p>Shikara Ride</p>
          </div>

          <div className="highlight-card">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/43443270.jpg?k=081e6bec2a7c742ec8b04fe51240baaecedaef78d8fd47b046fa9536cb3633a7&o=" alt="" />
            <p>Snow Views</p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE */}
      <div className="why-section">
        <h2>Why Stay in Houseboat?</h2>

        <div className="why-grid">
          <div>🛶 Unique Floating Stay</div>
          <div>🏔️ Mountain Views</div>
          <div>🌊 Peaceful Water Life</div>
          <div>📸 Instagram Worthy Experience</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Luxury Houseboat Stay</h2>
        <p>Book your unforgettable Kashmir experience</p><br />
        <Link to="/srinagar">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>4 Days Houseboat Experience</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://q-xx.bstatic.com/xdata/images/hotel/max500/689960569.jpg?k=56b1b3c03f8710f41ec7b325e81e1ab1add0007193403e8d9f52218cd4a3931f&o=" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Srinagar & Houseboat Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.tourmyindia.com/socialimg/shikara-ride-in-kashmir.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Dal Lake Shikara Ride</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/1-pari-mahal-srinagar-jammu-and-kashmir-attr-hero?qlt=82&ts=1726816260762" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Local Sightseeing & Relaxation</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPbLSaDEjaN7aXlQEdzJQ_L6jcpdEvQ5kZw&s" alt="" />
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

export default HouseboatSrinagarLanding;