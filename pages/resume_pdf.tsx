import type { NextPage } from "next";
import styled from "@emotion/styled";

const IFrame = styled.iframe`
  width: 100vw;
  height: 100vh;
`;

const ResumePDFPage: NextPage = () => {
  return (
    <IFrame src="https://docs.google.com/gview?url=https://raw.githubusercontent.com/ethmth/resume/main/EthanThomasResume.pdf&embedded=true"></IFrame>
  );
};

export default ResumePDFPage;
