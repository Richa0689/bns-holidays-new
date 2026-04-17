import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const ParisNiceLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://worldinparis.com/wp-content/uploads/2017/12/Paris-Is-Always-A-Good-Idea-1.jpg"
          alt="Paris & Nice"
        />
        <div className="hero-content">
          <h1>Paris & Nice</h1>
          <p>Romance in Paris, Relaxation in Nice</p>
          <Link to="/Pages/france">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://img.freepik.com/premium-photo/eiffel-tower-aerial-view-paris_78361-12651.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
            <p>Paris</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.franceguide.info/wp-content/uploads/sites/18/nice_ss.jpg" alt="" />
            <p>Nice</p>
          </div>

          <div className="highlight-card">
            <img src="https://cdn.britannica.com/02/121002-050-92DB902F/Louvre-Museum-pyramid-Paris-Pei-IM.jpg" alt="" />
            <p>Louvre Museum</p>
          </div>

          <div className="highlight-card">
            <img src="https://images.ctfassets.net/i3kf1olze1gn/4FPylwuJOnsoD7uECnIpuY/a42936660cdf3abd834f24d05b37e3dc/GettyImages-805553090.jpg?q=55&w=640" alt="" />
            <p>French Riviera</p>
          </div>
        </div>
      </div>

      {/* Why Choose */}
      <div className="why-section">
        <h2>Why Choose Paris & Nice?</h2>

        <div className="why-grid">
          <div>🗼 Iconic Eiffel Tower</div>
          <div>🏖️ Beautiful Beaches</div>
          <div>🍷 French Cuisine</div>
          <div>🎨 Art & Museums</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Dream Trip</h2>
        <p>Book now and explore Paris & Nice</p><br />
        <Link to="/Pages/france">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>5 Days Paris & Nice Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://c8.alamy.com/comp/FX8MA7/eu-france-paris-charles-de-gaulle-international-airport-arrival-hall-FX8MA7.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p>Arrival in Paris & Leisure Evening</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0e/4a/56/73.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p>Eiffel Tower, Seine Cruise & City Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.tripsavvy.com/thmb/qUivojdO7Hb10MkO9tqdJHbggic=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/DSC_0034-5c65df054cedfd00014aa324.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p>Louvre Museum & Travel to Nice</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/3024a3c00b7b7bd3302baf49d0e58745b7e78b89/big-aa096994dbe1daf8a3de3478d520f7fd.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p>Nice Beach & French Riviera Tour</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.istockphoto.com/id/1066917588/photo/hong-kong-china-duty-free-shops-in-departure-hall-at-chek-lap-kok-international-airport.jpg?s=612x612&w=0&k=20&c=tGRjjsGF99jYjibUTGxtMOgp-vg9s2H3qX7iyndtUVE=" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p>Shopping & Departure</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ParisNiceLanding;