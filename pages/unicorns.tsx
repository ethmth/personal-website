import type { NextPage } from "next";
import { useState } from "react";

import { useColorMode, Text, Stack } from "@chakra-ui/react";
import ScoreSquare from "../src/components/unicorns/ScoreSquare";
import { setRevalidateHeaders } from "next/dist/server/send-payload";
import Resume from "../src/components/Resume";

const API_URL = "http://localhost:5000/";

const Unicorns: NextPage = () => {
  const resolve = (result: Promise<any>, name: string) => {
    let ret: string = "3";

    new Promise<any>((resolve) => {
      resolve(result);
    }).then((r) => (ret = r[name]));
    // }).then((r) => console.log(r[name]));
    console.log(ret);

    return ret;
  };

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

      const result = response.json();

      console.log(resolve(result, "blue_score"));

      setScores(JSON.stringify(result, null, 4));
    } catch {
      return "error";
    }
  };

  const [scores, setScores] = useState("");
  getScores();

  return (
    <>
      <Text>Hello World</Text>
      <ScoreSquare team="red" score="1" />

      <Text>Scores {scores}</Text>
    </>
  );
};

export default Unicorns;
