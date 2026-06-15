import { useState, useEffect, useRef } from "react";

const reviews = [
  { name: "Nilesh More", initials: "NM", rating: 5, date: "2024-04-20", dateLabel: "6 days ago", text: "I recently booked my flight tickets through BNS Holidays, and the experience was absolutely seamless and professional. They offered the best airfare deals and guided me throughout. Quick response, transparent pricing — truly one of the best travel agencies in Pune/PCMC.", avatarBg: "#4285F4" },
  { name: "Suyash Jagtap", initials: "SJ", rating: 5, date: "2024-04-05", dateLabel: "a week ago", text: "I visited Thailand (Bangkok & Pattaya) for 5N6D with BNS Holidays — an unforgettable experience! Every detail from pickup to drop was professionally managed. Special thanks to Mr. Anupam for his personal guidance throughout the trip.", avatarBg: "#EA4335" },
  { name: "Chaitanya K", initials: "CK", rating: 5, date: "2024-03-28", dateLabel: "a week ago", text: "They have good and quick service. The founder is quite responsive and gets things sorted at the earliest. Would definitely recommend for anyone looking for a reliable travel partner in PCMC.", avatarBg: "#34A853" },
  { name: "Rahul", initials: "R", rating: 5, date: "2024-03-10", dateLabel: "6 days ago", text: "I booked a trip through BNS Holiday and it was a smooth and enjoyable experience. The team helped customize the itinerary according to my preferences and communicated clearly throughout. Reliable and reasonably priced — highly recommended.", avatarBg: "#FBBC05" },
  { name: "Karan Jadhav", initials: "KJ", rating: 5, date: "2024-03-01", dateLabel: "5 days ago", text: "Highly recommended for excellent and well organised foreign trips. Itineraries were perfectly planned with continuous contact between the tourist and the guide. We had our best trip till now!", avatarBg: "#4285F4", images: [
    "https://lh3.googleusercontent.com/grass-cs/ANxoTn2Tuw5nUDbwp-Bu6C3AFe-ON5oFDc6ZVtOP_KlpJ2oBLNFzp5TR5NbAf2Jzq8pHIBt07KFveXNCTbAqdrcZyANfUMHviCXvgEUdazhqMOvtT-jzAnkyMm2iJqE06R_VVhqoX3TKVjI0iysJ=s3072-w3072-h1460-rw",
    "https://lh3.googleusercontent.com/grass-cs/ANxoTn1qpMc57YRNX0BQHIYJQsdJ2uDDG06LuEm_slV2thtOvwquEfZPGvZ3E83VcjDKOPpjOlpXKI8JVM0cDn6vBwNRvhnJusDrSrcHFi8qZEy6pk_tnNR80VdpsuVmfErpCVrz0vBgBjU0ei0F=s3072-w3072-h1460-rw",
    "https://lh3.googleusercontent.com/grass-cs/ANxoTn3fwC9drbIwmWJAqZ1B19anpdhb85IyikVblgjrMTtOd2TSuFax19su2wrL1TROgrvuzFJZ5B3w10F-E25zlJad18AKs92ncEfJRZL18372KgPg72thEN6IPlm1_k7LSakgb5vVrFdC8q99=s3072-w3072-h1460-rw"
  ]},
  { name: "Manisha Bhoj", initials: "MB", rating: 5, date: "2024-02-14", dateLabel: "a week ago", text: "Great experience with BNS Holidays. We are impressed with their hard work and professionalism. A definitely highly recommended travel company. Keep it up Anupam and team — all the best!", avatarBg: "#EA4335" },
];

const CHAR_LIMIT = 110;
// Fixed card height — all cards uniform
const CARD_HEIGHT = 300;

// ── Schema Injection ──────────────────────────────────────────────────────────
function InjectReviewSchema() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      name: "BNS Holidays",
      description: "Best travel agency in Pune offering flight tickets, international tour packages, and customized holiday trips.",
      url: "https://bnsholidays.co.in",
      telephone: "+91-XXXXXXXXXX",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "248",
        bestRating: "5",
        worstRating: "1",
      },
      review: reviews.map((r) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.name },
        reviewRating: { "@type": "Rating", ratingValue: String(r.rating), bestRating: "5" },
        datePublished: r.date,
        reviewBody: r.text,
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "bns-review-schema";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById("bns-review-schema");
      if (el) document.head.removeChild(el);
    };
  }, []);
  return null;
}

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({ src, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Full screen image"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.88)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close image"
        style={{
          position: "fixed",
          top: 16,
          right: 16,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1.5px solid rgba(255,255,255,0.4)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          fontSize: 22,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: 1,
          zIndex: 10000,
        }}
      >
        ×
      </button>

      <img
        src={src}
        alt="Full screen view"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "100%",
          maxHeight: "90vh",
          objectFit: "contain",
          borderRadius: 8,
          boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
        }}
      />
    </div>
  );
}

