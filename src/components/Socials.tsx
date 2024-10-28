import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";

import { Button } from "@chakra-ui/react";

import {
  faDocker,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { faFile } from "@fortawesome/free-regular-svg-icons";

const Socials: React.FC = () => {
  const iconSize = "2x";

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
      setMobile(isClientMobile());
    }

    window.addEventListener("resize", handleResize);
  });

  const IconDiv = styled.div`
    display: flex;
    flex-direction: ${mobile ? "column" : "row"};
    align-items: center;
    justify-content: center;
  `;

  const IconLink = styled.a`
    margin-left: 1em;
    margin-right: 1em;
  `;

  const StyledButton = styled(Button)`
    margin-top: 1em;
  `;

  return (
    <IconDiv>
      <IconLink href="https://www.linkedin.com/in/ethanmt/" target="_blank">
        <StyledButton
          onClick={void 0}
          leftIcon={<FontAwesomeIcon icon={faLinkedin} size={iconSize} />}
          colorScheme="blue"
          variant="solid"
          size="lg"
        >
          LinkedIn
        </StyledButton>
      </IconLink>
      {/* <IconLink href="https://www.linkedin.com/in/ethanmt/" target="_blank">
        <StyledButton
          onClick={void 0}
          leftIcon={<FontAwesomeIcon icon={faLinkedin} size={iconSize} />}
          colorScheme="blue"
          variant="solid"
          size="lg"
        >
          Github
        </StyledButton>
      </IconLink> */}
      <IconLink href="/reactive_resume" target="_blank">
        <StyledButton
          onClick={void 0}
          leftIcon={<FontAwesomeIcon icon={faFile} size={iconSize} />}
          colorScheme="gray"
          variant="solid"
          size="lg"
        >
          Resume
        </StyledButton>
      </IconLink>

      <IconLink href="https://github.com/ethmth" target="_blank">
        <StyledButton
          onClick={void 0}
          leftIcon={<FontAwesomeIcon icon={faGithub} size={iconSize} />}
          colorScheme="teal"
          variant="solid"
          size="lg"
        >
          Github
        </StyledButton>
      </IconLink>
    </IconDiv>
  );
};

export default Socials;
