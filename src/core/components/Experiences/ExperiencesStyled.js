import styled from "styled-components";

export const ExperienceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  max-width: 70vw;
  margin: auto;

  @media (max-width: 1000px) {
    max-width: 100vw;
    margin: auto;
  }

  @media (max-width: 800px) {
    max-width: 100vw;
    margin: auto;
  }
`;
