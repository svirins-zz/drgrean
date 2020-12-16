import { Layout, SEO } from "components/layout";
import { Contact } from "components/ui";
import React from "react";

const ContactPage = (): JSX.Element => {
  return (
    <>
      <SEO seoTitle="Contact us" seoDescription="some text" />
      <Layout>
        TBD !
        <Contact />
      </Layout>
    </>
  );
};

export default ContactPage;
