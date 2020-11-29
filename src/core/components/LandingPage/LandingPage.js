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
            My name is <strong>Zenan</strong>. I am a software engineer from
            Singapore with more than 3 years of experience.
            <br></br>
            <br></br>
            Check out my{" "}
            <Styled.MotionLink>
              <strong>
                <Styled.CustomLink to="/projects">Projects</Styled.CustomLink>
              </strong>
            </Styled.MotionLink>{" "}
            ,{" "}
            <strong>
              <Styled.MotionLink>
                <Styled.CustomLink to="/skills">Skills</Styled.CustomLink>
              </Styled.MotionLink>
            </strong>{" "}
            and{" "}
            <strong>
              <Styled.MotionLink>
                <Styled.CustomLink onClick={openResume} to="">
                  Resume
                </Styled.CustomLink>
              </Styled.MotionLink>
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
