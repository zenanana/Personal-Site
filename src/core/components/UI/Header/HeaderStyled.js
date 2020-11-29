import styled from "styled-components";
import { motion } from "framer-motion";

export const MotionHeader = styled(motion.span)`
  position: absolute;
  top: 19px;
  left: 20px;
  font-size: 25px;
  font-weight: bold;

  @media (max-width: 815px) {
    top: 23px;
    left: 20px;
    font-size: 20px;
  }

  @media (max-width: 620px) {
    top: 19px;
    left: 20px;
    font-size: 20px;
  }

  @media (max-width: 500px) {
    top: 14px;
    left: 20px;
    font-size: 16px;
  }

  @media (max-width: 200px) {
    visibility: hidden;
  }
`;
