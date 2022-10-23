import React from "react";
import { useColorMode, Button, Flex, Box } from "@chakra-ui/react";

import styled from "@emotion/styled";

import DarkModeSwitch from "../components/DarkModeSwitch";

import { PropsWithChildren } from "react";
import Navbar from "./Navbar";

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      Container <DarkModeSwitch />
    </>
  );
};

export default Container;
