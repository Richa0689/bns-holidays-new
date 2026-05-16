import React, { useRef, useEffect } from "react";
import "./Adventures.css";

const adventures = [
  { name: "River Rafting", img: "https://plus.unsplash.com/premium_photo-1661889971049-6f0a39a3476f?w=400&q=60" },
  { name: "Paragliding", img: "https://images.unsplash.com/photo-1592208128295-5aaa34f1d72b?w=400&q=60" },
  { name: "Scuba Diving", img: "https://plus.unsplash.com/premium_photo-1661265851801-e523847e3932?w=400&q=60" },
  { name: "Trekking", img: "https://plus.unsplash.com/premium_photo-1677002240252-af3f88114efc?w=400&q=60" },
  { name: "Desert Safari", img: "https://plus.unsplash.com/premium_photo-1661962428918-6a57ab674e23?w=400&q=60" },
  { name: "Sky Diving", img: "https://images.unsplash.com/photo-1630879937467-4afa290b1a6b?w=400&q=60" },
  { name: "Bungee Jumping", img: "https://images.unsplash.com/photo-1549221360-456a9c197d5b?w=400&q=60" },
  { name: "Camping", img: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=400&q=60" },
  { name: "Snow Skiing", img: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&q=60" }
];

const Adventures = () => {
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
    <div className="adventure-section">
      <h2>Adventures</h2>

      <div className="slider-wrapper">
        <div className="card-container" ref={scrollRef}>
          {[...adventures, ...adventures].map((item, index) => (
            <div className="card" key={index}>
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

export default Adventures;