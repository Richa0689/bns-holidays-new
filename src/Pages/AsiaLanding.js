import React from "react";
import { Link } from "react-router-dom";
import "./Pages.css";

const destinations = [
  { name: "Thailand", path: "/destinations/thailand" },
  { name: "Singapore", path: "/destinations/singapore" },
  { name: "Malaysia", path: "/destinations/malaysia" },
  { name: "Bali", path: "/destinations/bali" },
  { name: "Vietnam", path: "/destinations/vietnam" },
];

const AsiaLanding = () => (
  <main className="tour-container">
    <h1>Asia Tour Packages</h1>
    <p>Explore holidays across Asia with BNS Holidays.</p>
    <div className="tour-card">
      {destinations.map((destination) => (
        <h2 key={destination.path}>
          <Link to={destination.path} className="title-link">
            {destination.name} Tour Packages
          </Link>
        </h2>
      ))}
    </div>
  </main>
);

export default AsiaLanding;
