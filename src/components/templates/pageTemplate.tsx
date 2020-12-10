import { Footer, PageLayout, SEO } from "components/layout";
import React from "react";

import styled from "@emotion/styled";

export const Page = (data): JSX.Element => {
  return (
    <>
      <SEO title="Design" />
      <PageLayout>
        Wow
        <Footer />
      </PageLayout>
    </>
  );
};
