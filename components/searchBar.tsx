"use client";

import { spots } from "@/components/SpotList";
import { useState } from "react";
import { SpotCard } from "@/components/SpotCard";

export function Searchbar() {

    const [query, setQuery] = useState("");

    const filteredSpots = spots.filter((spot) => (spot.name.toLowerCase().includes(query.toLowerCase())));

    return (
        <>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

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