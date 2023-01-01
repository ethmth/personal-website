import type { NextPage } from "next";
import Head from "next/head";

import { useColorMode, Stack } from "@chakra-ui/react";

import Container from "../src/components/Container";
import PictureAndName from "../src/components/PictureAndName";
import Socials from "../src/components/Socials";

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
          alignItems="center"
          m="0 auto 4rem auto"
          maxWidth="850px"
          px={2}
        >
          <PictureAndName />
          <Socials />
        </Stack>
      </Container>
    </>
  );
};

export default Home;
