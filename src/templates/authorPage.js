import { AuthorPage } from "components/templates";
import { graphql } from "gatsby";
import React from "react";

// eslint-disable-next-line react/display-name
export default ({ data }) => {
  return <AuthorPage data={data} />;
};

export const query = graphql`
  query($slug: String!) {
    allContentfulAuthor(filter: { slug: { eq: $slug } }) {
      nodes {
        name
        slug
        id
        social
        avatar {
          fluid(maxWidth: 800, toFormat: WEBP) {
            src
          }
        }
        personal_info {
          childMarkdownRemark {
            html
          }
        }
        post {
          slug
          title
          body {
            id
          }
          excerpt
          tags {
            slug
            tagName
          }
        }
      }
    }
  }
`;
