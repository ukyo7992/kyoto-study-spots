"use client";

import { Header } from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import SpotList from "@/components/SpotList";
import Filter from "@/components/Filter";
import { useState } from "react";

const spots = [
  {
    id: 1,
    name: "Kyoto Library",
    area: "岡崎",
    wifi: true,
    power: true,
    quiet: true,
  },
  {
    id: 2,
    name: "Kawaramachi Cafe",
    area: "河原町",
    wifi: true,
    power: false,
    quiet: false,
  },
  {
    id: 3,
    name: "Karasuma Study Space",
    area: "烏丸",
    wifi: false,
    power: true,
    quiet: true,
  },
];


export default function Home() {
  const [keyword,setKeyword]=useState("");
  const [wifiOnly,setWifiOnly]=useState(false);

  const filteredSpots=spots.filter((spot)=>{
    const matchesKeyword =
      spot.name.includes(keyword) ||
      spot.area.includes(keyword);

    const matchesWifi =
      !wifiOnly || spot.wifi;

    return matchesKeyword && matchesWifi;
  });

  return (
    <main>
      <Header />
      <SearchBar
        keyword={keyword}
        onKeywordChange={setKeyword}
      />

      <Filter
        wifiOnly={wifiOnly}
        onWifiOnly={setWifiOnly}
      />

      <SpotList spots={filteredSpots} />
    </main>
  );
}