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

  const destinations = [];

  const fixedDestinations = [
    { name: "USA", path: "/Pages/USA" },
    { name: "Australia", path: "/Pages/Australia" },
    { name: "Canada", path: "/Pages/Canada" },
    { name: "Europe", path: "/Pages/Europe" },
  ];

  const indiaData = {
    north: [
      { title: "Himachal Pradesh", items: ["Manali", "Shimla", "Spiti Valley"] },
      { title: "Kashmir", items: ["Srinagar", "Gulmarg", "Pahalgam"] }
    ],
    south: [
      { title: "Kerala", items: ["Munnar", "Alleppey", "Kochi"] },
      { title: "Tamil Nadu", items: ["Ooty", "Chennai"] }
    ],
    east: [
      { title: "Sikkim", items: ["Gangtok"] },
      { title: "Assam", items: ["Guwahati"] }
    ],
    west: [
      { title: "Rajasthan", items: ["Jaipur", "Udaipur"] },
      { title: "Goa", items: ["North Goa", "South Goa"] }
    ]
  };

  const internationalData = {
    europe: [
      { title: "Western Europe", items: ["France", "Germany", "Italy", "Switzerland"] },
      { title: "Eastern Europe", items: ["Hungary", "Poland", "Czech Republic"] }
    ],
    asia: [
      { title: "Southeast Asia", items: [{ name: "Thailand", path: "/Pages/Thailand" }, { name: "Singapore", path: "/Pages/Singapore" }, "Malaysia", "Bali"] },
      { title: "Middle East", items: ["Dubai", "Abu Dhabi"] }
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
    const filtered = destinations.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setResults(value ? filtered : []);
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

        <div className="search-box">
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
            <ul className="search-results">
              {results.map((item, index) => (
                <li key={index} onClick={() => handleSelect(item.path)}>
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* HAMBURGER — only visible on mobile */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
      </div>

      {/* ── DESKTOP NAVBAR ── */}
      <div className="top-navbar desktop-nav">
        <ul>
          <li><Link to="/">Home</Link></li>

          <li className="nav-item"
            onMouseEnter={() => setOpenDropdown("india")}
            onMouseLeave={closeDropdown}>
            India ▾
            {openDropdown === "india" && (
              <div className="mega-menu">
                <div className="mega-left">
                  {["north","south","east","west"].map(cat => (
                    <p key={cat}
                      className={activeCategory === cat ? "active" : ""}
                      onMouseEnter={() => setActiveCategory(cat)}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)} India ›
                    </p>
                  ))}
                </div>
                <div className="mega-right">
                  {indiaData[activeCategory].map((section, i) => (
                    <div className="mega-column" key={i}>
                      <h4>{section.title}</h4>
                      {section.items.map((item, j) => <p key={j}>{item}</p>)}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>

          <li className="nav-item"
            onMouseEnter={() => setOpenDropdown("international")}
            onMouseLeave={closeDropdown}>
            International ▾
            {openDropdown === "international" && (
              <div className="mega-menu">
                <div className="mega-left">
                  {["europe","asia","americas","oceania"].map(region => (
                    <p key={region}
                      className={activeInternational === region ? "active" : ""}
                      onMouseEnter={() => setActiveInternational(region)}>
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
                          {typeof item === "string" ? item : <Link to={item.path}>{item.name}</Link>}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>

          <li className="nav-item"
            onMouseEnter={() => setOpenDropdown("fixed")}
            onMouseLeave={closeDropdown}>
            Fixed Departure ▾
            {openDropdown === "fixed" && (
              <div className="fixed-dropdown">
                {fixedDestinations.map((dest, i) => (
                  <p key={i}><Link to={dest.path}>{dest.name} ›</Link></p>
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

            {/* India */}
            <li className="mobile-nav-item">
              <div className="mobile-nav-title" onClick={() => toggleMobile("india")}>
                India <FontAwesomeIcon icon={faChevronDown} className={`chevron ${mobileExpanded === "india" ? "open" : ""}`} />
              </div>
              {mobileExpanded === "india" && (
                <div className="mobile-submenu">
                  {Object.entries(indiaData).map(([region, sections]) => (
                    <div key={region}>
                      <p className="mobile-region-title">{region.charAt(0).toUpperCase() + region.slice(1)} India</p>
                      {sections.map((section, i) => (
                        <div key={i}>
                          <p className="mobile-section-title">{section.title}</p>
                          {section.items.map((item, j) => (
                            <p key={j} className="mobile-item">{typeof item === "string" ? item : item.name}</p>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </li>

            {/* International */}
            <li className="mobile-nav-item">
              <div className="mobile-nav-title" onClick={() => toggleMobile("international")}>
                International <FontAwesomeIcon icon={faChevronDown} className={`chevron ${mobileExpanded === "international" ? "open" : ""}`} />
              </div>
              {mobileExpanded === "international" && (
                <div className="mobile-submenu">
                  {Object.entries(internationalData).map(([region, sections]) => (
                    <div key={region}>
                      <p className="mobile-region-title">{region.charAt(0).toUpperCase() + region.slice(1)}</p>
                      {sections.map((section, i) => (
                        <div key={i}>
                          <p className="mobile-section-title">{section.title}</p>
                          {section.items.map((item, j) => (
                            <p key={j} className="mobile-item">
                              {typeof item === "string" ? item : <Link to={item.path} onClick={closeMenu}>{item.name}</Link>}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </li>

            {/* Fixed Departure */}
            <li className="mobile-nav-item">
              <div className="mobile-nav-title" onClick={() => toggleMobile("fixed")}>
                Fixed Departure <FontAwesomeIcon icon={faChevronDown} className={`chevron ${mobileExpanded === "fixed" ? "open" : ""}`} />
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