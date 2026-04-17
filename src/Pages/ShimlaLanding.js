import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const ShimlaLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://s7ap1.scene7.com/is/image/incredibleindia/cityscape-of-shimla-himachal-pradesh-city-1-hero?qlt=82&ts=1742171983523"
          alt="Shimla"
        />
        <div className="hero-content">
          <h1>Best of Shimla</h1>
          <p>Mountains. Snow. Serenity.</p>
          <Link to="/shimla">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2F1721979280460_Mall%20Road%205.jpg&w=1920&q=75" alt="" />
            <p>Shimla Mall Road</p>
          </div>

          <div className="highlight-card">
            <img src="https://hblimg.mmtcdn.com/content/hubble/img/tvdestinationimages/mmt/activities/m_Kufri_tv_destination_img_1_l_666_1000.jpg" alt="" />
            <p>Kufri</p>
          </div>

          <div className="highlight-card">
            <img src="https://manalitourism.co.in/images/places-to-visit/headers/solang-valley-manali-header-manali-tourism.jpg.jpg" alt="" />
            <p>Solang Valley</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.trawell.in/admin/images/upload/531957784Chail_Main.jpg" alt="" />
            <p>Chail</p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE */}
      <div className="why-section">
        <h2>Why Choose Shimla?</h2>

        <div className="why-grid">
          <div>🏔️ Scenic Mountains</div>
          <div>❄️ Snow Activities</div>
          <div>🚶 Nature Walks</div>
          <div>🛍️ Mall Road Shopping</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Shimla Trip</h2>
        <p>Book now and explore the beauty of Shimla</p><br />
        <Link to="/shimla">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>4 Days Shimla Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://www.honeymoonpackagesmanali.in/wp-content/uploads/2024/04/shimla-mall-road.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Shimla & Mall Road Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://blog.lemontreehotels.com/wp-content/uploads/2025/07/Kufri-Adventure-Activities-1.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Kufri Excursion & Adventure Activities</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/32/70/78/caption.jpg?w=800&h=800&s=1" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Visit Solang Valley & Local Sightseeing</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/05/3f/6a.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Shopping & Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ShimlaLanding;