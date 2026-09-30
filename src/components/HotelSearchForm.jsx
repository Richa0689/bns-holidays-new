import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const DESTINATIONS = [
  ["Pune", "India"], ["Puducherry", "India"], ["Pucallpa", "Peru"], ["Puebla", "Mexico"],
  ["Puerto Montt", "Chile"], ["Puerto Princesa", "Philippines"], ["Mumbai", "India"],
  ["New Delhi", "India"], ["Goa", "India"], ["Bengaluru", "India"], ["Jaipur", "India"],
  ["Chennai", "India"], ["Dubai", "United Arab Emirates"], ["Singapore", "Singapore"],
  ["Bangkok", "Thailand"], ["London", "United Kingdom"], ["Paris", "France"],
];
const COUNTRY_CODES = {
  Afghanistan: "af", Albania: "al", Algeria: "dz", Argentina: "ar", Australia: "au",
  Austria: "at", Azerbaijan: "az", Bahrain: "bh", Bangladesh: "bd", Belgium: "be",
  Bhutan: "bt", Brazil: "br", Bulgaria: "bg", Cambodia: "kh", Canada: "ca",
  Chile: "cl", China: "cn", Colombia: "co", Croatia: "hr", Cuba: "cu",
  Cyprus: "cy", "Czech Republic": "cz", Denmark: "dk", Ecuador: "ec", Egypt: "eg",
  Estonia: "ee", Ethiopia: "et", Finland: "fi", France: "fr", Georgia: "ge",
  Germany: "de", Ghana: "gh", Greece: "gr", Hungary: "hu", Iceland: "is",
  India: "in", Indonesia: "id", Iran: "ir", Iraq: "iq", Ireland: "ie",
  Israel: "il", Italy: "it", Japan: "jp", Jordan: "jo", Kazakhstan: "kz",
  Kenya: "ke", Kuwait: "kw", Laos: "la", Latvia: "lv", Lebanon: "lb",
  Lithuania: "lt", Luxembourg: "lu", Malaysia: "my", Maldives: "mv", Malta: "mt",
  Mexico: "mx", Moldova: "md", Mongolia: "mn", Morocco: "ma", Myanmar: "mm",
  Nepal: "np", Netherlands: "nl", "New Zealand": "nz", Nigeria: "ng", Norway: "no",
  Oman: "om", Pakistan: "pk", Peru: "pe", Philippines: "ph", Poland: "pl",
  Portugal: "pt", Qatar: "qa", Romania: "ro", Russia: "ru", "Saudi Arabia": "sa",
  Serbia: "rs", Singapore: "sg", Slovakia: "sk", Slovenia: "si", "South Africa": "za",
  "South Korea": "kr", Spain: "es", "Sri Lanka": "lk", Sweden: "se", Switzerland: "ch",
  Syria: "sy", Taiwan: "tw", Tanzania: "tz", Thailand: "th", Tunisia: "tn",
  Turkey: "tr", "United Arab Emirates": "ae", Uganda: "ug", Ukraine: "ua",
  "United Kingdom": "gb", "United States": "us", Uruguay: "uy", Uzbekistan: "uz",
  Venezuela: "ve", Vietnam: "vn", Yemen: "ye", Zambia: "zm", Zimbabwe: "zw",
};

function CountryFlag({ code }) {
  const countryCode = (code || "in").toLowerCase();
  return <img className="hotel-country-flag" src={`https://flagcdn.com/w40/${countryCode}.png`} alt="" aria-hidden="true" />;
}

