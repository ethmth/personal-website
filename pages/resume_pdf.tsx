import type { NextPage } from "next";
import PDFDisplay from "../src/components/PDFDisplay";

const ResumePDFPage: NextPage = () => {
  return (
    <PDFDisplay file="https://raw.githubusercontent.com/ethmth/resume/main/EthanThomasResume.pdf" />
  );
};

export default ResumePDFPage;
