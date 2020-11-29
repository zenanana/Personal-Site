import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

import * as Styled from "./ExperienceStyled";

const Experience = (props) => {
  const [showDes, setShowDes] = useState(false);

  useEffect(() => {
    console.log(props.header, "has mounted");
  }, [props.header]);

  useEffect(() => {
    setShowDes(false);
  }, [props.currentType]);

  if (props.show) {
    return (
      <>
        <AnimatePresence>
          <Styled.MotionCardDiv
            style={{
              backgroundImage: `url(${props.bgImagePath})`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setShowDes(!showDes);
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {!showDes ? (
              <Styled.MotionCardHeader
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {" "}
                {props.header}
              </Styled.MotionCardHeader>
            ) : (
              <Styled.MotionCardDes
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p
                  style={{
                    textJustify: "inter-character",
                    fontWeight: "normal",
                    width: "75%",
                  }}
                >
                  {props.description}
                </p>
              </Styled.MotionCardDes>
            )}
          </Styled.MotionCardDiv>
        </AnimatePresence>
      </>
    );
  } else {
    return null;
  }
};

export { Experience };
