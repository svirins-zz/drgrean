import { Layout, SEO } from "components/layout";
import { Contact, Hero, Latest, Services } from "components/ui";
import React from "react";

const IndexPage = (): JSX.Element => {
  return (
    <>
      <SEO seoTitle="I AM" seoDescription="some text" />
      <Layout>
        <Hero />
        <Services />
        <Latest />
        <Contact />
      </Layout>
    </>
  );
};

export default IndexPage;
