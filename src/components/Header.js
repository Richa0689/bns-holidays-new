import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import logo from "./images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBars,
  faXmark,
  faChevronDown,
  faPhone,
  faPlane,
  faHotel,
  faSuitcase,
  faLocationDot,
  faCompass,
  faPassport,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const searchServices = [
  {
    name: "Flight Booking Services",
    path: "/flights",
    icon: faPlane,
    category: "Flights",
    keywords: ["flight", "flights", "airline", "air ticket", "tickets", "air tickets", "plane"],
  },
  {
    name: "Hotel Booking Worldwide",
    path: "/hotels",
    icon: faHotel,
    category: "Hotels",
    keywords: ["hotel", "hotels", "stay", "resort", "rooms", "room", "accommodation"],
  },
  {
    name: "International Tour Packages",
    path: "/packages",
    icon: faSuitcase,
    category: "Packages",
    keywords: ["international", "world", "world tour", "europe", "usa", "australia", "asia", "thailand", "dubai", "bali", "singapore"],
  },
  {
    name: "Domestic Tour Packages (India)",
    path: "/#india-destinations",
    icon: faLocationDot,
    category: "India Tours",
    keywords: ["domestic", "india", "india tour", "kashmir", "himachal", "kerala", "rajasthan", "goa", "manali", "shimla"],
  },
  {
    name: "Fixed Departure Tours",
    path: "/#fixed-departures",
    icon: faCompass,
    category: "Group Tours",
    keywords: ["fixed", "departure", "fixed departure", "departures", "group tour", "group"],
  },
  {
    name: "Visa Assistance Services",
    path: "/visa",
    icon: faPassport,
    category: "Visa",
    keywords: ["visa", "visas", "tourist visa", "visitor visa", "passport", "consultation"],
  },
];

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeCategory, setActiveCategory] = useState("north");
  const [activeInternational, setActiveInternational] = useState("europe");
  const [hoveredCountry, setHoveredCountry] = useState(null); // ← NEW
  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchBoxRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // ── Compact header on scroll (premium sticky behaviour) ──
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const destinations = [
    { name: "USA", path: "/usa" },
    { name: "Australia", path: "/australia" },
    { name: "Canada", path: "/canada" },
    { name: "Europe", path: "/europe" },
    { name: "Manali", path: "/manali" },
    { name: "Shimla", path: "/shimla" },
    { name: "Spiti Valley", path: "/spiti" },
    { name: "Srinagar", path: "/srinagar" },
    { name: "Gulmarg", path: "/gulmarg-destination" },
    { name: "Pahalgam", path: "/pahalgam" },
    { name: "Munnar", path: "/munnar" },
    { name: "Alleppey", path: "/alleppey" },
    { name: "Kochi", path: "/kochi" },
    { name: "Ooty", path: "/ooty" },
    { name: "Chennai", path: "/chennai" },
    { name: "Gangtok", path: "/gangtok" },
    { name: "Guwahati", path: "/guwahati" },
    { name: "Jaipur", path: "/jaipur" },
    { name: "Udaipur", path: "/udaipur" },
    { name: "North Goa", path: "/northgoa" },
    { name: "South Goa", path: "/southgoa" },
    { name: "France", path: "/france" },
    { name: "Germany", path: "/germany-tour-1" },
    { name: "Italy", path: "/italy" },
    { name: "Switzerland", path: "/switzerland" },
    { name: "Hungary", path: "/hungary" },
    { name: "Poland", path: "/poland" },
    { name: "Thailand", path: "/thailand" },
    { name: "Singapore", path: "/singapore" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "Bali", path: "/bali" },
    { name: "Dubai", path: "/dubai" },
    { name: "Abu Dhabi", path: "/abu-dhabi" },
    { name: "New Zealand", path: "/new-zealand" },
    { name: "Rameswaram & Madurai", path: "/rameswaram-madurai" },
    { name: "Temple Tours", path: "/temple" },
    { name: "Bangalore", path: "/bangalore" },
    { name: "Mysore", path: "/mysore" },
    { name: "Coorg", path: "/coorg" },
    { name: "Hampi", path: "/hampi" },
    { name: "Tamil Nadu Tours", path: "/tamilnadu-tours" },
    { name: "Karnataka Tours", path: "/karnataka-tours" },
    { name: "Kerala Tours", path: "/kerala-tours" },
    { name: "Kenya", path: "/kenya" },
  ];

  const fixedDestinations = [
    { name: "USA", path: "/usa" },
    { name: "Australia", path: "/australia" },
    { name: "Canada", path: "/canada" },
    { name: "Europe", path: "/europe" },
  ];

  const indiaData = {
    north: [
      {
        title: "Himachal Pradesh",
        items: [
          { name: "Manali", path: "/manali" },
          { name: "Shimla", path: "/shimla" },
          { name: "Spiti Valley", path: "/spiti" },
        ],
      },
      {
        title: "Kashmir",
        items: [
          { name: "Srinagar", path: "/srinagar" },
          { name: "Gulmarg", path: "/gulmarg-destination" },
          { name: "Pahalgam", path: "/pahalgam" },
        ],
      },
    ],
    south: [
      {
        title: "Kerala",
        path: "/kerala-tours",
        items: [
          { name: "Munnar", path: "/munnar" },
          { name: "Alleppey", path: "/alleppey" },
          { name: "Kochi", path: "/kochi" },
        ],
      },
      {
        title: "Tamil Nadu",
        path: "/tamilnadu-tours",
        items: [
          { name: "Chennai", path: "/chennai" },
          { name: "Rameswaram & Madurai", path: "/rameswaram-madurai" },
          { name: "Temple Tours", path: "/temple" },
        ],
      },
      {
        title: "Karnataka",
        path: "/karnataka-tours",
        items: [
          { name: "Bangalore", path: "/bangalore" },
          { name: "Mysore", path: "/mysore" },
          { name: "Coorg", path: "/coorg" },
          { name: "Hampi", path: "/hampi" },
        ],
      },
    ],
    east: [
      {
        title: "Sikkim",
        items: [{ name: "Gangtok", path: "/gangtok" }],
      },
      {
        title: "Assam",
        items: [{ name: "Guwahati", path: "/guwahati" }],
      },
    ],
    west: [
      {
        title: "Rajasthan",
        items: [
          { name: "Jaipur", path: "/jaipur" },
          { name: "Udaipur", path: "/udaipur" },
        ],
      },
      {
        title: "Goa",
        items: [
          { name: "North Goa", path: "/northgoa" },
          { name: "South Goa", path: "/southgoa" },
        ],
      },
    ],
  };

  const internationalData = {
    europe: [
      {
        title: "Western Europe",
        items: [
          { name: "France", path: "/france" },
          { name: "Germany", path: "/germany-tour-1" },
          { name: "Italy", path: "/italy" },
          { name: "Switzerland", path: "/switzerland" },
        ],
      },
      {
        title: "Eastern Europe",
        items: [
          { name: "Hungary", path: "/hungary" },
          { name: "Poland", path: "/poland" },
        ],
      },
    ],
    asia: [
      {
        title: "Southeast Asia",
        items: [
          { name: "Thailand", path: "/thailand" },
          { name: "Singapore", path: "/singapore" },
          { name: "Malaysia", path: "/malaysia" },
          { name: "Bali", path: "/bali" },
          { name: "Vietnam", path: "/vietnam" },


        ],
      },
      {
        title: "Middle East",
        items: [
          { name: "Dubai", path: "/dubai" },
          { name: "Abu Dhabi", path: "/abu-dhabi" },
        ],
      },
    ],
    americas: [
      {
        title: "North America",
        items: [
          { name: "USA", path: "/usa" },
          { name: "Canada", path: "/canada" },
        ],
      },
    ],
    oceania: [
      {
        title: "Australia & NZ",
        items: [
          { name: "Australia", path: "/australia" },
          { name: "New Zealand", path: "/new-zealand" },
        ],
      },
    ],
    africa: [
      {
        title: "East Africa",
        items: [{ name: "Kenya", path: "/kenya" }],
      },
    ],
  };

  // ── Map image paths for India regions ──
  const indiaMaps = {
    north: "https://www.mapsofindia.com/maps/northeast/india-northeast-zone-map.jpg",
    south: "https://lh6.googleusercontent.com/proxy/uTAqgz5yUl19Z8KMDMGCLfFPoe2W0VVskJ9BblEJ1qpeRwkFm5mJW8eWkucSWOnL_1uj4tTRPdPO_vONSaL0Ofp3Vmx0py3Bxew-US16E8Cu67UAnjvYPniGlt7FYyZd8NBgQemCBQ",
    east:  "https://www.touristplacesinindia.com/images/maps-of-india/east-india-map.jpg",
    west:  "https://upload.wikimedia.org/wikipedia/commons/4/4b/Western_India.png?utm_source=en.wikivoyage.org&utm_campaign=index&utm_content=original",
  };

  // ── Map image paths for International regions (continent fallback) ──
  const internationalRegionMaps = {
    europe:   "https://cdn.britannica.com/67/367-050-CCA16287/Europe-political-boundaries-continent.jpg",
    asia:     "https://www.mappr.co/wp-content/uploads/2024/01/asia-map-cities.jpg",
    americas: "https://gisgeography.com/wp-content/uploads/2017/11/North-America-Map.jpg",
    oceania:  "https://upload.wikimedia.org/wikipedia/commons/f/f0/Map_of_Oceania.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    africa:   "https://upload.wikimedia.org/wikipedia/commons/e/eb/Africa-political-map.jpg",
  };

  // ── Per-country map images ──
  // Uses OpenStreetMap static tiles or free map image sources
  const countryMaps = {
    // Europe
    France:       "https://i.pinimg.com/736x/3b/ca/00/3bca0089196732724e8398150ef30ce0.jpg",
    Germany:      "https://www.infoplease.com/sites/default/files/i_infopls_com/images/mgermany.gif",
    Italy:        "https://cdn.britannica.com/60/1760-050-6FB97F5F/Italy.jpg",
    Switzerland:  "https://thumbs.dreamstime.com/z/switzerland-political-map-political-map-switzerland-capital-bern-national-borders-most-important-cities-rivers-lakes-103386279.jpg",
    Hungary:      "https://i.pinimg.com/564x/bd/ea/69/bdea698e0b0763eaeebf054747c6468d.jpg",
    Poland:       "https://cdn.britannica.com/53/3553-050-613FF3C2/Poland.jpg",

    // Southeast Asia
    Thailand:     "https://fareastravel.com/assets/cms/uploads/images/maps/thailand-947.png",
    Singapore:    "https://c8.alamy.com/comp/F8F8BN/singapore-island-political-map-with-capital-singapore-national-borders-F8F8BN.jpg",
    Malaysia:     "https://images.mapsofworld.com/malaysia/malaysia-map.gif",
    Bali:         "https://i.pinimg.com/736x/bf/6c/c3/bf6cc33b8d1caef839259bb46b201a41.jpg",

    // Middle East
    Dubai:        "https://i.pinimg.com/originals/3f/7a/47/3f7a4728b2fecbca19cecc3c939d6182.jpg?nii=t",
    "Abu Dhabi":  "https://c8.alamy.com/comp/2HP60YB/roads-vector-map-of-united-arab-emirates-uae-2HP60YB.jpg",

    // Americas
    USA:          "https://cdn.vectorstock.com/i/1000v/36/59/united-states-map-vector-1763659.jpg",
    Canada:       "https://c8.alamy.com/comp/2R44JB6/canada-administrative-divisions-colored-political-map-ten-provinces-and-three-territories-of-canada-with-borders-and-capitals-2R44JB6.jpg",

    // Oceania
    Australia:    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_mH2G7hlVd6Dz8AID5aqDqXemCgHYBeVqGQ&s",
    "New Zealand":"https://cdn.britannica.com/18/3018-050-9EB93A42/New-Zealand.jpg",

    // Africa
    Kenya:        "https://c8.alamy.com/comp/E5K8MG/kenya-political-map-with-capital-nairobi-national-borders-most-important-E5K8MG.jpg",

      
  };

  /**
   * Returns the best available background map for the international mega-menu:
   * - If the user is hovering a specific country, use that country's map.
   * - Otherwise fall back to the region-level map.
   */
  const getInternationalMapUrl = () => {
    if (hoveredCountry && countryMaps[hoveredCountry]) {
      return countryMaps[hoveredCountry];
    }
    return internationalRegionMaps[activeInternational];
  };

  // ── Click outside listener to close search dropdown ──
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getSearchResults = () => {
    const q = search.trim().toLowerCase();
    if (!q) {
      return [];
    }

    const matchedServices = searchServices.filter((item) =>
      item.name.toLowerCase().includes(q) ||
      item.keywords.some((kw) => kw.includes(q))
    );

    const matchedDestinations = destinations
      .filter((dest) => dest.name.toLowerCase().includes(q))
      .map((dest) => ({
        name: `${dest.name} Tour Packages`,
        path: dest.path,
        icon: faLocationDot,
        category: "Destination",
      }));

    const combined = [...matchedServices];
    matchedDestinations.forEach((dest) => {
      if (!combined.some((item) => item.path === dest.path)) {
        combined.push(dest);
      }
    });

    return combined.slice(0, 8);
  };

  const handleSelect = (path) => {
    setSearch("");
    setSearchOpen(false);
    if (path.startsWith("/#")) {
      const targetId = path.replace("/#", "");
      if (window.location.pathname === "/") {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      } else {
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 300);
        return;
      }
    }
    navigate(path);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
    setHoveredCountry(null); // reset on close
  };

  const toggleMobile = (key) => {
    setMobileExpanded(mobileExpanded === key ? null : key);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileExpanded(null);
  };

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      {/* ── MAIN HEADER ── */}
      <div className="main-header">
        <div className="logo">
          <Link to="/" aria-label="BNS Holidays — Home">
            <img src={logo} alt="BNS Holidays" />
          </Link>
        </div>

        {/* SEARCH BOX */}
        <div className="search-box" ref={searchBoxRef} style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Search flights, hotels, packages, visa..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSearchOpen(true);
            }}
            onFocus={() => {
              if (search.trim()) setSearchOpen(true);
            }}
            onKeyDown={(e) => {
              if (e.key === "Escape") setSearchOpen(false);
              if (e.key === "Enter" && search.trim()) {
                const results = getSearchResults();
                if (results.length > 0) {
                  handleSelect(results[0].path);
                }
              }
            }}
          />
          <button 
            type="button" 
            className="search-btn"
            onClick={() => {
              if (search.trim()) {
                const results = getSearchResults();
                if (results.length > 0) {
                  handleSelect(results[0].path);
                }
              } else {
                setSearchOpen((prev) => !prev);
              }
            }}
            aria-label="Search"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>

          {searchOpen && search.trim().length > 0 && (
            <div className="header-search-dropdown">
              <div className="header-search-list">
                {getSearchResults().length > 0 ? (
                  getSearchResults().map((item, index) => (
                    <div
                      key={index}
                      className="header-search-item"
                      onClick={() => handleSelect(item.path)}
                    >
                      <div className="header-search-icon">
                        <FontAwesomeIcon icon={item.icon || faLocationDot} />
                      </div>
                      <div className="header-search-info">
                        <span className="header-search-title">{item.name}</span>
                        {item.category && (
                          <span className="header-search-category">{item.category}</span>
                        )}
                      </div>
                      <span className="header-search-arrow">
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="header-search-empty">
                    <p>No results found for "{search}"</p>
                    <small>Try searching for "Dubai", "Flight", "Hotel", "Kerala", "Visa", etc.</small>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* CONTACT BUTTON */}
        <a href="tel:+917066620673" className="contact-btn">
          <span className="contact-shine" aria-hidden="true"></span>
          <span className="contact-icon-wrap">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
          </span>
          <div className="contact-text">
            <span className="contact-label">Contact Us</span>
            <span className="contact-number">+91 70666 20673</span>
          </div>
        </a>

        {/* HAMBURGER */}
        <button
          className={`hamburger ${menuOpen ? "is-active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
      </div>

      <div className="header-divider" />

      {/* ── DESKTOP NAVBAR ── */}
      <div className="top-navbar desktop-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/hotels">Hotel</Link>
          </li>
          <li>
            <Link to="/flights">Flight</Link>
          </li>

          {/* ── India Dropdown ── */}
          <li
            className="nav-item"
            onMouseEnter={() => setOpenDropdown("india")}
            onMouseLeave={closeDropdown}
          >
            <span className="nav-label">
              India
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`nav-chevron ${openDropdown === "india" ? "open" : ""}`}
              />
            </span>

            {openDropdown === "india" && (
              <div className="mega-menu">
                {/* LEFT: region tabs */}
                <div className="mega-left">
                  {["north", "south", "east", "west"].map((cat) => (
                    <p
                      key={cat}
                      className={activeCategory === cat ? "active" : ""}
                      onMouseEnter={() => setActiveCategory(cat)}
                    >
                      {cat.charAt(0).toUpperCase() + cat.slice(1)} India ›
                    </p>
                  ))}
                </div>

                {/* RIGHT: destinations + map background */}
                <div
                  className="mega-right"
                  style={{
                    backgroundImage: `url(${indiaMaps[activeCategory]})`,
                  }}
                >
                  {indiaData[activeCategory].map((section, i) => (
                    <div className="mega-column" key={i}>
                      <h4>
                        {section.path ? (
                          <Link to={section.path}>{section.title}</Link>
                        ) : (
                          section.title
                        )}
                      </h4>
                      {section.items.map((item, j) => (
                        <p key={j}>
                          {typeof item === "string" ? (
                            item
                          ) : (
                            <Link to={item.path}>{item.name}</Link>
                          )}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>

          {/* ── International Dropdown ── */}
          <li
            className="nav-item"
            onMouseEnter={() => setOpenDropdown("international")}
            onMouseLeave={() => {
              closeDropdown();
            }}
          >
            <span className="nav-label">
              International
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`nav-chevron ${openDropdown === "international" ? "open" : ""}`}
              />
            </span>

            {openDropdown === "international" && (
              <div className="mega-menu">
                {/* LEFT: region tabs */}
                <div className="mega-left">
                  {["europe", "asia", "americas", "oceania", "africa"].map(
                    (region) => (
                      <p
                        key={region}
                        className={activeInternational === region ? "active" : ""}
                        onMouseEnter={() => {
                          setActiveInternational(region);
                          setHoveredCountry(null); // reset country on region switch
                        }}
                      >
                        {region.charAt(0).toUpperCase() + region.slice(1)} ›
                      </p>
                    )
                  )}
                </div>

                {/* RIGHT: destinations + map background (country-aware) */}
                <div
                  className="mega-right"
                  style={{
                    backgroundImage: `url(${getInternationalMapUrl()})`,
                    transition: "background-image 0.3s ease",
                  }}
                >
                  {internationalData[activeInternational].map((section, i) => (
                    <div className="mega-column" key={i}>
                      <h4>{section.title}</h4>
                      {section.items.map((item, j) => (
                        <p key={j}>
                          {typeof item === "string" ? (
                            item
                          ) : (
                            <Link
                              to={item.path}
                              onMouseEnter={() => setHoveredCountry(item.name)}
                              onMouseLeave={() => setHoveredCountry(null)}
                            >
                              {item.name}
                            </Link>
                          )}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>

          {/* ── Fixed Departure Dropdown ── */}
          <li
            className="nav-item"
            onMouseEnter={() => setOpenDropdown("fixed")}
            onMouseLeave={closeDropdown}
          >
            <span className="nav-label">
              Fixed Departure
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`nav-chevron ${openDropdown === "fixed" ? "open" : ""}`}
              />
            </span>
            {openDropdown === "fixed" && (
              <div className="fixed-dropdown" >
                {fixedDestinations.map((dest, i) => (
                  <p key={i} style={{fontWeight: "bold"}}>
                    <Link to={dest.path}>{dest.name} ›</Link>
                  </p>
                ))}
              </div>
            )}
          </li>
          <li>
            <Link to="/packages">Packages</Link>
          </li>

          <li>
            <Link to="/villa">Villa</Link>
          </li>
          <li>
            <Link to="/visa">Visa</Link>
          </li>
        </ul>
      </div>

      {/* ── MOBILE MENU ── */}
      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/hotels" onClick={closeMenu}>Hotel</Link>
            </li>
            <li>
              <Link to="/flights" onClick={closeMenu}>Flight</Link>
            </li>

            {/* India Mobile */}
            <li className="mobile-nav-item">
              <div
                className="mobile-nav-title"
                onClick={() => toggleMobile("india")}
              >
                India{" "}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`chevron ${mobileExpanded === "india" ? "open" : ""}`}
                />
              </div>
              {mobileExpanded === "india" && (
                <div className="mobile-submenu">
                  {Object.entries(indiaData).map(([region, sections]) => (
                    <div key={region}>
                      <p className="mobile-region-title">
                        {region.charAt(0).toUpperCase() + region.slice(1)} India
                      </p>
                      {sections.map((section, i) => (
                        <div key={i}>
                          <p className="mobile-section-title">
                            {section.path ? (
                              <Link to={section.path} onClick={closeMenu}>
                                {section.title}
                              </Link>
                            ) : (
                              section.title
                            )}
                          </p>
                          {section.items.map((item, j) => (
                            <p key={j} className="mobile-item">
                              {typeof item === "string" ? (
                                item
                              ) : (
                                <Link to={item.path} onClick={closeMenu}>
                                  {item.name}
                                </Link>
                              )}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </li>

            {/* International Mobile */}
            <li className="mobile-nav-item">
              <div
                className="mobile-nav-title"
                onClick={() => toggleMobile("international")}
              >
                International{" "}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`chevron ${mobileExpanded === "international" ? "open" : ""}`}
                />
              </div>
              {mobileExpanded === "international" && (
                <div className="mobile-submenu">
                  {Object.entries(internationalData).map(([region, sections]) => (
                    <div key={region}>
                      <p className="mobile-region-title">
                        {region.charAt(0).toUpperCase() + region.slice(1)}
                      </p>
                      {sections.map((section, i) => (
                        <div key={i}>
                          <p className="mobile-section-title">{section.title}</p>
                          {section.items.map((item, j) => (
                            <p key={j} className="mobile-item">
                              {typeof item === "string" ? (
                                item
                              ) : (
                                <Link to={item.path} onClick={closeMenu}>
                                  {item.name}
                                </Link>
                              )}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </li>

            {/* Fixed Departure Mobile */}
            <li className="mobile-nav-item">
              <div
                className="mobile-nav-title"
                onClick={() => toggleMobile("fixed")}
              >
                Fixed Departure{" "}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`chevron ${mobileExpanded === "fixed" ? "open" : ""}`}
                />
              </div>
              {mobileExpanded === "fixed" && (
                <div className="mobile-submenu">
                  {fixedDestinations.map((dest, i) => (
                    <p key={i} className="mobile-item">
                      <Link to={dest.path} onClick={closeMenu}>
                        {dest.name}
                      </Link>
                    </p>
                  ))}
                </div>
              )}
            </li>

            <li>
              <Link to="/packages" onClick={closeMenu}>
                Packages
              </Link>
            </li>

            <li>
              <Link to="/villa" onClick={closeMenu}>
                Villa
              </Link>
            </li>
            <li>
              <Link to="/visa" onClick={closeMenu}>
                Visa
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
