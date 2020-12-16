import menuButton from "assets/menu.svg"
import { myContext } from "context";
import React, { useContext } from "react";
import tw from "twin.macro";

const Button = tw.button`ml-4 w-6 h-6 flex flex-col lg:hidden mr-8`;

export const NavButton = (): JSX.Element => {
  const context = useContext(myContext);
  return (
    <Button onClick={context.showFullscreenMenu}>
      <img src={menuButton} alt="toggle menu" />
    </Button>
  );
};
