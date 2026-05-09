import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const SwissAlpsLanding = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://s1.it.atcdn.net/wp-content/uploads/2015/11/shutterstock_279572969.jpg"
          alt="Swiss Alps"
        />
        <div className="hero-content">
          <h1>Swiss Alps Tour</h1>
          <p>Snow. Mountains. Adventure.</p>
        
        <Link to="/Pages/swiss-alps">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* OVERVIEW */}
      <div className="highlights">
        <h2>Tour Highlights</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://media1.thrillophilia.com/filestore/ttfv7t4cadn0epu95ukaxmrmnata_jungfrau-railway-switzerland.jpeg?w=753&h=450&dpr=2.0" alt="" />
            <p>Interlaken Views</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" alt="" />
            <p>Jungfrau Region</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-15212951217-8a321d551ad2" alt="" />
            <p>Lucerne City</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-15075254280-b723cf961d3e" alt="" />
            <p>Swiss Alps Snow</p>
          </div>
        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Choose Swiss Alps?</h2>

        <div className="why-grid">
          <div>🏔️ Alpine Mountains</div>
          <div>🚠 Cable Car Rides</div>
          <div>🚞 Scenic Train Journeys</div>
          <div>❄️ Snow Adventures</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Swiss Trip</h2>
        <p>Experience the beauty of Switzerland</p>
        <button className="book-now-btn" onClick={() => setShowModal(true)}>
          Book Now
        </button>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>5 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15057616735-60b3a7427bad" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Zurich</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-152129512178a321d551ad2" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Transfer to Interlaken</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-15000489939-d23a436266cf" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Adventure Activities</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-150178588-af3ef285b470" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Jungfraujoch Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf9e" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">

            <div className="modal-header">
              <h2>Tour Includes</h2>
              <span className="close-btn" onClick={() => setShowModal(false)}>
                ✕
              </span>
            </div>

            <div className="icons-row">
              <div><span>🏨</span><p>Hotel</p></div>
              <div><span>🍽️</span><p>Meals</p></div>
              <div><span>✈️</span><p>Flight</p></div>
              <div><span>📷</span><p>Sightseeing</p></div>
              <div><span>🚌</span><p>Transport</p></div>
              <div><span>📄</span><p>Visa</p></div>
            </div>

            <div className="modal-content">
              <p>👨‍✈️ Tour includes services of <b>BNS Holidays</b>.</p>
              <p className="note">
                *Airfare included. Taxes extra.
              </p>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default SwissAlpsLanding;