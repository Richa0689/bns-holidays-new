import React from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const BestAustraliaLanding = () => {
  return (
    <div className="usa-landing">

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://api.nomadsworld.com/wp-content/uploads/2017/08/australia_kangaroos.jpg"
          alt="Australia"
        />
        <div className="hero-content">
          <h1>Best of Australia</h1>
          <p>8 Days • 3 Cities • 1 Country</p>
          <Link to="/australia">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        <h2>Top Destinations</h2>

        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://www.goindigo.in/content/dam/s6web/in/en/assets/Destinations/international/sydney/Sydney%20Opera%20House%20Large.jpeg" alt="" />
            <p>Sydney</p>
          </div>

          <div className="highlight-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Gold_Coast_skyline_%28Unsplash%29.jpg" alt="" />
            <p>Gold Coast</p>
          </div>

          <div className="highlight-card">
            <img src="https://www.tripsavvy.com/thmb/2AGo509kDat7XpEKPCAw2pQhRzk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cityscape-of-melbourne-city-of-australia-during-the-sunset--873409300-8db98cef20b44200abfb339188d801f7.jpg" alt="" />
            <p>Melbourne</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2>Why Choose Australia Tours?</h2>

        <div className="why-grid">
          <div>🏖️ Beautiful Beaches</div>
          <div>🌆 Modern Cities</div>
          <div>🐨 Wildlife Experience</div>
          <div>🎢 Adventure Activities</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Plan Your Dream Australia Trip</h2>
        <p>Starting from ₹1,75,000</p><br />
        <Link to="/australia">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* Itinerary */}
      <div className="itinerary-section">
        <h2>8 Days Australia Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img src="https://c8.alamy.com/comp/G40MAE/arrival-departure-gates-at-at-sydney-kingsford-smith-airport-mascot-G40MAE.jpg" alt="" />
            <div className="day-content">
              <h3>Day 1</h3>
              <p >Private transfers to Hotel<br/>
               Evening free to Leisure</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://i.etsystatic.com/12444060/r/il/7bf66a/2537403876/il_fullxfull.2537403876_23mh.jpg" alt="" />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{color:"blue"}}>Big Bus Sydney and Bondi Hop-on Hop-off Tour</p>
              <p>Explore Sydney and Bondi Beach on this hop-on hop-off<br/>
sightseeing tour, which takes you by double-decker bus to 34
stops around the city including Sydney Opera House, Sydney
Harbour Bridge, Darling Harbour, Bondi Beach and more. Enjoy
unobstructed views and recorded commentary on board.
Simply hop off to walk around and sightsee in depth.<br/>
Attractions on the Red Route - Sydney City Tour:<br/>
Hyde Park Barracks / Australian Museum / Sea Life Sydney
Aquarium / Darling Harbour / The Rocks / Bondi Beach /
Sydney Harbour Bridge / Royal Botanic Garden Sydney /
Sydney Town Hall / Hyde Park / Circular Quay / City
Sightseeing Sydney / Madame Tussauds Sydney / Big Bus
Sydney / Sydney Tower Eye Observation Deck
Blue Route - Bondi Tour<br/>
Attractions on the Blue Route - Bondi Tour:<br/>
Paddington Markets / Centennial Park / Bondi Beach / Rose
Bay / Double Bay</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://executivetransfers.net.au/wp-content/uploads/2024/11/greenmount-beach-during-sunset-on-queensland-1024x683.jpg" alt="" />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{color:"blue"}}>Full Day Tour of Golden Beaches and Ocean Vistas</p>
              <p>Discover natural wonders near Sydney on a full-day tour from
Sydney to the golden beaches and oceanic vista. Enjoy the splendid
beaches at Bondi, Tamarama and the freshwater beach walk
coastal paths, and admire the flora at the Royal Botanic Gardens.
This tour is ideal for outdoors and nature-loving travelers.</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://res.klook.com/image/upload/fl_lossy.progressive,w_1200,h_630,c_fill,q_85/v1687158056/cbugqm8rx1xbhsyeeydu.jpg" alt="" />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{color:"blue"}}>Blue Mountains Tour</p>
              <p>The tour starts from Sydney CBD pickups from 7:00 am. We then
make our way to the first highlight of the day at the Sydney Zoo.
Here you will meet with Australian native animals and join a First
Nations cultural talk with an experienced guide. We then make
our way to the Blue Mountains where you will view the amazing
view of Jamison Valley, the unique rock formation of the Three
Sisters before we explore the thrilling rides at the Scenic World.<br/>

Highlights<br/>- Sydney Zoo<br/>
- Echo Point Lookout<br/>
- Leura<br/>
- Scenic World</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/ba/8d/94/caption.jpg?w=900&h=900&s=1&cx=497&cy=317&chk=v1_ab88dcb18086a45b38ae" alt="" />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{color:"blue"}}>Day free for leisure Or explore the local place on own</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/8b/40/c1/the-newly-built-extension.jpg?w=500&h=500&s=1" alt="" />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{color:"blue"}}>Discovery Botanic Garden</p>
              <p>Trixity offers a series of trails which are not only sightseeing
