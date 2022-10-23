import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
//import HomePage from "../src/components/HomePage";
import Header from "../src/components/Header";
import {
  Button,
  DarkMode,
  Flex,
  Heading,
  Text,
  useColorMode,
  Switch,
} from "@chakra-ui/react";

import Container from "../src/components/Container";

const Home: NextPage = () => {
  return (
    <>
      <Container>Hi what happens here?</Container>
    </>
  );
};

export default Home;