const toISODate = (date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
const today = toISODate(new Date());
const parseISODate = (value) => value ? new Date(`${value}T12:00:00`) : null;
const displayDate = (value) => value ? `${value.slice(8, 10)}-${value.slice(5, 7)}-${value.slice(0, 4)}` : "dd-mm-yyyy";

function CalendarIcon() {
  return <svg className="hotel-calendar-icon" viewBox="0 0 20 20" aria-hidden="true"><rect x="3" y="4.5" width="14" height="13" rx="2"/><path d="M6.5 2.5v4M13.5 2.5v4M3.5 8h13"/></svg>;
}

export function HotelDatePicker({ id, label, value, minDate, open, alignRight, onToggle, onSelect, onClear, onClose, portal = false, className = "" }) {
  const [month, setMonth] = useState(() => parseISODate(value) || new Date());
  const [popoverPosition, setPopoverPosition] = useState(null);
  const controlRef = useRef(null);
  const triggerRef = useRef(null);
  const calendarRef = useRef(null);

  useEffect(() => {
    if (!open || !portal || !onClose) return undefined;
    const close = (event) => {
      if (!controlRef.current?.contains(event.target) && !calendarRef.current?.contains(event.target)) onClose();
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open, portal, onClose]);

  useEffect(() => {
    if (open) setMonth(parseISODate(value) || new Date());
  }, [open, value]);

  useLayoutEffect(() => {
    if (!open) {
      setPopoverPosition(null);
      return undefined;
    }
    const updatePosition = () => {
      const anchor = controlRef.current?.getBoundingClientRect();
      const panel = calendarRef.current;
      if (!anchor || !panel) return;
      const margin = 12;
      const width = panel.offsetWidth;
      const height = panel.offsetHeight;
      const left = Math.max(margin, Math.min(alignRight ? anchor.right - width : anchor.left, window.innerWidth - width - margin));
      const below = anchor.bottom + 6;
      const above = anchor.top - height - 6;
      const top = below + height <= window.innerHeight - margin
        ? below
        : above >= margin ? above : Math.max(margin, window.innerHeight - height - margin);
      setPopoverPosition({ top, left });
    };
    const frame = requestAnimationFrame(updatePosition);
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [open, month, alignRight]);

  const firstOfMonth = new Date(month.getFullYear(), month.getMonth(), 1);
  const firstCell = new Date(month.getFullYear(), month.getMonth(), 1 - firstOfMonth.getDay());
  const days = Array.from({ length: 42 }, (_, index) => {
    const date = new Date(firstCell.getFullYear(), firstCell.getMonth(), firstCell.getDate() + index);
    return { date, key: toISODate(date), inMonth: date.getMonth() === month.getMonth() };
  });

  const shiftMonth = (amount) => setMonth(new Date(month.getFullYear(), month.getMonth() + amount, 1));
  const monthLabel = new Intl.DateTimeFormat("en", { month: "long", year: "numeric" }).format(month);

  const calendar = open && <div ref={calendarRef} className="hotel-date-calendar" role="dialog" aria-label={`${label} calendar`} style={{ position: "fixed", top: popoverPosition?.top ?? 0, left: popoverPosition?.left ?? 0, visibility: popoverPosition ? "visible" : "hidden" }}>
        <div className="hotel-calendar-header">
          <strong>{monthLabel}</strong>
          <div>
            <button type="button" aria-label="Previous month" onClick={() => shiftMonth(-1)}>&lsaquo;</button>
            <button type="button" aria-label="Next month" onClick={() => shiftMonth(1)}>&rsaquo;</button>
          </div>
        </div>
        <div className="hotel-calendar-weekdays">{["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => <span key={day}>{day}</span>)}</div>
        <div className="hotel-calendar-days">
          {days.map(({ date, key, inMonth }) => {
            const disabled = key < minDate;
            const selected = key === value;
            const isToday = key === today;
            return <button key={key} type="button" disabled={disabled} className={`${inMonth ? "" : "outside-month"}${selected ? " selected" : ""}${isToday ? " today" : ""}`} aria-pressed={selected} onClick={() => onSelect(key)}>{date.getDate()}</button>;
          })}
        </div>
        <div className="hotel-calendar-footer">
          <button type="button" onClick={onClear}>Clear</button>
          <button type="button" disabled={today < minDate} onClick={() => onSelect(today)}>Today</button>
        </div>
      </div>;

  return (
    <div ref={controlRef} className={`hotel-control hotel-date-control ${className}${alignRight ? " hotel-date-control-right" : ""}${open ? " is-calendar-open" : ""}`}>
      <label id={`${id}-label`}>{label}</label>
      <button ref={triggerRef} type="button" className="hotel-date-trigger" aria-labelledby={`${id}-label`} aria-haspopup="dialog" aria-expanded={open} onClick={onToggle}>
        <span className={value ? "" : "hotel-date-placeholder"}>{displayDate(value)}</span>
        <CalendarIcon />
      </button>
      {portal ? calendar && createPortal(calendar, document.body) : calendar}
    </div>
  );
}

export default function HotelSearchForm({ onSearch }) {
  const [destination, setDestination] = useState("Mumbai");
  const [country, setCountry] = useState("India");
  const [countryCode, setCountryCode] = useState("in");
  const [remoteDestinations, setRemoteDestinations] = useState([]);
  const [destinationsLoading, setDestinationsLoading] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(null);
  const formRef = useRef(null);
  const suggestionsPanelRef = useRef(null);
  const [suggestionsPosition, setSuggestionsPosition] = useState(null);
  const destinationRef = useRef(null);
  const guestRef = useRef(null);
  const countryRef = useRef(null);
  const [countrySuggestionsOpen, setCountrySuggestionsOpen] = useState(false);
  const localSuggestions = DESTINATIONS.filter(([city, nation]) =>
    `${city} ${nation}`.toLowerCase().includes(destination.trim().toLowerCase())
  ).slice(0, 8);
  const suggestions = [...localSuggestions, ...remoteDestinations]
    .filter((place, index, all) => all.findIndex((item) => item[0].toLowerCase() === place[0].toLowerCase() && item[1].toLowerCase() === place[1].toLowerCase()) === index)
    .slice(0, 8);

  useLayoutEffect(() => {
    if (!suggestionsOpen || !destination.trim()) {
      setSuggestionsPosition(null);
      return undefined;
    }
    const updatePosition = () => {
      const anchor = destinationRef.current?.getBoundingClientRect();
      const panel = suggestionsPanelRef.current;
      if (!anchor || !panel) return;
      const margin = 12;
      const width = Math.min(300, anchor.width, window.innerWidth - margin * 2);
      const height = panel.offsetHeight;
      const left = Math.max(margin, Math.min(anchor.left, window.innerWidth - width - margin));
      const below = anchor.bottom + 5;
      const above = anchor.top - height - 5;
      const top = below + height <= window.innerHeight - margin
        ? below
        : above >= margin ? above : Math.max(margin, window.innerHeight - height - margin);
      setSuggestionsPosition({ top, left, width });
    };
    const frame = requestAnimationFrame(updatePosition);
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [suggestionsOpen, destination, suggestions.length, destinationsLoading]);

  useEffect(() => {
    const query = destination.trim();
    if (!suggestionsOpen || query.length < 2) {
      setRemoteDestinations([]);
      setDestinationsLoading(false);
      return undefined;
    }

    setRemoteDestinations([]);
    const controller = new AbortController();
    const timer = setTimeout(async () => {
      setDestinationsLoading(true);
      try {
        const params = new URLSearchParams({ q: query, limit: "8", lang: "en", layer: "city", dedupe: "1" });
        const response = await fetch(`https://photon.komoot.io/api/?${params}`, { signal: controller.signal });
        if (!response.ok) throw new Error("Destination lookup failed");
        const data = await response.json();
        const matches = (data.features || []).map(({ properties = {} }) => [
          properties.name,
          properties.country,
          (properties.countrycode || "in").toLowerCase(),
        ]).filter(([city, nation]) => city && nation);
        setRemoteDestinations(matches);
        const exactMatch = matches.find(([city]) => city.toLowerCase() === query.toLowerCase());
        if (exactMatch) {
          setCountry(exactMatch[1]);
          setCountryCode(exactMatch[2]);
        }
      } catch (error) {
        if (error.name !== "AbortError") setRemoteDestinations([]);
      } finally {
        if (!controller.signal.aborted) setDestinationsLoading(false);
      }
    }, 300);

    return () => { clearTimeout(timer); controller.abort(); };
  }, [destination, suggestionsOpen]);

  useEffect(() => {
    const close = (event) => {
      if (destinationRef.current && !destinationRef.current.contains(event.target)) setSuggestionsOpen(false);
      if (guestRef.current && !guestRef.current.contains(event.target)) setGuestsOpen(false);
      if (formRef.current && !formRef.current.contains(event.target)) setOpenCalendar(null);
      if (countryRef.current && !countryRef.current.contains(event.target)) setCountrySuggestionsOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const selectDestination = ([city, nation, code]) => {
    setDestination(city);
    setCountry(nation);
    setCountryCode(code || COUNTRY_CODES[nation] || "in");
    setSuggestionsOpen(false);
  };

  const selectCheckIn = (value) => {
    setCheckIn(value);
    if (checkOut && checkOut <= value) setCheckOut("");
    setOpenCalendar(null);
  };
  const selectCheckOut = (value) => { setCheckOut(value); setOpenCalendar(null); };
  const checkOutMin = checkIn ? toISODate(new Date(parseISODate(checkIn).getTime() + 86400000)) : today;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!destination.trim() || !checkIn || !checkOut) return;
    onSearch({ city: destination.trim(), country, checkIn, checkOut, rooms, adults, children });
  };

  const stepper = (label, value, setter, min, max, hint) => (
    <div className="hotel-guest-row" key={label}>
      <div><span>{label}</span>{hint && <small>{hint}</small>}</div>
      <button type="button" aria-label={`Decrease ${label}`} disabled={value <= min} onClick={() => setter(value - 1)}>−</button>
      <b>{value}</b>
      <button type="button" aria-label={`Increase ${label}`} disabled={value >= max} onClick={() => setter(value + 1)}>+</button>
    </div>
  );

  return (
    <div className="hotel-search-wrap">
      <div className="hotel-search-card">
        <div className="hotel-search-tab">HOTELS</div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="hotel-search-row">
            <div className="hotel-control hotel-destination" ref={destinationRef}>
              <label htmlFor="hotel-destination">Where are you going?</label>
              <input id="hotel-destination" value={destination} autoComplete="off" placeholder="City or destination"
                onFocus={() => { setOpenCalendar(null); setGuestsOpen(false); setSuggestionsOpen(true); }} onChange={(event) => {
                  const value = event.target.value;
                  setDestination(value);
                  const exactMatch = DESTINATIONS.find(([city]) => city.toLowerCase() === value.trim().toLowerCase());
                  if (exactMatch) {
                    setCountry(exactMatch[1]);
                    setCountryCode(COUNTRY_CODES[exactMatch[1]] || "in");
                  }
                  setSuggestionsOpen(true);
                }} required />
              {suggestionsOpen && destination.trim() && <div ref={suggestionsPanelRef} className="hotel-suggestions" role="listbox" style={{ position: "fixed", top: suggestionsPosition?.top ?? 0, left: suggestionsPosition?.left ?? 0, width: suggestionsPosition?.width, visibility: suggestionsPosition ? "visible" : "hidden" }}>
                {suggestions.length ? suggestions.map((place) => <button type="button" role="option" key={`${place[0]}-${place[1]}`} onClick={() => selectDestination(place)}>
                  <strong>{place[0]}</strong><small><CountryFlag code={place[2] || COUNTRY_CODES[place[1]]} />{place[1]}</small>
                </button>) : <p>{destinationsLoading ? "Searching worldwide…" : "No destinations found"}</p>}
                <div className="hotel-destination-attribution">
                  Location data: <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">© OpenStreetMap contributors</a>
                </div>
              </div>}
            </div>
            <HotelDatePicker id="hotel-checkin" label="Check-in" value={checkIn} minDate={today} open={openCalendar === "checkIn"} onToggle={() => { setSuggestionsOpen(false); setGuestsOpen(false); setOpenCalendar(openCalendar === "checkIn" ? null : "checkIn"); }} onSelect={selectCheckIn} onClear={() => { setCheckIn(""); setOpenCalendar(null); }} />
            <HotelDatePicker id="hotel-checkout" label="Check-out" value={checkOut} minDate={checkOutMin} open={openCalendar === "checkOut"} alignRight onToggle={() => { setSuggestionsOpen(false); setGuestsOpen(false); setOpenCalendar(openCalendar === "checkOut" ? null : "checkOut"); }} onSelect={selectCheckOut} onClear={() => { setCheckOut(""); setOpenCalendar(null); }} />
            <div className="hotel-control hotel-guest-control" ref={guestRef}>
              <label>Rooms &amp; guests</label>
              <button type="button" className="hotel-guest-trigger" aria-expanded={guestsOpen} onClick={() => { setSuggestionsOpen(false); setOpenCalendar(null); setGuestsOpen(!guestsOpen); }}>
                {rooms} Room{rooms !== 1 ? "s" : ""} | {adults} Adult{adults !== 1 ? "s" : ""}{children ? `, ${children} Child${children !== 1 ? "ren" : ""}` : ""}
              </button>
              {guestsOpen && <div className="hotel-guest-popover">
                {stepper("Rooms", rooms, setRooms, 1, 8)}
                {stepper("Adults", adults, setAdults, 1, 16, "Per room")}
                {stepper("Children", children, setChildren, 0, 8, "Per room")}
                <button type="button" className="hotel-done" onClick={() => setGuestsOpen(false)}>Done</button>
              </div>}
            </div>
            <button type="submit" className="hotel-search-submit">Search</button>
          </div>
          <div className="hotel-country-row" ref={countryRef}>
            <span>COUNTRY</span>
            <div className="hotel-country-input" style={{ position: "relative", cursor: "pointer" }} onClick={() => setCountrySuggestionsOpen((o) => !o)}>
              <CountryFlag code={countryCode} />
              <input
                value={country || "India"}
                onChange={(event) => { setCountry(event.target.value || "India"); setCountrySuggestionsOpen(true); }}
                placeholder="Country"
                autoComplete="off"
                style={{ background: "transparent", border: "none", outline: "none", flex: 1, cursor: "pointer", color: "inherit", fontSize: "inherit" }}
              />
              <span style={{ fontSize: "10px", color: "#526c88", pointerEvents: "none", marginLeft: "4px" }}>▼</span>
              {countrySuggestionsOpen && (
                <div className="hotel-suggestions" role="listbox" style={{ bottom: "calc(100% + 5px)", top: "auto", right: 0, left: "auto", width: "200px" }}>
                  {Object.keys(COUNTRY_CODES)
                    .filter((c) => c.toLowerCase().includes(country.toLowerCase()))
                    .sort()
                    .map((nation) => (
                      <button
                        type="button"
                        role="option"
                        key={nation}
                        onClick={(e) => { e.stopPropagation(); setCountry(nation); setCountryCode(COUNTRY_CODES[nation]); setCountrySuggestionsOpen(false); }}
                      >
                        <CountryFlag code={COUNTRY_CODES[nation]} />
                        <strong>{nation}</strong>
                      </button>
                    ))}
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
