import { spot } from "../data/spots";

export default function Home(){
  return (
    <main>

      <h1>  Kyoto Study Spots</h1>
      
      {
        spot.map((spot)=>(
          <div key={spot.id}>
            <h2>{spot.name}</h2>
            <p>{spot.area}</p>
          </div>
        ))
      }
    </main>
  );
}
