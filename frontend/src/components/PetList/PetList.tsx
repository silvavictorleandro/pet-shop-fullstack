import { PetCard } from "../PetCard/PetCard";
import * as S from "./styles";

export const PetList: React.FC = () => {
  return (
    <S.Main>
      <S.Container>
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
      </S.Container>
    </S.Main>
  );
};
