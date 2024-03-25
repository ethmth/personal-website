import styled from "@emotion/styled";
import { useColorMode, Button, Flex, Box, Heading } from "@chakra-ui/react";
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
          <NextLink href="/" passHref>
            <Button
              ml={5}
              mr={5}
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
              color={color[colorMode]}
            >
              Home
            </Button>
          </NextLink>
          <NextLink href="https://blog.ethanmt.com/" passHref>
            <Button
              ml={5}
              mr={5}
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
              color={color[colorMode]}
            >
              Blog&nbsp;
              <svg
                fill="none"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                height="12"
                width="12"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                <path d="M15 3h6v6"></path>
                <path d="M10 14L21 3"></path>
              </svg>
            </Button>
          </NextLink>
        </Box>
        {/* <Heading as="h6" size="s">
          ethan@smaze.net
        </Heading> */}
        <DarkModeSwitch />
      </StickNav>
    </>
  );
};

export default Navbar;
