import styled from "styled-components";

export const HeaderDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  max-width: 70vw;
  margin: auto;

  @media (max-width: 560px) {
    max-width: 100vw;
  }
`;

export const TextButton = styled.h2`
  color: grey;
  font-weight: bold;
  padding: 0px 30px 0px;
  &:hover {
    cursor: pointer;
  }
  user-select: none;
  @media (max-width: 815px) {
    font-size: 25px;
    padding: 0px 5px 0px;
  }
  @media (max-width: 620px) {
    font-size: 22px;
    padding: 0px 5px 0px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
    padding: 0px 5px 0px;
  }
`;
