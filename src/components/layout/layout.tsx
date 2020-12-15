import React from "react";
import tw from "twin.macro";
import { GlobalStyles } from "twin.macro";

import { Footer, Header } from "../ui";

const Container = tw.main`w-screen min-h-screen`;

export const Layout = ({
  children,
}: React.PropsWithChildren<unknown>): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <Container>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </Container>
    </>
  );
};
