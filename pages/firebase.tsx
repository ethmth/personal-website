import { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const FirebasePage: NextPage = () => {
  const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

## WHAT

A table:

| a | b |
| - | - |
`;
  return (
    <div>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
};

export default FirebasePage;
