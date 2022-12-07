import type { NextPage } from "next";
import { useState, useEffect, useCallback } from "react";

import { useColorMode, Text, Stack } from "@chakra-ui/react";
import ScoreSquare from "../src/components/unicorns/ScoreSquare";
import { setRevalidateHeaders } from "next/dist/server/send-payload";
import Resume from "../src/components/Resume";
import { Resolver } from "dns";
import { resolve } from "path";

import io from "socket.io-client";

const API_URL: string = "ws://localhost:5000/echo";
// const WebSocket = require("ws");

export const isBrowser = typeof window !== "undefined";

const Unicorns: NextPage = () => {
  const [wsInstance, setWsInstance] = useState<any>(null);

  // GO WITH SOCKETS.IO

  return (
    <>
      <Text>Hello World</Text>
      {/* <Text>{words}</Text> */}
    </>
  );
};

export default Unicorns;
