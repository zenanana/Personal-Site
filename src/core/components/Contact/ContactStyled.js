import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 75vw;
`;

export const DescriptionH2 = styled.h3`
  width: 50vw;
  text-align: center;
`;

export const EmailInput = styled.input`
  width: 70vw;
  font-size: 18.72px;
  margin-bottom: 10px;
  font-family: inherit;
`;

export const TitleInput = styled.input`
  width: 70vw;
  font-size: 18.72px;
  margin-bottom: 10px;
  font-family: inherit;
`;

export const MessageInput = styled.textarea`
  width: 70vw;
  font-size: 18.72px;
  resize: vertical;
  margin-bottom: 10px;
  font-family: inherit;
  resize: none;

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

export const SubmitInput = styled.input`
  width: 5em;
  height: 2em;
  font-weight: bold;
  font-size: 18.72px;
  font-family: inherit;
`;

export const StatusButton = styled.button`
  width: 5em;
  height: 2em;
  font-weight: bold;
  font-size: 18.72px;
  font-family: inherit;
`;
