import {
  Button,
  DarkMode,
  Flex,
  Heading,
  Text,
  useColorMode,
  Switch,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const HomePage: React.FC = () => {
  const { toggleColorMode } = useColorMode();
  const [counter, setCounter] = useState(0);

  // Executes on first render, the second argument list
  // contains elements that cause useEffect to run when they change
  //useEffect(() => console.log("first render"), []);

  // Enables darkmode by default
  useEffect(() => toggleColorMode(), []);

  const [darkSwitchChecked, setDarkSwitchChecked] = useState(true);

  const darkModeToggled = () => {
    setDarkSwitchChecked((darkSwitchChecked) => !darkSwitchChecked);
    toggleColorMode();
  };

  const buttonPressed = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <>
      <Heading as="h1">Ethan Thomas</Heading>
      <Text>
        Hi my name is Ethan. Something really cool will go here some day.
      </Text>
      <Heading as="h6">{counter}</Heading>
      <Button onClick={buttonPressed}>Push Me</Button>
      <Switch isChecked={darkSwitchChecked} onChange={darkModeToggled}>
        Dark
      </Switch>
    </>
  );
};

export default HomePage;
