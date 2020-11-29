import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalBG = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalDiv = styled.div`
  background-color: white;
  height: 90vh;
  width: 90vw;
  max-width: 950px;

  @media only screen and (max-width: 600px) {
    height: 80vh;
    transform: translateY(-3vh);
  }

  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: absolute;

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #000000;
  }
`;

export const ModalDivImage = styled.div`
  height: 70%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalDivDescription = styled.div`
  margin: 5%;
`;

export const MotionCardDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  background: rgb(242, 242, 242);
  position: relative;
  margin: 10px;
  height: 300px;
  width: 50%;
  overflow: hidden;
  flex: 0 0 40%;

  @media (max-width: 1000px) {
    width: 100%;
    flex: 0 0 40%;
  }

  @media (max-width: 800px) {
    width: 100%;
    flex: 0 0 80%;
    margin: 10px;
  }
`;

export const MotionCardExit = styled(motion.h1)`
  position: absolute;
  right: 13px;
  margin-top: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
`;

export const MotionImageOverlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(126, 166, 156, 0.8);
  opacity: 0;
  position: absolute;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;
