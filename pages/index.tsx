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

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Heading> Hi, my name is Ethan </Heading>
    </>
  );
};

export default Home;
