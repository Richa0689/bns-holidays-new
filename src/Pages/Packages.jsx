import TravelPackages from "../components/TravelPackages";

export default function Packages() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 20px" }}>
      <h1>Our Travel Packages</h1>
      <TravelPackages agencySlug="bns-holidays" />
    </div>
  );
}
