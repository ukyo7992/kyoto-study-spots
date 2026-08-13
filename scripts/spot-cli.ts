import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import { spot } from "../data/spots";
import { filterSpots } from "../utils/spotFilter";
import type { Area, SearchConditions } from "../types/spot";

async function main() {
  const rl = createInterface({
    input,
    output,
  });

  const answer = await rl.question(
    "エリアを入力してください（烏丸 / 河原町 / 京都駅 / 出町柳）: "
  );

  const wifiAnswer = await rl.question(
    "Do you need Wi-Fi? (y/n): "
  );

  const powerAnswer = await rl.question(
    "Do you need power outlets? (y/n): "
  );

  const quietAnswer = await rl.question(
    "Do you need a quiet place? (y/n): "
  );

  // 入力された文字列をプログラムで使える形に変換
  const area = answer as Area;
  const wifiRequired = wifiAnswer === "y";
  const powerRequired = powerAnswer === "y";
  const quietRequired = quietAnswer === "y";

  // 検索条件を1つのオブジェクトにまとめる
  const conditions: SearchConditions = {
    area,
    wifi: wifiRequired ? true : undefined,
    power: powerRequired ? true : undefined,
    noiseLevel: quietRequired ? "quiet" : undefined,
  };

  // 全条件で一度に検索
  const results = filterSpots(spot, conditions);

  console.log("\n検索結果");

  if (results.length === 0) {
    console.log("条件に一致するスポットがありませんでした。");
  } else {
    results.forEach((spot) => {
      console.log(spot.name);
    });
  }

  rl.close();
}

main();