import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxuryGulmargTourLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/83/ea/61/the-khyber-himalayan.jpg?w=700&h=-1&s=1"
          alt="Luxury Gulmarg Tour"
        />
        <div className="hero-content">
          <h1>Luxury Gulmarg Tour</h1>
          <p>Premium Kashmir Experience with Snow & Valleys</p>

          <Link to="/gulmarg">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img
              src="https://d2qa7a8q0vuocm.cloudfront.net/images/8888320220120074614.png"
              alt="Srinagar"
            />
            <p>Srinagar</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXd5KPWLEfzy0OPNHRHu0-T5M_yRV6QjglyDiV5qmlk1I2S5FD5kHIS2SMGtHbnKmAz5KP6Ge3c9B7b5WAva4XV7dQyQzZxk3CSNC51khtRKWqEvr18k6WphiRZA1mrVHy2KWriRp38WDuSsY5xKdGYFNN2n?key=-qpx1yRVl0il97PXB2RYvA"
              alt="Gulmarg Snow"
            />
            <p>Gulmarg Snow</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://s7ap1.scene7.com/is/image/incredibleindia/3-amarnath-yatra-pahalgam-jammu-and-kashmir-city-hero-new?qlt=82&ts=1726728787453"
              alt="Pahalgam"
            />
            <p>Pahalgam</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://luxe-dashboard.outlookindia.com/wp-content/uploads/2025/04/luxe_gulmarg_2_20250405.jpg"
              alt="Luxury Stay"
            />
            <p>Luxury Stay</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Choose Luxury Gulmarg Tour?</h2>

        <div className="why-grid">
          <div>🏨 5-Star Luxury Hotels</div>
          <div>🚡 Gondola Ride Included</div>
          <div>❄️ Premium Snow Experience</div>
          <div>🚗 Private Transfers</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Book Your Luxury Kashmir Trip</h2>
        <p>7 Days of premium travel experience</p>
        <br />

        <Link to="/gulmarg">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>7 Days Luxury Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://gos3.ibcdn.com/dc4be312-a774-4111-87bc-1f2a0a25c1a6.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Srinagar & Luxury Houseboat Stay</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2F1729508762424_praneet-kumar-H8dcf-v98mA-unsplash.jpg&w=1440&q=75"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Gulmarg Transfer & Scenic Views</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/37/66/5e/gulmarg.jpg?w=600&h=-1&s=1"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Gondola Ride & Snow Activities</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://img.avianexperiences.com/attractions/30e2ac25-d38e-4f4c-8082-0ac698f150cb"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Pahalgam Valley Excursion</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://haniefatravels.com/wp-content/uploads/2024/09/Polo-View-Market.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Leisure Day & Shopping in Srinagar</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://d26dp53kz39178.cloudfront.net/media/uploads/products/Jammu-and-kashmir-Srinagar-6_result-1691564814118.webp"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Local Sightseeing</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://creativelyyours.creative.travel/wp-content/uploads/2018/10/October_2018_Destination-4.jpg"
              alt=""
            />
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

export default LuxuryGulmargTourLanding;