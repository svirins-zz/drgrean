import { Layout, SEO } from "components/layout";
import { Contact, Services } from "components/ui";
import React from "react";

const TreatmentPage = (): JSX.Element => {
  return (
    <>
      <SEO seoTitle="Treatment" seoDescription="some text" />
      <Layout>
        <Services />
        TBD !
        <Contact />
      </Layout>
    </>
  );
};

export default TreatmentPage;
