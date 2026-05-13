import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const BangkokPattayaLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://www.travelandleisure.com/thmb/nDDNqO2EctQhiIfZrxeXTF47zhE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-koh-phi-phi-PLACESTHAILAND1023-09b9d347b3cd4844b4ae19e4e06a9a6d.jpg"
          alt="Bangkok Pattaya"
        />
        <div className="hero-content">
          <h1>Bangkok & Pattaya</h1>
          <p>City Life. Beaches. Night Fun.</p>
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
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/e3/e6/92/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_cd56231660940ec6f969" />
            <p>Bangkok Temples</p>
          </div>

          <div className="highlight-card">
            <img src="https://cdn.kimkim.com/files/a/images/e07d7b506bbfacc0f20c4b5aadf98f948345e737/original-451bc13b2bf831633ffb88ee321cf71e.jpg" />
            <p>Pattaya Beach</p>
          </div>

          <div className="highlight-card">
            <img src="https://img.avianexperiences.com/attractions/52358e01-bfdb-4e98-b18a-0b5d25235073" />
            <p>Coral Island</p>
          </div>

          <div className="highlight-card">
            <img src="https://yourthaiguide.com/wp-content/uploads/2025/08/your-thai-guide-bangkok-floating-markets-3.jpg" />
            <p>Floating Market</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏙️ Vibrant City Life</div>
          <div>🏝️ Beach Experience</div>
          <div>🍜 Street Food</div>
          <div>🎉 Nightlife</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Book Bangkok & Pattaya Tour</h2>
        <p>Starting at ₹75,000 | EMI ₹3,500/month</p><br />
        <Link to="/thailand">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>7 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://liveandletsfly.com/wp-content/uploads/2021/12/Bangkok-BKK-Arrival-2021-4.jpeg" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{color: "blue"}}>Warm Airport Pick-Up with a private transfer to Pattaya hotel on PVT basis </p>
              <p> <span style={{fontWeight:"bold"}}>Evening Alcazar Show on Sharing basis</span> <br />
                Enjoy the World’s famous dance show by transgenders with music,  and dance performances with colorful costumes, high-tech lighting, sound stage effects and creative choreography. </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://plus.unsplash.com/premium_photo-1661962432490-6188a6420a81?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29yYWwlMjBpc2xhbmQlMjB0aGFpbGFuZHxlbnwwfHwwfHx8MA%3D%3D" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color: "blue"}}>After breakfast at the hotel get ready for the full the activities Coral Island Tour by Speedboat with Indian Lunch On Private Transfer </p>
              <p>Coral Island (Koh Lan) is the largest of the "near islands", off south Pattaya. It is at the southeast end of the Bay of Bangkok, on the eastside of the Gulf of Siam. Administratively Ko Lan belongs to the Amphoe Bang Lamung, Chonburi. Most of Ko Lan's beaches are on its west side. Most visited is Tawaen Beach, where there is a small harbour. You will enjoy the sea, suns and the length of the beach is lined with small tourist shops. </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://ik.imagekit.io/travalot/development/resources/attachments/2025/6/15/80fb0d70-612b-11f0-bc72-a71998e2455a.jpg?tr=w-1600,h-1067,c-at_max:f-webp:q-85" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{color: "blue"}}>After Breakfast at the hotel get ready for the Tiger Park Play 3 (Big + Smallest + Medium or Small) on Private transfer </p>
              <p>Don't miss this once in the lifetime activity, where you can take a selfie inside cage with unchained tigers at Tiger Park Pattaya. You can give them a hug, kiss, play and take a photo with tigers. All tigers were born and raised with love by professional staff and the environment which best for tigers to enjoy their life with human  .  <br />
               <span style={{fontWeight:"bold"}}>Evening Sanctuary of Truth on Private transfer </span><br />The Sanctuary of Truth is a world famous architectural masterpiece. It is an all wooden temple built entirely from teak and other hardwoods, without using a single nail.  </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://tourxsell-blob-one.azureedge.net/storage/activities/33/b1140483-d600-471a-bcbf-ad5e3594df78.jpg" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color: "blue"}}>Morning after breakfast check out from the hotel proceed for Pattaya to Bangkok Enroute Bangkok Temple Guided Tour Golden and Marble Buddha with Gems Gallery and King Power on Private transfer </p>
              <p>After enjoying your time in Pattaya, it is time to travel to Bangkok to explore the vibrant night life and shopping experiences of Bangkok.  <br /> Transfer from Pattaya Hotel to Bangkok Hotel, Stop at Gems Gallery and King Power en route Bangkok Two Temple ·<br />  The guests will be transferred to Wat Traimit, the temple of the Golden Buddha with 5.5 Tonnes of solid gold, sculptured in Sukho thai style  ·  <br />   Visit the Marble Temple, a mixture of Thai and European architecture that houses a unique collection of rare Buddha Images Golden Buddha - The Golden Buddha, officially titled Phra Phuttha Maha Suwana Patimakon, is a gold Maravijaya Attitude seated Buddha rupastatue,with a weight of 5.5 tonnes. It is located in the temple of Wat Traimit, Bangkok, Thailand. 
              Marble Buddha-Wat Benchamabophit Dusitvanaramisa Buddhist temple in the Dusit district of Bangkok, Thailand. Also known as the marble temple, it is one of Bangkok's best-known temples and a major tourist attraction. It typifies Bangkok's ornate style of high gables, stepped-out roofs and elaborate finials. <br /> <span style={{fontWeight:"bold"}}>Drop off at Bangkok hotel after the tour. </span><br />
              <span style={{fontWeight:"bold"}}>Evening Chaophraya Princess Dinner Cruise International Buffet On sharing transfer </span><br />Embark on a memorable night of dining and ambience on one ofBangkok's most popular restaurant boats. Relax in modern comfort and dine like King Rama V on a variety of scrumptious dishes. Feel welcomed by Thai hospitality as your hostesses greet you in traditional costume with a welcome drink. Feast on a variety of authentic Thai dishes and observe the lifestyles of Thai locals as you spend a memorable evening cruising past some of the best sights of Bangkok. View the historical landmarks on a river cruise along the Chao Phraya River and experience the beautiful night sceneries with a romantic atmosphere on our dinner cruise in the middle of Bangkok. After your gastronomic exploration, sway with the rhythm of music and dance as performers entertain you with the musical flavours of Thailand. End your tour feeling satisfied as you depart back to your hotel. </p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.trawell.in/admin/images/upload/161646644Safari_World.jpg" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color:"blue"}}>After Breakfast at the hotel get ready for the Safari World Tour on Private transfer </p>
              <p>Safari World is one of Thailand’s most popular wildlife attractions, offering a fun and educational experience for all ages. There are two main parks i.e Safari Park and Marine Park.</p>
            </div>
          </div>
           <div className="day-card">
            <img src="https://media.tacdn.com/media/photo-m/1280/28/cf/e1/1b/caption.jpg" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{color:"blue"}}>After Breakfast at the hotel get ready for the Mahanakhon Skywalk Tour on sharing transfer  </p>
              <p>The Mahanakhon Skywalk is Thailand’s highest observation deck experience, located atop the striking King Power Mahanakhon skyscraper in Bangkok’s central business district. Its multi-level attraction combines breathtaking panoramic views, thrilling moments and immersive features that make it a standard tour stop in the city. <br />
              Evening Free for shopping at Ikonsiam Mall & Meena Baazar, Nana Plaza.  </p>
            </div>
          </div>
          <div className="day-card">
            <img src="https://thumbs.dreamstime.com/b/shopping-departure-halls-suvarnabhumi-international-airport-bangkok-capital-thailand-th-october-stock-image-as-jpg-341434718.jpg" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{color:"blue"}}>After Breakfast complete the checkout procedure & proceed towards Bangkok Airport on private transfer.  </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default BangkokPattayaLanding;