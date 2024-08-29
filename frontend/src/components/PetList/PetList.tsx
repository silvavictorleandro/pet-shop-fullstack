import { PetCard } from "../PetCard/PetCard";
import { useEffect } from "react";
import * as S from "./styles";
import { Pet, Pets } from "../../App";

export const PetList: React.FC<Pets> = ({ pets, setPets, getPets }) => {
  useEffect(() => {
    getPets();
  }, []);

  return (
    <S.Main>
      <S.Container>
        {pets.map((pet: Pet) => (
          <PetCard key={pet.id} pets={pets} pet={pet} setPets={setPets} />
        ))}
      </S.Container>
    </S.Main>
  );
};
