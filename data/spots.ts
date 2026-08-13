import type { Spot } from "../types/spot.ts";

export const spot: Spot[] = [
    {
        id: 1,
        name: "Karasuma Study Cafe",
        area: "烏丸",
        wifi: true,
        power: true,
        noiseLevel: "quiet",
        openingTime: "09:00",
        closingTime: "21:00",
    },
    {
        id: 2,
        name: "Kawaramachi Coffee",
        area: "河原町",
        wifi: true,
        power: false,
        noiseLevel: "normal",
        openingTime: "08:00",
        closingTime: "22:00",
    },
    {
        id: 3,
        name: "Gion Cafe",
        area: "河原町",
        wifi: true,
        power: false,
        noiseLevel: "loud",
        openingTime: "12:00",
        closingTime: "18:00",
    },
]