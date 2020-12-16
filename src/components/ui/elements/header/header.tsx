import { HeaderMenu } from "components/ui/menu";
import React from "react";
import tw from "twin.macro";

import { DarkModeSwitch } from "./darkModeSwitch";
import { NavButton } from "./navButton";

const Container = tw.header`h-24 sm:h-32 flex items-center`;
const SubContainer = tw.header`container mx-auto pl-8 flex items-center justify-between`;
const LogoContainer = tw.section`uppercase text-blue-700 flex flex-col items-center`;
const MenuContainer = tw.section`flex items-center`;

export const Header = (): JSX.Element => {
  return (
    <Container>
      <SubContainer>
        <LogoContainer>
          <div className="text-2xl">
            ADDICT<strong className="font-bold">.CF</strong>
          </div>
          <small className="tracking-widest">
            Blog and addiction treatment
          </small>
        </LogoContainer>
        <MenuContainer>
          <HeaderMenu />
          <DarkModeSwitch />
          <NavButton />
        </MenuContainer>
      </SubContainer>
    </Container>
  );
};
