import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "@emotion/styled";

import {
  faDocker,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Socials: React.FC = () => {
  const iconSize = "3x";

  const IconLink = styled.a`
    margin-left: 1em;
    margin-right: 1em;
  `;

  return (
    <div>
      <IconLink href="https://github.com/ethmth" target="_blank">
        <FontAwesomeIcon icon={faGithub} size={iconSize} />
      </IconLink>
      <IconLink href="https://www.linkedin.com/in/ethanmt/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} size={iconSize} />
      </IconLink>
      <IconLink href="https://hub.docker.com/u/ethmth" target="_blank">
        <FontAwesomeIcon icon={faDocker} size={iconSize} />
      </IconLink>
    </div>
  );
};

export default Socials;
