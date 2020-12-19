// import { myContext } from "context";
import React from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

const Button = styled.button`
  ${tw`hover:shadow-md focus:outline-none lg:mr-1 lg:mb-0 px-4 py-2 mb-3 ml-3 text-xs font-bold uppercase rounded shadow outline-none`}
  transition: all .15s ease;
`;

// TODO: icon to button
export const ContactButton = (transparent: boolean): JSX.Element => {
  // const context = useContext(myContext);
  return (
    <Button
      className={
        (transparent
        ? "bg-white text-gray-800 active:bg-gray-100"
        : "bg-pink-500 text-white active:bg-pink-600")
      } 
      onClick={() => console.log("click")}
      type="button"
    >
      Contact US
    </Button>
  );
};
