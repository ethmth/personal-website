import type { NextPage } from "next";
import Head from "next/head";

import { useColorMode, Flex, Heading, Stack, Image } from "@chakra-ui/react";
// import { Image } from "@chakra-ui/image";

import Container from "../src/components/Container";

import Resume from "../src/components/Resume";

// import Profile from "../src/images/Ethan.jpg";

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
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="850px"
          >
            {/* <Image src="../src/images/Ethan" alt="A Picture of Me" /> */}
            <Image src="/images/Ethan.jpg" alt="A Picture of Me" />
            {/* <Image src="https://bit.ly/dan-abramov" alt="A Picture of Me" /> */}
            <Heading as="h1" size="4xl" mb={4}>
              Hi, I am Ethan Thomas
            </Heading>
            <Resume />
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
