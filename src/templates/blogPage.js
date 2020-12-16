import { BlogPage } from "components/templates";
import { graphql } from "gatsby";
import React from "react";

// eslint-disable-next-line react/display-name
export default ({ data }) => {
  return <BlogPage data={data} />;
};

export const query = graphql`
  query($slug: String!) {
    allContentfulPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        slug
        node_locale
        updatedAt(formatString: "MMM DD YYYY")
        body {
          childMarkdownRemark {
            html
            timeToRead
          }
        }
        excerpt
        hero {
          fluid(toFormat: WEBP, maxWidth: 1024) {
            src
          }
        }
        author {
          name
          slug
          avatar {
            fluid(toFormat: WEBP, maxWidth: 240) {
              src
            }
          }
        }
        tags {
          ... on ContentfulTag {
            tagName
            slug
            image {
              fluid(toFormat: WEBP, maxWidth: 120) {
                src
              }
            }
          }
        }
      }
    }
  }
`;
