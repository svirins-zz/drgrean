import { PageContainer, PageLayout, SEO } from "components/layout";
import { Footer } from "components/ui";
import React from "react";

const IndexPage = (): JSX.Element => {
  return (
    <PageLayout>
      <SEO title="I AM" />
      <PageContainer>
        <Footer />
      </PageContainer>
    </PageLayout>
  );
};

export default IndexPage;
