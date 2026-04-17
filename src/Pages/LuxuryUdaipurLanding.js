import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxuryUdaipurLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://media.dpauls.com/drive-server/images/packages/india/udaipur/The-Oberoi-Udaivilas-Udaipur-Exterior.jpg"
          alt="Luxury Udaipur Tour"
        />

        <div className="hero-content">
          <h1>Luxury Udaipur Tour</h1>
          <p>Luxury • Lakes • Royal Experience</p>

          <Link to="/Pages/udaipur">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://cdn.esquireindia.co.in/article/2025-08-27T11%3A29%3A12.540Z-LEAD%20Facade_4%20copia.jpg" alt="" />
            <p>Luxury Palace Stay</p>
          </div>

          <div className="highlight-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0f/a4/b7/ea.jpg" alt="" />
            <p>Lake Pichola Cruise</p>
          </div>

          <div className="highlight-card">
            <img src="https://imgcdn.flamingotravels.co.in/Images/City/KumbhalgarhCoverPic.jpg" alt="" />
            <p>Kumbhalgarh Fort Visit</p>
          </div>

          <div className="highlight-card">
            <img src="https://udaipurtourism.co.in/images/places-to-visit/headers/udaipur-city-tour-packages-with-price-and-itinerary-sightseeing-places-tourism-entry-fee-timings-holidays-reviews-header.jpg" alt="" />
            <p>Private City Tour</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>👑 Premium Heritage Hotels</div>
          <div>🌊 Exclusive Lake Experiences</div>
          <div>🍽️ Fine Dining & Comfort</div>
          <div>🚗 Private Luxury Transport</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Luxury in the City of Lakes</h2>
        <p>7 Days of elegance & comfort</p><br />

        <Link to="/Pages/udaipur">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>7 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/846283488.jpg?k=02428564d3d47c96c91119a324e2cd67c48e5b4764c18871281190de646dd475&o=" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Luxury Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/lake-pichola-udaipur-rajasthan-2-attr-hero?qlt=82&ts=1742161994371" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Lake Pichola Cruise & City Palace</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://rajasthantourdriver.com/wp-content/uploads/2021/07/gangaur-ghat.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Udaipur Sightseeing</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/9d/91/d4.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Transfer to Kumbhalgarh</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/kumbhalgarh-fort-udaipur-rajasthan-1-attr-hero?qlt=82&ts=1742183634109" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Kumbhalgarh Fort Exploration</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.oberoihotels.com/-/media/oberoi-hotel/udaivilas-resized/udaivilas-new/gallery/desktop-fullsize-1640x1292/20.jpg" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Leisure & Luxury Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6e/e9/78.jpg" alt="" />
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

export default LuxuryUdaipurLanding;