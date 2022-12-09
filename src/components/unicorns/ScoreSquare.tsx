import { Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";

interface ScoreProps {
  team: string;
  score: string;
}

const ScoreSquare: React.FC<ScoreProps> = (props): JSX.Element => {
  const squareColor = () => {
    switch (props.team) {
      case "1": {
        return "teal";
      }
      case "2": {
        return "darkred";
      }
      case "3": {
        return "orange";
      }
      case "4": {
        return "purple";
      }
    }
  };

  const textColor = () => {
    switch (props.team) {
      case "1": {
        return "white";
      }
      case "2": {
        return "white";
      }
      case "3": {
        return "white";
      }
      case "4": {
        return "white";
      }
    }
  };

  const ColoredDiv = styled.div`
    background-color: ${squareColor};
    width: 50vw;
    height: 50vh;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 0;
    text-align: center;
    color: ${textColor};
  `;

  return (
    <ColoredDiv>
      <Heading as="h2" mt={"5%"} fontSize={"4em"}>
        {props.team}
      </Heading>
      <Heading as="h1" fontSize={"8em"} mt={"10%"}>
        {props.score}
      </Heading>
    </ColoredDiv>
  );
};

export default ScoreSquare;
