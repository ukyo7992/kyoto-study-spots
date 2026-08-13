export type Area = "京都" | "烏丸" | "河原町" | "出町柳";
export type Crowdness = "quiet" | "moderate" | "crowded"
export type NoiseLevel = "quiet" | "normal" | "loud";

export type Spot = {
    id:number;
    name: string;
    area: Area;
    wifi: boolean;
    power: boolean;
    noiseLevel: NoiseLevel;
    openingTime: string | null;
    closingTime: string | null;
    description?: string;
};

export type SearchConditions = {
    area?:Area;
    wifi?:boolean;
    power?:boolean;
    noiseLevel?:NoiseLevel;
}