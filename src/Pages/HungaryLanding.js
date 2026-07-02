import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const HungaryLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://a-static.besthdwallpaper.com/budapest-at-night-wallpaper-2160x1440-438_40.jpg"
          alt="Hungary"
        />
        <div className="hero-content">
          <h1>Best of Hungary</h1>
          <p>Thermal baths. Danube views. Historic beauty.</p>

          <Link to="/Pages/hungary">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://www.baltana.com/files/wallpapers-29/Budapest-Tourism-HD-Desktop-Wallpaper-98634.jpg" alt="" />
            <p>Budapest</p>
          </div>

          <div className="highlight-card">
            <img src="https://w0.peakpx.com/wallpaper/563/30/HD-wallpaper-danube-river-europe-forest-nature-river-europe.jpg" alt="" />
            <p>Danube River</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.squarespace-cdn.com/content/v1/62dddf6ed81067757eecbb8f/49f55748-9854-4d1f-8e27-2f6cc268af39/colorful+shops+in+szentendre+hungary.jpg" alt="" />
            <p>Szentendre</p>
          </div>

          <div className="highlight-card">
            <img src="https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=1920,dpr=1/tour_img/5cb464970832c.jpeg" alt="" />
            <p>Lake Balaton</p>
          </div>
        </div>
      </div>

      {/* Why Choose */}
      <div className="why-section">
        <h2>Why Choose Hungary?</h2>

        <div className="why-grid">
          <div>🏰 Historic Architecture</div>
          <div>♨️ Thermal Baths</div>
          <div>🌉 Danube River Views</div>
          <div>🍷 Wine & Culture</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Dream Hungary Trip</h2>
        <p>Book now and explore the beauty of Hungary</p><br />

        <Link to="/Pages/hungary">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>6 Days Hungary Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://purpleliner.hu/wp-content/uploads/2025/04/budapest-evening-cruise-2-1024x683.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Budapest & Leisure Evening</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://cdn.projectexpedition.com/photos/63906touractivitylarge_sized.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Budapest City Tour & Parliament Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://cdn.tourradar.com/s3/tour/645x430/107017_b408c987.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Danube River Cruise Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://d1bvpoagx8hqbg.cloudfront.net/originals/szentendre-place-time-stopped-e0b7e63441b4ada43cbe064b63884370.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Visit Szentendre Artistic Town</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://tse3.mm.bing.net/th/id/OIP.oLFWWbooHd9C2opHWc_DIgHaEO?r=0&cb=thfc1falcon4&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Lake Balaton Relaxation Day</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/new-istanbul-airport-ist-large-shopping-and-departure-area-vie-brch-photography.jpg" alt="" />
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

export default HungaryLanding;