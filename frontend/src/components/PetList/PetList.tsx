import { PetCard } from "../PetCard/PetCard";
import { useEffect, useState } from "react";
import * as S from "./styles";
import { api } from "../../service/api";

interface Pet {
  id: number;
  name: string;
  type: "Cachorro" | "Gato";
  tutorName: string;
  breed: string;
  dateOfBirth: number;
}

export const PetList: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    getPets();
  }, []);

  async function getPets() {
    const response = await api.get("/pets");
    setPets(response.data);
  }

  return (
    <S.Main>
      <S.Container>
        {pets.map((pet) => (
          <PetCard key={pet.id} pets={pet} />
        ))}
      </S.Container>
    </S.Main>
  );
};
