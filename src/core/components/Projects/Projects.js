import React, { useEffect } from "react";

import { Project } from "./Project/Project";
import * as Styled from "./ProjectsStyled";
import { projectsList } from "../../../common/data/Projects";

const Projects = (props) => {
  useEffect(() => {
    document.title = "Projects | Portfolio of Zenan Han";
  }, []);

  return (
    <>
      <Styled.ProjectList>
        {projectsList.map((projectObj) => {
          return (
            <Project
              key={projectObj.header}
              header={projectObj.header}
              description={projectObj.description}
              bgImagePath={projectObj.bgImagePath}
              org={projectObj.org}
              github={projectObj.github}
              githubLink={projectObj.githubLink}
            ></Project>
          );
        })}
      </Styled.ProjectList>
    </>
  );
};

export { Projects };
