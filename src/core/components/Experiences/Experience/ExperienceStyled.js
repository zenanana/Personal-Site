import styled from "styled-components";
import { motion } from "framer-motion";

export const MotionCardDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: rgb(242, 242, 242);
  position: relative;
  padding: 10px;
  margin: 10px;
  height: 300px;
  width: 50%;
  overflow: hidden;
  flex: 0 0 40%;
  background-position: center;
  background-size: 150px;
  background-repeat: no-repeat;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    width: 100%;
    flex: 0 0 40%;
  }

  @media (max-width: 800px) {
    width: 100%;
    flex: 0 0 80%;
    margin: 10px;
    padding: 10px;
  }
`;

export const MotionCardHeader = styled(motion.h1)`
  font-size: auto;
  user-select: none;
`;

export const MotionCardDes = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: justify;
  font-family: inherit;

  background: rgb(126, 166, 156, 0.8);

  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  user-select: none;

  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
