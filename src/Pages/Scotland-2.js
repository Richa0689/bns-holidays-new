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
    question: "What is the best time to visit Edinburgh and Glasgow for this tour?",
    answer:
      "May to September is ideal, with long daylight hours, mild weather and green landscapes across Scotland. Summer (June–August) is peak season, great for outdoor sightseeing and Highland excursions, while spring and early autumn offer fewer crowds and comfortable temperatures for city walks.",
  },
  {
    question: "What is included in the 7-day Best of Edinburgh & Glasgow package?",
    answer:
      "The package includes 6 nights accommodation (3 nights Edinburgh, 3 nights Glasgow), daily breakfast, comfortable coach transfers between cities, guided city tours in Edinburgh and Glasgow, and sightseeing at iconic landmarks along the way. International flights, visa fees and personal expenses are not included.",
  },
  {
    question: "Do I need a visa to travel to Scotland?",
    answer:
      "Indian passport holders require a UK Standard Visitor Visa, which covers travel across Scotland on this itinerary. We recommend applying at least 6–8 weeks before your travel date. Our team can assist you with documentation and appointment scheduling.",
  },
  {
    question: "What are the must-see attractions on this tour?",
    answer:
      "Highlights include Edinburgh Castle and the Royal Mile, a scenic day trip to the Scottish Highlands and Loch Ness, the vibrant art and architecture of Glasgow, and the stunning shores of Loch Lomond.",
  },
  {
    question: "What currency is used across Scotland?",
    answer:
      "Scotland uses the Pound Sterling (GBP). Cards are widely accepted everywhere, but it's useful to carry some local cash for small purchases and transit. We recommend informing your bank before travelling to avoid transaction issues.",
  },
  {
    question: "Can I customise this itinerary?",
    answer:
      "Absolutely! This itinerary can be fully tailored to your preferences, travel dates, and budget. Whether you'd like to add an Isle of Skye excursion, extra nights in Edinburgh, or upgrade your hotels, our team will curate the perfect personalised experience for you.",
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
const EdinburghGlasgowLanding = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://wallpaperaccess.com/full/914332.jpg"
          alt="Edinburgh & Glasgow Tour"
        />

        <div className="hero-content">
          <h1>Best of Edinburgh & Glasgow</h1>

          <p>
            Edinburgh • Glasgow • Scottish Highlands
          </p>

          <Link to="/Edinburgh-Glasgow">
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
              src="https://wallpaperbat.com/img/271253-edinburgh-castle-hd-wallpaper.jpg"
              alt="Edinburgh Castle"
            />
            <p>Edinburgh Castle</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.LPRr4SiuaeEBiKVteV9pCAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Royal Mile Edinburgh"
            />
            <p>Royal Mile, Edinburgh</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://wallpapercat.com/w/full/f/a/9/682995-1920x1080-desktop-full-hd-loch-ness-scottish-highlands-background-photo.jpg"
              alt="Loch Ness Scottish Highlands"
            />
            <p>Loch Ness & Highlands</p>
          </div>

          <div className="highlight-card">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.zr3y2MsKHZ-etCH7UbwBjwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Glasgow Scotland"
            />
            <p>Glasgow City & Loch Lomond</p>
          </div>

        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Tour?</h2>

        <div className="why-grid">
          <div>🏰 Iconic Edinburgh Castle</div>
          <div>⛰️ Breathtaking Scottish Highlands</div>
          <div>🎨 Vibrant Glasgow Culture</div>
          <div>🌊 Scenic Loch Lomond</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience the Best of Scotland in 7 Days</h2>

        <p>
          From the storybook charm of Edinburgh to the creative buzz of Glasgow — a journey through Scotland's finest
        </p>

        <br />

        <Link to="/Edinburgh-Glasgow">
          <button className="book-now-btn">
            Book Now
          </button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>7 Days Itinerary</h2>

        <div className="itinerary-list">

          <div className="day-card">
            <img
              src="https://w0.peakpx.com/wallpaper/719/648/HD-wallpaper-morning-mist-autumn-edinburgh-scotland-bing.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 1</h3>
              <p style={{ color: "blue" }}>India → Edinburgh</p>
              <p>
          Welcome to Edinburgh– The City of Lights! <br/>
Your adventure begins with a smooth transfer from the airport to your hotel, where you’ll be ready 
to immerse yourself in the magic of Edinburgh. Whether you're here for the art, the culture, the 
fashion, or the food, Edinburgh offers an abundance of experiences waiting to be explored.<br/> 
 Overnight Stay in Edinburgh 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.xafyr6Uw1JuhuYW6_9xt_gHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 2</h3>
              <p style={{ color: "blue" }}>Edinburgh – Edinburgh 01 Day Hop on Hop off Bus</p>
              <p>
            Breakfast at Hotel.<br/> 
After breakfast proceed to Edinburgh 01 Day Hop on Hop off Bus city tour on SIC basis. Customers 
can join the tour at any of the stops along the route <br/>
Description: Explore Edinburgh at your own pace with an award-winning hop-on hop-off open-top 
bus tour. Enjoy the onboard commentary that describes the history behind the city. Stop at 
locations like St Andrew Square, Johnstone Terrace, the Royal Mile. See sights like Edinburgh Castle 
and Grassmarket. Board the bus and begin your city adventure. Compare Edinburgh's Old Town, 
where families lived in cramped conditions and rubbish was thrown out of the windows, to the 
elegant Georgian New Town, with its 3 main streets and square at either end<br/>. 
Overnight Stay in Edinburgh 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://www.civitatis.com/f/reino-unido/edimburgo/tour-2-dias-lago-ness-r32.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 3</h3>
              <p style={{ color: "blue" }}>Edinburgh – Loch Ness, Glencoe & the Scottish Highlands Tour from Edinburgh on SIC Basis</p>
              <p>
           Breakfast at Hotel. <br/>
Loch Ness, Glencoe & the Scottish Highlands Tour from Edinburgh on SIC Basis      
 OurEdinburgh tours depart from Castle Terrace, Edinburgh EH1 2EW, outside the NCP Car Park. 
Description: Head into the Scottish Highlands on a scenic full-day trip from Edinburgh. Travel by air
conditioned luxury coach while your guide shares stories, music, and commentary along the 
way.Stop first in the Callander area, where you may get a chance to see the famous Highland cows 
(seasonal). Continue onward to Glencoe for dramatic views, historic tales of the clan massacres, and 
a brief photo stop.Arrive at the Fort William area before heading to the iconic Loch Ness. Here, you 
Apextion DMC <br/>
Email: sales@apextiondmc.com, groups@apextiondmc.com || Contact No.: +91 11 4921 5555 
www.apextiondmc.com <br/> 
LONDON | PARIS | NEW DELHI|MUMBAI <br/>
can choose optional activities such as visiting Urquhart Castle, taking a Loch Ness boat cruise, 
enjoying the “Donald Fraser – Illicit Whisky Experience,” or exploring the surrounding walking 
routes. Travel the full length of Loch Ness, pass through Inverness, and continue south with a short 
break in Pitlochry before returning to Edinburgh around 20:30hrs.<br/> 
Overnight Stay in Edinburgh 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://i.pinimg.com/736x/88/b9/f2/88b9f25d982971f5478481bbdca120ea.jpg"
              alt=""
            />
            <div className="day-content">
              <h3>Day 4</h3>
              <p style={{ color: "blue" }}>Edinburgh – Glasgow</p>
              <p> 
Breakfast at Hotel.<br/>  
After breakfast transfer from hotel to station on private basis<br/>.  
Train from Edinburgh to Glasgow. Travelling by train from Edinburgh to Glasgow is a fantastic way to 
experience UK.<br/>  
 Private transfer from Edinburgh Hotel to Edinburgh Train station 
Train Details | XXHRS-XXXHRS | Edinburgh to Glasgow 
Private transfer from Glasgow Train station to Glasgow Hotel <br/>
 Overnight Stay in Glasgow 
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://th.bing.com/th/id/OIP.JsQA2Sw8VT1hMNZUGIrNHwHaE7?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 5</h3>
              <p style={{ color: "blue" }}>Glasgow – Glasgow 01 Day Hop on Hop off City tour on SIC Basis</p>
              <p>
         Breakfast at Hotel. <br/>
Glasgow 01 Day Hop on Hop off City bus 
Meeting Point: Meeting point may vary depending on the option booked. <br/>
Description: Explore one of the most vibrant Scottish cities with a 1 or 2-day ticket to Glasgow’s hop
on and hop-off bus. Explore museums, art galleries, parks, theatres and even Glasgow Cathedral.In 
addition, the city’s pubs, cafés, bars and nightclubs help make Glasgow one of the new preferred 
destinations for short breaks. The visitor attractions and places of interest are spread throughout 
the city and the best way to visit the attractions and to see the city, is to step on one of the open
top tour buses for a fully guided tour round all the main sights.Jump off at any of the stops, 
conveniently located for the Gothic Cathedral, the Riverside Museum of Transport and Travel, the 
recently restored Kelvingrove Art Galleries, Glasgow University, Glasgow Green and Clydeside 
Distillery, among many other sights.<br/> 
Overnight Stay in Glasgow
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.PlLHwYKJidUFH0BEWATGogHaEt?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
            />
            <div className="day-content">
              <h3>Day 6</h3>
              <p style={{ color: "blue" }}>Glasgow – Glenfinnan, Fort William, and Glencoe Day Trip from Glasgow on SIC Basis</p>
              <p>
               Breakfast at Hotel.<br/> 
Meeting point: Meet outside the Royal Scottish National Orchestra which is opposite the Buchanan 
bus station.Description: Depart Glasgow in the morning and travel north to the Highlands, stopping in Tyndrum 
before continuing to the dramatic landscapes of Glencoe. Enjoy its iconic scenery, featured in 
Skyfall, and learn about the history of the Massacre of Glencoe. Continue through stunning Highland 
scenery to Fort William with views of Ben Nevis, Britain’s tallest mountain. Then travel east to the 
highlight of the day: the Glenfinnan Viaduct, famous from the Harry Potter films. In summer, you 
may even see the Jacobite Steam Train crossing the bridge. Spend time at the Glenfinnan 
Monument on the shores of Loch Shiel, an important site of the 1745 Jacobite Uprising, and enjoy 
views of the viaduct, the loch, and Harry Potter filming locations. Begin the return journey via 
Neptune’s Staircase on the Caledonian Canal, then continue south along the scenic banks of Loch 
Lomond with a brief stop in Tarbet before arriving back in Glasgow. <br/>
 Overnight Stay in Glasgow.     
              </p>
            </div>
          </div>

          <div className="day-card">
            <img
              src="https://th.bing.com/th/id/R.2968e324d5f96980b7e75b4e47c871c0?rik=7g1hQnJ025oooQ&riu=http%3a%2f%2fcdn.wallpapersafari.com%2f23%2f17%2fmTjS28.jpg&ehk=FzYAL7L2zjaMByAeWnJVcVy%2flKUEiI4Zisr%2bB08y6%2fc%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
            <div className="day-content">
              <h3>Day 7</h3>
              <p style={{ color: "blue" }}>Glasgow → India</p>
              <p>
Breakfast at Hotel.<br/> 
Private Transfer from Glasgow Hotel to Glasgow Airport<br/> 
Flight Details: XXX| GLA -XXX | XXXHRS-XXXHRS     
                ________________________________________
              </p>
            </div>
          </div>

        </div>

        {/* Send Query button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("7 Days Best of Edinburgh & Glasgow Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Scottish journey</p>
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

export default EdinburghGlasgowLanding;