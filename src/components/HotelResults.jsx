import { useEffect, useMemo, useState } from "react";
import SearchProgress from "./SearchProgress";

const FALLBACK_GRADIENTS = [
  "linear-gradient(135deg,#0C2A49,#173C61)", "linear-gradient(135deg,#5C3B2E,#2B1E18)",
  "linear-gradient(135deg,#1E5B4F,#0B3B3A)", "linear-gradient(135deg,#B5622A,#5B3421)",
  "linear-gradient(135deg,#374B6B,#12243D)", "linear-gradient(135deg,#3D6B5A,#12352C)",
];

function hotelImageUrl(image) {
  if (typeof image === "string") return image;
  if (!image || typeof image !== "object") return "";
  return image.url || image.imageUrl || image.src || image.thumbnail || image.path || "";
}

export default function HotelResults({ hotels, loading, error, onBookClick, onViewRooms, onViewDetails }) {
  const prices = hotels.map((hotel) => Number(hotel.minRate)).filter((price) => Number.isFinite(price) && price > 0);
  const rangeMin = prices.length ? Math.floor(Math.min(...prices)) : 0;
  const rangeMax = prices.length ? Math.ceil(Math.max(...prices)) : 100000;
  const [maxPrice, setMaxPrice] = useState(rangeMax);
  const [selectedStars, setSelectedStars] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [sortBy, setSortBy] = useState("price-asc");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => { setMaxPrice(rangeMax); }, [rangeMax]);

  const amenityCounts = useMemo(() => {
    const counts = new Map();
    hotels.forEach((hotel) => (hotel.amenities || []).forEach((amenity) => counts.set(amenity, (counts.get(amenity) || 0) + 1)));
    return [...counts.entries()].sort((a, b) => b[1] - a[1]);
  }, [hotels]);

  const mealCounts = useMemo(() => {
    const counts = new Map();
    hotels.forEach((hotel) => {
      const types = Array.isArray(hotel.mealTypes) ? hotel.mealTypes : (hotel.mealTypes ? [hotel.mealTypes] : []);
      types.forEach((meal) => counts.set(meal, (counts.get(meal) || 0) + 1));
    });
    return [...counts.entries()].sort((a, b) => b[1] - a[1]);
  }, [hotels]);

  const visibleHotels = useMemo(() => hotels.filter((hotel) => {
    const price = Number(hotel.minRate) || 0;
    const stars = Number(hotel.starRating) || 0;
    const amenities = (hotel.amenities || []).map((item) => item.toLowerCase());
    const rawMeals = Array.isArray(hotel.mealTypes) ? hotel.mealTypes : (hotel.mealTypes ? [hotel.mealTypes] : []);
    const meals = rawMeals.map((item) => String(item).toLowerCase());
    return price <= maxPrice
      && (!selectedStars.length || selectedStars.includes(stars))
      && selectedAmenities.every((item) => amenities.includes(item.toLowerCase()))
      && (!selectedMeals.length || selectedMeals.some((item) => meals.includes(item.toLowerCase())));
  }).sort((a, b) => {
    if (sortBy === "price-desc") return (Number(b.minRate) || 0) - (Number(a.minRate) || 0);
    if (sortBy === "rating") return (Number(b.starRating) || 0) - (Number(a.starRating) || 0);
    return (Number(a.minRate) || 0) - (Number(b.minRate) || 0);
  }), [hotels, maxPrice, selectedStars, selectedAmenities, selectedMeals, sortBy]);

  const toggleItem = (items, setter, value) => setter(items.includes(value) ? items.filter((item) => item !== value) : [...items, value]);

  if (loading) return <SearchProgress type="hotel" />;
  if (error) return <p className="tui-error">{error}</p>;
  if (!hotels.length) return <p className="tui-empty">No hotels found. Try a different search.</p>;

  return <div className="tui-hotel-results-layout">
    <aside className={`tui-hotel-filters${mobileFiltersOpen ? " is-open" : ""}`} aria-label="Filter hotels">
      <div className="tui-hotel-filter-heading"><h3>Filters</h3><button type="button" className="tui-mobile-filter-toggle" aria-expanded={mobileFiltersOpen} onClick={() => setMobileFiltersOpen((open) => !open)}>{mobileFiltersOpen ? "Hide filters" : "Show filters"} <span aria-hidden="true">{mobileFiltersOpen ? "−" : "+"}</span></button></div>
      <div className="tui-hotel-filter-content">
      <section className="tui-hotel-filter-section">
        <h4>Price per night</h4>
        <input aria-label="Maximum price per night" type="range" min={rangeMin} max={rangeMax || rangeMin + 1} step={Math.max(1, Math.round((rangeMax - rangeMin) / 100))} value={Math.min(maxPrice, rangeMax)} onChange={(event) => setMaxPrice(Number(event.target.value))} />
        <div className="tui-filter-range-labels"><span>₹{rangeMin.toLocaleString("en-IN")}</span><span>₹{maxPrice.toLocaleString("en-IN")}</span></div>
      </section>
      <section className="tui-hotel-filter-section">
        <h4>Star rating</h4>
        <div className="tui-star-filter-list">{[5, 4, 3, 2, 1].map((star) => <button key={star} type="button" aria-pressed={selectedStars.includes(star)} className={selectedStars.includes(star) ? "selected" : ""} onClick={() => toggleItem(selectedStars, setSelectedStars, star)}>{star} ★</button>)}</div>
      </section>
      <section className="tui-hotel-filter-section">
        <h4>Amenities</h4>
        <div className="tui-amenity-filters">{amenityCounts.slice(0, 14).map(([amenity, count]) => <label key={amenity}><input type="checkbox" checked={selectedAmenities.includes(amenity)} onChange={() => toggleItem(selectedAmenities, setSelectedAmenities, amenity)} /><span>{amenity}</span><small>{count}</small></label>)}</div>
      </section>
      {mealCounts.length > 0 && <section className="tui-hotel-filter-section">
        <h4>Meal preference</h4>
        <div className="tui-amenity-filters">{mealCounts.map(([meal, count]) => <label key={meal}><input type="checkbox" checked={selectedMeals.includes(meal)} onChange={() => toggleItem(selectedMeals, setSelectedMeals, meal)} /><span>{meal}</span><small>{count}</small></label>)}</div>
      </section>}
      <button type="button" className="tui-filter-clear" onClick={() => { setMaxPrice(rangeMax); setSelectedStars([]); setSelectedAmenities([]); setSelectedMeals([]); setSortBy("price-asc"); }}>Clear filters</button>
      </div>
    </aside>

    <div className="tui-hotel-results-main">
      <div className="tui-hotel-results-toolbar">
        <strong>{visibleHotels.length} of {hotels.length} hotels found</strong>
        <div className="tui-hotel-sort" aria-label="Sort hotels">
          <button type="button" className={sortBy === "price-asc" ? "selected" : ""} onClick={() => setSortBy("price-asc")}>Price ↑</button>
          <button type="button" className={sortBy === "price-desc" ? "selected" : ""} onClick={() => setSortBy("price-desc")}>Price ↓</button>
          <button type="button" className={sortBy === "rating" ? "selected" : ""} onClick={() => setSortBy("rating")}>Rating</button>
        </div>
      </div>
      {visibleHotels.length ? <div className="tui-hotel-list">
        {visibleHotels.map((hotel, i) => {
          const image = hotelImageUrl(hotel.images?.[0] || hotel.image || hotel.imageUrl);
          const artStyle = image ? { backgroundImage: `url("${image}")` } : { background: FALLBACK_GRADIENTS[i % FALLBACK_GRADIENTS.length] };
          return <article key={hotel.id || i} className="tui-hotel-card">
            <div className="tui-hotel-art" style={artStyle}><div className="tui-art-label">{(hotel.address || "").split(",")[0]}</div></div>
            <div className="tui-hotel-body">
              <div className="tui-hotel-top"><div className="tui-hotel-name">{hotel.name}</div><div className="tui-stars">{"★".repeat(Number(hotel.starRating) || 0)}</div></div>
              <div className="tui-hotel-address">{hotel.address}</div>
              <div className="tui-amenity-row">{(hotel.amenities || []).slice(0, 4).map((amenity) => <span key={amenity} className="tui-amenity-chip">{amenity}</span>)}</div>
              {hotel.hasFreeCancellation && <div className="tui-cancel-badge">Free cancellation</div>}
              <button type="button" className="tui-room-categories-btn" onClick={() => onViewRooms(hotel)}>View room categories</button>
            </div>
            <div className="tui-hotel-price-col"><div><div className="tui-price-label">From</div><div className="tui-price-value">₹{Number(hotel.minRate || 0).toLocaleString("en-IN")}</div><div className="tui-price-note">per night, taxes extra</div></div><div className="tui-hotel-actions"><button type="button" className="tui-hotel-details-btn" onClick={() => onViewDetails(hotel)}>View details</button><button className="tui-book-btn" onClick={() => onBookClick(hotel)}>Request to book</button></div></div>
          </article>;
        })}
      </div> : <p className="tui-empty">No hotels match these filters.</p>}
    </div>
  </div>;
}