import { Layout, SEO } from "components/layout";
import { Contact } from "components/ui";
import React from "react";

const AuthorsPage = (): JSX.Element => {
  return (
    <>
      <SEO seoTitle="Contact us" seoDescription="some text" />
      <Layout>
        TBD ! Authors list
        <Contact />
      </Layout>
    </>
  );
};

export default AuthorsPage;
