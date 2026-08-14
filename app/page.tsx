import { spots } from "../components/SpotList";
import {Header} from "../components/Header";
import { SpotCard} from "@/components/SpotCard";



export default function Home(){
  return (
    <main>
      <Header />
      {spots.map((spot)=>(
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

    </main>
  );
}
