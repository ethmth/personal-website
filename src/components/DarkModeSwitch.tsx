import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import React from "react";
import { color } from "../styles/colors";

const DarkModeSwitch: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = color;

  return (
    <IconButton
      aria-label="Toggle dark mode"
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
      color={iconColor[colorMode]}
    />
  );
};

export default DarkModeSwitch;
