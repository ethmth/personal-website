import { NextPage } from "next";
import { useState, useEffect } from "react";
import MarkDown from "markdown-to-jsx";

const FirebasePage: NextPage = () => {
  const fileName = "./firebase.md";
  //   const fileName = "/public/firebase.md";
  //   const fileName = "../public/firebase.md";
  const [content, setContent] = useState("");

  useEffect(() => {
    import(`${fileName}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => console.log(res));
      })
      .catch((err) => console.log(err));
  });

  return <MarkDown>{content}</MarkDown>;
};

export default FirebasePage;
