import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const HomePage: React.FC = () => {
  const [counter, setCounter] = useState(0);

  const MyFunc = () => {
    console.log("rendered");
  };

  useEffect(() => console.log("first"), []);

  const epicFunction = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <div>
      <h1>Ethan Thomas</h1>
      <p>Hi my name is Ethan. 20M looking for hot signles in the area.</p>
      <h2>{counter}</h2>
      <Button onClick={epicFunction}>Push Me</Button>
    </div>
  );
};

export default HomePage;
