import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "@emotion/styled";

import { Button } from "@chakra-ui/react";

import {
  faDocker,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { faFile } from '@fortawesome/free-regular-svg-icons';

const Socials: React.FC = () => {
  const iconSize = "2x";

  const IconLink = styled.a`
    margin-left: 1em;
    margin-right: 1em;
  `;

  //   const StyledLink = styled.a`
  //   margin-top: 1em;
  // `;

  const StyledButton = styled(Button)`
margin-top: 1em;
`

  return (
    <div>
      {/* <StyledLink href="/resume_pdf" target="_blank">
        <Button>Resume</Button>
        <FontAwesomeIcon icon={faGithub} size={iconSize} />

      </StyledLink> */}
      <IconLink href="/resume_pdf" target="_blank">
        <StyledButton onCLick={(void (0))} leftIcon={<FontAwesomeIcon icon={faFile} size={iconSize} />} colorScheme='blue' variant='solid' size='lg'>
          Resume
        </StyledButton>
      </IconLink>
      <IconLink href="https://github.com/ethmth" target="_blank">
        <StyledButton onCLick={(void (0))} leftIcon={<FontAwesomeIcon icon={faGithub} size={iconSize} />} colorScheme='teal' variant='solid' size='lg'>
          Github
        </StyledButton>
      </IconLink>
      <IconLink href="https://www.linkedin.com/in/ethanmt/" target="_blank">
        <StyledButton onCLick={(void (0))} leftIcon={<FontAwesomeIcon icon={faLinkedin} size={iconSize} />} colorScheme='linkedin' variant='solid' size='lg'>
          LinkedIn
        </StyledButton>
      </IconLink>
      {/* <IconLink href="https://github.com/ethmth" target="_blank">
        <FontAwesomeIcon icon={faGithub} size={iconSize} />
      </IconLink>
      <IconLink href="https://www.linkedin.com/in/ethanmt/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} size={iconSize} />
      </IconLink>
      <IconLink href="https://hub.docker.com/u/ethmth" target="_blank">
        <FontAwesomeIcon icon={faDocker} size={iconSize} />
      </IconLink> */}
    </div>
  );
};

export default Socials;
