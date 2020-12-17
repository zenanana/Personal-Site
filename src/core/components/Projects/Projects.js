import React, { useEffect, useState } from "react";

import { Project } from "./Project/Project";
import * as Styled from "./ProjectsStyled";
import { projectsList } from "../../../common/data/Projects";

const Projects = (props) => {
  useEffect(() => {
    document.title = "Projects | Portfolio of Zenan Han";
  }, []);

  const [modalState, setModalState] = useState(false);

  return (
    <>
      <div
        style={{
          overflow: modalState ? "hidden" : "unset",
          height: " 100vh",
          width: "100vw",
        }}
      >
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
                setModalState={setModalState}
              ></Project>
            );
          })}
        </Styled.ProjectList>
      </div>
    </>
  );
};

export { Projects };
