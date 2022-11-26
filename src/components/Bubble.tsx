import styled from "@emotion/styled";
import { Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const Bubble: React.FC<PropsWithChildren> = ({ children }) => {
  const BubbleDiv = styled.div`
    background-color: red;
    padding-top: 1em;
    padding-bottom: 1em;
    width: 100%;
  `;

  // return <BubbleDiv>{children}</BubbleDiv>;
  return (
    <Flex
      as="main"
      justifyContent="center"
      flexDirection="column"
      // bg={bgColor[colorMode]}
      // color={color[colorMode]}
      px={[0, 4, 4]}
      mt={[4, 8, 8]}
      borderRadius={20}
      backgroundColor="orange"
    >
      {children}
    </Flex>
  );
};

export default Bubble;
