import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const PortugalLanding2 = () => {
  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://www.nationalgeographic.com/content/dam/expeditions/destinations/europe/journeys/Iconic-portugal-and-spain/hero-portugal-and-spain.jpg"
          alt="Spain Portugal Tour"
        />

        <div className="hero-content">
          <h1>Spain & Portugal Explorer</h1>

          <p>
            Royal Cities • Coastal Wonders • Historic Architecture
          </p>

          <Link to="/portugal">
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
              src="https://www.tripsavvy.com/thmb/Tn_RCN18WpsYQOKFieLWxCFa63k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/thingstodoinmadridskyline-d05bf06ef9144f04973d5bfc50fbcee6.jpg"
              alt=""
            />
            <p>Madrid</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600"
              alt=""
            />
            <p>Porto</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://res.klook.com/image/upload/fl_lossy.progressive,q_60/Mobile/City/k6sfiwgjyq1tqxe1f5i3.jpg"
              alt=""
            />
            <p>Sintra</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://portugalonline.com/wp-content/uploads/2017/01/3.jpg"
              alt=""
            />
            <p>Algarve Coast</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Historic European Cities</div>
          <div>🌊 Scenic Coastal Views</div>
          <div>🍷 Famous Spanish & Portuguese Cuisine</div>
          <div>📸 Perfect for Culture & Photography Lovers</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Spain & Portugal</h2>

        <p>
          Book your unforgettable European journey today
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
        <h2>8 Nights / 9 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT13zVRTztfzN9Z0i45XdOnv5Q3jVOynCBlAw&s"
              alt=""
            />

            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{color:"blue"}}>Madrid <br/>Welcome to Madrid – The Heart of Spain!</p>
              <p>Upon arrival at Madrid Airport, you’ll be met for a private transfer to your city centre hotel.
Madrid, the vibrant capital of Spain, is known for its majestic boulevards, lively plazas, and cultural
treasures. Take some time to settle in and enjoy the atmosphere of this dynamic city. Depending on
your arrival time, you can take a leisurely stroll through nearby streets, soak in the local vibe, or
simply relax at your hotel and prepare for your Spanish adventure.<br/>
Overnight Stay in Madrid
</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://cdn-imgix.headout.com/media/images/532a90deedb4a7452343bc8cb510a1b1-32573-madrid-city-sightseeing--madrid-panoramic-bus-tour-01.jpg"
              alt=""
            />

            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color:"blue"}}>Madrid – Panoramic Bus Tour & Royal Palace</p>
              <p>Breakfast at the hotel<br/>
Start your day with a panoramic bus tour of Madrid, giving you an excellent overview of the city’s
iconic landmarks, historic streets, and cultural highlights. A live guide will share fascinating stories
and historical insights, providing a deeper understanding of Madrid’s rich heritage. Later, visit the
Royal Palace, the official residence of Spain’s royal family. Marvel at its grand architecture, lavish
interiors, and priceless art collections, and learn about the traditions and history of the Spanish
monarchy. This visit offers an intimate glimpse into the regal side of Madrid.<br/>
Overnight Stay in Madrid</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://res.klook.com/image/upload/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/vaus7julek2le4hlp9s2.jpg"
              alt=""
            />

            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{color:"blue"}}>Madrid – Day Trip to Segovia & Toledo</p>
              <p>Breakfast at the hotel<br/>
Embark on a full-day SIC tour to Segovia and Toledo, two of Spain’s most historic and visually
stunning cities. In Segovia, see the remarkable Roman aqueduct, a masterpiece of engineering that
has stood for centuries, and explore the Alcázar of Segovia, a fairytale-like castle with panoramic
views. In Toledo, stroll through cobblestone streets, visit magnificent cathedrals and synagogues,
and admire the city’s blend of Christian, Jewish, and Muslim architecture. This tour is a perfect
introduction to Spain’s rich cultural and historical heritage, combining architecture, art, and history
in a single day.<br/>
Overnight Stay in Madrid</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://t4.ftcdn.net/jpg/01/38/70/25/360_F_138702507_ird4Xbcz8WtEdprIK6QpSvEEaQ2uRmT0.jpg"
              alt=""
            />

            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color:"blue"}}>Madrid – Lisbon</p>
              <p>Breakfast at the hotel<br/>
