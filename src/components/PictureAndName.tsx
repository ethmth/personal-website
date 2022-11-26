import { Image, Heading, Flex, useColorMode } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { bgColor } from "../styles/colors";
import { useState, useEffect } from "react";

const PictureAndName: React.FC = () => {
  const { colorMode } = useColorMode();
  const Horizontal = styled(Flex)`
    top: 0;
  `;

  const isClientMobile = () => {
    // let mql = window.matchMedia("(max-width: 650px)");
    // if (mql.matches) {
    //   return true;
    // }
    // return false;

    return typeof window !== "undefined" &&
      window.matchMedia("(max-width: 650px)").matches
      ? true
      : false;
  };

  const [mobile, setMobile] = useState(isClientMobile());

  const useEffect = () => {
    setMobile(isClientMobile());
    // window.addEventListener("resize", this._handleWindowResize);
  };

  return (
    <>
      {/* <Flex> */}
      <Horizontal
        // flexDirection="row"
        flexDirection={mobile ? "column" : "row"}
        justifyContent="space-between"
        alignItems="center"
        maxWidth="100%"
        px={[2, 6, 6]}
        py={2}
        mt={8}
        mx="auto"
        backgroundColor={bgColor[colorMode]}
        // backgroundColor="red"
        borderRadius="50"
      >
        <Heading as="h1" size="4xl" mb={4} mr={10} maxWidth="50%">
          Hi, I&apos;m Ethan Thomas
        </Heading>
        <Image
          ml={10}
          maxWidth="50%"
          mt={5}
          src="/images/Ethan.jpg"
          alt="A Picture of Me"
          mr={2}
        />
      </Horizontal>
      {/* </Flex> */}
    </>
  );
};

export default PictureAndName;
