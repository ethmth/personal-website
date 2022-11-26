import React from "react";
import { useColorMode, Flex } from "@chakra-ui/react";

import styled from "@emotion/styled";

import { PropsWithChildren } from "react";
import Navbar from "./Navbar";

export const bgColor = {
  // light: "#ecedee",
  light: "#ffffff",
  dark: "#202020",
};

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  const { colorMode } = useColorMode();

  const color = {
    light: "black",
    dark: "white",
  };

  // const bgColor = {
  //   // light: "#ecedee",
  //   light: "#ffffff",
  //   dark: "#202020",
  // };

  const DivFull = styled.div`
    margin: 0;
    width: 100%;
  `;

  const DivSide = styled.div`
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
  `;

  return (
    <DivFull>
      <DivSide>
        {/* <Navbar light={bgColor.light} dark={bgColor.dark} /> */}
        <Navbar />
        <Flex
          as="main"
          justifyContent="center"
          flexDirection="column"
          bg={bgColor[colorMode]}
          color={color[colorMode]}
          px={[0, 4, 4]}
          mt={[4, 8, 8]}
          borderRadius={20}
        >
          {children}
        </Flex>
      </DivSide>
    </DivFull>
  );
};

export default Container;
