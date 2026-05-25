import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const ItalyLanding2 = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.discoveryguidedtours.com/wp-content/uploads/2022/10/op23-8Q1vzwcNx1o-unsplash.jpg"
          alt="Italy Tour"
        />

        <div className="hero-content">
          <h1>Explore Florence + Pisa + Rome</h1>

          <p>
            Ancient Wonders • Renaissance Art • Italian Culture
          </p>

          <Link to="/italy-landing">
            <button className="explore-btn">
              View Tours
            </button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">

          <div className="highlight-card">
            <img
              src="https://visit-rome-in-italy.global.ssl.fastly.net/pics/ancient-rome/colosseum/colosseum-arena-rome-italy-16.jpg"
              alt=""
            />
            <p>Rome Colosseum</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://cdn.britannica.com/86/138686-050-E582758A/Basilica-Santa-Croce-Florence-Italy-Arnolfo-di.jpg"
              alt=""
            />
            <p>Florence Cathedral</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1543429776-2782fc8e1acd?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGlzYSUyMHRvd2VyfGVufDB8fDB8fHww"
              alt=""
            />
            <p>Leaning Tower of Pisa</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://ciaoandiamo.com/wp-content/uploads/2016/02/Venice-Canals-HD-scaled.jpg"
              alt=""
            />
            <p>Venice Canals</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏛️ Explore Ancient Roman History</div>
          <div>🎨 Experience Renaissance Architecture</div>
          <div>🍕 Enjoy Authentic Italian Cuisine</div>
          <div>📸 Perfect for Photography Lovers</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Discover Beautiful Italy</h2>

        <p>
          Book your unforgettable Italian holiday today
        </p>

        <br />

        <Link to="/italy-landing">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>07 Nights / 08 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://thetuscanmom.com/wp-content/uploads/2023/09/check-in-desks-florence-italy-airport-scaled.jpg"
              alt=""
            />

            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{color:"blue"}}> Florence <br/>Arrival in Florence: A Magical Start to Your Italian Adventure</p>
              <p> Arriving at Florence Airport marks the beginning of an unforgettable journey through the heart of
Tuscany. After landing, you’ll enjoy a seamless private transfer to your hotel, ensuring a smooth and
relaxing start to your stay.<br/>
Your first evening in Florence will set the tone for the incredible experiences ahead. From the
breathtaking piazzas to the charming cobblestone streets, Florence’s Renaissance beauty and vibrant
atmosphere will captivate you from the very moment you arrive. Whether you’re marveling at the
magnificent Duomo, strolling along the Arno River, or savoring authentic Italian cuisine, you’re in for
a memorable adventure in one of the world’s most iconic and culturally rich cities.<br/>
Overnight Stay in Florence</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/12/5e/9d/12.jpg"
              alt=""
            />

            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color:"blue"}}>Florence - Florence Walking Tour with Expert Guide - 1.5 Hour on Shared Basis</p>
              <p>Breakfast at Hotel.<br/>
The Florence walking tour with an expert guide is one of the most engaging and efficient ways to
explore the highlights of this Renaissance city. Lasting approximately 1.5 hours, the tour is
conducted on a shared basis, allowing you to discover Florence’s iconic landmarks while enjoying
detailed insights from a knowledgeable guide.<br/>
Florence (Italian: Firenze) is a city steeped in art, history, and culture. From the magnificent Duomo
and Baptistery to the elegant streets of the historic center and the charming piazzas, Florence offers
a rich tapestry of architectural marvels and cultural treasures.<br/>
Overnight Stay in Florence</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.royalcaribbean.com/media-assets/pmc/content/dam/excalibur/digital-destinations/port-destinations/ports-of-call/florence-pisa-livorno-flr/stock-photo-the-leaning-tower-in-a-sunny-day-in-pisa-italy-745306897.jpg?w=1440"
              alt=""
            />

            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{color:"blue"}}>Florence - Pisa</p>
              <p>Breakfast at Hotel.<br/>
The train journey from Florence to Pisa is one of the most convenient and efficient ways to travel
between two iconic cities in Tuscany. The distance is approximately 85 km (53 miles), and trains
typically take between 50 minutes to 1 hour 10 minutes to cover this route, making it a quick and
comfortable connection.<br/>Pisa is a city renowned worldwide for its architectural marvels and rich history. From the iconic
Leaning Tower and the beautiful Piazza dei Miracoli to its charming streets and historic churches, Pisa
offers a delightful mix of culture, art, and history. Whether you’re admiring medieval architecture,
exploring local landmarks, or enjoying the vibrant atmosphere of the city, Pisa provides an
unforgettable experience just a short train ride from Florence.<br/>
Overnight Stay in Pisa</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://res.cloudinary.com/aenetworks/image/upload/c_fill,w_1200,h_630,g_auto/dpr_auto/f_auto/q_auto:eco/v1/this-day-in-history-12-15-2001-leaning-tower-of-pisa-open"
              alt=""
            />

            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color:"blue"}}>Pisa – Leaning tower of Pisa Entry Ticket</p>
              <p>Breakfast at Hotel.<br/>
