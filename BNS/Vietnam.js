import React, { useState } from "react";
import "./Pages.css";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Vietnam Tour ",
    days: "7 Days",
    countries: "Vietnam ",
    // cities: "New York • Philadelphia • Washington, D.C. • Harrisburg • Niagara Falls • Las Vegas • Los Angeles • Fresno •  Francisco",
    // dates: "10 Dates",
    price: "₹2,10,000",
    emi: "₹9,500/mo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtzsn6kFlgw9fkYpf6Uw5WFB-NaKbick5O8DBrCWnTV5rsVbAlHCNZxDsM&s=10",
    link: "/vietnam-Tour"
  },
  {
    title: "Northen Vietnam",
    days: "4 Days ",
    countries: "Vietnam ",
    // cities: "New York • Philadelphia • Washington, D.C. • Harrisburg • Niagara Falls • Las Vegas • Los Angeles • Fresno •  San Francisco",
    price: "₹1,80,000",
    emi: "₹8,200/mo",
    image: "https://www.pelago.com/img/products/VN-Vietnam/highlights-of-northern-vietnam-in-6-days/fea5b27a-74a7-4049-b753-d7fa8f68dc6d_highlights-of-northern-vietnam-in-6-days.jpg",
    link: "/Northen-vietnam"
  },
  {
    title: "Northern Vietnam",
    days: "5 Days ",
    countries: "Vietnam ",
    // cities: "New York • Philadelphia • Washington, D.C. • Harrisburg • Niagara Falls",
    price: "₹1,95,000",
    emi: "₹8,800/mo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgBb26rtXfMO_NAuGnJft-4dbdl2lsvC_-NDuivdBTmoUH1kLi4YxFok&s=10",
    link: "/northen-vietnam"
  },
  {
    title: "Southern Vietnam",
    days: "5 Days",
    countries: "Vietnam",
    // cities: "Las Vegas • Los Angeles • Fresno •  San Francisco",
    price: "₹1,60,000",
    emi: "₹7,500/mo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKKEN_SmAZ0C7lD_2IvS8hx1lvTYzSTYhKHmAZprJLUYqmC4_w2fYT7hpf&s=10",
    link: "/Southern-Vietnam"
  },
  {
    title: "Southern Vietnam",
    days: "4 Days",
    countries: "Vietnam",
    // cities: "5 Cities",
    // dates: "4 Dates",
    price: "₹2,80,000",
    emi: "₹12,500/mo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_fB5u5Cs7Gos8VS1gPvaihtHTjTYQ4AFTSLEdsOsltNYhsL-pVAksxY&s=10",
    link: "/southern-vietnam"
  },
  {
    title: "Taste of Vietnam",
    days: "6 Days",
    countries: "Vietnam",
    // cities: "5 Cities",
    // dates: "4 Dates",
    price: "₹2,80,000",
    emi: "₹12,500/mo",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/80/97/86/taste-of-saigon.jpg?w=1200&h=1200&s=1",
    link: "/Taste of-vietnam"
  },
  {
    title: "Vietnam & Cambodia",
    days: "8 Days",
    countries: "Vietnam",
    // cities: "5 Cities",
    // dates: "4 Dates",
    price: "₹2,80,000 ",
    emi: "₹12,500/mo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS25st3vCqmNJ5PykvXijF-MOFimjSjMMOy1IzNcgOUC__W0B7c82nkPBT&s=10",
    link: "/Vietnam-Cambodia"
  },
  {
    title: "Vietnam At A Glance",
    days: "8 Days",
    countries: "Vietnam",
    // cities: "5 Cities",
    // dates: "4 Dates",
    price: "₹2,80,000 ",
    emi: "₹12,500/mo",
    image: "https://static.wixstatic.com/media/773844_47a30137b7d54540ab3d7adf4e1bc365~mv2.jpg/v1/fill/w_568,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/773844_47a30137b7d54540ab3d7adf4e1bc365~mv2.jpg",
    link: "/Vietnam-Glances"
  },
  {
    title: "Amazing Vietnam",
    days: "10 Days",
    countries: "Vietnam",
    // cities: "5 Cities",
    // dates: "4 Dates",
    price: "₹2,80,000 ",
    emi: "₹12,500/mo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwhaaQgUr4oJB1mvR1BOQwy66YfTwTyCSjle0jK-igeOp42c02tXFSpdk&s=10",
    link: "/Amazing-Vietnam"
  },
  {
    title: "Cambodia- Explore Siam Reap",
    days: "4 Days",
    countries: "Vietnam",
    // cities: "5 Cities",
    // dates: "4 Dates",
    price: "₹2,80,000 ",
    emi: "₹12,500/mo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Sac0Dlv7Uj1sIcqnbanR8e-agWQKoPDhrNYxGi0yNNgcdvK5cJkXIrs&s=10",
    link: "/Cambodia- Explore Siam Reap"
  },
  {
    title: "Central Vietnam",
    days: "5 Days",
    countries: "Vietnam",
    // cities: "5 Cities",
    // dates: "4 Dates",
    price: "₹2,80,000 ",
    emi: "₹12,500/mo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3iXXZZeqzZCzzqqwQW7tuzrOGLuFHSTwixcId23vpKdRMfAYpIvhImpE&s=10",
    link: "/Central Vietnam"
  },
  {
    title: "Central Vietnam",
    days: "4 Days",
    countries: "Vietnam",
    // cities: "5 Cities",
    // dates: "4 Dates",
    price: "₹2,80,000 ",
    emi: "₹12,500/mo",
    image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/73/3f/8d.jpg",
    link: "/Vietnam-Central"
  },
  {
    title: "Essence of Vietnam",
    days: "8 Days",
    countries: "Vietnam",
    // cities: "5 Cities",
    // dates: "4 Dates",
    price: "₹2,80,000 ",
    emi: "₹12,500/mo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU5bFjvnmNxytJXu3TeWEtWO3i2R8dzmXJS6r_QmcNTNY14yc7LSsqicrm&s=10",
    link: "/Essence-Vietnam"
  },
  {
    title: "Highlights of Vietnam",
    days: "8 Days",
    countries: "Vietnam",
    // cities: "5 Cities",
    // dates: "4 Dates",
    price: "₹2,80,000 ",
    emi: "₹12,500/mo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfheMwzI4eCBxIPtH4QANitzqlBHRRyjG7mL-kGcEG--VDMjcw_XGOSg&s=10",
    link: "/Highlights-Vietnam"
  },
  {
    title: "Laos Short Escape",
    days: "4  Days",
    countries: "Vietnam",
    // cities: "5 Cities",
    // dates: "4 Dates",
    price: "₹2,80,000 ",
    emi: "₹12,500/mo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZXF3C4uDm26B_-7XMQLFaxYCXDyWHjb4Q0r72BaoVTjW7AIXGWzmrSRX-&s=10",
    link: "/Laos-Escape"
  }
];

