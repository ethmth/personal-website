"use client";

import NoSsr from "./NoSsr";
import { Document } from "react-pdf";
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PDFDisplayProps {
  file: string;
}

const PDFDisplay: React.FC<PDFDisplayProps> = (props) => {
  return (
    <NoSsr>
      <Document file={props.file}></Document>
    </NoSsr>
  );
};

export default PDFDisplay;
