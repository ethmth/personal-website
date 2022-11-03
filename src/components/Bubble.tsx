import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

const Bubble: React.FC<PropsWithChildren> = ({ children }) => {
  const BubbleDiv = styled.div`
    background-color: red;
    padding-top: 1em;
    padding-bottom: 1em;
    width: 100%;
  `;

  return <BubbleDiv>{children}</BubbleDiv>;
};

export default Bubble;
