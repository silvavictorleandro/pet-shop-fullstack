import { FaSearch } from "react-icons/fa";

import * as S from "./styles";
import { AddPet } from "../AddPet/AddPet";
import { useState } from "react";
import { AddTutor } from "../AddTutor/AddTutor";

export const Menu: React.FC = () => {
  const [modalTutor, setModalTutor] = useState(false);
  const [modalPet, setModalPet] = useState(false);

  const toggleModalPet = () => {
    setModalPet(!modalPet);
  };

  const toggleModalTutor = () => {
    setModalTutor(!modalTutor);
  };

  return (
    <S.Menu>
      <S.ContainerSearch>
        <FaSearch />
        <S.SearchInput type="search"></S.SearchInput>
        <S.SearchButton>Pesquisar</S.SearchButton>
      </S.ContainerSearch>
      <S.ButtonAddTutor onClick={() => toggleModalTutor()}>
        Cadastrar Tutor
      </S.ButtonAddTutor>
      <S.ButtonAddPet onClick={() => toggleModalPet()}>
        Cadastrar Pet
      </S.ButtonAddPet>
      <AddTutor modalTutor={modalTutor} toggleModalTutor={toggleModalTutor} />
      <AddPet modalPet={modalPet} toggleModalPet={toggleModalPet} />
    </S.Menu>
  );
};
