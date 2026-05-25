import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const PortugalLanding = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://cdn.inovtravel.com/deals/us-lisbon-evora-sevilha-algarve/fs-df4f34-seville-spain-canal-promenade-around-famous-land-2023-11-27-05-15-46-utc.jpg"
          alt="Portugal Tour"
        />

        <div className="hero-content">
          <h1>Best of Seville + Lisbon + Porto</h1>

          <p>
            Spain & Portugal Tour • 05 Nights / 06 Days
          </p>

          <Link to="/portugal">
            <button className="explore-btn">
              Explore Tour
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
              src="https://data.agatetravel.com/images/album/images/19416/2501141130052031.jpg"
              alt="Seville"
            />
            <p>Seville Old Town</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/13/cb/a1/citysightseeing-portugal.jpg?w=1200&h=1200&s=1"
              alt="Lisbon"
            />
            <p>Lisbon City Tour</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://t3.ftcdn.net/jpg/19/67/51/98/360_F_1967519831_k9I5nzjR07V1lWAeIyOfWdcIUIKN5Mhc.jpg"
              alt="Porto"
            />
            <p>Porto Riverside</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://www.airpano.ru/files/pena-palace-portugal/images/image2.jpg"
              alt="Sintra"
            />
            <p>Sintra Palace</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Historic European Cities</div>
          <div>🌊 Beautiful Coastal Views</div>
          <div>🍷 Portuguese Food & Culture</div>
          <div>📸 Perfect Europe Photography Tour</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Explore Spain & Portugal</h2>

        <p>
          Experience culture, architecture & scenic beauty
        </p>

        <br />

        <Link to="/portugal">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>06 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://b772872.smushcdn.com/772872/wp-content/uploads/2024/06/seville-airport-terminal.jpg?lossy=1&strip=1&webp=1"
              alt=""
            />

            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{color:"blue"}}>Seville – Arrival<br/>Welcome to Seville – The Pearl of Andalusia!</p>
              <p>Your adventure begins with a smooth private transfer from Seville Airport to your hotel. Once you
arrive, settle in and get ready to experience one of Spain’s most enchanting cities, famous for its
Moorish architecture, flamenco rhythms, and historic charm. Explore the vibrant streets, indulge in
delicious tapas, and discover the warmth and beauty that make Seville unforgettable.<br/>
Overnight stay in Seville.
</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://res.klook.com/image/upload/w_1265,h_791,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/h0weoil3sqhinhxnpzql.webp"
              alt=""
            />

            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color:"blue"}}>Seville – Seville 01 Day Hop on Hop Off Bus Tour</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, proceed for your Seville Hop On Hop Off Bus Tour.<br/>
Highlight: 01 Day Hop On Hop Off Bus Tour included.<br/>
Hop aboard the iconic red double-decker bus and explore Seville’s most celebrated landmarks at
your own pace. With 14 convenient stops, you can visit prestigious Islamic monuments, lush
gardens, and enjoy the essence of Andalusian culture. Enjoy open-top views, onboard audio
commentary, free Wi-Fi, and additional free walking tours covering Plaza de España, Maria Luisa
Park, and the atmospheric Jewish Quarter of Santa Cruz.<br/>
Overnight stay in Seville.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://img.rezdy.com/PRODUCT_IMAGE/164461/1c44191aa4d54a7a925d004bf3ba468atourImage_lg.jpg"
              alt=""
            />

            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{color:"blue"}}>Seville – Lisbon</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, check out from the hotel. A private transfer will take you to Seville Airport for your
onward flight to Lisbon.<br/>
Upon arrival in Lisbon, a private transfer will comfortably take you to your hotel.
Welcome to Lisbon – The City of Seven Hills!<br/>
Lisbon is a charming blend of historic traditions and contemporary culture. From cobbled streets
and pastel-colored buildings to its thriving food and arts scene, Lisbon offers a perfect balance of old
and new. Enjoy your day at leisure to explore the city’s atmospheric neighborhoods or relax at your
hotel.<br/>
Overnight stay in Lisbon.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/18b36c0b-%E9%87%8C%E6%96%AF%E6%9C%ACBig-Bus%E5%9F%8E%E5%B8%82%E8%A7%82%E5%85%89%E5%B7%B4%E5%A3%AB-KLOOK%E5%AE%A2%E8%B7%AF/LisbonCitySightseeingBusPass.jpg"
              alt=""
            />

            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color:"blue"}}>Lisbon – Lisbon 01 Day Hop-On Hop-Off Bus Tour</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, proceed for your Lisbon Hop-On Hop-Off Bus Tour.<br/>
Highlight: 01 Day Hop-On Hop-Off Bus Tour included.<br/>
Discover Lisbon’s highlights aboard an open-top sightseeing bus, offering the flexibility to explore iconic
attractions such as the Jerónimos Monastery, Belém Tower, and the historic Baixa district. Enjoy
panoramic views, informative audio commentary, and the freedom to hop on and off at your preferred
stops throughout the day.<br/>
Overnight stay in Lisbon.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://i.natgeofe.com/n/a418b667-c00b-417d-9ee5-32dfec838a8f/coverstory_portugal_GettyImages-533960357_HR.jpg"
              alt=""
            />

            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color:"blue"}}>Lisbon – Porto</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, check out from the hotel and travel to Porto. Travelling from Lisbon to Porto by
train is a fantastic option, with trains running frequently throughout the day. The journey typically
takes around 2 hours and 39 minutes to 3 hours and 44 minutes, covering a distance of
approximately 274-332 kilometres.<br/>
Welcome to Porto – Portugal’s city of bridges, wine, and riverside charm!
Porto is known for its enchanting old town, stunning riverfront, and world-famous port wine.
Explore the cobbled lanes of Ribeira, take in the scenic Douro River views, or simply relax and enjoy
the city’s warm atmosphere.<br/>
Overnight stay in Porto.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.vinci-airports.com/wp-content/uploads/2024/08/VINCIAIRPORT_PORTO_PORTUGAL_26012017_PGUIMARAES_CAPA_HD_119-scaled.jpg"
              alt=""
            />

            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{color:"blue"}}>Porto – Departure</p>
              <p>Breakfast at Hotel.<br/>
After breakfast, check out from the hotel. A private transfer will take you from your Porto hotel to
Porto Airport for your departure flight.<br/>
Your journey through Seville, Lisbon, and Porto comes to an end with wonderful memories.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default PortugalLanding;