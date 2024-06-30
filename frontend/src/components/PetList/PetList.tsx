import { PetCard } from "../PetCard/PetCard";
import * as S from "./styles";

export const PetList: React.FC = () => {
  const cat = "FaCat";
  const dog = "FaDog";

  return (
    <S.Main>
      <S.Container>
        <PetCard typePet={cat} />
        <PetCard typePet={dog} />
        <PetCard typePet={cat} />
        <PetCard typePet={cat} />
        <PetCard typePet={dog} />
        <PetCard typePet={cat} />
        <PetCard typePet={cat} />
        <PetCard typePet={dog} />
        <PetCard typePet={dog} />
        <PetCard typePet={dog} />
        <PetCard typePet={cat} />
        <PetCard typePet={cat} />
      </S.Container>
    </S.Main>
  );
};
