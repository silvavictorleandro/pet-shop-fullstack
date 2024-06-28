import styled from "styled-components";

export const Card = styled.article`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 1.2rem;
  width: 250px;

  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const PetName = styled.span``;

export const PetType = styled.span``;

export const Breed = styled.span``;

export const TutorName = styled.span``;

export const ContainerButton = styled.div``;

export const Button = styled.button`
  background-color: white;
  border: none;
  font-size: 1.5rem;
`;

export const ContainerEspecificInfos = styled.ul`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  display: block;
  height: 100px;
  margin-top: 210px;
  padding: 1.2rem;
  position: absolute;
  width: 250px;
`;
