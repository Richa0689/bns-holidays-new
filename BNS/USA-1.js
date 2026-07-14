import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

/* ── shared constants ─────────────────────────────────────────── */
const WHATSAPP_NUMBER = "917066620673";

const initialForm = {
  name: "", mobile: "", email: "", desc: "",
  destination: "", adults: "", children: "", date: "", budget: "",
};

const faqs = [
  {
    question: "What is the best time to visit the USA for this coast-to-coast tour?",
    answer:
      "Spring (April–June) and Fall (September–October) offer the most pleasant weather across New York, Washington D.C., and California, with mild temperatures and fewer crowds. Summer (June–August) is peak season, ideal for Niagara Falls and the California coastline, while Las Vegas is best enjoyed outside the peak summer heat.",
  },
  {
    question: "What is included in the 13-day USA Panorama package?",
    answer:
      "The package includes hotel accommodation for 12 nights, daily breakfast, luxury coach transfers between cities, city tours in New York, Washington D.C., Las Vegas, Los Angeles and San Francisco, the Niagara Falls excursion, and the scenic 17-Mile Drive at Monterey Bay. International flights and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to the USA?",
    answer:
      "Indian passport holders require a US B1/B2 tourist visa. We recommend applying at least 8–10 weeks before your travel date, as interview slots can take time. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include the Statue of Liberty and Times Square in New York, the Lincoln Memorial and White House in Washington D.C., the thundering Niagara Falls, the dazzling Las Vegas Strip, Hollywood and Santa Monica in Los Angeles, the breathtaking 17-Mile Drive at Monterey Bay, and the Golden Gate Bridge in San Francisco.",
  },
  {
    question: "What currency is used across the USA?",
    answer:
      "The US Dollar (USD) is used throughout the country. Cards are widely accepted everywhere, but it is useful to carry some cash for tips, small purchases, and transit. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add extra nights in New York, a Grand Canyon extension, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
  },
];

/* ── QueryModal ───────────────────────────────────────────────── */
const QueryModal = ({ day, onClose }) => {
  const [form, setForm] = useState(initialForm);
  const [showExtra, setShowExtra] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name.trim() || !form.mobile.trim() || !form.email.trim()) {
      setError("Please fill in Name, Mobile and Email.");
      return;
    }
    setError("");

    const message =
      `*New Enquiry from BNS Holidays*\n` +
      `*Enquiry For:* ${day}\n` +
      `*Name:* ${form.name}\n` +
      `*Mobile:* +91 ${form.mobile}\n` +
      `*Email:* ${form.email}\n` +
      `*Description:* ${form.desc || "N/A"}` +
      (showExtra
        ? `\n*Destination:* ${form.destination || "N/A"}\n` +
          `*Adults:* ${form.adults || "N/A"}\n` +
          `*Children:* ${form.children || "N/A"}\n` +
          `*Travel Date:* ${form.date || "N/A"}\n` +
          `*Budget:* ${form.budget || "N/A"}`
        : "");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setForm(initialForm);
      setShowExtra(false);
    }, 2500);
  };

  const handleClose = () => { onClose(); setError(""); };

  return (
    <div
      className="eq-overlay"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="eq-modal" role="dialog" aria-modal="true" aria-label="Quick Enquiry form">
        <button className="eq-close" onClick={handleClose} aria-label="Close">✕</button>

        {submitted ? (
          <div className="eq-success">
            <div className="eq-success-icon">✓</div>
            <p>Thank you! We'll get back to you shortly.</p>
          </div>
        ) : (
          <>
            <h2 className="eq-title">QUICK ENQUIRY</h2>

            {error && <p className="eq-error">{error}</p>}

            <div className="eq-field">
              <input
                type="text" name="name" placeholder="Full Name*"
                value={form.name} onChange={handleChange}
              />
            </div>

            <div className="eq-field eq-phone-row">
              <div className="eq-flag">🇮🇳 +91</div>
              <input
                type="tel" name="mobile" placeholder="Mobile No.*"
                value={form.mobile} onChange={handleChange}
              />
            </div>

            <div className="eq-field">
              <input
                type="email" name="email" placeholder="Email ID*"
                value={form.email} onChange={handleChange}
              />
            </div>

            <div className="eq-field">
              <textarea
                name="desc" placeholder="Drop us a small description"
                value={form.desc} onChange={handleChange}
                rows={3}
              />
            </div>

            <p className="eq-helper">
              Would you like to share more info? It will help us curate the best tours for you.{" "}
              <em>(Optional)</em>
            </p>

            <button
              className="eq-toggle"
              onClick={() => setShowExtra((v) => !v)}
            >
              Additional Details {showExtra ? "▴" : "▾"}
            </button>

            {showExtra && (
              <div className="eq-extra">
                <div className="eq-field">
                  <input
                    type="text" name="destination" placeholder="Destination in mind"
                    value={form.destination} onChange={handleChange}
                  />
                </div>
                <div className="eq-field eq-phone-row">
                  <input
                    type="number" name="adults" placeholder="No. of adults"
                    value={form.adults} onChange={handleChange}
                    style={{ flex: 1 }}
                  />
                  <input
                    type="number" name="children" placeholder="No. of children"
                    value={form.children} onChange={handleChange}
                    style={{ flex: 1 }}
                  />
                </div>
                <div className="eq-field">
                  <input
                    type="date" name="date"
                    value={form.date} onChange={handleChange}
                  />
                </div>
                <div className="eq-field">
                  <input
                    type="text" name="budget" placeholder="Budget (approx)"
                    value={form.budget} onChange={handleChange}
                  />
                </div>
              </div>
            )}

            <button className="eq-submit" onClick={handleSubmit}>
              Submit Enquiry
            </button>
          </>
        )}
      </div>
    </div>
  );
};

