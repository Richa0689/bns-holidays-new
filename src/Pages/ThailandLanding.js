import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const ThailandLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://www.hostelworld.com/blog/wp-content/uploads/2019/12/Best-places-to-visit-in-Thailand-@cadop.jpg"
          alt="Thailand"
        />
        <div className="hero-content">
          <h1>Explore Thailand</h1>
          <p>Beaches. Culture. Adventure.</p>
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
            <img src="https://ik.imgkit.net/3vlqs5axxjf/external/http://images.ntmllc.com/v4/destination/Thailand/Phuket-City/220668_SCN_Phuket_iStock910551026_Z20B18.jpg?tr=w-1200%2Cfo-auto" />
            <p>Phuket</p>
          </div>

          <div className="highlight-card">
            <img src="https://blog.bangkokair.com/wp-content/uploads/2024/10/Cover_bangkok-travel-guide-thailand-capital.jpg" />
            <p>Bangkok</p>
          </div>

          <div className="highlight-card">
            <img src="https://i0.wp.com/toasttothailand.com/wp-content/uploads/2019/03/pattaya-walking-street-1.jpg?fit=1024%2C632&ssl=1" />
            <p>Pattaya</p>
          </div>

          <div className="highlight-card">
            <img src="https://whereintheworldisnina.com/wp-content/uploads/2023/08/krabi-beaches.jpg" />
            <p>Krabi</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose Thailand Tours?</h2>

        <div className="why-grid">
          <div>🏝️ Stunning Beaches</div>
          <div>🛕 Rich Culture & Temples</div>
          <div>🍜 Street Food Paradise</div>
          <div>🎉 Nightlife & Fun</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Dream Thailand Trip</h2>
        <p>Book now and get best deals on Thailand tours</p><br />
        <Link to="/thailand">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>6 Days Thailand Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://thaiest.com/images/thailand/travel/thai-voa-bkk/bangkok-voa-01.jpeg" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Bangkok</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/12/5f/9e/bb.jpg" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Temple Tour & City Exploration</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fb/5c/pattaya.jpg?w=1200&h=700&s=1" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Travel to Pattaya</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/10/7c/a4/b3.jpg" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Coral Island Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://wanderon-images.gumlet.io/gallery/new/2026/01/27/1769502936111-what-to-buy-in-thailand.jpg" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Shopping & Leisure</p>
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

export default ThailandLanding;