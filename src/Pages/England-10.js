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
    question: "What is the best time to visit London, Dublin and Belfast for this tour?",
    answer:
      "Late Spring to early Autumn (May–September) offers the mildest weather and the longest daylight hours, ideal for sightseeing in London, exploring Dublin's streets, and touring Belfast and the Causeway Coast. December also has festive charm with Christmas markets, though days are shorter.",
  },
  {
    question: "What is included in the 10-day British Isles Grand Discovery package?",
    answer:
      "The package includes hotel accommodation for 9 nights (3 nights each in London, Dublin and Belfast), daily breakfast, flights/transfers between cities, guided city tours in all three cities, and sightseeing including the Wicklow countryside and Giant's Causeway. International flights to/from India and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to the UK and Ireland?",
    answer:
      "Indian passport holders require a UK Standard Visitor visa (which also covers Northern Ireland/Belfast) and a separate Irish visa for the Republic of Ireland, as it is not part of the Schengen Area. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include Big Ben, the Tower of London and Buckingham Palace in London, Dublin Castle, Trinity College and Temple Bar in Ireland's capital, and Titanic Belfast along with the dramatic Giant's Causeway on the Causeway Coast in Northern Ireland.",
  },
  {
    question: "What currencies are used across London, Dublin and Belfast?",
    answer:
      "London and Belfast use the Pound Sterling (GBP), while Dublin uses the Euro (EUR). Cards are widely accepted in all three cities, though it's handy to carry some local cash for small purchases. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like extra nights in London, a full-day Giant's Causeway tour, or upgraded hotels, our team will curate the perfect personalised experience for you.",
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
const GrandDiscoveryLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.I05I_qVSM-D3lPn3V3Q9FwHaHa?r=0&w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="British Isles Grand Discovery Tour"
        />

        <div className="hero-content">
          <h1>British Isles Grand Discovery</h1>

          <p>
            London • Dublin • Belfast
          </p>

          <Link to="/Grand-Discovery">
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
              src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop"
              alt="London"
            />
            <p>London Skyline</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.iYAOWLI2b8n1hFQUr5gI-wHaE7?r=0&w=4696&h=3127&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Dublin Castle"
            />
            <p>Dublin Castle</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.vq26USV22JEFL8dBZFpsXAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Titanic Belfast"
            />
            <p>Titanic Belfast</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://th.bing.com/th/id/OIP.pAKoZvyWGxCyPqbfWdBVbgHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Giant's Causeway"
            />
            <p>Giant's Causeway</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Iconic British Landmarks</div>
          <div>🍀 The Charm of Dublin</div>
          <div>🚢 Titanic Belfast Experience</div>
          <div>🪨 The Legendary Giant's Causeway</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Discover Three Capitals in 10 Days</h2>

        <p>
          From royal palaces to lively Irish pubs to Belfast's maritime legacy — the ultimate British Isles adventure
        </p>

        <br />

        <Link to="/Grand-Discovery">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>10 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2022/11/07191216/01-1-1568x766.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}> India → London</p>
              <p>
             Welcome to London – World’s most vibrant and historic capitals<br/> 
             Welcome to London! After you land, your private driver will be waiting for you at the arrivals hall. He 
will take you directly to your hotel for a smooth and comfortable start to your trip <br/>
 Overnight Stay in London
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.TLzc1VDHbUg7Hm83r7H49AHaFz?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>London – City tour with London Eye and London River Cruise  </p>
              <p>
               Breakfast at the hotel. <br/> 
After breakfast, proceed for your London City Tour on SIC basis. <br/> 
Your panoramic city tour covers some of London’s most iconic landmarks, giving you a perfect 
introduction to the city’s rich history, culture, and modern attractions. <br/> 
The London Eye Experience  <br/>
Your tour includes a ticket for the London Eye, one of the world’s tallest observation wheels. 
Enjoy a 30-minute ride in a fully enclosed glass capsule 
Get breathtaking panoramic views of the River Thames, Big Ben, St. Paul’s Cathedral, and the entire 
London skyline  <br/>
A perfect opportunity for unforgettable photos of London from above 
London River Cruise  <br/>
Experience London from a unique perspective as you cruise along the River Thames. 
Sail past major landmarks including Tower Bridge, Shakespeare’s Globe, The Shard, St. Paul’s 
Cathedral, and the London Eye <br/> 
Enjoy commentary that highlights the history and stories behind London’s most famous sites 
A relaxing and scenic journey through the heart of the city <br/> 
 Overnight Stay in London
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse1.explicit.bing.net/th/id/OIP.JR4f5YegZw14onhif9_S_QHaD8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>London – City tour with Madame Tussauds and Tower Bridge  </p>
              <p>
             Breakfast at the hotel.<br/> 
