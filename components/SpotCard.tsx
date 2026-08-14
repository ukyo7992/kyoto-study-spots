//A card of cafe
export type Area = "京都" | "烏丸" | "河原町" | "出町柳";
export type Quietness = "quiet" | "moderate" | "loud";

export type SpotCardProps = {
    name:string,
    area:Area,
    wifi: boolean,
    power: boolean,
    quiet: Quietness,
    openUntil: string;
}

export type Spot = SpotCardProps & {
    id:number;
};

export function SpotCard(spot:SpotCardProps){
    return (
        <article className="spot-card">      
            <h2>{spot.name}</h2>
            <p>{spot.area}</p>
            <p>{spot.wifi?"wifiあり":"wifiなし"}</p>
            <p>{spot.power?"充電スポットあり":"充電スポットなし"}</p>
            <p>{spot.quiet}</p>
            <p>{spot.openUntil}</p>
        </article>
    );
}