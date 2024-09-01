import * as S from "./styles";
import { Form } from "../Form/Form";
import { useState } from "react";
import { Pets } from "../../App";

export const Menu: React.FC<Pets> = ({ pets, setPets, getPets }) => {
  const [modalPet, setModalPet] = useState(false);

  const toggleModalPet = () => {
    setModalPet(!modalPet);
  };

  const toggleModalEditPet = () => {
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
        <Form
          modalPet={modalPet}
          toggleModalPet={toggleModalPet}
          toggleModalEditPet={toggleModalEditPet}
          pets={pets}
          setPets={setPets}
          getPets={getPets}
        />
      </S.ContainerButtons>
    </S.Menu>
  );
};
