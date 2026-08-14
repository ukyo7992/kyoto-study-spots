"use client";

import { useState } from "react";
import { spots } from "./SpotList";
import { SpotCard } from "./SpotCard";

export function SearchByArea() {
  const [area, setArea] = useState("all");

  const filteredSpots =
    area === "all"
      ? spots
      : spots.filter((spot) => spot.area === area);

  return (
    <>
      <select
        value={area}
        onChange={(e) => setArea(e.target.value)}
      >
        <option value="all">すべて</option>
        <option value="京都">京都</option>
        <option value="烏丸">烏丸</option>
        <option value="河原町">河原町</option>
        <option value="出町柳">出町柳</option>
      </select>

      <section>
        {filteredSpots.map((spot) => (
          <p key={spot.id}>
            {spot.name} - {spot.area}
          </p>
        ))}
      </section>
    </>
  );
}