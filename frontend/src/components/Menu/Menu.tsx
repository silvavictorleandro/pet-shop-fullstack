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
        <S.SearchInput type="search" placeholder="Pesquisar pet..." />
        <S.SearchButton>Pesquisar</S.SearchButton>
      </S.ContainerSearch>

      <S.ContainerButtons>
        <S.ButtonAdd onClick={() => toggleModalTutor()}>
          Cadastrar Tutor
        </S.ButtonAdd>
        <S.ButtonAdd onClick={() => toggleModalPet()}>
          Cadastrar Pet
        </S.ButtonAdd>
        <AddTutor modalTutor={modalTutor} toggleModalTutor={toggleModalTutor} />
        <AddPet modalPet={modalPet} toggleModalPet={toggleModalPet} />
      </S.ContainerButtons>
    </S.Menu>
  );
};
