// import DOMPurify from "dompurify";

// import raw from "raw.macro";

import React from "react";
// import "../styles/resume.module.css";
// import { resume } from "../static/resume.txt";

const Resume: React.FC = () => {
  //   const myHTML = `<h1>John Doe</h1>`;
  const myHTML = require("../static/resume.html");

  const htmlString: string = myHTML.default;

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
  //   console.log(myHTML);
  //   console.log(htmlString);

  //   const mySafeHTML = DOMPurify.sanitize(myHTML);

  return (
    <>
      {/* <h1>Hello World</h1> */}
      {/* <div> */}
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      <style jsx>
        {`
          div {
            background-color: yellow;
          }
          .list {
            background-color: blue;
          }
        `}
      </style>
      {/* <strong>Hello Jeff</strong> */}
      {/* <div dangerouslySetInnerHTML={{ __html: htmlString }} /> */}
      {/* </div> */}
    </>
  );
};

export default Resume;
