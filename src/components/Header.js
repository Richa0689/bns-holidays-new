import React, { useState } from "react";
import "./Header.css";
import logo from "./images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faXmark, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeCategory, setActiveCategory] = useState("north");
  const [activeInternational, setActiveInternational] = useState("europe");
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const navigate = useNavigate();

  const destinations = [
    { name: "USA", path: "/Pages/USA" },
    { name: "Australia", path: "/Pages/Australia" },
    { name: "Canada", path: "/Pages/Canada" },
    { name: "Europe", path: "/Pages/Europe" },
    { name: "Manali", path: "/Pages/manali" },
    { name: "Shimla", path: "/Pages/shimla" },
    { name: "Spiti Valley", path: "/Pages/spiti" },
    { name: "Srinagar", path: "/Pages/srinagar" },
    { name: "Gulmarg", path: "/Pages/gulmarg" },
    { name: "Pahalgam", path: "/Pages/pahalgam" },
    { name: "Munnar", path: "/Pages/munnar" },
    { name: "Alleppey", path: "/Pages/alleppey" },
    { name: "Kochi", path: "/Pages/kochi" },
    { name: "Ooty", path: "/Pages/ooty" },
    { name: "Chennai", path: "/Pages/chennai" },
    { name: "Gangtok", path: "/Pages/gangtok" },
    { name: "Guwahati", path: "/Pages/guwahati" },
    { name: "Jaipur", path: "/Pages/jaipur" },
    { name: "Udaipur", path: "/Pages/udaipur" },
    { name: "North Goa", path: "/Pages/northgoa" },
    { name: "South Goa", path: "/Pages/southgoa" },
    { name: "France", path: "/Pages/france" },
    { name: "Germany", path: "/Pages/germany" },
    { name: "Italy", path: "/Pages/italy" },
    { name: "Switzerland", path: "/Pages/switzerland" },
    { name: "Hungary", path: "/Pages/Hungary" },
    { name: "Poland", path: "/pages/poland" },
    { name: "Thailand", path: "/Pages/Thailand" },
    { name: "Singapore", path: "/Pages/Singapore" },
    { name: "Malaysia", path: "/Pages/Malaysia" },
    { name: "Bali", path: "/Pages/Bali" },
    { name: "Dubai", path: "/Pages/Dubai" },
    { name: "Abu Dhabi", path: "/Pages/abu-dhabi" },
    { name: "New Zealand", path: "/Pages/NewZealand" },
  ];

  const fixedDestinations = [
    { name: "USA", path: "/Pages/USA" },
    { name: "Australia", path: "/Pages/Australia" },
    { name: "Canada", path: "/Pages/Canada" },
    { name: "Europe", path: "/Pages/Europe" },
  ];

  const indiaData = {
    north: [
      { title: "Himachal Pradesh", items: [{ name: "Manali", path: "/Pages/manali" }, { name: "Shimla", path: "/Pages/shimla" }, { name: "Spiti Valley", path: "/Pages/spiti" }] },
      { title: "Kashmir", items: [{ name: "Srinagar", path: "/Pages/srinagar" }, { name: "Gulmarg", path: "/Pages/gulmarg" }, { name: "Pahalgam", path: "/Pages/pahalgam" }] }
    ],
    south: [
      { title: "Kerala", items: [{ name: "Munnar", path: "/Pages/munnar" }, { name: "Alleppey", path: "/Pages/alleppey" }, { name: "Kochi", path: "/Pages/kochi" }] },
      { title: "Tamil Nadu", items: [{ name: "Ooty", path: "/Pages/ooty" }, { name: "Chennai", path: "/Pages/chennai" }] }
    ],
    east: [
      { title: "Sikkim", items: [{ name: "Gangtok", path: "/Pages/gangtok" }] },
      { title: "Assam", items: [{ name: "Guwahati", path: "/Pages/guwahati" }] }
    ],
    west: [
      { title: "Rajasthan", items: [{ name: "Jaipur", path: "/Pages/jaipur" }, { name: "Udaipur", path: "/Pages/udaipur" }] },
      { title: "Goa", items: [{ name: "North Goa", path: "/Pages/northgoa" }, { name: "South Goa", path: "/Pages/southgoa" }] }
    ]
  };

  const internationalData = {
    europe: [
      { title: "Western Europe", items: [{ name: "France", path: "/Pages/france" }, { name: "Germany", path: "/Pages/germany" }, { name: "Italy", path: "/Pages/italy" }, { name: "Switzerland", path: "/Pages/switzerland" }] },
      { title: "Eastern Europe", items: [{ name: "Hungary", path: "/Pages/Hungary" }, { name: "Poland", path: "/pages/poland" }] }
    ],
    asia: [
      { title: "Southeast Asia", items: [{ name: "Thailand", path: "/Pages/Thailand" }, { name: "Singapore", path: "/Pages/Singapore" }, { name: "Malaysia", path: "/Pages/Malaysia" }, { name: "Bali", path: "/Pages/Bali" }] },
      { title: "Middle East", items: [{ name: "Dubai", path: "/Pages/Dubai" }, { name: "Abu Dhabi", path: "/Pages/abu-dhabi" }] }
    ],
    americas: [
      { title: "North America", items: [{ name: "USA", path: "/Pages/USA" }, { name: "Canada", path: "/Pages/Canada" }] }
    ],
    oceania: [
      { title: "Australia & NZ", items: [{ name: "Australia", path: "/Pages/Australia" }, { name: "New Zealand", path: "/Pages/NewZealand" }] }
    ]
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.trim() === "") {
      setResults([]);
      return;
    }
    const filtered = destinations.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered);
  };

  const handleSelect = (path) => {
    navigate(path);
    setSearch("");
    setResults([]);
  };

  const closeDropdown = () => setOpenDropdown(null);

  const toggleMobile = (key) => {
    setMobileExpanded(mobileExpanded === key ? null : key);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileExpanded(null);
  };

  return (
    <header>
      {/* ── MAIN HEADER ── */}
      <div className="main-header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* SEARCH BOX */}
        <div className="search-box" style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Search destinations..."
            value={search}
            onChange={handleSearch}
          />
          <button className="search-btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          {results.length > 0 && (
            <ul
              className="search-results"
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                borderRadius: "4px",
                listStyle: "none",
                padding: "0",
                margin: "4px 0 0 0",
                zIndex: 9999,
                maxHeight: "250px",
                overflowY: "auto",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              {results.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(item.path)}
                  style={{
                    padding: "10px 14px",
                    cursor: "pointer",
                    borderBottom: "1px solid #f0f0f0",
                    color: "#333",
                    fontSize: "14px",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f5f5f5")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* HAMBURGER */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
      </div>

      {/* ── DESKTOP NAVBAR ── */}
      <div className="top-navbar desktop-nav">
        <ul>
          <li><Link to="/">Home</Link></li>

          {/* India Dropdown */}
          <li
            className="nav-item"
            onMouseEnter={() => setOpenDropdown("india")}
            onMouseLeave={closeDropdown}
          >
            India ▾
            {openDropdown === "india" && (
              <div className="mega-menu">
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
                <div className="mega-right">
                  {indiaData[activeCategory].map((section, i) => (
                    <div className="mega-column" key={i}>
                      <h4>{section.title}</h4>
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

          {/* International Dropdown */}
          <li
            className="nav-item"
            onMouseEnter={() => setOpenDropdown("international")}
            onMouseLeave={closeDropdown}
          >
            International ▾
            {openDropdown === "international" && (
              <div className="mega-menu">
                <div className="mega-left">
                  {["europe", "asia", "americas", "oceania"].map((region) => (
                    <p
                      key={region}
                      className={activeInternational === region ? "active" : ""}
                      onMouseEnter={() => setActiveInternational(region)}
                    >
                      {region.charAt(0).toUpperCase() + region.slice(1)} ›
                    </p>
                  ))}
                </div>
                <div className="mega-right">
                  {internationalData[activeInternational].map((section, i) => (
                    <div className="mega-column" key={i}>
                      <h4>{section.title}</h4>
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

          {/* Fixed Departure Dropdown */}
          <li
            className="nav-item"
            onMouseEnter={() => setOpenDropdown("fixed")}
            onMouseLeave={closeDropdown}
          >
            Fixed Departure ▾
            {openDropdown === "fixed" && (
              <div className="fixed-dropdown">
                {fixedDestinations.map((dest, i) => (
                  <p key={i}>
                    <Link to={dest.path}>{dest.name} ›</Link>
                  </p>
                ))}
              </div>
            )}
          </li>

          <li><Link to="/villa">Villa</Link></li>
          <li><Link to="/visa">Visa</Link></li>
        </ul>
      </div>

      {/* ── MOBILE MENU ── */}
      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>

            {/* India Mobile */}
            <li className="mobile-nav-item">
              <div className="mobile-nav-title" onClick={() => toggleMobile("india")}>
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
                          <p className="mobile-section-title">{section.title}</p>
                          {section.items.map((item, j) => (
                            <p key={j} className="mobile-item">
                              {typeof item === "string" ? (
                                item
                              ) : (
                                <Link to={item.path} onClick={closeMenu}>{item.name}</Link>
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
              <div className="mobile-nav-title" onClick={() => toggleMobile("international")}>
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
                                <Link to={item.path} onClick={closeMenu}>{item.name}</Link>
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
              <div className="mobile-nav-title" onClick={() => toggleMobile("fixed")}>
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
                      <Link to={dest.path} onClick={closeMenu}>{dest.name}</Link>
                    </p>
                  ))}
                </div>
              )}
            </li>

            <li><Link to="/villa" onClick={closeMenu}>Villa</Link></li>
            <li><Link to="/visa" onClick={closeMenu}>Visa</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;