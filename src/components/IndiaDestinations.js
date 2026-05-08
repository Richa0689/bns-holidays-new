import React from "react";
import { useNavigate } from "react-router-dom";
import "./IndiaDestinations.css";

const destinations = [
  { name: "Goa",       img: "https://images.unsplash.com/photo-1587922546307-776227941871?w=400&q=60", path: "/Pages/goa" },
  { name: "Kerala",    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&q=60", path: "/Pages/kerala" },
  { name: "Rajasthan", img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&q=60", path: "/Pages/rajasthan" },
  { name: "Kashmir",   img: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=400&q=60", path: "/Pages/kashmir" },
  { name: "Manali",    img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&q=60", path: "/Pages/manali" },
  { name: "Ladakh",    img: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=400&q=60", path: "/Pages/ladakh" }
];

const IndiaDestinations = () => {
  const navigate = useNavigate();
  const scrollItems = [...destinations, ...destinations]; // duplicate for slider

  return (
    <div className="india-section">
      <h2>India Destinations</h2>
      <div className="slider-wrapper">
        <div className="card-container">
          {scrollItems.map((item, index) => (
            <div
              className="card"
              key={index}
              onClick={() => navigate(item.path)}
              style={{ cursor: "pointer" }}
            >
              <div className="img-box">
                <img src={item.img} alt={item.name} loading="lazy" />
                <p>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndiaDestinations;