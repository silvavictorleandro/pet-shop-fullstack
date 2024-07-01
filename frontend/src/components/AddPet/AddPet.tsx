import { MdClose } from "react-icons/md";
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
          <S.ButtonClose onClick={() => toggleModalPet()}>
            <MdClose />
          </S.ButtonClose>
        </S.ContainerHeader>

        <S.Label>Nome Pet</S.Label>
        <S.Input></S.Input>
        <S.Label>Espécie do Pet</S.Label>
        <S.InputOption>
          <option selected disabled>
            Selecione o seu pet
          </option>
          <option>Gato</option>
          <option>Cachorro</option>
        </S.InputOption>
        <S.Label>Raça</S.Label>
        <S.Input></S.Input>
        <S.Label>Data de Nascimento do Pet</S.Label>
        <S.Input type="date"></S.Input>
        <S.Label>CPF do Tutor</S.Label>
        <S.Input></S.Input>
        <S.ButtonAddPet>Cadastrar Pet</S.ButtonAddPet>
      </S.Modal>
    </S.Fade>
  );
};
