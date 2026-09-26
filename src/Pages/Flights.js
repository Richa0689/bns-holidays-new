import { useNavigate } from "react-router-dom";
import FlightSearchForm from "../components/FlightSearchForm";
import "../components/travel-ui.css";
import "./Flights.css";

export default function Flights() {
  const navigate = useNavigate();

  const handleSearch = (params) => {
    const query = new URLSearchParams(params).toString();
    navigate(`/flights/results?${query}`);
  };

  return (
    <main className="flight-page">
      <section className="flight-hero">
        <video className="flight-hero-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
          <source src="/flight-sky-background.mp4" type="video/mp4" />
        </video>
        <div className="flight-hero-shade" aria-hidden="true" />
        <div className="flight-hero-inner">
          <div className="flight-hero-copy">
            <span className="flight-hero-eyebrow"><i /> FLIGHT SEARCH</span>
            <h1>Make your next<br /><strong>journey take off.</strong></h1>
            <p>Find a flight that fits your plans. Choose your airports, date and travellers to get started.</p>
          </div>
          <FlightSearchForm onSearch={handleSearch} />
        </div>
        <div className="flight-hero-route" aria-hidden="true"><span /><b>✈</b><span /></div>
      </section>
    </main>
  );
}
