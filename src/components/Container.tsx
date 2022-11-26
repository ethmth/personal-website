import React from "react";
import { useColorMode, Flex } from "@chakra-ui/react";
import { conColor, color } from "../styles/colors";

import styled from "@emotion/styled";

import { PropsWithChildren } from "react";
import Navbar from "./Navbar";

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  const { colorMode } = useColorMode();
  const bgColor = conColor;

  const DivFull = styled.div`
    margin: 0;
    width: 100%;
    // background-color: ${bgColor[colorMode]};
    // background-color=purple
  `;

  const DivSide = styled.div`
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
    // background-color=blue
  `;

  return (
    <DivFull>
      <DivSide>
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
          // backgroundColor="green"
        >
          {children}
        </Flex>
      </DivSide>
    </DivFull>
  );
};

export default Container;
