import React, { useState, useEffect } from "react";

import { Experience } from "./Experience/Experience";
import { ExperiencesHeader } from "./ExperiencesHeader/ExperiencesHeader";
import * as Styled from "./ExperiencesStyled";
import {
  experiencesList,
  experiencesTypes,
} from "../../../common/data/Experiences";

const Experiences = (props) => {
  const [experienceType, setExperienceType] = useState("Technologies");

  useEffect(() => {
    document.title = "Experiences | Portfolio of Zenan Han";
  }, []);

  return (
    <>
      <ExperiencesHeader
        setExperienceType={setExperienceType}
        experiencesTypes={experiencesTypes}
      ></ExperiencesHeader>

      <Styled.ExperienceList>
        {experiencesList.map((experienceObj) => {
          return (
            <Experience
              key={experienceObj.header}
              header={experienceObj.header}
              description={experienceObj.description}
              bgImagePath={experienceObj.bgImagePath}
              show={experienceType === experienceObj.type}
              currentType={experienceType}
            ></Experience>
          );
        })}
      </Styled.ExperienceList>
    </>
  );
};

export { Experiences };