// ── Google G SVG ──────────────────────────────────────────────────────────────
function GoogleG({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

// ── Star Rating ───────────────────────────────────────────────────────────────
function StarRating({ rating }) {
  return (
    <div style={{ display: "flex", gap: 2 }} aria-label={`${rating} out of 5 stars`} role="img">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} aria-hidden="true" style={{ fontSize: 16, color: i <= rating ? "gold" : "#e0e0e0" }}>★</span>
      ))}
    </div>
  );
}

// ── Review Card ──────────────────────────────────────────────────────────────
function ReviewCard({ review, isMobile, onImageClick }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > CHAR_LIMIT;
  const displayText = isLong && !expanded ? review.text.slice(0, CHAR_LIMIT) + "…" : review.text;

  return (
    <article
      itemScope
      itemType="https://schema.org/Review"
      style={{
        background: "#f7bc09",
        borderRadius: 12,
        padding: "1.1rem 1.2rem 1rem",
        width: isMobile ? "calc(85vw - 2rem)" : 300,
        maxWidth: isMobile ? 340 : 300,
        flexShrink: 0,
        boxSizing: "border-box",
        // ↓ Fixed equal height for all cards
        height: CARD_HEIGHT,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        // boxShadow: "0 4px 20px rgba(251, 186, 95, 0.99)",
        border: "1px solid rgba(255,255,255,0.1)",
        overflow: "hidden",
      }}
    >
      {/* Header: Avatar + Name */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, flexShrink: 0 }}>
        <div aria-hidden="true" style={{
          width: 38, height: 38, borderRadius: "50%",
          background: review.avatarBg, color: "#fff",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 13, fontWeight: 700, flexShrink: 0,
          letterSpacing: "0.03em",
          boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
        }}>
          {review.initials}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div itemProp="author" itemScope itemType="https://schema.org/Person">
            <span itemProp="name" style={{
              fontWeight: 600, fontSize: 13.5, color: "#ffffff", fontWeight: "bold",
              display: "block", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
            }}>
              {review.name}
            </span>
          </div>
          <time itemProp="datePublished" dateTime={review.date}
            style={{ fontSize: 11.5, color: "rgba(255,255,255,0.65)", display: "block", marginTop: 1 }}>
            {review.dateLabel}
          </time>
        </div>
      </div>

      {/* Stars */}
      <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating"
        style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10, flexShrink: 0 , fontWeight:"blod"}}>
        <meta itemProp="ratingValue" content={String(review.rating)} />
        <meta itemProp="bestRating" content="5" />
        <StarRating rating={review.rating} />
      </div>

      {/* Review text — scrollable if overflow */}
      <div style={{ flex: 1, overflow: "hidden" }}>
        <p itemProp="reviewBody" style={{
          fontSize: 15.5, color: "#0000ff", lineHeight: 1.6, margin: 0, fontFamily: "Poppins, regular ",
        }}>
          {displayText}
        </p>
        {isLong && (
          <button
            onClick={(e) => { e.stopPropagation(); setExpanded(!expanded); }}
            aria-expanded={expanded}
            style={{
              background: "none", border: "none", fontSize: 12.5,
              cursor: "pointer", padding: "4px 0", marginTop: 4,
              fontWeight: 600, color: "rgba(255,255,255,0.8)",
              alignSelf: "flex-start", minHeight: 28,
            }}
          >
            {expanded ? "Show less" : "More"}
          </button>
        )}
      </div>

      {/* Images — clickable thumbnails */}
      {review.images && review.images.length > 0 && (
        <div
          style={{
            display: "flex",
            gap: 5,
            marginTop: 10,
            flexShrink: 0,
            overflowX: "auto",
            paddingBottom: 2,
            scrollbarWidth: "none",
          }}
        >
          {review.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Review photo ${index + 1}`}
              onClick={(e) => { e.stopPropagation(); onImageClick(img); }}
              style={{
                width: 80,
                height: 60,
                objectFit: "cover",
                flexShrink: 0,
                borderRadius: 6,
                cursor: "zoom-in",
                border: "2px solid rgba(255,255,255,0.3)",
                transition: "transform 0.15s ease, border-color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
              }}
            />
          ))}
        </div>
      )}
    </article>
  );
}

// ── Mobile Swipeable Carousel ─────────────────────────────────────────────────
function MobileCarousel({ onImageClick }) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const total = reviews.length;

  const handleTouchStart = (e) => { touchStartX.current = e.targetTouches[0].clientX; };
  const handleTouchMove = (e) => { touchEndX.current = e.targetTouches[0].clientX; };
  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) setCurrent((c) => (c + 1) % total);
      else setCurrent((c) => (c - 1 + total) % total);
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          display: "flex",
          transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
          transform: `translateX(-${current * 100}%)`,
          willChange: "transform",
        }}
      >
        {reviews.map((review, i) => (
          <div key={i} style={{
            minWidth: "100%", padding: "0 1rem",
            boxSizing: "border-box", display: "flex", justifyContent: "center",
          }}>
            <ReviewCard review={review} isMobile onImageClick={onImageClick} />
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 7, marginTop: 18 }} role="tablist">
        {reviews.map((_, i) => (
          <button key={i} role="tab" aria-selected={i === current} aria-label={`Review ${i + 1}`}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? 22 : 8, height: 8, borderRadius: 4,
              border: "none", background: i === current ? "#1a73e8" : "#d1d5db",
              cursor: "pointer", padding: 0, transition: "all 0.25s ease",
            }} />
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 14 }}>
        <button onClick={() => setCurrent((c) => (c - 1 + total) % total)} aria-label="Previous review"
          style={{
            width: 38, height: 38, borderRadius: "50%", border: "1.5px solid #dadce0",
            background: "#fff", cursor: "pointer", display: "flex", alignItems: "center",
            justifyContent: "center", color: "#3c4043", fontSize: 18,
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}>‹</button>
        <button onClick={() => setCurrent((c) => (c + 1) % total)} aria-label="Next review"
          style={{
            width: 38, height: 38, borderRadius: "50%", border: "1.5px solid #1a73e8",
            background: "#1a73e8", cursor: "pointer", display: "flex", alignItems: "center",
            justifyContent: "center", color: "#fff", fontSize: 18,
            boxShadow: "0 1px 3px rgba(26,115,232,0.3)",
          }}>›</button>
      </div>
    </div>
  );
}

// ── Desktop Marquee ───────────────────────────────────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&display=swap');

  @keyframes scroll-left {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .bns-marquee-track {
    display: flex;
    align-items: stretch;
    gap: 16px;
    width: max-content;
    animation: scroll-left 40s linear infinite;
  }
  .bns-marquee-wrap:hover .bns-marquee-track,
  .bns-marquee-wrap:focus-within .bns-marquee-track {
    animation-play-state: paused;
  }
  @media (prefers-reduced-motion: reduce) {
    .bns-marquee-track { animation: none !important; }
  }
`;

function DesktopMarquee({ onImageClick }) {
  const doubled = [...reviews, ...reviews];
  return (
    <div className="bns-marquee-wrap" style={{ overflow: "hidden", width: "100%" }}>
      <div className="bns-marquee-track">
        {doubled.map((review, i) => (
          <ReviewCard key={i} review={review} isMobile={false} onImageClick={onImageClick} />
        ))}
      </div>
    </div>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────
export default function GoogleReviews() {
  const [isMobile, setIsMobile] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section
      itemScope
      itemType="https://schema.org/LocalBusiness"
      aria-labelledby="reviews-heading"
      style={{ fontFamily: "'Segoe UI', Helvetica, Arial, sans-serif", padding: "2rem 0 1.5rem" }}
    >
      <style>{styles}</style>
      <InjectReviewSchema />

      {/* Fullscreen lightbox */}
      {lightboxSrc && (
        <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      )}

      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "1.75rem", padding: "0 1rem" }}>
        <h1
          id="reviews-heading"
          style={{
            fontSize: "40px", fontWeight: "bold",
            color: "#0000ff", margin: "0 0 6px", lineHeight: 1.35,
            fontFamily: "Poppins, extra-bold, ",
          }}
        >
          What our clients say about us
        </h1>
        <p style={{ fontSize: "clamp(12px, 3.5vw, 14px)", color: "#6b7280", margin: "0 0 14px" }}>
          Stories straight from the hearts of our happy travellers
        </p>
      </div>

      {isMobile
        ? <MobileCarousel onImageClick={setLightboxSrc} />
        : <DesktopMarquee onImageClick={setLightboxSrc} />
      }
    </section>
  );
}
