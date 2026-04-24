import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const MysoreLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.holidify.com/images/bgImages/MYSORE.jpg"
          alt="Mysore"
        />
        <div className="hero-content">
          <h1>Mysore Tour</h1>
          <p>Royal Heritage. Palaces. Culture.</p>
          <Link to="/karnataka-tours">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Attractions</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Mysore_Palace_20191220130033.jpg" alt="" />
            <p>Mysore Palace</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Chamundi_Hills_20191220130054.jpg" alt="" />
            <p>Chamundi Hills</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Brindavan_Gardens_20191220130111.jpg" alt="" />
            <p>Brindavan Gardens</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/St._Philomena_s_Church_20191220130128.jpg" alt="" />
            <p>St. Philomena’s Church</p>
          </div>
        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Visit Mysore?</h2>

        <div className="why-grid">
          <div>🏰 Royal Palace Experience</div>
          <div>🎉 Famous Dasara Festival</div>
          <div>🌸 Beautiful Gardens</div>
          <div>🛕 Spiritual Destinations</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Discover Royal Mysore</h2>
        <p>Book your Mysore journey today</p><br />
        <Link to="/karnataka-tours">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>4 Days Tour Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://www.holidify.com/images/bgImages/MYSORE.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}> Arrive Bangalore + Drive to Mysore (140 Kms / 3 – 4 Hrs)</p>
              <p>On arrival at Bangalore, meet our chauffeur waiting for you and
proceed towards Mysore. Arrive Mysore in the noon and check
into the hotel. Later proceed for sightseeing of Mysore visiting
Maharaja’s Palace. Later in the evening proceed to KRS Dam
and Brindavan Gardens. One can also enjoy Sound & Light show
in the Gardens. Evening free at leisure. Overnight in the hotel. </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Mysore_Palace_20191220130033.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Drive to Mysore – Coorg (140 Kms / 3 – 4 Hrs) </p>
              <p> After breakfast, check out of the hotel and drive to Coorg. On
the way visit the famous Buddhist Monastery and the Golden
Buddha Temple located in Bylekuppe. Bylekuppe - One of the
largest Tibetan settlements in South India, it is known for its
monasteries, handicrafts, carpet factories, and incense factory.
Arrive Coorg in the evening and check into the hotel. Rest of the
day free at leisure. Evening free for relaxation. Overnight in the
hotel.</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Brindavan_Gardens_20191220130111.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}> Coorg</p>
              <p>After breakfast, enjoy sightseeing of Coorg visiting
Omkareshwara Temple, Madikeri Fort, Abbey Falls and Raja’s
Seat. Evening free at leisure. Overnight in the hotel. </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/St._Philomena_s_Church_20191220130128.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}> Drive Coorg – Bangalore Drop (290 Kms / 5 – 6 Hrs)</p>
              <p> After breakfast, time free until noon. Later check out of the
hotel and transfer to Bangalore rail station / airport in time for
your onward journey.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default MysoreLanding;