import type { NextPage } from "next";
import { useState, useEffect } from "react";

import { useColorMode, Text, Stack } from "@chakra-ui/react";
import ScoreSquare from "../src/components/unicorns/ScoreSquare";
import { setRevalidateHeaders } from "next/dist/server/send-payload";
import Resume from "../src/components/Resume";
import { Resolver } from "dns";
import { resolve } from "path";

const API_URL = "http://localhost:5000/";

const Unicorns: NextPage = () => {
  let elements: JSX.Element[] = [];

  let scores = {};

  useEffect(() => console.log("First render "), []);

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
    const result = await getScores();

    for (let score in result) {
      scores = { ...scores, [score]: result[score] };
      elements.push(<ScoreSquare team="team" score="1" />);
    }
    console.log(scores);
  };

  updateScores();

  return (
    <>
      <Text>Hello World</Text>

      {/* <ScoreSquare team="red" score={scores["red_score"]} /> */}
      {elements}
    </>
  );
};

export default Unicorns;
