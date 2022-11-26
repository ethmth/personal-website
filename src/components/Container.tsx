import React from "react";

import styled from "@emotion/styled";

import { PropsWithChildren } from "react";
import Navbar from "./Navbar";

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  const DivFull = styled.div`
    margin: 0;
    minwidth: 100%;
    width: 100%;
  `;

  const DivSide = styled.div`
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
  `;

  return (
    <DivFull>
      <DivSide>
        <Navbar />
        {children}
      </DivSide>
    </DivFull>
  );
};

export default Container;
