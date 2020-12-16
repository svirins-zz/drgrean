import moon from "assets/moon.svg";
import sun from "assets/sun.svg";
import { myContext } from "context";
import React, { useContext } from "react";
import tw from "twin.macro";
const Button = tw.button`ml-4 w-6 h-6 flex flex-col`;

// TODO: add switch animation
export const DarkModeSwitch = (): JSX.Element => {
  const context = useContext(myContext);
  const mode = context.darkMode.isDark ? moon : sun;
  return (
    <Button onClick={context.switchMode}>
      <img src={mode} alt="toggle dark mode" />
    </Button>
  );
};
