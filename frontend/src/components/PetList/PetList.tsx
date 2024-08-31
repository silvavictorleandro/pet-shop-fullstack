import { PetCard } from "../PetCard/PetCard";
import { useEffect } from "react";
import * as S from "./styles";
import { Pets } from "../../App";
import { Pet } from "../../interfaces/interfaces";

export const PetList: React.FC<Pets> = ({ pets, setPets, getPets }) => {
  useEffect(() => {
    getPets();
  }, []);

  return (
    <S.Main>
      <S.Container>
        {pets.map((pet: Pet) => (
          <PetCard
            key={pet.id}
            pets={pets}
            pet={pet}
            setPets={setPets}
            getPets={getPets}
          />
        ))}
      </S.Container>
    </S.Main>
  );
};
