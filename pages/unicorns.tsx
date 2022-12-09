import type { NextPage } from "next";
import { useState, useEffect } from "react";

import { Flex, Button } from "@chakra-ui/react";
import { io, Socket } from "socket.io-client";
import ScoreSquare from "../src/components/unicorns/ScoreSquare";

const Unicorns: NextPage = () => {
  const [socket, setSocket] = useState<Socket | null>(null);

  const [player1Score, setPlayer1Score] = useState<string>("nil");
  const [player2Score, setPlayer2Score] = useState<string>("nil");
  const [player3Score, setPlayer3Score] = useState<string>("nil");
  const [player4Score, setPlayer4Score] = useState<string>("nil");

  useEffect(() => {
    const socket = io("http://localhost:5000");

    socket.on("connect", () => {
      console.log(socket.id);
      socket.emit("confirm_connect", "Server: Connected\n");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server!");
    });

    socket.on("send_data", (sent_data: string) => {
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

      socket.emit("got_data", "Server: Got Data\n");
    });

    setSocket(socket);

    return () => {
      socket.close();
    };
  }, []);

  return (
    <>
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
    </>
  );
};

export default Unicorns;
