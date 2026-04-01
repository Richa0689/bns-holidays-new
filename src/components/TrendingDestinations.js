import React, { useRef, useEffect } from "react";
import "./TrendingDestinations.css";

const destinations = [
  { name: "Europe", img: "https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3" },
  { name: "Maldives", img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd" },
  { name: "Japan", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e" },
  { name: "Goa", img: "https://images.unsplash.com/photo-1587922546307-776227941871" },
  { name: "Kerala", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944" },
  { name: "Dubai", img: "https://images.unsplash.com/flagged/photo-1559717201-fbb671ff56b7" },
  { name: "Thailand", img: "https://images.unsplash.com/photo-1528181304800-259b08848526" },
  { name: "Switzerland", img: "https://images.unsplash.com/photo-1570161766218-f8488ebb8078" },
  { name: "Paris", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34" }
];

const TrendingDestinations = () => {
  const scrollRef = useRef();

  // AUTO SCROLL 
  useEffect(() => {
  const container = scrollRef.current;
  let animationFrame;

  // ── Stop auto-scroll on mobile ──
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
    <div className="trending-section">
      <h2>Trending Destinations</h2>

      <div className="slider-wrapper">
        <div className="card-container" ref={scrollRef}>

        
          {[...destinations, ...destinations].map((item, index) => (
            <div className="card" key={index}>
              <div className="img-box">
                <img src={item.img} alt={item.name} />
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