import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const ShimlaAdventureLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.tusktravel.com/blog/wp-content/uploads/2023/06/Best-Paragliding-Experience-in-Shimla.jpg"
          alt="Adventure Shimla"
        />
        <div className="hero-content">
          <h1>Adventure Shimla Trip</h1>
          <p>Thrill. Nature. Adventure.</p>
          <Link to="/shimla">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://www.swantour.com/blogs/wp-content/uploads/2019/04/Paragliding-in-Shimla.jpg" alt="" />
            <p>Paragliding</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.hoteltwintowers.com/images/blogsimages/zipline.jpg" alt="" />
            <p>Kufri Adventure</p>
          </div>

          <div className="highlight-card">
            <img src="https://assets.indiaonline.in/cg/shimla/City-Guide/Trekkinginshimla3.jpg" alt="" />
            <p>Mountain Trekking</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.shimlacamping.com/images/banner-2.jpg" alt="" />
            <p>Camping</p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🪂 Adventure Activities</div>
          <div>🏕️ Camping Experience</div>
          <div>🏔️ Scenic Mountains</div>
          <div>📸 Instagram-worthy Views</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Start Your Adventure Today</h2>
        <p>Book now and explore thrilling Shimla experiences</p><br />
        <Link to="/shimla">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>3 Days Adventure Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/b9/04/93/caption.jpg?w=500&h=400&s=1" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Shimla & Local Exploration</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1706357473_sky_swinger.jpg.webp" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Kufri Adventure Activities & Trekking</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://spitiadventure.com/wp-content/uploads/2026/02/shimla-manali-tour-package-6-nights-7-days.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Paragliding & Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ShimlaAdventureLanding;