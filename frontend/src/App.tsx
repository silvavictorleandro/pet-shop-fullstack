import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import { PetList } from "./components/PetList/PetList";
import { api } from "../src/service/api";
import { GlobalStyles } from "./styles/GlobalStyles";

export interface Pet {
  id: string;
  name: string;
  type: "Cachorro" | "Gato";
  tutorName: string;
  breed: string;
  dateOfBirth: string;
}

export interface Pets {
  pets: Pet[];
  setPets: any;
  getPets: any;
}

function App() {
  const [pets, setPets] = useState<Pet[]>([]);

  async function getPets() {
    const response = await api.get("/");
    setPets(response.data);
  }

  return (
    <main>
      <Header />
      <Menu pets={pets} setPets={setPets} getPets={getPets} />
      <PetList pets={pets} setPets={setPets} getPets={getPets} />
      <GlobalStyles />
    </main>
  );
}

export default App;
