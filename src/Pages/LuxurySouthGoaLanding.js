import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxurySouthGoaLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://www.samindiatour.com/blog/wp-content/uploads/2022/04/resort-outdoors.png"
          alt="Luxury South Goa Tour"
        />

        <div className="hero-content">
          <h1>Luxury South Goa Tour</h1>
          <p>Luxury • Beaches • Peace</p>

          <Link to="/Pages/southgoa">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://content.jdmagicbox.com/quickquotes/listicle/listicle_1767341767761_ap4c9_5472x3648.jpg?impolicy=queryparam&im=Resize=(847,400),aspect=fit&q=75" alt="" />
            <p>Private Beaches</p>
          </div>

          <div className="highlight-card">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/635515877.jpg?k=b284d194234de49ac35497081d7bb89b5b9d593565d564a9ace60f5762996e40&o=" alt="" />
            <p>Luxury Resorts</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.goatourismhotels.com/img/sunset-cruise-goa-5.jpg" alt="" />
            <p>Sunset Cruise</p>
          </div>

          <div className="highlight-card">
            <img src="https://cdn.sanity.io/images/ocl5w36p/prod5/478b662040f7c754b247c33beadeea7255f066a9-5000x3333.jpg?w=480&auto=format&dpr=2" alt="" />
            <p>Fine Dining</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>👑 Premium Luxury Stay</div>
          <div>🌴 Private Experiences</div>
          <div>🍽️ Fine Dining Options</div>
          <div>🚗 Comfortable Transfers</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Luxury in South Goa</h2>
        <p>6 Days of premium relaxation</p><br />

        <Link to="/Pages/southgoa">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>6 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://www.cfmedia.vfmleonardo.com/imageRepo/7/0/152/641/331/goilc-exterior-5183-hor-clsc_O/ITC-Grand-Goa-a-Luxury-Collection-Hotel-Exterior.jpg?tr=w-656%2Ch-390%2Cfo-auto" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Luxury Resort Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/31/ec/df/a5/caption.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Private Beach Relaxation</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://goantales.com/wp-content/uploads/2025/02/Sunset-Cruise-in-Goa.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Sunset Cruise Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/a4/04/40.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>South Goa Sightseeing</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://goadarling.com/wp-content/uploads/2024/11/best-luxury-hotels-in-north-goa-YU-Hotel.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Spa & Leisure Day</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.tripplannersindia.com/assets/images/page/Goa_Tour_Package.webp" alt="" />
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

export default LuxurySouthGoaLanding;