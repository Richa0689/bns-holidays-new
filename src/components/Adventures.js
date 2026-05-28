import React, { useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Adventures.css";

const adventures = [
  { name: "River Rafting",  img: "https://plus.unsplash.com/premium_photo-1661889971049-6f0a39a3476f?w=400&q=60",  path: "/Pages/river-rafting" },
  { name: "Paragliding",    img: "https://images.unsplash.com/photo-1592208128295-5aaa34f1d72b?w=400&q=60",        path: "/Pages/paragliding" },
  { name: "Scuba Diving",   img: "https://plus.unsplash.com/premium_photo-1661265851801-e523847e3932?w=400&q=60",  path: "/Pages/scuba-diving" },
  { name: "Trekking",       img: "https://plus.unsplash.com/premium_photo-1677002240252-af3f88114efc?w=400&q=60",  path: "/Pages/trekking" },
  { name: "Desert Safari",  img: "https://plus.unsplash.com/premium_photo-1661962428918-6a57ab674e23?w=400&q=60",  path: "/Pages/desert-safari" },
  { name: "Sky Diving",     img: "https://images.unsplash.com/photo-1630879937467-4afa290b1a6b?w=400&q=60",        path: "/Pages/sky-diving" },
  { name: "Bungee Jumping", img: "https://images.unsplash.com/photo-1549221360-456a9c197d5b?w=400&q=60",          path: "/Pages/bungee-jumping" },
  { name: "Camping",        img: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=400&q=60",        path: "/Pages/camping" },
  { name: "Snow Skiing",    img: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&q=60",          path: "/Pages/snow-skiing" },
];

const Adventures = () => {
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
    <div className="adventure-section">
      <h2>Adventures</h2>

      <div className="slider-wrapper">
        <div className="card-container" ref={scrollRef}>
          {[...adventures, ...adventures].map((item, index) => (
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

export default Adventures;