import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxuryShimlaLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.honeymoonpackagesmanali.org/uploads/8/2/6/1/8261259/ashapuri-village-resorts-in-manali.jpg"
          alt="Luxury Shimla"
        />
        <div className="hero-content">
          <h1>Luxury Shimla Tour</h1>
          <p>Elegance. Comfort. Scenic Luxury.</p>
          <Link to="/shimla">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Luxury Experiences</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/99/25/cf/open-terrace.jpg?w=1200&h=-1&s=1" alt="" />
            <p>Luxury Resorts</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/74/ce/e2/caption.jpg?w=500&h=400&s=1" alt="" />
            <p>Private Sightseeing</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/33/08/20/hptdc-the-chail-palace.jpg?w=800&h=500&s=1" alt="" />
            <p>Chail Palace Visit</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/96/f3/25/just-to-enjoy-the-view.jpg?w=900&h=500&s=1" alt="" />
            <p>Nature Retreat</p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏨 Premium Stays</div>
          <div>🚗 Private Transport</div>
          <div>🍽️ Fine Dining</div>
          <div>🌄 Exclusive Views</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Luxury in Shimla</h2>
        <p>Book now and enjoy a premium hill station getaway</p><br />
        <Link to="/shimla">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>6 Days Luxury Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/99/25/cf/open-terrace.jpg?w=900&h=500&s=1" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Check-in to Luxury Resort</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://himachalstory.com/wp-content/uploads/2018/07/The-Shimla-Mall-Road.jpeg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Shimla Sightseeing & Mall Road</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://hblimg.mmtcdn.com/content/hubble/img/tvdestinationimages/mmt/activities/m_Kufri_tv_destination_img_1_l_666_1000.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Kufri Excursion & Private Activities</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.ekantretreat.com/resource/images/grid/hotel-chail.webp" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Visit Chail Palace & Nature Retreat</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://pix10.agoda.net/hotelImages/31265798/-1/6fd435439f61ca3d52a5423104e34134.png?ce=0&s=414x232" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Leisure & Spa Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://meetmyholiders.com/wp-content/uploads/2019/09/Shimla-2-870x555.jpg" alt="" />
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

export default LuxuryShimlaLanding;