import { Text, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";

interface ScoreProps {
  team: string;
  score: string;
}

const ScoreSquare: React.FC<ScoreProps> = (props): JSX.Element => {
  const squareColor = () => {
    switch (props.team) {
      case "red": {
        return "#ff0000";
      }
      case "blue": {
        return "#0000ff";
      }
      default: {
        return "#000000";
      }
    }
  };

  const ColoredDiv = styled.div`
    background-color: ${squareColor};
    width: 50vw;
    height: 50vh;
    position: absolute;
    // z-index: -1;
    text-align: center;
  `;

  return (
    <ColoredDiv>
      <Heading as="h2" mt={"20%"} fontSize={"5em"}>
        {props.team}
      </Heading>
      <Heading as="h1" fontSize={"10em"} mt={"10%"}>
        {props.score}
      </Heading>
    </ColoredDiv>
  );
};

export default ScoreSquare;
