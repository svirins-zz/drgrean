import { Footer, Header } from "components/ui";
import React from "react";
import tw from "twin.macro";
import { GlobalStyles } from "twin.macro";

const Container = tw.main`w-screen min-h-screen bg-nord0`;

export const Layout = ({
  children,
}: React.PropsWithChildren<unknown>): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </>
  );
};
