import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const ShimlaKufriLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://oneday.tours/wp-content/uploads/one-day-shimla-kufri-local-sightseeing-tour-package-private-cab-header.jpg"
          alt="Shimla Kufri"
        />
        <div className="hero-content">
          <h1>Shimla & Kufri Tour</h1>
          <p>Snow Adventures. Scenic Views.</p>
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
            <img src="https://myholidayhappiness.com/uploads/-8420.jpg" alt="" />
            <p>Shimla Mall Road</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.go2india.in/himachal/images/shimla/shimla-kufri.jpg" alt="" />
            <p>Kufri Snow Point</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.trawell.in/blog/wp-content/uploads/2021/07/Beas_River_Rafting_Main.jpg" alt="" />
            <p>Adventure Activities</p>
          </div>

          <div className="highlight-card">
            <img src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/d1ea2d6f6d1aa470f661fa661bd0e2fb14fd2d2c/big-c1b8ea7180a799f54e3f03129e2cebf3.jpg" alt="" />
            <p>Himalayan Views</p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>❄️ Snow Experience</div>
          <div>🎿 Adventure Sports</div>
          <div>🏔️ Scenic Mountains</div>
          <div>📸 Perfect Photography Spots</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Shimla & Kufri Trip</h2>
        <p>Book now and enjoy snow-filled adventures</p><br />
        <Link to="/shimla">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>5 Days Shimla & Kufri Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://www.honeymoonpackagesmanali.in/wp-content/uploads/2024/04/shimla-mall-road.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Shimla & Mall Road Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.news18.com/ibnlive/uploads/2018/11/First-Snowfall-in-Manali.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Full Day Kufri Excursion & Snow Activities</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/20/e6/59/looking-up-the-steps.jpg?w=500&h=300&s=1" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Adventure Sports & Local Sightseeing</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://imgcld.yatra.com/ytimages/image/upload/t_yt_blog_w_800_c_fill_g_auto_q_auto:good_f_jpg/v1556258419/The%20Famous%20Ridge_1556257575.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Leisure Day & Shopping</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.bharatbooking.com/admin/webroot/img/uploads/holiday-package-gallery/1754033351_649203-shimla-tour.webp" alt="" />
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

export default ShimlaKufriLanding;