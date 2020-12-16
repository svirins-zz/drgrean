import { Footer, Header } from "components/ui";
import { FullscreenMenu } from "components/ui/menu";
import React from "react";
import tw from "twin.macro";
import { GlobalStyles } from "twin.macro";

const Container = tw.main`w-screen min-h-screen bg-white`;

export const Layout = ({
  children,
}: React.PropsWithChildren<unknown>): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <FullscreenMenu />
        <Header />
        {children}
        <Footer />
      </Container>
    </>
  );
};
