import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxurySpitiLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.swantour.com/blogs/wp-content/uploads/2020/01/spiti-valley.jpg"
          alt="Luxury Spiti Tour"
        />
        <div className="hero-content">
          <h1>Luxury Spiti Tour</h1>
          <p>Comfort. Nature. Premium Experience.</p>
          <Link to="/spiti">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://www.tripsavvy.com/thmb/ZDRQXV-PiFDTFZu4x22mZkYuw9s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-930881934-5ae56fe48023b90036464e72.jpg" alt="" />
            <p>Manali</p>
          </div>

          <div className="highlight-card">
            <img src="https://t3.ftcdn.net/jpg/06/06/04/04/360_F_606040457_b3lxkJSZWYSxUEqRAbDWo5LIIXBtscNp.jpg" alt="" />
            <p>Kaza</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/4b/f7/cf/offbeat-lake.jpg?w=900&h=500&s=1" alt="" />
            <p>Chandratal Lake</p>
          </div>

          <div className="highlight-card">
            <img src="https://static.tripzilla.in/media/267512/conversions/b745e2f6-14a8-408a-ba21-b4ca174f3992-w768.webp" alt="" />
            <p>Luxury Camps</p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE */}
      <div className="why-section">
        <h2>Why Choose Luxury Spiti?</h2>

        <div className="why-grid">
          <div>🏨 Premium Stay</div>
          <div>🚙 Comfortable Travel</div>
          <div>🍽️ Fine Dining Experience</div>
          <div>📸 Scenic Luxury Experience</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Spiti in Luxury</h2>
        <p>Book your premium Himalayan journey</p><br />
        <Link to="/spiti">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>8 Days Luxury Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://gos3.ibcdn.com/bcc63389-81dc-41c2-ad83-51bf689f9cde.jpeg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Manali & Luxury Stay</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.chandigarhrentacar.com/theme/blog_image/1752670194.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Drive to Kaza in Premium Vehicle</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/69/10/58/view-from-the-front.jpg?w=1200&h=-1&s=1" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Kaza Sightseeing & Monastery Visits</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://img.avianexperiences.com/trek/7c02216d-e2f8-4535-817a-d7ddd615eb71" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Visit Hikkim & Langza Village</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/b0/24/45/view-of-chandertaal-from.jpg?w=900&h=-1&s=1" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Chandratal Lake Visit & Luxury Camping</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media1.thrillophilia.com/filestore/qpykps0ep7m1elch8uiz3klddkut_1577278146_shutterstock_1376647736.jpg" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Relax & Explore Scenic Landscapes</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://photos.awalkintheworld.com/wp-content/uploads/2020/09/barren-spiti-valley-scaled.jpg" alt="" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p>Return to Manali</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://spitivalleypackages.com/wp-content/uploads/2026/03/How-This-7-Day-Plan-Is-Counted-1024x576.jpg" alt="" />
            <div className="day-content">
              <h3>Day 8</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default LuxurySpitiLanding;