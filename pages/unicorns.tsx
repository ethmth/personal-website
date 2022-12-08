import type { NextPage } from "next";
import { useState, useEffect, useCallback } from "react";

import { useColorMode, Text, Stack } from "@chakra-ui/react";
import ScoreSquare from "../src/components/unicorns/ScoreSquare";
import { setRevalidateHeaders } from "next/dist/server/send-payload";
import Resume from "../src/components/Resume";
import { Resolver } from "dns";
import { resolve } from "path";
import { io, Socket } from "socket.io-client";

// import io from "socket.io-client";

// interface ServerToClientEvents {
//   noArg: () => void;
//   basicEmit: (a: number, b: string, c: Buffer) => void;
//   withAck: (d: string, callback: (e: number) => void) => void;
// }

// interface ClientToServerEvents {
//   // hello: () => void;
//   message: () => void;
// }

// const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();

// const API_URL: string = "ws://localhost:5000/echo";
// const WebSocket = require("ws");

// export const isBrowser = typeof window !== "undefined";

const Unicorns: NextPage = () => {
  // const [wsInstance, setWsInstance] = useState<any>(null);

  // GO WITH SOCKETS.IO

  // socket.emit("message");

  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socket = io("http://localhost:5000");

    socket.on("connect", () => {
      console.log("Connected to server!");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server!");
    });

    socket.emit("hello", "Hello from the client!");

    setSocket(socket);

    return () => {
      socket.close();
    };
  }, []);

  if (socket) {
  }

  return (
    <>
      <Text>Hello World</Text>
      {/* <Text>{words}</Text> */}
    </>
  );
};

export default Unicorns;
