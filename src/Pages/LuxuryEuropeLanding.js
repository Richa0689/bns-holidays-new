import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const LuxuryEuropeLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://www.goseewrite.com/wp-content/uploads/2019/06/628136609449-1024x741@2x.jpg"
          alt="Luxury Europe"
        />
        <div className="hero-content">
          <h1>Luxury Europe Tour</h1>
          <p>12 Days • 6 Countries • 10 Cities</p>
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
            <img src="https://img.freepik.com/premium-photo/eiffel-tower-aerial-view-paris_78361-12651.jpg" />
            <p>Paris</p>
          </div>

          <div className="highlight-card">
            <img src="https://i.ytimg.com/vi/X5_CPKuC9MQ/maxresdefault.jpg" />
            <p>Swiss Alps</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.turismoroma.it/sites/default/files/Roma%20in%20breve.jpg" />
            <p>Rome</p>
          </div>

          <div className="highlight-card">
            <img src="https://media.istockphoto.com/id/1352073906/photo/amsterdam-downtown-amstel-river-old-houses-and-a-bridge-nice-view-of-the-famous-city-of.jpg?s=612x612&w=0&k=20&c=0-l6Lf8A_QM0Nd-YPLrp5qUn8S1uc0TFKETH8TU9JcU=" />
            <p>Amsterdam</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose Luxury Tour?</h2>

        <div className="why-grid">
          <div>🏨 Premium Hotels</div>
          <div>✈️ Business Class Travel</div>
          <div>🍷 Fine Dining</div>
          <div>🚗 Private Transfers</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Luxury Europe</h2>
        <p>Starting from ₹3,20,000</p><br />
        <Link to="/destinations/europe">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary SAME AS USA (manual) */}
      <div className="itinerary-section">
        <h2>11 Days Luxury Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://www.shutterstock.com/shutterstock/videos/23947948/thumb/3.jpg?ip=x480" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Paris</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=350,height=290/tour_img/63a5bcf71db77.jpeg" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Eiffel Tower & City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.namasteindiatrip.com/wp-content/uploads/2023/03/best-of-switzerland.jpg" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Travel to Switzerland</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://i.ytimg.com/vi/BzJd4n53Oz8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLADIoG5fzEa3rir3frFcyWu8BQYDg" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Swiss Alps & Scenic Views</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://d1bv4heaa2n05k.cloudfront.net/user-images/1531827050831/shutterstock-154497440_destinationMain_1531827190598.jpeg" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Travel to Italy</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/e7/14/75.jpg" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p>Rome & Vatican Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://ychef.files.bbci.co.uk/976x549/p014g30d.jpg" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p>Travel to Netherlands</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://amsterdamcanalcruises.nl/wp-content/uploads/2020/11/CCC_main.jpg" />
            <div className="day-content">
              <h3>Day 8</h3>
              <p>Amsterdam Canal Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/031/401/original/578155ed0242d97af7ff9c8e1d9423fd/article-germany-rhine-bacharach-evening.jpg" />
            <div className="day-content">
              <h3>Day 9</h3>
              <p>Travel to Germany</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/1c/08/d6.jpg" />
            <div className="day-content">
              <h3>Day 10</h3>
              <p>City Tour & Shopping</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://thumbs.dreamstime.com/b/passenger-waiting-flight-airport-departure-terminal-happy-traveler-waiting-flight-airport-departure-terminal-113664679.jpg" />
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

export default LuxuryEuropeLanding;