import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const ItalyLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://cdn.bunniktours.com.au/public/gallery_images/Europe%202026/Italian%20Discovery/2015%20-%20Italy%20-%20Venice%20-%20Emily%20Fraser%202-feature.jpg"
          alt="Italy"
        />
        <div className="hero-content">
          <h1>Italy Highlights Tour</h1>
          <p>8 Days • 1 Country • 4 Cities</p>
          <Link to="/destinations/europe">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://www.italia.it/content/dam/tdh/en/interests/lazio/roma/roma-in-48-ore/media/20220127150143-colosseo-roma-lazio-shutterstock-756032350.jpg" alt="" />
            <p>Rome</p>
          </div>

          <div className="highlight-card">
            <img src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/4353da7e791258021abd7598a1dd1c31a64518d8/big-2faa64e5d209a1cc649c671621681f27.jpg" alt="" />
            <p>Venice</p>
          </div>

          <div className="highlight-card">
            <img src="https://ca-times.brightspotcdn.com/dims4/default/fef52b2/2147483647/strip/true/crop/1200x784+0+0/resize/1200x784!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F35%2F4b%2Fe283cc4149658db755c1eb881b4a%2Fflorence-italty-sights-1.jpeg" alt="" />
            <p>Florence</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.tripsavvy.com/thmb/0SmPh8Y_v0o_kYHRfoQw4skJCJ8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-726779149-39db26c80d954189afdd8d86d1a57caa.jpg" alt="" />
            <p>Milan</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose Italy Tour?</h2>

        <div className="why-grid">
          <div>🏛️ Historic Cities</div>
          <div>🍝 Italian Cuisine</div>
          <div>🎨 Art & Architecture</div>
          <div>🚆 Scenic Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Italy Trip</h2>
        <p>Starting from ₹1,95,000</p><br />
        <Link to="/europe">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>8 Days Italy Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://www.culturediscovery.com/blog/wp-content/uploads/2019/06/terminal_3_fco_airport_rome-1.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Rome</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://vatican.museum/images/w700-f1/storage/app/public/repository/h/i/hi4txha2.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Colosseum & Vatican City</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://florencetips.com/images/florence-firenze.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Travel to Florence</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/1d/5a/26.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Florence City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://venicelover.com/images/venice.jpg" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Travel to Venice</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.venicehotelcadoro.com/wp-content/uploads/2018/10/gondola-ride-venice.jpg" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Venice Canal Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://assets.cntraveller.in/photos/6942e1e741afb54caeb2a62f/master/w_1600%2Cc_limit/Shopping_Milan_2_December23_GettyImages-1669837323.jpg" alt="" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p>Travel to Milan & Shopping</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://thumbs.dreamstime.com/b/passenger-waiting-flight-airport-departure-terminal-happy-traveler-waiting-flight-airport-departure-terminal-113664679.jpg" alt="" />
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

export default ItalyLanding;