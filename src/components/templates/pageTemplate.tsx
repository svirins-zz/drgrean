import { PageLayout, SEO } from "components/layout";

import { Footer, PageContainer } from "components/ui";
import React from "react";

import styled from "@emotion/styled";


export const Page = (data): JSX.Element => {
  const { frontmatter } = data.pageData.allMarkdownRemark.edges[0].node;
  return (
    <>
      <SEO title="Design" />
      <PageContainer>
        
        <Footer />
      </PageContainer>
    </>
  );
};
