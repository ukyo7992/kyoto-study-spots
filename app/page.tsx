import {Header} from "../components/Header";
import { ShowFilterAnswer } from "@/components/SpotFilter";
import { Searchbar } from "../components/searchBar";
import { SearchByArea } from "@/components/SwarchByArea";

export default function Home(){

  return (
    <main>
      <Header />
      <Searchbar />
      <SearchByArea />
      <ShowFilterAnswer />
    
    </main>
  );
}
