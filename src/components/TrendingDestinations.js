import React, { useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./TrendingDestinations.css";

const destinations = [
  { name: "Europe",      img: "https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?w=400&q=60",  path: "/Pages/europe" },
  { name: "Maldives",    img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=400&q=60",  path: "/Pages/maldives" },
  { name: "Japan",       img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&q=60",  path: "/Pages/japan" },
  { name: "Goa",         img: "https://images.unsplash.com/photo-1587922546307-776227941871?w=400&q=60",  path: "/Pages/goa" },
  { name: "Kerala",      img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&q=60",  path: "/kerala-tours" },
  { name: "Dubai",       img: "https://images.unsplash.com/flagged/photo-1559717201-fbb671ff56b7?w=400&q=60", path: "/Pages/dubai" },
  { name: "Thailand",    img: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=400&q=60",  path: "/Pages/thailand" },
  { name: "Switzerland", img: "https://images.unsplash.com/photo-1570161766218-f8488ebb8078?w=400&q=60",  path: "/Pages/switzerland" },
  { name: "Paris",       img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=60",  path: "/Pages/paris" },
];

const TrendingDestinations = () => {
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
    <div className="trending-section">
      <h2>Trending Destinations</h2>

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

export default TrendingDestinations;