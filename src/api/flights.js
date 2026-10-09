const API_URL = "https://api.travelcrm.net";

/**
 * Search live flights.
 * Calls: POST /api/tripjack/flights/search
 *
 * ⚠️ IMPORTANT: the exact request body TripJack expects (field names for
 * origin/destination/date/passengers) is defined by whatever your Flask
 * route forwards as `payload`. Open `Tripjackroutessnippet.py` on your
 * server (or TripJack's API docs) to confirm the exact JSON shape, then
 * adjust `buildFlightSearchPayload` below to match. The shape used here
 * supports multiple routeInfos for return and multi-city searches — verify
 * the exact payload against the server route before relying on it.
 */
function buildFlightSearchPayload({ from, to, date, routes, adults = 1, children = 0, infants = 0, cabinClass = "ECONOMY" }) {
  const routeInfos = (routes?.length ? routes : [{ from, to, date }]).map((route) => ({
    fromCityOrAirport: { code: route.from },
    toCityOrAirport: { code: route.to },
    travelDate: route.date,
  }));

  return {
    searchQuery: {
      cabinClass,
      paxInfo: { ADULT: String(adults), CHILD: String(children), INFANT: String(infants) },
      routeInfos,
      searchModifiers: { isDirectFlight: false, isConnectingFlight: true },
    },
  };
}

export async function searchFlights({ from, to, date, routes, adults = 1, children = 0, infants = 0, cabinClass = "ECONOMY" }) {
  const payload = buildFlightSearchPayload({ from, to, date, routes, adults, children, infants, cabinClass });

  const res = await fetch(`${API_URL}/api/tripjack/flights/search`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errBody = await res.json().catch(() => ({}));
    throw new Error(errBody.error || `Flight search failed (${res.status})`);
  }
  return res.json();
}
