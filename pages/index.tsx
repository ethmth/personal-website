import type { NextPage } from "next";
import Head from "next/head";
import styled from "@emotion/styled";

import {
  useColorMode,
  Flex,
  Text,
  Heading,
  Stack,
  Divider,
} from "@chakra-ui/react";

import Container from "../src/components/Container";

import Resume from "../src/components/Resume";

const Home: NextPage = () => {
  const { colorMode } = useColorMode();

  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };

  const Div = styled.div`
    // margin-left: 5vw;
    // margin-right: 5vw;
  `;

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
          maxWidth="750px"
          px={2}
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="750px"
            // m="5vw 0 0 5vw"
          >
            <Div>
              <Heading as="h1" size="4xl" mb={4}>
                Hi, I am Ethan Thomas
              </Heading>
              <Resume />
            </Div>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
