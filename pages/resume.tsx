import type { NextPage } from "next";
import Head from "next/head";
import styled from "@emotion/styled";

import { useColorMode, Stack, Button } from "@chakra-ui/react";

import Container from "../src/components/Container";

import Resume from "../src/components/Resume";

const ResumePage: NextPage = () => {
  const { colorMode } = useColorMode();

  const StyledLink = styled.a`
    margin-top: 1em;
  `;

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
          // alignItems="flex-start"
          alignItems="center"
          m="0 auto 4rem auto"
          maxWidth="850px"
          px={2}
        >
          <StyledLink href="/resume_pdf" target="_blank">
            <Button>View/Download PDF Resume</Button>
          </StyledLink>
          <Resume />
        </Stack>
      </Container>
    </>
  );
};

export default ResumePage;
