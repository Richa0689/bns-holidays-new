import { useEffect, useMemo, useState } from "react";
import { getHotelDetail } from "../api/hotels";

function collectRooms(value, path = "", result = []) {
  if (Array.isArray(value)) {
    value.forEach((item) => collectRooms(item, path, result));
    return result;
  }
  if (!value || typeof value !== "object") return result;
  const roomName = value.roomName || value.roomType || value.room_type || value.roomCategory || value.room_category || value.categoryName;
  if (roomName || (/room/i.test(path) && (value.name || value.title))) result.push(value);
  Object.entries(value).forEach(([key, child]) => collectRooms(child, key, result));
  return result;
}

function imageUrl(image) {
  if (typeof image === "string") return image;
  if (!image || typeof image !== "object") return "";
  return image.url || image.imageUrl || image.src || image.thumbnail || image.path || "";
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

export default function HotelRoomCategories({ hotel, checkIn, checkOut, adults, children = 0, roomCount = 1, initialTab = "overview", onClose, onBookRoom }) {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState(initialTab);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => { setActiveTab(initialTab); setActiveImage(0); }, [initialTab, hotel]);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setDetail(null);
    setError("");
    const hotelId = hotel.hid || hotel.id || hotel.hotelId;
    if (!hotelId) {
      setError("This hotel does not include an ID needed to load room availability.");
      setLoading(false);
      return () => { active = false; };
    }
    getHotelDetail({ hid: hotelId, checkIn, checkOut, adults, children, rooms: roomCount })
      .then((data) => { if (active) setDetail(data); })
      .catch((reason) => { if (active) setError(reason.message || "Could not load room categories."); })
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
  const currentImage = hotelImages[activeImage] || imageUrl(hotel.image || hotel.imageUrl);

  return <div className="tui-modal-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <section className="tui-room-modal" role="dialog" aria-modal="true" aria-label={`${hotel.name} details`}>
      <div className="tui-room-modal-head"><div><span>HOTEL INFORMATION</span><h2>{hotel.name}</h2><p>{hotel.address || detailInfo.address || ""}{checkIn && checkOut ? ` · ${checkIn} to ${checkOut}` : ""}</p></div><button type="button" onClick={onClose} aria-label="Close hotel details">×</button></div>
      <div className="tui-hotel-detail-tabs" role="tablist" aria-label="Hotel information">
        <button type="button" role="tab" aria-selected={activeTab === "overview"} className={activeTab === "overview" ? "selected" : ""} onClick={() => setActiveTab("overview")}>Overview</button>
        <button type="button" role="tab" aria-selected={activeTab === "rooms"} className={activeTab === "rooms" ? "selected" : ""} onClick={() => setActiveTab("rooms")}>Room categories {rooms.length ? `(${rooms.length})` : ""}</button>
      </div>
      {activeTab === "overview" && <div className="tui-hotel-detail-overview">
        {currentImage && <div className="tui-hotel-detail-gallery">
          <div className="tui-hotel-detail-main-image"><img src={currentImage} alt={`${hotel.name} photo ${activeImage + 1}`} />
            {hotelImages.length > 1 && <>
              <button type="button" className="tui-detail-gallery-arrow previous" aria-label="Previous hotel photo" onClick={() => setActiveImage((activeImage - 1 + hotelImages.length) % hotelImages.length)}>&#8249;</button>
              <span className="tui-detail-gallery-count">{activeImage + 1} / {hotelImages.length}</span>
              <button type="button" className="tui-detail-gallery-arrow next" aria-label="Next hotel photo" onClick={() => setActiveImage((activeImage + 1) % hotelImages.length)}>&#8250;</button>
            </>}
          </div>
          {hotelImages.length > 1 && <div className="tui-detail-gallery-thumbnails">{hotelImages.map((image, index) => <button type="button" key={`${image}-${index}`} className={index === activeImage ? "selected" : ""} onClick={() => setActiveImage(index)} aria-label={`Show hotel photo ${index + 1}`}><img src={image} alt="" /></button>)}</div>}
        </div>}
        <div><h3>About this hotel</h3><p>{typeof description === "string" && description ? description : "View available room categories and booking details for this property."}</p>
          {amenities.length > 0 && <><h3>Amenities</h3><div className="tui-detail-amenities">{amenities.slice(0, 24).map((amenity, index) => <span key={`${amenity}-${index}`}>{typeof amenity === "string" ? amenity : amenity.name || amenity.description || "Amenity"}</span>)}</div></>}
          <button type="button" className="tui-room-primary-action" onClick={() => setActiveTab("rooms")}>View available rooms</button>
        </div>
      </div>}
      {activeTab === "rooms" && (loading ? <p className="tui-loading">Loading available room categories…</p> : error ? <p className="tui-error">{error}</p> : rooms.length ? <div className="tui-room-options">
        {rooms.map((room, index) => <div key={index} className="tui-room-option">
          <div className="tui-room-option-name">{room.displayName}</div>
          {room.meal && <div className="tui-room-option-meal">🍽 {room.meal}</div>}
          {room.cancellation && <div className="tui-room-option-cancel">📋 {typeof room.cancellation === "string" ? room.cancellation : "See cancellation policy"}</div>}
          <div className="tui-room-option-footer">
            {room.price ? <strong>₹{Number(room.price).toLocaleString("en-IN")}</strong> : <span>Price on request</span>}
            <button type="button" className="tui-book-btn" onClick={() => onBookRoom(room)}>Book this room</button>
          </div>
        </div>)}
      </div> : <div className="tui-room-empty"><p>No room categories found for this hotel.</p><button type="button" className="tui-room-primary-action" onClick={() => onClose()}>Close</button></div>)}
    </section>
  </div>;
}
