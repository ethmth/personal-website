import { NextPage } from "next";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
import md from "markdown-it";
import fs from "fs";
import matter from "gray-matter";

function getStaticProps() {
  const fileName = fs.readFileSync(`public/firebase.md`, "utf-8");

  const { data: frontmatter, content } = matter(fileName);
  //   const content = matter(fileName);

  // cont = content;
  console.log("in static props; content is ");
  console.log({ data: frontmatter, content });

  return {
    props: {
      frontmatter,
      content,
    },
    // content,
  };
}

const FirebasePage: NextPage = (frontmatter: any, content: string) => {
  //   const content = `
  //     # Test page content
  //     What the *heck*

  //     <h1>Hi</h1>
  //     `;

  //   let cont = getStaticProps().props.content;

  //   const fileName = fs.readFileSync(`/public/firebase.md`, "utf-8");

  //   const { data: frontmatter, content } = matter(fileName);

  return (
    <>
      <h1>{content}</h1>
      <div
        className="prose lg:prose-xl"
        // dangerouslySetInnerHTML={{
        //   __html: md.render(content),
        // }}
      />
    </>
  );
};

export default FirebasePage;
