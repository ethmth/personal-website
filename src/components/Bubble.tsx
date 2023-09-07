import styled from "@emotion/styled";
import { useColorMode } from "@chakra-ui/react";
import { PropsWithChildren, useEffect, useState } from "react";
import { bgColor } from "../styles/colors";

const Bubble: React.FC<PropsWithChildren> = ({ children }) => {
  const { colorMode } = useColorMode();

  const maxWidth = "650px";

  const isClientMobile = () => {
    return typeof window !== "undefined" &&
      window.matchMedia(`(max-width: ${maxWidth})`).matches
      ? true
      : false;
  };
  const [mobile, setMobile] = useState(isClientMobile());

  useEffect(() => {
    function handleResize() {
      console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
      setMobile(isClientMobile());
    }

    window.addEventListener("resize", handleResize);
  });

  const BubbleDiv = styled.div`
    background-color: ${bgColor[colorMode]};
    padding-top: 1.5em;
    padding-bottom: 1.5em;
    padding-left: 1em;
    padding-right: 1em;
    border-radius: 30px;
    width: 100%;

    font-size: ${mobile ? `16px` : `24px`};
    h3 {
      font-size: ${mobile ? `24px` : `32px`};
    }
  `;

  return <BubbleDiv>{children}</BubbleDiv>;
};

export default Bubble;
