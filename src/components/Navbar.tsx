import styled from "@emotion/styled";
import { useColorMode, Button, Flex, Box } from "@chakra-ui/react";
import NextLink from "next/link";
import DarkModeSwitch from "../components/DarkModeSwitch";

interface BGColor {
  light: string;
  dark: string;
}

const Navbar: React.FC<BGColor> = ({ light, dark }: BGColor) => {
  const { colorMode } = useColorMode();

  const StickNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop=filter: saturate(180%) blur(20px),
    transition: height .5s, line-height: .5s;
    `;

  const navHoverBg = {
    light: "gray.600",
    dark: "gray.300",
  };

  const bgColor = {
    light: light,
    dark: dark,
  };

  return (
    <>
      <StickNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="800px"
        minWidth="356px"
        width="100%"
        bg={bgColor[colorMode]}
        as="nav"
        px={[2, 6, 6]}
        py={2}
        mt={8}
        mb={[0, 0, 8]}
        mx="auto"
      >
        <Box>
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Home
            </Button>
          </NextLink>
          <NextLink href="/resume" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Resume
            </Button>
          </NextLink>
        </Box>
        <DarkModeSwitch />
      </StickNav>
    </>
  );
};

export default Navbar;
