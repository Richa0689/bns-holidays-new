import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxuryKashmirLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://media1.thrillophilia.com/filestore/dh5n8b3p7iv69uhuh09s4h6m68im_shutterstock_2232862285.jpg?w=340&dpr=2"
          alt="Luxury Kashmir Tour"
        />
        <div className="hero-content">
          <h1>Luxury Kashmir Tour</h1>
          <p>Snow Peaks. Lakes. Premium Experience.</p>
          <Link to="/srinagar">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://www.bharatbooking.com/admin/webroot/img/uploads/holiday-package-gallery/1700893731_687823-srinagar-tour-package-from-jammu-slider-image.webp" alt="" />
            <p>Srinagar</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.bharatbooking.com/admin/webroot/img/uploads/holiday-package-gallery/1700897914_668662-winter-special-gulmarg-tour-with-srinagar-slider-image.webp" alt="" />
            <p>Gulmarg</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.lehladakhtourism.com/pahalgam/images/pahalgam.jpg" alt="" />
            <p>Pahalgam</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.beautifulworld.com/wp-content/uploads/2017/07/lake-dal-shikava-boat.jpg" alt="" />
            <p>Dal Lake</p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE */}
      <div className="why-section">
        <h2>Why Choose Luxury Kashmir?</h2>

        <div className="why-grid">
          <div>🏨 Luxury Hotels</div>
          <div>🚗 Private Transport</div>
          <div>🛶 Shikara Ride Experience</div>
          <div>📸 Scenic Valleys</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Luxury Kashmir</h2>
        <p>Book your premium Himalayan journey</p><br />
        <Link to="/srinagar">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>7 Days Luxury Kashmir Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/52/24/6f/caption.jpg?w=900&h=500&s=1" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Srinagar & Luxury Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://kashmirtourtravel.com/blog/wp-content/uploads/2023/07/shikara-ride-in-kashmir.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Dal Lake Shikara Ride</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://kashmirtourtravel.com/blog/wp-content/uploads/2023/07/Gulmarg-Gondola-Ride.webp" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Gulmarg Gondola Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2F1721886064777_pahalgam%201.jpg&w=1920&q=75" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Pahalgam Valley Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/12/26173504/Zaina-Kadal-Road-Srinagar.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Leisure & Shopping in Srinagar</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/68/f4/db/chasme-sahi.jpg?w=900&h=500&s=1" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Mughal Gardens Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://creativelyyours.creative.travel/wp-content/uploads/2018/10/October_2018_Destination-4.jpg" alt="" />
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

export default LuxuryKashmirLanding;