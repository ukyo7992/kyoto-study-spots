type Spot = {
  id: number;
  name: string;
  area: string;
  wifi: boolean;
  power: boolean;
  quietness: number; 
}

const spots : Spot[] = [
  {
    id: 1,
    name: "study spot A",
    area: "Kyoto Station",
    wifi: true,
    power: true,
    quietness: 3,
  },
  {
    id: 2,
    name: "study spot B",
    area: "Gion",
    wifi: false,
    power: true,
    quietness: 2,
  },
  {
    id: 3,
    name: "study spot C",
    area: "Higashiyama",
    wifi: true,
    power: false,
    quietness: 1,
  },
];

const recommendations = spots.filter((spot) => spot.wifi && spot.power);
const wifiSpots = spots.filter((spot)=> spot.wifi);
const fullyEquippedSpots = spots.filter((spot)=> spot.wifi && spot.power);
const quietSpots = spots.sort((a,b)=> a.quietness - b.quietness).filter((spot)=> spot.quietness >= 4);

export default function Home() {
  return (
    <main>
      <h1>Kyoto Study Spots</h1>

      <h2>すべての場所:</h2>

      {spots.map((spot) => (
        <div key={spot.id}>
          <h2>{spot.name}</h2>
          <p>{spot.area}</p>
          <p>Wi-Fi: {spot.wifi ? "あり" : "なし"}</p>
          <p>電源: {spot.power ? "あり" : "なし"}</p>
          <p>静かさ: {spot.quietness}</p>
        </div>
      ))}

      <h2>おすすめ場所:</h2>
      
      { recommendations.map((spots)=>(
        <div key={spots.id}>
          <h3>{spots.name}</h3>
          <p>{spots.area}</p>
            </div>
          ))}
    </main>
  );
}

async function getUsers() {
  try {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if(!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const users = await response.json();
  const name = users.filter((user:{name:string})=>user.name.length >= 5).map((user: {name:string})=> user.name);
  console.log(name);
} catch (error) {

  console.error("Error fetching users:", error);
}
}

getUsers();