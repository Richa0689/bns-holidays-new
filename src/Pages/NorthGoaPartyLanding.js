import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const NorthGoaPartyLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO */}
      <div className="hero-section">
        <img
          src="https://static2.tripoto.com/media/filter/tst/img/39685/TripDocument/1582027424_49858459_372588540207983_2573612698810712272_n.jpg"
          alt="North Goa Beach Party"
        />

        <div className="hero-content">
          <h1>North Goa Beach Party</h1>
          <p>Music • Beaches • Nightlife</p>

          <Link to="/Pages/northgoa">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Experiences</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img src="https://www.shutterstock.com/image-photo/goa-india-08-sep-2024-260nw-2532518447.jpg" alt="" />
            <p>Baga Beach Party</p>
          </div>

          <div className="highlight-card">
            <img src="https://staticpagesassets.s3.ap-south-1.amazonaws.com/https://www.journeyrouters.com/nightlife-in-anjuna-beach/image_1768214342.jpg" alt="" />
            <p>Anjuna Nightlife</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.tripsavvy.com/thmb/Lnz6oPeI6vxUylwOX_STBwWC0is=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/127581504_656298128397104_7638904342412918553_n1-adf31484a449491ea52407c45b7e024a.jpg" alt="" />
            <p>Beach Clubs</p>
          </div>

          <div className="highlight-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZ-bRiZsJ8cQrvcdyjCUAvsdXb8kJoucZGw&s" alt="" />
            <p>Sunset DJ Events</p>
          </div>

        </div>
      </div>

      {/* WHY */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🎉 Non-stop Party Vibes</div>
          <div>🏖️ Famous Beaches</div>
          <div>🎧 DJ & Night Clubs</div>
          <div>🚗 Safe Travel</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Feel the Goa Nightlife</h2>
        <p>5 Days of music & fun</p><br />

        <Link to="/Pages/northgoa">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>5 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max300/420763682.jpg?k=20531c058bc0dfac4e9b0082f9e3d823bcd2a970a463a8504ede4ca347aa6295&o=" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival & Beach Resort Check-in</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://img.avianexperiences.com/trek/93d00296-e382-4e40-b4b5-aa24f27403e0" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Baga Beach Party Night</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.tripsavvy.com/thmb/-OessCuIgtUQ_eor7OhOxAecIQU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50241533_2056402121111275_2142119968286703616_n-5c8e4b1246e0fb000187a2e5.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Anjuna Club & DJ Night</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://thumbs.dreamstime.com/b/sunset-beach-party-goa-india-sunset-tropical-beach-lounge-chairs-beach-umbrellas-goa-india-405348637.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Beach Leisure & Sunset Party</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://thumbs.dreamstime.com/b/sunset-beach-party-goa-india-sunset-tropical-beach-lounge-chairs-beach-umbrellas-goa-india-405348637.jpg" alt="" />
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

export default NorthGoaPartyLanding;