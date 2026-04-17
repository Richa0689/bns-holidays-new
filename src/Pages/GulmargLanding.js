import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const GulmargLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://vargiskhan.com/log/wp-content/uploads/2022/04/one-day-trip-to-gulmarg-5.jpg"
          alt="Srinagar & Gulmarg"
        />
        <div className="hero-content">
          <h1>Srinagar & Gulmarg</h1>
          <p>Snow. Adventure. Paradise.</p>
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
            <img src="https://media.dpauls.com/drive-server/images/packages/india/srinagar/dal-lake-at-srinagar-kashmir-india.jpg" alt="" />
            <p>Srinagar</p>
          </div>

          <div className="highlight-card">
            <img src="https://5.imimg.com/data5/SELLER/Default/2022/2/MW/OC/SB/9654368/excursion-to-gulmarg-tour-packages.jpeg" alt="" />
            <p>Gulmarg</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/37/66/5e/gulmarg.jpg?w=600&h=-1&s=1" alt="" />
            <p>Gondola Ride</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.namasteindiatrip.com/blog/wp-content/uploads/2014/06/The-Snow-Festival-in-Gulmarg-1.webp" alt="" />
            <p>Snow Activities</p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE */}
      <div className="why-section">
        <h2>Why Visit Gulmarg?</h2>

        <div className="why-grid">
          <div>🚠 Asia’s Highest Gondola</div>
          <div>❄️ Snow Adventures</div>
          <div>🏔️ Scenic Landscapes</div>
          <div>📸 Perfect Photography Spots</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Kashmir Trip</h2>
        <p>Experience snow and scenic beauty</p><br />
        <Link to="/srinagar">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>6 Days Srinagar & Gulmarg Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://www.tourmyindia.com/states/jammu-kashmir/image/houseboat-gulmarg-and-pahalgam-it1.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Srinagar & Houseboat Stay</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://kashmirtourtravel.com/blog/wp-content/uploads/2023/07/shikara-ride-in-kashmir.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Shikara Ride & Mughal Gardens</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/24/d3/66.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Transfer to Gulmarg</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://kashmirtourtravel.com/blog/wp-content/uploads/2023/07/Gulmarg-Gondola-Ride.webp" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Gondola Ride & Snow Activities</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://res.cloudinary.com/kmadmin/image/upload/v1734329448/kiomoi/Shopping_in_Gulmarg-1_7583.png" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Return to Srinagar & Shopping</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.pexels.com/photos/31385966/pexels-photo-31385966.jpeg?cs=srgb&dl=pexels-aritra-hazra-249157205-31385966.jpg&fm=jpg" alt="" />
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

export default GulmargLanding;