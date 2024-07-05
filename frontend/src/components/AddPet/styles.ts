import styled from "styled-components";

interface ModalProps {
  modal: boolean;
}

export const Fade = styled.div<ModalProps>`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 5;
  opacity: ${(props) => (props.modal ? "1" : "0")};
  pointer-events: ${(props) => (props.modal ? "all" : "none")};
  transition: 0.5s;
`;

export const Modal = styled.div<ModalProps>`
  background-color: #f8f8f8;
  border-radius: 5px;
  position: fixed;
  left: 50%;
  max-width: 90%;
  padding: 2rem;
  top: ${(props) => (props.modal ? "50%" : "0")};
  transform: translate(-50%, -50%);
  width: 400px;
  z-index: 10;
  opacity: ${(props) => (props.modal ? "1" : "0")};
  pointer-events: ${(props) => (props.modal ? "all" : "none")};
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
  background-color: red;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  padding: 0.5rem 0.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-top: 0.5rem;
`;

export const Input = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  height: 30px;
  padding: 0.3rem;
  width: 100%;
`;

export const LabelPetType = styled.label`
  margin-top: 0.5rem;
`;

export const InputOption = styled.select`
  height: 30px;
  padding: 0 0.3rem;
  width: 100%;
`;

export const ButtonAddPet = styled.button`
  background-color: #22c55e;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  width: 120px;
`;
