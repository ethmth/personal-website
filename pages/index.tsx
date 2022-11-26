import type { NextPage } from "next";
import Head from "next/head";

import { useColorMode, Flex, Stack } from "@chakra-ui/react";

import Container from "../src/components/Container";

import Resume from "../src/components/Resume";

import PictureAndName from "../src/components/PictureAndName";

const Home: NextPage = () => {
  const { colorMode } = useColorMode();

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
        >
          <PictureAndName />
          <Resume />
        </Stack>
      </Container>
    </>
  );
};

export default Home;
