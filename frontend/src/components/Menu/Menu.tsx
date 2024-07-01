import * as S from "./styles";
import { AddPet } from "../AddPet/AddPet";
import { useState } from "react";

export const Menu: React.FC = () => {
  const [modalPet, setModalPet] = useState(false);

  const toggleModalPet = () => {
    setModalPet(!modalPet);
  };

  return (
    <S.Menu>
      <S.ContainerSearch>
        <S.SearchInput type="search" placeholder="Pesquisar pet..." />
        <S.SearchButton>Pesquisar</S.SearchButton>
      </S.ContainerSearch>

      <S.ContainerButtons>
        <S.ButtonAdd onClick={() => toggleModalPet()}>
          Cadastrar Pet
        </S.ButtonAdd>
        <AddPet modalPet={modalPet} toggleModalPet={toggleModalPet} />
      </S.ContainerButtons>
    </S.Menu>
  );
};
