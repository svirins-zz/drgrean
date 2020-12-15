import { Layout, SEO } from "components/layout";
import React from "react";

export const AuthorPage = ({ data }): JSX.Element => {
  return (
    <>
      <SEO
        seoTitle={data.allContentfulAuthor.nodes[0].name}
        seoDescription={data.allContentfulAuthor.nodes[0].personal_info.childMarkdownRemark.html.substring(
          0,
          100
        )}
      />
      <Layout>
        <h1>data.allContentfulAuthor.nodes[0].name</h1>
      </Layout>
    </>
  );
};
