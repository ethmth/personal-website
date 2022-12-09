import type { NextPage } from "next";
import { useState, useEffect, useCallback } from "react";

import { useColorMode, Text, Stack, Flex, Button } from "@chakra-ui/react";
import { io, Socket } from "socket.io-client";
import ScoreSquare from "../src/components/unicorns/ScoreSquare";

const Unicorns: NextPage = () => {
  // const [wsInstance, setWsInstance] = useState<any>(null);

  // GO WITH SOCKETS.IO

  // socket.emit("message");

  const [socket, setSocket] = useState<Socket | null>(null);

  const [player1Score, setPlayer1Score] = useState<string>("nil");
  const [player2Score, setPlayer2Score] = useState<string>("nil");
  const [player3Score, setPlayer3Score] = useState<string>("nil");
  const [player4Score, setPlayer4Score] = useState<string>("nil");

  useEffect(() => {
    // handleSocket();
    const socket = io("http://localhost:5000");

    socket.on("connect", () => {
      socket.emit("confirm_connect", "Server: Connected\n");
      // console.log("Connected to server!");
      console.log(socket.id);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server!");
    });

    // socket.on("message", () => {
    // console.log("Message Received!");
    // });

    // socket.on("emit", () => {
    // console.log("emit");
    // });

    // socket.on("reconnect", () => {
    // console.log("Reconnected");
    // });

    socket.on("send_data", (sent_data: string) => {
      console.log(sent_data);

      const length: number = sent_data.length;

      const player: string = sent_data[0];
      const score: string = sent_data.substring(2, length);

      switch (player) {
        case "1":
          setPlayer1Score(score);
          break;
        case "2":
          setPlayer2Score(score);
          break;
        case "3":
          setPlayer3Score(score);
          break;
        case "4":
          setPlayer4Score(score);
          break;
      }

      // console.log("emitting got_data");
      socket.emit("got_data", "Server: Got Data\n");
    });

    // socket.emit("hello", "Hello from the client!");

    setSocket(socket);

    return () => {
      socket.close();
    };
  }, []);

  // const handleSocket = () => {
  //   const socket = io("http://localhost:5000");

  //   socket.on("connect", () => {
  //     console.log("Connected to server!");
  //     console.log(socket.id);
  //   });

  //   socket.on("disconnect", () => {
  //     console.log("Disconnected from server!");
  //   });

  //   // setSocket(socket);
  // };

  // const handleSocket = () => {
  //   const lobby = io("http://localhost:5000");
  //   lobby.on("connection", function (socket) {
  //     console.log("connected to backend");

  //     socket.on("disconnect", function () {
  //       console.log("disconnected: ", socket);
  //     });
  //   });
  //   lobby.on("chat message", function (msg) {
  //     console.log("message: ", msg);
  //   });
  // };

  return (
    <>
      {/* <Text>Hello World</Text> */}
      <Flex>
        <ScoreSquare team="1" score={player1Score} />
        <ScoreSquare team="2" score={player2Score} />
      </Flex>
      <Button
        position="absolute"
        backgroundColor="black"
        fontSize="5em"
        padding="1em"
      >
        Reset
      </Button>
      <Flex>
        <ScoreSquare team="3" score={player3Score} />
        <ScoreSquare team="4" score={player4Score} />
      </Flex>
      {/* <Text>{words}</Text> */}
      {/* {socket != null ? <p>My id is {socket.id}</p> : <p>fail</p>} */}
    </>
  );
};

export default Unicorns;