experiences around some of Australia’s most beautiful cities but
we will also give your brain a work-out on the way round.
You will guide yourself on your smart device along the trail
solving clues as you go - get the answer correct and we send you
the next clue – easy! There are ‘Help’ & ‘Hint’ options if you get
stuck and of course you can use your device to look things up if

required.<br/>

We think this is an excellent way to spend 2-3 hours discovering

the city you live in, work in, play in<br/>

Sydney Opera House Official Guided Walking Tour<br/>
Your tour of the Sydney Opera House takes you behind the scenes
of one of the world’s most iconic performance venues, where
more than 1,500 concerts, plays, musicals and ballets are staged
every year. Explore it with an insider guide, who shares stories
and fun facts about the opera house’s history, performances and
architecture throughout your 1-hour tour.</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://www.gocheapcampervans.com.au/wp-content/uploads/2023/10/3-Taronga-Zoo-New-South-Wales-Wild-Encounters-Await.jpg" alt="" />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{color:"blue"}}>Sydney Harbour Ferry with Taronga Zoo Entry Ticket</p>
              <p>Enjoy a day out at the award-winning Taronga Zoo, home to
more than 2,900 exotic and native species. Learn about the
different animals through one of the many free zoo-keeper
talks; be entertained by the playful seals at the Seal Theatre;
and watch the famous free-flight bird show, where birds of prey
show off their hunting skills. Visit the Asian Rainforest and see
the orangutans swinging in the trees; then pass the winding
river of the AGL Amazon exhibit, home to animals from South

America.
<br/>
Enjoy fantastic views of the harbor, city skyline and famous
landmarks like the Opera House and Harbour Bridge.</p>
            </div>
          </div>

          <div className="day-card">
            <img src="https://media.istockphoto.com/id/458961179/tr/foto%C4%9Fraf/sydney-airport-departures.jpg?s=612x612&w=0&k=20&c=dqhZoR_QfjS3E8TZIOqP6odYMJerFZQEHbrPi3oUShs=" alt="" />
            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{color:"blue"}}>Day free for leisure or shopping</p>
              <p>Some of the best sopping place in Sydney
(World Square, Queen Victoria Building, The Strand Arcade,Westfield & Many More)</p>
            </div>
          </div>
          <div className="day-card">
            <img src="https://media.istockphoto.com/id/458961179/tr/foto%C4%9Fraf/sydney-airport-departures.jpg?s=612x612&w=0&k=20&c=dqhZoR_QfjS3E8TZIOqP6odYMJerFZQEHbrPi3oUShs=" alt="" />
            <div className="day-content">
              <h3>Day 9</h3>
              <p style={{color:"blue"}}>Experience Infinity at Sydney Tower</p>
              <p>Enjoy an elegant meal while overlooking the stunning Sydney
skyline at Infinity Sydney Tower, soaring 88 stories above the
ground, this sophisticated restaurant offers an intimate, stylish
fine dining experience, with contemporary cuisine. Choose from
an à la carte menu to customize your 2- or 3-course meal, or
enjoy premium seating and set menu with the 5 course
degustation menu and toast with a glass of Champagne as you
enjoy views from one of Sydney's best vantage points.<br/>OPTIONAL<br/>
Sunset and Sparkle Sydney Harbour Cruise
Sea Sydney Harbour by dusk and enjoy the stunning Sydney
landmarks as the sun sets and the city lights come to life. The
Sunset & Sparkle tour is perfect to bring along the whole family,
friends and visiting guests, to enjoy breathtaking views of
Sydney and its stunning harbour!</p>
            </div>
          </div>
          <div className="day-card">
            <img src="https://media.istockphoto.com/id/458961179/tr/foto%C4%9Fraf/sydney-airport-departures.jpg?s=612x612&w=0&k=20&c=dqhZoR_QfjS3E8TZIOqP6odYMJerFZQEHbrPi3oUShs=" alt="" />
            <div className="day-content">
              <h3>Day 10</h3>
              <p style={{color:"blue"}}>After breakfast check out from the hotel.Private transfer to the Airport</p>
            </div>
          </div>
           <div className="day-card">
            <img src="https://media.istockphoto.com/id/458961179/tr/foto%C4%9Fraf/sydney-airport-departures.jpg?s=612x612&w=0&k=20&c=dqhZoR_QfjS3E8TZIOqP6odYMJerFZQEHbrPi3oUShs=" alt="" />
            <div className="day-content">
              <h3>Day 11</h3>
              <p style={{color:"blue"}}>Melbourne City Discovery Tour</p>
              <p>Enjoy a professionally guided tour of Melbourne's most iconic
buildings, cultural attractions and historical landmarks. Stops
will be made where time permits to allow for photo opportunities.<br/>
We make sure you get a feel for why Melbourne is regarded so
highly and will show you as much of our beautiful city as
possible!<br/>
Highlights<br/>
- Collins Street<br/>
- Melbourne Cricket Ground<br/>
- Fitzroy Gardens<br/>
- Old Melbourne Gaol<br/>
- Parliament House<br/>
- St. Patrick's Cathedral<br/>
- Melbourne Museum<br/>
- Lygon Street<br/>
- Queen Victoria Market<br/>
- Melbourne Convention and Exhibition Centre<br/>
- Luna Park Melbourne<br/>
- National Gallery of Victoria
- Flinders Street Station</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default BestAustraliaLanding;