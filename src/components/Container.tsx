import React from "react";
import { useColorMode, Button, Flex, Box, Text } from "@chakra-ui/react";

import styled from "@emotion/styled";

// import DarkModeSwitch from "../components/DarkModeSwitch";

import { PropsWithChildren } from "react";
import Navbar from "./Navbar";

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  const { colorMode } = useColorMode();

  const color = {
    light: "black",
    dark: "white",
  };

  const bgColor = {
    light: "white",
    dark: "#171717",
  };

  return (
    <>
      {console.log(typeof bgColor)}
      <Navbar light={bgColor.light} dark={bgColor.dark} />
      {/* <DarkModeSwitch /> */}
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
      >
        {children}
      </Flex>
    </>
  );
};

export default Container;
