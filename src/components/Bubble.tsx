import styled from "@emotion/styled";
import { useColorMode, Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const Bubble: React.FC<PropsWithChildren> = ({ children }) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "#ecedee",
    dark: "#202020",
  };

  const BubbleDiv = styled.div`
    background-color: ${bgColor[colorMode]};
    padding-top: 1em;
    // padding-top: 0;
    padding-bottom: 2em;
    margin-top: 1em;

    border-radius: 30px;
    width: 100%;
  `;

  return (
    <BubbleDiv>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        px={[0, 4, 4]}
        // mt={[4, 8, 8]}
        mt={[4, 8, 4]}
        borderRadius={20}
      >
        {children}
      </Flex>
    </BubbleDiv>
  );
};

export default Bubble;
