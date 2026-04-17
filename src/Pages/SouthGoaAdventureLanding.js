import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const SouthGoaAdventureLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://cdn.kimkim.com/files/a/images/572afb334387a5b60c04b28f43b536b711ab7e1d/big-e6bcc6e4c375be8747aefcaa85e06e65.jpg"
          alt="Adventure South Goa Trip"
        />

        <div className="hero-content">
          <h1>Adventure South Goa Trip</h1>
          <p>Adventure • Beaches • Nature</p>

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
            <img src="https://seawatersports.com/images/activies/slide/scuba-diving-water-sports-at-south-goa-southgoa-watersports-scubadiving.jpg" alt="" />
            <p>Water Sports</p>
          </div>

          <div className="highlight-card">
            <img src="https://letsgoa.co.in/Admin/api/uploads/activity_packages_media/148/attachments/web/AB8.jpg" alt="" />
            <p>Beach Trekking</p>
          </div>

          <div className="highlight-card">
            <img src="https://makeithappen.co.in/wp-content/uploads/2023/10/Backwater-Kayaking-G2-6.jpg" alt="" />
            <p>Kayaking</p>
          </div>

          <div className="highlight-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/1f/a5/21.jpg" alt="" />
            <p>Nature Exploration</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🔥 Adventure Activities</div>
          <div>🏖️ Clean Beaches</div>
          <div>🌴 Natural Beauty</div>
          <div>🚗 Safe Travel Experience</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Feel the Adventure of South Goa</h2>
        <p>4 Days of thrill & nature</p><br />

        <Link to="/Pages/southgoa">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>4 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://www.tripsavvy.com/thmb/T8V1T6ib1YhYajcQWrIZz93es9g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-103816249-566fbda73df78ce161af174c.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Beach Resort Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://goatoursplanner.com/wp-content/uploads/2025/08/Watersport-in-Goa.jpeg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Water Sports Activities</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.orangewayfarer.com/wp-content/uploads/2020/01/Cabo-de-Rama-Offbeat-things-to-do-in-Goa-1024x768.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Beach Trekking & Kayaking</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://assets.serenity.co.uk/37000-37999/37617/720x480.jpg" alt="" />
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

export default SouthGoaAdventureLanding;