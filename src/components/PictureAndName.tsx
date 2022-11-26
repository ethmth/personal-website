import { Image, Heading, Flex, useColorMode } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { bgColor } from "../styles/colors";

const PictureAndName: React.FC = () => {
  const { colorMode } = useColorMode();
  const Horizontal = styled(Flex)`
    top: 0;
  `;

  return (
    <>
      <Horizontal
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="100%"
        px={[2, 6, 6]}
        py={2}
        mt={8}
        mx="auto"
        backgroundColor={bgColor[colorMode]}
        borderRadius="50"
      >
        <Heading as="h1" size="4xl" mb={4} mr={10} maxWidth="50%">
          Hi, I am Ethan Thomas
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
    </>
  );
};

export default PictureAndName;
