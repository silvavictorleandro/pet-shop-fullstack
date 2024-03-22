import * as S from "./styles";

interface AddTutorProps {
  modalTutor: boolean;
  toggleModalTutor: Function;
}

export const AddTutor: React.FC<AddTutorProps> = ({
  modalTutor,
  toggleModalTutor,
}) => {
  return (
    <S.Fade modalTutor={modalTutor}>
      <S.Modal modalTutor={modalTutor}>
        <S.ContainerHeader>
          <S.Title>Adicionar Tutor</S.Title>
          <S.ButtonClose onClick={() => toggleModalTutor()}>
            Fechar
          </S.ButtonClose>
        </S.ContainerHeader>
        <S.LabelTutorName>Nome Tutor</S.LabelTutorName>
        <S.InputTutorName></S.InputTutorName>
        <S.LabelTutorEmail>E-mail</S.LabelTutorEmail>
        <S.InputTutorEmail type="email"></S.InputTutorEmail>
        <S.LabelTutorDoc>CPF do Tutor</S.LabelTutorDoc>
        <S.InputTutorDoc></S.InputTutorDoc>
        <S.LabelTutorAddress>Endereço</S.LabelTutorAddress>
        <S.InputTutorAddress></S.InputTutorAddress>
        <S.ButtonAddPet>Cadastrar Tutor</S.ButtonAddPet>
      </S.Modal>
    </S.Fade>
  );
};
