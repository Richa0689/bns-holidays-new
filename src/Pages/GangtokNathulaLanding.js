import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const GangtokNathulaLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/9d/20/ae/nathula-pass.jpg?w=900&h=500&s=1"
          alt="Gangtok Nathula Tour"
        />

        <div className="hero-content">
          <h1>Gangtok & Nathula Pass</h1>
          <p>Snow • Mountains • Border Experience</p>

          <Link to="/Pages/gangtok">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://nomadicweekends.com/blog/wp-content/uploads/2019/03/Tsongmo-Lake-in-Summer.jpg" alt="" />
            <p>Nathula Pass Snow View</p>
          </div>

          <div className="highlight-card">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/tsomgo-lake-gangtok-sikkim-1-attr-hero?qlt=82&ts=1742160335690" alt="" />
            <p>Tsomgo Lake</p>
          </div>

          <div className="highlight-card">
            <img src="https://blog.tourismsikkim.in/wp-content/uploads/2021/10/baba-mandir.jpg" alt="" />
            <p>Baba Mandir</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/6d/8f/92/img-20201203-165738-largejpg.jpg?w=900&h=500&s=1" alt="" />
            <p>MG Marg Gangtok</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>❄️ Snow Experience</div>
          <div>🏔️ High Altitude Adventure</div>
          <div>📸 Stunning Landscapes</div>
          <div>🚗 Comfortable Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Nathula Pass</h2>
        <p>6 Days of adventure & scenic beauty</p><br />

        <Link to="/Pages/gangtok">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>6 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/f7/e2/42/exterior.jpg?w=400&h=300&s=1" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2F1725601435466_gangtok%201.jpg&w=1920&q=75" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Gangtok City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2F1721847298562_nathula-pass.jpg&w=1920&q=75" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Nathula Pass Excursion</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/95/b0/72/caption.jpg?w=900&h=500&s=1" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Tsomgo Lake & Baba Mandir</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://imgcld.yatra.com/ytimages/image/upload/t_yt_blog_w_800_c_fill_g_auto_q_auto:good_f_jpg/v1533121227/Gangtok_MGRoad_1533120906.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Leisure & Shopping</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.bharatbooking.com/admin/webroot/img/uploads/holiday-package-gallery/1702126267_451231-sikkim-darjeeling-gangtok-tour-package-slider-image.webp" alt="" />
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

export default GangtokNathulaLanding;