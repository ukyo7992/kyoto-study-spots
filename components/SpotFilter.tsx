"use client";

import { useState } from "react";
import { spots } from "./SpotList";
import { SpotCard } from "./SpotCard";

export function ShowFilterAnswer() {
  const [wifiOnly, setWifiOnly] = useState(false);
  const [powerOnly, setPowerOnly] = useState(false);

  const filteredSpots = spots.filter((spot) => {
    const matchesWifi = !wifiOnly || spot.wifi;
    const matchesPower = !powerOnly || spot.power;

    return matchesWifi && matchesPower;
  });


  return (
    <>
      <button onClick={() => setWifiOnly(!wifiOnly)}>
        {wifiOnly ? "すべて表示" : "Wi-Fiありのみ"}
      </button>

      <button onClick={() => setPowerOnly(!powerOnly)}>
        {powerOnly ? "すべて表示" : "充電ありのみ"}
      </button>

      <section>
        {filteredSpots.map((spot) => (
          <SpotCard
            key={spot.id}
            name={spot.name}
            area={spot.area}
            wifi={spot.wifi}
            power={spot.power}
            quiet={spot.quiet}
            openUntil={spot.openUntil}
          />
        ))}
      </section>
    </>
  );
}