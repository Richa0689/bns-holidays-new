import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const GuwahatiShillongLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://www.traveloearth.com/wp-content/uploads/2018/11/1686998717833.jpg"
          alt="Guwahati Shillong Tour"
        />

        <div className="hero-content">
          <h1>Guwahati & Shillong</h1>
          <p>Hills • Waterfalls • Culture</p>

          <Link to="/Pages/guwahati">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://www.holidayguidetours.com/wp-content/uploads/2025/06/guwahati-kajiranga-shillong-6-n-7-d.jpg" alt="" />
            <p>Shillong Hills</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/b3/91/22/amazing-umium-lake.jpg?w=1200&h=-1&s=1" alt="" />
            <p>Umiam Lake</p>
          </div>

          <div className="highlight-card">
            <img src="https://meghtour.web-assets.org/cdn-cgi/image/format=auto,width=1366,quality=90,fit=scale-down,slow-connection-quality=45/plan/itineraries/elephant-falls.webp" alt="" />
            <p>Elephant Falls</p>
          </div>

          <div className="highlight-card">
            <img src="https://netatagency.com/crm/package_image/f375af75a20179930ed9e19567ebed13_1000x10001751630398.jpg" alt="" />
            <p>Kamakhya Temple</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🌄 Beautiful Hill Stations</div>
          <div>🌧️ Scenic Waterfalls</div>
          <div>📸 Nature Photography</div>
          <div>🚗 Comfortable Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore Northeast Beauty</h2>
        <p>6 Days of hills & nature</p><br />

        <Link to="/Pages/guwahati">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>6 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://www.airport-technology.com/wp-content/uploads/sites/14/2021/10/800px-Guwahati_Airport_security_check_area.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Guwahati</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/kamakhya-temple-dispur-assam-2-attr-hero?qlt=82&ts=1742179171313" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Kamakhya Temple Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.holidayguidetours.com/wp-content/uploads/2025/06/guwahati-kajiranga-shillong-6-n-7-d.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Transfer to Shillong</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.basilleafholidays.com/wp-content/uploads/2019/01/umium-lake.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Shillong Sightseeing & Umiam Lake</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.kaziranganationalpark-india.com/blog/wp-content/uploads/2025/03/guwahati-tour.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Waterfalls & Local Exploration</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.assettype.com/english-sentinelassam%2Fimport%2Fh-upload%2F2023%2F11%2F11%2F490624-whatsapp-image-2023-11-10-at-25055-pm.webp?w=480&dpr=2&auto=format%2Ccompress&fit=max&q=85" alt="" />
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

export default GuwahatiShillongLanding;