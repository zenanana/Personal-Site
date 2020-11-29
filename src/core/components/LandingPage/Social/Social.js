import React from "react";
import { Link } from "react-router-dom";

import * as Styled from "./SocialStyled";

const Social = (props) => {
  if (props.external) {
    // href for external. react router link for internal. prevent refresh for internal.
    return (
      <>
        <a
          href={props.socialLink}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <Styled.Image
            alt={props.socialName}
            src={props.socialPath}
          ></Styled.Image>
        </a>
      </>
    );
  } else {
    return (
      <>
        <Link to={props.socialLink}>
          <Styled.Image
            alt={props.socialName}
            src={props.socialPath}
          ></Styled.Image>
        </Link>
      </>
    );
  }
};

export { Social };
