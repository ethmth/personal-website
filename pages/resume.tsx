import type { NextPage } from "next";
import Head from "next/head";

import { useColorMode, Text, Stack } from "@chakra-ui/react";

import Container from "../src/components/Container";

import Resume from "../src/components/Resume";

import { useEffect } from "react";

const Home: NextPage = () => {
  const { colorMode } = useColorMode();

  useEffect(() => {
    window.open(
      "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/ethmth/resume/main/EthanThomasResume.pdf",
      "_blank"
    );
    // window.location.href = "/";
  });

  return (
    <>
      <Container>
        <Head>
          <title>Ethan M Thomas - Resume</title>
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
          <Text>To view and download my pdf resume, please click</Text>
          <Text as="u">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/viewer?url=https://raw.githubusercontent.com/ethmth/resume/main/EthanThomasResume.pdf"
            >
              here
            </a>
          </Text>
          <Resume />
        </Stack>
      </Container>
    </>
  );
};

export default Home;
