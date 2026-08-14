"use client";

import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SpotList from "./SpotList";
import type { Spot } from "../types/Spot";

export default function SpotExplorer() {
  const [spots, setSpots] = useState<Spot[]>([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSpots() {
      try {
        setLoading(true);

        const response = await fetch("/spots.json");

        if (!response.ok) {
          throw new Error("スポット情報の取得に失敗しました");
        }

        const data: Spot[] = await response.json();

        setSpots(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("予期しないエラーが発生しました");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchSpots();
  }, []);

  const filteredSpots = spots.filter((spot) =>
    spot.name.toLowerCase().includes(searchText.toLowerCase())
  );

  if (loading) {
    return <p>読み込み中...</p>;
  }

  if (error) {
    return <p>エラー: {error}</p>;
  }

  return (
    <section>
      <SearchBar
        value={searchText}
        onChange={setSearchText}
      />

      <SpotList spots={filteredSpots} />
    </section>
  );
}