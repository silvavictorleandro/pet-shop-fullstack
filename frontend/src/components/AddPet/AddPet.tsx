import * as S from "./styles";

interface AddPetProps {
  modalPet: boolean;
  toggleModalPet: Function;
}

export const AddPet: React.FC<AddPetProps> = ({ modalPet, toggleModalPet }) => {
  return (
    <S.Fade modal={modalPet}>
      <S.Modal modal={modalPet}>
        <S.ContainerHeader>
          <S.Title>Adicionar Pet</S.Title>
          <S.ButtonClose onClick={() => toggleModalPet()}>Fechar</S.ButtonClose>
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
