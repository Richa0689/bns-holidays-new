import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { HotelDatePicker } from "./HotelSearchForm";

const today = new Date().toISOString().slice(0, 10);
const AIRPORTS = [
  ["New Delhi, India", "Indira Gandhi International Airport", "DEL"],
  ["Mumbai, India", "Chhatrapati Shivaji Maharaj International Airport", "BOM"],
  ["Bengaluru, India", "Kempegowda International Airport Bengaluru", "BLR"],
  ["Hyderabad, India", "Rajiv Gandhi International Airport", "HYD"],
  ["Chennai, India", "Chennai International Airport", "MAA"],
  ["Kolkata, India", "Netaji Subhas Chandra Bose International Airport", "CCU"],
  ["Goa, India", "Manohar International Airport", "GOX"],
  ["Ahmedabad, India", "Sardar Vallabhbhai Patel International Airport", "AMD"],
  ["Pune, India", "Pune International Airport", "PNQ"],
  ["Kochi, India", "Cochin International Airport", "COK"],
  ["Dubai, United Arab Emirates", "Dubai International Airport", "DXB"],
  ["Singapore, Singapore", "Singapore Changi Airport", "SIN"],
];
const AIRPORT_DATA_URL = "https://davidmegginson.github.io/ourairports-data/airports.csv";
const COUNTRY_DATA_URL = "https://davidmegginson.github.io/ourairports-data/countries.csv";
let worldwideAirportsPromise;

function parseCSV(text) {
  const rows = [];
  let row = [], value = "", quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (quoted && char === '"' && text[i + 1] === '"') { value += '"'; i += 1; }
    else if (char === '"') quoted = !quoted;
    else if (char === "," && !quoted) { row.push(value); value = ""; }
    else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && text[i + 1] === "\n") i += 1;
      row.push(value); rows.push(row); row = []; value = "";
    } else value += char;
  }
  if (value || row.length) { row.push(value); rows.push(row); }
  return rows;
}

function loadWorldwideAirports() {
  if (!worldwideAirportsPromise) {
    worldwideAirportsPromise = Promise.all([fetch(AIRPORT_DATA_URL), fetch(COUNTRY_DATA_URL)])
      .then(async ([airportResponse, countryResponse]) => {
        if (!airportResponse.ok || !countryResponse.ok) throw new Error("Airport list unavailable");
        const [airportCSV, countryCSV] = await Promise.all([airportResponse.text(), countryResponse.text()]);
        const countryRows = parseCSV(countryCSV);
        const countryColumns = countryRows.shift();
        const codeColumn = countryColumns.indexOf("code");
        const nameColumn = countryColumns.indexOf("name");
        const countries = new Map(countryRows.map((row) => [row[codeColumn], row[nameColumn]]));
        const airportRows = parseCSV(airportCSV);
        const columns = airportRows.shift();
        const get = (row, name) => row[columns.indexOf(name)] || "";
        return airportRows
          .filter((row) => get(row, "scheduled_service") === "yes" && /^[A-Z]{3}$/.test(get(row, "iata_code")))
          .map((row) => {
            const city = get(row, "municipality") || get(row, "name");
            const country = countries.get(get(row, "iso_country")) || get(row, "iso_country");
            return [`${city}, ${country}`, get(row, "name"), get(row, "iata_code")];
          })
          .filter((airport) => airport[0] && airport[1]);
      })
      .catch((error) => { worldwideAirportsPromise = undefined; throw error; });
  }
  return worldwideAirportsPromise;
}

