import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxuryFranceLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://www.luxurygold.com/media/olfnx1mq/aerial-view-of-paris-streets-and-eiffel-tower-at-sunset-france-hero-1298383663.jpg"
          alt="Luxury France"
        />
        <div className="hero-content">
          <h1>Luxury France Tour</h1>
          <p>Elegance. Luxury. Experience.</p>
          <Link to="/france">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Luxury Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_640.jpg" alt="" />
            <p>Paris</p>
          </div>

          <div className="highlight-card">
            <img src="https://afar.brightspotcdn.com/dims4/default/3af88e5/2147483647/strip/false/crop/3000x1915+0+0/resize/1486x949!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fa7%2F09%2F346944074f8da14dbe22cf8a2f50%2Ftravelguides-frenchriviera-armandooliveira-shuttersotck.jpg" alt="" />
            <p>French Riviera</p>
          </div>

          <div className="highlight-card">
            <img src="https://asset-prod.france.fr/BORDEAUX_PORTE_CAILHAUT_PRINTEMPS_ISTOCK_MARLOGUTL_94086bda5b.jpg" alt="" />
            <p>Bordeaux</p>
          </div>

          <div className="highlight-card">
            <img src="https://cdn.getyourguide.com/img/tour/16c89d1e8d49aba44def2f49791c172c5c05b2518f3a0aba62502a63bde8a173.png/68.jpg" alt="" />
            <p>Luxury Experiences</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏨 Premium Hotels</div>
          <div>🍷 Wine & Fine Dining</div>
          <div>🚗 Private Transfers</div>
          <div>✨ Exclusive Experiences</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Luxury in France</h2>
        <p>Book now for a premium travel experience</p><br />
        <Link to="/france">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>8 Days Luxury France Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/f5/c4/ae/intercontinental-paris.jpg?w=1200&h=-1&s=1" alt="Day 1" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Paris & Luxury Hotel Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0e/4a/56/73.jpg" alt="Day 2" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Eiffel Tower, Louvre & Seine Cruise</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://i2-prod.getsurrey.co.uk/article13431897.ece/ALTERNATES/s1200c/LNR_SAH_281015GreatFosters.jpg" alt="Day 3" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Shopping & Fine Dining Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.ctfassets.net/i3kf1olze1gn/4FPylwuJOnsoD7uECnIpuY/a42936660cdf3abd834f24d05b37e3dc/GettyImages-805553090.jpg" alt="Day 4" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Travel to French Riviera</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.cannes-france.com/app/uploads/cannes-tourisme/2022/06/thumbs/plages-cannes-herve-fabre-640x320.jpg" alt="Day 5" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Explore Cannes & Beaches</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/6a/c3/11.jpg" alt="Day 6" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Monaco & Monte Carlo Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://withhusbandintow.com/wp-content/uploads/2017/08/Wine-Tasting-in-Bordeaux-9.jpg" alt="Day 7" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p>Wine Tasting in Bordeaux</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://thegoodlife.fr/wp-content/thumbnails/uploads/sites/2/2024/06/thegoodlife_adp_terminal-2f-tt-width-936-height-600-fill-0-crop-0-bgcolor-eeeeee.jpg" alt="Day 8" />
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

export default LuxuryFranceLanding;