import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxuryCanadaLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://images.luxuryescapes.com/fl_progressive,q_auto:best,dpr_2.0/ayrvl8341ncs2h4tq9ev"
          alt="Canada"
        />
        <div className="hero-content">
          <h1>Luxury Canada Tour</h1>
          <p>Premium Travel Experience</p>
          <Link to="/destinations/canada">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://ychef.files.bbci.co.uk/1280x720/p0b7f62d.jpg" alt="" />
            <p>Toronto</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.hojobythefalls.com/wp-content/uploads/2020/01/Horseshoe-Falls-Table-Rock-500-380.jpg" alt="" />
            <p>Niagara Falls</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.tripsavvy.com/thmb/XQH1lvbIsmSeBgD14Q3ssgNex3Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-534612574-5b11609743a10300368c9314.jpg" alt="" />
            <p>Vancouver</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.roberthaasmann.com/wp-content/uploads/2020/06/Canadian-Rockies-4.jpg" alt="" />
            <p>Rocky Mountains</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose Luxury Canada Tour?</h2>

        <div className="why-grid">
          <div>🏨 Premium Hotels</div>
          <div>✈️ Business Class Flights</div>
          <div>🚌 Private Transfers</div>
          <div>🍽️ Fine Dining Experience</div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Plan Your Luxury Canada Trip</h2>
        <p>Starting from ₹2,80,000</p><br />
        <Link to="/canada">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary Section */}
      <div className="itinerary-section">
        <h2>11 Days Canada Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://media.istockphoto.com/id/458709917/photo/toronto-pearson-international-airport.jpg?s=612x612&w=0&k=20&c=aVtt4vw5cQGqFIGNZy3AF9_b1Us9wQucCy_-7KYvqB0=" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Toronto</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.luxurylifestylemag.co.uk/wp-content/uploads/2020/12/bigstock-Toronto-Canada-June-394200917.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Toronto Luxury City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.niagarafallstourism.com/sites/default/files/2024-05/rob-anzit-photography-niagara-falls-journey-behind-the-falls-62.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Niagara Falls Premium Experience</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://lp-cms-production.imgix.net/2021-04/GettyRF_1124659884.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Travel to Vancouver</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://cruiseindustrynews.com/wp-content/uploads/2021/01/qe_vancouver.jpg.webp" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Vancouver City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://images.onthegotours.com/web-images/locations/victoria.jpg" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Victoria Island Visit</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.vacationsbyrail.com/media/46391046/canadian-rockies-rm-route-900x450.jpg" alt="" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p>Rocky Mountains Exploration</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://resources.travellocal.com/wp/uploads/2024/09/24105303/Canada-Sandy-Lake-camping-shoreside-un.jpg" alt="" />
            <div className="day-content">
              <h3>Day 8</h3>
              <p>Nature & Adventure Activities</p>
            </div>
          </div>


          <div className="day-card">
            <img src="https://thumbs.dreamstime.com/b/toronto-eaton-centre-christmas-shopping-busy-day-62808704.jpg" alt="" />
            <div className="day-content">
              <h3>Day 9</h3>
              <p>Shopping & Free Time</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://travel.destinationcanada.com/_next/image?url=https%3A%2F%2Fadmin.destinationcanada.com%2Fsites%2Fdefault%2Ffiles%2Fimages%2Farticle%2Foak_bay_beach_hotel_victoria.jpg&w=1920&q=75" alt="" />
            <div className="day-content">
              <h3>Day 10</h3>
              <p>Relaxation & Spa Day</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.urbacon.net/wp-content/uploads/2017/07/aircanada_checkin_thumb.jpg" alt="" />
            <div className="day-content">
              <h3>Day 11</h3>
              <p>Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default LuxuryCanadaLanding;