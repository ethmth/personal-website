import type { NextPage } from "next";
import { useState, useEffect } from "react";

import { useColorMode, Text, Stack } from "@chakra-ui/react";
import ScoreSquare from "../src/components/unicorns/ScoreSquare";
import { setRevalidateHeaders } from "next/dist/server/send-payload";
import Resume from "../src/components/Resume";
import { Resolver } from "dns";
import { resolve } from "path";

const API_URL = "http://localhost:5000/";

const [mysquares, setMysqaures] = useState<JSX.Element[]>([]);

const Unicorns: NextPage = () => {
  let scores = {};

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

      return result;
    } catch {
      return "Error!";
    }
  };

  const updateScores = async () => {
    let scoreSquares: JSX.Element[] = [];

    const result = await getScores();
    console.log(result);

    for (let score in result) {
      scores = { ...scores, [score]: result[score] };
      scoreSquares.push(<ScoreSquare team="test" score="1" />);
    }
    console.log(scores);
    console.log(scoreSquares);

    // return <div>{scoreSquares[0]}</div>;

    setMysqaures(scoreSquares);
  };

  updateScores();

  return (
    <>
      <Text>Hello World</Text>

      {mysquares}

      {/* {updateScores().map((scoreSquare) => ( */}
      {/* <div>{scoreSquare}</div> */}
      {/* ))} */}

      {/* {resolve(updateScores())} */}

      {/* {updateScores().map ? : } */}

      {/* {for(let team in scores) { */}

      {/* // }} */}
      {/* <ScoreSquare team="bruh" score="1" /> */}
      {/* {updateScores()} */}

      {/* <Text>Scores {scores}</Text> */}
    </>
  );
};

export default Unicorns;