Private transfer from your Madrid hotel to Madrid Airport (MAD) for your flight to Lisbon. Upon
arrival at Lisbon Airport, enjoy a private transfer to your city centre hotel. Lisbon, Portugal’s
charming capital, is famed for its hills, colorful streets, and riverside beauty. Depending on your
arrival time, you may have the opportunity to take a gentle evening walk around the historic
neighborhoods, enjoy local delicacies, or simply relax at your hotel and prepare for the adventures
ahead.<br/>
Overnight Stay in Lisbon.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://cdn.nattivus.com/img/actividades/Portugal/Lisboa/410_Lisbon_City_Tour/lisbon-city-tour-A.jpg"
              alt=""
            />

            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color:"blue"}}>Lisbon – Hop-On Hop-Off & Monuments</p>
              <p>Breakfast at the hotel<br/>
Discover Lisbon at your own pace on a 1-day Hop-On Hop-Off bus tour, with the flexibility to stop at
major landmarks and explore at leisure. Admire sights like Belém Tower, Jerónimos Monastery, and
São Jorge Castle, each offering unique insights into Portugal’s rich history. Visit the Jerónimos
Monastery, a UNESCO World Heritage Site, and marvel at its elaborate Manueline architecture,
reflecting Portugal’s Age of Discovery. Continue to Belém Tower, a 16th-century fortress that once
guarded the Tagus River and stands as an enduring symbol of Portuguese maritime power. This day
combines history, architecture, and culture in a comprehensive city exploration.<br/>
Overnight Stay in Lisbon.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/12/28/66/08.jpg"
              alt=""
            />

            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{color:"blue"}}>Lisbon - Day Trip to Segovia & Toledo from Madrid</p>
              <p>Breakfast at the hotel<br/>
Take a full-day SIC tour to explore the magical town of Sintra, the romantic Pena Palace, the
mystical Quinta da Regaleira, the breathtaking cliffs of Cabo da Roca, and the charming seaside
town of Cascais. Walk through Sintra’s quaint streets and royal gardens, admire the fairytale
architecture of Pena Palace, and discover the Initiation Well at Regaleira, steeped in mystery and
symbolism. Enjoy the stunning Atlantic views from Cabo da Roca, the westernmost point of
mainland Europe, and relax in the picturesque seaside town of Cascais. This tour showcases
Portugal’s natural beauty, architectural wonders, and rich cultural heritage.<br/>
Overnight Stay in Lisbon.
</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.ahstatic.com/photos/1593_ho_00_p_1024x768.jpg"
              alt=""
            />

            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{color:"blue"}}>Lisbon – Faro</p>
              <p>Breakfast at the hotel
Private transfer from your Lisbon hotel to Lisbon Train Station. Board the train from Lisboa Oriente
to Faro, enjoying a scenic journey through southern Portugal. On arrival, a private transfer to your
Faro hotel will bring you to the heart of the Algarve region, known for its sun-drenched beaches,charming towns, and dramatic cliffs. Take some time to settle in and soak in the relaxing coastal
atmosphere.<br/>
Overnight Stay in Faro.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://st3.idealista.pt/news/arquivos/styles/detail_sm/public/2024-10/images/777-s-nlen7w0r55o-unsplash.jpg?VersionId=8YxKadUEbjrh.6hxDK8vQipybVl5zDTy&itok=AIjsFdQe"
              alt=""
            />

            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{color:"blue"}}>Faro – Benagil Cave & Marinha Beach</p>
              <p>Breakfast at the hotel<br/>
Embark on a half-day shared tour from Faro to Benagil Cave and Marinha Beach, two of the
Algarve’s most iconic coastal attractions. Marvel at the stunning cliffs, turquoise waters, and hidden
grottos, including the famous Benagil Cave, and enjoy the pristine sands of Marinha Beach, often
ranked among the world’s most beautiful beaches. This tour is perfect for nature lovers,
photographers, and anyone seeking a relaxing coastal experience.<br/>
Overnight Stay in Faro.</p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://d34-a.sdn.cz/d_34/c_img_m3_A/nPt0vAiT3tBIuqIh8B0LgRN/9b9e.jpeg?fl=res,400,225,3"
              alt=""
            />

            <div className="day-content">
              <h3>Day 9</h3>
              <p style={{color:"blue"}}>Faro – Departure</p>
              <p>Breakfast at the hotel<br/>
Private transfer from your Faro hotel to Faro Airport (FAO) for your onward flight. Reflect on an
unforgettable journey through Spain and Portugal, filled with historic cities, stunning coastlines, and
cultural highlights.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default PortugalLanding2;