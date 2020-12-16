import { MENU_ITEMS } from "const";
import { Link } from "gatsby";
import React from "react";
import tw from "twin.macro";

const Navigation = tw.nav`text-gray-900 tracking-widest text-sm font-bold lg:flex items-center hidden uppercase`;
const MenuItem = tw.span`py-2 px-8 hover:underline`;

export const HeaderMenu = (): JSX.Element => {
  const displayMenu = MENU_ITEMS.map((menuItem, index) => {
    return (
      <MenuItem key={index}>
        <Link to={menuItem.link} key={index} activeClassName={"text-red-300"}>
          {menuItem.name}
        </Link>
      </MenuItem>
    );
  });
  return (
    <Navigation id="header_menu" role="horizontal_menu">
      {displayMenu}
    </Navigation>
  );
};
