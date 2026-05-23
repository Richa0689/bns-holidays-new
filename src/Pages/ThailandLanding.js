import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const ThailandLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://www.hostelworld.com/blog/wp-content/uploads/2019/12/Best-places-to-visit-in-Thailand-@cadop.jpg"
          alt="Thailand"
        />
        <div className="hero-content">
          <h1>Explore Thailand</h1>
          <p>Beaches. Culture. Adventure.</p>
          <Link to="/thailand">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://ik.imgkit.net/3vlqs5axxjf/external/http://images.ntmllc.com/v4/destination/Thailand/Phuket-City/220668_SCN_Phuket_iStock910551026_Z20B18.jpg?tr=w-1200%2Cfo-auto" />
            <p>Phuket</p>
          </div>

          <div className="highlight-card">
            <img src="https://blog.bangkokair.com/wp-content/uploads/2024/10/Cover_bangkok-travel-guide-thailand-capital.jpg" />
            <p>Bangkok</p>
          </div>

          <div className="highlight-card">
            <img src="https://i0.wp.com/toasttothailand.com/wp-content/uploads/2019/03/pattaya-walking-street-1.jpg?fit=1024%2C632&ssl=1" />
            <p>Pattaya</p>
          </div>

          <div className="highlight-card">
            <img src="https://whereintheworldisnina.com/wp-content/uploads/2023/08/krabi-beaches.jpg" />
            <p>Krabi</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose Thailand Tours?</h2>

        <div className="why-grid">
          <div>🏝️ Stunning Beaches</div>
          <div>🛕 Rich Culture & Temples</div>
          <div>🍜 Street Food Paradise</div>
          <div>🎉 Nightlife & Fun</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Dream Thailand Trip</h2>
        <p>Book now and get best deals on Thailand tours</p><br />
        <Link to="/thailand">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>6 Days Thailand Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://thaiest.com/images/thailand/travel/thai-voa-bkk/bangkok-voa-01.jpeg" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{color:"blue"}}>Warm Airport Pick-Up with a private transfer to your hotel on PVT basis <br/> Evening proceeds for Alcazar Show Pattaya on sharing basis. </p>
              <p>Evening proceeds for Alcazar Show Pattaya on sharing basis. <br/>It’s a show of professional entertainers presenting artistic impersonations through songs and tales of love and adventure, accompanied by fantastic sound and light show as well as some of the most spectacular scenery to be found outside Hollywood!<br/>  • Get your tickets in advance for one of the most popular cabaret shows in Pattaya, the Alcazar Cabaret Show.<br/> • Choose from regular seating or VIP seats for the best view. <br/>• Alcazar Cabaret Pattaya has several wonderful shows up to 17 different shows performed by approximately 100 Professional performers and staff. <br/>• Enjoy spending your entertaining time with our gorgeous ladyboys show on the spectacular stage sets!    </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://yourthaiguide.com/wp-content/uploads/2025/08/Koh-Larn-Pattaya-2.jpg" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color:"blue"}}>After breakfast at the hotel get ready for the full day Coral Island Tour by Speedboat with Indian Lunch on Sharing Basis  (Excluding National Park Fee) </p>
              <p>Coral Island (Koh Lan) is the largest of the "near islands", off south Pattaya. It is at the southeast end of the Bay of Bangkok, on the east side of the Gulf of Siam. Administratively Ko Lan belongs to the Amphoe Bang Lamung, Chonburi. Most of Ko Lan's beaches are on its west side. Most visited is Tawaen Beach, where there is a small harbour. You will enjoy the sea, sun sand and the length of the beach is lined with small tourist shops. </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://static.wixstatic.com/media/bd8b76_1345c730cd814383a7c5b69c377438ce~mv2.jpg/v1/fit/w_2500,h_1330,al_c/bd8b76_1345c730cd814383a7c5b69c377438ce~mv2.jpg" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{color:"blue"}}>Day Visit to Tiger Park on sharing basis & The Sanctuary of Truth on private transfer  </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://wanderon-images.gumlet.io/gallery/new/2026/01/27/1769502936111-what-to-buy-in-thailand.jpg" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color:"blue"}}>Day Free To Explore on own.  </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://assets.telegraphindia.com/telegraph/2022/Dec/1669965855_wat-benchamabophit-1.jpg" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color:"blue"}}>After breakfast at the hotel check out from the hotel & proceed for Bangkok Hotel Bangkok Temple Guided Tour Golden and Marble Buddha with Gems Gallery and King Powe on private transfer  </p>
              <p>After enjoying your time in Pattaya, it is time to travel to Bangkok to explore the vibrant nightlife and shopping experiences of Bangkok. <br/>  Transfer from Pattaya Hotel to Bangkok Hotel, Stop at Gems Gallery and King Power en route Bangkok Two Temple <br/> • The guests will be transferred to Wat Traimit, the temple of the Golden Buddha with 5.5 Tonnes of solid gold, sculptured in Sukhothai style<br/> • Visit the Marble Temple, a mixture of Thai and European architecture that houses a unique collection of rare Buddha images <br/> Golden Buddha - The Golden Buddha, officially titled Phra Phuttha Maha Suwana Patimakon, is a gold Maravijaya Attitude seated Buddharupa statue, with a weight of 5.5 tonnes. It is located in the temple of Wat Traimit, Bangkok, Thailand. <br/> Marble Buddha - Wat Benchamabophit Dusitvanaram is a Buddhist temple in the Dusit district of Bangkok, Thailand. Also known as the marble temple, it is one of Bangkok's best-known temples and a major tourist attraction. It typifies Bangkok's ornate style of high gables, stepped-out roofs and elaborate finials.<br/>  Drop off at Bangkok hotel after the tour.<br/>Evening proceeds for Chaophraya Princess Dinner Cruise International Buffet on sharing basis. <br/>Embark on a memorable night of dining and ambience on one of Bangkok's most popular restaurant boats. Relax in modern comfort and dine like King Rama V on a variety of scrumptious dishes. Feel welcomed by Thai hospitality as your hostesses greet you in traditional costume with a welcome drink. Feast on a variety of authentic Thai dishes and observe the lifestyles of Thai locals as you spend a memorable evening cruising past some of the best sights of Bangkok. View the historical landmarks on a river cruise along the Chao Phraya River and experience the beautiful night sceneries with a romantic atmosphere on our dinner cruise in the middle of Bangkok. After your gastronomic exploration, sway with the rhythm of music and dance as performers entertain you with the musical flavours of Thailand. End your tour feeling satisfied as you depart back to your hotel.  <br/>• Embark on a memorable night of the dining and ambience on one of Bangkok's most popular restaurant boats. <br/>• See a variety of performers, from a live band to traditional Thai dancing. <br/> • Enjoy the Bangkok nights-cape and take in the cool breeze from the perch of the boat deck, overlooking the famous Chao Phraya River <br/>• Indulge in a gourmet buffet of Indian delicacies as well as international favourites <br/>• English Commentary along the River   </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://img.avianexperiences.com/attractions/bc9fc20c-7329-45b7-9dde-f1ec293bfb1a" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{color:"blue"}}>Morning After Breakfast Proceed for Mahanakhon Sky Walk </p>
              <p>• Visit Thailand's tallest completed building, the King Power Mahanakhon Tower. <br/>• Take an elevator to the 74th floor, where you can enjoy stunning 360-degree views from the Indoor Observation Deck.<br/> • Learn more about Bangkok from the Observation Deck using Augmented reality and interactive touch screens.<br/> • Head to the 78th floor and try your hand at walking over the seethrough glass floor, 310 meters above the ground!  <br/>Evening free to Visit the Kha San Road to enjoy the evening on you own. </p>
            </div>
          </div>
          <div className="day-card">
            <img src="https://i.pinimg.com/736x/c2/5b/49/c25b49f77d03a56575d9d09512769117.jpg" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{color:"blue"}}>Morning after breakfast visit Safari World + Marine park on sharing  basis  & Evening Checkout from the hotel & proceed to the Sky hotel on own.   </p>
              <p>Night free to explore on own & visit icon Siam Mall   </p>
            
            </div>
          </div>
          <div className="day-card">
            <img src="https://blog.aci.aero/wp-content/uploads/2024/07/featureaiport_thailand-63.jpg" />
            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{color:"blue"}}>After breakfast keep your luggage at the hotel counter & visit nana plaza back to the hotel collect your luggage & proceed towards airport on private basis   </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ThailandLanding;