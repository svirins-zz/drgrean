import { Layout, SEO } from "components/layout";
import React from "react";

const IndexPage = (): JSX.Element => {
  return (
    <>
      <SEO seoTitle="I AM" seoDescription="some text" />
      <Layout>
        <Header />
        <Hero />
        <Services />
        <LatestPosts />
        <GetInTouch />
        <Footer />
      </Layout>
    </>
  );
};

export default IndexPage;
