import React, { useEffect } from "react";

import * as Styled from "./LandingPageStyled";
import { Social } from "./Social/Social";

import resume from "../../../resume.pdf";
import { socials } from "../../../common/data/Socials";

// parent component with state

const LandingPage = (props) => {
  // const [BgColor, setBgColor] = useState("#FFFFFF");
  useEffect(() => {
    document.title = "Home | Portfolio of Zenan Han";
  }, []);

  const openResume = () => {
    window.open(resume);
  };

  return (
    <>
      <Styled.PageBackground>
        {" "}
        <Styled.MotionHi
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hi
        </Styled.MotionHi>
        <Styled.DescriptionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>
            My name is{" "}
            <strong
              style={{ font: "normal normal bolder 16px/30px monospace" }}
            >
              Zenan
            </strong>
            . I am a software engineer in Singapore with more than 3 years of
            experience.
            <br></br>
            <br></br>
            Check out my{" "}
            <strong>
              <Styled.CustomLink to="/projects">Projects</Styled.CustomLink>
            </strong>{" "}
            ,{" "}
            <strong>
              <Styled.CustomLink to="/skills">Skills</Styled.CustomLink>
            </strong>{" "}
            and{" "}
            <strong>
              <Styled.CustomLink onClick={openResume} to="">
                Resume
              </Styled.CustomLink>
            </strong>
          </p>
        </Styled.DescriptionBox>
        <Styled.SocialDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {socials.map((socialObj) => {
            return (
              <Social
                key={socialObj.socialName}
                external={socialObj.external}
                socialName={socialObj.socialName}
                socialPath={socialObj.socialPath}
                socialLink={socialObj.socialLink}
              ></Social>
            );
          })}
        </Styled.SocialDiv>
      </Styled.PageBackground>
    </>
  );
};

export { LandingPage };
