// import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";

import * as Styled from "./ProjectStyled";

const Project = (props) => {
  const [ModalOpacity, changeModalOpacity] = useState(0);
  const [ModalVisibility, changeModalVisibility] = useState("hidden");

  return (
    <>
      <Styled.MotionCardDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        whileHover={{ scale: 1.03 }}
      >
        <img
          src={props.bgImagePath}
          alt={props.header}
          style={{ maxHeight: "80%", maxWidth: "80%", position: "absolute" }}
        ></img>
        <Styled.MotionImageOverlay
          whileHover={{ opacity: 1, scale: 1.03 }}
          transition={{ duration: 0.2 }}
          onClick={() => {
            changeModalOpacity(1);
            changeModalVisibility("visible");
            props.setModalState(true);
          }}
        >
          <h2>{props.header}</h2>
        </Styled.MotionImageOverlay>
      </Styled.MotionCardDiv>

      <Styled.ModalBG
        style={{ opacity: ModalOpacity, visibility: ModalVisibility }}
        onClick={(e) => {
          e.stopPropagation();
          changeModalOpacity(0);
          changeModalVisibility("hidden");
          props.setModalState(false);
        }}
      >
        <Styled.ModalDiv
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Styled.MotionCardExit
            onClick={(e) => {
              e.stopPropagation();
              changeModalOpacity(0);
              changeModalVisibility("hidden");
              props.setModalState(false);
            }}
            initial={{ opacity: 0.6 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
          >
            x
          </Styled.MotionCardExit>
          <Styled.ModalDivImage>
            <img
              src={props.bgImagePath}
              alt={props.header}
              style={{ maxWidth: "80%", maxHeight: "80%" }}
            ></img>
          </Styled.ModalDivImage>
          <Styled.ModalDivDescription>
            <h4 style={{ margin: 0 }}>{props.org}</h4>
            <h1 style={{ margin: 0 }}>
              {props.header}{" "}
              {props.github ? (
                <a
                  href={props.githubLink}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                >
                  {" "}
                  <img
                    src={"./images/logos/github.png"}
                    alt={"github"}
                    style={{ height: "0.9em", transform: "translateY(12.25%)" }}
                  ></img>
                </a>
              ) : null}
            </h1>
            <p>{props.description}</p>
          </Styled.ModalDivDescription>
        </Styled.ModalDiv>
      </Styled.ModalBG>
    </>
  );
};

export { Project };
