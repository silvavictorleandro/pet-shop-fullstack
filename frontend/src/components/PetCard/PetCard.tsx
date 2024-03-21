import { IoIosArrowDown } from "react-icons/io";

import * as S from "./styles";

export const PetCard: React.FC = () => {
  return (
    <S.Card>
      <S.ContainerInfos>
        <S.PetName>Nome: Jimmy</S.PetName>
        <S.PetType>Pet: Gato</S.PetType>
        <S.TutorName>Tutor: Silva</S.TutorName>
      </S.ContainerInfos>
      <S.ContainerButton>
        <S.Button>
          <IoIosArrowDown />
        </S.Button>
      </S.ContainerButton>
    </S.Card>
  );
};
