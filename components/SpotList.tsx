import { Spot } from "./SpotCard";


export const spots: Spot[] = [
  {
    id:1,
    name: "京都府立図書館",
    area: "京都",
    wifi: true,
    power: false,
    quiet: "moderate",
    openUntil:"22:00"
  },
  {
    id:2,
    name: "Study Spot Karasuma",
    area: "烏丸",
    wifi:false,
    power: false,
    quiet: "loud",
    openUntil:"00:00"
  },
  {
    id:3,
    name: "Cafe Kawaramachi",
    area: "河原町",
    wifi:true,
    power: true,
    quiet: "quiet",
    openUntil:"18:00"
  },
];