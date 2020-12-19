import { Footer, Header } from "components/ui";
import React from "react";
import tw from "twin.macro";
import { GlobalStyles } from "twin.macro";

const Container = tw.main`text-gray-800 antialiased`;

export const Layout = ({
  children,
}: React.PropsWithChildren<unknown>): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header transparent={true} />
        {children}
        <Footer />
      </Container>
    </>
  );
};