Visiting the Leaning Tower of Pisa is one of the most iconic and memorable experiences in Tuscany.
The ticket grants you access to this world-famous architectural wonder, allowing you to climb to the
top and enjoy panoramic views of the surrounding Piazza dei Miracoli.<br/>
The Leaning Tower (Italian: Torre Pendente di Pisa) is renowned not only for its unique tilt but also
for its rich history, dating back to the 12th century. As you ascend its spiral staircase, you’ll witness
centuries of architectural ingenuity and admire the beauty of Pisa’s historic cathedral, baptistery,
and surrounding monuments. Whether you’re fascinated by history, architecture, or simply looking
for an unforgettable photo opportunity, visiting the Leaning Tower of Pisa offers a truly remarkable
experience in one of Italy’s most celebrated cities.<br/>
Overnight Stay in Pisa</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://i0.wp.com/www.touristitaly.com/wp-content/uploads/2023/03/Trevi-Fountain-rome-2-scaled.jpg?fit=4272%2C2848&ssl=1"
              alt=""
            />

            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color:"blue"}}>Pisa – Rome</p>
              <p>Breakfast at Hotel.<br/>
The train journey from Pisa to Rome is one of the most convenient and efficient ways to travel
between these two iconic cities in Italy. The distance is approximately 350 km (217 miles), and trains
typically take between 2 hours 45 minutes to 3 hours on high-speed services, making it a
comfortable and scenic connection through the heart of Tuscany and Lazio.<br/>
Rome (Italian: Roma) is Italy’s historic and cultural capital, renowned worldwide for its ancient
monuments, vibrant piazzas, and artistic treasures. From the Colosseum and Roman Forum to the
Pantheon and Vatican City, Rome offers a captivating blend of history, art, and modern Italian life.<br/>
Overnight Stay in Rome</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/13/16/8a/a7.jpg"
              alt=""
            />

            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{color:"blue"}}>Rome - Rome hop on hop off bus tour - 24 hours</p>
              <p>Breakfast at Hotel.<br/>
The Rome Hop-On Hop-Off Bus Tour is one of the most convenient and flexible ways to explore the
Eternal City at your own pace. Covering the city’s most famous landmarks, the 24-hour ticket allows you to hop on and off at multiple stops, giving you the freedom to discover Rome’s treasures
without the hassle of navigating public transport.<br/>
Rome (Italian: Roma) is a city rich in history, culture, and art. From the grandeur of the Colosseum
and the Roman Forum to the elegance of Piazza Navona and the Pantheon, every corner of the city
tells a story spanning millennia.<br/>
Rome - Colosseum Entry Ticket<br/>
Visiting the Colosseum is one of the most iconic and memorable experiences in Rome. The entry
ticket grants access to this world-famous amphitheater, allowing you to explore its ancient
corridors, arches, and underground passages while imagining the gladiatorial spectacles that once
captivated thousands. The Colosseum (Italian: Colosseo) is a symbol of Rome’s grandeur and rich
history, dating back to the 1st century AD. Standing in its vast arena, you can appreciate the
engineering brilliance of ancient Rome and learn about the fascinating stories of emperors,
gladiators, and citizens who shaped the city’s past.<br/>
Overnight Stay in Rome </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.onthegotours.com/AmalfiBeach-838231712836471.jpg"
              alt=""
            />

            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{color:"blue"}}>Rome - Day Trip Positano, Amalfi Coast and Sorrento Tour on SIC Basis</p>
              <p>Experience the breathtaking beauty of southern Italy on a full-day journey along the world-famous
Amalfi Coast. This unforgettable tour takes you through dramatic coastal landscapes, charming
seaside towns, and iconic Italian scenery.<br/>
Begin your adventure with a scenic drive along the Amalfi Coast, where steep cliffs plunge into
crystal-clear waters and colorful villages cling to the hillsides. Stop in Positano, the jewel of the
coast, renowned for its pastel-colored houses, stylish boutiques, and stunning sea views. Enjoy free
time to explore its narrow streets, relax at a café, or take photos from panoramic viewpoints.
Continue along the coast to admire the timeless charm of the region before heading to Sorrento, a
lively town overlooking the Bay of Naples. Here, stroll through historic streets, sample local
limoncello, browse artisan shops, or simply soak in the relaxed Mediterranean atmosphere.
Perfect for travelers short on time, this day trip combines natural beauty, culture, and authentic
Italian charm into one memorable experience.<br/>
Overnight Stay in Rome</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media.istockphoto.com/id/1988158636/photo/modern-interior-of-rome-fiumicino-international-airport-leonardo-da-vinci-rome-italy.jpg?s=612x612&w=0&k=20&c=re9OgAoMc9_XE6cSLhv8aRDThLzoE1e6b3eR-x37y2A="
              alt=""
            />

            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{color:"blue"}}>Rome</p>
              <p>Breakfast at Hotel.<br/>
After breakfast proceed to Rome airport with private transfer.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ItalyLanding2;