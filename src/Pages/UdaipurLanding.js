import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const UdaipurLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://www.awaygowe.com/wp-content/uploads/2012/09/udaipur-things-to-do-10.jpg"
          alt="Udaipur Tour"
        />

        <div className="hero-content">
          <h1>Best of Udaipur</h1>
          <p>Lakes • Palaces • Royal Experience</p>

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
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0f/a4/b7/ea.jpg" alt="" />
            <p>Lake Pichola Boat Ride</p>
          </div>

          <div className="highlight-card">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/city-palace-udaipur-rajasthan-4-musthead-hero?qlt=82&ts=1742185179842" alt="" />
            <p>City Palace</p>
          </div>

          <div className="highlight-card">
            <img src="https://rawlasarkar.com/wp-content/uploads/2025/07/15-Reasons-Why-Udaipur-Should-Be-Your-Next-Weekend-Travel-Destination-ScoopWhoop.jpeg" alt="" />
            <p>Fateh Sagar Lake</p>
          </div>

          <div className="highlight-card">
            <img src="https://media.istockphoto.com/id/1136761704/photo/colorful-sunset-above-architecture-and-lake-water-in-udaipur-rajasthan-india.jpg?s=612x612&w=0&k=20&c=P6fTUTVfMJJFVZ4RSPFy5hBGHD0558b1WB4x8XcLmsw=" alt="" />
            <p>Sunset Views</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🌊 Beautiful Lake City</div>
          <div>🏰 Royal Palaces</div>
          <div>📸 Perfect Photography Spots</div>
          <div>🚗 Comfortable Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore the City of Lakes</h2>
        <p>4 Days of royal beauty</p><br />

        <Link to="/Pages/udaipur">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>4 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.trvl-media.com/lodging/1000000/810000/809500/809492/34e9c607.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://res.klook.com/image/upload/c_crop,h_1562,w_2499,x_0,y_19,z_0.3/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/lc798m8ktqdfwcno69bk.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>City Palace & Lake Pichola</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2F1722058890315_Fateh%20Sagar%20Lake%201.jpg&w=1920&q=75" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Fateh Sagar Lake & Local Sightseeing</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.tripsavvy.com/thmb/BbWF9ZuTLZH4Uy2dc3Cf3q4dAbo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Airport-Udaipur_Terminal_Snapseed_Darkroom-84577177dca442cd9612209fa1ceab25.jpg" alt="" />
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

export default UdaipurLanding;