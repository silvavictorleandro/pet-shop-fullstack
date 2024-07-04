import { PetCard } from "../PetCard/PetCard";
import { useEffect } from "react";
import * as S from "./styles";
import { api } from "../../service/api";
import { Pet, Pets } from "../../App";

export const PetList: React.FC<Pets> = ({ pets, setPets }) => {
  useEffect(() => {
    getPets();
  }, []);

  async function getPets() {
    const response = await api.get("/");
    setPets(response.data);
  }

  return (
    <S.Main>
      <S.Container>
        {pets.map((pet: Pet) => (
          <PetCard key={pet.id} pets={pet} />
        ))}
      </S.Container>
    </S.Main>
  );
};
