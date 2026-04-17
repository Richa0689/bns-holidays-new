import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const ManaliLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.tripsavvy.com/thmb/ZDRQXV-PiFDTFZu4x22mZkYuw9s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-930881934-5ae56fe48023b90036464e72.jpg"
          alt="Manali"
        />
        <div className="hero-content">
          <h1>Best of Manali</h1>
          <p>5 Days • Manali & Solang Valley </p>

          <Link to="/manali">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://www.incredibleindia-tourism.org/images/adventure-tours/solang-valley.jpg" alt="" />
            <p>Solang Valley</p>
          </div>

          <div className="highlight-card">
            <img src="https://hblimg.mmtcdn.com/content/hubble/img/manali/mmt/activities/m_rohtang-pass_l_400_640.jpg" alt="" />
            <p>Rohtang Pass</p>
          </div>

          <div className="highlight-card">
            <img src="https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2F1721642665310_Old%20Manali%205.jpg&w=1920&q=75" alt="" />
            <p>Old Manali</p>
          </div>

          <div className="highlight-card">
            <img src="https://manalitourism.co.in/images/places-to-visit/headers/beas-river-manali-header-manali-tourism.jpg.jpg" alt="" />
            <p>Beas River</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Choose Manali?</h2>

        <div className="why-grid">
          <div>🏔️ Snowy Mountains</div>
          <div>🎿 Adventure Activities</div>
          <div>🌄 Scenic Views</div>
          <div>❤️ Perfect for Honeymoon</div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="cta-section">
        <h2>Plan Your Manali Trip</h2>
        <p>Escape to the mountains and enjoy nature</p>
        <br />

        <Link to="/manali">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>5 Days Manali Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://www.indiatourismpackage.com/blog/wp-content/uploads/2024/04/shimla-manali-travel-guide.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Manali & Leisure Evening</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.solangvalleysportscenter.com/wp-content/uploads/2024/02/Zorbing-Ball-in-Solang.webp" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Solang Valley Adventure Activities</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://s7ap1.scene7.com/is/image/incredibleindia/rohtang-pass-manali-himachal-pradesh-1-attr-hero?qlt=82&ts=1726730701545" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Rohtang Pass Excursion</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://nomllers.com/wp-content/uploads/2025/04/vishal-bhutani-ugyfweYokVA-unsplash-1-scaled-1.webp" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Old Manali & Local Market Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Kullu_Manali_Airport_in_Bhunter_02.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ManaliLanding;