const USA = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tour-container">
      <h1>USA Tour Packages</h1>

      {tours.map((tour, index) => (
        <div className="tour-card" key={index}>

          <div className="tour-image">
            <span className="badge">Popular Today</span>
            <img src={tour.image} alt={tour.title} />
          </div>

          <div className="tour-info">
            <h2>
              {tour.link ? (
                <Link to={tour.link} className="title-link">{tour.title}</Link>
              ) : (
                tour.title
              )}
            </h2>

            
            <p className="details">
              {tour.days} • {tour.countries} • {tour.cities}, {tour.dates}
            </p>

           
          </div>

          <div className="tour-price">
            <p className="start">Starts from</p>
            <h2>{tour.price}</h2>
            <p className="emi">EMI from {tour.emi}</p>

            <button className="book-btn">Book Online</button>
            <button className="whatsapp-btn">Share on WhatsApp</button>
            <button className="details-btn">View Tour Details</button>
          </div>

        </div>
      ))}

      {/*  Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">

            <div className="modal-header">
              <h2>Tour Includes</h2>
              <span className="close-btn" onClick={() => setShowModal(false)}>
                ✕
              </span>
            </div>

            <div className="icons-row">
              <div><span>🏨</span><p>Hotel</p></div>
              <div><span>🍽️</span><p>Meals</p></div>
              <div><span>✈️</span><p>Flight</p></div>
              <div><span>📷</span><p>Sightseeing</p></div>
              <div><span>🚌</span><p>Transport</p></div>
              <div><span>📄</span><p>Visa</p></div>
            </div>

            <div className="modal-content">
              <p>
                👨‍✈️ Tour includes the services of <b>BNS Holidays</b>.
              </p>

              <p className="note">
                *Except for joining/leaving. To & fro economy class airfare is included.
                <br />
                *Taxes Extra.
              </p>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default USA;