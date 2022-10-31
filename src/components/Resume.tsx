// import DOMPurify from "dompurify";

// import raw from "raw.macro";

import React from "react";
// import { resume } from "../static/resume.txt";

const Resume: React.FC = () => {
  //   const myHTML = `<h1>John Doe</h1>`;
  const myHTML = require("../static/resume.html");

  /*
  const showFile = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      console.log(text);
    };
    reader.readAsText(e.target.files[0]);
  };
  */

  //   const mySafeHTML = DOMPurify.sanitize(myHTML);

  return (
    <>
      <h1>Hello World</h1>
      <div dangerouslySetInnerHTML={{ __html: myHTML }} />
    </>
  );
};

export default Resume;
