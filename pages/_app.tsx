import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import theme from "../src/styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{ initialColorMode: "light", useSystemColorMode: true }}
      >
        <Component {...pageProps}></Component>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
