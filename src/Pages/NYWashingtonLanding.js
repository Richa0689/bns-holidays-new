import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const NYWashingtonLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://www.newyorkwelcome.net/kimg/1200/Washington_DC_Comprehensive_Guide.png"
          alt="New York"
        />
        <div className="hero-content">
          <h1>New York & Washington</h1>
          <p>6 Days • 2 Cities • 1 Country</p>
          <Link to="/destinations/usa">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Attractions</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://guidance.aero/wp-content/uploads/2015/06/statue-of-liberty-full-view-national-park-service-photo.jpg" alt="" />
            <p>Statue of Liberty</p>
          </div>

          <div className="highlight-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg" alt="" />
            <p>Times Square</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.unsplash.com/photo-1719947691028-0be6e2dccddd?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2hpdGUlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <p>White House</p>
          </div>

          <div className="highlight-card">
            <img src="https://static.vecteezy.com/system/resources/previews/001/968/378/large_2x/lincoln-memorial-in-washington-dc-usa-photo.jpg" alt="" />
            <p>Lincoln Memorial</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Book Your USA Trip</h2>
        <p>Starting from ₹1,80,000</p>
        <Link to="/usa">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* 6 Days Itinerary */}
      <div className="itinerary-section">
        <h2>6 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?cs=srgb&dl=pexels-burst-374710.jpg&fm=jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in New York & Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.airpano.ru/files/images_for_articles/image1.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Statue of Liberty, Times Square</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Global_Citizen_Festival_Central_Park_New_York_City_from_NYonAir_%2815351915006%29.jpg/330px-Global_Citizen_Festival_Central_Park_New_York_City_from_NYonAir_%2815351915006%29.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Central Park & Shopping</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://cdn.britannica.com/42/93842-050-295D32A0/US-Capitol-place-meeting-Congress-Washington-DC.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Travel to Washington D.C.</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://cdn.britannica.com/28/129328-050-1DAE4879/Lincoln-Memorial-Washington-DC.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>White House, Lincoln Memorial Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://c8.alamy.com/comp/2A8K5DN/a-man-reads-information-from-electronic-information-boards-in-the-departures-lounge-at-fort-worth-airport-in-dallas-texas-usa-2A8K5DN.jpg" alt="" />
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

export default NYWashingtonLanding;