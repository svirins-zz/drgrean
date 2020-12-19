import { Layout, SEO } from "components/layout";
import { Authors, Contact, Hero, Latest, MainPage } from "components/ui";
import React from "react";

const IndexPage = (): JSX.Element => {
  return (
    <>
      <SEO seoTitle="I AM" seoDescription="some text" />
      <Layout>
        <Hero />
        <MainPage />
        <Authors />
        <Latest />
        <Contact />
      </Layout>
    </>
  );
};

export default IndexPage;
