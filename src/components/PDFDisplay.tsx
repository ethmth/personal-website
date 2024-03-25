"use client";

import { useState, useEffect } from "react";

import NoSsr from "./NoSsr";
import { Document, Page } from "react-pdf";

import styled from "@emotion/styled";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DocContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

interface PDFDisplayProps {
  file: string;
}

const PDFDisplay: React.FC<PDFDisplayProps> = (props) => {
  const [widthPDF, setWidthPDF] = useState(1000);

  function updateWidth() {
    setWidthPDF(window.innerWidth * 0.8);
  }

  useEffect(() => {
    window.addEventListener("resize", updateWidth);

    updateWidth();
  }, []);

  return (
    <NoSsr>
      <Container>
        <DocContainer>
          <Document file={props.file} options={options}>
            <Page key={1} pageNumber={1} width={widthPDF}></Page>
          </Document>
        </DocContainer>
      </Container>
    </NoSsr>
  );
};

export default PDFDisplay;
