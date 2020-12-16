import { Layout, SEO } from "components/layout";
import { Contact, Footer, Header, Hero, Latest, Services } from "components/ui";
import React from "react";

const IndexPage = (): JSX.Element => {
  return (
    <>
      <SEO seoTitle="I AM" seoDescription="some text" />
      <Layout>
        <Header />
        <Hero />
        <Services />
        <Latest />
        <Contact />
        <Footer />
      </Layout>
    </>
  );
};

export default IndexPage;
