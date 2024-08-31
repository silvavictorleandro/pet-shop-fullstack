import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import { PetList } from "./components/PetList/PetList";
import { api } from "../src/service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Pet } from "./interfaces/interfaces";

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
      <ToastContainer autoClose={5000} position="top-right" />
      <GlobalStyles />
    </main>
  );
}

export default App;
