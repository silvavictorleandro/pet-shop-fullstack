import styled from "styled-components";

export const Menu = styled.section`
  gap: 1rem;
  margin-top: 2rem;
  width: 100%;
`;

export const ContainerSearch = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 1rem 0 1rem;
  /* position: relative; */
`;

export const SearchInput = styled.input`
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0.3rem;
  width: 70%;
  max-width: 700px;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const SearchButton = styled.button`
  background-color: #60a5fa;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  padding: 0 1rem;
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

export const ButtonAdd = styled.button`
  background-color: #22c55e;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  padding: 0.5rem 1rem;
`;
