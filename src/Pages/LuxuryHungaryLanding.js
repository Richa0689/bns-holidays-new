import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxuryHungaryLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://stepwisewonders.com/wp-content/uploads/2024/07/Hungary-tours.jpg"
          alt="Luxury Hungary"
        />
        <div className="hero-content">
          <h1>Luxury Hungary Tour</h1>
          <p>8 Days • Budapest, Eger & Lake Balaton • Premium Experience</p>

          <Link to="/Pages/hungary">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://www.baltana.com/files/wallpapers-29/Budapest-Tourism-HD-Desktop-Wallpaper-98634.jpg" alt="" />
            <p>Budapest</p>
          </div>

          <div className="highlight-card">c
            <img src="https://as1.ftcdn.net/v2/jpg/01/05/18/68/1000_F_105186888_VlHWRvhJ253fpLs5XIwDAvgGNHU4a42w.jpg" alt="" />
            <p>Eger Town</p>
          </div>

          <div className="highlight-card">
            <img src="https://i.redd.it/yjdmmaw6jgf01.jpg" alt="" />
            <p>Lake Balaton</p>
          </div>

          <div className="highlight-card">
            <img src="https://tse2.mm.bing.net/th/id/OIP.e24OWo61HoX0YqsWLCsh-gHaEK?r=0&cb=thfc1falcon4&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
            <p>Danube Views</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Choose Luxury Hungary Tour?</h2>

        <div className="why-grid">
          <div>🏨 Premium Hotels</div>
          <div>🍷 Wine Regions (Eger)</div>
          <div>🏞️ Scenic Lake Balaton</div>
          <div>🚗 Private Transfers</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Luxury in Hungary</h2>
        <p>Travel in comfort with exclusive experiences</p>
        <br />

        <Link to="/Pages/hungary">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>8 Days Luxury Hungary Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://cache.marriott.com/is/image/marriotts7prod/wh-budwh-extreme-wow-suite-30876:Classic-Hor?wid=856&fit=constrain" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Budapest & Luxury Stay</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://i.pinimg.com/originals/69/d7/95/69d795b329e10b28d4669645d90d91bb.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Budapest City Tour & Fine Dining</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://i.pinimg.com/originals/9b/93/df/9b93dfbe0527984bf2607438525c506e.gif" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Danube Cruise Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://thumbs.dreamstime.com/b/wine-tasting-valley-beautiful-women-eger-hungary-six-glasses-white-rose-wines-cheese-plate-grapes-259212897.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Travel to Eger & Wine Tasting</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://img.freepik.com/premium-photo/eger-hungary-view-medieval-old-town-from-historical-fortress-sunset_527096-15413.jpg?w=996" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Explore Eger Town</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://wallpaperaccess.com/full/9406977.jpg" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Lake Balaton Relaxation</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://tse3.mm.bing.net/th/id/OIP.tsLB2K1AkyzHgcJuEo1hTAHaFj?r=0&cb=thfc1falcon4&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p>Return to Budapest & Shopping</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://wallpaperaccess.com/full/16314651.png" alt="" />
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

export default LuxuryHungaryLanding;