import { useEffect, useMemo, useState } from "react";
import { getHotelDetail } from "../api/hotels";

function collectRooms(value, path = "", result = []) {
  if (Array.isArray(value)) { value.forEach((item) => collectRooms(item, path, result)); return result; }
  if (!value || typeof value !== "object") return result;
  const roomName = value.roomName || value.roomType || value.room_type || value.roomCategory || value.room_category || value.categoryName;
  if (roomName || (/room/i.test(path) && (value.name || value.title))) result.push(value);
  Object.entries(value).forEach(([key, child]) => collectRooms(child, key, result));
  return result;
}

function imageUrl(img) {
  if (typeof img === "string") return img;
  if (!img || typeof img !== "object") return "";
  return img.url || img.imageUrl || img.src || img.thumbnail || img.path || "";
}

function normalizeRooms(data) {
  const candidates = collectRooms(data);
  const seen = new Set();
  return candidates.filter((room) => {
    const name = room.roomName || room.roomType || room.room_type || room.roomCategory || room.room_category || room.categoryName || room.name || room.title;
    const key = `${name || "Room"}-${room.rate || room.price || room.totalPrice || ""}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).map((room) => ({
    ...room,
    displayName: room.roomName || room.roomType || room.room_type || room.roomCategory || room.room_category || room.categoryName || room.name || room.title || "Room option",
    price: room.totalPrice ?? room.price ?? room.rate ?? room.minRate ?? room.amount,
    meal: room.mealPlan || room.boardName || room.boardBasis || room.mealBasis || room.inclusion,
    cancellation: room.cancellationPolicy || room.cancelPolicy || room.cancellation || room.cancellationText,
  }));
}

function RoomsTab({ rooms, loading, error, onClose, onBookRoom }) {
  const [cancelFilter, setCancelFilter] = useState("all");
  const [mealFilter, setMealFilter] = useState("all");
  const [priceRange, setPriceRange] = useState(null);

  const prices = rooms.map((r) => Number(r.price) || 0).filter(Boolean);
  const minPrice = prices.length ? Math.min(...prices) : 0;
  const maxPrice = prices.length ? Math.max(...prices) : 0;
  const [maxVal, setMaxVal] = useState(null);

  const effectiveMax = maxVal !== null ? maxVal : maxPrice;

  const uniqueMeals = [...new Set(rooms.map((r) => r.meal).filter(Boolean))];

  const filtered = rooms.filter((room) => {
    if (mealFilter !== "all" && room.meal !== mealFilter) return false;
    if (cancelFilter === "free") {
      const c = (room.cancellation || "").toString().toLowerCase();
      if (!c.includes("free") && !c.includes("no cancel fee") && !c.includes("refundable")) return false;
    }
    if (cancelFilter === "non-refundable") {
      const c = (room.cancellation || "").toString().toLowerCase();
      if (!c.includes("non refundable") && !c.includes("non-refundable") && !c.includes("no refund")) return false;
    }
    if (maxPrice > 0 && room.price && Number(room.price) > effectiveMax) return false;
    return true;
  });

  if (loading) return (
    <div className="hrc-rooms-tab">
      <div className="hrc-loading-state"><div className="hrc-spinner"></div><p>Loading room categories…</p></div>
    </div>
  );
  if (error) return (
    <div className="hrc-rooms-tab">
      <div className="hrc-error-state"><p>{error}</p><button type="button" className="hrc-view-rooms-btn" onClick={onClose}>Close</button></div>
    </div>
  );
  if (rooms.length === 0) return (
    <div className="hrc-rooms-tab">
      <div className="hrc-empty-state"><p>No room categories found for this hotel.</p><button type="button" className="hrc-view-rooms-btn" onClick={onClose}>Close</button></div>
    </div>
  );

  return (
    <div className="hrc-rooms-tab">
      {/* Filter Bar */}
      <div className="hrc-room-filter-bar">
        <div className="hrc-room-filter-group">
          <span className="hrc-room-filter-label">Filter By</span>
          <select className="hrc-room-filter-select" value={cancelFilter} onChange={(e) => setCancelFilter(e.target.value)}>
            <option value="all">Cancellation Policy</option>
            <option value="free">Free Cancellation</option>
            <option value="non-refundable">Non Refundable</option>
          </select>
          <select className="hrc-room-filter-select" value={mealFilter} onChange={(e) => setMealFilter(e.target.value)}>
            <option value="all">Meal Preference</option>
            {uniqueMeals.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
        {maxPrice > 0 && (
          <div className="hrc-room-price-filter">
            <span className="hrc-room-filter-label">Price Range</span>
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              step={100}
              value={effectiveMax}
              onChange={(e) => setMaxVal(Number(e.target.value))}
              className="hrc-room-price-slider"
            />
            <div className="hrc-room-price-labels">
              <span>₹{Math.round(minPrice).toLocaleString("en-IN")}</span>
              <span>₹{Math.round(effectiveMax).toLocaleString("en-IN")}</span>
            </div>
          </div>
        )}
        {(cancelFilter !== "all" || mealFilter !== "all" || maxVal !== null) && (
          <button type="button" className="hrc-room-clear-btn" onClick={() => { setCancelFilter("all"); setMealFilter("all"); setMaxVal(null); }}>
            Clear filters
          </button>
        )}
      </div>

      {/* Rooms */}
      {filtered.length === 0 ? (
        <div className="hrc-empty-state"><p>No rooms match your filters. <button type="button" className="hrc-inline-reset" onClick={() => { setCancelFilter("all"); setMealFilter("all"); setMaxVal(null); }}>Reset filters</button></p></div>
      ) : (
        <div className="hrc-room-list">
          {filtered.map((room, idx) => {
            const isRefundable = (() => {
              const c = (room.cancellation || "").toString().toLowerCase();
              if (c.includes("free") || c.includes("refundable")) return true;
              if (c.includes("non") || c.includes("no refund")) return false;
              return null;
            })();
            return (
              <div key={idx} className="hrc-room-card">
                <div className="hrc-room-card-body">
                  <div className="hrc-room-name">{room.displayName}</div>
                  
                  <div className="hrc-room-tags">
                    {room.meal && <span className="hrc-room-tag meal">{room.meal}</span>}
                    
                    <span className={`hrc-room-tag cancel ${isRefundable === true ? "refundable" : isRefundable === false ? "non-refundable" : ""}`}>
                      {isRefundable === true
                        ? "Free Cancellation"
                        : isRefundable === false
                        ? "Non Refundable"
                        : room.cancellation
                        ? `${typeof room.cancellation === "string" && room.cancellation.length < 60 ? room.cancellation : "See cancellation policy"}`
                        : "Cancellation policy applies"}
                    </span>

                    {(room.maxOccupancy || room.occupancy) && (
                      <span className="hrc-room-tag">{room.maxOccupancy || room.occupancy} Guests</span>
                    )}
                    {room.roomView && <span className="hrc-room-tag">{room.roomView}</span>}
                  </div>
                </div>

                <div className="hrc-room-card-price">
                  {room.price ? (
                    <>
                      <div className="hrc-room-price">₹{Math.round(Number(room.price)).toLocaleString("en-IN")}</div>
                      <div className="hrc-room-price-note">per night</div>
                    </>
                  ) : (
                    <div className="hrc-room-price-on-req">Price on request</div>
                  )}
                  <button type="button" className="hrc-book-room-btn" onClick={() => onBookRoom(room)}>
                    Book Room
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function HotelRoomCategories({ hotel, checkIn, checkOut, adults, children = 0, roomCount = 1, initialTab = "overview", onClose, onBookRoom }) {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState(initialTab);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => { setActiveTab(initialTab); setActiveImage(0); }, [initialTab, hotel]);

  useEffect(() => {
    let active = true;
    setLoading(true); setDetail(null); setError("");
    const hotelId = hotel.hid || hotel.id || hotel.hotelId;
    if (!hotelId) { setError("Hotel ID not available — cannot load room details."); setLoading(false); return () => { active = false; }; }
    getHotelDetail({ hid: hotelId, checkIn, checkOut, adults, children, rooms: roomCount })
      .then((data) => { if (active) setDetail(data); })
      .catch((err) => { if (active) setError(err.message || "Could not load room categories."); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [hotel, checkIn, checkOut, adults, children, roomCount]);

  const rooms = useMemo(() => detail ? normalizeRooms(detail) : [], [detail]);
  const detailInfo = detail?.hotelInfo || detail?.hotel || detail?.data?.hotelInfo || {};
  const description = hotel.description || hotel.overview || detailInfo.description || detail?.description || "";
  const amenities = hotel.amenities || detailInfo.amenities || [];

  const hotelImages = [...new Set([
    hotel.images, hotel.photos, detailInfo.images, detailInfo.photos,
    detail?.images, detail?.photos, detail?.hotelInfo?.images, detail?.hotelInfo?.photos,
  ].flatMap((items) => Array.isArray(items) ? items : []).map(imageUrl).filter(Boolean))];

  const currentImage = hotelImages[activeImage] || imageUrl(hotel.image || hotel.imageUrl || (hotel.images && hotel.images[0]));

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="hrc-overlay"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="presentation"
    >
      <div className="hrc-modal" role="dialog" aria-modal="true" aria-label={`${hotel.name} details`}>

        {/* Header */}
        <div className="hrc-header">
          <div className="hrc-header-text">
            <span className="hrc-eyebrow">Hotel Details</span>
            <h2 className="hrc-hotel-name">{hotel.name}</h2>
            {(hotel.address || detailInfo.address) && (
              <p className="hrc-hotel-addr">{hotel.address || detailInfo.address}</p>
            )}
          </div>
          <button type="button" className="hrc-close" onClick={onClose} aria-label="Close">×</button>
        </div>

        {/* Tabs */}
        <div className="hrc-tabs" role="tablist">
          <button
            role="tab" type="button"
            className={activeTab === "overview" ? "hrc-tab active" : "hrc-tab"}
            aria-selected={activeTab === "overview"}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          {hotelImages.length > 1 && (
            <button
              role="tab" type="button"
              className={activeTab === "gallery" ? "hrc-tab active" : "hrc-tab"}
              aria-selected={activeTab === "gallery"}
              onClick={() => setActiveTab("gallery")}
            >
              Gallery ({hotelImages.length})
            </button>
          )}
          <button
            role="tab" type="button"
            className={activeTab === "rooms" ? "hrc-tab active" : "hrc-tab"}
            aria-selected={activeTab === "rooms"}
            onClick={() => setActiveTab("rooms")}
          >
            Room Categories{rooms.length > 0 ? ` (${rooms.length})` : ""}
          </button>
        </div>

        {/* Body */}
        <div className="hrc-body">

          {/* OVERVIEW TAB */}
          {activeTab === "overview" && (
            <div className="hrc-overview">
              {/* Single Main Image for Overview */}
              {hotelImages[0] && (
                <div className="hrc-main-img-wrap" style={{ cursor: "pointer" }} onClick={() => hotelImages.length > 1 && setActiveTab("gallery")}>
                  <img src={hotelImages[0]} alt={`${hotel.name} — main photo`} className="hrc-main-img" />
                  {hotelImages.length > 1 && (
                    <span className="hrc-gal-counter" style={{ padding: "6px 12px", background: "rgba(12, 42, 73, 0.75)" }}>
                      View all {hotelImages.length} photos
                    </span>
                  )}
                </div>
              )}

              {/* Description */}
              <div className="hrc-section">
                <h3 className="hrc-section-title">About this property</h3>
                <p className="hrc-description">
                  {typeof description === "string" && description
                    ? description
                    : "Detailed room availability and pricing information is available in the Room Categories tab."}
                </p>
              </div>

              {/* Amenities */}
              {amenities.length > 0 && (
                <div className="hrc-section">
                  <h3 className="hrc-section-title">Amenities</h3>
                  <div className="hrc-amenities">
                    {amenities.slice(0, 24).map((a, i) => (
                      <span key={i} className="hrc-amenity-chip">
                        {typeof a === "string" ? a : a.name || a.description || "Amenity"}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Stay info */}
              {(checkIn || checkOut) && (
                <div className="hrc-stay-info">
                  {checkIn && <div><span>Check-in</span><strong>{checkIn}</strong></div>}
                  {checkOut && <div><span>Check-out</span><strong>{checkOut}</strong></div>}
                  <div><span>Guests</span><strong>{adults} Adult{Number(adults) > 1 ? "s" : ""}{Number(children) > 0 ? `, ${children} Child${Number(children) > 1 ? "ren" : ""}` : ""}</strong></div>
                  <div><span>Rooms</span><strong>{roomCount}</strong></div>
                </div>
              )}

              <button type="button" className="hrc-view-rooms-btn" onClick={() => setActiveTab("rooms")}>
                View available rooms →
              </button>
            </div>
          )}

          {/* GALLERY TAB */}
          {activeTab === "gallery" && hotelImages.length > 0 && (
            <div className="hrc-overview" style={{ paddingBottom: "24px" }}>
              <div className="hrc-gallery">
                <div className="hrc-main-img-wrap">
                  <img src={currentImage} alt={`${hotel.name} — photo ${activeImage + 1}`} className="hrc-main-img" style={{ maxHeight: "400px" }} />
                  {hotelImages.length > 1 && (
                    <>
                      <button
                        type="button" className="hrc-gal-arrow hrc-gal-prev"
                        aria-label="Previous photo"
                        onClick={() => setActiveImage((activeImage - 1 + hotelImages.length) % hotelImages.length)}
                      >‹</button>
                      <button
                        type="button" className="hrc-gal-arrow hrc-gal-next"
                        aria-label="Next photo"
                        onClick={() => setActiveImage((activeImage + 1) % hotelImages.length)}
                      >›</button>
                      <span className="hrc-gal-counter">{activeImage + 1} / {hotelImages.length}</span>
                    </>
                  )}
                </div>
                {hotelImages.length > 1 && (
                  <div className="hrc-thumbs">
                    {hotelImages.map((img, idx) => (
                      <button
                        type="button" key={idx}
                        className={idx === activeImage ? "hrc-thumb active" : "hrc-thumb"}
                        onClick={() => setActiveImage(idx)}
                        aria-label={`Photo ${idx + 1}`}
                      >
                        <img src={img} alt="" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ROOMS TAB */}
          {activeTab === "rooms" && (
            <RoomsTab rooms={rooms} loading={loading} error={error} onClose={onClose} onBookRoom={onBookRoom} />
          )}

        </div>
      </div>
    </div>
  );
}
