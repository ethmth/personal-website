import { Image, Heading, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";

const PictureAndName: React.FC = () => {
  const Horizontal = styled(Flex)`
    top: 0;
  `;

  return (
    <>
      <Horizontal
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        // maxWidth="50%"
        // width="100%"
        // px={[2, 6, 6]}
        // py={2}
        // mt={8}
        // mb={[0, 0, 8]}
        // mx="auto"
        // backgroundColor="green"
      >
        <Heading as="h1" size="4xl" mb={4} mr={10} maxWidth="50%">
          Hi, I am Ethan Thomas
        </Heading>
        <Image
          ml={10}
          //   maxWidth="300px"
          mt={5}
          src="/images/Ethann.jpg"
          alt="A Picture of Me"
          maxWidth="50%"
          // mr={2}
        />
      </Horizontal>
    </>
  );
};

export default PictureAndName;
