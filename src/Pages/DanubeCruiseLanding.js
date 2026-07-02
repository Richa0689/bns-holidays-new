import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const DanubeCruiseLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://tse4.mm.bing.net/th/id/OIP.VkX46CUc6-4LkmKlNMSakgHaFw?r=0&cb=thfc1falcon4&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Danube Cruise"
        />
        <div className="hero-content">
          <h1>Danube River Cruise</h1>
          <p>7 Days • Hungary & Austria • Luxury River Experience</p>

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
            <img src="https://images4.alphacoders.com/772/thumb-1920-772318.jpg" alt="" />
            <p>Budapest</p>
          </div>

          <div className="highlight-card">
            <img src="https://wallpapercrafter.com/desktop1/556796-river-panorama-bridges-night-city-Hungary-Budapest.jpg" alt="" />
            <p>Danube River</p>
          </div>

          <div className="highlight-card">
            <img src="https://wallpaperaccess.com/full/3087757.jpg" alt="" />
            <p>Vienna</p>
          </div>

          <div className="highlight-card">
            <img src="https://tse3.mm.bing.net/th/id/OIP.sra48EgOWN8eMSxw-WPWggHaE7?r=0&cb=thfc1falcon4&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
            <p>River Cruise Views</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Choose Danube Cruise?</h2>

        <div className="why-grid">
          <div>🚢 Luxury River Cruise</div>
          <div>🏰 Historic Cities</div>
          <div>🌉 Scenic Views</div>
          <div>🍷 European Culture</div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="cta-section">
        <h2>Experience the Danube Journey</h2>
        <p>Relax and explore Europe in luxury</p>
        <br />

        <Link to="/Pages/hungary">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>7 Days Danube Cruise Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://budapestrivercruise.com/wp-content/uploads/2016/09/Millenium.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Budapest & Boarding Cruise</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://cdn.pixabay.com/photo/2020/01/03/22/26/budapest-4739291_1280.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Budapest City Exploration</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://thumbs.dreamstime.com/b/tourist-sightseeing-boat-sailing-danube-river-budapest-capital-city-hungary-may-tourist-sightseeing-boat-sailing-410320481.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Scenic Sailing on Danube</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.vindobona.org/images/text/vienna-airport-terminal-3-by-arne-mueseler-big.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Arrival in Vienna</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://wallpaperaccess.com/full/156748.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Vienna City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://wallpaperaccess.com/full/2899996.jpg" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Relax & River Views</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://static.vecteezy.com/system/resources/previews/011/550/937/non_2x/blur-background-terminal-departure-airport-with-bokeh-free-photo.jpg" alt="" />
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

export default DanubeCruiseLanding;