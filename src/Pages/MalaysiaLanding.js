import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const MalaysiaLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://ignitetravelsolution.com/wp-content/uploads/2024/06/8-Must-do-Activities-on-your-Trip-to-Malaysia.jpg"
          alt="Malaysia"
        />
        <div className="hero-content">
          <h1>Explore Malaysia</h1>
          <p>Truly Asia Experience</p>
          <Link to="/malaysia">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://assets.cntraveller.in/photos/612f8f8c4eaffd3ac697991f/4:3/w_4004,h_3003,c_limit/KualaLumpur%20Malaysia%20GettyImages-509105016.jpg" />
            <p>Kuala Lumpur</p>
          </div>

          <div className="highlight-card">
            <img src="https://cdn.kimkim.com/files/a/images/29a7f531de58df983486783ab2e5c025b77193ef/original-7d421b6d72b95712ab49a6895a4d5911.jpg" />
            <p>Langkawi</p>
          </div>

          <div className="highlight-card">
            <img src="https://media-cdn.tripadvisor.com/media/photo-c/1280x250/08/9f/b7/98/photo8jpg.jpg" />
            <p>Penang</p>
          </div>

          <div className="highlight-card">
            <img src="https://wanderon-images.gumlet.io/blogs/new/2024/06/genting-highlands-travel-guide-in-malaysia.jpg" />
            <p>Genting Highlands</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose Malaysia?</h2>

        <div className="why-grid">
          <div>🏝️ Beautiful Islands</div>
          <div>🏙️ Modern Cities</div>
          <div>🛍️ Shopping & Nightlife</div>
          <div>🍜 Delicious Food</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Dream Malaysia Trip</h2>
        <p>Book now and get best deals</p><br />
        <Link to="/malaysia">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      <div className="itinerary-section">
  <h2>6 Days Malaysia Itinerary</h2>

  <div className="itinerary-list">

    <div className="day-card">
      <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/6f/40/6b.jpg" alt="Day 1" />
      <div className="day-content">
        <h3>Day 1</h3>
        <p>Arrival in Kuala Lumpur & City Orientation</p>
      </div>
    </div>

    <div className="day-card">
      <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/81/e2/6e.jpg" alt="Day 2" />
      <div className="day-content">
        <h3>Day 2</h3>
        <p>Visit Petronas Towers, KL Tower & City Tour</p>
      </div>
    </div>

    <div className="day-card">
      <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/21/54/1e.jpg" alt="Day 3" />
      <div className="day-content">
        <h3>Day 3</h3>
        <p>Genting Highlands Day Trip & Cable Car Ride</p>
      </div>
    </div>

    <div className="day-card">
      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fd/59/langkawi.jpg?w=1200&h=700&s=1" alt="Day 4" />
      <div className="day-content">
        <h3>Day 4</h3>
        <p>Travel to Langkawi & Beach Relaxation</p>
      </div>
    </div>

    <div className="day-card">
      <img src="https://sabahtravel-assets.s3.amazonaws.com/images/20210430-e8yr3-manukan-mamutik-watersport-sabah-trave" alt="Day 5" />
      <div className="day-content">
        <h3>Day 5</h3>
        <p>Island Hopping & Water Activities</p>
      </div>
    </div>

    <div className="day-card">
      <img src="https://tripxl.com/blog/wp-content/uploads/2024/09/Plaza-Singapura-Shopping-mall-OG-Photo.jpg" alt="Day 6" />
      <div className="day-content">
        <h3>Day 6</h3>
        <p>Shopping & Departure</p>
      </div>
    </div>

  </div>
</div>

    </div>
  );
};

export default MalaysiaLanding;