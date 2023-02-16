import styled from "@emotion/styled";
import { useColorMode, Button, Flex, Box } from "@chakra-ui/react";
import NextLink from "next/link";
import DarkModeSwitch from "../components/DarkModeSwitch";
import { bgColor, navHoverBg, color } from "../styles/colors";

const Navbar: React.FC = () => {
  const { colorMode } = useColorMode();

  const StickNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop=filter: saturate(180%) blur(20px),
    transition: height .5s, line-height: .5s;
    `;

  return (
    <>
      <StickNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="800px"
        width="100%"
        bg={bgColor[colorMode]}
        as="nav"
        px={[2, 6, 6]}
        py={2}
        mt={8}
        mb={[0, 0, 8]}
        mx="auto"
        borderRadius={20}
      >
        <Box>
          {/* <NextLink href="/" passHref> */}
          <Button
            ml={5}
            mr={5}
            as="a"
            variant="ghost"
            p={[1, 2, 4]}
            _hover={{ backgroundColor: navHoverBg[colorMode] }}
            color={color[colorMode]}
          >
            Home
          </Button>
          {/* </NextLink> */}
          {/* <NextLink href="/resume" passHref> */}
          <Button
            ml={5}
            mr={5}
            as="a"
            variant="ghost"
            p={[1, 2, 4]}
            _hover={{ backgroundColor: navHoverBg[colorMode] }}
            color={color[colorMode]}
          >
            Resume
          </Button>
          {/* </NextLink> */}
        </Box>
        <DarkModeSwitch />
      </StickNav>
    </>
  );
};

export default Navbar;
