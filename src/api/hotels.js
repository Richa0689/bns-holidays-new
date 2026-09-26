const API_URL = "https://api.travelcrm.net";

/**
 * Search live hotel availability by city.
 * Calls: GET /api/tripjack/hotels/by-location
 */
export async function searchHotelsByLocation({ city, country = "India", checkIn, checkOut, adults = 2, children = 0 }) {
  const params = new URLSearchParams({ country, city, checkIn, checkOut, adults });
  if (children) params.append("children", children);

  const res = await fetch(`${API_URL}/api/tripjack/hotels/by-location?${params}`);
  if (!res.ok) {
    const errBody = await res.json().catch(() => ({}));
    throw new Error(errBody.error || `Hotel search failed (${res.status})`);
  }
  const data = await res.json();
  return data.hotels || [];
}

/**
 * Get full detail for a single hotel.
 * Calls: GET /api/tripjack/hotels/detail
 */
export async function getHotelDetail({ hid, checkIn, checkOut, adults = 2 }) {
  const params = new URLSearchParams({ hid, checkIn, checkOut, adults });
  const res = await fetch(`${API_URL}/api/tripjack/hotels/detail?${params}`);
  if (!res.ok) throw new Error(`Hotel detail failed (${res.status})`);
  return res.json();
}
