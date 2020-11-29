import React, { useEffect } from "react";
import resume from "../../../resume.pdf";

const Resume = (props) => {
  useEffect(() => {
    document.title = "Resume | Portfolio of Zenan Han";
    window.open(resume);
  }, []);

  return (
    <>
      {/* <div>
        <iframe
          style={{ width: "563px", height: "666px" }}
          src={resume}
          type="application/pdf"
          title="title"
        />
      </div> */}
    </>
  );
};

export { Resume };
