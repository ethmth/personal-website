import type { NextPage } from "next";
import Head from "next/head";

import { useColorMode, Text, Stack } from "@chakra-ui/react";

import Container from "../src/components/Container";

import Resume from "../src/components/Resume";

import { useEffect } from "react";

const Home: NextPage = () => {
  const { colorMode } = useColorMode();

  useEffect(() => {
    // navigate("/");
    // console.log("navigate");
    // window.open("/", "_blank");
    // window.location.href =
    // "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/ethmth/resume/main/EthanThomasResume.pdf";
    window.open(
      "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/ethmth/resume/main/EthanThomasResume.pdf",
      "_blank"
    );
    window.location.href = "/";
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
          {/* <Resume /> */}
          <Text>
            To view my pdf resume, please click{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/viewer?url=https://raw.githubusercontent.com/ethmth/resume/main/EthanThomasResume.pdf"
            >
              here
            </a>
          </Text>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
