import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const PageBackground = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SocialDiv = styled(motion.div)`
  text-align: center;
  margin: 15px;
`;

export const DescriptionBox = styled(motion.div)`
  text-align: center;
`;

export const MotionHi = styled(motion.h1)`
  font-size: 50px;
  margin: 0;
`;

export const CustomLink = styled(Link)`
  color: grey;
  font: normal normal bolder 16px/30px monospace;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
