import styled from "styled-components";

interface ModalProps {
  modalTutor: boolean;
}

export const Fade = styled.div<ModalProps>`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
  opacity: ${(props) => (props.modalTutor ? "1" : "0")};
  pointer-events: ${(props) => (props.modalTutor ? "all" : "none")};
  transition: 0.5s;
`;

export const Modal = styled.div<ModalProps>`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 50%;
  max-width: 90%;
  padding: 2rem;
  top: ${(props) => (props.modalTutor ? "50%" : "0")};
  transform: translate(-50%, -50%);
  width: 500px;
  z-index: 10;
  opacity: ${(props) => (props.modalTutor ? "1" : "0")};
  pointer-events: ${(props) => (props.modalTutor ? "all" : "none")};
  transition: 0.5s;
`;

export const ContainerHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const Title = styled.h2``;

export const ButtonClose = styled.button`
  padding: 0.3rem 1rem;
`;

export const LabelTutorName = styled.label`
  margin-top: 0.5rem;
`;

export const InputTutorName = styled.input`
  height: 30px;
  padding: 0 0.3rem;
  width: 300px;
`;

export const LabelTutorEmail = styled.label`
  margin-top: 0.5rem;
`;

export const InputTutorEmail = styled.input`
  height: 30px;
  padding: 0 0.3rem;
  width: 300px;
`;

export const LabelTutorDoc = styled.label`
  margin-top: 0.5rem;
`;

export const InputTutorDoc = styled.input`
  height: 30px;
  padding: 0 0.3rem;
  width: 300px;
`;

export const LabelTutorAddress = styled.label`
  margin-top: 0.5rem;
`;

export const InputTutorAddress = styled.input`
  height: 30px;
  padding: 0 0.3rem;
  width: 300px;
`;

export const ButtonAddPet = styled.button`
  margin-top: 1rem;
  padding: 0.4rem;
  width: 120px;
`;
