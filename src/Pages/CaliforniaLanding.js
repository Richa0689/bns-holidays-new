import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const CaliforniaLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
          alt="California"
        />
        <div className="hero-content">
          <h1>California Dream Tour</h1>
          <p>7 Days • 3 Cities • 1 Country</p>
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
            <img src="https://www.shutterstock.com/image-photo/los-angeles-ca-usa-april-260nw-2452663291.jpg" alt="" />
            <p>Los Angeles</p>
          </div>

          <div className="highlight-card">
            <img src="https://media.istockphoto.com/id/458099227/photo/hollywood-sign-afternoon.jpg?s=612x612&w=0&k=20&c=1VRbwciFnjZENid5O4ftPJl8QTLdSEG1z0puIq9dJ2k=" alt="" />
            <p>Hollywood</p>
          </div>

          <div className="highlight-card">
            <img src="https://pohcdn.com/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/San%20Francisco_1.jpg" alt="" />
            <p>San Francisco</p>
          </div>

          <div className="highlight-card">
            <img src="https://static.toiimg.com/photo/44848107/.jpg" alt="" />
            <p>Golden Gate Bridge</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Book Your Dream California Trip</h2>
        <p>Starting from ₹1,95,000</p>
        <Link to="/usa">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* 7 Days Itinerary */}
      <div className="itinerary-section">
        <h2>7 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://media.istockphoto.com/id/1139497012/photo/los-angeles-airport-tom-bradley-international-terminal.jpg?s=612x612&w=0&k=20&c=1F0zYh91Cx6L7VWvPhOnX4WmNUV6AwnmPJlUn3WjBNI=" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Los Angeles</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.flamingotravels.net/_next/image?url=https%3A%2F%2Fimgcdn.flamingotravels.co.in%2FImages%2FPlacesOfInterest%2FUniversal-Studios-Hollywood-5.jpg&w=1080&q=90" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Hollywood & Universal Studios</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.squarespace-cdn.com/content/v1/5e0e65adcd39ed279a0402fd/1627422658456-7QKPXTNQ34W2OMBTESCJ/1.jpg?format=2500w" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Santa Monica & Beach Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.intrepidtravel.com/adventures/wp-content/uploads/2022/03/Intrepid-Travel-usa_california_route1_bixby-bridge-2.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Travel to San Francisco</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.trvl-media.com/place/508803/32f0e6de-302a-46fc-825e-df151ff5327d.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Golden Gate Bridge & City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/ebe80447-cb8d-4124-a7fa-92148f406f37-Scottsdale%20Fashion%20Square.jpg" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Shopping & Leisure</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://c8.alamy.com/comp/2A8K5DN/a-man-reads-information-from-electronic-information-boards-in-the-departures-lounge-at-fort-worth-airport-in-dallas-texas-usa-2A8K5DN.jpg" alt="" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default CaliforniaLanding;