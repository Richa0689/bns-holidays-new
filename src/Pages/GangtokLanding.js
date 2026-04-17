import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const GangtokLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://www.bharatbooking.com/admin/webroot/img/uploads/holiday-package-gallery/1702037425_880255-beautiful-gangtok-holiday-tour-package-slider-image.webp"
          alt="Gangtok Tour"
        />

        <div className="hero-content">
          <h1>Best of Gangtok</h1>
          <p>Mountains • Lakes • Monasteries</p>

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
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/tsomgo-lake-gangtok-sikkim-1-attr-hero?qlt=82&ts=1742160335690" alt="" />
            <p>Tsomgo Lake</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.indianholiday.com/wordpress/wp-content/uploads/2024/10/Nathula-Pass-in-Sikkim.jpg" alt="" />
            <p>Nathula Pass</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.trawell.in/admin/images/upload/723415296Gangtok_Rumtek_Monastery_Main.jpg" alt="" />
            <p>Rumtek Monastery</p>
          </div>

          <div className="highlight-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/c3/ca/e8.jpg" alt="" />
            <p>MG Marg</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏔️ Scenic Himalayan Views</div>
          <div>🛕 Peaceful Monasteries</div>
          <div>📸 Beautiful Landscapes</div>
          <div>🚗 Comfortable Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore Gangtok</h2>
        <p>5 Days of mountains & serenity</p><br />

        <Link to="/Pages/gangtok">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>5 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/30/fd/4e/ed/caption.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/1721852193099_Digital-Photos_Himalayan-Cities_Gangtok_0001_W.webp" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Gangtok City Tour & MG Marg</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://iamhimalaya.com/images/packages/sightseeing_gallery_image_2_1736230021.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Tsomgo Lake & Nathula Pass</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/lingdum-monastery-gangtok-sikkim-1-attr-hero?qlt=82&ts=1742166048831" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Monastery Visit & Leisure</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://s3.ap-south-1.amazonaws.com/heenawebdata/front/tourmaster/Gangtok-Day-101762493219.jpeg" alt="" />
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

export default GangtokLanding;