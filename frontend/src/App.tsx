import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import { PetList } from "./components/PetList/PetList";
import { api } from "../src/service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  handleDelete?: any;
}

function App() {
  const [pets, setPets] = useState<Pet[]>([]);

  async function getPets() {
    const response = await api.get("/");
    setPets(response.data);
  }

  async function handleDelete(id: string) {
    try {
      await api.delete("/delete", {
        params: {
          id: id,
        },
      });

      const allPets = pets.filter((pet) => pet.id !== id);
      setPets(allPets);
      toast.error("Pet deletado com sucesso!");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <main>
      <Header />
      <Menu pets={pets} setPets={setPets} getPets={getPets} />
      <PetList
        pets={pets}
        setPets={setPets}
        getPets={getPets}
        handleDelete={handleDelete}
      />
      <ToastContainer autoClose={5000} position="top-right" />
      <GlobalStyles />
    </main>
  );
}

export default App;