/* ── Main page ───────────────────────────────────────────────── */
const USALanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
        src="https://res.cloudinary.com/djcyhbk2e/image/upload/f_auto,q_35,w_1200/v1/gvv/prod/ixgqptn5ntgzljqlgaai"
          alt="USA Tour"
        />

        <div className="hero-content">
          <h1>USA</h1>

          <p>
            New York • Washington D.C. • Niagara Falls • Las Vegas • Los Angeles • San Francisco
          </p>

          <Link to="/usa">
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
              src="https://wallpaperaccess.com/full/439612.jpg"
              alt="New York City"
            />
            <p>New York Skyline</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://plus.unsplash.com/premium_photo-1694475309861-c5d754d6690d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Washington DC"
            />
            <p>Washington, D.C.</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY3Gvxv-VHuQXaazQT068Wr4IkFeoqx6RONzltc9a_26xRG1l31tsF7-lp&s=10"
              alt="Niagara Falls"
            />
            <p>Niagara Falls</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRajoCym9kksuHGYCojhQ3jIV4UGl33AA60NxGQWq8nDw&s=10"
              alt="Las Vegas Strip"
            />
            <p>Las Vegas Strip</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🗽 Iconic American Landmarks</div>
          <div>🎰 The Glitz of Las Vegas</div>
          <div>🌉 Golden Gate & Pacific Coastline</div>
          <div>📸 Coast-to-Coast Scenic Journey</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Coast-to-Coast America in 13 Days</h2>

        <p>
          From skyscrapers to deserts, waterfalls to coastlines — the ultimate USA panorama
        </p>

        <br />

        <Link to="/usa">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>13 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://www.business.nyctourism.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F1aemqu6a6t65%2F6AMvUL2jvuYNSwfaXyeTuE%2Faa783f3b6e271c0945f13ebe0f8edd22%2F06_Lower_Manhattan_NYC_skyline_photo_Victor_Llorente_342475b1-4a8c-499a-8bc5-d670029941c6.jpg&w=3840&q=75"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>Arrival in New York</p>
              <p>
               At baggage claim, call the driver using the number provided on the voucher.
               The driver will direct you to the designated meeting point for your complimentary airport pick-up.
               Transfer to the hotel, check in, and settle in.

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhhJ4Wd5e4Nxn0WGvFQ9Yar4vPG24yOMA2omvgIAeyYIwp26Fex0fW5BnE&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>New York City Tour</p>
              <p>
               
               Morning<br />
                Indian breakfast at the restaurant.<br/>
               Guided NYC tour with drive-by/photo stops at: 9/11 Memorial, United Nations HQ, Rockefeller Center, Brooklyn Bridge.
              Lunch: on your own<br/>
              Afternoon<br/>
              Summit One Vanderbilt for panoramic views and immersive art installations<br/>
              Evening<br/>
              Hudson River Dinner Cruise with Indian dinner and Bollywood music
                Night views of the Statue of Liberty, the Brooklyn Bridge, and the Manhattan skyline
              Weather contingency: If weather or unforeseen issues arise, the cruise will be replaced with a visit to the Statue of Liberty


              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://res.klook.com/images/w_1200,h_630,c_fill,q_65/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/jdptb1yn4rvgjbmfgavc/WashingtonDCandPhiladelphiaDayTourfromNewYork-Klook.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>New York → Philadelphia → Washington, D.C.</p>
              <p>
               Morning <br/>
              Indian breakfast at the restaurant.
              Depart New York; outlet shopping stop at The Mills at Jersey Gardens
               Lunch: on your own<br/>
               Afternoon<br/>
               Guided city tour of Philadelphia
               Drive by Independence Hall, the Liberty Bell, Benjamin Franklin Parkway and Elfreth’s Alley, with photo stop at  Rocky steps<br/>
               Evening<br/>
               Continue to Washington, D.C.
               Indian dinner on arrival, then check in to the hotel.<br/>
               Overnight: Washington, D.C. 🌙

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJE-sVjZGA6MvS4GkJBByhAAqgdTvny0CaXjj7jU8Eg8SH7NfZGhM2_jJo&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Washington, D.C. City Tour</p>
              <p>
               Morning<br/>
               Breakfast at the hotel
               The People’s House: A White House Experience (interactive exhibits)
               The guided tour begins with the World War II Memorial and Lincoln Memorial
               Continue D.C. tour: exterior views/photo stops at the White House and U.S. Capitol Building<br/>
               Afternoon<br/>
               Smithsonian National Museum of Natural History (gems, fossils, dinosaurs)
               Lunch: on your own<br/>
               Evening<br/>
               Scenic drive to Harrisburg, Pennsylvania
               Indian dinner en route or on arrival; check in to the hotel

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.unsplash.com/photo-1598402453861-4fbcbf6ced3b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmlhZ2FyYSUyMGZhbGxzfGVufDB8fDB8fHww"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Washington, D.C. → Harrisburg → Niagara Falls</p>
              <p>
                Morning<br/>
               Breakfast at the hotel.
               Visit the Pennsylvania State Capitol (grand dome, artwork, historic chambers).
               Continue to Hershey’s Chocolate World (chocolate-making experience, shopping).
               Lunch on your own.<br/>
               Afternoon:<br/>
               Visit the Corning Museum of Glass (stunning glass art, live glassblowing demos).<br/>
               Evening:<br/>
               Journey onward to Niagara Falls.
               Indian dinner on arrival.
               Experience the evening Illumination of Niagara Falls.<br/>
               Overnight: Niagara Falls 🌙

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg4Sl0GnX9EmYkMoMS1mUm0jBjjZTAK14ADIpUJ5l8OQ&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Niagara Falls Excursion</p>
              <p>
                Morning<br/>
               Breakfast at the hotel.
               Maid of the Mist boat tour (up close to Bridal Veil Falls; expect mist).
               Cave of the Winds (Niagara Gorge descent; Hurricane Deck experience).<br/>
               Afternoon:<br/>
               Lunch on your own.
               Free time: explore the area, shop for souvenirs, or try Seneca Niagara Resort & Casino.<br/>
               Evening:<br/>
               Indian dinner.
               Overnight: Niagara Falls 🌙

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://images.trvl-media.com/place/5194573/6c60985e-f8f4-4d5c-bccc-35df7465e255.jpg?impolicy=fcrop&w=450&h=280&q=medium"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Depart Niagara Falls – Fly to Orlando (MCO)</p>
              <p>
                Morning<br/>
               After breakfast, check out of your hotel (check-out time is 11:00 AM).
               A representative will provide a private airport transfer based on your flight schedule.<br/>
               Note: For passengers with early flights, please be aware that the packed breakfast option is not available.<br/>
               Travel:
	             Depart from BUF (Niagara Falls) to MCO (Orlando) on a domestic flight.
	             Upon arrival in Orlando, hotel check-in is scheduled for 3:00 PM.

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52BiFc517Eo-iq4H-yKEyfAyvEcBs9Aq4X4KiyJXnU3zznhPLPf0lVNkw&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{ color: "blue" }}>ORLANDO </p>
              <p>
                         
	           The representative meets you at baggage claim and transfers you to your hotel (Delta Hotels Orlando Celebration or similar).
	           Check-in begins at 3:00 PM.<br/>
             Welcome to Orlando:<br/>
	           Discover one of the world’s most visited cities, famous for its theme parks and vibrant attractions<br/>
             Meals:<br/>
          	 Lunch on your own.<br/>
	           Dinner on your own.<br/>
             Overnight: At the hotel.

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuNBaq_4TgjJ92Q_AexhxPIesEJOxgejVz8x66LZxOtkA9fz3a9kCbcStf&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 9</h3>
              <p style={{ color: "blue" }}>ORLANDO (Magic Kingdom)</p>
              <p>
              Morning<br/>
	            Enjoy breakfast at the hotel.
              Check with the front desk for the shuttle’s round-trip schedule to Magic Kingdom.<br/>
	            Attraction:<br/>
	            Spend a full day at Magic Kingdom (enjoy classic attractions, enchanting parades, fireworks, and meet Disney Characters).
              Reminder: Carry your photo ID and printed ticket confirmation (smartphone recommended).
	            If you plan to stay for the fireworks, arrange your own transfer.<br/>
              Meals:<br/>
	            Lunch on your own.<br/>
              Dinner on your own.<br/>
              Overnight: At the hotel (Delta Hotels Orlando Celebration or similar).  



             </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7gdpIsmSmc0QEiQN3roZho-qCBmskVkl7MrpWRyCdkp3pZZWef36zo_aE&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 10</h3>
              <p style={{ color: "blue" }}>PORT CANAVERAL CRUISE </p>
              <p>
                Morning<br/>
                Relaxed breakfast at the hotel.<br/>
                Transfer:<br/>
                Driver picks you up at 10:00 AM for transfer to the Port Canaveral cruise terminal.<br/>
                Note: We provide drop-off only at Port Canaveral as per the itinerary.
                Cruise Information:<br/>
                We encourage booking a Royal Caribbean cruise (departing every Friday).
	              Inform us in advance if there are any deviations from your cruise plans

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuE_w_qQn_sKzlWbR98Kw5MXZzZ7gB-w0vUFzX6rrIhLPZSi1srWVsuEKX&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 11</h3>
              <p style={{ color: "blue" }}>ORLANDO (Free Day)</p>
              <p>
               Enjoy your cruise experience as scheduled.
              (Activities onboard are as per your cruise itinerary.)

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/730/190/355/cinderella-castle-castle-magic-kingdom-orlando-wallpaper-preview.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 12</h3>
              <p style={{ color: "blue" }}>ORLANDO (Free Day)</p>
              <p>
                The representative picks you up at the cruise terminal around  8:00 AM.
	              Transfer to the hotel (Delta Hotels Orlando Celebration or similar) with check-in at 3:00 PM.<br/>
	              Free Time:<br/>
	              Leave your luggage at the bell desk andEnjoy the day on your own.<br/>
	              Meals:<br/>
	              Lunch and dinner on your own.<br/>
	              Overnight: At the hotel. (Delta Hotels Orlando Celebration or similar).

              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTgb0tzlmI7-xTEUAgThzvvc-GVaPFhdgM5_dZ5_vlaNRbDiVj82SDrzja&s=10"
              alt=""
            />
            <div className="day-content">
              <h3>Day 13</h3>
              <p style={{ color: "blue" }}><br/>ORLANDO (Disney’s EPCOT)</p>
              <p>
                Morning<br/>
                Breakfast at the hotel<br/>.
                Attraction
                Check with the hotel for the shuttle’s round-trip schedule.
                Meals<br/>
                Lunch and dinner on your own.<br/>
                Overnight At the hotel (Delta Hotels Orlando Celebration or similar).
                </p>
                </div>
               </div>

                <div className="day-card">
                <img
              src="https://images.trvl-media.com/lodging/9000000/8760000/8753200/8753178/532e2e1c_y.jpg"
              alt=""
               />
            <div className="day-content">
              <h3>Day 14</h3>
              <p style={{ color: "blue" }}>FLYOUT TO VEGAS FROM MCO Orlando </p>
              <p>
                Our representative will pick you up from the Airport for a private airport transfer based on your individual flight times (please note that check-in time is 4:00 p.m.).<br/>

                Hotel: Paris Las Vegas (or similar), centrally located in the heart of the Strip
                Meals: Dinner
                Upon arrival in Las Vegas, proceed to the baggage claim area and call the driver using the contact number provided on your voucher. The driver will direct you to the designated meeting point for your complimentary airport pick-up.<br/>
                Evening Experience:<br/>
                Meet the Tour Escort at 6.00 PM
                Enjoy a delicious dinner at a local Indian restaurant.
                Visit The Sphere (optional), an immersive, state-of-the-art entertainment venue that combines breathtaking visuals, cutting-edge sound, and a multi-sensory experience unlike anything else in the world.
                Overnight stay at Paris Las Vegas (or similar)
 
              </p>
            </div>
            
          </div>
           <div className="day-card">
                <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPGmg1wLtNP1rs4vjupqRxOo6sqtckNS9GaFWzQB7t7Q&s=10"
              alt=""
               />
            <div className="day-content">
              <h3>Day 15</h3>
              <p style={{ color: "blue" }}>Las Vegas (Optional Grand Canyon)</p>
              <p>
                Morning<br/>
                Enjoy a packed breakfast before setting out for an optional excursion to the Grand Canyon West Rim. Enhance your visit with exciting add-ons such as the Skywalk, helicopter ride, or boat tour, offering unique perspectives of one of the world’s most awe-inspiring natural wonders.<br/>
                Evening<br/>
                Savor a flavorful dinner at an Indian restaurant.
                Embark on a Las Vegas Strip Night Tour, where you’ll marvel at the glittering lights, themed resorts, and iconic attractions along Las Vegas Boulevard.
                Continue to the Fremont Street Experience, a dazzling light and sound show beneath a massive LED canopy, complete with thrilling views of zipliners soaring overhead.
                Overnight stay at Paris Las Vegas (or similar)

 
              </p>
            </div>
            
          </div>
           <div className="day-card">
                <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mnDi34KTTQG8AWVpr-LtSUgv87ZDl2KVgJIi2bRadA&s=10"
              alt=""
               />
            <div className="day-content">
              <h3>Day 16</h3>
              <p style={{ color: "blue" }}>Las Vegas → Los Angeles</p>
              <p>
                Morning<br/>
               Enjoy breakfast in route to Los Angeles as you journey through the desert landscapes of Nevada and California.
               Stop at Ontario Mills Mall, Southern California’s largest outlet shopping destination, featuring designer labels and popular brand-name stores.<br/>
               Afternoon<br/>
               Embark on a guided city tour of Los Angeles. Highlights include the Hollywood Walk of Fame, the Dolby Theatre, the luxury boutiques of Rodeo Drive, and photo opportunities with the iconic Hollywood Sign.<br/>
               Evening<br/>
               Conclude the day with a delicious dinner before checking into your hotel.
               Overnight stay at Hilton Glendale (or similar)

              </p>
            </div>
            
          </div> <div className="day-card">
                <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIv3R5oePGosVBsmdyV2YzD7h4Ui1nOwshQ2zpjVIeg&s=10"
              alt=""
               />
            <div className="day-content">
              <h3>Day 17</h3>
              <p style={{ color: "blue" }}>Los Angeles → Fresno </p>
              <p>
               Morning<br/>
               Begin the day with a hearty breakfast at the hotel.
               Spend the morning at Universal Studios Hollywood, where thrilling theme park rides meet real film production sets. Enjoy behind-the-scenes experiences, live shows, and immersive attractions that bring movie magic to life.<br/>
               Afternoon<br/>
               Depart Los Angeles and enjoy a scenic drive to Fresno, passing through California’s picturesque landscapes.<br/>
               Evening<br/>
               Relish a flavorful Indian dinner before checking into your hotel.<br/>
               Overnight stay in Fresno

 
              </p>
            </div>
            
          </div> <div className="day-card">
                <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF2ABRHTli5GviEUOzv9Qd4WrCjvYr5qhTLHg9pOxG6w&s=10"
              alt=""
               />
            <div className="day-content">
              <h3>Day 18</h3>
              <p style={{ color: "blue" }}>– Fresno → Monterey Bay → 17-Mile Drive → San Francisco </p>
              <p>
               Morning<br/>
               Enjoy breakfast before departing Fresno and travel toward Monterey Bay, with a beach stop and a stop at Cannery Row for coastal views and a short break.<br/>

               Afternoon<br/>
               Experience the famous 17-Mile Drive, a scenic coastal loop of approximately 2 hours, including time for stops, photos, and enjoying highlights such as Pebble Beach, Spanish Bay, Bird Rock, Ghost Tree, and the Lone Cypress, before continuing toward San Francisco.<br/>

               Evening<br/>
               Enjoy dinner at an Indian restaurant before checking in at your hotel in San Francisco.

              </p>
            </div>
            
          </div> <div className="day-card">
                <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLMZXKUTxsDKvNWtmHoqNLhCRzamaOs9XaGf8KJdyx4w&s=10"
              alt=""
               />
            <div className="day-content">
              <h3>Day 19</h3>
              <p style={{ color: "blue" }}>San Francisco</p>
              <p>
               Morning & Afternoon<br/>
               Begin with a delicious breakfast before setting out on a full day of sightseeing in San Francisco.<br/>
               Bay Cruise: Sail along the waterfront with panoramic views of the Golden Gate Bridge, Alcatraz Island, and the glittering city skyline.<br/>
               The Flyer San Francisco: Experience a thrilling 3D flying theater ride that “lifts” you over the city’s most iconic landmarks.<br/>
               Guided City Tour: Visit Twin Peaks for breathtaking views, explore historic neighborhoods, and see many of the city’s most beloved landmarks.<br/>
               Cable Car Ride : Step aboard the world’s last manually operated cable car system for an unforgettable ride through the streets of San Francisco.<br/>
               Evening<br/>
               Conclude the day with a flavorful Indian dinner before returning to your hotel.

              </p>
            </div>
            
          </div> <div className="day-card">
                <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGP0r1DY5hArjUPuarIVHmUPspktlzqlymSd8bBDOuig&s=10"
              alt=""
               />
            <div className="day-content">
              <h3>Day 20</h3>
              <p style={{ color: "blue" }}>Departure from San Francisco </p>
              <p>
                Morning
                Enjoy your final breakfast at the hotel before checking out ( Packed breakfast is not available for passengers taking early flights)
                Transfer to San Francisco International Airport for your return flight.
