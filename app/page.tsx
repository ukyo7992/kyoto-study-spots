type Area =  |"烏丸"|"河原町"| "京都駅"| "出町柳";

type Crowdness = "quiet" | "moderate" | "crowded";

type NoiseLevel =
  | "quiet"
  | "normal"
  | "loud";

type Spot = {
  id:number;
  name: string;
  area: Area;
  wifi: boolean;
  power: boolean;
  noiseLevel: NoiseLevel;

  openingTime: string | null;
  closingTime: string | null;

  description?: string;
}


const spots : Spot[]=[
  {
     id: 1,
    name: "Sample Cafe",
    area: "烏丸",
    wifi: true,
    power: true,
    noiseLevel: "normal",
    openingTime: "09:00",
    closingTime: "21:00",
  },
  {
    id:2,
    name: "Sample Cafe2",
    area: "河原町",
    wifi: true,
    power: true,
    noiseLevel: "normal",
    openingTime: "09:00",
    closingTime: "21:00",
  },
];

function getWifiArea(spot:Spot[]):Spot[]{
  return spot.filter((spot)=>spot.wifi);
}

function getSpotByArea(spot:Spot[] , area:Area):Spot[]{
  return spot.filter((spot)=>spot.area==area);
}

function getQuietStudySpots(spot:Spot[]):Spot[]{
  return spot.filter((spot)=> spot.wifi && spot.power && spot.noiseLevel=="quiet");
}