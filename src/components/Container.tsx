import React from "react";
import { useColorMode, Flex } from "@chakra-ui/react";

import styled from "@emotion/styled";

import { PropsWithChildren } from "react";
import Navbar from "./Navbar";

// import bgColor from "../../pages/_app";
// import GlobalStyle from "../../pages/_app";

// interface BGColor {
//   light: string;
//   dark: string;
// }

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  const { colorMode } = useColorMode();

  const color = {
    light: "black",
    dark: "white",
  };

  const bgColor = {
    // light: "white",
    // light: "#cdced0",
    light: "#ecedee",
    // dark: "#171717",
    // dark: "red",
    // dark: "#07175a",
    // dark: "#343a40",
    dark: "#202020",
  };

  const DivFull = styled.div`
    margin: 0;
    width: 100%;
    // background-color: orange;
  `;

  const DivSide = styled.div`
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
    // background-color: blue;
  `;

  return (
    <DivFull>
      <DivSide>
        <Navbar light={bgColor.light} dark={bgColor.dark} />
        <Flex
          as="main"
          justifyContent="center"
          flexDirection="column"
          bg={bgColor[colorMode]}
          color={color[colorMode]}
          px={[0, 4, 4]}
          mt={[4, 8, 8]}
          borderRadius={20}
          // backgroundColor="orange"
        >
          {children}
        </Flex>
      </DivSide>
    </DivFull>
  );
};

export default Container;
