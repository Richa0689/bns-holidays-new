import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const SouthGoaEscapeLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://images.trvl-media.com/place/6138900/fed2ef5d-63f0-4321-9434-b8e42a325d97.jpg"
          alt="South Goa Beach Escape"
        />

        <div className="hero-content">
          <h1>South Goa Beach Escape</h1>
          <p>Peace • Beaches • Nature</p>

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
            <img src="https://clubmahindra.gumlet.io/blog/media/section_images/palolembea-b0b10c223bd68f2.webp?w=376&dpr=2.6" alt="" />
            <p>Palolem Beach</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.tripsavvy.com/thmb/KJDeHieaVoyNyzyYChLwQ0_r57M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-653486648-5ad1a578a18d9e00368de746.jpg" alt="" />
            <p>Agonda Beach</p>
          </div>

          <div className="highlight-card">
            <img src="https://goaexplocation.com/admin/images/activities/052115south-goa-places.jpg" alt="" />
            <p>Beach Walks</p>
          </div>

          <div className="highlight-card">
            <img src="https://media.easemytrip.com/media/Blog/India/637136726518786264/637136726518786264XJ4q1m.jpg" alt="" />
            <p>Sunset Views</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🌴 Calm & Peaceful Beaches</div>
          <div>🏖️ Less Crowded Places</div>
          <div>📸 Scenic Views</div>
          <div>🚗 Comfortable Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Escape to South Goa</h2>
        <p>5 Days of peace & relaxation</p><br />

        <Link to="/Pages/southgoa">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>5 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://www.agoda.com/wp-content/uploads/2024/11/Taj-Exotica-Resort-Spa-Goa.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Beach Resort Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.bizevdeyokuz.com/wp-content/uploads/palolem-beach-south-goa-india.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Palolem Beach Relaxation</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://ak-d.tripcdn.com/images/1mi6p224x96bnyee69CD4.jpg?proc=source/trip" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Agonda Beach Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.tripplannersindia.com/assets/images/page/Goa_Tour_Package.webp" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Sunset & Leisure Time</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://trueleisures.com/wp-content/uploads/2022/04/dona-paula-1.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default SouthGoaEscapeLanding;