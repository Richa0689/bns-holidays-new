import React, { useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./IndiaDestinations.css";

const destinations = [
  { name: "Goa",       img: "https://images.unsplash.com/photo-1587922546307-776227941871?w=400&q=60", path: "/Pages/goa" },
  { name: "Kerala",    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&q=60", path: "/kerala-tours" },
  { name: "Rajasthan", img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&q=60", path: "/Pages/rajasthan" },
  { name: "Kashmir",   img: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=400&q=60", path: "/Pages/kashmir" },
  { name: "Manali",    img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&q=60", path: "/Pages/manali" },
  { name: "Ladakh",    img: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=400&q=60", path: "/Pages/ladakh" },
];

const IndiaDestinations = () => {
  const scrollRef = useRef();
  const isPausedRef = useRef(false);
  const animationFrameRef = useRef();
  const navigate = useNavigate();

  const handleCardClick = useCallback(
    (path) => {
      navigate(path);
    },
    [navigate]
  );

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || window.innerWidth <= 768) return;

    const scroll = () => {
      if (!isPausedRef.current) {
        container.scrollLeft += 1.5;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft -= container.scrollWidth / 2;
        }
      }
      animationFrameRef.current = requestAnimationFrame(scroll);
    };

    animationFrameRef.current = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameRef.current);
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
              onClick={() => handleCardClick(item.path)}
              onMouseEnter={() => (isPausedRef.current = true)}
              onMouseLeave={() => (isPausedRef.current = false)}
              role="button"
              tabIndex={0}
              aria-label={`Explore ${item.name}`}
              onKeyDown={(e) => e.key === "Enter" && handleCardClick(item.path)}
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