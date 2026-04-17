import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const SpitiLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.thrillophilia.com/_next/image?url=https%3A%2F%2Fmedia1.thrillophilia.com%2Ffilestore%2F51lanip6r04gojdw2q8nip0z0f5y_Spiti10.jpg%3Fw%3D600%26dpr%3D2&w=1280&q=75"
          alt="Spiti Valley"
        />
        <div className="hero-content">
          <h1>Best of Spiti Valley</h1>
          <p>Cold Desert. Monasteries. Adventure.</p>
          <Link to="/spiti">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://photos.awalkintheworld.com/wp-content/uploads/2020/08/sublime-hotel-zangchuk-kaza.jpg" alt="" />
            <p>Kaza</p>
          </div>

          <div className="highlight-card">
            <img src="https://img.avianexperiences.com/attractions/65d61818-f220-4261-85c2-08c3b390d91e" alt="" />
            <p>Key Monastery</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/b0/24/45/view-of-chandertaal-from.jpg?w=900&h=-1&s=1" alt="" />
            <p>Chandratal Lake</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.nitworldwideholidays.com/offbeat-destinations-india/himachal-pradesh/img/hikkim/Hikkim.jpg" alt="" />
            <p>Hikkim Village</p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE */}
      <div className="why-section">
        <h2>Why Choose Spiti Valley?</h2>

        <div className="why-grid">
          <div>🏔️ High Altitude Adventure</div>
          <div>🏜️ Cold Desert Landscape</div>
          <div>🛕 Ancient Monasteries</div>
          <div>🚙 Off-Road Journey</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Spiti Trip</h2>
        <p>Book now and explore the hidden Himalayas</p><br />
        <Link to="/spiti">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>7 Days Spiti Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://www.summitsafari.com/assets/img/tour-gal/spiti-valley-tour-holiday-adventure-package/spiti-valley-tour-an-holiday-adventure-package-for-family-friends-or-couples-1.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Manali & Overnight Stay</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://spitivalleypackages.com/wp-content/uploads/2026/03/Can-you-cross-Manali-to-Kaza-via-Kunzum-in-May-2026-1024x576.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Manali to Kaza via Kunzum Pass</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/69/10/58/view-from-the-front.jpg?w=500&h=-1&s=1" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Kaza Local Sightseeing</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/5e/36/5e/key-monastery.jpg?w=1200&h=-1&s=1" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Visit Key Monastery & Hikkim</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://spitivalleypackages.com/wp-content/uploads/2025/09/Can-You-Still-Visit-Chandratal-in-October-2025-1024x576.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Excursion to Chandratal Lake</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://spitivalleypackages.com/wp-content/uploads/2026/03/The-Shimla-Spiti-Shimla-Return-Manali-Side-Closed-or-Risky-1024x576.jpg" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Return to Manali</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQccaSonruk-k8PGTJt9F5C5sHzWQo-ZsQIhA&s" alt="" />
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

export default SpitiLanding;