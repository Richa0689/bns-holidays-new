import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./IndiaDestinations.css";

const destinations = [
  { name: "Goa",       img: "https://images.unsplash.com/photo-1587922546307-776227941871?w=400&q=60", path: "/Pages/goa" },
  { name: "Kerala",    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&q=60", path: "/kerala-tours" },
  { name: "Rajasthan", img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&q=60", path: "/Pages/rajasthan" },
  { name: "Kashmir",   img: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=400&q=60", path: "/Pages/kashmir" },
  { name: "Manali",    img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&q=60", path: "/Pages/manali" },
  { name: "Ladakh",    img: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=400&q=60", path: "/Pages/ladakh" }
];

const IndiaDestinations = () => {
  const navigate = useNavigate();
  const scrollRef = useRef();

  useEffect(() => {
    const container = scrollRef.current;
    let animationFrame;

    // Stop auto-scroll on mobile
    if (window.innerWidth <= 768) return;

    const scroll = () => {
      if (!container) return;
      container.scrollLeft += 1.5;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft -= container.scrollWidth / 2;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    scroll();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="india-section">
      <h2>India Destinations</h2>

      <div className="slider-wrapper">
        <div className="card-container" ref={scrollRef}>
          {[...destinations, ...destinations].map((item, index) => (
            <div
              className="card"
              key={index}
              onClick={() => navigate(item.path)}
              style={{ cursor: "pointer" }}
            >
              <div className="img-box">
                <img src={item.img} alt={item.name} loading="lazy" />
              </div>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndiaDestinations;