import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxuryOotyLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://templemitra.com/files/assets/images/product/48256templemitra.jpg"
          alt="Luxury Ooty Tour"
        />

        <div className="hero-content">
          <h1>Luxury Ooty Tour</h1>
          <p>Luxury • Hills • Premium Experience</p>

          <Link to="/Pages/ooty">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://cdn.sanity.io/images/ocl5w36p/prod5/8e4657342a8eb1c5e205b7ba3c0d9da9334ff38f-3840x1860.jpg" alt="" />
            <p>5-Star Hill Resort Stay</p>
          </div>

          <div className="highlight-card">
            <img src="https://oneday.travel/wp-content/uploads/one-day-ooty-local-sightseeing-tour-package-private-cab-header.jpg" alt="" />
            <p>Private Sightseeing</p>
          </div>

          <div className="highlight-card">
            <img src="https://media1.thrillophilia.com/filestore/1yu3i86mpopq2kp6irfc4hpuvmdg_coonoor-tea-estate-entry-fee-timings-holidays-reviews-header.jpg?w=400&dpr=2" alt="" />
            <p>Tea Estate Experience</p>
          </div>

          <div className="highlight-card">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/57720926.jpg?k=dd60728627be44874921125b27814f8c5b6b5fc2a4c1e307bbf6327b1da9b780&o=" alt="" />
            <p>Spa & Relaxation</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏨 Premium Luxury Stay</div>
          <div>🚗 Private Transfers</div>
          <div>🍽️ Fine Dining Experience</div>
          <div>🌄 Scenic Comfort Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Luxury in Ooty</h2>
        <p>6 Days of comfort & elegance</p><br />

        <Link to="/Pages/ooty">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>6 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://cdn.sanity.io/images/ocl5w36p/prod5/8e4657342a8eb1c5e205b7ba3c0d9da9334ff38f-3840x1860.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Luxury Resort Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://lh3.googleusercontent.com/proxy/VY1VCna7JWTNqBFoXOT2-IksjyNBWPPgUrcfLhuIVvLYaDwlibUdbmXRDnKPhfrr3jLnq97QtMpxoKbPK5lzFEC-J_Fyt4KErG8ZEn0PKsCVqMpchXG-r9Akm4s7Ob8_t2Y" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Ooty Sightseeing in Private Vehicle</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://ootytourism.co.in/images/tourist-places/tea-estate-view-point-ooty/ooty-tea-estate-view-point-tourism-opening-time-closing.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Tea Estate Visit & Cultural Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media1.thrillophilia.com/filestore/xdv8xz01ufam8ihlydvkw4kx58bc_ooty.jpg?w=340&dpr=2" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Coonoor Excursion & Scenic Views</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.incredibleindia-tourism.org/images/weekend-getaways/ooty.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Spa & Leisure Day</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media1.thrillophilia.com/filestore/qxmjukk4776qj7qobkicay7o19ry_shutterstock_2403626265.jpg?w=400&dpr=2" alt="" />
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

export default LuxuryOotyLanding;