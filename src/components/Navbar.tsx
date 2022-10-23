import styled from "@emotion/styled";
import { useColorMode, Button, Flex, Box } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar: React.FC = () => {
  const StickNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop=filter: saturate(180%) blur(20px),
    transition: height .5s, line-height: .5s;
    `;

  const bgColor = {
    light: "white",
    dark: "#171717",
  };

  return (
    <>
      <StickNav>
        <Box>
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" p={[1, 2, 4]}>
              Home
            </Button>
          </NextLink>
        </Box>
      </StickNav>
    </>
  );
};

export default Navbar;
