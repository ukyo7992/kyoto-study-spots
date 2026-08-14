"use client"

import { useEffect, useState } from "react";
import type { Spot } from "../types/Spot.ts";

function App() {
  const [spots, setSpots] = useState<Spot[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    async function fetchSpots() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/spots.json");

        if (!response.ok) {
          throw new Error("Failed to fetch spots");
        }

        const data: Spot[] = await response.json();

        if (!ignore) {
          setSpots(data);
        }
      } catch (error) {
        if (!ignore) {
          setError("スポット情報の取得に失敗しました");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    fetchSpots();

    return () => {
      ignore = true;
    };
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main>
      <h1>Kyoto Study Spots</h1>

      {spots.map((spot) => (
        <div key={spot.id}>
          <h2>{spot.name}</h2>
          <p>エリア：{spot.area}</p>
          <p>Wi-Fi：{spot.wifi ? "あり" : "なし"}</p>
          <p>電源：{spot.power ? "あり" : "なし"}</p>
        </div>
      ))}
    </main>
  );
}

export default App;