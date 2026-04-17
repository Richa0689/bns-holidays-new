import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const SpitiAdventureLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.thrillophilia.com/_next/image?url=https%3A%2F%2Fmedia1.thrillophilia.com%2Ffilestore%2F51lanip6r04gojdw2q8nip0z0f5y_Spiti10.jpg%3Fw%3D600%26dpr%3D2&w=1280&q=75"
          alt="Spiti Adventure"
        />
        <div className="hero-content">
          <h1>Spiti Adventure Trip</h1>
          <p>Thrill. Mountains. Off-road Experience.</p>
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
            <img src="https://static.toiimg.com/thumb/94619601/Kaza-town-in-Spiti-Himachal-Pradesh.jpg?width=1200&height=900" alt="" />
            <p>Kaza</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.nitworldwideholidays.com/offbeat-destinations-india/himachal-pradesh/img/hikkim/Hikkim.jpg" alt="" />
            <p>Hikkim</p>
          </div>

          <div className="highlight-card">
            <img src="https://himachaltourstravel.com/wp-content/uploads/2025/09/630988.webp" alt="" />
            <p>Langza</p>
          </div>

          <div className="highlight-card">
            <img src="https://photos.awalkintheworld.com/wp-content/uploads/2020/08/ki-monastery-spiti-1920x1073.jpg" alt="" />
            <p>Key Monastery</p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE */}
      <div className="why-section">
        <h2>Why Choose This Adventure?</h2>

        <div className="why-grid">
          <div>🚙 Extreme Road Trips</div>
          <div>🏔️ High Altitude Trekking</div>
          <div>📸 Scenic Landscapes</div>
          <div>🔥 Camping Experience</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Start Your Adventure Now</h2>
        <p>Book your Spiti adventure today</p><br />
        <Link to="/spiti">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>6 Days Adventure Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://www.hindustantimes.com/ht-img/img/2023/12/03/400x225/After-depositing-our-luggage-in-the-hotel-room-and_1701587836343_1701587863290.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Manali & Preparation</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://captureatrip-cms-storage.s3.ap-south-1.amazonaws.com/Kunzum_Pass_Location_Overview_and_Cultural_Significance_08e6a48a07.webp" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Drive to Kaza via Kunzum Pass</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://vargiskhan.com/log/wp-content/uploads/2020/02/kaza-4.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Kaza Sightseeing & Local Market</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQguRKOfXhoWZDoVr6VG4zma4Kr9X05CKgFBQ&s" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Visit Hikkim & Langza Village</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://wanderon-images.gumlet.io/gallery/new/2025/02/24/1740388284034-camping-in-spiti-valley.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Camping & Adventure Activities</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.viacation.com/_next/image?url=https%3A%2F%2Fmedia.viacation.com%2Fblogs%2F993505ba3b58cb12016ae.webp&w=2560&q=75" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Return Journey & Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default SpitiAdventureLanding;