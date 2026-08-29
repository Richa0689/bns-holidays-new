import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PublishedItinerary() {
  const { slug } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://YOUR-CRM-API/api/public/itineraries/${slug}`)
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.error(err));
  }, [slug]);

  if (!data) return <div>Loading...</div>;

  return (
    <div style={{ padding: "30px" }}>
      <h1>{data.title}</h1>
      <p>{data.destination}</p>
      <p>{data.duration}</p>
      <p>{data.overview}</p>

      {data.days?.map((day, index) => (
        <div key={index}>
          <h3>Day {day.day}: {day.title}</h3>
          <p>{day.description}</p>
        </div>
      ))}
    </div>
  );
}
