import type { NextPage } from "next";
import Head from "next/head";
import styled from "@emotion/styled";

import { useColorMode, Stack, Button } from "@chakra-ui/react";

import Container from "../src/components/Container";
import PictureAndName from "../src/components/PictureAndName";
import Socials from "../src/components/Socials";
import Bubble from "../src/components/Bubble";

const Home: NextPage = () => {
  const { colorMode } = useColorMode();

  const StyledLink = styled.a`
    margin-top: 1em;
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
          alignItems="center"
          m="0 auto 4rem auto"
          maxWidth="850px"
          px={2}
        >
          <PictureAndName />
          <Socials />
          {/* <Bubble>
            I'm a student at Columbia University graduating in May of 2025. I'm
            currently seeking a Software Engineering internship. Please check
            out my resume!
          </Bubble> */}
        </Stack>
      </Container>
    </>
  );
};

export default Home;
