import { Image, Heading, Flex, useColorMode } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { bgColor, color } from "../styles/colors";
import { useState, useEffect } from "react";

const PictureAndName: React.FC = () => {
  const { colorMode } = useColorMode();
  const Horizontal = styled(Flex)`
    margin-top: 1em;
  `;

  const maxWidth = "650px";

  const isClientMobile = () => {
    return typeof window !== "undefined" &&
      window.matchMedia(`(max-width: ${maxWidth})`).matches
      ? true
      : false;
  };
  const [mobile, setMobile] = useState(isClientMobile());

  useEffect(() => {
    function handleResize() {
      setMobile(isClientMobile());
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <Horizontal
        flexDirection={mobile ? "column" : "row"}
        justifyContent="space-between"
        alignItems="center"
        px={[2, 6, 6]}
        py={2}
        mx="auto"
        backgroundColor={bgColor[colorMode]}
        borderRadius="50"
      >
        <Heading
          as="h1"
          size={mobile ? "2xl" : "4xl"}
          mt={3}
          mb={3}
          mr={5}
          ml={5}
          maxWidth="50%"
        >
          Hi, I&apos;m Ethan Thomas
        </Heading>
        <Image
          maxWidth="50%"
          src="/images/Ethan.jpg"
          alt="A Picture of Me"
          mb={2}
          mt={2}
          mr={2}
          ml={2}
          borderRadius="5"
          borderColor={color[colorMode]}
          borderWidth="2px"
          borderStyle="solid"
        />
      </Horizontal>
    </>
  );
};

export default PictureAndName;
