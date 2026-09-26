import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HotelSearchForm from "../components/HotelSearchForm";
import "../components/travel-ui.css";
import "./Hotels.css";

const HOTEL_HERO_VIDEOS = [
  `${process.env.PUBLIC_URL}/hotel-resort-background.mp4`,
  `${process.env.PUBLIC_URL}/hotel-pool-background.mp4`,
];

export default function Hotels() {
  const navigate = useNavigate();
  const [heroVideoIndex, setHeroVideoIndex] = useState(0);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSearch = (params) => {
    const query = new URLSearchParams(params).toString();
    navigate(`/hotels/results?${query}`);
  };

  return (
    <main className="hotel-search-page">
      <section className="hotel-hero">
        <video key={HOTEL_HERO_VIDEOS[heroVideoIndex]} className="hotel-hero-video" autoPlay muted playsInline preload="metadata" aria-hidden="true" tabIndex={-1} poster="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=2000&q=85" onEnded={() => setHeroVideoIndex((index) => (index + 1) % HOTEL_HERO_VIDEOS.length)}>
          <source src={HOTEL_HERO_VIDEOS[heroVideoIndex]} type="video/mp4" />
        </video>
        <div className="hotel-hero-inner">
          <div className="hotel-hero-copy">
            <div className="hotel-hero-eyebrow"><span />Hotels &amp; accommodation</div>
            <h1>Find the perfect stay<br /><strong>for your next trip</strong></h1>
            <p>Discover handpicked hotels, great locations and unforgettable experiences around the world.</p>
          </div>
          <HotelSearchForm onSearch={handleSearch} />
        </div>
      </section>
    </main>
  );
}
