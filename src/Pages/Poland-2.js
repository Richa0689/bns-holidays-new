import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const PolandLanding3 = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.luxurygold.com/media/epsotnsb/czech-republic-luxury-tours-travel-guide.jpeg?center=0.4923572164072419%2C0.500010000200004&format=webp&mode=crop&width=900&height=600&quality=80"
          alt="Warsaw Prague Tour"
        />

        <div className="hero-content">
          <h1>Classic Europe Escape</h1>

          <p>
            Discover the charm of Warsaw and Prague with historic streets,
            castles, culture, and stunning European architecture.
          </p>

          <Link to="/poland">
            <button className="explore-btn">
              View Tours
            </button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Tour Highlights</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=600"
              alt=""
            />
            <p>Warsaw Old Town</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1541849546-216549ae216d?w=600"
              alt=""
            />
            <p>Prague Castle</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1524041255072-7da0525d6b24?w=600"
              alt=""
            />
            <p>Charles Bridge</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1505765050516-f72dcac9c60d?w=600"
              alt=""
            />
            <p>European Cafes</p>
          </div>

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Historic European Cities</div>
          <div>📸 Iconic Architecture</div>
          <div>🍽️ Authentic Local Cuisine</div>
          <div>🚆 Comfortable Multi-City Journey</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Poland & Prague</h2>

        <p>
          Book your unforgettable Europe holiday today
        </p>

        <br />

        <Link to="/poland">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>6 Days Tour Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{color:"blue"}}>Arrival in Warsaw</p>
              <p>Welcome to Warsaw — a city where history meets modern charm!<br/>
Upon arrival, meet your private driver at the airport<br/>
Enjoy a comfortable transfer to your hotel: Metropol Hotel Warsaw (or similar)<br/>
Check in and relax<br/>
Overnight Stay in Warsaw</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1524041255072-7da0525d6b24?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color:"blue"}}>Warsaw City Tour</p>
              <p>Breakfast at the hotel<br/>
 Warsaw Hop-On Hop-Off Bus Tour (24 Hours)<br/>
Explore key attractions such as:<br/>
Old Town Warsaw<br/>
Royal Castle Warsaw<br/>
Palace of Culture and Science<br/>
Overnight Stay in Warsaw</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1541849546-216549ae216d?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{color:"blue"}}>Warsaw → Prague</p>
              <p>Breakfast at the hotel<br/>
Private transfer to the airport<br/>
Travel onward to Prague<br/>
Meet your private driver and transfer to your hotel: Exe City Park Prague (or similar)<br/>
Check in and relax<br/>
Overnight Stay in Prague</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1505765050516-f72dcac9c60d?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color:"blue"}}>Prague City Tour + River Cruise</p>
              <p>Breakfast at the hotel<br/>
Prague Hop-On Hop-Off Bus Tour (24 Hours)<br/>
Explore top attractions:<br/>
• Prague Castle<br/>
• Charles Bridge<br/>
• Old Town Square Prague<br/>
 River Cruise Experience<br/>
• Enjoy a relaxing cruise along the Vltava River<br/>
• Admire Prague’s skyline from the water<br/> Overnight Stay in Prague</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1524041255072-7da0525d6b24?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color:"blue"}}>Český Krumlov Day Trip</p>
              <p>Breakfast at the hotel<br/>
 Full-Day Trip to Český Krumlov (SIC)<br/>
Highlights:<br/>
Visit the UNESCO-listed old town<br/>
Explore the stunning Český Krumlov Castle<br/>
Walk through medieval streets and scenic river bends<br/>
Overnight Stay in Prague</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=600"
              alt=""
            />

            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{color:"blue"}}>Prague → Departure</p>
              <p>• Breakfast at the hotel<br/>
• Private transfer to the airport<br/>
 Depart with unforgettable European memories </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default PolandLanding3;