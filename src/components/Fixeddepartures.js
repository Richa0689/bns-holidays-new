import React, { useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Fixeddepartures.css";

const departures = [
  {
    name: "USA",
    path: "/destinations/usa",
    img: "https://www.flamingotravels.co.in/blog/wp-content/uploads/2023/01/Feture-image.jpg",
  },
  {
    name: "Europe",
    path: "/Pages/europe",
    img: "https://blog.dookinternational.com/images/post-media/Z4G0Z1682335149.jpg",
  },
  {
    name: "Australia",
    path: "/destinations/australia",
    img: "https://air-prod.imgix.net/ce60cbef-323e-4da1-b21b-a75e3b84e3af.jpg?w=1200&h=630&fit=crop",
  },
  {
    name: "America",
    path: "/destinations/america",
    img: "https://static.vecteezy.com/system/resources/thumbnails/001/312/781/small/statue-of-liberty-usa-free-photo.jpeg",
  },
  {
    name: "Asia",
    path: "/destinations/asia",
    img: "https://statics.vinpearl.com/asia-travel-1_1664456634.jpg",
  },
];

const FixedDepartures = () => {
  const scrollRef = useRef();
  const isPausedRef = useRef(false); // tracks hover pause
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
    <div className="fd-section">
      <h2>Fixed Departures</h2>

      <div className="slider-wrapper">
        <div className="card-container" ref={scrollRef}>
          {[...departures, ...departures].map((item, index) => (
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

export default FixedDepartures;