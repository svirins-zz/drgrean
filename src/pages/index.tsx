import { Footer, PageLayout, SEO } from "components/layout";
import React from "react";

const IndexPage = (): JSX.Element => {
  return (
    <>
      <SEO title="I AM" />
      <PageLayout>
        elements
        <Footer />
      </PageLayout>
    </>
  );
};

export default IndexPage;
