import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxuryGangtokLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://static2.tripoto.com/media/filter/tst/img/1042109/TripDocument/1605086800_skywalk.jpg"
          alt="Luxury Gangtok Tour"
        />

        <div className="hero-content">
          <h1>Luxury Gangtok Tour</h1>
          <p>Luxury • Mountains • Premium Experience</p>

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
            <img src="https://images.trvl-media.com/lodging/4000000/3880000/3872300/3872216/d76a42dc.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill" alt="" />
            <p>Luxury Mountain Stay</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.esikkimtourism.in/wp-content/uploads/2019/04/topmay.jpg" alt="" />
            <p>Lachung Valley</p>
          </div>

          <div className="highlight-card">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/tsomgo-lake-gangtok-sikkim-1-attr-hero?qlt=82&ts=1742160335690" alt="" />
            <p>Tsomgo Lake</p>
          </div>

          <div className="highlight-card">
            <img src="https://img1.wsimg.com/isteam/ip/17d40bd5-b8f5-45a9-8d96-a32d2f9dd762/ONE%20DAY%20GANGTOK%20LOCAL%20SIGHTSEEING%20PACKAGE%20COST.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:92.94%25" alt="" />
            <p>Premium City Experience</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏨 Premium Hotels & Resorts</div>
          <div>🚗 Private Comfortable Travel</div>
          <div>🍽️ Fine Dining Experience</div>
          <div>📸 Exclusive Sightseeing</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Luxury in the Himalayas</h2>
        <p>7 Days of comfort & elegance</p><br />

        <Link to="/Pages/gangtok">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>7 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://www.denzongregency.com/Photos/5-star-hotel-in-gangtok-sikkim-14.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Luxury Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://s3.india.com/wp-content/uploads/2024/07/Top-10-Family-Friendly-Activities-To-Do-In-Gangtok.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Gangtok City Tour & Premium Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/tsomgo-lake-gangtok-sikkim-1-attr-hero?qlt=82&ts=1742160335690" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Tsomgo Lake & Nathula Pass</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.tourmyindia.com/states/sikkim/image/gangtok-lachen-lachung-tour1.webp" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Transfer to Lachung</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.esikkimtourism.in/wp-content/uploads/2019/04/topmay.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Explore Lachung Valley</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.esikkimtourism.in/wp-content/uploads/2019/04/mgmrgseptmbr.jpg" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Return & Leisure</p>
            </div>
          </div>


        </div>
      </div>

    </div>
  );
};

export default LuxuryGangtokLanding;