function AirportField({ id, label, airport, onSelect }) {
  const [query, setQuery] = useState(airport[0]);
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState(null);
  const [worldwideAirports, setWorldwideAirports] = useState([]);
  const [airportsLoading, setAirportsLoading] = useState(false);
  const [airportLoadFailed, setAirportLoadFailed] = useState(false);
  const rootRef = useRef(null);
  const inputRef = useRef(null);
  const panelRef = useRef(null);
  const sourceAirports = worldwideAirports.length ? worldwideAirports : AIRPORTS;
  const matches = sourceAirports.filter((item) => item.join(" ").toLowerCase().includes(query.trim().toLowerCase())).slice(0, 30);

  useEffect(() => {
    if (!open || query.trim().length < 2 || worldwideAirports.length) return undefined;
    let active = true;
    setAirportsLoading(true);
    loadWorldwideAirports().then((airports) => {
      if (active) { setWorldwideAirports(airports); setAirportLoadFailed(false); }
    }).catch(() => { if (active) setAirportLoadFailed(true); })
      .finally(() => { if (active) setAirportsLoading(false); });
    return () => { active = false; };
  }, [open, query, worldwideAirports.length]);

  useEffect(() => {
    setQuery(airport[0]);
  }, [airport]);

  useEffect(() => {
    const close = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target) && !panelRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const update = () => {
      const anchor = inputRef.current?.getBoundingClientRect();
      const panel = panelRef.current;
      if (!anchor || !panel) return;
      const margin = 10;
      const width = Math.min(360, Math.max(anchor.width, 300), window.innerWidth - margin * 2);
      const left = Math.max(margin, Math.min(anchor.left, window.innerWidth - width - margin));
      const below = anchor.bottom + 5;
      const roomBelow = Math.max(0, window.innerHeight - margin - below);
      const roomAbove = Math.max(0, anchor.top - margin - 5);
      const useBelow = roomBelow >= Math.min(panel.scrollHeight, 320) || roomBelow >= roomAbove;
      const availableHeight = useBelow ? roomBelow : roomAbove;
      panel.style.maxHeight = `${Math.max(80, Math.min(320, availableHeight))}px`;
      const top = useBelow ? below : Math.max(margin, anchor.top - panel.offsetHeight - 5);
      setPosition({ top, left, width });
    };
    const frame = requestAnimationFrame(update);
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [open, query, matches.length]);

  return <div className="flight-control flight-airport-control" ref={rootRef}>
    <label htmlFor={id}>{label}</label>
    <input ref={inputRef} id={id} type="text" role="combobox" aria-autocomplete="list" aria-expanded={open} aria-controls={`${id}-options`} value={query}
      onFocus={() => setOpen(true)} onChange={(event) => { setQuery(event.target.value); setOpen(true); }} autoComplete="off" required />
    {open && createPortal(<div ref={panelRef} className="flight-airport-suggestions" id={`${id}-options`} role="listbox" style={{ position: "fixed", top: position?.top ?? 0, left: position?.left ?? 0, width: position?.width, visibility: position ? "visible" : "hidden" }}>
      <div className="flight-airport-heading">{query.trim() ? "WORLDWIDE AIRPORTS" : "POPULAR AIRPORTS"}</div>
      {matches.length ? matches.map((item) => <button type="button" role="option" aria-selected={airport[2] === item[2]} key={item[2]} onClick={() => { onSelect(item); setQuery(item[0]); setOpen(false); }}>
        <span><strong>{item[0]}</strong><small>{item[1]}</small></span><b>{item[2]}</b>
      </button>) : airportsLoading ? <p>Loading worldwide airports…</p> : airportLoadFailed ? <p>Worldwide airport search is unavailable. Try again shortly.</p> : <p>No matching airports</p>}
    </div>, document.body)}
  </div>;
}

