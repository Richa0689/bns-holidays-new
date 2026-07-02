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
    question: "What is the best time to visit Amsterdam, Brussels, and Paris?",
    answer:
      "All three cities are magnificent year-round destinations. Spring (April–May) is the most beloved season — Amsterdam's tulip fields and Keukenhof Gardens burst into full bloom, Brussels's Grand Place glows with warm light, and Paris's tree-lined boulevards come alive with café culture and cherry blossoms. Summer (June–August) brings long sunny days and vibrant open-air festivals across all three cities. Autumn (September–October) offers golden foliage, thinner crowds, and a more relaxed pace. Winter (December) is utterly magical — Amsterdam's canals shimmer with festive reflections, Brussels hosts one of Europe's finest Christmas markets on the Grand Place, and Paris's Champs-Élysées dazzles with holiday illuminations.",
  },
  {
    question: "What is included in the 8-night/9-day tour package?",
    answer:
      "The package includes accommodation for 8 nights, daily breakfast, airport transfers, guided sightseeing tours as per the itinerary, and intercity travel between Amsterdam, Brussels, and Paris. International flights and personal expenses are not included unless specified.",
  },
  {
    question: "Do I need a visa to travel to the Netherlands, Belgium, and France?",
    answer:
      "Indian passport holders require a Schengen visa to visit the Netherlands, Belgium, and France. All three countries are part of the Schengen Area, so a single Schengen visa covers the entire trip. We recommend applying at least 4–6 weeks in advance. Our team can guide you through the complete documentation process to ensure a smooth and hassle-free application.",
  },
  {
    question: "Is this tour suitable for first-time Europe travellers?",
    answer:
      "Absolutely! This 9-day itinerary is perfectly crafted for first-timers exploring Western Europe. With a generous pace across three countries, it covers iconic highlights — Amsterdam's canal rings, Van Gogh Museum and windmills, Brussels's Grand Place, Atomium and world-famous chocolates, and Paris's Eiffel Tower, Louvre, Versailles and Montmartre — giving you ample time at each destination without feeling rushed.",
  },
  {
    question: "What currency is used across the Netherlands, Belgium, and France?",
    answer:
      "All three countries — the Netherlands, Belgium, and France — use the Euro (€), making this one of the most convenient multi-country itineraries in Europe. You only need one currency for the entire 9-day trip. Credit and debit cards are widely accepted at hotels, restaurants, and major attractions, though it is advisable to carry some cash for smaller purchases, local markets, and tips.",
  },
  {
    question: "Can I customise the Amsterdam, Brussels & Paris itinerary?",
    answer:
      "Yes! Every itinerary is fully customisable based on your interests, travel dates, and budget. Whether you'd like to add a Keukenhof Tulip Gardens day trip from Amsterdam, a visit to the medieval city of Bruges from Brussels, a Palace of Versailles excursion from Paris, a sunset Seine River dinner cruise, or extra nights in any city, our team will craft the perfect personalised European escape for you.",
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
const AmsterdamToParisEscapeTour = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const itinerary = [
    {
      day: "Day 1",
      title: (
        <>
          Amsterdam<br/>
Arrival in Amsterdam: A Charming Beginning to Your European Holiday
        </>
      ),
      img: "https://amsterdambooking.com/wp-content/uploads/2025/07/What-to-see-in-Amsterdam-in-11-days-1024x585.jpg",
      desc: (
        <>
          Welcome to Amsterdam, a city known for its artistic heritage, scenic canals, and vibrant culture. Upon
arrival at Amsterdam AMS Airport, you will enjoy a smooth private transfer to your hotel.<br/>
Your first evening in Amsterdam offers the perfect introduction to the city's relaxed atmosphere. From
historic streets to enchanting waterways and lively squares, Amsterdam welcomes you with its
signature charm.<br/>
Overnight Stay in Amsterdam.
        </>
      ),
    },
    {
      day: "Day 2",
      title: "Highlight of the Day: Amsterdam Hop-on Hop-off Tour & Canal Cruise Ticket.",
      img: "https://da28ojrjakn6f.cloudfront.net/tickets/2001/NEW/img_1666170873_1666170936__am2.jpg?v=1.1.0",
      desc: (
        <>
          Breakfast at Hotel.<br/>
After breakfast, enjoy the Amsterdam 01-Day Hop on Hop off bus tour, offering a convenient way
to explore the city’s iconic landmarks, museums, and scenic canals at your own pace.
Your experience includes the Amsterdam Canal Cruise ticket, providing a relaxing journey through
the city’s picturesque waterways while admiring classic Dutch architecture and vibrant
neighborhoods.<br/>
Overnight Stay in Amsterdam
        </>
      ),
    },
    {
      day: "Day 3",
      title: "Zaanse Schans, Edam, Volendam & Marken Bus Tour from Amsterdam on SIC basis.",
      img: "https://admin.freetour.com/images/tours/33535/tour-to-zaanse-schans-edam-volendam-and-marken-05.jpg",
      desc: (
        <>
         Admire the famous windmills of Zaanse Schans, attend a clog-making demonstration, and sample
Edam and Gouda cheese. Head north of the city to see the historic windmills of Zaanse Schans on the
banks of the river Zaan.<br/>
Explore the traditional 17th-century houses and a collection of beautifully preserved windmills from
the nation’s industrial heritage.<br/>Continue on to visit Edam, a beautiful town known worldwide for its cheese. Enjoy a cheese tasting
and an exciting clog demonstration.<br/>
Before the end of the day, go to Volendam and Marken, passing many authentic polders, the name
given to land reclaimed from the sea. Wander down narrow streets, past colourful houses and visit
the harbors full of fishing boats.<br/>
Overnight Stay in Amsterdam

        </>
      ),
    },
    {
      day: "Day 4",
      title: "Amsterdam – Brussels",
      img: "https://wallpapercave.com/wp/wp2209219.jpg",
      desc: (
        <>
          Breakfast at Hotel.<br/>
After breakfast, enjoy a private transfer from your Amsterdam hotel to Amsterdam train station.
Travel to Brussels by train. On arrival, enjoy a private transfer from Brussels train station to your
hotel.<br/>
Brussels, the capital of Belgium and the heart of Europe, welcomes you with its rich blend of history,
modernity, and world-famous culinary delights.<br/>
Overnight Stay in Brussels.
        </>
      ),
    },
    {
      day: "Day 5",
      title: "Brussels – Guided Walking Tour",
      img: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1600,h_840/https://travelonquest.com/wp-content/uploads/2025/01/Top-Self-Walking-Tours-in-Brussels-1.png",
      desc: (
        <>
          Breakfast at Hotel.<br/>
Get an overview of the fascinating city of Brussels, with a tour through the medieval and Baroque
city, the industrial city, the bourgeois city, and on to modern Brussels.
During your walking tour of the city, the tour will be split into two different areas and times: the
Upper City and Lower City.<br/>
The Lower City include the Grand Palace, the Everard t'Serclaes monument on Charles Buls street,
the Manneken Pis and Grands Carmes street, Marché au Charbon street, the Covering of the Senne,
Riches Claires Street, and Grande Île street, Saint-Géry Island and more.<br/>
Whilst perusing through the Upper city, you'll notice a very different style. During this portion of the
tour, you will see landmarks such as the Grand Place, the power of merchants, the Galeries Royales
St Hubert, and the Mort Subite.<br/>
Overnight Stay in Brussels.
        </>
      ),
    },
    {
      day: "Day 6",
      title: "Brussels – Paris.",
      img: "https://images8.alphacoders.com/690/thumb-1920-690373.jpg",
      desc: (
        <>
          Breakfast at Hotel.
After breakfast, proceed by private transfer from your Brussels hotel to Brussels train station for
your onward train to Paris.
Upon arrival in Paris, a private transfer will take you to your hotel. Paris, the City of Lights, captivates
every visitor with its classic beauty, romantic ambience, world-class monuments, and timeless
charm.
          <br />
          Overnight Stay in Paris.
        </>
      ),
    },
    {
      day: "Day 7",
      title: "Paris – Hop on Hop off, Eiffel Tower & Seine Cruise.",
      img: "https://www.travelersuniverse.com/wp-content/uploads/2025/07/1_paris-eiffel-tower-hop-on-hop-off-bus-seine-river-cruise-800x533.jpg",
      desc: (
        <>
          Breakfast at Hotel.<br/>
After breakfast, enjoy your Paris 01-Day Hop on Hop off bus tour, giving you the flexibility to
explore landmarks such as the Louvre, Champs-Élysées, Notre-Dame, and more.<br/>
Your day includes the Eiffel Tower 02nd Level entry ticket, allowing you to experience breathtaking
views of Paris from one of the world’s most iconic monuments.<br/>
Complete your evening with the Seine River Cruise entry ticket, offering a stunning view of Paris
from the water as the city lights illuminate its famous bridges and monuments.<br/>
Overnight Stay in Paris.

        </>
      ),
    },
    {
      day: "Day 8",
      title: "Paris – Disneyland (01 Park)",
      img: "https://thf.bing.com/th/id/R.027ac80fc14dcc21e736b690af09f055?rik=eY%2bdPDB6rjRqpw&riu=http%3a%2f%2fcdn.wallpapersafari.com%2f3%2f96%2fdxIOKQ.jpg&ehk=qLeEL5MhzVWF9L4bW2wWxMuo8h%2bmqUbu3laLyO8iDP4%3d&risl=&pid=ImgRaw&r=0",
      desc: (
        <>
          Highlight of the Day: Disneyland 01-Day 01 Park Ticket with Shuttle Transfer
Breakfast at Hotel.<br/>
Today, enjoy a magical full-day experience at Disneyland Paris. With your included Disneyland 01-
Day 01 Park ticket with shuttle transfer, immerse yourself in thrilling rides, live shows, themed
attractions, and the enchanting world of Disney characters.<br/>
Overnight Stay in Paris

        </>
      ),
    },
    {
      day: "Day 9",
      title: "Paris – Departure",
      img: "https://thumbs.dreamstime.com/b/departure-gates-charles-de-gaulle-airport-paris-france-cdg-december-352373451.jpg?w=992",
      desc: (
        <>
          Breakfast at Hotel.<br/>
After breakfast, proceed for your private transfer from Paris hotel to Paris CDG Airport for your return
journey to India.
        </>
      ),
    },
  ];

  return (
    <div className="usa-landing">

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://images.stockcake.com/public/8/e/5/8e5b80ba-7d6c-424a-8c3e-ae7a4a7a2c18_large/paris-meets-amsterdam-stockcake.jpg"
          alt="Amsterdam to Paris Escape Tour"
        />
        <div className="hero-content">
          <h1>Amsterdam to Paris Escape</h1>
          <p>Dutch Canals. Belgian Grandeur. Parisian Romance.</p>
          <Link to="/france-landing5">
            <button className="explore-btn">View Tours</button>
          </Link>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights">
        <h2>Major Destinations</h2>
        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="https://wallpaperbat.com/img/623678-amsterdam-netherlands-hd-wallpaper-1-desktop-background.jpg" alt="" />
            <p>Amsterdam, Netherlands</p>
          </div>
          <div className="highlight-card">
            <img src="https://thumbs.dreamstime.com/b/traditional-dutch-windmills-along-canal-pink-tulip-flowers-foreground-netherlands-217497622.jpg" alt="" />
            <p>Dutch Windmills & Tulips</p>
          </div>
          <div className="highlight-card">
            <img src="https://wallpaperbat.com/img/428474-royal-palace-of-brussels-wallpaper-grand-place-hd.jpg" alt="" />
            <p>Grand Place, Brussels</p>
          </div>
          <div className="highlight-card">
            <img src="https://wallpaperaccess.com/full/296566.jpg" alt="" />
            <p>Paris, France</p>
          </div>
        </div>
      </div>

      {/* WHY VISIT */}
      <div className="why-section">
        <h2>Why Choose This Journey?</h2>
        <div className="why-grid">
          <div>🌷 Amsterdam's Canals & Windmills</div>
          <div>🍫 Brussels's Chocolates & Grand Place</div>
          <div>🗼 Eiffel Tower, Louvre & Versailles</div>
          <div>🚆 Seamless High-Speed Rail Across 3 Countries</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Experience Amsterdam, Brussels & Paris</h2>
        <p>Book your European escape today — 08 Nights / 09 Days from ₹3,70,000</p>
        <br />
        <Link to="/france-landing5">
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2>9 Days Tour Itinerary</h2>
        <div className="itinerary-list">
          {itinerary.map((item, idx) => (
            <div className="day-card" key={idx}>
              <img src={item.img} alt="" />
              <div className="day-content">
                <h3>{item.day}</h3>
                <p style={{ color: "blue" }}>{item.title}</p>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Send Query Button */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            className="send-query-btn"
            onClick={() => setActiveModal("9 Days Amsterdam to Paris Escape — Amsterdam, Brussels & Paris Tour")}
          >
            Send Query
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know before your Amsterdam to Paris journey</p>
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
        .eq-day-label {
          font-size: 0.83rem;
          color: #777;
          margin: -10px 0 14px;
        }
        .eq-day-label strong { color: #c8860a; }

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

export default AmsterdamToParisEscapeTour;