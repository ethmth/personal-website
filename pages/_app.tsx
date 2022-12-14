import type { AppProps } from "next/app";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import theme from "../src/styles/theme";
import { Global, css } from "@emotion/react";
import { PropsWithChildren } from "react";
import { useColorMode } from "@chakra-ui/react";
import { conColor } from "../src/styles/colors";

const GlobalStyle: React.FC<PropsWithChildren> = ({ children }) => {
  const { colorMode } = useColorMode();
  const bgColor = conColor;

  return (
    <>
      <Global
        styles={css`
          ::selection {
            background-color: #90cdf4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === "light" ? bgColor.light : bgColor.dark};
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{ initialColorMode: "dark", useSystemColorMode: false }}
      >
        <GlobalStyle>
          <Component {...pageProps}></Component>
        </GlobalStyle>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
