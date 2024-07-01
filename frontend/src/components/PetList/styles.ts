import styled from "styled-components";

export const Main = styled.main`
  margin: 2rem auto;
`;

export const Container = styled.div`
  align-content: start;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  /* justify-content: center; */
  margin: 3rem auto;
  max-width: 814px;

  @media screen and (max-width: 845px) {
    max-width: 532px;
  }

  @media screen and (max-width: 563px) {
    max-width: 250px;
  }
`;
