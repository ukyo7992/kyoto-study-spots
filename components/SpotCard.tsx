import type { Spot } from "../types/Spot";

type SpotCardProps = {
  spot: Spot;
};

export default function SpotCard({ spot }: SpotCardProps) {
  return (
    <div className="spot-card">
      <article>
        <h2>{spot.name}</h2>

        <p>エリア: {spot.area}</p>

        <p>
          Wi-Fi:
          {spot.wifi ? "あり" : "なし"}
        </p>

        <p>
          電源:
          {spot.power ? "あり" : "なし"}
        </p>
      </article>
    </div>
  );
}