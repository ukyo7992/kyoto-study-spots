import type { Spot } from "../types/Spot";
import SpotCard from "./SpotCard";

type SpotListProps = {
  spots: Spot[];
};

export default function SpotList({
  spots,
}: SpotListProps) {
  if (spots.length === 0) {
    return <p>該当するスポットがありません。</p>;
  }

  return (
    <div>
      {spots.map((spot) => (
        <SpotCard
          key={spot.id}
          spot={spot}
        />
      ))}
    </div>
  );
}