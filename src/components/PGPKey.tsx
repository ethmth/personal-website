import styled from "@emotion/styled";
import { Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import { faLock } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const iconSize = "2x";

const TextArea = styled.textarea`
  width: 550px;
  height: 200px;

  font-size: 14px;

  border: solid black 1px;
`;

const StyledButton = styled(Button)`
  margin-top: 1em;
`;

const PGPKey: React.FC = ({}) => {
  const [buttonShown, setButtonShown] = useState(false);

  function buttonClicked() {
    setButtonShown(!buttonShown);
  }
  return (
    <>
      <StyledButton
        onClick={buttonClicked}
        leftIcon={<FontAwesomeIcon icon={faLock as IconProp} size={iconSize} />}
        colorScheme="purple"
        variant="solid"
        size="lg"
      >
        PGP Key
      </StyledButton>
      {buttonShown ? (
        <TextArea readOnly={true}>
          {`-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEZhblxRYJKwYBBAHaRw8BAQdAHz62nMR4AOy+7s5rNhajvHoxwxhbc0mwYIY+
E0OguZ60HkV0aGFuIFRob21hcyA8ZXRoYW5Ac21hemUubmV0PoiZBBMWCgBBFiEE
IO/HObwTHjE/jcj9sbtNLfjBAlkFAmYW5cUCGwMFCQWjbDsFCwkIBwICIgIGFQoJ
CAsCBBYCAwECHgcCF4AACgkQsbtNLfjBAlnq3wEAoh2VMNPr0+DzPigR3M10rhkH
qb17yWC/FnE0qzVmL7sA/jA9g0+0OZUA5e19npSF5d9qk8yUAPnfyzsrpNF3m/4B
uDgEZhblxRIKKwYBBAGXVQEFAQEHQLXcDGWQDOEcPEIiDpuZjJUn9OAMl2R2hY6q
9cqUAXwJAwEIB4h+BBgWCgAmFiEEIO/HObwTHjE/jcj9sbtNLfjBAlkFAmYW5cUC
GwwFCQWjbDsACgkQsbtNLfjBAlmFEgEApfyN8HPD6NyBu7LuUFb9QZf4/NYwm5Kn
PvavSI3SJLkBANdHopJOcwDMoarzXY1Pm/Euhl0Y9iNKcwSYgajHOfMF
=keU3
-----END PGP PUBLIC KEY BLOCK-----`}
        </TextArea>
      ) : (
        <></>
      )}
    </>
  );
};

export default PGPKey;