After breakfast, proceed for your London City Tour on SIC basis
Your panoramic city tour covers some of London’s most iconic landmarks, giving you a perfect 
introduction to the city’s rich history, culture, and modern attractions. <br/>
Madame Tussauds London <br/>
Your tour includes entry to Madame Tussauds Wax Museum, a must-visit London attraction. 
Meet lifelike wax figures of your favorite celebrities, historical figures, sports stars, and political 
leaders <br/>
Enjoy interactive zones like Marvel Superheroes 4D, Star Wars experience, and music icons 
Take memorable photos with your favorite personalities in themed settings 
Tower Bridge <br/>
Walk along the iconic Tower Bridge, explore its high-level glass walkways, and enjoy views of the River 
Thames and the city skyline. Learn about the bridge’s fascinating engineering and history. <br/>
 Overnight Stay in London 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://res.cloudinary.com/djcyhbk2e/image/upload/f_auto,q_35,w_1200/v1/gvv/prod/jpzloiihpqk7jrnqal6s"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>London – Dublin  </p>
              <p>
            Breakfast at the hotel. <br/> 
After breakfast, private transfer from your London hotel to London Airport (LHR). 
Board your flight to Dublin, the charming capital of Ireland known for its warm hospitality, historic 
streets, and lively culture.  <br/>
 Upon arrival at Dublin Airport, meet your private driver who will transfer you to your hotel. 
 Overnight Stay in Dublin
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit1600900gsm/eventThirdParty/2024/10/11/4ee9b4b9-3f5c-473e-a61c-84410b700efb-1728585064455-609b7b978d1af7ab14703824f4a08f14.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Dublin - Cliffs of Moher, Burren & Galway City Day Tour from Dublin on SIC Basis  </p>
              <p>
              Breakfast at the hotel.<br/> 
Today, enjoy your full-day Cliffs of Moher, Burren & Galway City Day Tour on SIC basis<br/>. 
Witness one of Ireland’s most dramatic natural wonders as the Atlantic Ocean meets towering cliffs. <br/>
Explore the rugged beauty of the Burren region and visit the vibrant city of Galway known for its 
arts, music, and coastal charm.<br/> 
 Overnight Stay in Dublin 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,height=540,dpr=2/tour_img/628617cf284ed.jpeg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}> Dublin - Half Day Coastal Tour to Howth Village from Dublin on SIC Basis  </p>
              <p>
              Breakfast at the hotel.<br/> 
After breakfast, proceed for your Half Day Coastal Tour to Howth Village on SIC basis. <br/>
Discover the charming seaside village of Howth with Big Bus Tours on this half-day Coastal Tour. The 
tour includes a return bus journey from Dublin to Howth Summit and its famous fishing village
Take in the incredible views of the cliffs of Howth during a guided walking tour. Spot gannets, seals, 
puffins, curlews and of course, seagulls, on the wild headlands overlooking Dublin Bay. Then enjoy 
free time to explore the picturesque Howth Village at your leisure. Get a glimpse of the 19th-century 
Martello Tower, and stroll past the medieval ruins of St. Mary’s Abbey. <br/>
 Overnight Stay in Dublin 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.lkv64yBSz6B9BBqGepfI9AHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Dublin – Belfast   </p>
              <p>
             Breakfast at the hotel. <br/>
After breakfast, private transfer from the Dublin Hotel to Belfast Hotel. 
Arrive in Belfast, Northern Ireland’s capital, known for its history, culture, and the birthplace of the 
Titanic.<br/> 
 Check in at your hotel and relax for the rest of the day.<br/> 
 Overnight Stay in Belfast
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.YUH9nMgTKQwWIg8HRdJJ1QHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 8</h3>
              <p style={{ color: "blue" }}>Belfast – Giant’s Causeway and Game of Thrones Day Tour </p>
              <p>
             Breakfast at the hotel.  <br/>
Today, enjoy your full-day Giant’s Causeway and Game of Thrones Day Tour on SIC basis. 
Discover the beauty of Northern Ireland and the world-famous Giant’s Causeway on a tour from 
Belfast. Visit the Giants Causeway, Carrickfergus Castle, Glenarm Castle, Carnlough Harbour, 
Waterfoot Caves, Cushendun Curfew House, Rope Bridge, and The Dark Hedges while navigating the 
Antrim Coast Road. <br/> 
 After leaving Belfast in the morning, a short journey will take you to the first stop of the day at 
Carrickfergus Castle, a 12th-century Norman castle. Walk around and take photographs of the castle 
and the harbor. <br/> 
 Overnight Stay in Belfast
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://th.bing.com/th/id/OIP.njiDMVbbuD_azjFoqrUtIQHaEK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 9</h3>
              <p style={{ color: "blue" }}> Belfast – Giant’s Causeway and Game of Thrones Day Tour </p>
              <p>
             Today, join the A History of Terror Walking Tour on a shared basis.<br/> 
Learn about Belfast’s complex and turbulent past as your guide explains key events, landmarks, and 
stories that shaped the city during the period known as The Troubles.<br/> 
 This tour offers a deep and insightful understanding of Northern Ireland’s history and peace journey. 
 Overnight Stay in Belfast
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://photos.smugmug.com/Europe/Northern-Ireland/i-hG75KBt/0/fba5e67e/XL/IMG_8191-XL.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 10</h3>
              <p style={{ color: "blue" }}>   Belfast → India </p>
              <p>
             Breakfast at the hotel. 

              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("British Isles Grand Discovery: London, Dublin & Belfast")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your British Isles journey</p>
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

export default GrandDiscoveryLanding;