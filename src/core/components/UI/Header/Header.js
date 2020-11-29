import React from "react";
import { Link } from "react-router-dom";

import * as Styled from "./HeaderStyled";

const Header = (props) => {
  return (
    <>
      <Styled.MotionHeader initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Link to="" style={{ color: "black" }}>
          &lt;
        </Link>{" "}
      </Styled.MotionHeader>
    </>
  );
};

export { Header };
