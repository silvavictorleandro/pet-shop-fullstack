import { useState } from "react";
import * as S from "./styles";

interface AddPetProps {
  modal: boolean;
  toggleModal: Function;
}

export const AddPet: React.FC<AddPetProps> = ({ modal, toggleModal }) => {
  return (
    <S.Fade modal={modal}>
      <S.Modal modal={modal}>
        <S.ContainerHeader>
          <S.Title>Adicionar Pet</S.Title>
          <S.ButtonClose onClick={() => toggleModal()}>Fechar</S.ButtonClose>
        </S.ContainerHeader>
        <S.LabelPetName>Nome Pet</S.LabelPetName>
        <S.InputPetName></S.InputPetName>
        <S.LabelPetType>Espécie do Pet</S.LabelPetType>
        <S.InputPetType>
          <option selected disabled>
            Selecione o seu pet
          </option>
          <option>Gato</option>
          <option>Cachorro</option>
        </S.InputPetType>
        <S.LabelPetBreed>Raça</S.LabelPetBreed>
        <S.InputPetBreed></S.InputPetBreed>
        <S.LabelPetBirth>Data de Nascimento do Pet</S.LabelPetBirth>
        <S.InputPetBirth type="date"></S.InputPetBirth>
        <S.LabelTutorDoc>CPF do Tutor</S.LabelTutorDoc>
        <S.InputTutorDoc></S.InputTutorDoc>
        <S.ButtonAddPet>Cadastrar Pet</S.ButtonAddPet>
      </S.Modal>
    </S.Fade>
  );
};
