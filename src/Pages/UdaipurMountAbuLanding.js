import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const UdaipurMountAbuLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://trippyholidays.com/wp-content/uploads/2018/01/udaipur-bg-2.webp"
          alt="Udaipur Mount Abu Tour"
        />

        <div className="hero-content">
          <h1>Udaipur & Mount Abu</h1>
          <p>Lakes • Hills • Heritage</p>

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
            <img src="https://imgcld.yatra.com/ytimages/image/upload/t_yt_blog_c_fill_q_auto:good_f_auto_w_800_h_500/v1536127222/Lake_Pichola_Blog_1536126866.jpg" alt="" />
            <p>Lake Pichola Boat Ride</p>
          </div>

          <div className="highlight-card">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/city-palace-udaipur-rajasthan-4-musthead-hero?qlt=82&ts=1742185179842" alt="" />
            <p>City Palace Udaipur</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.bharatbooking.com/admin/webroot/img/uploads/holiday-package-gallery/1700203922_346688-udaipur-and-mount-abu-tour-package-slider-image.webp" alt="" />
            <p>Mount Abu Hills</p>
          </div>

          <div className="highlight-card">
            <img src="https://img.avianexperiences.com/trek/c17e235f-63ad-4a09-9a69-b023f1a35b50" alt="" />
            <p>Nakki Lake</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🌊 Beautiful Lakes of Udaipur</div>
          <div>🏞️ Hill Station Experience</div>
          <div>📸 Scenic Photography Spots</div>
          <div>🚗 Comfortable Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore Lakes & Hills Together</h2>
        <p>6 Days of beauty & relaxation</p><br />

        <Link to="/Pages/udaipur">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>6 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://logout.world/media/event/1045/Gadi-lake_kwR8Typ.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Udaipur</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/2-lake-palace-udaipur-rajasthan-attr-hero?qlt=82&ts=1742166394501" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>City Palace & Lake Pichola</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/33/1a/8a.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Udaipur Sightseeing</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/6e/f7/55.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Transfer to Mount Abu</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://img.avianexperiences.com/trek/c17e235f-63ad-4a09-9a69-b023f1a35b50" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Nakki Lake & Hill Exploration</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6e/e9/78.jpg" alt="" />
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

export default UdaipurMountAbuLanding;