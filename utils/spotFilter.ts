import type {Spot,Area,SearchConditions} from "../types/spot.ts";

export function getSpotsByArea(spots: Spot[],area:Area): Spot[]{
    return spots.filter((spot)=> spot.area === area);
} 

export function filterSpots(
  spots: Spot[],
  conditions: SearchConditions
): Spot[] {
  return spots.filter((spot) => {
    if (
      conditions.area !== undefined &&
      spot.area !== conditions.area
    ) {
      return false;
    }

    if (
      conditions.wifi !== undefined &&
      spot.wifi !== conditions.wifi
    ) {
      return false;
    }

    if (
      conditions.power !== undefined &&
      spot.power !== conditions.power
    ) {
      return false;
    }

    if (
      conditions.noiseLevel !== undefined &&
      spot.noiseLevel !== conditions.noiseLevel
    ) {
      return false;
    }

    return true;
  });
}   