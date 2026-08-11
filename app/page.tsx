const spots = [
  {
    id: 1,
    name: "study spot A",
    area: "Kyoto Station",
    wifi: true,
    power: true,
  },
  {
    id: 2,
    name: "study spot B",
    area: "Gion",
    wifi: false,
    power: true,
  },
  {
    id: 3,
    name: "study spot C",
    area: "Higashiyama",
    wifi: true,
    power: false,
  },
];

export default function Home() {
  return (
    <main>
      <h1>Kyoto Study Spots</h1>

      {spots.map((spot) => (
        <div key={spot.id}>
          <h2>{spot.name}</h2>
          <p>Area: {spot.area}</p>
          <p>WiFi: {spot.wifi ? "Available" : "Not Available"}</p>
          <p>Power: {spot.power ? "Available" : "Not Available"}</p>
        </div>
      ))}
    </main>
  );
}