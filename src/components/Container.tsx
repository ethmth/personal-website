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
    // width: 100vw;
    minwidth: 100%;
    width: 100%;
    background-color: red;
  `;

  const DivSide = styled.div`
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
    background-color: orange;
  `;

  return (
    <DivFull>
      <DivSide>
        <Navbar />
        {children}
      </DivSide>
    </DivFull>
  );
};

export default Container;
