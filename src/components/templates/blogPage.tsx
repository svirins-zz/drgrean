import { Layout, SEO } from "components/layout";
import React from "react";

export const BlogPage = ({ data }): JSX.Element => {
  return (
    <>
      <SEO
        seoTitle={data.allContentfulPost.nodes[0].title}
        seoDescription={data.allContentfulPost.nodes[0].excerpt}
      />
      <Layout>
        <h1>{data.allContentfulPost.nodes.title}</h1>
      </Layout>
    </>
  );
};
