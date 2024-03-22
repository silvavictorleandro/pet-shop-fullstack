import { FaSearch } from "react-icons/fa";

import * as S from "./styles";
import { AddPet } from "../AddPet/AddPet";
import { useState } from "react";

export const Menu: React.FC = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <S.Menu>
      <S.ContainerSearch>
        <FaSearch />
        <S.SearchInput type="search"></S.SearchInput>
        <S.SearchButton>Pesquisar</S.SearchButton>
      </S.ContainerSearch>
      <S.ButtonAdd onClick={() => toggleModal()}>Cadastrar Pet</S.ButtonAdd>
      <AddPet modal={modal} toggleModal={toggleModal} />
    </S.Menu>
  );
};
