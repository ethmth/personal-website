import type { NextPage } from "next";
import { useState, useEffect, useCallback } from "react";

import { useColorMode, Text, Stack } from "@chakra-ui/react";
import ScoreSquare from "../src/components/unicorns/ScoreSquare";
import { setRevalidateHeaders } from "next/dist/server/send-payload";
import Resume from "../src/components/Resume";
import { Resolver } from "dns";
import { resolve } from "path";

import io from "socket.io-client";

// const API_URL: string = "http://localhost:5000/";
// const WebSocket = require("ws");

export const isBrowser = typeof window !== "undefined";

const Unicorns: NextPage = () => {
  const [words, setWords] = useState<string>("");

  // const isBrowser = typeof window !== "undefined";
  // const [ws] = useState(() => isBrowser ? new WebSocket("ws://" + API_URL + "echo") : null);

  // ws.onopen = (event: MessageEvent) => {
  //   ws.send("Hello jeff");
  // };

  // ws.onmessage = function (event: MessageEvent) {
  //   const data = event.data;

  //   setWords(words + data + "\n");
  // };

  const [wsInstance, setWsInstance] = useState<any>(null);

  /*
  // Call when updating the ws connection
  const updateWs = useCallback((url: string) => {
     if(!isBrowser) return setWsInstance(null);
     
     // Close the old connection
     if(wsInstance != null && wsInstance?.readyState !== 3) {
       wsInstance.close();
     }
  
     // Create a new connection
     const newWs = new WebSocket(url);
     setWsInstance(newWs);
  }, [wsInstance])
  */

  // (Optional) Open a connection on mount
  // useEffect(() => {
  //   if(isBrowser) {
  //     const ws = new WebSocket(API_URL);
  //     setWsInstance(ws);
  //   }

  //   return () => {
  //    // Cleanup on unmount if ws wasn't closed already
  //    if(ws?.readyState !== 3)
  //     ws.close()
  //   }
  //  }, [])

  useEffect(() => {
    console.log("hello");

    const socket = io("ws://localhost:5000/echo");
    socket.on("now", (data) => {
      setWords(data.message);
    });
  }, []);

  return (
    <>
      <Text>Hello World</Text>
      <Text>{words}</Text>
    </>
  );
};

export default Unicorns;
