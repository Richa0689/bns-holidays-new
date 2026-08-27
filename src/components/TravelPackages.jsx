import { useEffect, useRef } from "react";

const WIDGET_SRC = "https://api.travelcrm.net/widget.js"; // confirm this matches where widget.js is actually served

export default function TravelPackages({ agencySlug }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = WIDGET_SRC;
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return <div ref={containerRef} className="tc-packages" data-agency={agencySlug} />;
}