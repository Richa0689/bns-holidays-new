import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const SrinagarLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.tourmyindia.com/states/jammu-kashmir/srinagar-img/srinagar-banner.webp"
          alt="Srinagar"
        />
        <div className="hero-content">
          <h1>Best of Srinagar</h1>
          <p>Paradise on Earth. Lakes. Mountains.</p>
          <Link to="/srinagar">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://www.tourmyindia.com/states/jammu-kashmir/image/dal-lake-s.jpg" alt="" />
            <p>Dal Lake</p>
          </div>

          <div className="highlight-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/4f/37/3a.jpg" alt="" />
            <p>Gulmarg</p>
          </div>

          <div className="highlight-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/3a/c3/3d.jpg" alt="" />
            <p>Pahalgam</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.tourmyindia.com/states/jammu-kashmir/image/gurkha-houseboats2.jpg" alt="" />
            <p>Houseboats</p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE */}
      <div className="why-section">
        <h2>Why Visit Srinagar?</h2>

        <div className="why-grid">
          <div>🛶 Shikara Rides</div>
          <div>🏔️ Snowy Mountains</div>
          <div>🌸 Mughal Gardens</div>
          <div>📸 Scenic Beauty</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Kashmir Trip</h2>
        <p>Book now and explore Srinagar’s beauty</p><br />
        <Link to="/srinagar">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>5 Days Srinagar Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://www.bharatbooking.com/admin/webroot/img/uploads/holiday-package-gallery/1701072253_426347-4n-5d-srinagar-holiday-package-slider-image.webp" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Srinagar & Houseboat Stay</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media1.thrillophilia.com/filestore/7q8mr927utv7g80x8x9sazhyx5ns_y38mi28pvfavegf1982ntnpbvj9n_Gulmarg%20Gondola%20Ride.jpg?w=400&dpr=2" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Gulmarg Excursion & Gondola Ride</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.traveltriptrippers.com/img/tour/ks1.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Pahalgam Valley Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.bharatbooking.com/admin/webroot/img/uploads/holiday-package-gallery/1701079265_176672-6n-7d-srinagar-tour-package-slider-image.webp" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Mughal Gardens & Shikara Ride</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.kashmirhills.com/wp-content/uploads/2015/05/HARI-MARKET-kashmirhills-1.jpg" alt="" />
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

export default SrinagarLanding;