import styled from "styled-components";

interface ExpandedProps {
  isExpanded: boolean;
}

export const Card = styled.article``;

export const FirstCard = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 0.8rem;
  width: 250px;
`;

export const ContainerEspecificInfos = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 120px;
`;

export const PetName = styled.span``;

export const PetType = styled.span`
  font-size: 30px;
`;

export const TutorName = styled.span``;

export const ContainerButton = styled.div``;

export const Button = styled.button`
  background-color: white;
  border: none;
  font-size: 1.5rem;
`;

export const SecondCard = styled.div<ExpandedProps>`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin-top: 0.5rem;
  position: relative;
  width: 250px;
  padding: 0.8rem;
  display: ${(props) => (props.isExpanded ? "flex" : "none")};
  flex-direction: ${(props) => (props.isExpanded ? "column" : "row")};
  transition: filter 0.2s;
`;

export const Breed = styled.span`
  height: 20px;
`;

export const BirthDay = styled.span`
  height: 20px;
`;

export const EditButton = styled.button`
  background-color: #60a5fa;
  border: none;
  border-radius: 3px;
  color: white;
  display: flex;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 0.6rem;
  padding: 0.4rem 0;
  width: 100%;
`;

export const RemoveButton = styled.button`
  background-color: red;
  border: none;
  border-radius: 3px;
  color: white;
  display: flex;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 0.4rem;
  padding: 0.4rem 0;
  width: 100%;
`;
