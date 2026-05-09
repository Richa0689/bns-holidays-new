import { useState, useEffect } from "react";

const reviews = [
  { name: "Nilesh More", initials: "NM", rating: 5, date: "2024-04-20", dateLabel: "6 days ago", text: "I recently booked my flight tickets through BNS Holidays, and the experience was absolutely seamless and professional. They offered the best airfare deals compared to online platforms and guided me throughout the booking process.What impressed me the most was their quick response, transparent pricing, and expert knowledge of flight options, including the best routes and timings.Their team ensured hassle-free ticket booking and provided complete support even after the booking was done.If you are looking for a reliable travel agency for flight booking, international tickets, or visa assistance, I highly recommend BNS Holidays.Truly one of the best travel agencies in Pune/PCMC for affordable and trustworthy travel services.Will definitely book again!", bg: "#E6F1FB", color: "#101111" },
  { name: "Suyash Jagtap", initials: "SJ", rating: 5, date: "2024-04-05", dateLabel: "a week ago", text: "I recently visited Thailand (Bangkok & Pattaya) for 5 Nights 6 Days with BNS Holidays, and it was an unforgettable international trip experience.Our Bangkok tour was perfectly planned with smooth airport transfers, comfortable hotel stay, and amazing city sightseeing. In Pattaya, we enjoyed Coral Island, beautiful beaches, nightlife, and well-organized local tours. Every detail—from pickup to drop—was professionally managed.The hotels were excellent, transportation was punctual, and the itinerary was well-balanced between relaxation and sightseeing. Special thanks to Mr. Anupam for his personal guidance and seamless coordination throughout the trip.If you are searching for the best travel agency for international tour in PCMC, I highly recommend BNS Holidays for Thailand tour packages, Bangkok Pattaya trips, visa assistance, and customized international holidays.Highly professional, reliable, and truly customer-focused service.", bg: "#EAF3DE", color: "#3B6D11" },
  { name: "Chaitanya k", initials: "CK", rating: 5, date: "2024-03-28", dateLabel: "a week ago", text: "They have good and quick service, the founder is quite responsive and gets thing's sorted at the earliest", bg: "#FAEEDA", color: "#854F0B" },
  { name: "Rahul", initials: "R", rating: 5, date: "2024-03-10", dateLabel: "6 days ago", text: "I recently booked a trip through BNS Holiday Service Provider, and overall, it was a smooth and enjoyable experience. The team was responsive and helped customize the itinerary according to my preferences. The booking process was straightforward, and they provided clear communication throughout.I would recommend BNS Holiday Service Provider to anyone looking for a reliable and reasonably priced travel service.", bg: "#EEEDFE", color: "#534AB7" },
  { name: "Karan Jadhav", initials: "KJ", rating: 4, date: "2024-03-01", dateLabel: "5 days ago", text: "Highly recommended for excellent for well well organised trips for foreign.Itineraries was well organised and there was continues contact between the tourist and the guide. We had our best trip till now.", bg: "#FAECE7", color: "#993C1D" },
  { name: "Manisha Bhoj", initials: "MB", rating: 5, date: "2024-02-14", dateLabel: "a week ago", text: "Great experience with BNS Holidays.We are impressed with their hard working and professionalism.Definitely highly recommended travel company.Keep it up Anupam and team and All the best 👍", bg: "#E1F5EE", color: "#0F6E56" },
];

function InjectReviewSchema() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "BNS Holidays",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "248",
        "bestRating": "5",
        "worstRating": "1",
      },
      "review": reviews.map((r) => ({
        "@type": "Review",
        "author": { "@type": "Person", "name": r.name },
        "reviewRating": { "@type": "Rating", "ratingValue": String(r.rating), "bestRating": "5" },
        "datePublished": r.date,
        "reviewBody": r.text,
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);
  return null;
}

function StarRating({ rating }) {
  return (
    <div style={{ display: "flex", gap: 2, marginBottom: 6 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} style={{ fontSize: 13, color: i <= rating ? "#F5A623" : "#D1D5DB" }}>★</span>
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 120;
  const displayText = isLong && !expanded ? review.text.slice(0, 120) + "…" : review.text;

  return (
    <article
      itemScope
      itemType="https://schema.org/Review"
      style={{
        background: "#fff",
        border: "0.5px solid #7d7d7d",
        borderRadius: 12,
        padding: "1rem 1.1rem",
        width: 380,
        flexShrink: 0,
        boxSizing: "border-box",
        // Fix: stretch all cards to same height only when nothing is expanded
        // alignSelf: "stretch",
         minHeight: 210, 
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
        <div
          aria-hidden="true"
          style={{
            width: 38, height: 38, borderRadius: "50%",
            background: review.bg, color: review.color,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 12, fontWeight: 500, flexShrink: 0,
          }}
        >
          {review.initials}
        </div>
        <div>
          <div itemProp="author" itemScope itemType="https://schema.org/Person">
            <span itemProp="name" style={{ fontWeight: 500, fontSize: 13, color: "#111827", display: "block" }}>
              {review.name}
            </span>
          </div>
          <time
            itemProp="datePublished"
            dateTime={review.date}
            style={{ fontSize: 11, color: "#6B7280", display: "block" }}
          >
            {review.dateLabel}
          </time>
        </div>
      </div>

      <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
        <meta itemProp="ratingValue" content={String(review.rating)} />
        <meta itemProp="bestRating" content="5" />
        <StarRating rating={review.rating} />
      </div>

      <p
        itemProp="reviewBody"
        style={{
          fontSize: 13,
          color: "#090909",
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {displayText}
      </p>

      {isLong && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
          }}
          aria-label={expanded ? "Collapse review" : "Show full review"}
          style={{
            background: "none",
            border: "none",
            color: "#185FA5",
            fontSize: 12,
            cursor: "pointer",
            padding: 0,
            marginTop: 6,
            minHeight: 32,
            display: "block",
          }}
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </article>
  );
}

const marqueeStyles = `
  @keyframes scroll-left {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .marquee-track {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    width: max-content;
    animation: scroll-left 32s linear infinite;
  }
  .marquee-wrap:hover .marquee-track {
    animation-play-state: paused;
  }
`;

export default function GoogleReviews() {
  const YOUR_PLACE_ID = "YOUR_PLACE_ID"; //  Replace

  const doubled = [...reviews, ...reviews];

  return (
    <section
      itemScope
      itemType="https://schema.org/LocalBusiness"
      aria-label="Customer reviews"
      style={{ fontFamily: "sans-serif", padding: "1rem 0" }}
    >
      <style>{marqueeStyles}</style>
      <InjectReviewSchema />

      <div
        className="marquee-wrap"
        style={{ overflow: "hidden", width: "100%" }}
      >
        <div className="marquee-track">
          {doubled.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>

      {/* <a
        href={`https://search.google.com/local/writereview?placeid=${YOUR_PLACE_ID}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          marginTop: "1.5rem",
          padding: "12px 18px",
          border: "0.5px solid #D1D5DB",
          borderRadius: 8,
          fontSize: 14,
          fontWeight: 500,
          textDecoration: "none",
          color: "#111827",
          minHeight: 44,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        ✏️ Write a review
      </a> */}
    </section>
  );
}