const FALLBACK_GRADIENTS = [
  "linear-gradient(135deg,#0C2A49,#173C61)",
  "linear-gradient(135deg,#5C3B2E,#2B1E18)",
  "linear-gradient(135deg,#1E5B4F,#0B3B3A)",
  "linear-gradient(135deg,#B5622A,#5B3421)",
  "linear-gradient(135deg,#374B6B,#12243D)",
  "linear-gradient(135deg,#3D6B5A,#12352C)",
];

export default function HotelResults({ hotels, loading, error, onBookClick }) {
  if (loading) return <p className="tui-loading">Searching live hotels…</p>;
  if (error) return <p className="tui-error">{error}</p>;
  if (!hotels.length) return <p className="tui-empty">No hotels found. Try a different search.</p>;

  return (
    <div className="tui-hotel-list">
      {hotels.map((hotel, i) => {
        const image = hotel.images && hotel.images[0];
        const artStyle = image
          ? { backgroundImage: `url(${image})` }
          : { background: FALLBACK_GRADIENTS[i % FALLBACK_GRADIENTS.length] };

        return (
          <div key={hotel.id || i} className="tui-hotel-card">
            <div className="tui-hotel-art" style={artStyle}>
              <div className="tui-art-label">{(hotel.address || "").split(",")[0]}</div>
            </div>

            <div className="tui-hotel-body">
              <div className="tui-hotel-top">
                <div className="tui-hotel-name">{hotel.name}</div>
                <div className="tui-stars">{"★".repeat(Number(hotel.starRating) || 0)}</div>
              </div>
              <div className="tui-hotel-address">{hotel.address}</div>
              <div className="tui-amenity-row">
                {(hotel.amenities || []).slice(0, 4).map((a) => (
                  <span key={a} className="tui-amenity-chip">{a}</span>
                ))}
              </div>
              {hotel.hasFreeCancellation && <div className="tui-cancel-badge">Free cancellation</div>}
            </div>

            <div className="tui-hotel-price-col">
              <div>
                <div className="tui-price-label">From</div>
                <div className="tui-price-value">
                  ₹{Number(hotel.minRate || 0).toLocaleString("en-IN")}
                </div>
                <div className="tui-price-note">per night, taxes extra</div>
              </div>
              <button className="tui-book-btn" onClick={() => onBookClick(hotel)}>
                Request to book
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}