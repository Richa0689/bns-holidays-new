// CroatiaLanding2.js

import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const CroatiaLanding2 = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/e24167dfd8208780caf776c72d25dbac153df777/big-3cae42eb37c2585f2caa368ebde440c4.jpg"
          alt="Croatia Coast Tour"
        />

        <div className="hero-content">
          <h1>Coast & Islands Croatia Tour</h1>
          <p>Dubrovnik • Split • Zagreb • Zadar</p>

          <Link to="/croatia">
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
              src="https://images.unsplash.com/photo-1555990538-1736b0258235?w=600"
              alt="Dubrovnik"
            />
            <p>Dubrovnik Old Town</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=600"
              alt="Split"
            />
            <p>Split Waterfront</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600"
              alt="Zagreb"
            />
            <p>Zagreb City</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600"
              alt="Zadar"
            />
            <p>Zadar Coastline</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏝️ Stunning Islands</div>
          <div>🌊 Adriatic Coast Views</div>
          <div>🏛️ Historic Old Towns</div>
          <div>📸 Beautiful Beaches</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Discover Croatia’s Coastline</h2>

        <p>
          Book your Croatia Coast & Islands tour today
        </p>

        <br />

        <Link to="/croatia">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>7 Days Tour Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1555990538-1736b0258235?w=600"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{color:"blue"}}> Split<br/>Arrival in Split: "It's Joy, It's Split</p>
              <p>Welcome to Split, Split tourism refers to travel and leisure activities in Split, a city in Croatia known
for its blend of ancient history and modern charm, particularly its UNESCO World Heritage site,
Diocletian's Palace. Visitors can explore historic sites like the palace, cathedral, and fortress, enjoy
beaches and parks, go island-hopping, and experience local cuisine and events. It also serves as a
popular base for day trips to nearby attractions like Krka National Park and various islands.<br/>
Overnight Stay in Split
</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color:"blue"}}> Split - Half-Day Tour of Trogir Old Town from Split on SIC Basis</p>
              <p>Breakfast at Hotel.<br/>
After breakfast proceed to Split city walking tour on shared basis. Enjoy the famous Trogir city
museum on a 90 min walking tour.
With a professional guide in English, you will explore the most important historical and cultural
landmarks of this medieval beauty.
Strolling down the narrow alleys, with a romantic atmosphere and hundreds of hidden gems will
make this tour a memorable one.
The main square with its cathedral, city loggia, and breathtaking art collection makes Trogir a
treasure city.<br/>
Amazing architecture, urban legends, myths rooted in local history, and popular culture are the
reason why you should visit Trogir<br/>
Overnight Stay in Split</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=600"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{color:"blue"}}>Split - Hvar</p>
              <p>Breakfast at Hotel.
The Ferry journey from Split to Hvar is one of the most convenient and efficient ways to travel
between these two iconic cities in Crotia. The distance is around 60.8 km, and ferry typically take
between 1 hour and 10 minutes to 1.5 hours to cover this route.
Hvar Hvar, Croatia, is a popular tourist destination known for its sunny climate, beautiful beaches,
and vibrant nightlife, making it a top choice for sun-seekers and party-goers. Visitors can explore
historic towns like Hvar Town and Stari Grad, visit ancient sites like the Spanish Fortress and Hvar Fortress, and enjoy a wide array of activities such as wine tasting, swimming in clear waters, and
relaxing on the many beaches.<br/>
Overnight Stay in Hvar </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=600"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color:"blue"}}>Hvar – Island tour with Wine & Olive Oil Tasting from Hvar on SIC Basis</p>
              <p>Breakfast at Hotel.<br/>
After breakfast Starting from the Hvar town, the tour continues to the Napoleon fortress at 250 m
elevation with an amazing view of Hvar town and surrounding islands. The tour then proceeds
following the old road, to the central part of the island, through the picturesque villages and
lavender fields.<br/>
Our second stop is St. Roko’s Chapel, a place with a
wonderful view of Stari Grad Plain (UNESCO World Heritage). Upon our arrival in Jelsa, our host at
Duboković Winery is Mr. Ivo Duboković - the owner of one of the best Croatian wines called
"Medvid".<br/>
He only produces 15 000 - 20 000 bottles per year and therefore his wines are in demand.
Duboković’s wine cellar is situated in a traditional Dalmatian "konoba" in Jelsa. One of his cooperative vineyards is located at an altitude of 530m near Hvar's S.<br/>
Overnight Stay in Hvar</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color:"blue"}}>Hvar – Dubrovnik</p>
              <p>Breakfast at Hotel.<br/>
The Ferry journey from Hvar to Dubrovnik is a quick and comfortable way to travel between
these two iconic cities. The distance between Hvar and Dubrovnik is around 211 km kilometres,
and the high-speed trains make the trip in just about 3hours and 30 minutes to 4 hours.
Dubrovnik, is a city in southern Croatia fronting the Adriatic Sea. It's known for its distinctive Old
Town, encircled with massive stone walls completed in the 16th century. Its well-preserved
buildings range from baroque St. Blaise Church to Renaissance Sponza Palace and Gothic Rector’s
Palace, now a history museum. Paved with limestone, the pedestrianized Stradun (or Placa) is
lined with shops and restaurants.<br/>
Overnight Stay in Dubrovnik</p>
              <p></p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{color:"blue"}}>Dubrovnik - Mostar and Kravica Waterfall Day Tour from Dubrovnik on SIC Basis || Entrance
Not Included|| Breakfast at Hotel.</p>
<p>Witness the Kravica Waterfalls, hidden in the forests of Bosnia-Herzegovina on a day tour. Visit
the city of Mostar and learn the history of the region with a professional guide.Depart Dubrovnik and journey to the border of Croatia and Bosnia-Herzegovina. Continue to the
small coastal town of Neum, admiring the pretty scenery of the Adriatic coast along the way.<br/>
Drive to the historic city of Mostar to explore the old town and see the famous Old Bridge over
the Neretva River. Take a short walking tour with a local guide for 30 minutes and learn more
about the town before enjoying free time 2,5 hours.<br/>
Afternoon arrive at the Kravica Waterfalls to see the tufa cascades of the River Trebižat drop 25
meters through the forest. In spring, witness the dramatic falls, while in summer and fall, enjoy a
swim in the shallow pools.<br/>
Free time 1 hour<br/>
Overnight Stay in Dubrovnik</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1555990538-1736b0258235?w=600"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{color:"blue"}}>Dubrovnik</p>
              <p>Breakfast at Hotel.<br/>
After breakfast proceed to airport with private transfer.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default CroatiaLanding2;