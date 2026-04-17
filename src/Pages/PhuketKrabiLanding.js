import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const PhuketKrabiLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://www.onthegotours.com/repository/Railay-Beach-in-Krabi-Thailand-663831538129694.jpg"
          alt="Phuket Krabi"
        />
        <div className="hero-content">
          <h1>Phuket & Krabi</h1>
          <p>Beaches. Islands. Relaxation.</p>
          <Link to="/thailand">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://media2.thrillophilia.com/images/photos/000/077/743/original/1561361001_patong_Beach.jpg?w=753&h=450&dpr=1.5" />
            <p>Phuket Beaches</p>
          </div>

          <div className="highlight-card">
            <img src="https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2F1718777713566_krabi-beaches.jpg&w=1920&q=75" />
            <p>Krabi Islands</p>
          </div>

          <div className="highlight-card">
            <img src="https://img.avianexperiences.com/attractions/644df1e1-1fcd-4831-ac15-de2631571c32" />
            <p>Phi Phi Island</p>
          </div>

          <div className="highlight-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQgHIy-G8ru7EqL-Um69AM6hlJWZZCvHGzVg&s" />
            <p>Railay Beach</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏝️ Exotic Beaches</div>
          <div>🚤 Island Hopping</div>
          <div>🌅 Scenic Views</div>
          <div>😌 Relax & Luxury</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Book Phuket & Krabi Tour</h2>
        <p>Starting at ₹90,000 | EMI ₹4,200/month</p><br />
        <Link to="/thailand">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>6 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://i.ytimg.com/vi/LuzS5z3T6yE/maxresdefault.jpg" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Phuket</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://cdn-imgix.headout.com/media/images/d2a5551909d09202a275960bfdec321f-AdobeStock_177077486.jpeg" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Phi Phi Island Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.barcelo.com/guia-turismo/wp-content/uploads/2024/05/krabi-5.jpg" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Travel to Krabi</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://res.klook.com/images/w_1200,h_630,c_fill,q_65/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/gnceeuebmhdlsbhzssca/Krabi4IslandsDayTour-KlookIndia.jpg" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>4 Island Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.goway.com/production/featured_images/Relaxation%20area.%20Massage%20and%20Spa%20on%20the%20beach._iStock-1388390932.jpg?VersionId=QrHtBziEB_z6soBN18EO5mpvamcIW8F" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Leisure & Beach Time</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://previews.123rf.com/images/khunta/khunta2001/khunta200100299/139425431-bangkok-thailand-january-25-2020-departure-floor-of-suvarnabhumi-airport-or-new-bangkok-airport.jpg" />
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

export default PhuketKrabiLanding;