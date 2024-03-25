import NoSsr from "../src/components/NoSsr";

import type { NextPage } from "next";
import PDFDisplay from "../src/components/PDFDisplay";

const ResumePDFPage: NextPage = () => {
  return (
    <NoSsr>
      <PDFDisplay file="https://raw.githubusercontent.com/ethmth/resume/main/EthanThomasResume.pdf" />
    </NoSsr>
  );
};

export default ResumePDFPage;
