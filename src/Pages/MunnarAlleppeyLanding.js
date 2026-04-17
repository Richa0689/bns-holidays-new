import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const MunnarAlleppeyLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://res.klook.com/image/upload/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ohyv1a5cajhxcpe0ipnl.jpg"
          alt="Munnar & Alleppey"
        />

        <div className="hero-content">
          <h1>Munnar & Alleppey</h1>
          <p>Hills • Backwaters • Houseboats</p>

          <Link to="/munnar">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://lh4.googleusercontent.com/proxy/0m93vMJ5mWjIxMmhlrJ8RAVa5WDa5glN6pX4QgBrxH6DjINXJlonbH2ILP_7flKBDXBkQiYFRyNR39VjvcYj2g4QzBUP1nTd-BsiDV7aE9Bkedv2ncBZZ_xmCzxksIGm1jo8Fvwot9jTq9Ds" alt="" />
            <p>Munnar Tea Gardens</p>
          </div>

          <div className="highlight-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/5e/59/d4/alleppey-backwater-tour.jpg?w=800&h=-1&s=1" alt="" />
            <p>Alleppey Backwaters</p>
          </div>

          <div className="highlight-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVxjBgUFRqPexjPegbZPxuO5Sv-Trjr16UBQ&s" alt="" />
            <p>Mountain Views</p>
          </div>

          <div className="highlight-card">
            <img src="https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2F1728369507201_Boat%20house%20inside%20view%20.jpg&w=1920&q=75" alt="" />
            <p>Houseboat Stay</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Visit Munnar & Alleppey?</h2>

        <div className="why-grid">
          <div>🌿 Tea Plantations</div>
          <div>🚤 Backwater Cruise</div>
          <div>🏡 Houseboat Stay</div>
          <div>📸 Scenic Beauty</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Kerala Trip</h2>
        <p>6 Days of nature & relaxation</p>
        <br />

        <Link to="/munnar">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>6 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://natureworldwide.in/wp-content/uploads/2023/11/Munnar-Kerala.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Transfer to Munnar</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/Munnar66_20181211014155.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Munnar Sightseeing & Tea Gardens</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://img.avianexperiences.com/attractions/e342b886-ecdc-458e-b181-1ce557ae1b1b" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Waterfalls & Eco Point Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/a0/51/e8.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Transfer to Alleppey & Houseboat Stay</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://res.klook.com/image/upload/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/n9n3jo6vfcbsja8apzhv.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Backwater Cruise Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.istockphoto.com/id/1221359288/photo/passenger-bus-on-road-in-tea-plantations-india.jpg?s=612x612&w=0&k=20&c=JXLDtFqhLgTmI9Z1SAuLXCx3aFNncKUk_duaW28hBII=" alt="" />
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

export default MunnarAlleppeyLanding;