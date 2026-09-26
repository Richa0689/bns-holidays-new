/**
 * ⚠️ The exact field names in `flights` depend on TripJack's real response
 * shape, which we haven't seen yet. This component reads a few likely
 * field names defensively (see `pick` calls below) so it won't crash, but
 * once you run a real search, paste one sample flight object back and this
 * mapping should be tightened to match exactly.
 */
function pick(obj, paths, fallback = "") {
  for (const path of paths) {
    const val = path.split(".").reduce((o, k) => (o ? o[k] : undefined), obj);
    if (val !== undefined && val !== null) return val;
  }
  return fallback;
}

export default function FlightResults({ flights, loading, error, onBookClick }) {
  if (loading) return <p className="tui-loading">Searching live flights…</p>;
  if (error) return <p className="tui-error">{error}</p>;
  if (!flights.length) return <p className="tui-empty">No flights found. Try different dates.</p>;

  return (
    <div className="tui-flight-list">
      {flights.map((f, i) => {
        const airlineCode = pick(f, ["airline.code", "mi", "airlineCode"], "??");
        const airlineName = pick(f, ["airline.name", "airlineName"], "Airline");
        const depTime = pick(f, ["depTime", "departureTime", "segments.0.dep.time"], "--:--");
        const arrTime = pick(f, ["arrTime", "arrivalTime", "segments.0.arr.time"], "--:--");
        const fromCode = pick(f, ["from", "origin", "segments.0.or.code"], "");
        const toCode = pick(f, ["to", "destination", "segments.0.ds.code"], "");
        const duration = pick(f, ["duration", "totalDuration"], "");
        const stops = pick(f, ["stops", "stopCount"], 0);
        const price = pick(f, ["price", "totalFare", "fare.totalFare"], 0);

        return (
          <div key={i} className="tui-flight-card">
            <div className="tui-airline-badge">{airlineCode}</div>

            <div className="tui-route-block">
              <div className="tui-route-point">
                <div className="tui-route-time">{depTime}</div>
                <div className="tui-route-code">{fromCode}</div>
              </div>
              <div className="tui-route-line">
                <div className="tui-track"><span className="tui-plane">✈</span></div>
                <div className="tui-route-duration">
                  {duration} {stops ? `· ${stops} stop${stops > 1 ? "s" : ""}` : "· Non-stop"}
                </div>
              </div>
              <div className="tui-route-point">
                <div className="tui-route-time">{arrTime}</div>
                <div className="tui-route-code">{toCode}</div>
              </div>
            </div>

            <div className="tui-flight-meta-col">
              <div className="tui-flight-price">₹{Number(price).toLocaleString("en-IN")}</div>
              <button className="tui-book-btn" onClick={() => onBookClick(f)}>
                Request to book
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}