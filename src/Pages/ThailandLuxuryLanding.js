import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const ThailandLuxuryLanding = () => {
  return (
    <div className="usa-landing luxury-theme">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://cdn.forevervacation.com/uploads/destination/bangkok.jpeg"
          alt="Thailand Luxury"
        />
        <div className="hero-content">
          <h1>Thailand Luxury Tour</h1>
          <p>Premium Stay. Private Tours. Elite Experience.</p>
          <Link to="/thailand">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Luxury Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/d7/ca/34/rooftop-pool.jpg?w=400&h=-1&s=1" />
            <p>Bangkok Luxury Hotels</p>
          </div>

          <div className="highlight-card">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/2c/dd/25/05/enjoying-swimming-pools.jpg" />
            <p>Phuket Private Beaches</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/52/0a/54/manta-pool.jpg?w=1200&h=-1&s=1" />
            <p>Krabi Resorts</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/02/fd/43/caption.jpg?w=500&h=400&s=1" />
            <p>Island Yacht Tours</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose Luxury Tour?</h2>

        <div className="why-grid">
          <div>🏨 5-Star Premium Hotels</div>
          <div>🚘 Private Transfers</div>
          <div>🍽️ Fine Dining Experience</div>
          <div>🛥️ Exclusive Island Tours</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Luxury Thailand</h2>
        <p>Starting at ₹1,20,000 | EMI ₹5,500/month</p><br />
        <Link to="/thailand">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>8 Days Luxury Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/30/dd/73/a6/pool.jpg" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Bangkok – Luxury Hotel Stay</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/97/ac/66/caption.jpg?w=500&h=400&s=1" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Private City Tour & Fine Dining</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://cdn.kiwicollection.com/media/property/PR005849/xl/005849-06-Ocean%20Panorama%20Pool%20Villa%20Pool%20View-at%20Six%20Senses%20Yao%20Noi.jpg?cb=1710800076" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Fly to Phuket – Beach Resort Stay</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0d/7e/c3/47.jpg" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Private Phi Phi Island Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://modularassets.cdn.ignitetravel.com/modular_multisite/wp-content/uploads/sites/2/2026/01/30145606/THAILAND-Phuket-Graceland-Resort-and-Spa-Sunset-Pool-My-Thailand-580x480px.jpg" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Leisure & Spa Day</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/2c/dd/25/05/enjoying-swimming-pools.jpg" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Travel to Krabi – Resort Stay</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0f/de/49/0a.jpg" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p>Island Hopping & Sunset Cruise</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://previews.123rf.com/images/khunta/khunta2001/khunta200100299/139425431-bangkok-thailand-january-25-2020-departure-floor-of-suvarnabhumi-airport-or-new-bangkok-airport.jpg" />
            <div className="day-content">
              <h3>Day 8</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ThailandLuxuryLanding;