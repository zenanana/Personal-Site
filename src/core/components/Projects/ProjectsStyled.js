import styled from "styled-components";

export const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  max-width: 70vw;
  margin: auto;
  margin-top: 4vw;

  @media (max-width: 1000px) {
    max-width: 100vw;
    margin: auto;
    margin-top: 6vw;
  }

  @media (max-width: 800px) {
    max-width: 100vw;
    margin: auto;
    margin-top: 8vw;
  }
`;
