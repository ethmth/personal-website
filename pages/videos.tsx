import { NextPage } from "next";
import Head from "next/head";
import { Stack } from "@chakra-ui/react";

import Container from "../src/components/Container";
import VideoLink from "../src/components/VideoLink";

const VideosPage: NextPage = () => {
  return (
    <>
      <Container>
        <Head>
          <title>Ethan M Thomas - Videos</title>
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
          <VideoLink
            title="Beating #1 Badlion PvPer"
            thumbnail="/images/thumbnails/tylarzz.webp"
            href="https://odysee.com/Killing-Tylarzz:b"
            tags={["Odysee", "Gaming", "Minecraft"]}
          >
            The time I beat the #1 Minecraft PvPer at the time.
          </VideoLink>
        </Stack>
      </Container>
    </>
  );
};

export default VideosPage;
