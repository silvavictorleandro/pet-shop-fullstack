import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import { PetList } from "./components/PetList/PetList";
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
}

function App() {
  const [pets, setPets] = useState<Pet[]>([]);

  return (
    <main>
      <Header />
      <Menu pets={pets} setPets={setPets} />
      <PetList pets={pets} setPets={setPets} />
      <GlobalStyles />
    </main>
  );
}

export default App;