________________________________________

 
              </p>
            </div>
            
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("13 Days USA Panorama East and West Luxury Coach Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your American journey</p>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`faq-item ${openFaq === idx ? "faq-open" : ""}`}>
              <button
                className="faq-question"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openFaq === idx ? "▲" : "▼"}</span>
              </button>
              {openFaq === idx && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {activeModal && (
        <QueryModal
          day={activeModal}
          onClose={() => setActiveModal(null)}
        />
      )}

      {/* scoped extra styles */}
      <style>{`
        .send-query-btn {
          margin-top: 12px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 22px;
          background: linear-gradient(135deg, #c8860a 0%, #e6a820 100%);
          color: #fff;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.04em;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s;
          box-shadow: 0 3px 12px rgba(200,134,10,0.35);
        }
        .send-query-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(200,134,10,0.45);
        }

        .faq-section {
          padding: 60px 24px;
          max-width: 820px;
          margin: 0 auto;
        }
        .faq-section h2 {
          text-align: center;
          font-size: 2rem;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 6px;
          font-family: 'Georgia';
        }
        .faq-subtitle {
          text-align: center;
          color: #777;
          font-size: 0.95rem;
          margin-bottom: 36px;
        }
        .faq-list { display: flex; flex-direction: column; gap: 10px; }
        .faq-item {
          border: 1.5px solid #e8e0d4;
          border-radius: 10px;
          overflow: hidden;
          transition: border-color 0.2s;
        }
        .faq-item.faq-open { border-color: #c8860a; }
        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          padding: 18px 20px;
          background: #fdf8f2;
          border: none;
          cursor: pointer;
          font-size: 0.97rem;
          font-weight: 600;
          color: #1a1a1a;
          text-align: left;
          transition: background 0.15s;
          font-family: inherit;
        }
        .faq-item.faq-open .faq-question { background: #fff7eb; color: #c8860a; }
        .faq-question:hover { background: #fff3e0; }
        .faq-icon { flex-shrink: 0; font-size: 0.7rem; color: #c8860a; }
        .faq-answer {
          padding: 16px 20px 20px;
          font-size: 0.92rem;
          color: #555;
          line-height: 1.65;
          background: #fff;
          border-top: 1px solid #f0e8dc;
          animation: fadeDown 0.2s ease;
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default USALanding;