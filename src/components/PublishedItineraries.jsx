import { useEffect } from "react";

function PublishedItineraries() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://web-production-8f7b4.up.railway.app/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <section style={{ padding: "40px 20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Our Latest Itineraries</h2>
      <div className="tc-packages" data-agency="pr-travels123"></div>
    </section>
  );
}

export default PublishedItineraries;