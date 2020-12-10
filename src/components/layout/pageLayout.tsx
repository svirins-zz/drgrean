import React from "react";
import tw from "twin.macro";
import { GlobalStyles } from "twin.macro";

import styled from "@emotion/styled";

import { MainMenu } from "./mainMenu";

const Wrapper = styled.div`
  ${tw`grid gap-1`}
  background-color: #101010;
  grid-template-columns:
    minmax(5rem, 0.5fr)
    repeat(3, minmax(10rem, 1fr))
    minmax(5rem, 0.5fr);
  grid-template-rows:
    repeat(4, minmax(10rem, auto))
    auto auto auto;
`;

export const PageLayout = ({
  children,
}: React.PropsWithChildren<unknown>): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <MainMenu />
      <Wrapper>{children}</Wrapper>
    </>
  );
};
