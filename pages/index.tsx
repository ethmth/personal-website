import type { NextPage } from "next";
import Head from "next/head";

import { useColorMode, Flex, Stack } from "@chakra-ui/react";

import Container from "../src/components/Container";

import Resume from "../src/components/Resume";

import PictureAndName from "../src/components/PictureAndName";

const Home: NextPage = () => {
  const { colorMode } = useColorMode();

  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <>
      <Container>
        <Head>
          <title>Ethan M Thomas</title>
        </Head>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="850px"
          px={2}
          backgroundColor="yellow"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="850px"
            backgroundColor="purple"
          >
            <PictureAndName />
            <Resume />
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
