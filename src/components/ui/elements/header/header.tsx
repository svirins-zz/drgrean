import { MENU_ITEMS } from "const";
import { Link } from "gatsby";
import React, { useState } from "react";
import tw from "twin.macro";

import { ContactButton } from "./contactButton";
import { DarkModeSwitch } from "./darkModeSwitch";

const Container = tw.header`container px-4 mx-auto flex flex-wrap items-center justify-between`;
const SubContainer = tw.header`lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none`;
const LogoContainer = tw.section`w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start`;
const NavButton = tw.button`cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none`
const NavBar = tw.nav`flex flex-wrap items-center justify-between px-2 py-3`
const ALink = tw.a`text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase`
const UL = tw.ul`lg:flex-row lg:ml-auto flex flex-col list-none`;
const LI = tw.ul`flex items-center`;
const MenuLink = tw.a`px-3 py-4 lg:py-2 flex items-center text-base uppercase font-bold text-white`

export const Header = (transparent: boolean): JSX.Element => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const MenuItems = MENU_ITEMS.map((menuItem, index) => {
    return (
      <LI key={index}>
      <MenuLink key={index}>
        <Link to={menuItem.link} key={index} activeClassName={"text-pink-600"}>
          {menuItem.name}
        </Link>
      </MenuLink>
      </LI>
    );
  });

  return(
    <>
      <NavBar
        className={
          (transparent
            ? "top-0 absolute z-50 w-full"
            : "relative shadow-lg bg-white")
        }
      >
        <Container>
          <LogoContainer>
            <ALink
              className={
                (transparent ? "text-white" : "text-gray-800")
              }
              href="https://addict.cf"
            >
              Addiction Recovery Portal
            </ALink>
            <NavButton
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i
              className={
                (transparent ? "text-white" : "text-gray-800") +
                " fas fa-bars"
              }
              ></i>
            </NavButton>
          </LogoContainer>
          <SubContainer
            className={
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <UL>
              {MenuItems}
              <LI>
                <ContactButton transparent/>
              </LI>
              <LI>
                <DarkModeSwitch /> 
              </LI>
            </UL>

          </SubContainer>
        </Container>
      </NavBar> 
    </>
  );
};

