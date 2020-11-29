import React, { useState } from "react";

import * as Styled from "./ExperiencesHeaderStyled";

const ExperiencesHeader = (props) => {
  const [active, setActive] = useState("Technologies");

  return (
    <>
      <Styled.HeaderDiv>
        {props.experiencesTypes.map((experiencesType) => {
          return (
            <Styled.TextButton
              key={experiencesType}
              onClick={() => {
                props.setExperienceType(experiencesType);
                setActive(experiencesType);
              }}
              style={active === experiencesType ? { color: "black" } : null}
            >
              {experiencesType}
            </Styled.TextButton>
          );
        })}
      </Styled.HeaderDiv>
    </>
  );
};

export { ExperiencesHeader };
