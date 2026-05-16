import React, { useRef, useEffect } from "react";
import "./Fixeddepartures.css";

const departures = [
  {
    name: "USA",
    img: "https://www.flamingotravels.co.in/blog/wp-content/uploads/2023/01/Feture-image.jpg",
  },
  {
    name: "Europe",
    img: "https://blog.dookinternational.com/images/post-media/Z4G0Z1682335149.jpg",
  },
  {
    name: "Australia",
    img: "https://air-prod.imgix.net/ce60cbef-323e-4da1-b21b-a75e3b84e3af.jpg?w=1200&h=630&fit=crop",
  },
  {
    name: "America",
    img: "https://static.vecteezy.com/system/resources/thumbnails/001/312/781/small/statue-of-liberty-usa-free-photo.jpeg",
  },
  {
    name: "Asia",
    img: "https://statics.vinpearl.com/asia-travel-1_1664456634.jpg",
  },
];

const FixedDepartures = () => {
  const scrollRef = useRef();

  // AUTO SCROLL
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
    <div className="fd-section">
      <h2>Fixed Departures</h2>

      <div className="slider-wrapper">
        <div className="card-container" ref={scrollRef}>
          {[...departures, ...departures].map((item, index) => (
            <div className="card" key={index}>
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