import type { NextPage } from "next";
import { useState } from "react";

import { useColorMode, Text, Stack } from "@chakra-ui/react";
import ScoreSquare from "../src/components/unicorns/ScoreSquare";
import { setRevalidateHeaders } from "next/dist/server/send-payload";
import Resume from "../src/components/Resume";

const API_URL = "http://localhost:5000/";

const Unicorns: NextPage = () => {
  const resolve = (result: Promise<any>, name: string) => {
    // switch(name) {
    //     case: "blue_name" {
    //         const mytype = {blue_name}
    //     }
    // }

    new Promise<{ blue_score: string }>((resolve) => {
      // new Promise<{ name: string }>((resolve) => {
      resolve(result);
    }).then((r) => console.log(r.blue_score));
  };

  const getScores = async () => {
    // console.log("getScores called");
    try {
      //   console.log("trying fetch");
      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      //   console.log("response gotten");

      //   const result = await response.json();
      //   console.log(response);

      const result = response.json();

      resolve(result, "blue_score");

      //   console.log(typeof result);

      //   console.log("getScores set");

      //   new Promise<{ id: string }>((resolve) => {
      //     resolve(result);
      //   }).then((r) => console.log(r.blue_score));

      //   console.log(resolve(result));

      //   console.log(result);
      setScores(JSON.stringify(result, null, 4));
      //   return JSON.stringify(result, null, 4);

      //   console.log("result is: ", JSON.stringify(result, null, 4));
    } catch {
      //   console.log("error");
      return "error";
    }
    // return "error";
  };

  const [scores, setScores] = useState("");
  getScores();

  //   fetch(API_URL)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setScores(json);
  //     });

  return (
    <>
      <Text>Hello World</Text>
      <ScoreSquare team="red" score="1" />

      <Text>Scores {scores}</Text>
    </>
  );
};

export default Unicorns;