function PassengerPicker({ adults, children, infants, cabinClass, onCountChange, onCabinChange }) {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState(null);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);
  const panelRef = useRef(null);
  const total = adults + children + infants;

  useEffect(() => {
    const close = (event) => {
      if (!rootRef.current?.contains(event.target) && !panelRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  useLayoutEffect(() => {
    if (!open) return undefined;
    const updatePosition = () => {
      const anchor = buttonRef.current?.getBoundingClientRect();
      const panel = panelRef.current;
      if (!anchor || !panel) return;
      const margin = 10;
      const width = Math.min(260, window.innerWidth - margin * 2);
      const left = Math.max(margin, Math.min(anchor.left, window.innerWidth - width - margin));
      const below = anchor.bottom + 5;
      const top = below + panel.offsetHeight <= window.innerHeight - margin
        ? below
        : Math.max(margin, anchor.top - panel.offsetHeight - 5);
      setPosition({ top, left, width });
    };
    const frame = requestAnimationFrame(updatePosition);
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [open, adults, children, infants, cabinClass]);

  const stepper = (name, hint, value, key, min, max) => <div className="flight-pax-row" key={key}>
    <div><strong>{name}</strong><small>{hint}</small></div>
    <button type="button" aria-label={`Remove ${name}`} disabled={value <= min} onClick={() => onCountChange(key, value - 1)}>−</button>
    <b>{value}</b>
    <button type="button" aria-label={`Add ${name}`} disabled={total >= 9 || value >= max} onClick={() => onCountChange(key, value + 1)}>+</button>
  </div>;

  return <div className="flight-control flight-pax-control" ref={rootRef}>
    <label>Passenger and class</label>
    <button ref={buttonRef} type="button" className="flight-pax-trigger" aria-expanded={open} onClick={() => setOpen(!open)}>
      {total} Passenger{total !== 1 ? "s" : ""} | {cabinClass === "PREMIUM_ECONOMY" ? "Prem. Eco" : cabinClass.charAt(0) + cabinClass.slice(1).toLowerCase()}
    </button>
    {open && createPortal(<div ref={panelRef} className="flight-pax-popover" role="dialog" aria-label="Passengers and class" style={{ position: "fixed", top: position?.top ?? 0, left: position?.left ?? 0, width: position?.width, visibility: position ? "visible" : "hidden" }}>
      {stepper("Adults", "12 yrs and above", adults, "adults", 1, 9)}
      {stepper("Children", "2 – 12 yrs", children, "children", 0, 8)}
      {stepper("Infants", "Below 2 yrs", infants, "infants", 0, 8)}
      <div className="flight-cabin-options">
        {[ ["ECONOMY", "Economy"], ["PREMIUM_ECONOMY", "Prem. Eco"], ["BUSINESS", "Business"], ["FIRST", "First"] ].map(([value, label]) => <button key={value} type="button" className={`${value === cabinClass ? "selected " : ""}${value === "FIRST" ? "flight-cabin-first" : ""}`} aria-pressed={value === cabinClass} onClick={() => onCabinChange(value)}>{label}</button>)}
      </div>
      <button type="button" className="flight-pax-done" onClick={() => setOpen(false)}>Done</button>
    </div>, document.body)}
  </div>;
}

export default function FlightSearchForm({ onSearch }) {
  const [from, setFrom] = useState(AIRPORTS.find((airport) => airport[2] === "BOM"));
  const [to, setTo] = useState(AIRPORTS.find((airport) => airport[2] === "DEL"));
  const [date, setDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [tripType, setTripType] = useState("oneway");
  const [calendarOpen, setCalendarOpen] = useState(null);
  const [multiRoutes, setMultiRoutes] = useState([
    { id: 1, from: AIRPORTS.find((airport) => airport[2] === "BOM"), to: AIRPORTS.find((airport) => airport[2] === "DEL"), date: "" },
    { id: 2, from: AIRPORTS.find((airport) => airport[2] === "DEL"), to: AIRPORTS.find((airport) => airport[2] === "DXB"), date: "" },
  ]);
  const nextRouteId = useRef(3);
  const [formError, setFormError] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [cabinClass, setCabinClass] = useState("ECONOMY");

  const updateCount = (key, value) => ({ adults: setAdults, children: setChildren, infants: setInfants }[key](value));

  const swap = () => { setFrom(to); setTo(from); };
  const updateMultiRoute = (id, changes) => {
    setMultiRoutes((routes) => routes.map((route) => route.id === id ? { ...route, ...changes } : route));
  };
  const addMultiRoute = () => {
    setMultiRoutes((routes) => {
      if (routes.length >= 5) return routes;
      const previous = routes[routes.length - 1];
      const destination = AIRPORTS.find((airport) => airport[2] !== previous.to[2]);
      return [...routes, { id: nextRouteId.current++, from: previous.to, to: destination, date: "" }];
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const routes = tripType === "multicity"
      ? multiRoutes
      : [
        { from, to, date },
        ...(tripType === "roundtrip" ? [{ from: to, to: from, date: returnDate }] : []),
      ];
    if (routes.some((route) => !route.date)) {
      setFormError("Choose a date for each flight leg.");
      return;
    }
    if (routes.some((route) => route.from[2] === route.to[2])) {
      setFormError("Each flight leg must have different origin and destination airports.");
      return;
    }
    if (tripType === "roundtrip" && returnDate < date) {
      setFormError("Return date must be on or after the departure date.");
      return;
    }
    if (tripType === "multicity" && routes.some((route, index) => index > 0 && route.date < routes[index - 1].date)) {
      setFormError("Multi-city flight dates must be in travel order.");
      return;
    }
    setFormError("");
    onSearch({
      tripType,
      routes: routes.map((route) => ({ from: route.from[2], to: route.to[2], date: route.date })),
      from: routes[0].from[2],
      to: routes[0].to[2],
      date: routes[0].date,
      returnDate: tripType === "roundtrip" ? returnDate : "",
      adults,
      children,
      infants,
      cabinClass,
    });
  };

  return (
    <section className="flight-search-card" aria-label="Flight search">
      <div className="flight-search-card-head"><span className="flight-search-tab">FLIGHTS</span></div>
      <div className="flight-trip-types" role="group" aria-label="Trip type">
        {[
          ["oneway", "One way"],
          ["roundtrip", "Round trip"],
          ["multicity", "Multicity"],
        ].map(([value, label]) => <button key={value} type="button" aria-pressed={tripType === value} className={tripType === value ? "selected" : ""} onClick={() => { setTripType(value); setFormError(""); setCalendarOpen(null); }}>{label}</button>)}
      </div>
      <form onSubmit={handleSubmit} className={`flight-search-form${tripType === "multicity" ? " is-multicity" : ""}${tripType === "roundtrip" ? " is-roundtrip" : ""}`}>
        {tripType === "multicity" ? <>
          <div className="flight-multi-routes">
            {multiRoutes.map((route, index) => <div className="flight-multi-route" key={route.id}>
              <AirportField id={`f-multi-from-${route.id}`} label={`Flight ${index + 1} from`} airport={route.from} onSelect={(airport) => updateMultiRoute(route.id, { from: airport })} />
              <AirportField id={`f-multi-to-${route.id}`} label="Where to?" airport={route.to} onSelect={(airport) => updateMultiRoute(route.id, { to: airport })} />
              <HotelDatePicker id={`f-multi-date-${route.id}`} label="Departure" value={route.date} minDate={index ? multiRoutes[index - 1].date || today : today} open={calendarOpen === `route-${route.id}`} portal className="flight-control" onToggle={() => setCalendarOpen((current) => current === `route-${route.id}` ? null : `route-${route.id}`)} onClose={() => setCalendarOpen(null)} onSelect={(value) => { updateMultiRoute(route.id, { date: value }); setCalendarOpen(null); }} onClear={() => { updateMultiRoute(route.id, { date: "" }); setCalendarOpen(null); }} />
              {multiRoutes.length > 2 && <button type="button" className="flight-remove-leg" aria-label={`Remove flight ${index + 1}`} onClick={() => setMultiRoutes((routes) => routes.filter((item) => item.id !== route.id))}>Remove</button>}
            </div>)}
            <button type="button" className="flight-add-leg" disabled={multiRoutes.length >= 5} onClick={addMultiRoute}>+ Add another flight</button>
          </div>
        </> : <>
          <div className="flight-route-fields">
            <AirportField id="f-from" label="Where from?" airport={from} onSelect={setFrom} />
            <button type="button" className="flight-swap-button" aria-label="Swap origin and destination" title="Swap airports" onClick={swap}><span aria-hidden="true">&#8644;</span></button>
            <AirportField id="f-to" label="Where to?" airport={to} onSelect={setTo} />
          </div>
          <div className={`flight-date-fields${tripType === "roundtrip" ? " is-roundtrip" : ""}`}>
            <HotelDatePicker id="f-date" label="Departure" value={date} minDate={today} open={calendarOpen === "departure"} portal className="flight-control" onToggle={() => setCalendarOpen((current) => current === "departure" ? null : "departure")} onClose={() => setCalendarOpen(null)} onSelect={(value) => { setDate(value); if (returnDate && returnDate < value) setReturnDate(""); setCalendarOpen(null); }} onClear={() => { setDate(""); setCalendarOpen(null); }} />
            {tripType === "roundtrip" && <HotelDatePicker id="f-return-date" label="Return" value={returnDate} minDate={date || today} open={calendarOpen === "return"} portal className="flight-control" onToggle={() => setCalendarOpen((current) => current === "return" ? null : "return")} onClose={() => setCalendarOpen(null)} onSelect={(value) => { setReturnDate(value); setCalendarOpen(null); }} onClear={() => { setReturnDate(""); setCalendarOpen(null); }} />}
          </div>
        </>}
        <PassengerPicker adults={adults} children={children} infants={infants} cabinClass={cabinClass} onCountChange={updateCount} onCabinChange={setCabinClass} />
        <button type="submit" className="flight-search-submit">Search flights</button>
      </form>
      {formError && <p className="flight-search-error" role="alert">{formError}</p>}
    </section>
  );
}
