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
 * is TripJack's common one-way search format — verify before relying on it.
 */
function buildFlightSearchPayload({ from, to, date, adults = 1, children = 0, infants = 0, cabinClass = "ECONOMY" }) {
  return {
    searchQuery: {
      cabinClass,
      paxInfo: { ADULT: String(adults), CHILD: String(children), INFANT: String(infants) },
      routeInfos: [
        {
          fromCityOrAirport: { code: from },
          toCityOrAirport: { code: to },
          travelDate: date, // "YYYY-MM-DD"
        },
      ],
      searchModifiers: { isDirectFlight: false, isConnectingFlight: true },
    },
  };
}

export async function searchFlights({ from, to, date, adults = 1, children = 0, infants = 0, cabinClass = "ECONOMY" }) {
  const payload = buildFlightSearchPayload({ from, to, date, adults, children, infants, cabinClass });

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
