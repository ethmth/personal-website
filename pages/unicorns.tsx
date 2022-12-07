import type { NextPage } from "next";
import { useState, useEffect } from "react";

import { useColorMode, Text, Stack } from "@chakra-ui/react";
import ScoreSquare from "../src/components/unicorns/ScoreSquare";
import { setRevalidateHeaders } from "next/dist/server/send-payload";
import Resume from "../src/components/Resume";

const API_URL = "http://localhost:5000/";

const Unicorns: NextPage = () => {
  // const myResolve = async (result: Promise<any>, name: string) => {
  //   // const ret: string = "3";
  //   // const [ret, setRet] = useState("2");

  //   // let ret: string = "2";

  //   let ret = await new Promise<any>((resolve) => {
  //     resolve(result);
  //   }).then((r) => console.log(r[name]));

  //   return ret;
  //   // return "bruh";
  // };

  // const [on, setOn] = useState(false);

  // useEffect(() => {
  // getScores();
  // }, []);

  const getScores = async () => {
    try {
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

      const result = await response.json();

      // var o = JSON.parse(j, (k, v) => (v.map ? v[0] : v.$ || v));
      // console.log(o);

      // const scoreCopy = scores;

      // for (let score in result) {
      // console.log(score);
      // () => setScores({ ...scores, [score]: result[score] });
      // setScores({ ...scores, [score]: result[score] });
      // }

      // return result();

      // setScores({ ...scores, ["red_score"]: result["red_score"] });

      // let blue = result["blue_score"];
      // let blue = result[0];
      // console.log(blue);
      // for( score: result) {

      // }

      // console.log("result is: ", JSON.stringify(result, null, 4));
      // setScores(JSON.stringify(result, null, 4));
      // console.log(scores);
      return result;
    } catch {
      return "Error!";
    }
  };

  const updateScores = async () => {
    const result = await getScores();
    console.log(result);

    let myinter = {};

    for (let score in result) {
      // console.log(score);
      // () => setScores({ ...scores, [score]: result[score] });
      // setScores((scores) => ({ ...scores, [score]: result[score] }));
      myinter = { ...myinter, [score]: result[score] };
    }
    console.log(myinter);
    // setScores(myinter);
  };

  const [scores, setScores] = useState({});
  // getScores();
  updateScores();

  // setOn(true);

  return (
    <>
      <Text>Hello World</Text>
      <ScoreSquare team="red" score="1" />

      {/* <Text>Scores {scores}</Text> */}
      {/* {scores} */}

      {/* <button onClick={() => setOn(true)}>Click me</button> */}
    </>
  );
};

export default Unicorns;
