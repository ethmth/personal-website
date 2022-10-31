import type { NextPage } from "next";
import Head from "next/head";

import { useColorMode, Flex, Text, Heading, Stack } from "@chakra-ui/react";

import Container from "../src/components/Container";

import Resume from "../src/components/Resume";

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
        {/* <Text>Hello World</Text> */}
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          px={2}
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            max-width="700px"
          >
            <Heading as="h1" size="4xl" mb={4}>
              Hi, I am Ethan Thomas
            </Heading>
            {/* <Text color={colorSecondary}>Lorem ipsum</Text> */}
            <Resume />
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
